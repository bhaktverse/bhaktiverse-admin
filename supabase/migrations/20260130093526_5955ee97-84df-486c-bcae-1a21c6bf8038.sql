
-- Migration: Add Comprehensive Scripture Chapters for Ramayana, Yoga Sutras, and Upanishads

-- Ramayana 7 Kandas (835606fb-2877-402a-a468-d633b150b537)
INSERT INTO scripture_chapters (scripture_id, chapter_number, title, content, summary, verse_count) VALUES
('835606fb-2877-402a-a468-d633b150b537', 1, 'Bala Kanda - The Book of Youth', 
'बालकाण्ड रामायण का प्रथम काण्ड है। इसमें राम के जन्म, बचपन, शिक्षा और विवाह का वर्णन है। राजा दशरथ की कथा, पुत्रेष्टि यज्ञ, राम-लक्ष्मण का विश्वामित्र के साथ जाना, ताड़का वध, अहिल्या उद्धार, धनुष भंग और सीता स्वयंवर का वर्णन।

The Bala Kanda narrates the birth and childhood of Rama. King Dasharatha of Ayodhya performs a sacred yajna for sons. Rama and his three brothers are born. Vishwamitra takes Rama and Lakshmana to protect his yajna. Rama kills the demoness Tataka, frees Ahalya from her curse, and wins Sita''s hand by breaking Shiva''s bow.',
'Chronicles Rama''s divine birth, education under Vashishtha, journey with Vishwamitra, slaying of Tataka, liberation of Ahalya, and marriage to Sita after breaking Shiva''s mighty bow.', 2400),

('835606fb-2877-402a-a468-d633b150b537', 2, 'Ayodhya Kanda - The Book of Ayodhya', 
'अयोध्या काण्ड में राम के राज्याभिषेक की तैयारी, कैकेयी का षड्यंत्र, राम का वनवास, भरत का अयोध्या लौटना और राम की पादुकाओं से राज्य चलाना वर्णित है।

The Ayodhya Kanda describes the preparations for Rama''s coronation, Queen Kaikeyi''s demand for Rama''s exile and Bharata''s coronation, Rama''s acceptance of 14-year exile, Sita and Lakshmana accompanying him, Dasharatha''s death from grief, Bharata''s refusal of the throne, and his pilgrimage to bring Rama back.',
'Depicts the palace intrigue leading to Rama''s exile, the profound grief of Dasharatha, and Bharata''s exemplary devotion in ruling Ayodhya with Rama''s sandals on the throne.', 4800),

('835606fb-2877-402a-a468-d633b150b537', 3, 'Aranya Kanda - The Book of the Forest', 
'अरण्य काण्ड में राम का दण्डकारण्य में निवास, ऋषियों से मिलन, राक्षसों का वध, शूर्पणखा प्रसंग, खर-दूषण वध, मारीच का स्वर्ण मृग बनना और सीता हरण का वर्णन है।

The Aranya Kanda narrates Rama''s forest life, encounters with sages and demons, Surpanakha''s humiliation, killing of Khara and Dushana, Ravana''s plot using Maricha as a golden deer, and the abduction of Sita. Jatayu''s heroic fight and death, meeting with Shabari.',
'Chronicles forest adventures including battles with demons, the tragic abduction of Sita by Ravana, Jatayu''s sacrifice, and the beginning of the search for Sita.', 2650),

('835606fb-2877-402a-a468-d633b150b537', 4, 'Kishkindha Kanda - The Book of Kishkindha', 
'किष्किन्धा काण्ड में राम-हनुमान मिलन, सुग्रीव मित्रता, बालि वध, सुग्रीव का राज्याभिषेक और सीता खोज के लिए वानर सेना का प्रस्थान वर्णित है।

The Kishkindha Kanda describes Rama''s alliance with Sugriva, the killing of Vali, Sugriva''s coronation as king of the vanaras, the rainy season wait, and the dispatch of vanara armies to search for Sita in all directions.',
'Narrates the formation of the alliance with vanara kingdom, Rama''s strategic support to Sugriva, and the massive search operation launched to find Sita.', 2850),

