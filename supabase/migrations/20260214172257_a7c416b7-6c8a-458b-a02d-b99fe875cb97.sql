
-- Operation 3: Remove 5 Hindi duplicate scriptures that mirror English entries
DELETE FROM scriptures WHERE id IN (
  '96703da8-2200-4398-bb3f-6d3f6f01310a',  -- उपनिषद् (duplicate of Upanishads)
  '2903ac26-29bd-4229-a55f-e0a736e7f26f',  -- योगसूत्र (duplicate of Yoga Sutras)
  '60392b3b-90ef-412c-b331-39ea844dfcd0',  -- श्रीमद्भगवद्गीता (duplicate of Bhagavad Gita)
  '74ccd4d8-599d-4b92-b129-7a4b05f638ec',  -- श्रीमद्भागवतम् (duplicate of Shrimad Bhagavatam)
  'ab1710cb-aee9-4f56-a5e9-a4f57ec1ac00'   -- कबीर दोहावली (will add chapters to English entry or create proper one)
);

-- Add chapters for Devi Bhagavata Purana (id: 293555f4-95ba-468d-a34a-6449d012c182)
INSERT INTO scripture_chapters (scripture_id, chapter_number, title, content, summary, verse_count) VALUES
('293555f4-95ba-468d-a34a-6449d012c182', 1, 'देवी अवतरण - The Manifestation of the Goddess',
'श्रीमद्देवीभागवतपुराण का प्रथम स्कन्ध देवी के स्वरूप और उनकी सृष्टि शक्ति का वर्णन करता है।

मूल श्लोक:
"नमो देव्यै महादेव्यै शिवायै सततं नमः।
नमः प्रकृत्यै भद्रायै नियताः प्रणताः स्म ताम्॥"

हिन्दी अनुवाद:
महादेवी को नमस्कार, शिवा (कल्याणकारिणी) को सदा नमस्कार। प्रकृति रूपा भद्रा (मंगलकारिणी) देवी को हम नतमस्तक होकर प्रणाम करते हैं। इस स्कन्ध में व्यास जी ने जन्मेजय को देवी के परमेश्वरी स्वरूप का वर्णन किया। देवी ही आदिशक्ति हैं, सृष्टि की मूल कारण हैं। ब्रह्मा, विष्णु और शिव भी उनकी शक्ति से ही कार्य करते हैं। देवी ने मधु-कैटभ राक्षसों का वध करने के लिए महामाया रूप धारण किया।

English Translation:
The first skandha of Devi Bhagavata Purana describes the supreme nature of the Goddess (Devi) as the ultimate reality and creative power of the universe. Sage Vyasa narrates to King Janamejaya how the Devi is Parameswari (Supreme Goddess), the primordial cause of creation. Brahma, Vishnu, and Shiva function only through Her shakti. She manifested as Mahamaya to destroy the demons Madhu and Kaitabha who threatened creation. The text establishes Devi worship as the highest form of devotion, presenting the Goddess not merely as a consort but as the independent supreme being.',
'First skandha establishing Devi as supreme reality, narrating the Madhu-Kaitabha episode and the cosmic role of the Goddess.', 40),

('293555f4-95ba-468d-a34a-6449d012c182', 2, 'महिषासुर वध - Slaying of Mahishasura',
'द्वितीय स्कन्ध में महिषासुर वध की गाथा वर्णित है — देवी भागवत का सबसे प्रसिद्ध आख्यान।

मूल श्लोक:
"या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता।
नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥"

हिन्दी अनुवाद:
जो देवी सब प्राणियों में शक्ति रूप में विद्यमान हैं, उन्हें नमस्कार, नमस्कार, बारम्बार नमस्कार। महिषासुर नामक दैत्य ने ब्रह्मा से वरदान प्राप्त किया कि कोई भी देवता या मनुष्य उसे मार नहीं सकता। उसने स्वर्ग पर अधिकार कर लिया और देवताओं को निकाल दिया। तब सभी देवताओं के तेज से एक महाशक्ति प्रकट हुईं — दुर्गा। प्रत्येक देवता ने अपने-अपने अस्त्र दिए। नौ दिनों तक भीषण युद्ध हुआ और दशमी तिथि को देवी ने महिषासुर का वध किया। यही विजयदशमी/दशहरा का मूल है।

English Translation:
The second skandha narrates the most celebrated episode of Devi Bhagavata — the slaying of the buffalo demon Mahishasura. The demon obtained a boon from Brahma that no god or man could kill him. He conquered heaven and expelled the gods. From the combined tejas (radiance) of all gods emerged Goddess Durga. Each god contributed their weapons — Shiva his trident, Vishnu his discus, Vayu his bow, Agni his spear. The battle lasted nine nights (Navaratri), and on the tenth day (Vijayadashami/Dussehra), the Goddess slew Mahishasura. This is the origin of Durga Puja and Navratri celebrations.',
'The iconic Mahishasura Mardini episode — origin of Navratri and Durga Puja festivals.', 55),

