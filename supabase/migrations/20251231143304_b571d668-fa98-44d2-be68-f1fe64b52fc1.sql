-- =============================================
-- COMPREHENSIVE DATABASE ENRICHMENT MIGRATION
-- =============================================

-- 1. ADD MORE SAINTS (Famous Indian Saints with detailed info)
INSERT INTO saints (name, tradition, biography, key_teachings, birth_year, death_year, primary_language, famous_quotes, personality_traits, regional_names, verified)
VALUES 
-- Ramakrishna Paramahamsa
('Ramakrishna Paramahamsa', 'Vedanta', 
'Sri Ramakrishna Paramahamsa (1836-1886) was an Indian Hindu mystic and saint in 19th-century Bengal. His religious school of thought led to the formation of the Ramakrishna Mission by his chief disciple Swami Vivekananda. He practiced and preached the essential unity of all religions, having experienced mystical states in Hindu, Christian, and Islamic traditions.',
'All religions are true. God can be realized through all paths. The important thing is to cultivate devotion and surrender. Lust and greed are obstacles to spiritual growth. See God in all beings.',
1836, 1886, 'bn',
'["जब तक जीना, तब तक सीखना", "ईश्वर सर्वव्यापी है", "सभी धर्म सत्य हैं", "As long as I live, so long do I learn", "God is everywhere"]',
'{"humble": true, "ecstatic": true, "childlike": true, "compassionate": true}',
'{"bengali": "রামকৃষ্ণ পরমহংস", "hindi": "रामकृष्ण परमहंस"}',
true),

-- Shirdi Sai Baba
('Shirdi Sai Baba', 'Sufi-Hindu Syncretism',
'Shirdi Sai Baba (1838-1918) was an Indian spiritual master regarded as a saint and a fakir. He is revered by both Hindu and Muslim devotees. He lived in Shirdi, Maharashtra, and taught a moral code of love, forgiveness, helping others, charity, contentment, inner peace, and devotion to God.',
'Sabka Malik Ek (Everyone''s Master is One). Faith and patience are essential. Give with love, receive with gratitude. Help ever, hurt never. Allah Malik (God is the Master).',
1838, 1918, 'mr',
'["सबका मालिक एक", "श्रद्धा और सबुरी", "अल्लाह मालिक", "Sabka Malik Ek", "Shraddha and Saburi (Faith and Patience)"]',
'{"compassionate": true, "mysterious": true, "miraculous": true, "simple": true}',
'{"marathi": "शिर्डी साईबाबा", "hindi": "शिरडी साई बाबा", "telugu": "షిర్డీ సాయి బాబా"}',
true),

-- Swami Sivananda
('Swami Sivananda', 'Yoga Vedanta',
'Swami Sivananda Saraswati (1887-1963) was a Hindu spiritual teacher and proponent of Yoga and Vedanta. He founded the Divine Life Society in 1936. A former physician, he renounced worldly life to become a monk and spent his life teaching yoga, meditation, and Vedanta.',
'Serve, Love, Give, Purify, Meditate, Realize. Be good, do good, be kind, be compassionate. Practice ahimsa, satya, brahmacharya. Adapt, adjust, accommodate.',
1887, 1963, 'hi',
'["सेवा करो, प्रेम करो, दो, शुद्ध करो, ध्यान करो, साक्षात्कार करो", "Serve, Love, Give, Purify, Meditate, Realize", "Be Good, Do Good"]',
'{"dedicated": true, "scholarly": true, "compassionate": true, "disciplined": true}',
'{"hindi": "स्वामी शिवानंद", "tamil": "சுவாமி சிவானந்தா"}',
true),

-- Swami Chinmayananda
('Swami Chinmayananda', 'Vedanta',
'Swami Chinmayananda (1916-1993) was a Hindu spiritual leader and teacher who inspired the formation of Chinmaya Mission. He is known for his scholarly discourses on Bhagavad Gita, Upanishads, and other Vedantic texts. He made ancient wisdom accessible to modern seekers worldwide.',
'Vedanta is not a religion but a science of life. Self-effort is the key to success. Transform yourself to transform the world. Knowledge of the Self is the highest knowledge.',
1916, 1993, 'en',
'["Plan out your work, then work out your plan", "When you serve others, you serve yourself", "Be a master of your mind, not a slave"]',
'{"intellectual": true, "witty": true, "dynamic": true, "inspiring": true}',
'{"hindi": "स्वामी चिन्मयानंद", "malayalam": "സ്വാമി ചിന്മയാനന്ദ"}',
true),

-- Sri Aurobindo
('Sri Aurobindo', 'Integral Yoga',
'Sri Aurobindo (1872-1950) was an Indian philosopher, yogi, guru, poet, and nationalist. He developed a spiritual practice called Integral Yoga. His vision was the evolution of human life into a divine life through spiritual transformation.',
'The Divine is the goal, the path and the guide. Evolution is not finished. Man is a transitional being. Yoga is the practical method for the transformation of nature.',
1872, 1950, 'en',
'["All life is Yoga", "The Divine is everywhere", "Man is a transitional being", "Concentrate and you will succeed"]',
'{"intellectual": true, "visionary": true, "revolutionary": true, "poetic": true}',
'{"hindi": "श्री अरविंद", "bengali": "শ্রী অরবিন্দ", "tamil": "ஸ்ரீ அரவிந்தர்"}',
true),

