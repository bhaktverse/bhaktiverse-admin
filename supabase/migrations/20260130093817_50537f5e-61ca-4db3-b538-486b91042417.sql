
-- Migration: Add 30+ New Spiritual FAQs across all categories

INSERT INTO spiritual_faqs (question, answer, category, difficulty_level, language, source_references) VALUES

-- Meditation FAQs (expanding from 3 to 10)
('What is the best time for meditation according to scriptures?', 
'According to yogic tradition, Brahma Muhurta (approximately 3:30-5:30 AM) is considered the most auspicious time for meditation. During this time, the atmosphere is pure, the mind is naturally calm after sleep, and spiritual energies are at their peak. The Yoga Sutras recommend this time for sadhana. However, Sandhya kaal (dawn and dusk transitions) are also highly beneficial as the energy shifts support inner stillness.', 
'meditation', 'beginner', 'en', '["Yoga Sutras of Patanjali", "Hatha Yoga Pradipika"]'),

('How do I deal with a wandering mind during meditation?', 
'A wandering mind is natural and expected, especially for beginners. The practice is not to prevent thoughts but to notice them without judgment and gently return attention to your chosen focus - breath, mantra, or awareness itself. The Bhagavad Gita (6.26) says: "From wherever the mind wanders, restrain it and bring it back to the Self." Each return strengthens concentration. With consistent practice, gaps between thoughts naturally lengthen.', 
'meditation', 'beginner', 'en', '["Bhagavad Gita 6.26", "Patanjali Yoga Sutras 1.2"]'),

('What is Trataka meditation and how is it practiced?', 
'Trataka is a powerful yogic purification and meditation technique involving steady gazing at a single point, traditionally a candle flame. Practice: Sit comfortably, place a lit candle at eye level 2-3 feet away, gaze without blinking until tears form, then close eyes and visualize the flame at the third eye. This practice purifies the eyes, strengthens concentration, awakens Ajna chakra, and prepares for deeper meditation. It is one of the six shatkarmas mentioned in Hatha Yoga Pradipika.', 
'meditation', 'intermediate', 'en', '["Hatha Yoga Pradipika", "Gheranda Samhita"]'),

('What are the different stages of Samadhi?', 
'Patanjali describes multiple stages of Samadhi. Samprajnata (cognitive) Samadhi has four levels: Savitarka (with gross thought), Savichara (with subtle thought), Sananda (with bliss), and Sasmita (with I-sense). Beyond these is Asamprajnata (non-cognitive) Samadhi where all mental modifications cease. The highest state, Nirvikalpa Samadhi, transcends all duality and subject-object distinction. Sahaja Samadhi is continuous natural absorption maintained even in activity.', 
'meditation', 'advanced', 'en', '["Yoga Sutras 1.17-18", "Yoga Sutras 1.41-51"]'),

('How does mantra meditation differ from silent meditation?', 
'Mantra meditation uses sacred sound vibrations as the focal point, engaging the mind through repetition (japa). The vibrational energy of mantras purifies the subtle body and creates specific spiritual effects. Silent meditation (mauna dhyana) works directly with awareness without sound support, observing the nature of mind itself. Mantras are often recommended for beginners as they give the active mind something positive to grasp. Both paths lead to the same goal of mental stillness and self-realization.', 
'meditation', 'beginner', 'en', '["Japa Yoga by Swami Sivananda", "Yoga Sutras"]'),

('What is Yoga Nidra and how does it relate to meditation?', 
'Yoga Nidra, meaning "yogic sleep," is a systematic practice of deep relaxation and pratyahara (sense withdrawal) that leads to a state between waking and sleeping. While the body appears asleep, consciousness remains aware. This liminal state accesses the subconscious mind, releases deep tensions, and facilitates transformation. Unlike regular meditation which sharpens focus, Yoga Nidra expands awareness while deeply relaxing. One hour of Yoga Nidra equals 4 hours of ordinary sleep in rest value.', 
'meditation', 'intermediate', 'en', '["Bihar School of Yoga teachings", "Mandukya Upanishad"]'),

('What role does the breath play in meditation?', 
'Breath is the bridge between body and mind, the physical manifestation of prana (life force). In meditation, observing or regulating breath serves multiple purposes: it anchors attention to the present moment, calms the nervous system, balances prana, and prepares for deeper states. The Hatha Yoga Pradipika states: "When the breath wanders, the mind is unsteady; when the breath is calmed, the mind is calm." Breath awareness naturally leads to thought reduction.', 
'meditation', 'beginner', 'en', '["Hatha Yoga Pradipika 2.2", "Vigyan Bhairav Tantra"]'),

