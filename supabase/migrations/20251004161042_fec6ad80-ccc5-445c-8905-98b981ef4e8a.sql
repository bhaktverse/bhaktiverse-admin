-- Create storage buckets for admin content management
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types) 
VALUES 
  ('saints-images', 'saints-images', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp']),
  ('scriptures-pdfs', 'scriptures-pdfs', true, 52428800, ARRAY['application/pdf']),
  ('scriptures-audio', 'scriptures-audio', true, 104857600, ARRAY['audio/mpeg', 'audio/mp3']),
  ('audio-library', 'audio-library', true, 104857600, ARRAY['audio/mpeg', 'audio/mp3', 'audio/wav']),
  ('temple-images', 'temple-images', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp']),
  ('community-media', 'community-media', true, 10485760, ARRAY['image/jpeg', 'image/png', 'image/webp', 'video/mp4'])
ON CONFLICT (id) DO NOTHING;

-- Create admin role enum
DO $$ BEGIN
  CREATE TYPE app_role AS ENUM ('admin', 'moderator', 'user');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- Create user_roles table
CREATE TABLE IF NOT EXISTS user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, role)
);

-- Enable RLS
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function
CREATE OR REPLACE FUNCTION has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM user_roles 
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS Policies for user_roles
CREATE POLICY "Users can view their own roles" ON user_roles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles" ON user_roles
  FOR SELECT USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles" ON user_roles
  FOR ALL USING (has_role(auth.uid(), 'admin'));

-- Storage policies for public read access
CREATE POLICY "Public read access for saints images" ON storage.objects
  FOR SELECT USING (bucket_id = 'saints-images');

CREATE POLICY "Public read access for scriptures pdfs" ON storage.objects
  FOR SELECT USING (bucket_id = 'scriptures-pdfs');

CREATE POLICY "Public read access for scriptures audio" ON storage.objects
  FOR SELECT USING (bucket_id = 'scriptures-audio');

CREATE POLICY "Public read access for audio library" ON storage.objects
  FOR SELECT USING (bucket_id = 'audio-library');

CREATE POLICY "Public read access for temple images" ON storage.objects
  FOR SELECT USING (bucket_id = 'temple-images');

CREATE POLICY "Public read access for community media" ON storage.objects
  FOR SELECT USING (bucket_id = 'community-media');

-- Admin upload/manage policies
CREATE POLICY "Admins can upload to saints images" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'saints-images' AND has_role(auth.uid(), 'admin')
  );

CREATE POLICY "Admins can upload to scriptures pdfs" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'scriptures-pdfs' AND has_role(auth.uid(), 'admin')
  );

CREATE POLICY "Admins can upload to scriptures audio" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'scriptures-audio' AND has_role(auth.uid(), 'admin')
  );

CREATE POLICY "Admins can upload to audio library" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'audio-library' AND has_role(auth.uid(), 'admin')
  );

CREATE POLICY "Admins can upload to temple images" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'temple-images' AND has_role(auth.uid(), 'admin')
  );

CREATE POLICY "Admins can manage all storage" ON storage.objects
  FOR UPDATE USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete storage" ON storage.objects
  FOR DELETE USING (has_role(auth.uid(), 'admin'));

-- Update RLS policies for content tables to allow admin management
CREATE POLICY "Admins can manage saints" ON saints
  FOR ALL USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage scriptures" ON scriptures
  FOR ALL USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage scripture chapters" ON scripture_chapters
  FOR ALL USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage audio library" ON audio_library
  FOR ALL USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage temples" ON temples
  FOR ALL USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage calendar events" ON calendar_events
  FOR ALL USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage spiritual content" ON spiritual_content
  FOR ALL USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage spiritual FAQs" ON spiritual_faqs
  FOR ALL USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage bhakti shorts" ON bhakti_shorts
  FOR ALL USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage achievements" ON achievements
  FOR ALL USING (has_role(auth.uid(), 'admin'));