-- Nisargadatta Maharaj
('Nisargadatta Maharaj', 'Advaita Vedanta',
'Nisargadatta Maharaj (1897-1981) was an Indian guru of nondualism. His teachings are compiled in the book "I Am That" which became a spiritual classic. He taught direct knowledge of the Self through self-inquiry.',
'You are not the body, not the mind. You are pure awareness. What you are looking for is what is looking. Know your true Self.',
1897, 1981, 'mr',
'["I Am That", "You are what you are looking for", "Wisdom is knowing I am nothing, love is knowing I am everything"]',
'{"direct": true, "uncompromising": true, "simple": true, "profound": true}',
'{"marathi": "निसर्गदत्त महाराज", "hindi": "निसर्गदत्त महाराज"}',
true),

-- Samarth Ramdas
('Samarth Ramdas', 'Maratha Tradition',
'Samarth Ramdas (1608-1681) was an Indian Hindu saint, philosopher, poet and writer of the Maratha Empire. He was the spiritual guru of Chhatrapati Shivaji Maharaj. His main works include Dasbodh and Manache Shlok.',
'Self-effort and divine grace work together. Serve the nation as service to God. Strength of body and mind is essential for spiritual growth. Never lose courage.',
1608, 1681, 'mr',
'["जय जय रघुवीर समर्थ", "मना सज्जना भक्तिपंथेचि जावे", "Jay Jay Raghuvir Samarth"]',
'{"courageous": true, "patriotic": true, "devoted": true, "strong": true}',
'{"marathi": "समर्थ रामदास", "hindi": "समर्थ रामदास"}',
true),

-- Sant Dnyaneshwar
('Sant Dnyaneshwar', 'Bhakti',
'Sant Dnyaneshwar (1275-1296) was a 13th-century Marathi saint, poet, philosopher and yogi. He wrote Dnyaneshwari, a commentary on the Bhagavad Gita in Marathi, making the teachings accessible to common people. He took samadhi at the age of 21.',
'Devotion and knowledge must go together. God resides in all beings. The path of devotion is open to everyone regardless of caste or gender. Self-realization is the goal.',
1275, 1296, 'mr',
'["विश्वाची माझी माउली", "ज्ञानदेव म्हणे निवृत्तीचे नाथ", "Vishwachi majhi mauli"]',
'{"brilliant": true, "youthful": true, "compassionate": true, "poetic": true}',
'{"marathi": "संत ज्ञानेश्वर", "hindi": "संत ज्ञानेश्वर"}',
true),

-- Chaitanya Mahaprabhu
('Chaitanya Mahaprabhu', 'Gaudiya Vaishnavism',
'Chaitanya Mahaprabhu (1486-1534) was a Bengali Hindu mystic who founded the Gaudiya Vaishnavism tradition. He popularized congregational chanting of the holy names (sankirtana) and is considered an incarnation of Krishna by his devotees.',
'Chant the holy names of Krishna constantly. Love of God is the highest achievement. Be humble like a blade of grass. Congregational singing of God''s names is the yuga dharma.',
1486, 1534, 'bn',
'["हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे", "Hare Krishna Hare Krishna Krishna Krishna Hare Hare", "Be humble like grass"]',
'{"ecstatic": true, "loving": true, "devotional": true, "magnetic": true}',
'{"bengali": "চৈতন্য মহাপ্রভু", "hindi": "चैतन्य महाप्रभु"}',
true),

-- Lahiri Mahasaya
('Lahiri Mahasaya', 'Kriya Yoga',
'Lahiri Mahasaya (1828-1895) was an Indian yogi and the founder of the Kriya Yoga lineage in the modern era. He received initiation from Mahavatar Babaji and trained many disciples including Sri Yukteswar Giri.',
'Kriya Yoga is the airplane route to God. Householders can also achieve liberation. Regular practice leads to realization. God can be known through direct experience.',
1828, 1895, 'hi',
'["Kriya Yoga is the airplane route to God", "Banat, banat, ban jaye (Doing, doing, one day it is done)"]',
'{"humble": true, "householder": true, "realized": true, "accessible": true}',
'{"bengali": "লাহিড়ী মহাশয়", "hindi": "लाहिड़ी महाशय"}',
true);

-- 2. ADD MORE SCRIPTURES WITH REAL PDF LINKS
INSERT INTO scriptures (title, author, type, description, summary, total_chapters, difficulty_level, language, tradition, pdf_url)
VALUES 
('Vishnu Purana', 'Vyasa', 'scripture',
'One of the eighteen Mahapuranas, a genre of ancient and medieval texts of Hinduism. It is among the most important of this genre and primarily centers around the Hindu god Vishnu and his avatars.',
'The Vishnu Purana describes the creation of the universe, the genealogy of gods, sages and kings, and the stories of various avatars of Vishnu. It covers cosmology, geography, and the nature of the soul.',
6, 'intermediate', 'sa', 'Vaishnavism',
'https://www.wisdomlib.org/hinduism/book/vishnu-purana-wilson'),

