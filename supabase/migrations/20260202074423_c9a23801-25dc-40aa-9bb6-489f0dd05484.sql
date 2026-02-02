
-- Migration: Enhance Saints with Detailed Bilingual Biographies

UPDATE saints SET 
  biography = 'हिंदी: आदि शंकराचार्य (788-820 ई.) केरल के कालड़ी में जन्मे महान वेदांत दार्शनिक थे। मात्र 8 वर्ष की आयु में संन्यास लिया। गोविंद भगवत्पाद से दीक्षा ली। 16 वर्ष में ब्रह्मसूत्र भाष्य लिखा। अद्वैत वेदांत के प्रवर्तक। भारत के चारों कोनों में चार मठ स्थापित किए - श्रृंगेरी, द्वारका, पुरी, ज्योतिर्मठ। 32 वर्ष की अल्पायु में केदारनाथ में समाधि।

English: Adi Shankaracharya (788-820 CE) was a great Vedanta philosopher born in Kaladi, Kerala. He took sannyasa at age 8, was initiated by Govinda Bhagavatpada, and wrote Brahmasutra Bhashya at 16. Founder of Advaita Vedanta. Established four mathas at Sringeri, Dwarka, Puri, and Jyotirmath. Attained Samadhi at Kedarnath at age 32.',
  key_teachings = 'अद्वैत वेदांत - ब्रह्म सत्यं जगन्मिथ्या जीवो ब्रह्मैव नापरः। Brahman alone is real, the world is appearance, the individual soul is Brahman itself.',
  famous_quotes = '["ब्रह्म सत्यं जगन्मिथ्या", "मनो बुद्ध्यहंकार चित्तानि नाहं", "चिदानंदरूपः शिवोऽहं शिवोऽहं", "सर्वं खल्विदं ब्रह्म"]',
  image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Adi_Shankara.jpg/800px-Adi_Shankara.jpg'
WHERE name ILIKE '%शंकराचार्य%' OR name ILIKE '%shankaracharya%' AND name ILIKE '%आदि%';

UPDATE saints SET 
  biography = 'हिंदी: स्वामी विवेकानंद (1863-1902) कलकत्ता में जन्मे, श्री रामकृष्ण परमहंस के प्रमुख शिष्य थे। 1893 में शिकागो विश्व धर्म सम्मेलन में "Sisters and brothers of America" के संबोधन से विश्व प्रसिद्ध हुए। रामकृष्ण मिशन और रामकृष्ण मठ की स्थापना की। वेदांत को पश्चिम में फैलाया। "उत्तिष्ठत जाग्रत" उनका आह्वान था।

English: Swami Vivekananda (1863-1902) was born in Kolkata, chief disciple of Sri Ramakrishna Paramahamsa. Became world-famous after his "Sisters and brothers of America" address at 1893 Chicago Parliament of Religions. Founded Ramakrishna Mission and Math. Spread Vedanta in the West. "Arise, Awake" was his call.',
  key_teachings = 'प्रत्येक आत्मा संभाव्य दिव्य है। Each soul is potentially divine. Strength is life, weakness is death.',
  famous_quotes = '["उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत", "शक्ति ही जीवन है, दुर्बलता मृत्यु", "एक विचार लो और उसे अपना जीवन बना लो", "जब तक जिओ सीखते रहो"]',
  image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Swami_Vivekananda_Jaipur.jpg/800px-Swami_Vivekananda_Jaipur.jpg'
WHERE name ILIKE '%विवेकानंद%' OR name ILIKE '%vivekananda%';

UPDATE saints SET 
  biography = 'हिंदी: संत कबीर दास (1440-1518) वाराणसी के जुलाहे संत थे। निर्गुण भक्ति के प्रमुख संत। हिंदू-मुस्लिम एकता के प्रतीक। उन्होंने मूर्तिपूजा और कर्मकांड का विरोध किया। उनके दोहे आज भी प्रासंगिक हैं। गुरु रामानंद के शिष्य थे। मगहर में देह त्यागी।

English: Sant Kabir Das (1440-1518) was a weaver-saint of Varanasi. Major saint of Nirguna Bhakti. Symbol of Hindu-Muslim unity. He opposed idol worship and ritualism. His dohas remain relevant today. Disciple of Guru Ramanand. Left body at Maghar.',
  key_teachings = 'राम और रहीम एक हैं। प्रेम ही ईश्वर है। बाहरी कर्मकांड व्यर्थ है। Ram and Rahim are one. Love is God. External rituals are futile.',
  famous_quotes = '["पोथी पढ़ि पढ़ि जग मुआ पंडित भया न कोय", "बुरा जो देखन मैं चला बुरा न मिलिया कोय", "साईं इतना दीजिये जा में कुटुम समाय", "दुख में सुमिरन सब करे सुख में करै न कोय"]',
  image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Kabir004.jpg/800px-Kabir004.jpg'
