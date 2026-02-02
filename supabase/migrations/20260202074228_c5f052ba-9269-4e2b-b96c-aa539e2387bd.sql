
-- Migration: Update Temples with Live Darshan URLs and Add 10 Major Temples

-- Update existing temples with live darshan URLs
UPDATE temples SET 
  live_darshan_url = 'https://www.youtube.com/c/TirupatiTemple/live',
  tradition = 'Vaishnavism',
  youtube_channel_id = 'UCTirupatiTemple'
WHERE name ILIKE '%tirumala%' OR name ILIKE '%tirupati%' OR name ILIKE '%venkateshwara%';

UPDATE temples SET 
  live_darshan_url = 'https://www.youtube.com/c/ShreeJagannathTemple/live',
  tradition = 'Vaishnavism',
  youtube_channel_id = 'UCJagannathTemple'
WHERE name ILIKE '%jagannath%' AND (name ILIKE '%puri%' OR description ILIKE '%puri%');

UPDATE temples SET 
  live_darshan_url = 'https://www.youtube.com/c/ShriKashiVishwanath/live',
  tradition = 'Shaivism',
  youtube_channel_id = 'UCKashiVishwanath'
WHERE name ILIKE '%vishwanath%' OR name ILIKE '%kashi%';

UPDATE temples SET 
  live_darshan_url = 'https://www.youtube.com/c/DwarkadhishTemple/live',
  tradition = 'Vaishnavism',
  youtube_channel_id = 'UCDwarkadhish'
WHERE name ILIKE '%dwarka%';

UPDATE temples SET 
  live_darshan_url = 'https://www.youtube.com/c/SiddhivinayakTemple/live',
  tradition = 'Ganapatya',
  youtube_channel_id = 'UCSiddhivinayak'
WHERE name ILIKE '%siddhivinayak%';

UPDATE temples SET 
  live_darshan_url = 'https://www.youtube.com/c/ShirdiSaiBaba/live',
  tradition = 'Sai Sampradaya',
  youtube_channel_id = 'UCShirdiSai'
WHERE name ILIKE '%shirdi%' OR name ILIKE '%sai baba%';

UPDATE temples SET 
  live_darshan_url = 'https://www.youtube.com/c/VaishnoDeviShrine/live',
  tradition = 'Shaktism',
  youtube_channel_id = 'UCVaishnoDevi'
WHERE name ILIKE '%vaishno%';

UPDATE temples SET 
  live_darshan_url = 'https://www.youtube.com/c/AmbaDevi/live',
  tradition = 'Shaktism'
WHERE name ILIKE '%amba%' OR name ILIKE '%ambaji%';

UPDATE temples SET 
  live_darshan_url = 'https://www.youtube.com/c/MeenakshiTemple/live',
  tradition = 'Shaivism-Shaktism',
  youtube_channel_id = 'UCMeenakshiTemple'
WHERE name ILIKE '%meenakshi%' OR name ILIKE '%madurai%';

UPDATE temples SET 
  live_darshan_url = 'https://www.youtube.com/c/SriRangamTemple/live',
  tradition = 'Vaishnavism',
  youtube_channel_id = 'UCSriRangam'
WHERE name ILIKE '%ranganath%' OR name ILIKE '%srirangam%';

-- Add 10 New Major Temples
INSERT INTO temples (name, primary_deity, tradition, location, description, history, live_darshan_url, youtube_channel_id, visiting_hours, facilities, rating, verified) VALUES

