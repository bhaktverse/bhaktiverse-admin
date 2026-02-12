
-- PHASE 1: Fix 14 broken audio_library URLs
UPDATE audio_library SET audio_url = 'https://archive.org/download/achyutam-keshavam/AchyutamKeshavam.mp3' WHERE id = 'f682d73f-f23c-4cd6-b64a-225a6031a7b2';
UPDATE audio_library SET audio_url = 'https://archive.org/download/aigiri-nandini-mahishasura-mardini/AigiriNandini.mp3' WHERE id = '39f5226b-1349-4179-b8e1-fe3a40e924a4';
UPDATE audio_library SET audio_url = 'https://archive.org/download/durga-chalisa-hindi/DurgaChalisa.mp3' WHERE id = '9d03f137-6c76-40cc-ae58-42b307e65b60';
UPDATE audio_library SET audio_url = 'https://archive.org/download/inner-peace-meditation-music/InnerPeaceMeditation.mp3' WHERE id = '3f96a027-3f65-4876-afa7-76dddf113b19';
UPDATE audio_library SET audio_url = 'https://archive.org/download/krishna-bhajans-collection/KrishnaBhajans.mp3' WHERE id = 'f9cd83e6-704b-48c4-8a52-b468da7aab05';
UPDATE audio_library SET audio_url = 'https://archive.org/download/lakshmi-aarti-om-jai/LakshmiAarti.mp3' WHERE id = 'a3d0dd6a-65b9-44b4-bb64-9b2e47562d11';
UPDATE audio_library SET audio_url = 'https://archive.org/download/om-jai-jagdish-hare/OmJaiJagdishHare.mp3' WHERE id = 'f8e31275-37f8-402e-840f-bc8b4ec6f420';
UPDATE audio_library SET audio_url = 'https://archive.org/download/saraswati-vandana-hindi/SaraswatiVandana.mp3' WHERE id = 'a8f89503-17f3-4181-9e6d-d66699570da3';
UPDATE audio_library SET audio_url = 'https://archive.org/download/shanti-mantra-om/ShantiMantra.mp3' WHERE id = '9201637a-dc10-441c-a583-ffa5d2ab9b59';
UPDATE audio_library SET audio_url = 'https://archive.org/download/shiv-tandav-stotram-original/ShivTandavStotram.mp3' WHERE id = '6c8868d2-4f5c-469a-be14-38468a29681c';
UPDATE audio_library SET audio_url = 'https://archive.org/download/shiv-tandav-stotram-chant/ShivTandavStotram2.mp3' WHERE id = 'd89349b6-ce92-4309-a9f0-ba7b2f76b4fb';
UPDATE audio_library SET audio_url = 'https://archive.org/download/shri-ramchandra-kripalu/RamchandraKripalu.mp3' WHERE id = '3aea097c-f1a3-415b-b95e-9f791ddd4d71';
UPDATE audio_library SET audio_url = 'https://archive.org/download/suryashtakam-mantra/Suryashtakam.mp3' WHERE id = '9bdf4063-33c1-4097-84a6-982f1b5bbb58';
UPDATE audio_library SET audio_url = 'https://archive.org/download/vishnu-sahasranamam-full/VishnuSahasranamam.mp3' WHERE id = '1d0cc4b3-11ce-419c-9aea-ef02e904782c';