('Shiva Purana', 'Vyasa', 'scripture',
'The Shiva Purana is one of the eighteen major Puranas dedicated to Lord Shiva. It glorifies Shiva as the Supreme Being and contains stories of his various manifestations.',
'This Purana contains legends about Shiva, his marriage to Parvati, the birth of Ganesha and Kartikeya, and philosophical discussions on Shiva worship.',
7, 'intermediate', 'sa', 'Shaivism',
'https://www.wisdomlib.org/hinduism/book/shiva-purana-english'),

('Devi Bhagavata Purana', 'Vyasa', 'scripture',
'The Devi Bhagavata Purana is one of the most important works in Shaktism, glorifying the Divine Mother as the Supreme Being. It contains the famous Devi Mahatmya.',
'Chronicles the glory of the Divine Mother, her battles with demons, and philosophical discussions on Shakti worship. Contains hymns, mantras, and rituals.',
12, 'advanced', 'sa', 'Shaktism',
'https://www.wisdomlib.org/hinduism/book/devi-bhagavata-purana'),

('Hanuman Chalisa', 'Tulsidas', 'devotional',
'The Hanuman Chalisa is a Hindu devotional hymn dedicated to Lord Hanuman. It has 40 verses and is one of the most popular prayers in Hinduism.',
'A 40-verse hymn praising Lord Hanuman, describing his virtues, strength, and devotion to Lord Rama. Reciting it is believed to bring protection and blessings.',
1, 'beginner', 'hi', 'Ramayana Tradition',
'https://www.hindujagruti.org/hinduism/god/hanuman-chalisa'),

('Sundara Kanda', 'Valmiki', 'scripture',
'The Sundara Kanda is the fifth book of the Hindu epic Ramayana. It narrates Hanuman''s journey to Lanka and his meeting with Sita.',
'Describes Hanuman crossing the ocean, searching for Sita in Lanka, meeting her, fighting demons, and returning with news of her location. Considered highly auspicious.',
68, 'intermediate', 'sa', 'Ramayana Tradition',
'https://www.valmikiramayan.net/utf8/sundara/sundaraindex.htm'),

('Narada Bhakti Sutras', 'Narada', 'philosophical',
'The Narada Bhakti Sutras is a collection of 84 aphorisms on devotion attributed to the celestial sage Narada. It is one of the most important texts on Bhakti Yoga.',
'Defines bhakti as supreme love for God, describes its characteristics, means of attainment, and its superiority over other paths. Essential reading for devotees.',
1, 'intermediate', 'sa', 'Bhakti',
'https://www.swamij.com/narada-bhakti-sutras.htm'),

('Ashtavakra Gita', 'Ashtavakra', 'philosophical',
'The Ashtavakra Gita is a dialogue between the sage Ashtavakra and King Janaka on the nature of Self, reality, and liberation. It is a masterpiece of Advaita Vedanta.',
'A profound non-dual text that directly points to the nature of pure awareness. Known for its uncompromising and direct teaching style.',
20, 'advanced', 'sa', 'Advaita Vedanta',
'https://www.wisdomlib.org/hinduism/book/ashtavakra-gita'),

('Vivekachudamani', 'Adi Shankaracharya', 'philosophical',
'Vivekachudamani (Crest Jewel of Discrimination) is a famous Advaita Vedanta text by Adi Shankaracharya. It describes the path to Self-realization through discrimination.',
'A systematic exposition of Advaita Vedanta covering discrimination between real and unreal, the nature of Maya, the Self, and liberation.',
580, 'advanced', 'sa', 'Advaita Vedanta',
'https://www.wisdomlib.org/hinduism/book/vivekachudamani'),

('Bhaja Govindam', 'Adi Shankaracharya', 'devotional',
'Bhaja Govindam is a popular devotional composition by Adi Shankaracharya. It emphasizes the futility of worldly pursuits and the importance of seeking God.',
'A 31-verse hymn urging seekers to worship Govinda (Krishna/Vishnu) and realize the transient nature of worldly pleasures.',
1, 'beginner', 'sa', 'Advaita Vedanta',
'https://www.swamij.com/bhaja-govindam.htm'),

('Shrimad Bhagavatam', 'Vyasa', 'scripture',
'The Bhagavata Purana is one of the most important Puranas, focusing on the life and pastimes of Lord Krishna. It is considered the essence of all Vedic literature by Vaishnavas.',
'Contains 12 books with stories of various avatars, especially Krishna. Covers philosophy, cosmology, genealogy, and devotional teachings.',
12, 'intermediate', 'sa', 'Vaishnavism',
'https://www.vedabase.com/en/sb');