('293555f4-95ba-468d-a34a-6449d012c182', 3, 'देवी कवच एवं नवदुर्गा - Devi Kavacham and Navadurga',
'तृतीय स्कन्ध में देवी के नौ रूपों (नवदुर्गा) और देवी कवचम् का वर्णन है।

नवदुर्गा स्तुति:
"प्रथमं शैलपुत्री च द्वितीयं ब्रह्मचारिणी।
तृतीयं चन्द्रघण्टेति कूष्माण्डेति चतुर्थकम्॥
पञ्चमं स्कन्दमातेति षष्ठं कात्यायनी तथा।
सप्तमं कालरात्रीति महागौरीति चाष्टमम्॥
नवमं सिद्धिदात्री च नवदुर्गाः प्रकीर्तिताः॥"

हिन्दी अनुवाद:
नवदुर्गा के नौ रूप — शैलपुत्री (पर्वत पुत्री), ब्रह्मचारिणी (तपस्विनी), चन्द्रघण्टा (चन्द्रमा धारिणी), कूष्माण्डा (ब्रह्माण्ड की रचयिता), स्कन्दमाता (कार्तिकेय की माता), कात्यायनी (कात्यायन ऋषि की पुत्री), कालरात्रि (काल का नाश करने वाली), महागौरी (श्वेत वर्ण), सिद्धिदात्री (सभी सिद्धियाँ देने वाली)। नवरात्रि के नौ दिनों में इन नौ रूपों की पूजा की जाती है। देवी कवचम् एक सुरक्षा मंत्र है जो भक्त को सभी दिशाओं में देवी का कवच प्रदान करता है।

English Translation:
The third skandha describes the nine forms of Durga (Navadurga) worshipped during Navaratri — Shailaputri (Daughter of Mountain), Brahmacharini (the Ascetic), Chandraghanta (Moon-bell), Kushmanda (Creator of the Universe), Skandamata (Mother of Kartikeya), Katyayani (Daughter of sage Katyayana), Kalaratri (Destroyer of Darkness), Mahagauri (White Complexioned), and Siddhidatri (Bestower of Siddhis). The Devi Kavacham is a powerful protective hymn that invokes the Goddess to shield the devotee from all directions.',
'Navadurga forms and the protective Devi Kavacham hymn recited during Navaratri.', 48),

('293555f4-95ba-468d-a34a-6449d012c182', 4, 'देवी महात्म्य - Glory of the Goddess',
'चतुर्थ स्कन्ध में देवी के विभिन्न अवतारों और उनकी लीलाओं का वर्णन है।

मूल श्लोक:
"सृष्टिस्थितिविनाशानां शक्तिभूते सनातनि।
गुणाश्रये गुणमये नारायणि नमोऽस्तु ते॥"

हिन्दी अनुवाद:
हे सनातनी! आप सृष्टि, स्थिति और विनाश की शक्ति हैं। गुणों की आश्रय, गुणमयी, नारायणी, आपको नमस्कार। इस स्कन्ध में शुम्भ-निशुम्भ, रक्तबीज और चण्ड-मुण्ड के वध की कथाएँ हैं। रक्तबीज का रक्त जमीन पर गिरने से नए राक्षस उत्पन्न होते थे, इसलिए काली माता ने उसका सारा रक्त पी लिया। चामुण्डा रूप में देवी ने चण्ड-मुण्ड का वध किया। ये कथाएँ बुराई पर अच्छाई की विजय का प्रतीक हैं।

English Translation:
The fourth skandha narrates the glories of the Goddess through her various incarnations and demon-slaying episodes. The stories of Shumbha-Nishumbha, Raktabeeja (whose every blood drop spawned new demons, defeated when Kali drank all his blood), and Chanda-Munda (slain by Chamunda form) are detailed. These narratives symbolize the victory of divine feminine power over the forces of ignorance and evil.',
'Episodes of Raktabeeja, Shumbha-Nishumbha, and the emergence of Kali and Chamunda forms.', 52),