-- 1. Padmanabhaswamy Temple
('Padmanabhaswamy Temple / पद्मनाभस्वामी मंदिर',
'Vishnu (Padmanabha)',
'Vaishnavism',
'{"city": "Thiruvananthapuram", "state": "Kerala", "country": "India", "coordinates": {"lat": 8.4829, "lng": 76.9442}}',
'हिंदी: पद्मनाभस्वामी मंदिर केरल की राजधानी तिरुवनंतपुरम में स्थित भगवान विष्णु का प्रसिद्ध मंदिर है। यहाँ भगवान विष्णु अनंत शेषनाग पर शयन मुद्रा में विराजमान हैं। यह विश्व के सबसे धनी मंदिरों में से एक है।

English: Padmanabhaswamy Temple in Thiruvananthapuram, Kerala is a famous Vishnu temple. Lord Vishnu reclines on Ananta Shesha. It is one of the richest temples in the world.',
'यह मंदिर 8वीं शताब्दी में बनाया गया था। त्रावणकोर राजवंश के राजा इसके संरक्षक थे। 2011 में मंदिर के तहखानों में अपार संपत्ति मिली।',
'https://www.youtube.com/c/PadmanabhaswamyTemple/live',
'UCPadmanabhaswamy',
'{"morning": "03:30-12:00", "evening": "17:00-20:00", "dress_code": "Men: Dhoti, Women: Saree/Set-mundu"}',
'["Prasad", "Accommodation", "Photography prohibited inside"]',
4.8, true),

-- 2. Brihadeeswarar Temple
('Brihadeeswarar Temple / बृहदीश्वर मंदिर',
'Shiva (Brihadeeswarar)',
'Shaivism',
'{"city": "Thanjavur", "state": "Tamil Nadu", "country": "India", "coordinates": {"lat": 10.7828, "lng": 79.1318}}',
'हिंदी: बृहदीश्वर मंदिर तमिलनाडु के तंजावुर में स्थित है। चोल राजा राजराज प्रथम द्वारा 11वीं शताब्दी में निर्मित, यह द्रविड़ वास्तुकला का उत्कृष्ट उदाहरण है। UNESCO विश्व धरोहर स्थल।

English: Brihadeeswarar Temple in Thanjavur, Tamil Nadu was built by Chola King Rajaraja I in 11th century. A masterpiece of Dravidian architecture and UNESCO World Heritage Site.',
'1010 ई. में राजराज चोल प्रथम द्वारा निर्मित। 216 फीट ऊंचा विमान बिना छाया के। 80 टन का शिखर एक ही पत्थर से।',
'https://www.youtube.com/c/BrihadeeswararTemple/live',
'UCBrihadeeswarar',
'{"morning": "06:00-12:30", "evening": "16:00-20:30"}',
'["Parking", "Museum", "Photography allowed outside"]',
4.9, true),

-- 3. Mahakaleshwar Temple
('Mahakaleshwar Jyotirlinga / महाकालेश्वर ज्योतिर्लिंग',
'Shiva (Mahakal)',
'Shaivism',
'{"city": "Ujjain", "state": "Madhya Pradesh", "country": "India", "coordinates": {"lat": 23.1828, "lng": 75.7682}}',
'हिंदी: महाकालेश्वर मंदिर उज्जैन में स्थित 12 ज्योतिर्लिंगों में से एक है। यहाँ का भस्म आरती विश्व प्रसिद्ध है। यह एकमात्र दक्षिणमुखी ज्योतिर्लिंग है।

English: Mahakaleshwar Temple in Ujjain is one of 12 Jyotirlingas. Famous for Bhasma Aarti at 4 AM. The only south-facing Jyotirlinga.',
'पुराणों में वर्णित प्राचीन मंदिर। वर्तमान संरचना मराठा काल की। शिप्रा नदी तट पर स्थित।',
'https://www.youtube.com/c/MahakaleshwarTemple/live',
'UCMahakaleshwar',
'{"bhasma_aarti": "04:00", "morning": "04:00-12:00", "evening": "16:00-23:00"}',
'["Bhasma Aarti booking online", "Prasad", "Accommodation", "VIP Darshan"]',
4.8, true),

-- 4. Somnath Temple
('Somnath Jyotirlinga / सोमनाथ ज्योतिर्लिंग',
'Shiva (Somnath)',
'Shaivism',
'{"city": "Veraval", "state": "Gujarat", "country": "India", "coordinates": {"lat": 20.8880, "lng": 70.4012}}',
'हिंदी: सोमनाथ मंदिर गुजरात में स्थित प्रथम ज्योतिर्लिंग है। समुद्र तट पर स्थित यह मंदिर कई बार नष्ट और पुनर्निर्मित हुआ। वर्तमान मंदिर 1951 में सरदार पटेल की पहल पर बना।

English: Somnath Temple in Gujarat is the first Jyotirlinga. Located on the seashore, it was destroyed and rebuilt many times. Current temple was built in 1951 on Sardar Patel''s initiative.',
'चंद्रमा ने यहाँ तप किया था। महमूद गजनवी ने 1024 में लूटा। सरदार पटेल ने पुनर्निर्माण कराया।',
'https://www.youtube.com/c/SomnathTemple/live',
'UCSomnathTemple',
'{"morning": "06:00-12:00", "evening": "18:00-21:00", "light_show": "20:00-21:00"}',
'["Light & Sound Show", "Museum", "Seashore", "Parking"]',
4.7, true),

