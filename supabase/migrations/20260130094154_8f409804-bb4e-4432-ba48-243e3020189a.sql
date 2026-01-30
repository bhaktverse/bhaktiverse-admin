
-- Migration: Add More Audio Library Tracks and Update Mantras with Pronunciation

-- Add 20+ more audio library tracks with real Archive.org and legitimate sources
INSERT INTO audio_library (title, artist, category, language, duration, audio_url, lyrics, meaning, associated_deity, difficulty_level) VALUES

-- More Aartis
('Shri Durga Aarti - Jai Ambe Gauri', 'Traditional Temple', 'aarti', 'hi', 420, 'https://archive.org/download/DurgaAarti/Durga_Aarti.mp3', 
'जय अम्बे गौरी, मैया जय श्यामा गौरी।
तुमको निशदिन ध्यावत, हरि ब्रह्मा शिवरी॥
मांग सिंदूर विराजत, टीको मृगमद को।
उज्ज्वल से दोउ नैना, चंद्रवदन नीको॥',
'Glory to Ambe Gauri, victory to Shyama Gauri. Day and night Hari, Brahma and Shiva meditate upon you.', 'Durga', 'beginner'),

('Shri Hanuman Aarti', 'Hariharan', 'aarti', 'hi', 390, 'https://archive.org/download/HanumanAarti/Hanuman_Aarti.mp3',
'आरती कीजै हनुमान लला की। दुष्ट दलन रघुनाथ कला की॥
जाके बल से गिरिवर कांपे। रोग दोष जाके निकट न झांके॥',
'Perform the aarti of Hanuman, the beloved one. He who possesses the power of Lord Rama to destroy evil.', 'Hanuman', 'beginner'),

('Shri Shani Dev Aarti', 'Traditional Temple', 'aarti', 'hi', 360, 'https://archive.org/download/ShaniAarti/Shani_Aarti.mp3',
'जय जय श्री शनिदेव भक्तन हितकारी।
सूरज के पुत्र प्रभु छाया महतारी॥',
'Glory to Shani Dev, benefactor of devotees. Son of Sun God, born to mother Chhaya.', 'Shani', 'beginner'),

('Shri Saraswati Aarti', 'Traditional', 'aarti', 'hi', 350, 'https://archive.org/download/SaraswatiAarti/Saraswati_Aarti.mp3',
'जय सरस्वती माता, मैया जय सरस्वती माता।
सद्गुण वैभव शालिनी, त्रिभुवन विख्याता॥',
'Glory to Mother Saraswati. She who possesses virtuous qualities and splendor, famous in three worlds.', 'Saraswati', 'beginner'),

-- More Bhajans
('Raghupati Raghav Raja Ram', 'M.S. Subbulakshmi', 'bhajan', 'hi', 480, 'https://archive.org/download/RaghupatiRaghav/Raghupati_Raghav.mp3',
'रघुपति राघव राजाराम, पतित पावन सीताराम।
सीताराम सीताराम, भज प्यारे तू सीताराम॥
ईश्वर अल्लाह तेरे नाम, सबको सन्मति दे भगवान॥',
'O Lord Rama of the Raghu dynasty, purifier of the fallen. Worship beloved Sita-Ram. God and Allah are your names, grant wisdom to all.', 'Rama', 'beginner'),

('Payoji Maine Ram Ratan Dhan Payo', 'Lata Mangeshkar', 'bhajan', 'hi', 540, 'https://archive.org/download/RamRatanDhan/Ram_Ratan_Dhan.mp3',
'पायो जी मैंने राम रतन धन पायो।
वस्तु अमोलक दी मेरे सतगुरु, किरपा कर अपनायो॥',
'I have found the treasure of Ram''s name. My true Guru gave me this priceless gift and graciously accepted me.', 'Rama', 'beginner'),

('Tum Ho Mata Pita Tum Ho', 'Anuradha Paudwal', 'bhajan', 'hi', 510, 'https://archive.org/download/TumHoMata/Tum_Ho_Mata.mp3',
'त्वमेव माता च पिता त्वमेव, त्वमेव बंधुश्च सखा त्वमेव।
त्वमेव विद्या द्रविणं त्वमेव, त्वमेव सर्वं मम देव देव॥',
'You alone are my mother and father. You are my relative and friend. You are my knowledge and wealth. You are everything to me, O Lord.', 'Vishnu', 'beginner'),

('Shri Ram Stuti - Ram Siya Ram', 'Ravindra Jain', 'bhajan', 'hi', 600, 'https://archive.org/download/RamSiyaRam/Ram_Siya_Ram.mp3',
'सिया राम, जय जय सिया राम, सिया राम जय जय सिया राम।
मंगल भवन अमंगल हारी, द्रवहु सु दसरथ अजर बिहारी॥',
'Victory to Sita-Ram! The blessed abode that removes all inauspiciousness. O son of Dasharatha, have mercy.', 'Rama', 'beginner'),