('835606fb-2877-402a-a468-d633b150b537', 5, 'Sundara Kanda - The Book of Beauty', 
'सुन्दर काण्ड हनुमान की लंका यात्रा का वर्णन करता है। समुद्र लांघना, लंका में प्रवेश, सीता खोज, अशोक वाटिका में सीता से भेंट, लंका दहन और वापसी।

The Sundara Kanda is dedicated to Hanuman''s heroic journey. He leaps across the ocean, searches Lanka, finds Sita in Ashoka Vatika, gives her Rama''s ring, destroys the grove, allows capture, burns Lanka with his tail, and returns with news.',
'The most auspicious section celebrating Hanuman''s devotion, courage, and intelligence in finding Sita and bringing hope to Rama.', 2880),

('835606fb-2877-402a-a468-d633b150b537', 6, 'Yuddha Kanda - The Book of War', 
'युद्ध काण्ड में राम-वानर सेना का लंका पर आक्रमण, सेतु निर्माण, राक्षसों से युद्ध, कुम्भकर्ण-इन्द्रजीत वध, रावण वध और विभीषण का राज्याभिषेक वर्णित है।

The Yuddha Kanda describes the great war. The building of Rama Setu, crossing to Lanka, battles with Ravana''s forces, deaths of Kumbhakarna and Indrajit, the final duel between Rama and Ravana, Ravana''s death, Sita''s agni pariksha, and Vibhishana''s coronation.',
'The epic battle for Lanka, showcasing dharma''s triumph over adharma, ending with Ravana''s defeat and the reunion of Rama and Sita.', 5700),

('835606fb-2877-402a-a468-d633b150b537', 7, 'Uttara Kanda - The Book of Answers', 
'उत्तर काण्ड में राम का अयोध्या लौटना, राज्याभिषेक, रामराज्य का वर्णन, सीता का वनवास, लव-कुश जन्म, अश्वमेध यज्ञ और राम का जल समाधि लेना वर्णित है।

The Uttara Kanda narrates the aftermath - Rama''s return to Ayodhya, his coronation, the ideal Rama Rajya, Sita''s exile due to public doubt, birth of Lava and Kusha, the Ashwamedha yajna, Sita''s return to earth, and Rama''s final journey.',
'The concluding book depicting Rama''s ideal rule, family trials, and ultimate spiritual departure, completing the divine avatar''s earthly mission.', 3100);

-- Yoga Sutras of Patanjali 4 Padas (2e27ae2a-0342-4cb1-83f7-3ca996c608c7)
INSERT INTO scripture_chapters (scripture_id, chapter_number, title, content, summary, verse_count) VALUES
('2e27ae2a-0342-4cb1-83f7-3ca996c608c7', 1, 'Samadhi Pada - On Contemplation', 
'समाधि पाद में योग की परिभाषा, चित्त वृत्तियाँ, अभ्यास और वैराग्य, ईश्वर प्रणिधान, और समाधि के प्रकार वर्णित हैं।

योगश्चित्तवृत्तिनिरोधः। तदा द्रष्टुः स्वरूपेऽवस्थानम्।
Yoga is the cessation of the modifications of the mind. Then the seer abides in their true nature.

This chapter defines yoga, describes the five types of mental modifications (vrittis), explains the means to still the mind through practice (abhyasa) and non-attachment (vairagya), introduces Ishvara as the supreme teacher, and describes various levels of samadhi.',
'Foundational chapter defining yoga as mind control, introducing key concepts of practice, detachment, and the stages of meditative absorption.', 51),

('2e27ae2a-0342-4cb1-83f7-3ca996c608c7', 2, 'Sadhana Pada - On Practice', 
'साधना पाद में क्रिया योग, क्लेश, कर्म सिद्धांत, और अष्टांग योग के प्रथम पांच अंग वर्णित हैं।

तपःस्वाध्यायेश्वरप्रणिधानानि क्रियायोगः।
Kriya Yoga consists of austerity, self-study, and surrender to Ishvara.

This chapter introduces practical yoga through Kriya Yoga, explains the five afflictions (kleshas) that cause suffering, describes the law of karma, and presents the first five limbs of Ashtanga Yoga: Yama, Niyama, Asana, Pranayama, and Pratyahara.',
'The practical chapter presenting Kriya Yoga and the external limbs of eight-fold yoga path for purification and preparation.', 55),