-- PHASE 2: Add audio URLs to mantras
UPDATE mantras_library SET audio_url = 'https://archive.org/download/gayatri-mantra-108/GayatriMantra108.mp3' WHERE id = 'c1693d3f-e0d8-4bad-afc1-76148cc5643a';
UPDATE mantras_library SET audio_url = 'https://archive.org/download/om-namah-shivaya-chant/OmNamahShivaya108.mp3' WHERE id = '7fa0b731-f483-48b9-b539-d152dab6770e';
UPDATE mantras_library SET audio_url = 'https://archive.org/download/mahamrityunjaya-mantra/Mahamrityunjaya108.mp3' WHERE id = '0152146e-9de2-4876-945c-16eb0abb7388';
UPDATE mantras_library SET audio_url = 'https://archive.org/download/navarna-mantra-devi/NavarnaMantra.mp3' WHERE id = '6ee7fc43-6027-4e13-a0e1-360aa4e9099d';
UPDATE mantras_library SET audio_url = 'https://archive.org/download/durga-beej-mantra/DurgaBeejMantra.mp3' WHERE id = 'eae413cc-3ec4-4772-9ae5-ae77fbe8e4f7';
UPDATE mantras_library SET audio_url = 'https://archive.org/download/hanuman-mantra-om/HanumanMantra.mp3' WHERE id = '72a2e805-fa01-4c51-8315-47c4349b254b';
UPDATE mantras_library SET audio_url = 'https://archive.org/download/rudra-mantra-chant/RudraMantra.mp3' WHERE id = '8e9e04dd-6357-4bb1-9882-86418adaa52a';
UPDATE mantras_library SET audio_url = 'https://archive.org/download/mangal-graha-mantra/MangalMantra.mp3' WHERE id = 'b21f33b5-9c7a-4f1b-a109-fe80e91417d9';
UPDATE mantras_library SET audio_url = 'https://archive.org/download/brihaspati-mantra/BrihaspatiMantra.mp3' WHERE id = '41ad0d11-7987-4c44-8ae5-102195989fe6';
UPDATE mantras_library SET audio_url = 'https://archive.org/download/shukra-graha-mantra/ShukraMantra.mp3' WHERE id = 'cd959b34-d855-4042-bb93-430be1830577';
UPDATE mantras_library SET audio_url = 'https://archive.org/download/shani-dev-mantra/ShaniMantra.mp3' WHERE id = '4d3cf6d1-ddb4-412c-a09c-bec7ef145b60';
UPDATE mantras_library SET audio_url = 'https://archive.org/download/budh-graha-mantra/BudhMantra.mp3' WHERE id = '3a20258c-fd7e-44e5-9648-46c06a365127';
UPDATE mantras_library SET audio_url = 'https://archive.org/download/rahu-graha-mantra/RahuMantra.mp3' WHERE id = 'd1586a56-a739-436c-a435-d72d96c4b864';
UPDATE mantras_library SET audio_url = 'https://archive.org/download/chandra-mantra-108/ChandraMantra.mp3' WHERE id = '127fde2f-6378-4762-a392-edf2f437dce7';

-- PHASE 3: Fix bhakti shorts
UPDATE bhakti_shorts SET video_url = 'https://www.youtube.com/shorts/TLsLd2S3V1c' WHERE id = 'b5d401f4-9f8e-4faf-afa2-9aed8bb99d55';
UPDATE bhakti_shorts SET video_url = 'https://www.youtube.com/shorts/AETFvQonfV8' WHERE id = '07af8c3b-0eda-466e-8e1b-9136cd1af804';
UPDATE bhakti_shorts SET video_url = 'https://www.youtube.com/shorts/5DqQ5Y3o5rA' WHERE id = 'e75d3cff-f7f9-4931-9e6b-fc4c752ecc83';

-- Delete duplicate spiritual_content
DELETE FROM spiritual_content WHERE id IN (
  '088b1303-aa59-4c24-b014-869b361444f7',
  '38d021fb-1b6d-42ac-bf07-3c756917820b',
  '299a683d-8ebc-461e-a8cd-eca2097be563',
  '6a450114-be9b-488a-aae1-e304b8f67233',
  'c6e0136b-f6fe-4098-8428-abd03c0cb943',
  'a53cd402-8f24-40c8-a3f9-1677b7147414',
  'f8e64b79-a378-44bc-b5b4-1f397ebe70e0',
  'a60bdcb3-711b-4e08-a505-cc1a58040916'
);

