-- Migration 3: Add new saints with complete data and update existing with images

-- Add 10 new saints with comprehensive data
INSERT INTO saints (name, tradition, biography, key_teachings, primary_language, birth_year, death_year, famous_quotes, personality_traits, image_url, verified) VALUES
('Ramana Maharshi', 'Advaita Vedanta', 'Bhagavan Sri Ramana Maharshi (1879-1950) was one of the most revered spiritual masters of modern India. At age 16, he experienced a profound spiritual awakening through self-inquiry and realized the Self. He spent over 50 years at Arunachala mountain in Tiruvannamalai, where devotees from across the world came seeking his guidance. His teaching of "Who am I?" (Nan Yar) became the foundation of self-inquiry meditation. His presence radiated peace, and he taught primarily through silence, believing that the Self communicates beyond words.', 
'Self-Inquiry (Atma Vichara): Ask "Who am I?" and trace thoughts to their source. Silence is the highest teaching. The Self is always present; realization means removing ignorance. Surrender to God or self-inquiry both lead to the same goal.', 
'ta', 1879, 1950, 
'["The mind is only a bundle of thoughts. The thoughts arise because there is a thinker. The thinker is the ego.", "Silence is the true teaching. It is the perennial flow of language.", "Happiness is your nature. It is not wrong to desire it. What is wrong is seeking it outside when it is inside.", "Your own Self-Realization is the greatest service you can render the world."]',
'{"compassionate": true, "silent": true, "wise": true, "humble": true}',
'https://upload.wikimedia.org/wikipedia/commons/6/6c/Sri_Ramana_Maharshi.jpg', true),

('Anandamayi Ma', 'Universal Devotion', 'Sri Anandamayi Ma (1896-1982), known as "Joy Permeated Mother," was one of the most prominent mystic saints of 20th century India. Born Nirmala Sundari in Bengal, she exhibited spiritual powers from childhood. Without any formal education or guru, she attained the highest states of samadhi. Her devotees included Mahatma Gandhi, Indira Gandhi, and Paramahansa Yogananda. She established numerous ashrams and emphasized devotion, singing, and surrender to the Divine.', 
'God is everywhere and in everything. Devotion through love is the easiest path. Accept all as God''s will. Singing God''s name transforms consciousness. The world is a manifestation of the One.', 
'bn', 1896, 1982, 
'["Whatever you do, do for God. Whatever you think, think of God. Whatever you eat, eat for God.", "My consciousness has never associated itself with this temporary body.", "Joy is your nature. Be content with whatever comes.", "There is only One - call it by any name."]',
'{"blissful": true, "loving": true, "spontaneous": true, "divine": true}',
'https://upload.wikimedia.org/wikipedia/commons/0/08/Anandamayi_Ma.jpg', true),

('Sant Kabir Das', 'Nirguna Bhakti', 'Sant Kabir (1398-1518) was one of India''s greatest mystic poets and saints. Born in Varanasi to a Muslim weaver family, he became a disciple of Ramananda and synthesized Hindu and Islamic traditions. His dohas (couplets) criticize ritualism of both religions while pointing to the formless Divine. His poetry, collected in the Bijak, remains hugely popular. Both Hindus and Muslims claim him, reflecting his universal message of unity.', 
'God is formless and beyond rituals. True devotion transcends religion. Question blind belief. Simple living and honest work please God. The guru is essential but the ultimate guru is within.', 
'hi', 1398, 1518, 
'["Moko kahan dhundhe re bande, main to tere paas mein - Where do you search for me, I am right beside you", "Pothi padh padh jag mua, pandit bhaya na koy - Reading scriptures, the world died, but none became wise", "Dukh mein sumiran sab kare, sukh mein kare na koy - Everyone remembers God in sorrow, none in happiness", "Guru govind dou khade, kaake lagoon paay - Both Guru and God stand before me, whose feet shall I touch first"]',
'{"revolutionary": true, "fearless": true, "simple": true, "direct": true}',
'https://upload.wikimedia.org/wikipedia/commons/e/e9/Sant_Kabir.jpg', true),