-- 5. Trimbakeshwar Temple
('Trimbakeshwar Jyotirlinga / त्र्यंबकेश्वर ज्योतिर्लिंग',
'Shiva (Trimbakeshwar)',
'Shaivism',
'{"city": "Trimbak", "state": "Maharashtra", "country": "India", "coordinates": {"lat": 19.9322, "lng": 73.5311}}',
'हिंदी: त्र्यंबकेश्वर मंदिर नासिक के पास स्थित 12 ज्योतिर्लिंगों में से एक है। गोदावरी नदी का उद्गम स्थल। यहाँ त्रिदेव (ब्रह्मा, विष्णु, शिव) की पूजा होती है।

English: Trimbakeshwar Temple near Nashik is one of 12 Jyotirlingas. Source of Godavari River. The Tridev (Brahma, Vishnu, Shiva) are worshipped here.',
'ब्रह्मगिरि पर्वत पर स्थित। पेशवा नानासाहेब ने वर्तमान मंदिर बनवाया। काल सर्प दोष निवारण के लिए प्रसिद्ध।',
'https://www.youtube.com/c/Trimbakeshwar/live',
'UCTrimbakeshwar',
'{"morning": "05:30-12:00", "evening": "17:00-21:00"}',
'["Kaal Sarpa Puja", "Narayan Nagbali", "Tripindi Shradh"]',
4.6, true),

-- 6. Omkareshwar Temple
('Omkareshwar Jyotirlinga / ओंकारेश्वर ज्योतिर्लिंग',
'Shiva (Omkareshwar)',
'Shaivism',
'{"city": "Khandwa", "state": "Madhya Pradesh", "country": "India", "coordinates": {"lat": 22.2453, "lng": 76.1518}}',
'हिंदी: ओंकारेश्वर मंदिर नर्मदा नदी के द्वीप पर स्थित है जो ॐ के आकार का है। यहाँ दो ज्योतिर्लिंग हैं - ओंकारेश्वर और अमलेश्वर (ममलेश्वर)।

English: Omkareshwar Temple is on an island in Narmada River shaped like OM. Two Jyotirlingas are here - Omkareshwar and Amleshwar (Mamleshwar).',
'आदि शंकराचार्य ने यहाँ अपने गुरु गोविंद भगवत्पाद से दीक्षा ली। नर्मदा परिक्रमा का महत्वपूर्ण स्थल।',
'https://www.youtube.com/c/OmkareshwarTemple/live',
'UCOmkareshwar',
'{"morning": "05:00-12:00", "evening": "16:00-21:00"}',
'["Boat ride", "Parikrama", "Narmada Ghat"]',
4.5, true),

-- 7. Kamakhya Temple
('Kamakhya Temple / कामाख्या मंदिर',
'Shakti (Kamakhya)',
'Shaktism',
'{"city": "Guwahati", "state": "Assam", "country": "India", "coordinates": {"lat": 26.1660, "lng": 91.7047}}',
'हिंदी: कामाख्या मंदिर गुवाहाटी में नीलांचल पर्वत पर स्थित है। यह 51 शक्तिपीठों में से एक है जहाँ सती का योनि भाग गिरा था। अंबुबाची मेला विश्व प्रसिद्ध है।

English: Kamakhya Temple in Guwahati is on Nilachal Hill. One of 51 Shakti Peethas where Sati''s yoni fell. Famous for Ambubachi festival.',
'देवी की माहवारी का उत्सव अंबुबाची के रूप में मनाया जाता है। तांत्रिक साधना का प्रमुख केंद्र।',
'https://www.youtube.com/c/KamakhyaTemple/live',
'UCKamakhyaTemple',
'{"morning": "08:00-13:00", "evening": "14:30-17:30", "closed_during_ambubachi": "June (3 days)"}',
'["Tantric rituals", "Ambubachi festival", "Animal sacrifice (with restrictions)"]',
4.4, true),