('293555f4-95ba-468d-a34a-6449d012c182', 5, 'देवी गीता - The Song of the Goddess',
'पंचम स्कन्ध में देवी गीता है — भगवद्गीता के समान देवी द्वारा स्वयं कही गई शिक्षाएँ।

मूल श्लोक:
"अहमेव परं तत्त्वं मय्येव सकलं जगत्।
मत्तः सर्वं प्रवर्तते मयि सर्वं प्रलीयते॥"

हिन्दी अनुवाद:
मैं ही परम तत्त्व हूँ, मुझमें ही समस्त जगत है। मुझसे ही सब प्रवृत्त होता है और मुझमें ही सब लीन होता है। देवी गीता में देवी ने हिमालय को अपना परमेश्वरी स्वरूप बताया। जैसे भगवद्गीता में कृष्ण ने अर्जुन को उपदेश दिया, वैसे ही देवी ने भक्ति, ज्ञान, कर्म और ध्यान के मार्ग बताए। देवी ने कहा कि वे निर्गुण और सगुण दोनों हैं, ब्रह्म और माया दोनों उनके ही अंश हैं। देवी की भक्ति ही मोक्ष का सर्वोत्तम मार्ग है।

English Translation:
The fifth skandha contains the Devi Gita — the Song of the Goddess, parallel to the Bhagavad Gita. Here, the Goddess herself imparts spiritual wisdom to Himalaya. She declares: "I alone am the Supreme Reality. The entire universe exists in me. Everything originates from me and dissolves into me." Like Krishna''s teachings to Arjuna, the Devi teaches paths of bhakti, jnana, karma, and dhyana. She reveals herself as both Nirguna (formless) and Saguna (with form), declaring that both Brahman and Maya are her aspects. Devotion to the Goddess is proclaimed as the supreme path to liberation.',
'The Devi Gita — Goddess''s own discourse on bhakti, jnana, and liberation, parallel to Bhagavad Gita.', 60);

-- Add chapters for Vishnu Purana (id: 1bf15491-051e-4e91-bfdd-5d636172eecf)
INSERT INTO scripture_chapters (scripture_id, chapter_number, title, content, summary, verse_count) VALUES
('1bf15491-051e-4e91-bfdd-5d636172eecf', 1, 'सृष्टि खण्ड - Creation of the Universe',
'विष्णु पुराण का प्रथम अंश सृष्टि की उत्पत्ति और भगवान विष्णु के सर्वव्यापी स्वरूप का वर्णन करता है।

मूल श्लोक:
"सर्गश्च प्रतिसर्गश्च वंशो मन्वन्तराणि च।
वंशानुचरितं चैव पुराणं पञ्चलक्षणम्॥"

हिन्दी अनुवाद:
सर्ग (सृष्टि), प्रतिसर्ग (प्रलय और पुनर्सृष्टि), वंश (देवताओं और ऋषियों की वंशावली), मन्वन्तर (मनुओं के काल), वंशानुचरित (राजवंशों का इतिहास) — ये पुराण के पाँच लक्षण हैं। पराशर मुनि मैत्रेय को बताते हैं कि सृष्टि से पहले केवल नारायण थे। उन्होंने अपनी इच्छा से प्रकृति और पुरुष को प्रकट किया। ब्रह्मा विष्णु की नाभि कमल से उत्पन्न हुए। सात लोकों और सात पातालों की रचना हुई। चतुर्युग चक्र और कल्प का विस्तृत वर्णन है।

English Translation:
The first part describes the creation of the universe and Lord Vishnu''s omnipresent nature. Sage Parashara teaches Maitreya that before creation, only Narayana existed. From His will, Prakriti (nature) and Purusha (consciousness) emerged. Brahma was born from Vishnu''s navel lotus. The creation of seven upper worlds (lokas) and seven lower worlds (patalas) is described, along with the Chaturyuga cycle and Kalpa system.',
'Origin of the universe, cosmology, and Vishnu as the supreme creator narrated by Sage Parashara.', 45),