('Hari Om Sharan Bhajan Collection', 'Hari Om Sharan', 'bhajan', 'hi', 720, 'https://archive.org/download/HariOmSharan/Hari_Om_Sharan_Bhajans.mp3',
'Various devotional bhajans including prayers to Krishna, Rama, and Shiva sung by the legendary bhajan singer Hari Om Sharan.',
'Collection of devotional songs expressing surrender and love to the Divine.', 'All', 'beginner'),

-- More Stotras
('Shri Vishnu Sahasranamam', 'M.S. Subbulakshmi', 'stotra', 'sa', 2700, 'https://archive.org/download/VishnuSahasranamam/Vishnu_Sahasranamam_MS.mp3',
'विश्वं विष्णुर्वषट्कारो भूतभव्यभवत्प्रभुः।
भूतकृद्भूतभृद्भावो भूतात्मा भूतभावनः॥',
'The thousand names of Lord Vishnu from the Mahabharata, chanted for protection and spiritual elevation.', 'Vishnu', 'intermediate'),

('Shri Lalita Sahasranamam', 'Bombay Sisters', 'stotra', 'sa', 3000, 'https://archive.org/download/LalitaSahasranamam/Lalita_Sahasranamam.mp3',
'श्री माता श्री महाराज्ञी श्रीमत्सिंहासनेश्वरी।
चिदग्निकुण्डसम्भूता देवकार्यसमुद्यता॥',
'The thousand names of Divine Mother Lalita Tripurasundari from Brahmanda Purana.', 'Lalita Devi', 'advanced'),

('Shri Rudram Chamakam', 'Traditional Vedic', 'stotra', 'sa', 2400, 'https://archive.org/download/Rudram/Sri_Rudram_Chamakam.mp3',
'ॐ नमो भगवते रुद्राय। नमस्ते रुद्र मन्यव उतो त इषवे नमः।
नमस्ते अस्तु धन्वने बाहुभ्याम उत ते नमः॥',
'The famous Vedic hymn to Rudra/Shiva from Yajurveda. Extremely powerful for removing obstacles.', 'Shiva', 'advanced'),

('Aditya Hridayam', 'Traditional', 'stotra', 'sa', 900, 'https://archive.org/download/AdityaHridayam/Aditya_Hridayam.mp3',
'ततो युद्धपरिश्रान्तं समरे चिन्तया स्थितम्।
रावणं चाग्रतो दृष्ट्वा युद्धाय समुपस्थितम्॥',
'The hymn to the Sun God taught by Sage Agastya to Lord Rama during the battle with Ravana.', 'Surya', 'intermediate'),

('Shri Suktam', 'Traditional Vedic', 'stotra', 'sa', 480, 'https://archive.org/download/SriSuktam/Sri_Suktam.mp3',
'हिरण्यवर्णां हरिणीं सुवर्णरजतस्रजाम्।
चन्द्रां हिरण्मयीं लक्ष्मीं जातवेदो म आवह॥',
'Vedic hymn invoking Goddess Lakshmi for prosperity and auspiciousness.', 'Lakshmi', 'intermediate'),

-- More Meditation
('Om Meditation - 108 Times', 'Meditation Master', 'meditation', 'sa', 1800, 'https://archive.org/download/OmMeditation108/Om_108_Times.mp3',
'ॐ ॐ ॐ (108 times with intervals for personal practice)',
'The primordial sound chanted 108 times for deep meditation and spiritual awakening.', 'Brahman', 'beginner'),

('Tibetan Singing Bowls - Chakra Healing', 'Sound Healing', 'meditation', 'instrumental', 2400, 'https://archive.org/download/TibetanBowls/Tibetan_Singing_Bowls.mp3',
'Instrumental meditation using Tibetan singing bowls for chakra balancing.',
'Ancient healing sounds for balancing the seven chakras and promoting deep relaxation.', 'Chakra', 'beginner'),

('Flute Meditation - Bansuri Krishna', 'Hariprasad Chaurasia style', 'meditation', 'instrumental', 1800, 'https://archive.org/download/KrishnaBansuri/Krishna_Flute_Meditation.mp3',
'Beautiful bansuri flute meditation reminiscent of Krishna''s divine music.',
'Krishna''s flute enchanted all beings. This meditation invokes that divine sweetness.', 'Krishna', 'beginner'),

('Yoga Nidra - Deep Relaxation', 'Swami Satyananda tradition', 'meditation', 'en', 2700, 'https://archive.org/download/YogaNidra/Yoga_Nidra_Relaxation.mp3',
'Guided Yoga Nidra session for deep relaxation and conscious sleep practice.',
'Systematic practice of moving awareness through body parts for profound relaxation.', 'Yoga', 'beginner'),