('2e27ae2a-0342-4cb1-83f7-3ca996c608c7', 3, 'Vibhuti Pada - On Accomplishments', 
'विभूति पाद में धारणा, ध्यान, समाधि (संयम) और सिद्धियों का वर्णन है।

त्रयमेकत्र संयमः। तज्जयात्प्रज्ञालोकः।
These three (dharana, dhyana, samadhi) together constitute samyama. From mastery of it comes the light of insight.

This chapter describes the internal limbs: Dharana (concentration), Dhyana (meditation), and Samadhi (absorption). It explains samyama and the various siddhis (powers) that arise, while warning against attachment to these powers.',
'Describes the inner practices and supernatural powers (siddhis) arising from deep meditation, while cautioning against spiritual materialism.', 56),

('2e27ae2a-0342-4cb1-83f7-3ca996c608c7', 4, 'Kaivalya Pada - On Liberation', 
'कैवल्य पाद में सिद्धियों का स्रोत, मन की प्रकृति, कर्म, और मुक्ति का वर्णन है।

पुरुषार्थशून्यानां गुणानां प्रतिप्रसवः कैवल्यं स्वरूपप्रतिष्ठा वा चितिशक्तेरिति।
Liberation (kaivalya) is when the gunas, having fulfilled their purpose, return to their source, or the power of consciousness is established in its own nature.

This final chapter discusses the sources of siddhis, the nature of mind and consciousness, how karma is transcended, and the ultimate state of kaivalya - absolute freedom and independence of pure consciousness.',
'The culminating chapter on absolute liberation, where consciousness realizes its eternal, unchanging nature beyond all mental modifications.', 34);

-- Major Upanishads (b4f701a7-f16f-4404-a982-003493daad87)
INSERT INTO scripture_chapters (scripture_id, chapter_number, title, content, summary, verse_count) VALUES
('b4f701a7-f16f-4404-a982-003493daad87', 1, 'Isha Upanishad - The Lord Dwells in All', 
'ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्। तेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम्॥

The entire universe is pervaded by the Lord. Enjoy through renunciation, do not covet anyone''s wealth.

The Isha Upanishad teaches the unity of the self with the Supreme, the balance between action and knowledge, and the path to immortality through right understanding. It emphasizes seeing the Self in all beings and all beings in the Self.',
'One of the shortest yet most profound Upanishads, teaching non-attachment, seeing divinity in all, and the harmony of knowledge and action.', 18),

('b4f701a7-f16f-4404-a982-003493daad87', 2, 'Kena Upanishad - By Whom?', 
'केनेषितं पतति प्रेषितं मनः केन प्राणः प्रथमः प्रैति युक्तः। केनेषितां वाचमिमां वदन्ति चक्षुः श्रोत्रं क उ देवो युनक्ति॥

By whose will does the mind think? Who directs the first breath? Who impels this speech? What god directs the eyes and ears?

The Kena Upanishad explores the ultimate cause behind all mental and sensory functions, introducing Brahman as the ear of the ear, mind of the mind, speech of speech - the unknowable knower behind all knowledge.',
'Explores the power behind all powers, teaching that Brahman cannot be known as an object but is the knowing subject itself.', 35),

('b4f701a7-f16f-4404-a982-003493daad87', 3, 'Katha Upanishad - Death as Teacher', 
'The Katha Upanishad presents the dialogue between young Nachiketa and Yama, the god of death. Nachiketa asks about what happens after death and receives the supreme teaching about the eternal Atman.

उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत। क्षुरस्य धारा निशिता दुरत्यया दुर्गं पथस्तत्कवयो वदन्ति॥
Arise, awake, and learn by approaching the excellent ones. The path is sharp as a razor''s edge, difficult to traverse, say the wise.

Yama teaches about the Atman that is unborn, eternal, and beyond death, the chariot metaphor of body-mind-soul, and the path to liberation through self-knowledge.',
'The profound teaching of Death himself to Nachiketa, revealing the immortal Self beyond death and the razor''s edge path to liberation.', 120),

('b4f701a7-f16f-4404-a982-003493daad87', 4, 'Mundaka Upanishad - Higher and Lower Knowledge', 
'द्वे विद्ये वेदितव्ये इति ह स्म यद्ब्रह्मविदो वदन्ति परा चैवापरा च।

Two kinds of knowledge must be known - the higher and the lower, say the knowers of Brahman.

The Mundaka Upanishad distinguishes between lower knowledge (Vedas, rituals, sciences) and higher knowledge (knowing the Imperishable). It uses the beautiful metaphor of two birds on a tree - the individual soul and the Supreme Self.',
'Distinguishes spiritual from material knowledge, presents the famous two-birds metaphor, and describes Brahman as the target to be pierced by the arrow of meditation.', 64),

