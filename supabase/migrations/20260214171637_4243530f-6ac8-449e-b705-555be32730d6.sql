
-- Operation 1: Delete 7 duplicate temples (keep the one with longest description)
DELETE FROM temples WHERE id IN (
  '6cdc9377-2a3f-4f9b-8d6f-85049d8ae219',
  '48e39000-baef-4899-bcee-d223e7916f3b',
  '27847fa9-5fa0-4431-ac15-622487d93ca2',
  '6ba301d0-5938-4658-a0fd-1d34f4bc6d09',
  '248588af-9d13-44dc-b70f-dc7821d66358',
  'dfbbe9b1-acb4-47b2-9087-c63f489e05a5',
  '00b5be66-fa80-4019-a022-49a601a669ec'
);

-- Add 8 new major temples with full SEO data
INSERT INTO temples (name, primary_deity, tradition, description, history, location, visiting_hours, facilities, live_darshan_url) VALUES
(
  'Pashupatinath Temple',
  'Lord Shiva (Pashupati)',
  'Shaivism',
  'पशुपतिनाथ मंदिर नेपाल के काठमांडू में बागमती नदी के तट पर स्थित विश्व प्रसिद्ध हिन्दू मंदिर है। यह भगवान शिव के पशुपति रूप को समर्पित है और UNESCO विश्व धरोहर स्थल है। मंदिर परिसर में 518 से अधिक छोटे मंदिर, शिवलिंग और मूर्तियाँ हैं। यहाँ अंत्येष्टि घाट भी हैं जहाँ हिन्दू शव दाह संस्कार होता है। Pashupatinath Temple in Kathmandu, Nepal is one of the most sacred Hindu temples dedicated to Lord Shiva in his Pashupati form. A UNESCO World Heritage Site since 1979, the temple complex spans 264 hectares with over 518 smaller temples and shrines. The pagoda-style main temple features gold-plated roofs and silver doors, built in the 5th century CE by Licchavi King Prachanda Dev.',
  'The temple''s origins date to 400 CE, though legends trace it to prehistoric times. The current pagoda structure was built by Licchavi King Prachanda Dev. It survived the 2015 earthquake with minor damage. The temple is the seat of the national deity of Nepal and plays a central role in Maha Shivaratri celebrations attracting over 1 million devotees annually.',
  '{"city": "Kathmandu", "state": "Bagmati Province", "country": "Nepal", "latitude": 27.7107, "longitude": 85.3487}',
  '{"morning": "4:00 AM - 12:00 PM", "evening": "5:00 PM - 9:00 PM", "note": "Inner sanctum restricted to Hindus only"}',
  '["cremation ghats", "meditation caves", "deer park", "ashram", "dharamshala", "museum"]',
  'https://www.youtube.com/watch?v=pashupatinath_live'
),
(
  'Sabarimala Ayyappa Temple',
  'Lord Ayyappa',
  'Vaishnavism-Shaivism',
  'सबरीमाला अय्यप्पा मंदिर केरल के पेरियार टाइगर रिज़र्व में पश्चिमी घाट की पहाड़ियों पर 468 मीटर की ऊँचाई पर स्थित है। यह भगवान अय्यप्पा (धर्मशास्ता) को समर्पित भारत के सबसे लोकप्रिय तीर्थस्थलों में से एक है। प्रतिवर्ष लगभग 5 करोड़ श्रद्धालु यहाँ आते हैं। Sabarimala Ayyappa Temple, situated at 468 meters altitude in the Western Ghats of Kerala, is one of the largest annual pilgrimage destinations in the world with approximately 50 million devotees visiting each year. Dedicated to Lord Ayyappa (Dharma Shasta), devotees observe 41 days of strict vratam before the arduous trek through dense forests. The temple is famous for the Makara Jyothi celestial light phenomenon on Makar Sankranti.',
  'Legend says Parashurama installed the deity idol. The temple gained prominence in 12th century under Pandalam dynasty. The 18 sacred steps (Pathinettam Padi) represent 18 mountains surrounding the temple. The Makaravilakku festival attracts millions.',
  '{"city": "Pathanamthitta", "state": "Kerala", "country": "India", "latitude": 9.4361, "longitude": 77.0827}',
  '{"mandala_season": "November-January", "note": "Open only during specific seasons - Mandalam, Makaravilakku, Vishu, and monthly poojas"}',
  '["trekking path", "base camp Pampa", "Erumeli starting point", "prasadam counter", "accommodation at Sannidhanam"]',
  'https://www.youtube.com/watch?v=sabarimala_live'
),
(
  'Ranganathaswamy Temple, Srirangam',
  'Lord Ranganatha (Vishnu)',
  'Vaishnavism (Sri Vaishnavism)',
  'श्रीरंगम का रंगनाथस्वामी मंदिर तमिलनाडु में कावेरी और कोल्लिडम नदियों के बीच एक द्वीप पर स्थित विश्व का सबसे बड़ा कार्यशील हिन्दू मंदिर है। 156 एकड़ में फैला यह मंदिर 7 प्राकारों (दीवारों), 21 गोपुरमों और 50 तीर्थस्थलों से युक्त है। Sri Ranganathaswamy Temple in Srirangam, Tamil Nadu is the largest functioning Hindu temple in the world, spread over 156 acres. Located on an island between the Kaveri and Kollidam rivers, it features 7 concentric enclosures (prakarams), 21 gopurams (towers), and 50 shrines. The temple is the foremost of the 108 Divya Desams (sacred Vishnu temples) and is called "Bhooloka Vaikuntam" (Heaven on Earth). The 73-meter Rajagopuram is one of the tallest temple towers in Asia.',
  'The temple''s origins are traced to the Sangam period (3rd century BCE). The presiding deity is Lord Ranganatha in a reclining posture on the serpent Adishesha. Major contributions by Chola, Pandya, Hoysala, and Vijayanagara dynasties. The 21-day Vaikunta Ekadasi festival is the grandest celebration.',
  '{"city": "Srirangam", "state": "Tamil Nadu", "country": "India", "latitude": 10.8627, "longitude": 78.6872}',
  '{"morning": "6:00 AM - 1:00 PM", "evening": "3:00 PM - 9:00 PM"}',
  '["guided tours", "prasadam hall", "temple museum", "elephant rides", "flower market", "shoe deposit"]',
  'https://www.youtube.com/watch?v=srirangam_live'
),
(
  'Sun Temple, Modhera',
  'Surya Dev (Sun God)',
  'Saura (Solar worship)',
  'मोढेरा सूर्य मंदिर गुजरात के मेहसाणा जिले में पुष्पावती नदी के तट पर स्थित 11वीं शताब्दी का भव्य सूर्य मंदिर है। सोलंकी वंश के राजा भीमदेव प्रथम ने 1026-27 ई. में इसका निर्माण करवाया। मंदिर को इस प्रकार बनाया गया है कि विषुव (equinox) के दिन सूर्य की किरणें सीधे गर्भगृह में स्थापित सूर्य देव की मूर्ति पर पड़ती हैं। Modhera Sun Temple in Gujarat is an 11th-century architectural masterpiece dedicated to Surya (Sun God), built by Bhimdev I of the Solanki dynasty in 1026-27 CE. The temple is designed so that sunlight illuminates the sanctum idol during equinoxes. The complex includes Surya Kund (a stepwell with 108 shrines), Sabha Mandap (assembly hall), and Guda Mandap (sanctum). Though no longer an active place of worship, it remains one of India''s finest examples of Maru-Gurjara architecture.',
  'Built during the peak of Solanki dynasty. The temple was damaged during Alauddin Khalji''s invasion in 1299 CE. The Surya Kund is a geometric marvel with 108 miniature shrines. UNESCO tentative list site.',
  '{"city": "Modhera", "state": "Gujarat", "country": "India", "latitude": 23.5833, "longitude": 72.1333}',
  '{"daily": "7:00 AM - 6:00 PM", "note": "No active worship - heritage monument maintained by ASI"}',
  '["ASI museum", "light and sound show", "Surya Kund stepwell", "gardens", "parking"]',
  NULL
),
(
  'Virupaksha Temple, Hampi',
  'Lord Virupaksha (Shiva)',
  'Shaivism',
  'विरुपाक्ष मंदिर कर्नाटक के हम्पी में तुंगभद्रा नदी के तट पर स्थित 7वीं शताब्दी का प्राचीन शिव मंदिर है। यह UNESCO विश्व धरोहर स्थल हम्पी के खंडहरों का सबसे प्रमुख और एकमात्र सक्रिय मंदिर है। विजयनगर साम्राज्य के राजाओं ने इसका विस्तार किया। 50 मीटर ऊँचा गोपुरम दूर से दिखाई देता है। Virupaksha Temple in Hampi, Karnataka is a 7th-century Shiva temple and the most prominent surviving structure of the Vijayanagara Empire ruins. A UNESCO World Heritage Site, it is the only continuously functioning temple in the Hampi complex. The 50-meter tall eastern gopuram dominates the landscape. The temple features an inverted shadow phenomenon where the gopuram image appears inverted on the inner wall through a pinhole effect. The annual chariot festival (Rathotsava) in February attracts thousands.',
  'Originally built by Chalukya rulers in 7th century, expanded by Hoysalas and Vijayanagara kings. Krishna Deva Raya made significant additions after his coronation in 1510. Survived the destruction of Hampi in 1565 by Deccan sultanates.',
  '{"city": "Hampi", "state": "Karnataka", "country": "India", "latitude": 15.3350, "longitude": 76.4600}',
  '{"morning": "6:00 AM - 1:00 PM", "evening": "3:00 PM - 9:00 PM"}',
  '["heritage walks", "boat rides on Tungabhadra", "ASI museum", "coracle rides", "bicycle rentals"]',
  NULL
),
(
  'Koneshwaram Temple',
  'Lord Shiva (Koneshwara)',
  'Shaivism',
  'कोनेश्वरम मंदिर श्रीलंका के त्रिंकोमाली में स्वामी रॉक पर समुद्र से 130 मीटर ऊँची चट्टान पर स्थित प्राचीन हिन्दू मंदिर है। यह पंच ईश्वरम (शिव के पाँच पवित्र स्थान) में से एक है। मंदिर को "दक्षिण का कैलाश" कहा जाता है। Koneshwaram Temple (Thirukonamalai Konesar Temple) is an ancient Hindu temple perched on Swami Rock, a 130-meter cliff overlooking the Indian Ocean in Trincomalee, Sri Lanka. One of the Pancha Ishwarams (five sacred abodes of Shiva in Sri Lanka), it is called the "Kailash of the South." Originally a massive complex with 1000 pillars, it was destroyed by the Portuguese in 1624 and rebuilt in its current form. The temple offers breathtaking ocean views and is a site for blue whale watching.',
  'Ancient Tamil references date the temple to the Sangam period (3rd century BCE). Destroyed by Portuguese colonial forces in 1624. Rebuilt with support of the Hindu community in modern era. The original temple was described as one of the grandest in ancient world.',
  '{"city": "Trincomalee", "state": "Eastern Province", "country": "Sri Lanka", "latitude": 8.5747, "longitude": 81.2331}',
  '{"daily": "6:00 AM - 8:00 PM"}',
  '["ocean viewpoint", "whale watching nearby", "museum", "prayer hall"]',
  NULL
),
(
  'Prambanan Temple',
  'Lord Shiva (Trimurti)',
  'Shaivism-Vaishnavism',
  'प्रम्बनन मंदिर इंडोनेशिया के जावा द्वीप पर 9वीं शताब्दी का हिन्दू मंदिर परिसर है। UNESCO विश्व धरोहर स्थल यह दक्षिण-पूर्व एशिया का सबसे बड़ा हिन्दू मंदिर परिसर है। 47 मीटर ऊँचा केंद्रीय शिव मंदिर 240 अलंकृत मंदिरों से घिरा है। रामायण की कथा दीवारों पर उत्कीर्ण है। Prambanan Temple in Central Java, Indonesia is a 9th-century Hindu temple compound and the largest Hindu temple site in Southeast Asia. A UNESCO World Heritage Site, its 47-meter central Shiva temple is surrounded by 240 ornate temples. The inner walls feature exquisite bas-reliefs depicting the complete Ramayana epic. Built by Sanjaya dynasty of Mataram Kingdom around 850 CE, the temple represents the pinnacle of ancient Javanese Hindu-Buddhist art and architecture.',
  'Built around 850 CE by Rakai Pikatan of the Sanjaya dynasty. Abandoned after volcanic eruption and power shift to East Java in 930 CE. Rediscovered in 1811 by Colin Mackenzie. Major reconstruction since 1918. The annual Ramayana Ballet is performed against the temple backdrop.',
  '{"city": "Yogyakarta", "state": "Central Java", "country": "Indonesia", "latitude": -7.7520, "longitude": 110.4915}',
  '{"daily": "6:00 AM - 5:30 PM", "note": "Ramayana Ballet performances May-October"}',
  '["Ramayana ballet", "archaeological museum", "guided tours", "light show", "souvenir shops"]',
  NULL
),
(
  'Angkor Wat',
  'Lord Vishnu',
  'Vaishnavism (later Buddhist)',
  'अंगकोर वाट कंबोडिया में विश्व का सबसे बड़ा धार्मिक स्मारक है, जो 162.6 हेक्टेयर (402 एकड़) में फैला है। 12वीं शताब्दी में खमेर साम्राज्य के राजा सूर्यवर्मन द्वितीय ने इसे भगवान विष्णु के मंदिर के रूप में बनवाया। यह हिन्दू ब्रह्मांड विज्ञान में मेरु पर्वत का प्रतीक है। Angkor Wat in Cambodia is the largest religious monument in the world, spanning 162.6 hectares (402 acres). Built by King Suryavarman II of the Khmer Empire in the 12th century as a Hindu temple dedicated to Vishnu, it represents Mount Meru, the home of the gods in Hindu cosmology. The temple features the longest continuous bas-relief in the world depicting scenes from the Mahabharata and Ramayana. It gradually transformed into a Buddhist temple in the 14th century. A UNESCO World Heritage Site and Cambodia''s national symbol appearing on its flag.',
  'Constructed between 1113-1150 CE by King Suryavarman II. Originally dedicated to Vishnu, converted to Theravada Buddhism in 14th century. The temple''s west-facing orientation is unique and debated by scholars. Rediscovered by French explorer Henri Mouhot in 1860.',
  '{"city": "Siem Reap", "state": "Siem Reap Province", "country": "Cambodia", "latitude": 13.4125, "longitude": 103.8670}',
  '{"daily": "5:00 AM - 6:00 PM", "sunrise_pass": "5:00 AM entry for sunrise viewing"}',
  '["sunrise viewing", "guided tours", "museum", "helicopter tours", "bicycle rentals", "boat tours on moat"]',
  NULL
);