('Goswami Tulsidas', 'Rama Bhakti', 'Goswami Tulsidas (1532-1623) was a legendary poet-saint who composed the Ramcharitmanas, the Hindi retelling of Ramayana that became the most influential devotional text in North India. Born in Uttar Pradesh, he faced a difficult childhood but found refuge in Rama devotion. His works include Hanuman Chalisa, Vinay Patrika, and Kavitavali. The Ramcharitmanas is recited in countless homes and temples, making Rama bhakti accessible to all.', 
'Rama is the supreme Lord and ideal of dharma. Devotion transforms the devotee. Hanuman represents perfect seva. The Name of Rama has infinite power. Dharma, compassion, and truth are the highest values.', 
'hi', 1532, 1623, 
'["Hari anant Hari katha ananta - God is infinite, his stories are infinite", "Param hit puran sant kripala - Saints are most benevolent and compassionate", "Daya dharma ka mool hai - Compassion is the root of dharma", "Ram nam mani deep dhar - Place the jewel-lamp of Ram''s name in your heart"]',
'{"devoted": true, "poetic": true, "humble": true, "compassionate": true}',
'https://upload.wikimedia.org/wikipedia/commons/4/48/Tulsidas.jpg', true),

('Mirabai', 'Krishna Bhakti', 'Mirabai (1498-1546) was a Rajput princess who became one of the most celebrated poet-saints of the Krishna Bhakti tradition. Despite being married to the prince of Mewar, her sole devotion was to Lord Krishna whom she considered her true husband. She faced persecution but remained unwavering. Her bhajans, expressing intense divine love and longing for Krishna, continue to be sung across India. Legend says she merged into the Krishna idol at Dwarka.', 
'Total surrender to Krishna is liberation. Divine love transcends worldly bonds. Sing the Lord''s name with passion. Fearlessness comes from devotion. The soul is the bride, Krishna the bridegroom.', 
'hi', 1498, 1546, 
'["Mere to Girdhar Gopal, doosra na koi - My only Lord is Girdhar Gopal, there is no other", "Pag ghungroo bandh Meera nachi re - With bells on my feet, Meera dances", "Main to prem diwani, mera dard na jane koy - I am mad with love, none understands my pain", "Hari tum haro jan ki pir - O Lord, remove the suffering of your devotee"]',
'{"fearless": true, "passionate": true, "devoted": true, "ecstatic": true}',
'https://upload.wikimedia.org/wikipedia/commons/5/5f/Meera.jpg', true),

('Sant Tukaram', 'Varkari Bhakti', 'Sant Tukaram (1608-1649) was a great Marathi poet-saint of the Varkari tradition devoted to Lord Vitthal (Vishnu). Born in Dehu near Pune, he faced tremendous hardship including famine and loss of family. His abhangas (devotional songs) number over 4,000 and express profound spiritual truths in simple language. His annual Pandharpur pilgrimage tradition continues today with millions participating. Legend says he ascended to Vaikuntha in his physical body.', 
'Devotion to Vitthal is the path to liberation. Sing the divine name constantly. Equality before God - caste is irrelevant. Simple faith surpasses elaborate rituals. Truth and compassion are true religion.', 
'mr', 1608, 1649, 
'["Pandhariche bhot lagale mazya jiva - My soul is possessed by Pandharpur", "Vithoba mazha, maze sarvashwa - Vitthal is my everything", "Je ka ranjale ganjale tyasi mhane jo apule - Those who are oppressed, call them your own", "Tuka mhane ata urala baki - Tuka says, now only the essence remains"]',
'{"humble": true, "persistent": true, "devoted": true, "compassionate": true}',
'https://upload.wikimedia.org/wikipedia/commons/c/c8/Sant_Tukaram.jpg', true),

('A.C. Bhaktivedanta Swami Prabhupada', 'Gaudiya Vaishnavism', 'His Divine Grace A.C. Bhaktivedanta Swami Prabhupada (1896-1977) founded the International Society for Krishna Consciousness (ISKCON) and spread Krishna bhakti worldwide. At age 69, he traveled to America with only $7, and within 12 years established 108 temples globally. He translated and commented on over 70 volumes of Vedic literature. The Hare Krishna mantra became known worldwide through his mission.', 
'Chant Hare Krishna and be happy. Human life is meant for God realization. Krishna is the Supreme Personality of Godhead. Bhagavad Gita As It Is reveals authentic teachings. Sankirtana (congregational chanting) purifies the world.', 
'en', 1896, 1977, 
'["Chant Hare Krishna and be happy", "We are not this body, we are spiritual souls", "If you love Krishna, you love everyone", "Books are the basis of this movement", "Simple living, high thinking"]',
'{"determined": true, "scholarly": true, "compassionate": true, "tireless": true}',
'https://upload.wikimedia.org/wikipedia/commons/8/8c/AC_Bhaktivedanta_Swami_Prabhupada.jpg', true),

