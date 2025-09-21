import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt, table, targetCount = 5 } = await req.json();

    if (!prompt || !table) {
      throw new Error('Prompt and table are required');
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    console.log(`Generating ${targetCount} records for table: ${table}`);

    // Create detailed prompts based on table type
    const tablePrompts = {
      saints: `Generate ${targetCount} detailed records of real Hindu/Indian spiritual saints with authentic information. Include: name, tradition, biography (minimum 200 words), key_teachings (detailed), primary_language, birth_year, death_year, famous_quotes (array of 3-5 quotes), personality_traits (object with boolean values). Focus on well-documented saints like Kabir, Mirabai, Tulsidas, Guru Nanak, Ramana Maharshi, etc. Context: ${prompt}`,
      
      scriptures: `Generate ${targetCount} authentic Hindu/Indian scripture records with real information. Include: title, author, tradition, language, description (minimum 150 words), summary (minimum 100 words), type, total_chapters, difficulty_level. Focus on real scriptures like Bhagavad Gita, Ramayana, Mahabharata, Vedas, Upanishads, Puranas etc. Context: ${prompt}`,
      
      temples: `Generate ${targetCount} real Hindu temple records with accurate information. Include: name, primary_deity, tradition, description (minimum 200 words), history (minimum 150 words), location (object with city, state, country), visiting_hours (object), facilities (array). Focus on famous temples like Tirupati, Golden Temple, Somnath, Vaishno Devi, etc. Context: ${prompt}`,
      
      spiritual_faqs: `Generate ${targetCount} meaningful FAQ pairs about ${prompt}. Each should have: question (specific spiritual question), answer (detailed 100-200 word answer), category, language, difficulty_level, source_references (array of authentic sources). Focus on practical spiritual guidance.`,
      
      calendar_events: `Generate ${targetCount} authentic Hindu festivals and spiritual events. Include: title, description, significance, date, time, duration_hours, event_type, regional_significance, rituals. Context: ${prompt}`,
      
      spiritual_content: `Generate ${targetCount} spiritual content pieces about ${prompt}. Include: title, content (minimum 300 words), content_type, category, language, summary (100 words), tags, difficulty_level.`
    };

    const systemPrompt = `You are a spiritual content expert specializing in Hindu/Indian traditions. Generate authentic, respectful, and accurate spiritual content. Return ONLY a valid JSON array of objects matching the database schema. No explanations or additional text.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: tablePrompts[table] || `Generate ${targetCount} records for ${table} based on: ${prompt}` }
        ],
        max_tokens: 4000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const generatedContent = data.choices[0].message.content;

    console.log('Generated content:', generatedContent);

    // Parse and validate JSON
    let parsedData;
    try {
      parsedData = JSON.parse(generatedContent);
      if (!Array.isArray(parsedData)) {
        parsedData = [parsedData];
      }
    } catch (error) {
      console.error('JSON parsing error:', error);
      throw new Error('Generated content is not valid JSON');
    }

    // Clean and validate data
    const cleanedData = parsedData.map(item => {
      // Remove any undefined or null values
      const cleaned = {};
      for (const [key, value] of Object.entries(item)) {
        if (value !== undefined && value !== null && value !== '') {
          cleaned[key] = value;
        }
      }
      return cleaned;
    });

    return new Response(JSON.stringify({ 
      success: true, 
      data: cleanedData,
      count: cleanedData.length 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-content-generator:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});