
-- Migration: Add 15 New Mantras with Complete Pronunciation Guides and Audio URLs

INSERT INTO mantras_library (mantra, deity, meaning, benefits, pronunciation, audio_url, best_time, repetitions, planet, bija_mantra) VALUES

-- 1. Ganesha Beej Mantra
('ॐ गं गणपतये नमः',
'Ganesha',
'हिंदी: मैं गणपति को नमन करता हूँ, जो विघ्नहर्ता और प्रथम पूज्य हैं। English: I bow to Lord Ganesha, the remover of obstacles.',
'विघ्न नाश, बुद्धि वृद्धि, नई शुरुआत में सफलता। Removes obstacles, increases wisdom, grants success in new beginnings.',
'ॐ (OM), गं (GAM with nasal), ग-ण-प-त-ये (GA-NA-PA-TA-YE), न-मः (NA-MAH)',
'https://archive.org/download/GaneshMantra/Om_Gam_Ganapataye_108.mp3',
'Sunrise, before any new work',
108, NULL, 'गं'),

-- 2. Vishnu Dvadasakshari (12-syllable)
('ॐ नमो भगवते वासुदेवाय',
'Vishnu/Krishna',
'हिंदी: भगवान वासुदेव को नमन। English: I bow to Lord Vasudeva, the all-pervading Supreme Being.',
'मोक्ष प्राप्ति, भक्ति वृद्धि, कर्म बंधन से मुक्ति। Grants liberation, increases devotion, frees from karmic bondage.',
'ॐ (OM) न-मो (NA-MO) भ-ग-व-ते (BHA-GA-VA-TE) वा-सु-दे-वा-य (VAA-SU-DE-VAA-YA)',
'https://archive.org/download/VasudevaMantra/Om_Namo_Bhagavate_108.mp3',
'Brahma Muhurta, Ekadashi',
108, NULL, NULL),

-- 3. Navarna Mantra (Durga)
('ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे',
'Durga/Chamunda',
'हिंदी: माँ चामुण्डा का नवार्ण मंत्र। English: The nine-syllable mantra invoking Mother Chamunda.',
'शत्रु नाश, भय निवारण, शक्ति प्राप्ति। Destroys enemies, removes fear, grants power.',
'ॐ (OM) ऐं (AIM) ह्रीं (HREEM) क्लीं (KLEEM) चा-मुं-डा-यै (CHAA-MUN-DAA-YAI) वि-च्चे (VI-CCHE)',
'https://archive.org/download/NavarnaMantra/Navarna_Mantra_108.mp3',
'Navratri, Ashtami',
108, NULL, 'ऐं'),

-- 4. Lakshmi Beej Mantra
('ॐ श्रीं महालक्ष्म्यै नमः',
'Lakshmi',
'हिंदी: महालक्ष्मी को नमन। English: Salutations to the great Lakshmi, goddess of wealth.',
'धन प्राप्ति, समृद्धि, ऐश्वर्य। Grants wealth, prosperity, luxury.',
'ॐ (OM) श्रीं (SHREEM) म-हा-ल-क्ष्म्यै (MA-HAA-LAKSH-MYAI) न-मः (NA-MAH)',
'https://archive.org/download/LakshmiMantra/Mahalakshmi_Mantra_108.mp3',
'Friday, Diwali',
108, 'venus', 'श्रीं'),

-- 5. Saraswati Mantra
('ॐ ऐं सरस्वत्यै नमः',
'Saraswati',
'हिंदी: विद्या की देवी सरस्वती को नमन। English: Salutations to Goddess Saraswati.',
'विद्या प्राप्ति, वाक् सिद्धि, परीक्षा में सफलता। Grants knowledge, eloquence, exam success.',
'ॐ (OM) ऐं (AIM) स-र-स्व-त्यै (SA-RA-SVA-TYAI) न-मः (NA-MAH)',
'https://archive.org/download/SaraswatiMantra/Om_Aim_Saraswatyai.mp3',
'Thursday, Basant Panchami',
108, 'jupiter', 'ऐं'),

-- 6. Shani Mantra
('ॐ शं शनैश्चराय नमः',
'Shani',
'हिंदी: शनि देव को नमन। English: Salutations to Lord Shani, deity of karma.',
'शनि दोष निवारण, साढ़े साती शांति। Removes Shani dosha, pacifies Sade Sati.',
'ॐ (OM) शं (SHAM) श-नै-श्च-रा-य (SHA-NAI-SHCHA-RAA-YA) न-मः (NA-MAH)',
'https://archive.org/download/ShaniMantra/Om_Sham_Shanaishcharaya.mp3',
'Saturday evening',
108, 'saturn', 'शं'),

-- 7. Hanuman Mantra
('ॐ हं हनुमते नमः',
'Hanuman',
'हिंदी: महावीर हनुमान को नमन। English: Salutations to Lord Hanuman.',
'भय नाश, शक्ति प्राप्ति, संकट निवारण। Removes fear, grants strength.',
'ॐ (OM) हं (HUM) ह-नु-म-ते (HA-NU-MA-TE) न-मः (NA-MAH)',
'https://archive.org/download/HanumanMantra/Om_Hum_Hanumate.mp3',
'Tuesday, Saturday',
108, 'mars', 'हं'),