WHERE name ILIKE '%कबीर%' OR name ILIKE '%kabir%';

UPDATE saints SET 
  biography = 'हिंदी: गोस्वामी तुलसीदास (1532-1623) रामचरितमानस के रचयिता, हिंदी साहित्य के महान कवि। राजापुर (बांदा) में जन्म। बचपन में माता-पिता ने त्यागा। विवाह के बाद पत्नी की फटकार से वैराग्य। रामचरितमानस, विनय पत्रिका, हनुमान चालीसा, कवितावली आदि की रचना की।

English: Goswami Tulsidas (1532-1623) authored Ramcharitmanas, great poet of Hindi literature. Born in Rajapur (Banda). Abandoned by parents in childhood. Became renunciate after wife''s rebuke. Composed Ramcharitmanas, Vinay Patrika, Hanuman Chalisa, Kavitavali.',
  key_teachings = 'राम भक्ति ही मोक्ष का मार्ग है। निर्गुण-सगुण में कोई भेद नहीं। Ram Bhakti is the path to liberation. No difference between Nirguna and Saguna.',
  famous_quotes = '["मंगल भवन अमंगल हारी", "सिया राम मय सब जग जानी", "परहित सरिस धर्म नहिं भाई", "तुलसी मीठे बचन ते सुख उपजत चहुं ओर"]',
  image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Goswami_Tulsidas.jpg/800px-Goswami_Tulsidas.jpg'
WHERE name ILIKE '%तुलसीदास%' OR name ILIKE '%tulsidas%';

UPDATE saints SET 
  biography = 'हिंदी: संत ज्ञानेश्वर (1275-1296) महाराष्ट्र के आलंदी में जन्मे। मात्र 15 वर्ष की आयु में भगवद्गीता पर मराठी टीका "ज्ञानेश्वरी" लिखी। बचपन में समाज द्वारा बहिष्कृत। भैंसे से वेद सुनवाकर चमत्कार दिखाया। 21 वर्ष की आयु में आलंदी में संजीवन समाधि ली।

English: Sant Dnyaneshwar (1275-1296) was born in Alandi, Maharashtra. Wrote "Dnyaneshwari" - Marathi commentary on Bhagavad Gita at age 15. Ostracized by society as a child. Showed miracle by making buffalo recite Vedas. Took Sanjivan Samadhi at Alandi at age 21.',
  key_teachings = 'ज्ञान और भक्ति एक हैं। आत्मा ही परमात्मा है। Jnana and Bhakti are one. The soul is the Supreme.',
  famous_quotes = '["विश्वाची माझी आई", "जे जे भेटे भूता तेथे देव दिसता", "पसायदान - आता विश्वात्मके देवे"]',
  image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sant_Dnyaneshwar.jpg/800px-Sant_Dnyaneshwar.jpg'
WHERE name ILIKE '%ज्ञानेश्वर%' OR name ILIKE '%dnyaneshwar%' OR name ILIKE '%jnaneshwar%';

UPDATE saints SET 
  biography = 'हिंदी: गुरु नानक देव जी (1469-1539) सिख धर्म के संस्थापक और प्रथम गुरु। तलवंडी (ननकाना साहिब) में जन्म। "इक ओंकार" - एक ईश्वर का संदेश दिया। चार उदासियों (यात्राओं) में भारत, अरब, तिब्बत की यात्रा की। जात-पात का विरोध किया। करतारपुर में अंतिम वर्ष बिताए।

English: Guru Nanak Dev Ji (1469-1539) was founder and first Guru of Sikhism. Born in Talwandi (Nankana Sahib). Gave message of "Ik Onkar" - One God. Traveled India, Arabia, Tibet in four Udasis. Opposed caste system. Spent final years in Kartarpur.',
  key_teachings = 'इक ओंकार - एक ईश्वर। नाम जपो, किरत करो, वंड छको। Ik Onkar - One God. Chant Name, work honestly, share with others.',
  famous_quotes = '["इक ओंकार सतनाम", "नानक नाम चड़दी कला, तेरे भाणे सरबत दा भला", "मन जीते जग जीत", "पवन गुरु पानी पिता माता धरत महत"]',
  image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Guru_Nanak_Japji_Sahib.jpg/800px-Guru_Nanak_Japji_Sahib.jpg'
WHERE name ILIKE '%गुरु नानक%' OR name ILIKE '%guru nanak%' OR name ILIKE '%नानक देव%';

UPDATE saints SET 
  biography = 'हिंदी: श्री रामकृष्ण परमहंस (1836-1886) बंगाल के कामारपुकुर में जन्मे। दक्षिणेश्वर काली मंदिर के पुजारी। माँ काली के परम भक्त। सभी धर्मों को एक मानकर हिंदू, इस्लाम, ईसाई साधनाएं कीं। स्वामी विवेकानंद उनके प्रमुख शिष्य। "यतो मत ततो पथ" उनकी शिक्षा।

