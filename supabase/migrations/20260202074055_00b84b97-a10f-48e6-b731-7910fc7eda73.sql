
-- Migration: Add Hanuman Chalisa Verses 11-40 (Remaining Chaupais)

-- First, get the scripture ID for Hanuman Chalisa and update with remaining verses
-- Assuming Hanuman Chalisa is already in scriptures, find related chapter or add new ones

INSERT INTO scripture_chapters (scripture_id, chapter_number, title, content, summary, verse_count) VALUES

-- Get a scripture for Hanuman Chalisa devotional content
((SELECT id FROM scriptures WHERE title ILIKE '%hanuman%' LIMIT 1), 2, 'हनुमान चालीसा - चौपाई 11-20',
'॥ चौपाई 11-20 ॥

चौपाई 11:
विद्यावान गुनी अति चातुर। राम काज करिबे को आतुर॥
हिंदी: आप विद्वान, गुणवान और अत्यंत चतुर हैं। श्री राम के कार्य करने के लिए सदा उत्सुक रहते हैं।
English: You are learned, virtuous and extremely clever. You are always eager to do the work of Lord Rama.

चौपाई 12:
प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया॥
हिंदी: आप प्रभु के चरित्र सुनने के रसिक हैं। राम, लक्ष्मण और सीता आपके मन में बसे हैं।
English: You love to hear the tales of the Lord. Rama, Lakshmana and Sita dwell in your heart.

चौपाई 13:
सूक्ष्म रूप धरि सियहिं दिखावा। विकट रूप धरि लंक जरावा॥
हिंदी: आपने सूक्ष्म रूप धारण कर सीता जी को दर्शन दिए। विकराल रूप धारण कर लंका को जला दिया।
English: In subtle form you appeared to Sita. In fierce form you burned Lanka.

चौपाई 14:
भीम रूप धरि असुर संहारे। रामचन्द्र के काज संवारे॥
हिंदी: विशाल रूप धारण कर आपने राक्षसों का संहार किया। श्री रामचंद्र के सभी कार्य संवारे।
English: In mighty form you destroyed the demons. You accomplished all the works of Lord Rama.

चौपाई 15:
लाय सजीवन लखन जियाये। श्री रघुबीर हरषि उर लाये॥
हिंदी: संजीवनी लाकर आपने लक्ष्मण को जिलाया। श्री रघुवीर ने हर्षित होकर आपको हृदय से लगाया।
English: Bringing Sanjeevani, you revived Lakshmana. Delighted, Lord Rama embraced you.

चौपाई 16:
रघुपति कीन्ही बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई॥
हिंदी: श्री रघुनाथ जी ने बहुत प्रशंसा की। तुम मुझे भरत के समान प्रिय भाई हो।
English: Lord Rama praised you greatly. You are as dear to me as my brother Bharata.

चौपाई 17:
सहस बदन तुम्हरो जस गावैं। अस कहि श्रीपति कंठ लगावैं॥
हिंदी: सहस्र मुख वाले शेषनाग आपका यश गाते हैं। ऐसा कहकर श्रीपति ने आपको गले लगाया।
English: The thousand-headed Shesha sings your glory. Saying this, Lord Rama embraced you.

चौपाई 18:
सनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा॥
हिंदी: सनकादि, ब्रह्मा, मुनिगण, नारद, सरस्वती और शेषनाग सभी...
English: Sanaka and others, Brahma and sages, Narada, Saraswati, and Shesha...

चौपाई 19:
जम कुबेर दिगपाल जहाँ ते। कबि कोबिद कहि सकैं कहाँ ते॥
हिंदी: यम, कुबेर, दिग्पाल - कवि और विद्वान आपका वर्णन कहाँ तक कर सकते हैं?
English: Yama, Kubera, the guardians - how can poets and scholars describe your glory?

चौपाई 20:
तुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा॥
हिंदी: आपने सुग्रीव पर उपकार किया। राम से मिलाकर उन्हें राजपद दिलाया।
English: You blessed Sugriva. Introducing him to Rama, you got him the throne.',
'चौपाई 11-20: हनुमान जी की विद्वत्ता, लंका दहन, संजीवनी प्रसंग और राम द्वारा प्रशंसा। Chaupais 11-20: Hanuman''s wisdom, burning of Lanka, Sanjeevani episode, and praise by Lord Rama.', 10),