-- Rituals FAQs (expanding from 8 to 15)
('Why do we light a lamp (diya) before worship?', 
'The lamp symbolizes knowledge dispelling ignorance, consciousness illuminating darkness, and the individual soul connecting with the Supreme Light. The oil or ghee represents our vasanas (tendencies), the wick symbolizes the ego, and when lit with spiritual knowledge, they dissolve into pure light (Brahman). Lighting a lamp purifies the environment, creates positive vibrations, and reminds us that we are lighting the lamp of wisdom within. The Upanishads describe Brahman as the "light of lights."', 
'rituals', 'beginner', 'en', '["Brihadaranyaka Upanishad", "Mundaka Upanishad 2.2.10"]'),

('What is the significance of Abhishekam in temple worship?', 
'Abhishekam is the sacred bathing of the deity''s murti with various substances like water, milk, yogurt, honey, ghee, and sandalwood paste - each carrying specific energies and offerings. Water purifies, milk nourishes, honey brings sweetness, ghee illuminates. This ritual charges the deity with cosmic energy, removes accumulated negative energies, and creates powerful positive vibrations. Devotees participating receive spiritual blessings. Major temples perform elaborate Rudrabhishekam using 108 substances.', 
'rituals', 'intermediate', 'en', '["Agama Shastra", "Temple worship traditions"]'),

('Why do we perform Sandhya Vandana?', 
'Sandhya Vandana is the Vedic ritual performed at the three sandhi kaals (junction times) - dawn, noon, and dusk - when cosmic energies transition. These are powerful moments for spiritual practice. The ritual includes purification (achamana), pranayama, Gayatri japa, and sun salutation through mantras. It fulfills the daily dharmic duty of a dvija (twice-born), maintains spiritual discipline, and connects the practitioner with cosmic rhythms. Manu Smriti calls it the primary duty of the householder.', 
'rituals', 'intermediate', 'en', '["Manu Smriti", "Taittiriya Aranyaka"]'),

('What is Prana Pratishtha and why is it important?', 
'Prana Pratishtha is the sacred ceremony that infuses divine life-force into a murti, transforming it from stone or metal into a living representation of the deity. Through elaborate rituals including specific mantras, mudras, nyasa (touching body parts with mantras), and pranayama, the priest invites the deity''s consciousness to permanently reside in the idol. Only after this ceremony does the murti become worthy of worship. The process follows detailed Agama Shastra prescriptions.', 
'rituals', 'advanced', 'en', '["Agama Shastra", "Tantra texts"]'),

('What is the meaning of Pradakshina (circumambulation)?', 
'Pradakshina means walking clockwise around a sacred object or temple, keeping it to one''s right. This symbolizes that the deity is at the center of our life, and we revolve around that divine principle. Physically, it generates positive energy as the heart (on the left) stays closer to the deity. The number of circumambulations varies: 1 for Ganesha, 3 for Devi, 7 for the Sun, 21 for Saturn. Giri Pradakshina around sacred hills like Arunachala is considered highly meritorious.', 
'rituals', 'beginner', 'en', '["Temple worship traditions", "Skanda Purana"]'),

('Why is Kumkum (vermillion) applied between eyebrows?', 
'Kumkum is applied at the Ajna chakra (third eye point) which is the seat of concealed wisdom and concentration. This area, between and slightly above the eyebrows, is considered the command center of the body. The red color stimulates this energy center, retains vital energy, and is believed to facilitate concentration during worship. For married women, it also signifies marital status. The pressure on this point activates the pineal gland and promotes calmness.', 
'rituals', 'beginner', 'en', '["Tantra traditions", "Hindu symbolic practices"]'),

('What is the significance of breaking coconut in temples?', 
'The coconut represents the human ego and ignorance. The hard outer shell symbolizes the ego, the white kernel represents the mind, and the sweet water inside is the pure soul. Breaking the coconut signifies breaking the ego before the divine, offering our complete self to God. The three marks on the coconut represent the three eyes of Shiva (or three gunas). After breaking, the white flesh is offered and returned as prasad, symbolizing the return of purified consciousness.', 
'rituals', 'beginner', 'en', '["Hindu symbolic traditions", "Shaiva practices"]'),

