import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Pre-defined questions for each category
const predefinedQuestions = {
  devotional: [
    "What are the key principles of bhakti yoga?",
    "How to develop a daily spiritual practice?",
    "What is the significance of mantras in spiritual practice?",
    "How to cultivate devotion in daily life?",
    "What are the different forms of prayer in Hinduism?"
  ],
  philosophical: [
    "What is the concept of karma and how does it work?",
    "What is the difference between the soul and the mind?",
    "What is moksha and how can one achieve it?",
    "What is the meaning of dharma in daily life?",
    "How do the different schools of Vedanta differ?"
  ],
  practical: [
    "How to start meditation for beginners?",
    "What are the benefits of yoga practice?",
    "How to create a sacred space at home?",
    "What foods are considered sattvic?",
    "How to perform basic puja rituals?"
  ],
  ritual: [
    "What is the significance of aarti ceremony?",
    "How to perform Ganga aarti properly?",
    "What are the steps in traditional Hindu wedding?",
    "How to celebrate Diwali with authentic rituals?",
    "What is the proper way to visit a temple?"
  ],
  historical: [
    "Who were the key saints of the Bhakti movement?",
    "What is the history of major pilgrimage sites?",
    "How did yoga philosophy develop over time?",
    "What are the origins of classical Indian music?",
    "How did Buddhism spread from India to other countries?"
  ],
  scriptural: [
    "What are the main teachings of the Bhagavad Gita?",
    "How is the Ramayana relevant to modern life?",
    "What wisdom does the Upanishads offer?",
    "What are the key concepts in Buddhist sutras?",
    "How to understand the symbolism in Puranas?"
  ]
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { operation, category, question, language = 'en', targetTable } = await req.json();
    
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openaiApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    // Get predefined questions for a category
    if (operation === 'get_questions') {
      const questions = category ? predefinedQuestions[category] || [] : 
                      Object.values(predefinedQuestions).flat();
      
      return new Response(JSON.stringify({
        success: true,
        questions,
        categories: Object.keys(predefinedQuestions)
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Generate answer for a question
    if (operation === 'generate_answer') {
      if (!question) {
        throw new Error('Question is required');
      }

      // First, search existing database for similar questions
      const { data: existingFaqs } = await supabase
        .from('spiritual_faqs')
        .select('*')
        .ilike('question', `%${question.substring(0, 50)}%`)
        .limit(3);

      const contextFromDB = existingFaqs && existingFaqs.length > 0 
        ? `\nRelated content from database:\n${existingFaqs.map(faq => `Q: ${faq.question}\nA: ${faq.answer}`).join('\n\n')}`
        : '';

      const systemPrompt = `You are a knowledgeable spiritual teacher and scholar with deep understanding of world religions, particularly Hinduism, Buddhism, and related traditions. 

Your task is to provide comprehensive, accurate, and helpful answers to spiritual questions. Follow these guidelines:

1. Be authentic and culturally respectful
2. Provide practical guidance when applicable
3. Include relevant scriptural or traditional references
4. Explain complex concepts in accessible language
5. Acknowledge different perspectives where they exist
6. Avoid religious bias or fundamentalism
7. Focus on universal spiritual principles

Language: Provide the answer in ${language} language, but if specific Sanskrit/Pali terms are used, include them with proper transliteration.

${contextFromDB}`;

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
              content: `Please provide a comprehensive answer to this spiritual question: "${question}"`
            }
          ],
          max_tokens: 1500,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`OpenAI API error: ${errorData.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      const generatedAnswer = data.choices[0].message.content.trim();

      // Determine appropriate category and difficulty level
      const categoryMapping = {
        'bhakti': 'devotional',
        'devotion': 'devotional',
        'prayer': 'devotional',
        'mantra': 'devotional',
        'karma': 'philosophical',
        'dharma': 'philosophical',
        'moksha': 'philosophical',
        'soul': 'philosophical',
        'meditation': 'practical',
        'yoga': 'practical',
        'food': 'practical',
        'practice': 'practical',
        'aarti': 'ritual',
        'puja': 'ritual',
        'ceremony': 'ritual',
        'festival': 'ritual',
        'history': 'historical',
        'saint': 'historical',
        'origin': 'historical',
        'gita': 'scriptural',
        'ramayana': 'scriptural',
        'upanishad': 'scriptural',
        'sutra': 'scriptural'
      };

      const detectedCategory = Object.keys(categoryMapping).find(key => 
        question.toLowerCase().includes(key)
      );
      const finalCategory = detectedCategory ? categoryMapping[detectedCategory] : (category || 'philosophical');

      // Determine difficulty level based on question complexity
      const difficultyKeywords = {
        beginner: ['what is', 'how to start', 'basic', 'simple', 'introduction'],
        intermediate: ['how does', 'why', 'significance', 'meaning', 'practice'],
        advanced: ['philosophy', 'school', 'interpretation', 'analysis', 'deeper']
      };

      let difficultyLevel = 'intermediate';
      for (const [level, keywords] of Object.entries(difficultyKeywords)) {
        if (keywords.some(keyword => question.toLowerCase().includes(keyword))) {
          difficultyLevel = level;
          break;
        }
      }

      const qaEntry = {
        question: question.trim(),
        answer: generatedAnswer,
        category: finalCategory,
        difficulty_level: difficultyLevel,
        language: language,
        source_references: [],
        ai_generated: true,
        verified_by_scholar: false,
        popularity_score: 0
      };

      return new Response(JSON.stringify({
        success: true,
        qaEntry,
        message: 'Answer generated successfully'
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Save Q&A to database
    if (operation === 'save_qa') {
      const { qaData } = await req.json();
      
      if (!qaData) {
        throw new Error('Q&A data is required');
      }

      const { data: insertedData, error: insertError } = await supabase
        .from('spiritual_faqs')
        .insert([qaData])
        .select();

      if (insertError) {
        throw new Error(`Database insertion failed: ${insertError.message}`);
      }

      return new Response(JSON.stringify({
        success: true,
        message: 'Q&A saved to database successfully',
        data: insertedData[0]
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Batch process multiple questions
    if (operation === 'batch_process') {
      const { questions, batchCategory, batchLanguage = 'en' } = await req.json();
      
      if (!questions || !Array.isArray(questions)) {
        throw new Error('Questions array is required');
      }

      const results = [];
      
      for (const q of questions.slice(0, 5)) { // Limit to 5 questions per batch
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
                  content: `You are a spiritual teacher. Provide concise but comprehensive answers in ${batchLanguage} language.`
                },
                {
                  role: 'user',
                  content: `Answer this spiritual question: "${q}"`
                }
              ],
              max_tokens: 800,
              temperature: 0.7,
            }),
          });

          if (response.ok) {
            const data = await response.json();
            const answer = data.choices[0].message.content.trim();
            
            results.push({
              question: q,
              answer: answer,
              category: batchCategory || 'philosophical',
              difficulty_level: 'intermediate',
              language: batchLanguage,
              source_references: [],
              ai_generated: true,
              verified_by_scholar: false
            });
          }
        } catch (error) {
          console.error(`Error processing question "${q}":`, error);
        }
      }

      // Insert all results into database
      if (results.length > 0) {
        const { data: insertedData, error: insertError } = await supabase
          .from('spiritual_faqs')
          .insert(results)
          .select();

        if (insertError) {
          console.error('Batch insert error:', insertError);
        }
      }

      return new Response(JSON.stringify({
        success: true,
        message: `Processed ${results.length} questions successfully`,
        processedCount: results.length,
        results: results
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    throw new Error(`Unsupported operation: ${operation}`);

  } catch (error) {
    console.error('Smart Q&A system error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});