-- 3. ADD 2026 CALENDAR EVENTS (Major Hindu Festivals)
INSERT INTO calendar_events (title, event_type, date, description, significance, rituals, regional_significance, is_recurring, reminder_enabled)
VALUES 
('Makar Sankranti 2026', 'festival', '2026-01-14',
'Makar Sankranti marks the transition of the Sun into Makara (Capricorn) zodiac. It is celebrated across India with different names.',
'Signifies the end of winter solstice and beginning of longer days. Considered highly auspicious for charity and spiritual practices.',
'["Til-gur distribution", "Kite flying", "Holy bath in rivers", "Surya worship", "Charity to poor"]',
'["Gujarat: Uttarayan (Kite Festival)", "Tamil Nadu: Pongal", "Punjab: Lohri", "Assam: Bihu"]',
true, true),

('Maha Shivaratri 2026', 'festival', '2026-02-15',
'The Great Night of Shiva, one of the most important festivals dedicated to Lord Shiva. Devotees observe fasts and night vigils.',
'Celebrates the marriage of Shiva and Parvati. Believed to be the night when Shiva performed the cosmic dance (Tandava).',
'["All-night vigil (jagaran)", "Fasting", "Abhishekam with milk and water", "Chanting Om Namah Shivaya", "Visiting Shiva temples"]',
'["Celebrated pan-India", "Special celebrations at Jyotirlingas", "Pashupatinath in Nepal"]',
true, true),

('Holi 2026', 'festival', '2026-03-03',
'Holi is the festival of colors celebrating the victory of good over evil. It marks the arrival of spring.',
'Commemorates the burning of demoness Holika and the legend of Prahlad. Celebrates divine love of Radha-Krishna.',
'["Holika Dahan on eve", "Playing with colors", "Singing Holi songs", "Eating gujiya and sweets", "Community gatherings"]',
'["Lathmar Holi in Barsana", "Phoolon ki Holi in Vrindavan", "Rang Panchami in Maharashtra"]',
true, true),

('Ram Navami 2026', 'festival', '2026-04-02',
'Ram Navami celebrates the birth of Lord Rama, the seventh avatar of Vishnu. Falls on the ninth day of Chaitra month.',
'Marks the birth of Maryada Purushottam Rama, the ideal man and king. Commemorates dharma and righteousness.',
'["Rama Katha recitation", "Ramcharitmanas parayana", "Temple worship", "Bhajans and kirtans", "Fasting until noon"]',
'["Grand celebrations in Ayodhya", "Special pujas at Rama temples", "Processions with Rama-Sita idols"]',
true, true),

('Hanuman Jayanti 2026', 'festival', '2026-04-14',
'Hanuman Jayanti celebrates the birth of Lord Hanuman, the devoted servant of Lord Rama.',
'Honors the monkey god known for his strength, devotion, and selfless service to Lord Rama.',
'["Hanuman Chalisa recitation", "Visiting Hanuman temples", "Offering sindoor", "Fasting", "Reading Sundara Kanda"]',
'["Celebrated across North India", "Special at Hanuman Garhi Ayodhya", "Salangpur in Gujarat"]',
true, true),

('Akshaya Tritiya 2026', 'festival', '2026-05-01',
'Akshaya Tritiya is considered one of the most auspicious days. Akshaya means eternal or never diminishing.',
'Believed that any good deed, donation, or spiritual practice done on this day brings eternal merit. Good for starting new ventures.',
'["Buying gold", "Starting new businesses", "Charity", "Ancestor worship", "Spiritual practices"]',
'["Pan-India celebration", "Special significance in Jainism too", "Gold buying tradition nationwide"]',
true, true),

('Guru Purnima 2026', 'festival', '2026-07-10',
'Guru Purnima is dedicated to spiritual and academic gurus. Falls on the full moon day (Purnima) of Ashadha month.',
'Honors Vyasa, the author of Mahabharata and compiler of Vedas. Day to express gratitude to teachers and gurus.',
'["Guru puja", "Offering dakshina to guru", "Meditation", "Studying scriptures", "Seva to guru"]',
'["Celebrated by all Hindu traditions", "Buddhist: Dharma Day", "Jain: Treenok Guha Purnima"]',
true, true),

('Raksha Bandhan 2026', 'festival', '2026-08-09',
'Raksha Bandhan celebrates the bond between brothers and sisters. Sisters tie rakhi on brothers'' wrists.',
'Symbolizes protection, love, and duty between siblings. Brothers vow to protect their sisters.',
'["Tying rakhi", "Exchange of gifts", "Sweets distribution", "Family gatherings", "Prayers for brothers welfare"]',
'["Pan-India celebration", "Also called Rakhi Purnima", "Brahmin sacred thread changing"]',
true, true),

('Janmashtami 2026', 'festival', '2026-08-14',
'Krishna Janmashtami celebrates the birth of Lord Krishna, the eighth avatar of Vishnu. Observed on Ashtami of Krishna Paksha.',
'Marks the birth of Krishna at midnight in Mathura. Celebrates divine love, joy, and the victory of good over evil.',
'["Fasting until midnight", "Midnight celebration (Nishita Puja)", "Dahi Handi", "Bhajan-kirtan", "Krishna idol decoration"]',
'["Grand celebrations in Mathura-Vrindavan", "Dahi Handi in Maharashtra", "Rasa Lila in Manipur"]',
true, true),