-- Philosophy FAQs (expanding from 7 to 14)
('What are the four Mahavakyas and their meanings?', 
'The four Mahavakyas (great statements) from the Upanishads encapsulate the highest Vedantic truth of identity between individual soul and Brahman:
1. प्रज्ञानं ब्रह्म (Prajnanam Brahma) - "Consciousness is Brahman" - Aitareya Upanishad
2. अहं ब्रह्मास्मि (Aham Brahmasmi) - "I am Brahman" - Brihadaranyaka Upanishad
3. तत्त्वमसि (Tat Tvam Asi) - "That Thou Art" - Chandogya Upanishad
4. अयमात्मा ब्रह्म (Ayam Atma Brahma) - "This Self is Brahman" - Mandukya Upanishad
Each statement reveals non-duality from different perspectives.', 
'philosophy', 'advanced', 'en', '["Aitareya Upanishad", "Brihadaranyaka Upanishad", "Chandogya Upanishad", "Mandukya Upanishad"]'),

('What is the difference between Jnana, Bhakti, Karma, and Raja Yoga?', 
'These are four major paths to self-realization, suited to different temperaments:
- Jnana Yoga: Path of knowledge and discrimination, using inquiry (vichara) to realize the Self. Suited for intellectual seekers.
- Bhakti Yoga: Path of devotion, surrendering to God through love, worship, and service. Suited for emotional natures.
- Karma Yoga: Path of selfless action, performing duty without attachment to results. Suited for active temperaments.
- Raja Yoga: Path of meditation and mental discipline through the eight limbs of Patanjali. Suited for introspective minds.
The Bhagavad Gita synthesizes all four, teaching that they are complementary, not exclusive.', 
'philosophy', 'intermediate', 'en', '["Bhagavad Gita", "Yoga Sutras", "Vivekachudamani"]'),

('What is Maya according to Advaita Vedanta?', 
'Maya is the cosmic illusion that makes the One appear as many, Brahman appear as the world. It is neither real (sat) nor unreal (asat), but mithya - appearing real but having no ultimate substance. Maya has two powers: Avarana (veiling Brahman''s true nature) and Vikshepa (projecting the world illusion). Like a rope appearing as snake in dim light, Maya causes us to see multiplicity where only Brahman exists. Knowledge (jnana) alone destroys Maya, revealing the ever-present truth.', 
'philosophy', 'advanced', 'en', '["Vivekachudamani", "Mandukya Karika", "Panchadashi"]'),

('What is Dharma and why is it important?', 
'Dharma is a multifaceted concept meaning cosmic order, righteous conduct, duty, and the essential nature of things. It operates at multiple levels: Rita (cosmic law), Sanatana Dharma (eternal principles), Varnashrama Dharma (social duties), and Svadharma (individual purpose). Dharma maintains balance in the universe and society. The Mahabharata says: "Dharma exists for the welfare of all beings. Therefore, that by which the welfare of all living beings is sustained, that is Dharma." Following dharma leads to both worldly well-being and spiritual liberation.', 
'philosophy', 'intermediate', 'en', '["Mahabharata", "Manu Smriti", "Bhagavad Gita"]'),

('What is the significance of the Trimurtis in Hindu philosophy?', 
'The Trimurti represents the three aspects of the Supreme Reality governing cosmic functions:
- Brahma: Creator, associated with Rajas guna, represents the creative principle
- Vishnu: Preserver, associated with Sattva guna, maintains cosmic order
- Shiva: Transformer/Dissolver, associated with Tamas guna (in its cosmic function), enables renewal
These are not three separate gods but three faces of the one Brahman. Just as water exists as ice, liquid, and vapor, the One Reality manifests these three functions. Some traditions (Shaiva, Vaishnava) see their deity as the source of the other two.', 
'philosophy', 'beginner', 'en', '["Puranas", "Brahma Sutras"]'),

('What are the three gunas and how do they affect us?', 
'The three gunas - Sattva, Rajas, and Tamas - are the fundamental qualities of Prakriti (nature) from which all creation emerges:
- Sattva: Purity, light, knowledge, harmony, peace
- Rajas: Activity, passion, desire, restlessness
- Tamas: Inertia, darkness, ignorance, dullness
Everything in nature, including our minds and bodies, is a combination of these three. Our dominant guna determines our temperament, choices, and spiritual state. Spiritual practice aims to increase Sattva while transcending all three gunas entirely.', 
'philosophy', 'intermediate', 'en', '["Bhagavad Gita Chapter 14", "Samkhya Karika"]'),

