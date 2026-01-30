
-- Migration: Add Comprehensive 2026 Calendar Events - Ekadashis, Amavasyas, Purnimas, and Regional Festivals

INSERT INTO calendar_events (title, date, event_type, description, significance, duration_hours, rituals, regional_significance) VALUES

-- All 2026 Ekadashis (24 total throughout the year)
('Pausha Putrada Ekadashi', '2026-01-05', 'ekadashi', 'First Ekadashi of 2026 during Pausha month (Shukla Paksha). Devotees fast and worship Lord Vishnu for the blessing of worthy sons.', 'Grants the boon of virtuous progeny, removes sins, and pleases Vishnu. Special observance for those desiring children.', 24, '["Complete fast or nirjala fast", "Vishnu puja", "Reading of Putrada Ekadashi Vrat Katha", "Night vigil (jagaran)", "Tulsi puja"]', '["All-India observance", "Special in North India"]'),

('Shattila Ekadashi', '2026-01-20', 'ekadashi', 'Ekadashi during Krishna Paksha of Magha month. "Shat-tila" means six uses of sesame (til) in the vrat.', 'Sesame seeds are used in six ways: eating, bathing, offering, homa, tarpan, and applying. Removes all sins.', 24, '["Sesame seed offering", "Til donation", "Vishnu worship", "Fasting", "Sesame bath"]', '["All-India"]'),

('Jaya Ekadashi', '2026-02-04', 'ekadashi', 'Ekadashi during Magha Shukla Paksha. Named "Jaya" (Victory) as it grants victory over all obstacles and enemies.', 'This auspicious Ekadashi destroys all sins and grants liberation. Even hearing its katha is meritorious.', 24, '["Strict fasting", "Vishnu puja", "Jaya Ekadashi Katha", "All-night vigil"]', '["All-India"]'),

('Vijaya Ekadashi', '2026-02-18', 'ekadashi', 'Ekadashi during Phalguna Krishna Paksha. Lord Rama observed this Ekadashi before leaving for Lanka to rescue Sita.', 'Grants victory in all endeavors. Lord Rama worshipped this Ekadashi for success in battle against Ravana.', 24, '["Rama-focused worship", "Victory prayers", "Fasting", "Reading Vijaya Ekadashi Katha"]', '["All-India", "Ramayana pilgrimage sites"]'),

('Amalaki Ekadashi', '2026-03-06', 'ekadashi', 'Ekadashi during Phalguna Shukla Paksha. Amalaki (Amla/Indian Gooseberry) tree is worshipped as it contains all deities.', 'Worshipping Amalaki tree on this day grants the merit of donating 1000 cows. The tree is considered a form of Vishnu.', 24, '["Amalaki tree worship", "Circumambulation of Amla tree", "Fasting", "Vishnu puja at tree base"]', '["All-India", "Special in Uttar Pradesh"]'),

('Papmochani Ekadashi', '2026-03-20', 'ekadashi', 'Ekadashi during Chaitra Krishna Paksha. "Papmochani" means liberator from all sins.', 'This powerful Ekadashi destroys even the most severe sins. It is said even Brahmahatya (killing of Brahmin) is absolved.', 24, '["Strict fasting", "Confession of sins", "Vishnu worship", "Charity"]', '["All-India"]'),

('Kamada Ekadashi', '2026-04-05', 'ekadashi', 'Ekadashi during Chaitra Shukla Paksha. "Kamada" means fulfiller of desires.', 'Fulfills all material and spiritual desires. A couple who observed this Ekadashi was freed from a terrible curse.', 24, '["Desire-focused prayers", "Vishnu puja", "Fasting", "Reading Kamada Ekadashi Katha"]', '["All-India"]'),

('Varuthini Ekadashi', '2026-04-19', 'ekadashi', 'Ekadashi during Vaishakha Krishna Paksha. One of the most powerful Ekadashis for sin destruction.', 'More meritorious than all pilgrimages, donations, and yajnas combined. Grants liberation from rebirth.', 24, '["Complete fast", "Night vigil", "Vishnu worship", "Charitable acts"]', '["All-India"]'),