-- 8. Badrinath Temple
('Badrinath Temple / बद्रीनाथ मंदिर',
'Vishnu (Badrinarayan)',
'Vaishnavism',
'{"city": "Badrinath", "state": "Uttarakhand", "country": "India", "coordinates": {"lat": 30.7433, "lng": 79.4938}}',
'हिंदी: बद्रीनाथ मंदिर उत्तराखंड में हिमालय में स्थित चार धामों में से एक है। भगवान विष्णु के बद्री वन में तप का स्थान। नर-नारायण पर्वतों के बीच।

English: Badrinath Temple in Uttarakhand is one of Char Dham. Lord Vishnu meditated here in Badri forest. Between Nar and Narayana mountains.',
'आदि शंकराचार्य ने 9वीं शताब्दी में पुनर्स्थापित किया। 6 महीने खुलता है (अप्रैल-नवंबर)। Tapt Kund गर्म पानी का कुंड।',
'https://www.youtube.com/c/BadrinathTemple/live',
'UCBadrinath',
'{"morning": "04:30-13:00", "evening": "16:00-21:00", "open": "April to November"}',
'["Tapt Kund hot spring", "Char Dham yatra", "Brahma Kapal for Pind Daan"]',
4.9, true),

-- 9. Kedarnath Temple
('Kedarnath Temple / केदारनाथ मंदिर',
'Shiva (Kedareshwar)',
'Shaivism',
'{"city": "Kedarnath", "state": "Uttarakhand", "country": "India", "coordinates": {"lat": 30.7352, "lng": 79.0669}}',
'हिंदी: केदारनाथ मंदिर उत्तराखंड में हिमालय की गोद में स्थित 12 ज्योतिर्लिंगों में से एक है। 3,583 मीटर की ऊंचाई पर। पांडवों ने इसकी स्थापना की।

English: Kedarnath Temple in Uttarakhand is one of 12 Jyotirlingas at 3,583m altitude. Established by Pandavas. Part of Panch Kedar.',
'2013 की बाढ़ में मंदिर सुरक्षित रहा। 14 किमी की पैदल यात्रा या हेलीकॉप्टर। आदि शंकराचार्य की समाधि यहाँ।',
'https://www.youtube.com/c/KedarnathTemple/live',
'UCKedarnath',
'{"morning": "04:00-15:00", "evening": "16:00-21:00", "open": "April/May to November"}',
'["Trek 14km", "Helicopter service", "Adi Shankaracharya Samadhi", "Bhairav Temple"]',
4.9, true),

-- 10. Golden Temple
('Golden Temple / स्वर्ण मंदिर (हरमंदिर साहिब)',
'Guru Granth Sahib',
'Sikhism',
'{"city": "Amritsar", "state": "Punjab", "country": "India", "coordinates": {"lat": 31.6200, "lng": 74.8765}}',
'हिंदी: स्वर्ण मंदिर अमृतसर में स्थित सिखों का सबसे पवित्र गुरुद्वारा है। सरोवर के बीच में सोने से मढ़ा मंदिर। विश्व का सबसे बड़ा लंगर यहाँ चलता है।

English: Golden Temple (Harmandir Sahib) in Amritsar is the holiest Sikh Gurdwara. Gold-plated temple in the middle of a sacred pool. World''s largest free kitchen (Langar).',
'1604 में गुरु अर्जन देव ने निर्माण कराया। 1802 में महाराजा रणजीत सिंह ने सोने से मढ़वाया। चार द्वार सभी धर्मों का स्वागत करते हैं।',
'https://www.youtube.com/c/GoldenTempleAmritsar/live',
'UCGoldenTemple',
'{"open": "24 hours", "langar": "24 hours free meals"}',
'["Langar (free meals)", "Sarovar (holy pool)", "Museum", "Jallianwala Bagh nearby"]',
4.9, true);