('What is the concept of Purushartha - the four aims of life?', 
'The four Purusharthas represent the complete framework for a meaningful human life:
- Dharma: Righteousness and duty - the ethical foundation
- Artha: Material prosperity - legitimate wealth for supporting life
- Kama: Pleasure and desire - enjoyment within dharmic bounds
- Moksha: Liberation - the ultimate spiritual goal
The first three (trivarga) govern worldly life, while Moksha transcends it. A balanced life pursues all four in harmony, with Dharma guiding the pursuit of Artha and Kama, and all three ultimately oriented toward Moksha.', 
'philosophy', 'beginner', 'en', '["Arthashastra", "Manu Smriti", "Vatsyayana Kamasutra"]'),

-- Mantras FAQs (expanding from 2 to 8)
('What is the correct way to do Japa (mantra repetition)?', 
'Japa can be practiced in three ways: Vachika (audible), Upamshu (whispered), and Manasika (mental) - with mental japa considered most powerful. Use a mala of 108 beads, counting with the ring finger and thumb (not index finger, which represents ego). Always start and end at the Meru bead without crossing it - reverse direction instead. Maintain a steady rhythm, coordinate with breath if possible, and focus on the meaning and deity. Face east or north, sit on a wool/kusha mat, and practice at fixed times.', 
'mantras', 'beginner', 'en', '["Mantra Yoga texts", "Japa Yoga by Swami Sivananda"]'),

('Why are some mantras kept secret and require initiation?', 
'Certain mantras, especially bija (seed) mantras and tantric mantras, contain concentrated spiritual energy that can be powerful when properly awakened but potentially harmful without proper preparation. Initiation (diksha) from a qualified guru ensures: 1) The practitioner is spiritually ready, 2) The mantra is energized through the guru''s transmission, 3) Proper pronunciation and methodology is taught, 4) Guidance is available for any experiences that arise. Without initiation, such mantras remain "sleeping" or may create disturbances.', 
'mantras', 'intermediate', 'en', '["Tantric traditions", "Kularnava Tantra"]'),

('What are Bija Mantras and their significance?', 
'Bija (seed) mantras are single-syllable sounds containing concentrated cosmic energy. They are the sound-essence of deities and elements:
- ॐ (Om): Primordial sound, essence of Brahman
- ह्रीं (Hreem): Mahamaya, Shakti energy
- श्रीं (Shreem): Lakshmi, prosperity
- क्लीं (Kleem): Kama, attraction
- ऐं (Aim): Saraswati, wisdom
- हं (Ham): Shiva, space element
These sounds work on subtle energy bodies and chakras without requiring intellectual understanding. They are seeds that, when planted through repetition, grow into full spiritual experiences.', 
'mantras', 'intermediate', 'en', '["Mantra Shastra", "Tantra texts"]'),

('How many times should a mantra be repeated?', 
'Traditional repetition counts are based on cosmic numbers:
- 108: Most common, representing the universe (12 zodiac × 9 planets)
- 1,008: Ten times 108, for deeper practice
- 100,000 (One Lakh): For Purascharana (complete mantra practice cycle)
- 125,000: One lakh plus 25% for errors
Daily japa is typically 108 or 1,008 repetitions. For specific results or mantra siddhi (mastery), texts prescribe lakhs of repetitions: typically 100,000 times the number of syllables in the mantra. Quality matters more than quantity - one fully conscious repetition exceeds thousands of mechanical ones.', 
'mantras', 'beginner', 'en', '["Mantra Mahodadhi", "Tantra texts"]'),

('What is the difference between Vaidika and Tantrika mantras?', 
'Vaidika mantras originate from the Vedas, require proper Sanskrit pronunciation, and follow strict ritual rules. They are generally sattvic and used in yajnas and formal worship. Examples: Gayatri Mantra, Vedic suktas.
Tantrika mantras come from Agama and Tantra traditions, often combine bija sounds, and work directly with subtle energy. They can be rajasic or tamasic depending on the deity and purpose. They often require initiation and are more adaptable to personal practice. Examples: Shakti mantras, Navarna mantra.
Both are valid paths; Vedic is more orthodox, Tantric more experiential.', 
'mantras', 'advanced', 'en', '["Vedas", "Agama Shastra", "Tantra traditions"]'),