-- 8. Surya Gayatri
('ॐ भास्कराय विद्महे महाद्युतिकराय धीमहि तन्नो आदित्यः प्रचोदयात्',
'Surya',
'हिंदी: सूर्य देव का ध्यान करते हैं। English: We meditate upon the radiant Sun.',
'आरोग्य, तेज, नेतृत्व। Grants health, radiance, leadership.',
'ॐ भा-स्क-रा-य (BHAA-SKA-RAA-YA) वि-द्म-हे (VID-MA-HE) म-हा-द्यु-ति-क-रा-य (MA-HAA-DYU-TI) धी-म-हि (DHEE-MA-HI)',
'https://archive.org/download/SuryaGayatri/Surya_Gayatri_Mantra.mp3',
'Sunrise, Sunday',
108, 'sun', NULL),

-- 9. Chandra Mantra
('ॐ सों सोमाय नमः',
'Chandra',
'हिंदी: चंद्र देव को नमन। English: Salutations to Lord Chandra (Moon).',
'मानसिक शांति, चंद्र दोष निवारण। Grants mental peace, removes Chandra dosha.',
'ॐ (OM) सों (SOM) सो-मा-य (SO-MAA-YA) न-मः (NA-MAH)',
'https://archive.org/download/ChandraMantra/Om_Som_Somaya.mp3',
'Monday, Purnima',
108, 'moon', 'सों'),

-- 10. Mangal Mantra
('ॐ क्रां क्रीं क्रौं सः भौमाय नमः',
'Mangal',
'हिंदी: मंगल ग्रह को नमन। English: Salutations to Mars.',
'मंगल दोष निवारण, विवाह बाधा दूर। Removes Mangal dosha.',
'ॐ (OM) क्रां (KRAAM) क्रीं (KREEM) क्रौं (KRAUM) सः (SAH) भौ-मा-य (BHAU-MAA-YA)',
'https://archive.org/download/MangalMantra/Mangal_Graha_Mantra.mp3',
'Tuesday, Sunrise',
108, 'mars', 'क्रां'),

-- 11. Budh Mantra  
('ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः',
'Budh',
'हिंदी: बुध ग्रह को नमन। English: Salutations to Mercury.',
'बुद्धि वृद्धि, वाणी सुधार। Increases intelligence, improves speech.',
'ॐ (OM) ब्रां (BRAAM) ब्रीं (BREEM) ब्रौं (BRAUM) सः (SAH) बु-धा-य (BU-DHAA-YA)',
'https://archive.org/download/BudhMantra/Budh_Graha_Mantra.mp3',
'Wednesday morning',
108, 'mercury', 'ब्रां'),

-- 12. Guru Mantra
('ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः',
'Guru/Brihaspati',
'हिंदी: बृहस्पति को नमन। English: Salutations to Jupiter.',
'गुरु कृपा, विद्या प्राप्ति। Guru blessings, education.',
'ॐ (OM) ग्रां (GRAAM) ग्रीं (GREEM) ग्रौं (GRAUM) सः (SAH) गु-र-वे (GU-RA-VE)',
'https://archive.org/download/GuruMantra/Guru_Brihaspati_Mantra.mp3',
'Thursday morning',
108, 'jupiter', 'ग्रां'),

-- 13. Shukra Mantra
('ॐ द्रां द्रीं द्रौं सः शुक्राय नमः',
'Shukra',
'हिंदी: शुक्र ग्रह को नमन। English: Salutations to Venus.',
'सौंदर्य, कला में सफलता, दांपत्य सुख। Beauty, arts, marital bliss.',
'ॐ (OM) द्रां (DRAAM) द्रीं (DREEM) द्रौं (DRAUM) सः (SAH) शु-क्रा-य (SHU-KRAA-YA)',
'https://archive.org/download/ShukraMantra/Shukra_Graha_Mantra.mp3',
'Friday morning',
108, 'venus', 'द्रां'),

-- 14. Rahu Mantra
('ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः',
'Rahu',
'हिंदी: राहु को नमन। English: Salutations to Rahu.',
'राहु दोष निवारण, काल सर्प दोष शांति। Removes Rahu dosha.',
'ॐ (OM) भ्रां (BHRAAM) भ्रीं (BHREEM) भ्रौं (BHRAUM) सः (SAH) रा-ह-वे (RAA-HA-VE)',
'https://archive.org/download/RahuMantra/Rahu_Graha_Mantra.mp3',
'Saturday night',
108, 'rahu', 'भ्रां'),

-- 15. Ketu Mantra
('ॐ स्रां स्रीं स्रौं सः केतवे नमः',
'Ketu',
'हिंदी: केतु को नमन। English: Salutations to Ketu.',
'केतु दोष निवारण, आध्यात्मिक प्रगति। Removes Ketu dosha, spiritual progress.',
'ॐ (OM) स्रां (SRAAM) स्रीं (SREEM) स्रौं (SRAUM) सः (SAH) के-त-वे (KE-TA-VE)',
'https://archive.org/download/KetuMantra/Ketu_Graha_Mantra.mp3',
'Tuesday, Thursday',
108, 'ketu', 'स्रां');