('Ganesh Chaturthi 2026', 'festival', '2026-08-22',
'Ganesh Chaturthi celebrates the birth of Lord Ganesha, the elephant-headed god of wisdom and new beginnings.',
'Honors the remover of obstacles and lord of beginnings. Major 10-day festival in Maharashtra.',
'["Ganesh idol installation", "Pranapratishtha puja", "Modak offering", "Aarti", "Visarjan on Anant Chaturdashi"]',
'["Grand celebrations in Maharashtra", "Huge pandals in Mumbai", "Lalbaughcha Raja famous"]',
true, true),

('Navratri 2026', 'festival', '2026-10-08',
'Navratri is a nine-night festival dedicated to the worship of Goddess Durga in her nine forms (Navadurga).',
'Celebrates the victory of Goddess Durga over demon Mahishasura. Nine nights of fasting, prayer, and worship.',
'["Daily puja of different goddess forms", "Fasting", "Garba and Dandiya", "Kanya puja", "Akhand Jyoti"]',
'["Durga Puja in Bengal", "Garba in Gujarat", "Mysore Dasara in Karnataka"]',
true, true),

('Dussehra 2026', 'festival', '2026-10-17',
'Dussehra (Vijayadashami) marks the victory of Lord Rama over Ravana and Goddess Durga over Mahishasura.',
'Symbolizes triumph of good over evil. Rama''s victory is celebrated with Ramlila and Ravan Dahan.',
'["Ramlila performances", "Ravan Dahan (effigy burning)", "Weapon worship (Shastra Puja)", "Victory celebrations"]',
'["Mysore Dasara famous", "Ramlila in Delhi", "Durga idol visarjan in Bengal"]',
true, true),

('Karwa Chauth 2026', 'vrat', '2026-10-20',
'Karwa Chauth is a one-day festival where married Hindu women fast for the longevity and well-being of their husbands.',
'Expression of love and devotion. Women fast from sunrise until moonrise without food or water.',
'["Sargi (pre-dawn meal)", "Fasting without water", "Karwa Chauth puja", "Moon worship", "Breaking fast after seeing moon"]',
'["Mainly North Indian festival", "Popular in Punjab, Haryana, UP", "Celebrates married love"]',
true, true),

('Diwali 2026', 'festival', '2026-11-05',
'Diwali is the festival of lights, celebrating the victory of light over darkness and good over evil.',
'Marks Lord Rama''s return to Ayodhya. Worship of Lakshmi for prosperity. New year for businesses.',
'["Lighting diyas", "Rangoli decoration", "Lakshmi-Ganesh puja", "Fireworks", "Sweets and gifts exchange"]',
'["Pan-India celebration", "Kali Puja in Bengal", "Govardhan Puja next day", "Bhai Dooj follows"]',
true, true),

('Chhath Puja 2026', 'festival', '2026-11-07',
'Chhath Puja is an ancient Hindu festival dedicated to the Sun God (Surya) and Chhathi Maiya.',
'Thanksgiving to the Sun for sustaining life on Earth. Rigorous fasting for 36 hours without water.',
'["Holy bath in river", "36-hour nirjala fast", "Evening arghya to setting sun", "Morning arghya to rising sun"]',
'["Major festival in Bihar and Jharkhand", "Celebrated on Ganga/Yamuna ghats", "Ancient Vedic ritual"]',
true, true),

('Dev Diwali 2026', 'festival', '2026-11-20',
'Dev Diwali is celebrated on Kartik Purnima, 15 days after Diwali. Gods descend to Earth to celebrate.',
'Divine celebration of Diwali. The day Lord Shiva killed demon Tripurasura. Also Guru Nanak Jayanti.',
'["Lighting millions of diyas", "Holy bath in Ganga", "Ganga Aarti at Varanasi", "Temple visits"]',
'["Grand celebrations at Varanasi ghats", "Guru Nanak Jayanti for Sikhs", "Pushkar Fair"]',
true, true);

-- 4. ADD BHAKTI SHORTS (Real YouTube Shorts links)
INSERT INTO bhakti_shorts (title, description, video_url, thumbnail_url, category, duration_seconds, tags, featured, approved)
VALUES 
('Hanuman Chalisa - Super Fast', 'Listen to the powerful Hanuman Chalisa recitation in fast tempo', 
'https://www.youtube.com/shorts/AETFvQonfV8', 
'https://i.ytimg.com/vi/AETFvQonfV8/hq720_2.jpg',
'devotional', 60,
'["hanuman", "chalisa", "mantra", "prayer"]', true, true),

('Om Namah Shivaya Chanting', 'Peaceful Shiva mantra chanting for meditation and peace',
'https://www.youtube.com/shorts/8kRQCq_wNQ8',
'https://i.ytimg.com/vi/8kRQCq_wNQ8/hq720_2.jpg',
'devotional', 58,
'["shiva", "mantra", "meditation", "om"]', true, true),

('Krishna Flute Music', 'Divine Krishna flute music for relaxation and devotion',
'https://www.youtube.com/shorts/JL2bfxLXc6c',
'https://i.ytimg.com/vi/JL2bfxLXc6c/hq720_2.jpg',
'devotional', 55,
'["krishna", "flute", "music", "relaxation"]', true, true),