('Mohini Ekadashi', '2026-05-04', 'ekadashi', 'Ekadashi during Vaishakha Shukla Paksha. Named after Vishnu''s Mohini avatar who enchanted the demons.', 'Destroys the great sin of speaking ill of Vedas. Vishnu takes special care of devotees observing this Ekadashi.', 24, '["Vishnu worship", "Mohini form meditation", "Fasting", "Katha reading"]', '["All-India", "Vaishnavite centers"]'),

('Apara Ekadashi', '2026-05-19', 'ekadashi', 'Ekadashi during Jyeshtha Krishna Paksha. "Apara" means unlimited - grants unlimited spiritual benefits.', 'Equivalent to giving massive charity, performing Rajsuya yajna, and bathing in all holy rivers.', 24, '["Fasting", "Vishnu puja", "Unlimited charity", "Night vigil"]', '["All-India"]'),

('Nirjala Ekadashi', '2026-06-02', 'ekadashi', 'The most powerful Ekadashi during Jyeshtha Shukla Paksha. Complete water fast (nirjala) for 24+ hours.', 'Bhima observed this single Ekadashi with great austerity and earned the merit of all 24 Ekadashis. Also called Bhimseni or Pandava Ekadashi.', 36, '["Complete waterless fast", "Arghya to Sun", "Vishnu puja", "Breaking fast next morning after sunrise"]', '["All-India", "Most austere fast"]'),

('Yogini Ekadashi', '2026-06-17', 'ekadashi', 'Ekadashi during Ashadha Krishna Paksha. Named after the Yoginis (divine feminine powers).', 'Destroys the sins of many lifetimes. Even the sin of killing a Brahmin is absolved.', 24, '["Fasting", "Devi worship alongside Vishnu", "Night vigil", "Yogini Ekadashi Katha"]', '["All-India"]'),

('Devshayani Ekadashi', '2026-07-02', 'ekadashi', 'Ekadashi marking Vishnu''s four-month cosmic sleep (Chaturmas begins). Also called Ashadhi Ekadashi.', 'Lord Vishnu goes to sleep on Shesha Naga in the cosmic ocean. No auspicious activities for 4 months. Major pilgrimage to Pandharpur.', 24, '["Vishnu puja", "Beginning of Chaturmas vows", "Pandharpur yatra", "Sleep ritual for Vishnu"]', '["Maharashtra (Pandharpur)", "All-India"]'),

('Kamika Ekadashi', '2026-07-17', 'ekadashi', 'First Ekadashi during Chaturmas, in Shravana Krishna Paksha.', 'Even greater merit during Chaturmas. Tulsi plant worship is especially auspicious on this day.', 24, '["Tulsi puja", "Fasting", "Vishnu worship", "Reading Kamika Ekadashi Katha"]', '["All-India"]'),

('Shravana Putrada Ekadashi', '2026-08-01', 'ekadashi', 'Ekadashi in Shravana Shukla Paksha. Second Putrada Ekadashi of the year.', 'Grants the blessing of worthy sons. Observed by couples desiring children, especially sons to continue lineage.', 24, '["Prayers for progeny", "Vishnu puja", "Fasting", "Charity to Brahmins"]', '["All-India", "North India special"]'),

('Aja Ekadashi', '2026-08-15', 'ekadashi', 'Ekadashi in Bhadrapada Krishna Paksha. "Aja" means unborn, referring to the eternal Vishnu.', 'King Harishchandra regained his lost kingdom and family by observing this Ekadashi. Extremely powerful for reversing misfortune.', 24, '["Vishnu worship", "Fasting", "Aja Ekadashi Katha", "Prayers for restoration"]', '["All-India"]'),

('Parsva Ekadashi', '2026-08-30', 'ekadashi', 'Ekadashi in Bhadrapada Shukla Paksha. Also called Parivartini Ekadashi as Vishnu changes sides in sleep.', 'Vishnu turns to his left side in cosmic sleep. This Ekadashi in Chaturmas is highly auspicious.', 24, '["Vishnu puja", "Fasting", "Special offering as Vishnu changes position", "Night vigil"]', '["All-India"]'),

