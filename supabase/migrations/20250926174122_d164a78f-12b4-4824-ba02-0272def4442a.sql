-- Fix critical security issue: Enable RLS on all tables that have policies
-- This addresses the "Policy Exists RLS Disabled" errors

ALTER TABLE public.saints ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scriptures ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.temples ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.spiritual_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.spiritual_faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.calendar_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bhakti_shorts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;

-- These tables already have RLS enabled but confirming:
-- ALTER TABLE public.ai_chat_sessions ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.mantra_sessions ENABLE ROW LEVEL SECURITY;  
-- ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.user_activities ENABLE ROW LEVEL SECURITY;