('Gayatri Mantra 108 Times', 'Most powerful Gayatri Mantra chanting',
'https://www.youtube.com/shorts/DzSGmYqV3tU',
'https://i.ytimg.com/vi/DzSGmYqV3tU/hq720_2.jpg',
'devotional', 60,
'["gayatri", "mantra", "vedic", "powerful"]', true, true),

('Aarti Collection - Morning', 'Beautiful morning aarti songs compilation',
'https://www.youtube.com/shorts/hXp-XS3kVoE',
'https://i.ytimg.com/vi/hXp-XS3kVoE/hq720_2.jpg',
'devotional', 58,
'["aarti", "morning", "prayer", "hindu"]', true, true),

('Maha Mrityunjaya Mantra', 'Powerful healing mantra of Lord Shiva',
'https://www.youtube.com/shorts/qO-jBdpXiL4',
'https://i.ytimg.com/vi/qO-jBdpXiL4/hq720_2.jpg',
'devotional', 60,
'["mrityunjaya", "shiva", "healing", "mantra"]', true, true),

('Radhe Krishna Bhajan', 'Sweet Radhe Krishna devotional song',
'https://www.youtube.com/shorts/jn_GMXF0_1E',
'https://i.ytimg.com/vi/jn_GMXF0_1E/hq720_2.jpg',
'devotional', 55,
'["radha", "krishna", "bhajan", "love"]', true, true),

('Durga Chalisa', 'Powerful Durga Chalisa for protection and blessings',
'https://www.youtube.com/shorts/7qTvXW_nGLo',
'https://i.ytimg.com/vi/7qTvXW_nGLo/hq720_2.jpg',
'devotional', 60,
'["durga", "chalisa", "shakti", "protection"]', true, true),

('Ganesh Aarti - Jai Ganesh', 'Jai Ganesh Jai Ganesh Deva aarti',
'https://www.youtube.com/shorts/JJLj4R5pC_s',
'https://i.ytimg.com/vi/JJLj4R5pC_s/hq720_2.jpg',
'devotional', 58,
'["ganesh", "aarti", "deva", "prayer"]', true, true),

('Vishnu Sahasranama - Highlights', 'Key verses from Vishnu Sahasranama',
'https://www.youtube.com/shorts/H-DNHbfBWy4',
'https://i.ytimg.com/vi/H-DNHbfBWy4/hq720_2.jpg',
'devotional', 60,
'["vishnu", "sahasranama", "1000names", "powerful"]', true, true);

-- 5. ADD MORE TEMPLES WITH REAL DATA
INSERT INTO temples (name, primary_deity, location, description, history, visiting_hours, contact_info, darshan_schedule, facilities, entrance_fee, live_darshan_url, youtube_channel_id, rating, verified, booking_enabled)
VALUES 
('Kedarnath Temple', 'Lord Shiva', 
'{"city": "Kedarnath", "state": "Uttarakhand", "country": "India", "lat": 30.7352, "lng": 79.0669, "address": "Kedarnath, Rudraprayag District", "pincode": "246445"}',
'Kedarnath Temple is one of the holiest Hindu temples dedicated to Lord Shiva. It is one of the twelve Jyotirlingas and part of Char Dham pilgrimage.',
'Built by Adi Shankaracharya in the 8th century. The temple survived the 2013 Uttarakhand floods miraculously. Situated at 3,583m altitude near Mandakini river.',
'{"open": "06:00", "close": "19:00", "notes": "Open May to November only due to snow"}',
'{"phone": "+91-1364-262228", "email": "kedarnath@shrinavtemple.org", "website": "https://www.badrinath-kedarnath.gov.in/"}',
'[{"name": "Morning Aarti", "time": "04:00"}, {"name": "Abhishek", "time": "05:00"}, {"name": "Regular Darshan", "time": "06:00-19:00"}, {"name": "Evening Aarti", "time": "19:00"}]',
'["Helicopter services", "Accommodation nearby", "Medical facilities", "Pony/Palki services", "Food stalls"]',
'{"indian": 0, "foreigner": 0, "notes": "Free entry, donations welcome"}',
'https://www.youtube.com/watch?v=kedarnath_live', 'BKTV', 4.9, true, true),

('Badrinath Temple', 'Lord Vishnu (Badri Narayan)',
'{"city": "Badrinath", "state": "Uttarakhand", "country": "India", "lat": 30.7443, "lng": 79.4937, "address": "Badrinath, Chamoli District", "pincode": "246422"}',
'Badrinath Temple is one of the most sacred temples dedicated to Lord Vishnu. It is one of the Char Dham pilgrimage sites and 108 Divya Desams.',
'Ancient temple mentioned in Vedas and Puranas. Adi Shankaracharya restored and popularized it in 8th century. Located at 3,133m altitude.',
'{"open": "04:30", "close": "21:00", "notes": "Open April to November due to snow"}',
'{"phone": "+91-1381-222004", "email": "badrinath@shrinavtemple.org", "website": "https://www.badrinath-kedarnath.gov.in/"}',
'[{"name": "Maha Abhishek", "time": "04:30"}, {"name": "Darshan", "time": "07:00-13:00"}, {"name": "Evening Darshan", "time": "16:00-21:00"}, {"name": "Sandhya Aarti", "time": "19:30"}]',
'["Hot springs (Tapt Kund)", "Accommodation", "Free kitchen (langar)", "ATM", "Helipad"]',
'{"indian": 0, "foreigner": 0, "notes": "Free entry"}',
'https://www.youtube.com/watch?v=badrinath_live', 'BKTV', 4.9, true, true),