('Indira Ekadashi', '2026-09-14', 'ekadashi', 'Ekadashi in Ashwin Krishna Paksha. Named after King Indrasena who observed it.', 'Liberates deceased ancestors from lower realms. Especially beneficial for ancestor worship during Pitru Paksha period.', 24, '["Pitru tarpan", "Ancestor prayers", "Fasting", "Vishnu puja", "Indira Ekadashi Katha"]', '["All-India", "During Pitru Paksha"]'),

('Papankusha Ekadashi', '2026-09-29', 'ekadashi', 'Ekadashi in Ashwin Shukla Paksha. "Papankusha" means the hook that pulls out sins.', 'Destroys all sins like a hook removing thorns. Observing this Ekadashi with devotion grants liberation.', 24, '["Fasting", "Vishnu worship", "Confession and repentance", "Charity"]', '["All-India"]'),

('Rama Ekadashi', '2026-10-13', 'ekadashi', 'Ekadashi in Kartik Krishna Paksha. Named after goddess Rama (Lakshmi).', 'Extremely auspicious as it falls in Kartik month. Grants prosperity, peace, and spiritual advancement.', 24, '["Vishnu-Lakshmi puja", "Fasting", "Kartik deepdan", "Night vigil"]', '["All-India", "Kartik month special"]'),

('Devutthana Ekadashi', '2026-10-29', 'ekadashi', 'Ekadashi marking Vishnu''s awakening from four-month sleep (Chaturmas ends). Also called Prabodhini Ekadashi.', 'Lord Vishnu awakens. Auspicious activities resume. Tulsi Vivah performed. Marriage season begins.', 24, '["Vishnu jagran ritual", "Tulsi Vivah", "End of Chaturmas vows", "Beginning marriage season"]', '["All-India", "Major celebration"]'),

('Utpanna Ekadashi', '2026-11-12', 'ekadashi', 'Ekadashi in Margashirsha Krishna Paksha. The origin story of Ekadashi herself is told.', 'Ekadashi Devi was born from Vishnu to defeat the demon Mura. First Ekadashi vrat of spiritual year.', 24, '["Ekadashi Devi worship", "Fasting", "Reading Ekadashi origin story", "Night vigil"]', '["All-India"]'),

('Mokshada Ekadashi', '2026-11-27', 'ekadashi', 'Ekadashi in Margashirsha Shukla Paksha. "Mokshada" means granter of liberation.', 'This is the day Krishna spoke the Bhagavad Gita to Arjuna. Also celebrated as Gita Jayanti.', 24, '["Bhagavad Gita recitation", "Krishna puja", "Fasting", "Gita Jayanti celebration"]', '["All-India", "Kurukshetra special"]'),

('Saphala Ekadashi', '2026-12-12', 'ekadashi', 'Ekadashi in Pausha Krishna Paksha. "Saphala" means fruitful, granting success.', 'Grants success in all endeavors. Story of the reformed prince Lumpaka who gained heaven through this Ekadashi.', 24, '["Fasting", "Vishnu puja", "Prayers for success", "Coconut offering"]', '["All-India"]'),

-- 2026 Amavasyas (12 - one each month)
('Mauni Amavasya', '2026-01-13', 'amavasya', 'New moon in Magha month. Day of silence (maun) and holy bath at Sangam.', 'Kumbh Mela bathing date. Observing silence and taking holy dip grants immense spiritual merit.', 12, '["Ganga snan", "Silent observance", "Pitru tarpan", "Charity"]', '["Prayagraj", "All holy rivers"]'),

('Magha Amavasya', '2026-02-12', 'amavasya', 'New moon of Magha month. Highly auspicious for ancestor worship and charity.', 'Performing shraddha on this day liberates seven generations of ancestors.', 12, '["Pitru tarpan", "Shraddha ritual", "Holy bath", "Dana to Brahmins"]', '["All-India"]'),

('Phalguna Amavasya', '2026-03-14', 'amavasya', 'New moon before Holi festival. Day of ancestor remembrance before spring celebration.', 'Last new moon before spring. Ancestors are honored before the celebration of Holi.', 12, '["Pitru tarpan", "Pre-Holi rituals", "Holy bath"]', '["All-India"]'),