((SELECT id FROM scriptures WHERE title ILIKE '%hanuman%' LIMIT 1), 3, 'हनुमान चालीसा - चौपाई 21-30',
'॥ चौपाई 21-30 ॥

चौपाई 21:
तुम्हरो मंत्र विभीषण माना। लंकेश्वर भए सब जग जाना॥
हिंदी: विभीषण ने आपका मंत्र माना। वे लंकेश्वर बने, यह सारा जग जानता है।
English: Vibhishana followed your counsel. He became Lord of Lanka, the whole world knows.

चौपाई 22:
जुग सहस्र जोजन पर भानू। लील्यो ताहि मधुर फल जानू॥
हिंदी: युग सहस्र योजन दूर सूर्य को मीठा फल समझ कर निगल लिया।
English: The sun, thousands of yojanas away, you swallowed thinking it a sweet fruit.

चौपाई 23:
प्रभु मुद्रिका मेलि मुख माहीं। जलधि लांघि गये अचरज नाहीं॥
हिंदी: प्रभु की मुद्रिका मुख में रखकर समुद्र लांघ गए, कोई आश्चर्य नहीं।
English: With the Lord''s ring in your mouth, you leaped the ocean - no wonder!

चौपाई 24:
दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते॥
हिंदी: संसार के जितने दुर्गम कार्य हैं, आपकी कृपा से सब सुगम हो जाते हैं।
English: All difficult tasks in the world become easy by your grace.

चौपाई 25:
राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे॥
हिंदी: राम के द्वार के आप रखवाले हैं। आपकी आज्ञा बिना कोई प्रवेश नहीं पा सकता।
English: You guard the door of Rama. None enters without your permission.

चौपाई 26:
सब सुख लहैं तुम्हारी सरना। तुम रक्षक काहू को डर ना॥
हिंदी: आपकी शरण में सब सुख मिलते हैं। आप रक्षक हैं तो किसी का डर नहीं।
English: All happiness is found in your refuge. With you as protector, there is no fear.

चौपाई 27:
आपन तेज सम्हारो आपै। तीनों लोक हांक तें कांपै॥
हिंदी: अपने तेज को आप ही संभाल सकते हैं। आपकी हुंकार से तीनों लोक कांपते हैं।
English: Only you can control your radiance. The three worlds tremble at your roar.

चौपाई 28:
भूत पिसाच निकट नहिं आवै। महावीर जब नाम सुनावै॥
हिंदी: भूत-पिसाच निकट नहीं आते जब महावीर का नाम सुनाया जाता है।
English: Ghosts and demons come not near when the name of Mahavir is recited.

चौपाई 29:
नासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा॥
हिंदी: वीर हनुमान का निरंतर जाप करने से रोग नष्ट होते हैं, सब पीड़ा हरती है।
English: Diseases vanish, all pain is removed by constantly chanting brave Hanuman.

चौपाई 30:
संकट तें हनुमान छुड़ावै। मन क्रम बचन ध्यान जो लावै॥
हिंदी: जो मन, कर्म और वचन से हनुमान का ध्यान करता है, उसे संकट से छुड़ाते हैं।
English: Hanuman saves from troubles those who meditate on him with mind, deed and word.',
'चौपाई 21-30: विभीषण प्रसंग, सूर्य निगलना, समुद्र लंघन, रक्षा और रोग निवारण। Chaupais 21-30: Vibhishana episode, swallowing sun, ocean leap, protection and healing.', 10),