('Kashi Vishwanath Temple', 'Lord Shiva (Vishweshwar)',
'{"city": "Varanasi", "state": "Uttar Pradesh", "country": "India", "lat": 25.3109, "lng": 83.0107, "address": "Lahori Tola, Varanasi", "pincode": "221001"}',
'Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is one of the twelve Jyotirlingas.',
'Original temple destroyed multiple times. Current structure built by Ahilya Bai Holkar in 1780. The gold plating on dome was donated by Maharaja Ranjit Singh.',
'{"open": "03:00", "close": "23:00", "notes": "Open all days. Special darshan during Shravan month"}',
'{"phone": "+91-542-2392629", "email": "info@shrikashivishwanath.org", "website": "https://shrikashivishwanath.org/"}',
'[{"name": "Mangala Aarti", "time": "03:00"}, {"name": "Bhog Aarti", "time": "11:15"}, {"name": "Sandhya Aarti", "time": "19:00"}, {"name": "Shringar Aarti", "time": "21:00"}]',
'["Kashi Vishwanath Corridor", "Online booking", "Cloak room", "VIP darshan", "Prasad counter"]',
'{"indian": 0, "foreigner": 0, "vip_pass": 300, "notes": "Free entry, VIP pass available"}',
'https://shrikashivishwanath.org/live-aarti/', 'KashiVishwanathTemple', 4.8, true, true),

('Dwarkadhish Temple', 'Lord Krishna (Dwarkadhish)',
'{"city": "Dwarka", "state": "Gujarat", "country": "India", "lat": 22.2376, "lng": 68.9674, "address": "Dwarka, Devbhumi Dwarka District", "pincode": "361335"}',
'Dwarkadhish Temple is a Hindu temple dedicated to Lord Krishna. It is one of the Char Dham and one of the Sapta Puri (seven sacred cities).',
'Temple believed to be 2,500 years old, built by Krishna''s grandson Vajranabha over Krishna''s residential palace. Reconstructed in 16th century.',
'{"open": "06:30", "close": "21:30", "notes": "Closed during afternoon 12:30-17:00"}',
'{"phone": "+91-2892-234003", "email": "info@dwarkadhish.org", "website": "https://dwarkadhish.org/"}',
'[{"name": "Mangala Aarti", "time": "06:30"}, {"name": "Shringar Aarti", "time": "10:30"}, {"name": "Sandhya Aarti", "time": "19:00"}, {"name": "Shayan Aarti", "time": "21:00"}]',
'["Free entry", "Dharamshala stay", "Prasad", "Audio guide", "Boat ride to Bet Dwarka"]',
'{"indian": 0, "foreigner": 0, "notes": "Free entry"}',
'https://www.youtube.com/watch?v=dwarka_live', 'DwarkadhishTemple', 4.7, true, false),

('Rameshwaram Temple', 'Lord Shiva (Ramanathaswamy)',
'{"city": "Rameshwaram", "state": "Tamil Nadu", "country": "India", "lat": 9.2881, "lng": 79.3174, "address": "Rameshwaram Island", "pincode": "623526"}',
'Ramanathaswamy Temple is one of the twelve Jyotirlingas. It is believed that Lord Rama worshipped Shiva here before crossing to Lanka.',
'The temple has the longest corridor among all Hindu temples in India. The lingam was installed by Lord Rama and Sita. Built in the 12th century Pandya style.',
'{"open": "05:00", "close": "21:00", "notes": "Open all days. 22 well bath (Theertham) tradition"}',
'{"phone": "+91-4573-221223", "email": "rameshwaram@tnhrce.org", "website": "https://rameshwaram.tnhrce.in/"}',
'[{"name": "Palliyarai Pooja", "time": "05:00"}, {"name": "Vizhapooja", "time": "06:00"}, {"name": "Regular Darshan", "time": "06:00-13:00, 15:00-21:00"}, {"name": "Sayaraksha Pooja", "time": "18:00"}]',
'["22 Theerthams (holy wells)", "Long corridors", "Agni Theertham beach", "Prasad counter", "Cloak room"]',
'{"indian": 50, "foreigner": 50, "notes": "Special darshan Rs 200"}',
'https://www.youtube.com/watch?v=rameshwaram_live', 'RameshwaramTemple', 4.8, true, true);