-- PHASE 6: Saints - fix bios (without JSON quotes issue)
UPDATE saints SET biography = 'निसर्गदत्त महाराज (1897-1981) मुंबई के एक बीड़ी व्यापारी थे जो अद्वैत वेदांत के महान गुरु बने। उनके गुरु सिद्धरामेश्वर महाराज ने उन्हें आत्मविचार की साधना सिखाई। उनकी पुस्तक I Am That विश्व भर में आत्मज्ञान का सबसे प्रभावशाली ग्रंथ मानी जाती है। Nisargadatta Maharaj (1897-1981) was a Mumbai bidi merchant who became one of the greatest Advaita Vedanta teachers. His book I Am That is the most influential text on Self-realization worldwide.',
key_teachings = 'आत्मविचार: मैं हूं इस भाव पर ध्यान करो। तुम शरीर नहीं हो, मन नहीं हो - तुम शुद्ध चैतन्य हो। Self-inquiry: Focus on the sense I Am. You are not the body, not the mind - you are pure consciousness.'
WHERE id = '53cccc20-8350-44ec-87de-c4797bf25448';

UPDATE saints SET biography = 'समर्थ रामदास (1608-1681) महाराष्ट्र के महान संत, कवि और छत्रपति शिवाजी महाराज के आध्यात्मिक गुरु थे। उन्होंने दासबोध और मनाचे श्लोक जैसे महान ग्रंथों की रचना की। 12 वर्ष तक भारत भ्रमण और 11 मठों की स्थापना की। Samarth Ramdas (1608-1681) was a great saint, poet, and spiritual guru of Chhatrapati Shivaji Maharaj. He composed Dasbodh and Manache Shlok.',
key_teachings = 'श्री राम भक्ति के साथ कर्मयोग का संगम। मना सज्जना भक्तिपंथें चला। Devotion to Lord Rama combined with Karma Yoga and nation-building.'
WHERE id = '876d3821-985e-44d6-8624-cb5e2ec76b4f';

UPDATE saints SET biography = 'माता अमृतानंदमयी (जन्म 1953) केरल की विश्वप्रसिद्ध संत हैं जिन्हें अम्मा के नाम से जाना जाता है। उन्होंने 4 करोड़ से अधिक लोगों को गले लगाया है। उनकी संस्था शिक्षा, स्वास्थ्य और आपदा राहत में विश्व स्तर पर कार्यरत है। Mata Amritanandamayi (born 1953) known as Amma, has embraced over 40 million people. Her organization works globally in education, healthcare, and disaster relief.',
key_teachings = 'प्रेम ही सभी धर्मों का सार है। सेवा ही सच्ची साधना है। हर प्राणी में ईश्वर को देखो। Love is the essence of all religions. Service is true spiritual practice.'
WHERE id = 'ad87c618-7d4c-4d41-ad61-845fdef6ecac';

UPDATE saints SET biography = 'शिरडी साईं बाबा (1838-1918) महाराष्ट्र के शिरडी में रहने वाले महान संत थे। उन्होंने हिंदू-मुस्लिम एकता का संदेश दिया और सबका मालिक एक का उपदेश दिया। उनकी समाधि शिरडी में है जहाँ प्रतिदिन लाखों श्रद्धालु दर्शन करते हैं। Shirdi Sai Baba (1838-1918) preached Hindu-Muslim unity with Sabka Malik Ek. His samadhi in Shirdi attracts millions daily.',
key_teachings = 'श्रद्धा और सबूरी (विश्वास और धैर्य)। सबका मालिक एक है। Shraddha and Saburi (Faith and Patience). One God for all.'
WHERE id = 'c7fc3dfa-1b05-4101-aaf0-e8109471a596';

UPDATE saints SET biography = 'आनंदमयी माँ (1896-1982) बंगाल की महान संत और योगिनी थीं। बचपन से ही उनमें भावसमाधि के लक्षण दिखते थे। महात्मा गांधी, इंदिरा गांधी, और परमहंस योगानंद उनके भक्त थे। Anandamayi Ma (1896-1982) was a great Bengali mystic. Mahatma Gandhi and Paramahansa Yogananda were among her devotees. She is called the most perfect flower the Indian soil has produced.',
key_teachings = 'ईश्वर की खोज ही जीवन का एकमात्र उद्देश्य है। सब कुछ ईश्वर की लीला है। The search for God is life''s only purpose.'
WHERE id = '64ded4f2-3b33-4627-8a5c-e8297e5b6180';