('b4f701a7-f16f-4404-a982-003493daad87', 5, 'Mandukya Upanishad - The Sacred Syllable OM', 
'ओमित्येतदक्षरमिदं सर्वं तस्योपव्याख्यानं भूतं भवद्भविष्यदिति सर्वमोङ्कार एव।

OM is this imperishable syllable. All this is OM. Whatever has been, is, or will be - all is OM.

The Mandukya Upanishad, though the shortest, is considered the essence of all Upanishads. It analyzes the four states of consciousness - waking (Vaishvanara), dreaming (Taijasa), deep sleep (Prajna), and the fourth transcendent state (Turiya) - through the syllable OM.',
'The shortest yet most concentrated Upanishad, analyzing consciousness through AUM and revealing the fourth state of pure awareness.', 12),

('b4f701a7-f16f-4404-a982-003493daad87', 6, 'Taittiriya Upanishad - The Five Sheaths', 
'The Taittiriya Upanishad presents the famous teaching of the five sheaths (pancha kosha) that cover the Self: food sheath, vital sheath, mental sheath, intellectual sheath, and bliss sheath.

आनन्दो ब्रह्मेति व्यजानात्। आनन्दाद्ध्येव खल्विमानि भूतानि जायन्ते।
He knew Bliss as Brahman. From Bliss indeed all beings are born.

It also contains the famous convocation address about speaking truth, practicing dharma, and honoring parents as gods.',
'Reveals the five sheaths covering the Self and the progressive journey inward to discover the blissful Brahman at the core.', 79),

('b4f701a7-f16f-4404-a982-003493daad87', 7, 'Chandogya Upanishad - That Thou Art', 
'तत्त्वमसि श्वेतकेतो।
That thou art, Shvetaketu.

The Chandogya Upanishad contains one of the mahavakyas (great statements). Sage Uddalaka teaches his son Shvetaketu that the essence of all beings is Sat (Pure Being), and that Shvetaketu himself is that essence. The teaching includes the famous examples of salt dissolved in water and the fig seed containing the potential of a giant tree.',
'Contains the mahavakya "Tat Tvam Asi" and rich teachings on the identity of individual soul with Brahman through vivid examples.', 627),

('b4f701a7-f16f-4404-a982-003493daad87', 8, 'Brihadaranyaka Upanishad - The Great Forest Teaching', 
'असतो मा सद्गमय। तमसो मा ज्योतिर्गमय। मृत्योर्मा अमृतं गमय।
From unreal lead me to Real. From darkness lead me to Light. From death lead me to Immortality.

अहं ब्रह्मास्मि।
I am Brahman.

The largest and oldest Upanishad contains profound dialogues, including Yajnavalkya''s teachings to Maitreyi about the Self being dearer than anything, and the teaching "Aham Brahmasmi" - another mahavakya.',
'The largest Upanishad containing the mahavakya "Aham Brahmasmi", the famous peace invocation, and Yajnavalkya''s teachings on the Self.', 435),

('b4f701a7-f16f-4404-a982-003493daad87', 9, 'Prashna Upanishad - The Six Questions', 
'The Prashna Upanishad presents six students asking sage Pippalada profound questions about creation, prana, the mind, dreams, meditation on OM, and the Supreme Person.

प्राणात्प्रजायते। यथा पुरुषे छायैतस्मिन्नेतदातत्वमात्मकृतेन मनसाऽयमात्मानं प्रविशति।
From Prana all beings are born. As a shadow is to a person, so is this Self to the embodied one.

Each question and answer progressively reveals deeper truths about life, consciousness, and liberation.',
'Structured as six profound questions and answers, revealing the nature of prana, mind, OM, and the highest Self.', 67),

('b4f701a7-f16f-4404-a982-003493daad87', 10, 'Aitareya Upanishad - Consciousness is Brahman', 
'प्रज्ञानं ब्रह्म।
Consciousness is Brahman.

The Aitareya Upanishad describes creation from the Self, the entry of the Self into beings, and the nature of consciousness. It contains the mahavakya "Prajnanam Brahma" - Pure Consciousness is Brahman.

It traces how the cosmic Self created the worlds, the cosmic person, the senses, and then entered into creation as the individual consciousness.',
'Contains the mahavakya "Prajnanam Brahma", describing cosmic creation and the nature of consciousness as the ultimate reality.', 33);