('1bf15491-051e-4e91-bfdd-5d636172eecf', 2, 'पृथु और ध्रुव कथा - Stories of Prithu and Dhruva',
'द्वितीय अंश में राजा पृथु और बालक ध्रुव की प्रसिद्ध कथाएँ हैं।

ध्रुव कथा:
"ॐ नमो भगवते वासुदेवाय" — यही मंत्र नारद ने बालक ध्रुव को दिया।

हिन्दी अनुवाद:
पाँच वर्ष के बालक ध्रुव को सौतेली माता सुरुचि ने अपमानित करके कहा कि पिता की गोद में बैठने का अधिकार केवल उसके पुत्र उत्तम को है। ध्रुव ने माता सुनीति की अनुमति से वन में जाकर नारद मुनि के मार्गदर्शन में कठोर तपस्या की। भगवान विष्णु उनकी भक्ति से प्रसन्न हुए और उन्हें अटल स्थान (ध्रुव तारा) प्रदान किया जो आज भी आकाश में स्थिर दिखाई देता है। राजा पृथु ने पृथ्वी को दोहकर अन्न, औषधि और समस्त संपदा प्राप्त की — इसीलिए पृथ्वी का नाम "पृथ्वी" पड़ा।

English Translation:
The second part contains the famous stories of child-devotee Dhruva and King Prithu. Five-year-old Dhruva, humiliated by stepmother Suruchi, performed intense tapas in the forest with the mantra "Om Namo Bhagavate Vasudevaya" given by Sage Narada. Pleased by his devotion, Lord Vishnu granted him the immovable position (Dhruva/Pole Star) in the sky. King Prithu milked the earth (in cow form) for all grains, medicines, and resources — hence the earth is called "Prithvi" after him.',
'Iconic stories of Dhruva''s devotion earning the Pole Star and King Prithu naming the Earth.', 50),

('1bf15491-051e-4e91-bfdd-5d636172eecf', 3, 'कृष्ण लीला - Divine Play of Krishna',
'तृतीय अंश में भगवान श्रीकृष्ण की दिव्य लीलाओं का विस्तृत वर्णन है।

मूल श्लोक:
"कृष्णस्तु भगवान् स्वयं।"

हिन्दी अनुवाद:
विष्णु पुराण में कृष्ण लीला का वर्णन भागवत से भी प्राचीन माना जाता है। कंस के अत्याचार, देवकी-वसुदेव का कारागार, कृष्ण का जन्म और वसुदेव द्वारा यमुना पार करके गोकुल ले जाना — सब विस्तार से वर्णित है। गोकुल में पूतना वध, गोवर्धन पर्वत उठाना, कालिया नाग दमन, रासलीला, और मथुरा में कंस वध — ये सभी लीलाएँ भक्ति रस से परिपूर्ण हैं। कृष्ण की बाल लीलाओं में माता यशोदा द्वारा मुख में ब्रह्माण्ड दर्शन का प्रसंग अत्यंत प्रसिद्ध है।

English Translation:
The third part narrates Krishna''s divine leelas in detail, considered even older than the Bhagavata Purana version. The tyranny of Kamsa, imprisonment of Devaki-Vasudeva, Krishna''s birth in the prison cell, Vasudeva carrying baby Krishna across the flooding Yamuna to Gokul — all are elaborated. In Gokul: the slaying of Putana, lifting of Govardhan mountain, subduing Kaliya Naga, the Rasa Leela, and killing of Kamsa in Mathura. The famous episode of mother Yashoda seeing the entire universe in baby Krishna''s mouth is beautifully described.',
'Complete Krishna Leela from birth to Kamsa''s destruction — the devotional heart of Vishnu Purana.', 65),

