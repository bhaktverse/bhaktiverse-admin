
-- PHASE 1: Remove duplicate scriptures keeping ones with chapters
-- Delete duplicates that have 0 chapters

DELETE FROM scriptures WHERE id IN (
  -- Yoga Sutras duplicates (keep 2e27ae2a which has 4 chapters)
  'daa1bf43-ad14-473f-8f0b-4524bcd9697d',
  '5fe7ddcf-f226-4b1a-ac07-f5240070de55',
  -- Bhagavad Gita duplicate (keep 517996fc which has 18 chapters)
  'abd7ac58-60ce-470f-95f0-dcab4df46990',
  -- Upanishads duplicate (keep b4f701a7 which has 10 chapters)
  '0ebef86f-1b0f-4abf-bee2-415ec753bd7f',
  -- Autobiography of a Yogi - keep first, remove second
  'd82601a5-11b9-41f5-ab0e-84e933b0b7d6',
  -- Guru Granth Sahib - keep first, remove second
  '8421d38c-af23-4a49-84a3-3b607a2f19c5',
  -- Ramcharitmanas duplicates (keep 5df8c3de which has Hindi chapters)
  'a120c71d-f716-4730-a4dd-a99c78f232fb',
  '528f149d-3362-443c-ab7f-c406aaec78dd'
);

-- Also remove redundant similar scriptures (English versions when Hindi exists)
DELETE FROM scriptures WHERE id IN (
  '4156af23-b63e-41e1-971d-3fce555b4486', -- "The Bhagavad Gita" (keep श्रीमद्भगवद्गीता and main one)
  '3979d524-0354-47ab-bea7-6442d640bf2f'  -- "The Upanishads" (keep Upanishads Complete)
);
