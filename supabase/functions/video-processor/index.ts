import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { videoUrl, processingType = 'comprehensive' } = await req.json();

    if (!videoUrl) {
      throw new Error('Video URL is required');
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    console.log('Processing video:', videoUrl);

    // Extract video metadata and create spiritual analysis
    const analysisPrompt = `Analyze this spiritual/devotional video: ${videoUrl}

Please provide a comprehensive analysis including:
1. Key spiritual topics and themes discussed
2. Main teachings and wisdom shared
3. Practical spiritual advice given
4. Mantras, prayers, or chants mentioned
5. Generate 10-15 FAQ pairs based on the content
6. Create content chunks for database storage
7. Identify the spiritual tradition/path discussed
8. Extract any scripture references or quotes

Format the response as a structured analysis that can be used to populate a spiritual content database.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You are a spiritual content analyst specializing in Hindu/Indian devotional traditions. Analyze spiritual videos and extract meaningful content for a spiritual knowledge database.'
          },
          {
            role: 'user',
            content: analysisPrompt
          }
        ],
        max_tokens: 3000,
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const analysis = data.choices[0].message.content;

    // Generate structured data for database insertion
    const structurePrompt = `Based on this video analysis, generate structured JSON data for database insertion:

${analysis}

Create arrays for:
1. spiritual_faqs (question, answer, category, difficulty_level, language)
2. spiritual_content (title, content, content_type, category, tags, summary)
3. bhakti_shorts (title, description, category, tags, video_url)

Return as valid JSON with these three arrays.`;

    const structureResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'Return only valid JSON data for database insertion. No explanations.'
          },
          {
            role: 'user',
            content: structurePrompt
          }
        ],
        max_tokens: 2000,
        temperature: 0.2,
      }),
    });

    if (!structureResponse.ok) {
      throw new Error(`OpenAI structure API error: ${structureResponse.status}`);
    }

    const structuredData = await structureResponse.json();
    let parsedStructuredData;
    
    try {
      parsedStructuredData = JSON.parse(structuredData.choices[0].message.content);
    } catch (error) {
      console.error('Error parsing structured data:', error);
      // Fallback to raw analysis if JSON parsing fails
      parsedStructuredData = {
        analysis,
        spiritual_faqs: [],
        spiritual_content: [],
        bhakti_shorts: []
      };
    }

    const result = {
      success: true,
      videoUrl,
      analysis,
      structuredData: parsedStructuredData,
      timestamp: new Date().toISOString(),
      extractedData: {
        faqs: parsedStructuredData.spiritual_faqs || [],
        content: parsedStructuredData.spiritual_content || [],
        videos: parsedStructuredData.bhakti_shorts || []
      }
    };

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in video-processor:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});