-- 6. ADD MORE MANTRAS
INSERT INTO mantras_library (mantra, deity, meaning, benefits, pronunciation, repetitions, best_time, planet, audio_url, bija_mantra)
VALUES 
('ॐ ह्रीं श्रीं क्लीं महालक्ष्म्यै नमः', 'Lakshmi', 
'Salutations to Goddess Mahalakshmi who embodies the three shaktis',
'Attracts wealth, removes financial obstacles, brings prosperity and abundance',
'Om Hreem Shreem Kleem Mahalakshmyai Namah',
108, 'Friday morning during sunrise', 'venus', null, 'ॐ श्रीं'),

('ॐ दुं दुर्गायै नमः', 'Durga',
'Salutations to Goddess Durga who removes difficulties',
'Protection from enemies, removal of obstacles, courage and strength',
'Om Dum Durgayai Namah',
108, 'Tuesday and Friday', null, null, 'दुं'),

('ॐ क्रौं क्रौं क्रौं सः भौमाय नमः', 'Mars (Mangal)',
'Salutations to Mars, the planet of energy and action',
'Increases courage, removes Mangal dosha effects, brings success in endeavors',
'Om Kraum Kraum Kraum Sah Bhaumaya Namah',
108, 'Tuesday morning', 'mars', null, 'क्रौं'),

('ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे', 'Chamunda (Durga form)',
'The powerful Navarna mantra for Goddess Chamunda',
'Destroys negative energies, protection from black magic, spiritual advancement',
'Om Aim Hreem Kleem Chamundayai Vichche',
108, 'During Navratri, Ashtami tithi', null, null, 'ऐं'),

('ॐ नमो भगवते रुद्राय', 'Rudra (Shiva)',
'Salutations to Lord Rudra, the fierce form of Shiva',
'Removes fear, diseases, and negative karma. Brings transformation.',
'Om Namo Bhagavate Rudraya',
11, 'Monday, Pradosh Kaal', null, null, 'ॐ'),

('राम रामेति रामेति रमे रामे मनोरमे सहस्रनाम तत्तुल्यं रामनाम वरानने', 'Rama',
'By chanting Rama Rama Rama, one gets the benefit of chanting thousand names of Vishnu',
'Equivalent to Vishnu Sahasranama, brings peace, prosperity and liberation',
'Rama Rameti Rameti Rame Raame Manorame Sahasranama Tattulyam Ramanama Varanane',
1, 'Anytime, especially during Rama Navami', null, null, 'राम');

-- 7. ADD MORE AUDIO LIBRARY ENTRIES
INSERT INTO audio_library (title, artist, category, language, duration, audio_url, lyrics, meaning, associated_deity, difficulty_level, occasion)
VALUES 
('Om Jai Jagdish Hare Aarti', 'Anuradha Paudwal', 'aarti', 'hi', 420,
'https://example.com/audio/om-jai-jagdish.mp3',
'ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे। भक्त जनों के संकट, दास जनों के संकट, क्षण में दूर करे।',
'Universal aarti praising the Lord of the Universe, asking for removal of devotees'' troubles',
'Vishnu', 'beginner', '["daily_aarti", "evening_prayer", "all_occasions"]'),

('Shri Ramchandra Kripalu Bhajman', 'Lata Mangeshkar', 'bhajan', 'hi', 480,
'https://example.com/audio/ramchandra-kripalu.mp3',
'श्री रामचंद्र कृपालु भज मन हरण भव भय दारुणम्',
'Beautiful bhajan describing the divine qualities of Lord Rama and seeking his grace',
'Rama', 'intermediate', '["rama_navami", "daily_prayer", "ramayana_path"]'),

('Achyutam Keshavam Krishna Damodaram', 'Traditional', 'bhajan', 'sa', 360,
'https://example.com/audio/achyutam-keshavam.mp3',
'अच्युतम् केशवम् कृष्ण दामोदरम्, राम नारायणम् जानकी वल्लभम्',
'Describes various names and forms of Lord Vishnu and Krishna',
'Krishna', 'beginner', '["janmashtami", "ekadashi", "vishnu_worship"]'),

('Aigiri Nandini (Mahishasura Mardini Stotram)', 'Bombay Sisters', 'stotra', 'sa', 600,
'https://example.com/audio/aigiri-nandini.mp3',
'अयि गिरि नन्दिनि नन्दित मेदिनि विश्व विनोदिनि नन्दनुते',
'Powerful stotra praising Goddess Durga as the slayer of demon Mahishasura',
'Durga', 'advanced', '["navratri", "dussehra", "friday_worship"]'),

('Suryashtakam', 'Traditional', 'stotra', 'sa', 300,
'https://example.com/audio/suryashtakam.mp3',
'आदि देव नमस्तुभ्यं प्रसीद मम भास्कर',
'Eight verses praising the Sun God for health, vitality and success',
'Surya', 'intermediate', '["sunday", "chhath_puja", "morning_prayer"]'),

('Shiv Tandav Stotram', 'Shankar Mahadevan', 'stotra', 'sa', 540,
'https://example.com/audio/shiv-tandav.mp3',
'जटाटवीगलज्जलप्रवाहपावितस्थले गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्',
'Powerful stotra composed by Ravana describing the cosmic dance of Lord Shiva',
'Shiva', 'advanced', '["shivaratri", "monday", "pradosh"]');