((SELECT id FROM scriptures WHERE title ILIKE '%hanuman%' LIMIT 1), 4, 'हनुमान चालीसा - चौपाई 31-40 और दोहा',
'॥ चौपाई 31-40 और समापन दोहा ॥

चौपाई 31:
सब पर राम तपस्वी राजा। तिनके काज सकल तुम साजा॥
हिंदी: सबके ऊपर राम तपस्वी राजा हैं। उनके सब कार्य आप ही सजाते हैं।
English: Above all is Rama, the ascetic king. You accomplish all his works.

चौपाई 32:
और मनोरथ जो कोई लावै। सोई अमित जीवन फल पावै॥
हिंदी: जो कोई और मनोरथ (कामना) लाता है, वह अमित (अपार) जीवन फल पाता है।
English: Whatever desire one brings, one gets unlimited fruits of life.

चौपाई 33:
चारों जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा॥
हिंदी: चारों युगों में आपका प्रताप है। यह प्रसिद्ध है और जगत को उजाला देता है।
English: Your glory spreads through all four ages. It is famous and illuminates the world.

चौपाई 34:
साधु संत के तुम रखवारे। असुर निकंदन राम दुलारे॥
हिंदी: साधु-संतों के आप रक्षक हैं। असुरों का नाश करने वाले राम के दुलारे हैं।
English: You protect saints and sages. Destroyer of demons, beloved of Rama.

चौपाई 35:
अष्ट सिद्धि नौ निधि के दाता। अस बर दीन जानकी माता॥
हिंदी: आठ सिद्धियों और नौ निधियों के दाता हैं। यह वर जानकी माता ने दिया।
English: Giver of eight siddhis and nine treasures. Mother Janaki gave this boon.

चौपाई 36:
राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा॥
हिंदी: राम रसायन (भक्ति) आपके पास है। सदा रघुपति के दास बने रहो।
English: You possess the elixir of Rama. May I always remain servant of Raghupati.

चौपाई 37:
तुम्हरे भजन राम को पावै। जनम जनम के दुख बिसरावै॥
हिंदी: आपके भजन से राम की प्राप्ति होती है। जन्म-जन्मांतर के दुख दूर होते हैं।
English: By your worship, one attains Rama. Sorrows of many lives are forgotten.

चौपाई 38:
अंतकाल रघुबर पुर जाई। जहाँ जन्म हरिभक्त कहाई॥
हिंदी: अंत समय में रघुवर के धाम जाते हैं। जहाँ जन्म लें वहाँ हरिभक्त कहलाते हैं।
English: At death, one goes to Rama''s abode. Wherever born, one is called Hari''s devotee.

चौपाई 39:
और देवता चित्त न धरई। हनुमत सेइ सर्ब सुख करई॥
हिंदी: अन्य देवताओं का ध्यान न करें। हनुमान की सेवा से सब सुख मिलते हैं।
English: Need not think of other deities. Serving Hanuman brings all happiness.

चौपाई 40:
संकट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा॥
हिंदी: जो बलवान वीर हनुमान का स्मरण करता है, उसके संकट कटते और पीड़ा मिटती है।
English: Troubles end, all pain is removed for those who remember mighty Hanuman.

॥ समापन दोहा ॥
जय जय जय हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं॥
हिंदी: हनुमान गोसाईं की जय हो। गुरुदेव की तरह कृपा करें।
English: Victory to Lord Hanuman! Bless us like a divine teacher.

जो सत बार पाठ कर कोई। छूटहि बंदि महा सुख होई॥
हिंदी: जो सौ बार पाठ करे, बंधन से छूटे और महान सुख पाए।
English: One who recites a hundred times is freed from bondage and attains great joy.

जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा॥
हिंदी: जो हनुमान चालीसा पढ़ता है उसे सिद्धि मिलती है, शिव-पार्वती साक्षी हैं।
English: One who reads Hanuman Chalisa attains success, Shiva-Parvati are witness.

तुलसीदास सदा हरि चेरा। कीजै नाथ हृदय महँ डेरा॥
हिंदी: तुलसीदास सदा हरि के सेवक हैं। हे नाथ, मेरे हृदय में निवास करें।
English: Tulsidas is forever Hari''s servant. O Lord, dwell in my heart.',
'चौपाई 31-40 और समापन दोहे: फल श्रुति, अष्ट सिद्धि, नव निधि, मोक्ष प्राप्ति। Chaupais 31-40 and closing dohas: Benefits, eight siddhis, nine treasures, liberation.', 13);