('Chaitra Amavasya', '2026-04-13', 'amavasya', 'New moon of Chaitra month. Important for ancestor worship as spring begins.', 'Beginning of Hindu new year month. Ancestors are propitiated for blessings in the new year.', 12, '["New year ancestor rituals", "Tarpan", "Temple visits"]', '["All-India"]'),

('Vaishakha Amavasya', '2026-05-12', 'amavasya', 'New moon of Vaishakha month. Extremely sacred for ancestor worship.', 'One of the most important amavasyas. Bathing in Ganga and giving charity is highly meritorious.', 12, '["Ganga snan", "Pitru tarpan", "Dana", "Mantra japa"]', '["All-India", "Varanasi special"]'),

('Jyeshtha Amavasya', '2026-06-11', 'amavasya', 'New moon of Jyeshtha month. Important for Shani puja as Saturn influence peaks.', 'Saturn worship is particularly effective. Black sesame and oil offered to reduce Saturn afflictions.', 12, '["Shani puja", "Black sesame offering", "Pitru tarpan", "Oil donation"]', '["All-India"]'),

('Ashadha Amavasya', '2026-07-10', 'amavasya', 'New moon of Ashadha month. Marks the dark before Guru Purnima.', 'Preparatory darkness before the full moon of the Guru. Inner reflection emphasized.', 12, '["Meditation", "Guru remembrance", "Pitru tarpan"]', '["All-India"]'),

('Shravana Amavasya', '2026-08-08', 'amavasya', 'New moon of Shravana month. Hariyali Amavasya in some regions.', 'Greenery amavasya celebrated with planting and nature worship alongside ancestor rituals.', 12, '["Tree planting", "Nature worship", "Pitru tarpan", "Green offerings"]', '["North India"]'),

('Bhadrapada Amavasya', '2026-09-07', 'amavasya', 'New moon of Bhadrapada month. Just before Pitru Paksha begins.', 'Important preparation for the fortnight of ancestor worship that follows.', 12, '["Pre-Pitru Paksha rituals", "Ancestor remembrance", "Preparation for shraddha"]', '["All-India"]'),

('Sarva Pitru Amavasya', '2026-09-21', 'amavasya', 'The most important Amavasya - end of Pitru Paksha. Mahalaya Amavasya.', 'If you can only perform shraddha once a year, this is the day. All ancestors of all categories honored.', 24, '["Shraddha for all ancestors", "Pind daan", "Tarpan", "Brahmin bhojan", "Major charity"]', '["All-India", "Gaya special"]'),

('Kartik Amavasya', '2026-10-21', 'amavasya', 'New moon of Kartik month. Diwali festival night.', 'Lakshmi puja night. The darkest night lit with countless lamps. Most auspicious for prosperity prayers.', 24, '["Lakshmi puja", "Deep lighting", "Gambling (ritualistic)", "Rangoli", "Fireworks"]', '["All-India - Diwali"]'),

('Margashirsha Amavasya', '2026-11-20', 'amavasya', 'New moon of Margashirsha month. Sacred month mentioned in Bhagavad Gita.', 'Krishna said "Among months I am Margashirsha." Amavasya of this month is especially sacred.', 12, '["Vishnu worship", "Pitru tarpan", "Gita recitation"]', '["All-India"]'),

-- 2026 Purnimas (12 - one each month)
('Pausha Purnima', '2026-01-27', 'purnima', 'Full moon of Pausha month. Shakambhari Purnima - worship of the goddess of vegetation.', 'Goddess Shakambhari who nourishes with vegetables and grains is worshipped. Holy bath is auspicious.', 12, '["Devi puja", "Vegetable offerings", "Holy bath", "Charity"]', '["Bengal", "Eastern India"]'),

('Magha Purnima', '2026-02-26', 'purnima', 'Full moon of Magha month. One of the most sacred Purnimas for holy bathing.', 'Bathing at Prayagraj Sangam is equivalent to performing 100 Ashwamedha yajnas. Major Kumbh bathing date.', 24, '["Sangam snan", "Pitru tarpan", "Deep daan", "Charity"]', '["Prayagraj", "All Sangams"]'),

