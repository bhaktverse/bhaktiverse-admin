import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Supported voices with their characteristics
const voices = {
  'alloy': { gender: 'neutral', style: 'balanced', language: ['en', 'hi'] },
  'echo': { gender: 'male', style: 'calm', language: ['en'] },
  'fable': { gender: 'male', style: 'warm', language: ['en'] },
  'onyx': { gender: 'male', style: 'deep', language: ['en'] },
  'nova': { gender: 'female', style: 'bright', language: ['en'] },
  'shimmer': { gender: 'female', style: 'gentle', language: ['en'] }
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      operation, 
      text, 
      voice = 'alloy', 
      language = 'en',
      contentId,
      contentType,
      updateDatabase = false
    } = await req.json();

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openaiApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    // Get available voices
    if (operation === 'get_voices') {
      return new Response(JSON.stringify({
        success: true,
        voices: voices
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Generate audio from text
    if (operation === 'generate_audio') {
      if (!text) {
        throw new Error('Text is required for audio generation');
      }

      // Validate voice selection
      if (!voices[voice]) {
        throw new Error(`Unsupported voice: ${voice}. Available voices: ${Object.keys(voices).join(', ')}`);
      }

      console.log(`Generating audio for text length: ${text.length} characters with voice: ${voice}`);

      // Split long text into chunks (OpenAI TTS has a limit)
      const maxChunkLength = 4096;
      const textChunks = [];
      
      if (text.length > maxChunkLength) {
        // Split by sentences to maintain natural flow
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
        let currentChunk = '';
        
        for (const sentence of sentences) {
          if ((currentChunk + sentence).length > maxChunkLength && currentChunk.length > 0) {
            textChunks.push(currentChunk.trim());
            currentChunk = sentence;
          } else {
            currentChunk += (currentChunk ? '. ' : '') + sentence;
          }
        }
        
        if (currentChunk.trim().length > 0) {
          textChunks.push(currentChunk.trim());
        }
      } else {
        textChunks.push(text);
      }

      const audioChunks = [];
      
      for (let i = 0; i < textChunks.length; i++) {
        const chunk = textChunks[i];
        console.log(`Processing chunk ${i + 1}/${textChunks.length}: ${chunk.substring(0, 100)}...`);

        const response = await fetch('https://api.openai.com/v1/audio/speech', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openaiApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'tts-1-hd', // Higher quality model
            input: chunk,
            voice: voice,
            response_format: 'mp3',
            speed: 1.0
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(`OpenAI TTS API error: ${errorData.error?.message || 'Unknown error'}`);
        }

        const arrayBuffer = await response.arrayBuffer();
        const base64Audio = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
        audioChunks.push(base64Audio);
      }

      // For multiple chunks, we'll return them as an array
      // In a real implementation, you might want to concatenate them
      const audioData = audioChunks.length === 1 ? audioChunks[0] : audioChunks;

      console.log(`Successfully generated audio with ${audioChunks.length} chunk(s)`);

      // Update database if requested
      if (updateDatabase && contentId && contentType) {
        try {
          const audioUrl = `data:audio/mp3;base64,${audioChunks[0]}`; // Store first chunk URL
          
          let updateData = {};
          switch (contentType) {
            case 'spiritual_content':
              updateData = { audio_pronunciation: audioUrl };
              break;
            case 'saints':
              updateData = { 
                audio_samples: [{ 
                  type: 'biography', 
                  url: audioUrl, 
                  voice: voice,
                  language: language,
                  duration: Math.ceil(text.length / 10) // Rough estimate
                }] 
              };
              break;
            case 'scriptures':
              updateData = { audio_url: audioUrl };
              break;
            default:
              console.log(`Database update not supported for content type: ${contentType}`);
              break;
          }

          if (Object.keys(updateData).length > 0) {
            const { error: updateError } = await supabase
              .from(contentType)
              .update(updateData)
              .eq('id', contentId);

            if (updateError) {
              console.error('Database update error:', updateError);
            } else {
              console.log(`Successfully updated ${contentType} record ${contentId} with audio`);
            }
          }
        } catch (dbError) {
          console.error('Database update failed:', dbError);
          // Don't fail the whole request if DB update fails
        }
      }

      return new Response(JSON.stringify({
        success: true,
        audioData: audioData,
        chunks: audioChunks.length,
        voice: voice,
        language: language,
        textLength: text.length,
        message: `Audio generated successfully with ${audioChunks.length} chunk(s)`
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Batch generate audio for multiple content items
    if (operation === 'batch_generate') {
      const { contentItems, batchVoice = 'alloy', batchLanguage = 'en' } = await req.json();
      
      if (!contentItems || !Array.isArray(contentItems)) {
        throw new Error('Content items array is required');
      }

      const results = [];
      const maxBatchSize = 5; // Limit batch size to prevent timeouts
      
      for (let i = 0; i < Math.min(contentItems.length, maxBatchSize); i++) {
        const item = contentItems[i];
        
        try {
          if (!item.text || item.text.length < 10) {
            continue; // Skip items with insufficient text
          }

          const truncatedText = item.text.substring(0, 1000); // Limit text length for batch processing
          
          const response = await fetch('https://api.openai.com/v1/audio/speech', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${openaiApiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: 'tts-1', // Faster model for batch processing
              input: truncatedText,
              voice: batchVoice,
              response_format: 'mp3',
              speed: 1.0
            }),
          });

          if (response.ok) {
            const arrayBuffer = await response.arrayBuffer();
            const base64Audio = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
            
            results.push({
              id: item.id,
              contentType: item.contentType,
              audioData: base64Audio,
              success: true
            });

            // Update database if content ID provided
            if (item.id && item.contentType) {
              const audioUrl = `data:audio/mp3;base64,${base64Audio}`;
              
              try {
                const { error: updateError } = await supabase
                  .from(item.contentType)
                  .update({ 
                    audio_pronunciation: audioUrl 
                  })
                  .eq('id', item.id);

                if (updateError) {
                  console.error(`Database update error for ${item.id}:`, updateError);
                }
              } catch (dbError) {
                console.error(`Database update failed for ${item.id}:`, dbError);
              }
            }
          } else {
            results.push({
              id: item.id,
              success: false,
              error: 'Audio generation failed'
            });
          }
        } catch (error) {
          console.error(`Error processing item ${item.id}:`, error);
          results.push({
            id: item.id,
            success: false,
            error: error.message
          });
        }
      }

      return new Response(JSON.stringify({
        success: true,
        message: `Processed ${results.length} items`,
        results: results,
        successCount: results.filter(r => r.success).length,
        failureCount: results.filter(r => !r.success).length
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    throw new Error(`Unsupported operation: ${operation}`);

  } catch (error) {
    console.error('Audio generator error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});