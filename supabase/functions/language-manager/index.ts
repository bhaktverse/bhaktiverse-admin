import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Supported languages and their configurations
const supportedLanguages = {
  'en': { name: 'English', nativeName: 'English', rtl: false, primary: true },
  'hi': { name: 'Hindi', nativeName: 'हिन्दी', rtl: false, primary: true },
  'sa': { name: 'Sanskrit', nativeName: 'संस्कृत', rtl: false, primary: true },
  'bn': { name: 'Bengali', nativeName: 'বাংলা', rtl: false, primary: false },
  'ta': { name: 'Tamil', nativeName: 'தமிழ்', rtl: false, primary: false },
  'te': { name: 'Telugu', nativeName: 'తెలుగు', rtl: false, primary: false },
  'gu': { name: 'Gujarati', nativeName: 'ગુજરાતી', rtl: false, primary: false },
  'mr': { name: 'Marathi', nativeName: 'मराठी', rtl: false, primary: false },
  'kn': { name: 'Kannada', nativeName: 'ಕನ್ನಡ', rtl: false, primary: false },
  'ml': { name: 'Malayalam', nativeName: 'മലയാളം', rtl: false, primary: false },
  'pa': { name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', rtl: false, primary: false },
  'or': { name: 'Odia', nativeName: 'ଓଡ଼ିଆ', rtl: false, primary: false },
  'as': { name: 'Assamese', nativeName: 'অসমীয়া', rtl: false, primary: false },
  'ur': { name: 'Urdu', nativeName: 'اردو', rtl: true, primary: false },
  'ne': { name: 'Nepali', nativeName: 'नेपाली', rtl: false, primary: false },
  'si': { name: 'Sinhala', nativeName: 'සිංහල', rtl: false, primary: false },
  'my': { name: 'Burmese', nativeName: 'မြန်မာ', rtl: false, primary: false },
  'th': { name: 'Thai', nativeName: 'ไทย', rtl: false, primary: false },
  'zh': { name: 'Chinese', nativeName: '中文', rtl: false, primary: false },
  'ja': { name: 'Japanese', nativeName: '日本語', rtl: false, primary: false },
  'ko': { name: 'Korean', nativeName: '한국어', rtl: false, primary: false },
  'vi': { name: 'Vietnamese', nativeName: 'Tiếng Việt', rtl: false, primary: false },
  'id': { name: 'Indonesian', nativeName: 'Bahasa Indonesia', rtl: false, primary: false },
  'ms': { name: 'Malay', nativeName: 'Bahasa Melayu', rtl: false, primary: false }
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      operation, 
      sourceLanguage = 'en', 
      targetLanguage, 
      text, 
      contentId, 
      contentType,
      batchTranslate = false
    } = await req.json();

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openaiApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    // Get supported languages
    if (operation === 'get_languages') {
      return new Response(JSON.stringify({
        success: true,
        languages: supportedLanguages,
        primaryLanguages: Object.entries(supportedLanguages)
          .filter(([_, config]) => config.primary)
          .reduce((acc, [code, config]) => ({ ...acc, [code]: config }), {})
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Translate text
    if (operation === 'translate') {
      if (!text || !targetLanguage) {
        throw new Error('Text and target language are required');
      }

      if (!supportedLanguages[targetLanguage]) {
        throw new Error(`Unsupported target language: ${targetLanguage}`);
      }

      console.log(`Translating from ${sourceLanguage} to ${targetLanguage}`);

      const sourceLanguageName = supportedLanguages[sourceLanguage]?.name || sourceLanguage;
      const targetLanguageName = supportedLanguages[targetLanguage]?.name || targetLanguage;

      const systemPrompt = `You are a professional translator specializing in spiritual and religious content. Translate accurately while preserving cultural context, spiritual terminology, and respectful tone.

Guidelines:
1. Maintain the spiritual and cultural context
2. Keep Sanskrit/Pali terms when appropriate, adding transliteration
3. Ensure respectful and accurate translation of religious concepts
4. Preserve the original meaning and tone
5. Use formal, respectful language appropriate for spiritual content
6. If translating names of deities, places, or concepts, provide both translated and original terms when helpful

Source language: ${sourceLanguageName}
Target language: ${targetLanguageName}

Return only the translated text, no additional commentary.`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: `Translate this text: "${text}"`
            }
          ],
          max_tokens: Math.min(4000, text.length * 2),
          temperature: 0.3, // Lower temperature for more consistent translations
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`OpenAI API error: ${errorData.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      const translatedText = data.choices[0].message.content.trim();

      // Update database if requested
      if (contentId && contentType) {
        try {
          // For regional names or multilingual content, we'll update appropriate fields
          let updateData = {};
          
          switch (contentType) {
            case 'saints':
              // Update regional_names field
              const { data: currentSaint } = await supabase
                .from('saints')
                .select('regional_names')
                .eq('id', contentId)
                .single();
              
              const regionalNames = currentSaint?.regional_names || {};
              regionalNames[targetLanguage] = translatedText;
              updateData = { regional_names: regionalNames };
              break;
              
            case 'spiritual_content':
            case 'spiritual_faqs':
              // Create a new record for the translated content
              const { data: originalContent } = await supabase
                .from(contentType)
                .select('*')
                .eq('id', contentId)
                .single();
              
              if (originalContent) {
                const translatedContent = {
                  ...originalContent,
                  id: undefined, // Let it generate new ID
                  language: targetLanguage,
                  content: translatedText,
                  title: originalContent.title ? `${originalContent.title} (${targetLanguageName})` : undefined,
                  question: originalContent.question ? translatedText : undefined,
                  answer: originalContent.answer ? translatedText : undefined
                };
                
                delete translatedContent.created_at;
                delete translatedContent.updated_at;
                
                await supabase
                  .from(contentType)
                  .insert([translatedContent]);
              }
              break;
              
            default:
              console.log(`Translation update not supported for content type: ${contentType}`);
              break;
          }

          if (Object.keys(updateData).length > 0) {
            const { error: updateError } = await supabase
              .from(contentType)
              .update(updateData)
              .eq('id', contentId);

            if (updateError) {
              console.error('Database update error:', updateError);
            }
          }
        } catch (dbError) {
          console.error('Database update failed:', dbError);
        }
      }

      return new Response(JSON.stringify({
        success: true,
        translatedText: translatedText,
        sourceLanguage: sourceLanguage,
        targetLanguage: targetLanguage,
        originalLength: text.length,
        translatedLength: translatedText.length
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Batch translate content from database
    if (operation === 'batch_translate') {
      const { table, sourceField, targetLanguages, limit = 10 } = await req.json();
      
      if (!table || !sourceField || !targetLanguages || !Array.isArray(targetLanguages)) {
        throw new Error('Table, source field, and target languages array are required');
      }

      // Get content to translate
      const { data: contentItems, error: fetchError } = await supabase
        .from(table)
        .select('*')
        .not(sourceField, 'is', null)
        .limit(limit);

      if (fetchError) {
        throw new Error(`Failed to fetch content: ${fetchError.message}`);
      }

      const results = [];
      
      for (const item of contentItems) {
        const sourceText = item[sourceField];
        if (!sourceText || sourceText.length < 10) continue;

        for (const targetLang of targetLanguages) {
          if (targetLang === sourceLanguage) continue;

          try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${openaiApiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                model: 'gpt-4o',
                messages: [
                  {
                    role: 'system',
                    content: `Translate spiritual content to ${supportedLanguages[targetLang]?.name || targetLang}. Maintain cultural context and respectful tone.`
                  },
                  {
                    role: 'user',
                    content: `Translate: "${sourceText.substring(0, 1000)}"` // Limit length for batch
                  }
                ],
                max_tokens: 1000,
                temperature: 0.3,
              }),
            });

            if (response.ok) {
              const data = await response.json();
              const translatedText = data.choices[0].message.content.trim();
              
              // Create translated record
              const translatedRecord = {
                ...item,
                id: undefined,
                language: targetLang,
                [sourceField]: translatedText
              };
              
              delete translatedRecord.created_at;
              delete translatedRecord.updated_at;
              
              const { data: insertedData, error: insertError } = await supabase
                .from(table)
                .insert([translatedRecord])
                .select();

              if (insertError) {
                console.error(`Insert error for ${targetLang}:`, insertError);
              } else {
                results.push({
                  originalId: item.id,
                  translatedId: insertedData[0].id,
                  targetLanguage: targetLang,
                  success: true
                });
              }
            }
          } catch (error) {
            console.error(`Translation error for ${targetLang}:`, error);
            results.push({
              originalId: item.id,
              targetLanguage: targetLang,
              success: false,
              error: error.message
            });
          }
        }
      }

      return new Response(JSON.stringify({
        success: true,
        message: `Batch translation completed`,
        processedItems: contentItems.length,
        translations: results.length,
        successCount: results.filter(r => r.success).length,
        results: results
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Get content by language
    if (operation === 'get_by_language') {
      const { table, language, limit = 20 } = await req.json();
      
      if (!table || !language) {
        throw new Error('Table and language are required');
      }

      const { data: content, error } = await supabase
        .from(table)
        .select('*')
        .eq('language', language)
        .limit(limit)
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(`Failed to fetch content: ${error.message}`);
      }

      return new Response(JSON.stringify({
        success: true,
        content: content,
        count: content.length,
        language: language,
        languageName: supportedLanguages[language]?.name || language
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    throw new Error(`Unsupported operation: ${operation}`);

  } catch (error) {
    console.error('Language manager error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});