('1bf15491-051e-4e91-bfdd-5d636172eecf', 4, 'वर्णाश्रम और सूर्यवंश - Social Order and Solar Dynasty',
'चतुर्थ अंश में वर्णाश्रम धर्म, सूर्यवंश और चन्द्रवंश की वंशावली और धर्म का विस्तृत वर्णन है।

हिन्दी अनुवाद:
इस अंश में मनु से लेकर भगवान राम तक सूर्यवंश (इक्ष्वाकु वंश) की पूरी वंशावली दी गई है। चन्द्रवंश में ययाति, पुरु, भरत, कुरु और पाण्डवों तक की वंशावली है। वर्णाश्रम धर्म — ब्राह्मण, क्षत्रिय, वैश्य, शूद्र के कर्तव्य और ब्रह्मचर्य, गृहस्थ, वानप्रस्थ, संन्यास आश्रमों का विवरण है। यह अंश सामाजिक व्यवस्था और राजधर्म पर महत्वपूर्ण प्रकाश डालता है।

English Translation:
The fourth part details the Varnashrama system, the complete genealogy of the Solar (Suryavanshi/Ikshvaku) dynasty from Manu to Lord Rama, and the Lunar (Chandravanshi) dynasty including Yayati, Puru, Bharata, Kuru, and the Pandavas. The duties of the four varnas and four ashramas (Brahmacharya, Grihastha, Vanaprastha, Sannyasa) are elaborated. This section provides important insights into ancient Indian social organization and Rajadharma (duties of kings).',
'Royal dynasties (Solar and Lunar), Varnashrama dharma, and ancient Indian governance.', 40),

('1bf15491-051e-4e91-bfdd-5d636172eecf', 5, 'कलियुग और प्रलय - Kali Yuga and Dissolution',
'पंचम अंश में कलियुग के लक्षण और प्रलय (सृष्टि के विनाश) का वर्णन है।

हिन्दी अनुवाद:
कलियुग में धर्म का पतन, अधर्म का उत्थान, मनुष्यों का नैतिक पतन, आयु और बल का ह्रास — ये सभी लक्षण विस्तार से बताए गए हैं। राजा धर्म का पालन नहीं करेंगे, ब्राह्मण वेद का त्याग करेंगे, शूद्र तपस्या करेंगे — ये कलियुग की विशेषताएँ हैं। अन्त में भगवान विष्णु कल्कि अवतार लेकर अधर्मियों का नाश करेंगे और सतयुग का आरम्भ होगा। चार प्रकार के प्रलय — नित्य, नैमित्तिक, प्राकृतिक और आत्यन्तिक का वर्णन है। यह अंश काल चक्र (cycle of time) की हिन्दू अवधारणा को स्पष्ट करता है।

English Translation:
The fifth part describes the characteristics of Kali Yuga and the four types of Pralaya (cosmic dissolution). In Kali Yuga: decline of dharma, rise of adharma, moral degradation, decrease in lifespan and strength. Kings will abandon dharma, Brahmins will forsake Vedas. Finally, Lord Vishnu will incarnate as Kalki to destroy evil and inaugurate Satya Yuga. Four types of dissolution are described — Nitya (daily), Naimittika (periodic), Prakritika (elemental), and Atyantika (ultimate liberation). This section explains the Hindu concept of cyclical time.',
'Kali Yuga prophecies, Kalki avatar, and the four types of cosmic dissolution.', 38);

-- Add chapters for Shrimad Bhagavatam (id: e12449fd-5771-4c33-81aa-70d180d019f4)
INSERT INTO scripture_chapters (scripture_id, chapter_number, title, content, summary, verse_count) VALUES
('e12449fd-5771-4c33-81aa-70d180d019f4', 1, 'प्रथम स्कन्ध - सृष्टि और भक्ति का परिचय',
'श्रीमद्भागवत महापुराण का प्रथम स्कन्ध शुकदेव गोस्वामी द्वारा राजा परीक्षित को कथा सुनाने से आरम्भ होता है।

मूल श्लोक:
"जन्माद्यस्य यतोऽन्वयादितरतश्चार्थेष्वभिज्ञः स्वराट्
तेने ब्रह्म हृदा य आदिकवये मुह्यन्ति यत्सूरयः॥"

हिन्दी अनुवाद:
जिनसे इस जगत की उत्पत्ति, स्थिति और प्रलय होती है, जो सर्वज्ञ और स्वतंत्र हैं, जिन्होंने आदि कवि ब्रह्मा को हृदय में वेद ज्ञान दिया — उन भगवान को नमस्कार। राजा परीक्षित को तक्षक नाग के शाप से सात दिन में मृत्यु होनी थी। उन्होंने गंगा तट पर शुकदेव गोस्वामी से भागवत कथा सुनी। यह कथा मोक्ष का मार्ग है।

English Translation:
The first skandha begins with Shukadeva Goswami narrating the Bhagavatam to King Parikshit on the banks of the Ganges. Parikshit, cursed to die in seven days from a snake bite, renounced everything and sought the highest spiritual knowledge. The opening verse establishes the Absolute Truth (Bhagavan) as the source, sustainer, and destroyer of all. This skandha introduces the purpose of Bhagavatam — to provide the ripe fruit of Vedic wisdom.',
'Introduction to Bhagavatam through Parikshit-Shukadeva dialogue and the purpose of the text.', 90),