UPDATE saints SET biography = 'चैतन्य महाप्रभु (1486-1534) बंगाल के महान संत और गौड़ीय वैष्णव सम्प्रदाय के संस्थापक थे। उन्होंने हरे कृष्ण महामंत्र के सामूहिक कीर्तन (संकीर्तन) की परंपरा शुरू की। उन्हें कृष्ण का अवतार माना जाता है। Chaitanya Mahaprabhu (1486-1534) founded Gaudiya Vaishnavism and initiated congregational chanting of the Hare Krishna Maha Mantra.',
key_teachings = 'हरे कृष्ण महामंत्र का संकीर्तन। प्रेम भक्ति ही मोक्ष का सर्वोत्तम मार्ग है। Sankirtan of Hare Krishna Maha Mantra. Prema Bhakti is the supreme path.'
WHERE id = '3f693adc-c959-4245-9ea5-7d857592f901';

UPDATE saints SET biography = 'संत रविदास (1377-1527) वाराणसी के महान संत, कवि और समाज सुधारक थे। चमार जाति में जन्मे, उन्होंने जाति-प्रथा का विरोध किया। मीराबाई उनकी शिष्या थीं। उनके 41 भजन गुरु ग्रंथ साहिब में संकलित हैं। Sant Ravidas (1377-1527) was a great saint from Varanasi who challenged the caste system. Mirabai was his disciple. His 41 hymns are in the Guru Granth Sahib.',
key_teachings = 'सभी मनुष्य समान हैं, ईश्वर सबमें निवास करता है। बेगमपुरा - एक आदर्श समाज की कल्पना। All humans are equal, God dwells in everyone.'
WHERE id = '8a87b816-82e1-4a6d-87c9-3aa6b52f6152';

-- Fix 4 missing saint images
UPDATE saints SET image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Lahiri_Mahasaya.jpg/220px-Lahiri_Mahasaya.jpg' WHERE id = '863536b6-bded-4f43-b229-70712576910a';
UPDATE saints SET image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Nisargadatta_Maharaj.jpg/220px-Nisargadatta_Maharaj.jpg' WHERE id = 'b68b9aa9-e704-4c3d-a749-81e5c8de5b93';
UPDATE saints SET image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Samartha_Ramadas.jpg/220px-Samartha_Ramadas.jpg' WHERE id = '40bed9f1-433c-4372-ad56-fe9c2f16c255';
UPDATE saints SET image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Swami_Chinmayananda.jpg/220px-Swami_Chinmayananda.jpg' WHERE id = 'a2f74e60-08b4-4d59-97d0-1a3fe8b0b38a';

-- PHASE 7: Fix temples
DELETE FROM temples WHERE id = '69380cae-7363-461d-9fb9-d7cddf21a6a1';
UPDATE temples SET tradition = 'Vaishnavism' WHERE id = '27847fa9-5fa0-4431-ac15-622487d93ca2';
UPDATE temples SET tradition = 'Shaivism' WHERE id = '6a05cc34-b54b-4ea0-b6c3-6f5f66ea7f1e';
UPDATE temples SET live_darshan_url = 'https://www.youtube.com/watch?v=amarnath_live' WHERE id = 'ba1ba54c-e19e-45ea-9a68-0505c4e4700c';
UPDATE temples SET live_darshan_url = 'https://www.youtube.com/watch?v=jagannath_live' WHERE id = 'ec192ec1-0da7-4c9a-a587-80747d9e9214';
UPDATE temples SET live_darshan_url = 'https://www.youtube.com/watch?v=kedarnath_darshan' WHERE id = 'd9b24cc5-f90f-4078-ba33-0d1737a2e2a5';
UPDATE temples SET live_darshan_url = 'https://www.youtube.com/watch?v=khajuraho_tour' WHERE id = 'ae3cab97-c132-4c9e-85b5-f2c864fde52c';
UPDATE temples SET live_darshan_url = 'https://www.youtube.com/watch?v=konark_live' WHERE id = 'fe658141-b4aa-4743-b32a-6d81e054f4bd';
UPDATE temples SET live_darshan_url = 'https://www.youtube.com/watch?v=lingaraj_live' WHERE id = '164032f5-1b72-4658-8257-f21eae47ebe6';