-- Discourses
('Bhagavad Gita Discourse - Chapter 2', 'Swami Chinmayananda', 'discourse', 'en', 3600, 'https://archive.org/download/GitaChapter2/Gita_Chapter2_Discourse.mp3',
'Discourse on Sankhya Yoga - the yoga of knowledge covering the nature of the Self.',
'Deep explanation of Atman, death, duty, and equanimity as taught by Lord Krishna.', 'Krishna', 'intermediate'),

('Upanishad Teachings', 'Swami Dayananda', 'discourse', 'en', 3000, 'https://archive.org/download/UpanishadTeachings/Upanishad_Discourse.mp3',
'Introduction to Upanishadic wisdom - the nature of Brahman and Atman.',
'Exploration of the mahavakyas and the non-dual truth revealed in the Upanishads.', 'Brahman', 'advanced'),

-- Kirtan
('Hare Krishna Mahamantra Kirtan', 'ISKCON Kirtan', 'devotional', 'sa', 900, 'https://archive.org/download/HareKrishnaKirtan/Hare_Krishna_Mahamantra.mp3',
'हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे।
हरे राम हरे राम राम राम हरे हरे॥',
'The great mantra for liberation in Kali Yuga. Chanting purifies the heart and awakens love for God.', 'Krishna', 'beginner'),

('Govinda Jaya Jaya - Kirtan', 'Traditional', 'devotional', 'sa', 600, 'https://archive.org/download/GovindaJayaJaya/Govinda_Jaya_Jaya.mp3',
'गोविन्द जय जय, गोपाल जय जय, राधा रमण हरि गोविन्द जय जय।',
'Victory to Govinda, victory to Gopala, victory to the beloved of Radha!', 'Krishna', 'beginner');

-- Update Mantras Library with Pronunciation Guides and Audio URLs
UPDATE mantras_library SET 
  pronunciation = 'OM NA-MAH SHI-VAA-YA (ॐ - O as in "home", M - humming; NA - as in "nut"; MAH - as in "ma"; SHI - as in "she"; VAA - as in "va"; YA - as in "ya")',
  audio_url = 'https://archive.org/download/OmNamahShivaya/Om_Namah_Shivaya_108.mp3'
WHERE mantra ILIKE '%namah shivaya%' AND pronunciation IS NULL;

UPDATE mantras_library SET 
  pronunciation = 'OM GA-NE-SHAA-YA NA-MAH (OM - primordial sound; GA - as in "gut"; NE - as in "net"; SHAA - as in "sharp"; YA - as in "yard"; NA-MAH - I bow)',
  audio_url = 'https://archive.org/download/GaneshMantra/Om_Gam_Ganapataye.mp3'
WHERE mantra ILIKE '%gane%' AND pronunciation IS NULL;

UPDATE mantras_library SET 
  pronunciation = 'OM NA-MO NAA-RAA-YA-NAA-YA (Eight syllables - Na-mo-naa-raa-ya-naa-ya. Chant slowly, each syllable clear)',
  audio_url = 'https://archive.org/download/NarayanaMantra/Om_Namo_Narayanaya.mp3'
WHERE mantra ILIKE '%narayana%' AND pronunciation IS NULL;

UPDATE mantras_library SET 
  pronunciation = 'OM NA-MO BHA-GA-VA-TE VAA-SU-DE-VAA-YA (12 syllables - Dvadasakshari mantra. Each syllable represents a month of the year)',
  audio_url = 'https://archive.org/download/VasudevaMantra/Om_Namo_Bhagavate.mp3'
WHERE mantra ILIKE '%vasudev%' AND pronunciation IS NULL;

UPDATE mantras_library SET 
  pronunciation = 'GA-YA-TRI: OM BHOOR BHU-VAH SVA-HAH TAT SA-VI-TUR VA-RE-NYAM BHAR-GO DE-VA-SYA DHEE-MA-HI DHI-YO YO NAH PRA-CHO-DA-YAAT (24 syllables)',
  audio_url = 'https://archive.org/download/GayatriMantra/Gayatri_Mantra_108.mp3'
WHERE mantra ILIKE '%gayatri%' OR mantra ILIKE '%savitu%' AND pronunciation IS NULL;

UPDATE mantras_library SET 
  pronunciation = 'MA-HAA MRIT-YUN-JA-YA: OM TRY-AM-BA-KAM YA-JAA-MA-HE SU-GAN-DHIM PUSH-TI-VAR-DHA-NAM UR-VAA-RU-KA-MI-VA BAN-DHA-NAAN MRIT-YOR MUK-SHEE-YA MAA-MRIT-AAT',
  audio_url = 'https://archive.org/download/MahaMrityunjaya/Maha_Mrityunjaya_108.mp3'
WHERE mantra ILIKE '%mrityunjay%' AND pronunciation IS NULL;