('e12449fd-5771-4c33-81aa-70d180d019f4', 2, 'दशम स्कन्ध - कृष्ण अवतार लीला',
'दशम स्कन्ध भागवतम् का हृदय है — भगवान श्रीकृष्ण की संपूर्ण लीला।

मूल श्लोक:
"वसुदेवसुतं देवं कंसचाणूरमर्दनम्।
देवकीपरमानन्दं कृष्णं वन्दे जगद्गुरुम्॥"

हिन्दी अनुवाद:
वसुदेव के पुत्र, कंस और चाणूर के संहारक, देवकी के परमानंद, जगद्गुरु कृष्ण को मैं वन्दन करता हूँ। कृष्ण जन्म, गोकुल लीला, माखन चोरी, गोपियों के साथ रास लीला, गोवर्धन उठाना, कालिया नाग दमन, कंस वध, मथुरा और द्वारका लीला — सभी का विस्तृत वर्णन। रासलीला में गोपियों का कृष्ण प्रेम भक्ति का सर्वोच्च उदाहरण माना जाता है — यह शृंगार नहीं, आत्मा का परमात्मा के प्रति प्रेम है।

English Translation:
The tenth skandha is the heart of Bhagavatam — the complete avatar leela of Lord Krishna. From His birth in Kamsa''s prison, childhood in Gokul (butter-stealing, playing with gopas), Rasa Leela with the gopis, lifting Govardhan, subduing Kaliya, to killing Kamsa and establishing Dwaraka — everything is narrated in exquisite devotional detail. The Rasa Leela is considered the highest expression of bhakti — not romantic love but the soul''s yearning for union with the Divine.',
'Complete Krishna avatar from birth to Dwaraka — the devotional heart of Bhagavatam.', 200),

('e12449fd-5771-4c33-81aa-70d180d019f4', 3, 'सप्तम स्कन्ध - प्रह्लाद चरित्र और नरसिंह अवतार',
'सप्तम स्कन्ध में भक्त प्रह्लाद और नरसिंह अवतार की कथा है।

मूल श्लोक:
"श्रवणं कीर्तनं विष्णोः स्मरणं पादसेवनम्।
अर्चनं वन्दनं दास्यं सख्यमात्मनिवेदनम्॥"

हिन्दी अनुवाद:
भक्ति के नौ प्रकार — श्रवण (सुनना), कीर्तन (गाना), स्मरण (याद करना), पादसेवन (चरणसेवा), अर्चन (पूजा), वन्दन (प्रणाम), दास्य (सेवा), सख्य (मित्रता), आत्मनिवेदन (समर्पण)। दैत्यराज हिरण्यकशिपु ने ब्रह्मा से वरदान प्राप्त किया — न दिन में मरे न रात में, न अंदर न बाहर, न मनुष्य से न पशु से। उसके पुत्र प्रह्लाद विष्णु भक्त थे। हिरण्यकशिपु ने प्रह्लाद को मारने के अनेक प्रयास किए — आग, विष, हाथी, सर्प — परंतु भक्त की रक्षा भगवान ने की। अंत में विष्णु ने नरसिंह (आधा मनुष्य, आधा सिंह) रूप धारण करके, संध्याकाल में, दहलीज पर, अपनी गोद में रखकर हिरण्यकशिपु का वध किया।

English Translation:
The seventh skandha narrates the story of child-devotee Prahlada and the Narasimha avatar. Prahlada''s nine forms of bhakti (Navavidha Bhakti) are the foundation of Hindu devotional practice. Demon king Hiranyakashipu obtained a boon making him nearly immortal. His son Prahlada became a devoted Vishnu bhakta. After numerous failed attempts to kill Prahlada, Vishnu manifested as Narasimha (half-man, half-lion) at twilight, on the threshold, to slay Hiranyakashipu — circumventing every condition of his boon.',
'Prahlada''s unshakeable devotion, Navavidha Bhakti, and the dramatic Narasimha avatar.', 120),