English: Sri Ramakrishna Paramahamsa (1836-1886) was born in Kamarpukur, Bengal. Priest at Dakshineshwar Kali Temple. Ardent devotee of Mother Kali. Practiced Hindu, Islamic, Christian sadhanas believing all religions are one. Swami Vivekananda was his chief disciple. "Yato mat tato path" was his teaching.',
  key_teachings = 'यतो मत ततो पथ - जितने मत उतने पथ। ईश्वर एक है। As many faiths, so many paths. God is One.',
  famous_quotes = '["जितने मत उतने पथ", "ईश्वर सर्वत्र है", "कामिनी-कांचन त्यागो", "भगवान से प्रेम करो"]',
  image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Ramakrishna.jpg/800px-Ramakrishna.jpg'
WHERE name ILIKE '%रामकृष्ण%' OR name ILIKE '%ramakrishna%';

UPDATE saints SET 
  biography = 'हिंदी: मीराबाई (1498-1546) राजस्थान की राजकुमारी, कृष्ण की परम भक्त। मेवाड़ में विवाह के बाद भी कृष्ण भक्ति जारी रखी। विष का प्याला पिया पर बच गईं। अंत में द्वारका में कृष्ण मूर्ति में विलीन हो गईं। उनके भजन आज भी गाए जाते हैं।

English: Mirabai (1498-1546) was a princess of Rajasthan, ardent devotee of Krishna. Continued Krishna Bhakti even after marriage to Mewar prince. Survived poisoning attempt. Finally merged into Krishna idol at Dwarka. Her bhajans are sung even today.',
  key_teachings = 'कृष्ण से प्रेम ही सब कुछ है। सांसारिक बंधन माया हैं। Love for Krishna is everything. Worldly bonds are illusion.',
  famous_quotes = '["पायो जी मैंने राम रतन धन पायो", "मेरो तो गिरधर गोपाल दूसरो न कोई", "चाकर राखो जी", "मैं तो गिरधर के घर जाऊं"]',
  image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Mirabai.jpg/800px-Mirabai.jpg'
WHERE name ILIKE '%मीरा%' OR name ILIKE '%mira%' OR name ILIKE '%meera%';

UPDATE saints SET 
  biography = 'हिंदी: रमण महर्षि (1879-1950) तमिलनाडु में जन्मे आत्मज्ञानी संत। 16 वर्ष की आयु में आत्म-साक्षात्कार। अरुणाचल पर्वत, तिरुवन्नामलाई में आश्रम। "मैं कौन हूँ?" (कोऽहं) की साधना पद्धति दी। मौन ही उनकी सबसे बड़ी शिक्षा थी।

English: Ramana Maharshi (1879-1950) was a self-realized saint born in Tamil Nadu. Had Self-realization at age 16. Established ashram at Arunachala, Tiruvannamalai. Gave the practice of "Who am I?" (Koham) self-inquiry. Silence was his greatest teaching.',
  key_teachings = 'आत्म-विचार करो। "मैं कौन हूँ?" पूछो। आत्मा ही ब्रह्म है। Practice self-inquiry. Ask "Who am I?" The Self is Brahman.',
  famous_quotes = '["मौन ही परम गुरु है", "मन को मन से जानो", "आत्मा स्वयं प्रकाशमान है", "जो है वही सत्य है"]',
  image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ramana_Maharshi.jpg/800px-Ramana_Maharshi.jpg'
WHERE name ILIKE '%रमण%' OR name ILIKE '%ramana%';

UPDATE saints SET 
  biography = 'हिंदी: संत नामदेव (1270-1350) महाराष्ट्र के पंढरपुर के संत। विठ्ठल के परम भक्त। दर्जी (शिंपी) परिवार में जन्म। पंजाब गए और गुरु ग्रंथ साहिब में उनके अभंग शामिल हैं। भक्ति आंदोलन के प्रमुख संत।

English: Sant Namdev (1270-1350) was a saint of Pandharpur, Maharashtra. Ardent devotee of Vitthal. Born in tailor (Shimpi) family. Visited Punjab and his abhangs are included in Guru Granth Sahib. Major saint of Bhakti movement.',
  key_teachings = 'नाम स्मरण ही मोक्ष का मार्ग। विठ्ठल सर्वत्र है। Name chanting is the path to liberation. Vitthal is everywhere.',
  famous_quotes = '["नाचू कीर्तनाचे रंगी", "विठ्ठल विठ्ठल जय हरि विठ्ठल"]',
  image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Sant_Namdev.jpg/800px-Sant_Namdev.jpg'
WHERE name ILIKE '%नामदेव%' OR name ILIKE '%namdev%';