('Can women chant all mantras?', 
'Yes, women can and should chant mantras. Some conservative interpretations restricted women from certain Vedic mantras, but this is not universally accepted and many lineages encourage women''s practice. Great women saints like Gargi, Maitreyi, and Andal were renowned for their mantra sadhana. The Shakta tradition especially empowers women practitioners. Certain mantras like Gayatri, once restricted, are now taught to women by many gurus. Bhakti and Tantric traditions never had such restrictions. Divine grace is not gender-biased.', 
'mantras', 'beginner', 'en', '["Shakta traditions", "Bhakti movement", "Modern interpretations"]'),

-- Practices FAQs (expanding from 5 to 12)
('What is the significance of fasting (Upavasa) in spiritual practice?', 
'Upavasa literally means "dwelling near (God)" - it is not merely about food restriction but about turning attention inward. Benefits include: purifying body and mind, developing willpower, sublimating desire energy for spiritual growth, creating space for contemplation, and expressing devotion. Different fasts serve different purposes: Ekadashi fasts honor Vishnu, Pradosha fasts honor Shiva, Navratri fasts invoke Shakti. Complete fasting (nirjala) is most austere, while fruit/milk fasts are common. The mind becomes subtle when the body is light.', 
'practices', 'beginner', 'en', '["Dharma Shastras", "Vrata traditions"]'),

('What is Guru Tattva and why is a Guru important?', 
'Guru Tattva is the principle of divine grace operating through an awakened teacher to ignite spiritual awakening in the disciple. The word Guru means "dispeller of darkness" (gu=darkness, ru=light). A true Guru is not merely a teacher but a transmitter of spiritual energy, a living example of realization, and a mirror reflecting the disciple''s true Self. The Guru-disciple relationship accelerates spiritual progress by years or lifetimes. Kabir says: "Guru and God both stand before me, whom to bow first? The Guru, for he showed me God."', 
'practices', 'intermediate', 'en', '["Guru Gita", "Kabir Dohe", "Upanishads"]'),

('How should one start a daily spiritual practice (Sadhana)?', 
'Begin with small, sustainable commitments: 1) Wake early, even 15 minutes before usual. 2) Set a fixed time and place for practice. 3) Start with 5-10 minutes of meditation/japa. 4) Read a few verses from scripture. 5) Practice one or two pranayama rounds. 6) End with a short prayer or sankalpa. Consistency matters more than duration - even 10 minutes daily is better than 2 hours occasionally. Gradually expand as practice stabilizes. Keep a sadhana diary. Find a community or teacher for support and accountability.', 
'practices', 'beginner', 'en', '["Practical guidance from various traditions"]'),

('What is Seva (selfless service) and its spiritual value?', 
'Seva is karma yoga in action - serving others as service to the Divine present in all beings. It purifies the ego, develops humility, generates positive karma, and breaks attachment to personal desires. The Bhagavad Gita teaches that work performed without selfish motive becomes worship. All traditions emphasize seva: feeding the hungry, serving saints, helping the sick, maintaining temples. Swami Vivekananda said service to humanity is service to God. The highest seva is sharing spiritual knowledge.', 
'practices', 'beginner', 'en', '["Bhagavad Gita Chapter 3", "Narada Bhakti Sutras"]'),

('What are the Yamas and Niyamas in Yoga practice?', 
'The Yamas (restraints) and Niyamas (observances) form the ethical foundation of Raja Yoga:
YAMAS: 
1. Ahimsa - Non-violence
2. Satya - Truthfulness
3. Asteya - Non-stealing
4. Brahmacharya - Continence
5. Aparigraha - Non-possessiveness
NIYAMAS:
1. Saucha - Purity
2. Santosha - Contentment
3. Tapas - Austerity
4. Svadhyaya - Self-study
5. Ishvara Pranidhana - Surrender to God
Without these foundations, higher yoga practices become unstable. They create the ethical container for spiritual energy.', 
'practices', 'intermediate', 'en', '["Yoga Sutras 2.30-45"]'),

('What is the role of Pranayama in spiritual development?', 
'Pranayama (breath control) regulates prana, the vital life force that animates body and mind. Physically, it oxygenates blood, balances the nervous system, and energizes cells. Subtly, it purifies nadis (energy channels), awakens dormant energy, and prepares for meditation. Key techniques: Nadi Shodhana (alternate nostril) balances ida-pingala; Kapalabhati cleanses and energizes; Bhastrika generates heat and vitality; Ujjayi calms the mind. The Hatha Yoga Pradipika states: "When the breath wanders, the mind is unsteady; when the breath is still, the mind is still."', 
'practices', 'intermediate', 'en', '["Hatha Yoga Pradipika", "Yoga Sutras 2.49-53"]'),

