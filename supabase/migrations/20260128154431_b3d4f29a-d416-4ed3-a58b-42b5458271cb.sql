-- Migration 2: Add new audio library entries

INSERT INTO audio_library (title, artist, category, language, duration, audio_url, lyrics, meaning, pronunciation_guide, associated_deity, difficulty_level) VALUES
('श्री गणेश आरती - जय गणेश देवा', 'Traditional', 'aarti', 'hi', 300, 'https://archive.org/download/jai-ganesh-deva/jai-ganesh-deva.mp3', 
'जय गणेश जय गणेश जय गणेश देवा, माता जाकी पार्वती पिता महादेवा।',
'Prayer to Lord Ganesha, remover of obstacles, son of Parvati and Shiva.',
'Jay Ganesh Jay Ganesh Jay Ganesh Deva', 'Ganesha', 'beginner'),

('ॐ जय जगदीश हरे आरती', 'Anup Jalota', 'aarti', 'hi', 420, 'https://archive.org/download/om-jai-jagdish-hare/om-jai-jagdish-hare.mp3',
'ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे। भक्त जनों के संकट क्षण में दूर करे।',
'Universal aarti praising Lord Vishnu as the lord of the universe.',
'Om Jay Jagdish Hare, Swami Jay Jagdish Hare', 'Vishnu', 'beginner'),

('शिव आरती - ॐ जय शिव ओंकारा', 'Anuradha Paudwal', 'aarti', 'hi', 380, 'https://archive.org/download/om-jai-shiv-omkara/om-jai-shiv-omkara.mp3',
'ॐ जय शिव ओंकारा, प्रभु हर शिव ओंकारा। ब्रह्मा विष्णु सदाशिव।',
'Aarti to Lord Shiva describing his manifestation as Omkara.',
'Om Jay Shiv Omkara, Prabhu Har Shiv Omkara', 'Shiva', 'beginner'),

('हनुमान आरती - आरती कीजै', 'Hariharan', 'aarti', 'hi', 340, 'https://archive.org/download/aarti-keeje-hanuman-lala/aarti-keeje-hanuman-lala.mp3',
'आरती कीजै हनुमान लला की, दुष्ट दलन रघुनाथ कला की।',
'Aarti glorifying Hanuman as the destroyer of evil.',
'Aarti Keeje Hanuman Lala Ki', 'Hanuman', 'beginner'),

('मन मेरा मंदिर शिव मेरी पूजा', 'Lata Mangeshkar', 'bhajan', 'hi', 360, 'https://archive.org/download/man-mera-mandir/man-mera-mandir.mp3',
'मन मेरा मंदिर शिव मेरी पूजा, दिल का है दीपक जलता नाम तेरा।',
'Beautiful bhajan expressing that the mind itself is a temple where Shiva resides.',
'Man Mera Mandir Shiv Meri Pooja', 'Shiva', 'beginner'),

('राधे राधे जपा करो', 'Jagjit Singh', 'bhajan', 'hi', 295, 'https://archive.org/download/radhe-radhe-japa-karo/radhe-radhe-japa-karo.mp3',
'राधे राधे जपा करो, मीठी लगे जो राधे।',
'Devotional bhajan emphasizing the chanting of Radha name.',
'Radhe Radhe Japa Karo', 'Radha-Krishna', 'beginner'),

('वैष्णव जन तो', 'Lata Mangeshkar', 'bhajan', 'hi', 310, 'https://archive.org/download/vaishnav-jan-to/vaishnav-jan-to.mp3',
'वैष्णव जन तो तेने कहिए जे पीड़ पराई जाणे रे।',
'Mahatma Gandhi favorite bhajan describing qualities of a true devotee.',
'Vaishnav Jan To Tene Kahiye', 'Vishnu', 'beginner'),

('महामृत्युंजय मंत्र 108', 'Traditional Vedic', 'mantra', 'hi', 1800, 'https://archive.org/download/maha-mrityunjaya-mantra-108/maha-mrityunjaya-108.mp3',
'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।',
'The great death-conquering mantra from Rig Veda.',
'Om Tryambakam Yajamahe', 'Shiva', 'intermediate'),

('गायत्री मंत्र 108', 'Pt. Jasraj', 'mantra', 'hi', 1500, 'https://archive.org/download/gayatri-mantra-108/gayatri-mantra-108.mp3',
'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि।',
'The most sacred Vedic mantra for enlightening intellect.',
'Om Bhur Bhuva Svah', 'Savitri', 'beginner'),

