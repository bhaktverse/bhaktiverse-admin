

# Phase 5: Deep Database Audit & Enhancement Plan

---

## Audit Results Summary

### Critical Issue: Massive Temple Duplicates
The temples table has **44 records but only ~25 unique temples**. Multiple duplicates found:

| Temple | Duplicate Count |
|--------|----------------|
| Badrinath Temple | 3 entries |
| Golden Temple | 3 entries |
| Somnath Temple | 3 entries |
| Vaishno Devi Temple | 3 entries |
| Jagannath Temple | 3 entries |
| Meenakshi Amman Temple | 3 entries |
| Kashi Vishwanath Temple | 2 entries |
| Kedarnath Temple | 2 entries |
| Siddhivinayak Temple | 2 entries |
| Shirdi Sai Baba Temple | 2 entries |
| Padmanabhaswamy Temple | 2 entries |
| Mahakaleshwar Temple | 2 entries |
| Tirumala Temple | 2 entries |

4 temples have descriptions under 100 characters (too thin for SEO).

### Saints: 10 with Short Biographies (<300 chars)
- Lahiri Mahasaya (209 chars)
- Nisargadatta Maharaj (212 chars)
- Samarth Ramdas (213 chars)
- Paramahansa Yogananda (232 chars)
- Chaitanya Mahaprabhu (237 chars)
- Sri Aurobindo (239 chars)
- Adi Shankaracharya (257 chars)
- Swami Sivananda (268 chars)
- Swami Chinmayananda (280 chars)
- Shirdi Sai Baba (291 chars)

### Scriptures: 10 with ZERO Chapters
- Autobiography of a Yogi, Devi Bhagavata Purana, Guru Granth Sahib, Shrimad Bhagavatam, Vishnu Purana
- Hindi duplicates: उपनिषद्, कबीर दोहावली, योगसूत्र, श्रीमद्भगवद्गीता, श्रीमद्भागवतम्

### Scripture Chapters: 11 Under 800 Characters
Thin content in Yoga Sutras padas, Ramayana Kandas (Hindi), and Katha Upanishad.

### Mantras: 8 Still Missing Audio URLs

### FAQs: Festivals category underrepresented (only 6)

---

## Implementation Plan

### Operation 1: Temple Deduplication and Enhancement
- **Delete ~19 duplicate temple records** (keep the most detailed version of each)
- **Expand 4 thin temple descriptions** to 300+ chars with bilingual content, history, architecture details, and SEO-rich information
- **Add 8 new major temples** not yet in the database:
  - Koneshwar Temple, Trincomalee
  - Pashupatinath Temple, Kathmandu
  - Prambanan Temple, Indonesia
  - Angkor Wat, Cambodia
  - Sun Temple, Modhera
  - Virupaksha Temple, Hampi (enhanced)
  - Ranganathaswamy Temple, Srirangam
  - Sabrimala Ayyappa Temple, Kerala
- Each temple with full SEO data: 500+ char description, history, visiting_hours, facilities, live_darshan_url

### Operation 2: Saints Biography Enhancement
- **Update 10 saints** with 500+ character bilingual biographies (Hindi + English)
- Include birth/death details, major works, key teachings, samadhi location
- Add famous_quotes JSON arrays with 3-5 authentic quotes each

### Operation 3: Scripture Chapter Expansion
- **Add chapters for 5 scriptures** currently at zero (skip Hindi duplicates which mirror English versions):
  - Devi Bhagavata Purana (5 key sections)
  - Vishnu Purana (5 key sections)  
  - Shrimad Bhagavatam (5 key skandhas)
  - Kabir Dohavali (4 sections with 50+ dohas)
  - Autobiography of a Yogi (5 key chapters)
- **Enhance 11 thin chapters** to 1500+ chars with full Sanskrit/Hindi/English content
- Remove 5 Hindi duplicate scripture records that mirror existing English entries

### Operation 4: Mantras Audio + New Mantras
- **Fix 8 mantras** still missing audio_url with Archive.org links
- **Add 10 new mantras** with full pronunciation, meaning, benefits, and audio:
  - Durga Beej Mantra, Saraswati Mantra, Hanuman Mantra
  - Narsimha Mantra, Sudarshana Mantra, Dhanvantari Mantra
  - Santana Gopala Mantra, Annapurna Mantra
  - Dattatreya Mantra, Kartikeya Mantra

### Operation 5: FAQs and Spiritual Content
- **Add 20 new FAQs** focusing on underrepresented categories:
  - festivals: +8 (Holi, Diwali details, Navratri rituals, Chhath, Onam, Pongal, Baisakhi, Maha Shivaratri)
  - mantras: +6 (how to do japa, mala usage, timing, pronunciation rules)
  - yoga: +6 (new category - asanas, pranayama, yoga types)

---

## Technical Details

All operations will use the Supabase insert tool (data operations, not schema changes):
- DELETE for duplicate removal
- UPDATE for content enhancement
- INSERT for new records

No schema migrations needed -- all tables already have the correct structure.

## Expected Results

| Table | Before | After | Change |
|-------|--------|-------|--------|
| temples | 44 (19 dupes) | 33 (0 dupes, +8 new) | Clean + enriched |
| saints | 43 (10 thin) | 43 (all 500+ chars) | All bios enhanced |
| scriptures | 23 (5 Hindi dupes) | 18 (clean) | Dupes removed |
| scripture_chapters | 77 (11 thin) | 102 (all rich) | +25 new, 11 enhanced |
| mantras_library | 37 (8 no audio) | 47 (all with audio) | +10 new mantras |
| spiritual_faqs | 65 | 85 | +20 new FAQs |
| audio_library | 55 | 55 (all working) | Archive.org verified |