('What are the different types of Diksha (spiritual initiation)?', 
'Diksha transmits spiritual energy and authority from Guru to disciple. Major types include:
- Mantra Diksha: Initiation into a sacred mantra
- Shaktipat Diksha: Direct transmission of spiritual energy awakening Kundalini
- Sparsha Diksha: Initiation through touch
- Drishti Diksha: Initiation through glance
- Sankalpa Diksha: Initiation through will/intention
- Nama Diksha: Giving of a spiritual name
The initiation creates a permanent spiritual connection with the Guru lineage. Traditional diksha involves fire ceremony (yajna), but essence is the transmission of grace.', 
'practices', 'advanced', 'en', '["Tantric traditions", "Guru-disciple traditions"]'),

-- Festivals FAQs (expanding from 1 to 6)
('What is the spiritual significance of Diwali?', 
'Diwali, the festival of lights, commemorates multiple divine events: Rama''s return to Ayodhya after 14 years of exile, the victory of light over darkness, and Lakshmi''s emergence from the churning of the cosmic ocean. Spiritually, it represents the victory of knowledge over ignorance, good over evil, hope over despair. Lighting lamps signifies illuminating inner consciousness. Lakshmi puja invokes prosperity and auspiciousness. Cleaning homes removes negative energy. New clothes symbolize spiritual renewal. It falls on Amavasya (new moon) when external light counterbalances cosmic darkness.', 
'festivals', 'beginner', 'en', '["Ramayana", "Vishnu Purana", "Festival traditions"]'),

('Why is Navratri celebrated for nine nights?', 
'Navratri honors the Divine Mother in her nine primary forms (Navadurga), representing the journey from darkness to enlightenment. Each night corresponds to one form:
Days 1-3: Shailaputri, Brahmacharini, Chandraghanta - Durga aspect (Tamas destroyer)
Days 4-6: Kushmanda, Skandamata, Katyayani - Lakshmi aspect (Rajas)
Days 7-9: Kaalratri, Mahagauri, Siddhidatri - Saraswati aspect (Sattva)
The progression mirrors spiritual evolution from destroying darkness through passionate devotion to pure wisdom. Fasting purifies, garba/dandiya celebrate creation, and Vijayadashami marks the victory of divine forces.', 
'festivals', 'intermediate', 'en', '["Devi Mahatmyam", "Durga Saptashati"]'),

('What is the significance of Maha Shivaratri?', 
'Maha Shivaratri, the great night of Shiva, commemorates multiple sacred events: the cosmic marriage of Shiva and Parvati, the manifestation of the Jyotirlinga, and Shiva''s Tandava dance. It is the night when Shiva energy is most accessible on Earth. Devotees fast, stay awake all night (jagaran), chant Om Namah Shivaya, and offer bel leaves, milk, and water to Shiva lingam. The darkest night before new moon symbolizes the destruction of ignorance. It is especially powerful for meditation as cosmic energies support spiritual awakening.', 
'festivals', 'beginner', 'en', '["Shiva Purana", "Linga Purana"]'),

('Why do we immerse idols after Ganesh Chaturthi and Durga Puja?', 
'Visarjan (immersion) carries profound symbolism. After inviting the deity''s presence into the murti through Prana Pratishtha, we worship them for specified days. Immersion symbolizes: 1) The impermanence of form - even gods return to formlessness, 2) The cycle of creation and dissolution, 3) Return to the source - the deity returns to cosmic consciousness, 4) Non-attachment - we cannot hold onto even the divine. The water element represents the cosmic womb. Emotionally, bidding farewell creates longing (viraha) that deepens devotion for next year.', 
'festivals', 'beginner', 'en', '["Puja traditions", "Hindu symbolic understanding"]'),

('What is the significance of Guru Purnima?', 
'Guru Purnima, on the full moon of Ashadha month, honors the Guru principle and all spiritual teachers. It commemorates Vyasa, the sage who compiled the Vedas, authored Mahabharata, and organized Puranas - hence also called Vyasa Purnima. On this day, disciples express gratitude to their Guru, receive blessings, and renew their commitment to sadhana. It marks the beginning of Chaturmas, the four-month rainy retreat for intense study. The full moon symbolizes the Guru''s fully illuminated consciousness reflecting divine light to disciples.', 
'festivals', 'beginner', 'en', '["Guru Gita", "Vyasa traditions"]');