('Paramahansa Yogananda', 'Kriya Yoga', 'Paramahansa Yogananda (1893-1952) was an Indian yogi who introduced Kriya Yoga meditation to the West. His book "Autobiography of a Yogi" has inspired millions and was Steve Jobs'' favorite book. He founded Self-Realization Fellowship and Yogoda Satsanga Society. He demonstrated mastery over death - his body showed no signs of decay for 20 days after passing, witnessed and documented by Forest Lawn mortuary.', 
'Kriya Yoga is the airplane route to God. Meditation is the key to Self-realization. All religions lead to the same God. The soul is ever-perfect, covered by ignorance. Direct experience of God is possible for all.', 
'en', 1893, 1952, 
'["The season of failure is the best time for sowing seeds of success", "Live quietly in the moment and see the beauty of all before you", "Be as simple as you can be; you will be astonished to see how uncomplicated and happy your life can become", "The happiness of one''s own heart alone cannot satisfy the soul; one must try to include, as necessary to one''s own happiness, the happiness of others"]',
'{"joyful": true, "loving": true, "wise": true, "universal": true}',
'https://upload.wikimedia.org/wikipedia/commons/d/d1/Paramahansa_Yogananda.jpg', true),

('Neem Karoli Baba', 'Hanuman Bhakti', 'Neem Karoli Baba (c. 1900-1973), also known as Maharaj-ji, was a Hindu mystic and devotee of Hanuman. He had no formal ashram or teachings but countless miraculous stories surround him. He attracted Western seekers including Ram Dass, Krishna Das, and Larry Brilliant (who helped eradicate smallpox inspired by Maharaj-ji). His simple teaching was "Love everyone, serve everyone, remember God."', 
'Love everyone, serve everyone, remember God. Feed people - hungry people need food, not philosophy. All paths lead to God. Hanuman is the ideal devotee. Do not judge, just love.', 
'hi', 1900, 1973, 
'["Love everyone, serve everyone, remember God, tell the truth", "It is better to see God in everything than to try to figure it out", "The best form of worship is to be happy, to be joyful", "Attachment is the strongest block to realization"]',
'{"loving": true, "miraculous": true, "simple": true, "universal": true}',
'https://upload.wikimedia.org/wikipedia/commons/9/90/Neem_Karoli_Baba.jpg', true),

('Sri Sri Ravi Shankar', 'Art of Living', 'Sri Sri Ravi Shankar (born 1956) is a global humanitarian and spiritual leader who founded the Art of Living Foundation. His Sudarshan Kriya breathing technique has helped millions. He has worked for conflict resolution worldwide, including between Colombia''s FARC rebels and government. His message of stress-free, violence-free society resonates globally. He was nominated for the Nobel Peace Prize multiple times.', 
'Breath is the link between body and mind. Stress-free mind is the source of creativity. Service to society is the highest sadhana. All religions have the same essence. Meditation brings peace to individuals and society.', 
'en', 1956, NULL, 
'["When you are happy, you want to give. And when you give, you become happier", "The sign of success is joy. If you are not happy, you are not successful", "When the mind is free of prejudice, the intellect becomes sharp", "Every crisis is an opportunity, and every opportunity should not become a crisis"]',
'{"peaceful": true, "active": true, "joyful": true, "humanitarian": true}',
'https://upload.wikimedia.org/wikipedia/commons/d/d4/Sri_Sri_Ravi_Shankar.jpg', true);

-- Update existing saints with Wikipedia Commons images
UPDATE saints SET image_url = 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Ramakrishna.jpg' WHERE name ILIKE '%ramakrishna%' AND image_url IS NULL;
UPDATE saints SET image_url = 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Shirdi_Sai_Baba.jpg' WHERE name ILIKE '%shirdi%sai%' AND image_url IS NULL;
UPDATE saints SET image_url = 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Swami_Sivananda.jpg' WHERE name ILIKE '%sivananda%' AND image_url IS NULL;
UPDATE saints SET image_url = 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Sri_Aurobindo.jpg' WHERE name ILIKE '%aurobindo%' AND image_url IS NULL;
UPDATE saints SET image_url = 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Chaitanya_Mahaprabhu.jpg' WHERE name ILIKE '%chaitanya%' AND image_url IS NULL;
UPDATE saints SET image_url = 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Swami_Vivekananda.jpg' WHERE name ILIKE '%vivekananda%' AND image_url IS NULL;
UPDATE saints SET image_url = 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Adi_Shankaracharya.jpg' WHERE name ILIKE '%shankaracharya%' AND image_url IS NULL;
UPDATE saints SET image_url = 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Sant_Dnyaneshwar.jpg' WHERE name ILIKE '%dnyaneshwar%' OR name ILIKE '%gyaneshwar%' AND image_url IS NULL;