('Phalguna Purnima - Holi', '2026-03-28', 'purnima', 'Full moon of Phalguna month. Holika Dahan night before color festival.', 'Celebrates victory of devotee Prahlad over demoness Holika. Good triumphs over evil. Spring celebration.', 24, '["Holika dahan", "Prahlad-Holika legend", "Community bonfires", "Color play next day"]', '["All-India - Major festival"]'),

('Hanuman Jayanti', '2026-04-27', 'purnima', 'Full moon of Chaitra month. Birth anniversary of Lord Hanuman.', 'Celebration of the great devotee of Rama. Hanuman temples see massive gatherings. Sunderkand recitation.', 24, '["Hanuman puja", "Sunderkand path", "Temple visits", "Til-gud offering", "Aarti"]', '["All-India", "Hanuman temples"]'),

('Buddha Purnima', '2026-05-26', 'purnima', 'Full moon of Vaishakha month. Buddha''s birth, enlightenment, and Mahaparinirvana.', 'Triple-blessed full moon. Also called Vaishakha Purnima. Sacred for Buddhists and Hindus alike.', 24, '["Buddha temple visits", "Meditation", "Vegetarian vows", "Holy bath", "Charity"]', '["Buddhist sites", "All-India"]'),

('Vat Savitri Purnima', '2026-06-24', 'purnima', 'Full moon of Jyeshtha month. Married women fast for husbands'' longevity.', 'Savitri defeated Yama and brought back her husband. Women worship Banyan tree and pray for marital bliss.', 24, '["Vat (Banyan) tree worship", "Married women fast", "Savitri-Satyavan katha", "Thread tying"]', '["North India", "Maharashtra"]'),

('Guru Purnima', '2026-07-24', 'purnima', 'Full moon of Ashadha month. Day honoring the Guru principle and Vyasa.', 'Vyasa Purnima - birth of the compiler of Vedas. Disciples honor their spiritual teachers. Chaturmas begins for wandering monks.', 24, '["Guru puja", "Pada puja", "Gurudakshina", "Satsang", "Vyasa puja"]', '["All-India - Major observance"]'),

('Raksha Bandhan', '2026-08-22', 'purnima', 'Full moon of Shravana month. Festival of brother-sister bond.', 'Sisters tie protective thread on brothers'' wrists, receiving protection and gifts in return. Ancient tradition of Rakhi.', 12, '["Rakhi tying ceremony", "Brother-sister rituals", "Sweet distribution", "Gifts exchange"]', '["All-India - Major festival"]'),

('Bhadrapada Purnima', '2026-09-20', 'purnima', 'Full moon of Bhadrapada month. End of Pitru Paksha.', 'Concludes the fortnight of ancestors. Major offerings and shraddha completion.', 12, '["Final Pitru Paksha rituals", "Mass shraddha", "River offerings"]', '["All-India"]'),

('Sharad Purnima', '2026-10-20', 'purnima', 'Full moon of Ashwin month. Most beautiful and sacred full moon.', 'Krishna performed Raas Leela on this night. Moon rays are considered to have healing nectar. Kheer is placed under moonlight.', 24, '["Moonlight kheer", "Krishna puja", "Raas Leela celebration", "Night vigil under moon"]', '["Vrindavan", "All-India"]'),

('Kartik Purnima', '2026-11-19', 'purnima', 'Full moon of Kartik month. Dev Diwali - Diwali of the gods.', 'When gods celebrate their Diwali. Ganga snan highly meritorious. Varanasi ghats lit with lamps.', 24, '["Ganga snan", "Deep daan", "Dev Diwali celebration", "Ghat lighting"]', '["Varanasi", "All river ghats"]'),

('Margashirsha Purnima', '2026-12-19', 'purnima', 'Full moon of Margashirsha month. Dattatreya Jayanti.', 'Birth anniversary of Lord Dattatreya, the combined form of Brahma, Vishnu, and Shiva.', 24, '["Dattatreya puja", "Guru worship", "Paduka puja", "Satsang"]', '["Maharashtra", "Karnataka", "All-India"]');