('e12449fd-5771-4c33-81aa-70d180d019f4', 4, 'अष्टम स्कन्ध - गजेन्द्र मोक्ष और समुद्र मन्थन',
'अष्टम स्कन्ध में गजेन्द्र मोक्ष और समुद्र मन्थन की कथा है।

हिन्दी अनुवाद:
गजेन्द्र (हाथियों का राजा) एक झील में पानी पीने गया। एक मगरमच्छ ने उसका पैर पकड़ लिया। हजारों वर्षों तक संघर्ष किया परंतु छूट नहीं पाया। अंत में उसने सभी आशाएँ छोड़कर भगवान विष्णु को पुकारा — "आदिमूलं नमामि" (आदि कारण को नमस्कार)। भगवान तुरंत गरुड़ पर सवार होकर आए और सुदर्शन चक्र से मगरमच्छ को मारकर गजेन्द्र को मुक्त किया। यह कथा शरणागति (surrender) की सर्वोत्तम शिक्षा है। समुद्र मन्थन में देवताओं और दानवों ने मिलकर क्षीरसागर का मन्थन किया। 14 रत्न प्रकट हुए — अमृत, लक्ष्मी, कालकूट विष, ऐरावत, उच्चैःश्रवा, कौस्तुभ मणि आदि। विष को शिव ने पीया (नीलकण्ठ), अमृत देवताओं को मिला।

English Translation:
The eighth skandha contains two iconic episodes. Gajendra Moksha: the elephant king, caught by a crocodile, struggled for thousands of years before surrendering completely to Vishnu with the prayer "Adimooolam Namami." The Lord instantly arrived on Garuda and freed him — teaching supreme surrender. Samudra Manthan: gods and demons churned the cosmic ocean, producing 14 treasures including Amrita (nectar), Lakshmi, Kaalakuta poison (drunk by Shiva), Airavata elephant, and the Kaustubha gem.',
'Gajendra Moksha (surrender to God) and Samudra Manthan (churning of the cosmic ocean).', 95),

('e12449fd-5771-4c33-81aa-70d180d019f4', 5, 'द्वादश स्कन्ध - कलियुग और भागवत माहात्म्य',
'द्वादश (बारहवाँ) स्कन्ध कलियुग के वर्णन और भागवत माहात्म्य के साथ समापन करता है।

हिन्दी अनुवाद:
कलियुग में मनुष्य अल्पायु, अल्पबुद्धि और अल्पभाग्य होंगे। धर्म एक पैर पर खड़ा रहेगा (सत्य)। राजा लुटेरे होंगे, विद्वान धन के लोभी, स्त्रियाँ असुरक्षित। परंतु कलियुग का एक विशेष गुण है — केवल कृष्ण नाम के कीर्तन से मोक्ष संभव है, जो सतयुग में वर्षों की तपस्या से मिलता था। भगवान कल्कि अवतार लेकर सतयुग का आरम्भ करेंगे। भागवत सुनने मात्र से सभी पापों का नाश होता है और मोक्ष प्राप्त होता है — यही भागवत माहात्म्य है। राजा परीक्षित ने सात दिन कथा सुनकर मोक्ष प्राप्त किया।

English Translation:
The twelfth skandha describes Kali Yuga and concludes with the glory of Bhagavatam itself. In Kali Yuga: short-lived, less intelligent humans; dharma stands on one leg (truth); kings become plunderers. However, Kali Yuga has one unique gift — mere chanting of Krishna''s name grants liberation that required years of tapas in Satya Yuga. Lord Vishnu will incarnate as Kalki to end Kali Yuga. The Bhagavatam''s glory: merely hearing it destroys all sins and grants moksha. King Parikshit attained liberation by hearing the seven-day narration.',
'Kali Yuga prophecies, power of Krishna Nama, and the liberating glory of Bhagavatam.', 80);

-- Update total_chapters for enhanced scriptures
UPDATE scriptures SET total_chapters = 5 WHERE id = '293555f4-95ba-468d-a34a-6449d012c182';
UPDATE scriptures SET total_chapters = 5 WHERE id = '1bf15491-051e-4e91-bfdd-5d636172eecf';
UPDATE scriptures SET total_chapters = 5 WHERE id = 'e12449fd-5771-4c33-81aa-70d180d019f4';