('श्री विष्णु सहस्रनाम पाठ', 'M.S. Subbulakshmi', 'mantra', 'hi', 2700, 'https://archive.org/download/vishnu-sahasranamam/vishnu-sahasranamam.mp3',
'ॐ विश्वं विष्णुर्वषट्कारो भूतभव्यभवत्प्रभुः।',
'The thousand names of Lord Vishnu from Mahabharata.',
'Om Vishvam Vishnur Vashatkaro', 'Vishnu', 'advanced'),

('ॐ ध्यान संगीत', 'Deva Premal', 'meditation', 'hi', 1200, 'https://archive.org/download/om-chanting-meditation/om-chanting-meditation.mp3',
'ॐ ॐ ॐ',
'Extended Om chanting for deep meditation.',
'Oooom', 'Universal', 'beginner'),

('शांति मंत्र', 'Traditional', 'meditation', 'hi', 600, 'https://archive.org/download/shanti-mantra/shanti-mantra.mp3',
'ॐ सह नाववतु। सह नौ भुनक्तु।',
'Peace invocation from Upanishads.',
'Om Saha Navavatu', 'Universal', 'beginner'),

('लक्ष्मी स्तोत्रम', 'Anuradha Paudwal', 'discourse', 'hi', 480, 'https://archive.org/download/lakshmi-stotram/lakshmi-stotram.mp3',
'नमस्तेऽस्तु महामाये श्रीपीठे सुरपूजिते।',
'Hymn to Goddess Lakshmi.',
'Namaste Astu Mahamaye', 'Lakshmi', 'intermediate'),

('हनुमान चालीसा सम्पूर्ण', 'Gulshan Kumar', 'discourse', 'hi', 540, 'https://archive.org/download/hanuman-chalisa-gulshan/hanuman-chalisa.mp3',
'श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि।',
'The 40 verses dedicated to Hanuman by Tulsidas.',
'Shri Guru Charan Saroj Raj', 'Hanuman', 'beginner'),

('सुंदरकांड सम्पूर्ण पाठ', 'Mukesh', 'story', 'hi', 5400, 'https://archive.org/download/sunderkand-path/sunderkand-complete.mp3',
'शान्तं शाश्वतमप्रमेयमनघं निर्वाणशान्तिप्रदम्।',
'Complete recitation of Sunderkand from Ramcharitmanas.',
'Shantam Shashvatam', 'Hanuman', 'advanced');

-- Add more bhakti shorts
INSERT INTO bhakti_shorts (title, description, video_url, category, duration_seconds, tags, approved, featured) VALUES
('शिव तांडव स्तोत्र', 'Powerful recitation of Shiv Tandav Stotram', 'https://www.youtube.com/shorts/K2N3lLnvRQI', 'devotional', 58, '["shiva", "tandav"]', true, true),
('Varanasi Ganga Aarti', 'Breathtaking Ganga Aarti at sunrise', 'https://www.youtube.com/shorts/XgF7_j9wSN0', 'temple_tour', 60, '["varanasi", "ganga"]', true, true),
('Hanuman Chalisa Quick', 'Complete Hanuman Chalisa in 60 seconds', 'https://www.youtube.com/shorts/AETFvQonfV8', 'mantra', 60, '["hanuman", "chalisa"]', true, false),
('Tirupati Darshan', 'Morning darshan of Lord Venkateswara', 'https://www.youtube.com/shorts/wLqk3hs_eQM', 'temple_tour', 55, '["tirupati", "balaji"]', true, true),
('Krishna Janmashtami', 'Dahi Handi and celebrations', 'https://www.youtube.com/shorts/d7_mLxAJyUI', 'festival', 58, '["krishna", "janmashtami"]', true, false),
('Om Namah Shivaya Chant', 'Soothing mantra for meditation', 'https://www.youtube.com/shorts/WQ_mT3xKxQQ', 'mantra', 60, '["shiva", "mantra"]', true, true),
('Kedarnath Snow View', 'Snow-covered Kedarnath Temple', 'https://www.youtube.com/shorts/vJ2z5qBgT8k', 'temple_tour', 45, '["kedarnath", "himalaya"]', true, true),
('Gayatri Mantra Meaning', 'Understanding Gayatri Mantra', 'https://www.youtube.com/shorts/8L0bKO3yJTM', 'spiritual_talk', 59, '["gayatri", "mantra"]', true, false),
('Diwali Festival', 'Festival of lights across India', 'https://www.youtube.com/shorts/MBqT_eXzxXE', 'festival', 60, '["diwali", "festival"]', true, true),
('Somnath Aarti', 'Evening aarti at Somnath', 'https://www.youtube.com/shorts/RgHtZlv9y9M', 'temple_tour', 58, '["somnath", "jyotirlinga"]', true, false);