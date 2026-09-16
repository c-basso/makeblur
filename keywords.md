# Keyword research — makeblur.com (September 2026)

Goal: rank for searches made by people who **already have a photo on an iPhone and want part of it blurred right now**. Those searches convert to App Store taps. Everything else (band, makeup, video, Zoom, "remove background") is excluded on purpose.

Sources used, in order of trust:

1. `searched_with_top-queries_US_20250429-1239_20260429-1239.csv` — Google "searched with" interest for the *blur* topic, US, 12 months (relative 0–100 + YoY).
2. `queries.csv` / `de/queries.csv` — App Store Search popularity (Apple Search Ads index, US and DE).
3. Live SERP checks (Sept 2026) for each candidate: who ranks, what the native-iOS answer is, whether the app has a real answer.
4. App Store listing copy and screenshots (`app.md`) — the app's real modes are **Background / Full Photo / Faces / Manual** and the styles are **Motion, Gaussian, Ghosting, Box, Pixelate, Hexagonal, Crystallize, Bokeh**. A keyword only makes the list if one of those modes solves it.

No paid keyword tool was available in this session, so absolute monthly volumes are **directional estimates** (bucketed), not exported numbers. Relative interest and YoY are real data from the CSVs.

---

## 1. Who converts (and who does not)

| Converts | Why | Does not convert | Why |
| --- | --- | --- | --- |
| "how to blur background on iPhone" after the fact | Portrait mode failed them; they have the photo | "the blur", "blur song 2", "gorillaz" | Band |
| "blur part of a picture iPhone" | Native Photos has no blur brush | "blur primer", "easy blur foundation" | Makeup |
| "blur faces / blur text / license plate" | Privacy before sharing; Clean Up needs Apple Intelligence hardware | "blur video", "capcut" | App is photo-only |
| "motion blur / gaussian / bokeh / pixelate" + photo | Named effect the app has | "zoom blur background", "teams" | Virtual-meeting background |
| "best app to blur background iPhone" | Commercial, ready to install | "remove background", "background remover" | Cutout job, different app |

---

## 2. Primary keywords (homepage owns this cluster)

| Keyword | US interest (0–100) | YoY | App Store pop. | Est. monthly US web searches | Intent | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| blur background | 68 | -6% | 100 | 10k–50k | Mixed (tool + how-to) | Head term; homepage H1 + title. Crowded with web tools (Fotor, Canva) — win the *iPhone after-capture* slice, not the whole term. |
| background blur | 66 | -3% | — | 5k–20k | Synonym | Body copy variant. |
| blur photo / photo blur | 40 / 38 | +20% / +10% | 67 | 5k–20k | Generic | Rising. Used in title tag + App Store name match ("How to Blur Photo"). |
| blur image | 26 | +7% | 64 | 5k–20k | Generic | Body variant; do not build a page (web-tool SERP). |
| blur background iphone | 13 | +1% | — | 1k–5k | **High** | Device-qualified. Homepage + guide 1. |
| blur photo background | 12 | +6% | 17 (ASO) | 1k–5k | Commercial | Guide 9. |
| blur background of photo | 6 | +20% | 12 | 500–2k | Commercial | Exact listing phrase. Guide 2. |
| how to blur photo | — | — | name match | 1k–5k | How-to | App Store name = query. Homepage subtitle + guide 3. |

Homepage title: **Blur Background of a Photo on iPhone — After You Shoot** (≤60 chars). H1: "Blur the background of a photo after you shoot." Body covers: blur background / background blur / blur photo / blur image / blur background iPhone / face blur / motion blur / gaussian.

---

## 3. Long-tail keywords → one guide URL each

Rules: one primary per URL (H1, `<title>`, first 100 words, URL). Each page answers the searcher's question honestly first (including what iPhone can do natively), then shows the exact taps in the app.

### Existing URLs (keep — already indexed; content rewritten)

| # | Primary keyword | Interest / YoY | Est. US/mo | App mode that solves it | URL |
| --- | --- | --- | --- | --- | --- |
| 1 | how to blur background on iphone | 6 / +9% | 2k–8k | Background | `how-to-blur-background-on-iphone.html` |
| 2 | blur background of photo | 6 / +20% | 500–2k | Background | `blur-background-of-photo.html` |
| 3 | how to blur a photo on iphone | 3 / +40% | 1k–5k | Background / Full Photo | `how-to-blur-a-photo-on-iphone.html` |
| 4 | how to blur a picture on iphone | (App Store 7) | 1k–5k | Manual / Background | `how-to-blur-a-picture-on-iphone.html` |
| 5 | motion blur effect | 37 / +20% (head "motion blur") | 2k–10k | Motion style | `motion-blur-effect.html` |
| 6 | gaussian blur (iphone) | 5 / +20% | 500–2k | Gaussian style | `gaussian-blur-iphone.html` |
| 7 | how to blur faces in a photo | 20 / **+40%** ("face blur") | 2k–8k | Faces | `how-to-blur-faces-in-a-photo.html` |
| 8 | how to make background blurry on iphone | (App Store 3) | 500–2k | Background | `how-to-make-background-blurry-on-iphone.html` |
| 9 | blur photo background | 12 / +6% | 1k–5k | Background | `blur-photo-background.html` |
| 10 | how to make a photo blurry | (App Store 5) | 1k–5k | Full Photo | `how-to-make-a-photo-blurry.html` |

### New URLs (gaps found in this research)

| # | Primary keyword | Evidence | Est. US/mo | App mode | URL | Why it converts |
| --- | --- | --- | --- | --- | --- | --- |
| 11 | how to blur part of a picture on iphone | 7+ ranking how-to articles (Guiding Tech, TechWiser, Comparitech, iMobie); Apple Community threads; no native blur brush in Photos | 2k–8k | **Manual** | `how-to-blur-part-of-a-picture-on-iphone.html` | Every SERP answer is "Photos can't; use Markup shapes or a third-party app". The app's Manual mode is that app. |
| 12 | how to blur text in a photo (iphone) | NordVPN, BeautyPlus, Setapp rank; privacy intent | 1k–5k | Manual + Pixelate | `how-to-blur-text-in-a-photo.html` | Screenshots of addresses, order numbers, chats. |
| 13 | how to blur license plate in photo | PerfectCorp, Watermarkly rank; car-sale / marketplace intent | 500–2k | Manual + Pixelate/Box | `how-to-blur-license-plate-in-photo.html` | Very specific task, low competition, app does it in 3 taps. |
| 14 | how to pixelate a photo on iphone | "pixel privacy" is a listing screenshot; iDownloadBlog ranks | 1k–5k | Pixelate style | `how-to-pixelate-a-photo-on-iphone.html` | Named effect; privacy + retro intent. |
| 15 | bokeh effect iphone (how to add bokeh to a photo) | Listing screenshot 6 "soft vibes with bokeh"; iPhone Photography School covers bokeh | 1k–5k | Bokeh style | `bokeh-effect-iphone.html` | Photographers searching the look, not the tool. |
| 16 | best app to blur background on iphone | Skylum / CyberLink "10 best apps" listicles rank; "blur app" is App Store pop. 20 in DE, +50% | 1k–5k | Whole app | `best-app-to-blur-background-on-iphone.html` | Bottom-of-funnel, commercial. Compare against *native* options (Portrait, Markup, Clean Up, web tools) — no unverifiable claims about other apps. |

### Considered and rejected

| Keyword | Reason |
| --- | --- |
| blur video, blur video background | App is photo-only. |
| remove background / background eraser | Different job (cutout). Listing does not offer it. |
| blur background zoom / teams | Virtual meeting camera. |
| how to blur in photoshop | Desktop; wrong audience. |
| unblur / remove blur / fix blurry photo | Opposite job; strong intent but the app cannot do it. Do not bait. |
| blur photo online free | Only the limited full-image web editor applies; keep `photo-blur-editor-online.html` as is, do not build more web-tool pages (`CONTENT_NOTES.md`). |
| how to blur background without portrait mode | Real query but same intent as #1 — handled as an H2 inside guide 1 to avoid cannibalization. |

---

## 4. Cannibalization map

| Cluster | Pages | Distinct angle each page keeps |
| --- | --- | --- |
| Background blur, iPhone how-to | 1, 8 | 1 = "after you shoot / without Portrait mode"; 8 = beginner phrasing, focus on strength slider and what "blurry background" looks like at 30/60/90 radius |
| Background blur, commercial | 2, 9, 16 | 2 = listing phrase, "I want the result"; 9 = social-media/portrait use case; 16 = comparison of methods |
| Whole-photo / any picture | 3, 4, 10 | 3 = camera-roll photo, Background vs Full Photo choice; 4 = picture you did not take (screenshots, saved images) → Manual; 10 = full-image blur only |
| Privacy | 7, 11, 12, 13, 14 | 7 = faces (auto); 11 = any region (Manual); 12 = text; 13 = plates; 14 = pixelate style |
| Named effects | 5, 6, 15 | motion / gaussian / bokeh |

---

## 5. On-page targets per guide

- `<title>` 50–60 chars, primary keyword first, "iPhone" when in the query.
- Meta description 150–160 chars, includes primary keyword + "after you shoot" or the privacy hook + "free".
- H1 = the question phrased the way it is searched.
- First paragraph = 40–60 word direct answer (featured-snippet / AI-overview bait).
- H2 "What iPhone can do on its own" (honest: Portrait, Markup, Clean Up + their limits).
- H2 "How to … in How to Blur Photo" with numbered steps using real UI labels (Background · Full Photo · Faces · Manual; Radius / Angle sliders; Save).
- H2 "Tips" (3 bullets) and H2 FAQ (3–4 PAA-style questions) → FAQPage schema.
- HowTo + Article + Breadcrumb schema (already in build). Related guides = the cluster above, not "first three".

## 6. Homepage FAQ → guide mapping

Each FAQ question is a real query; the "Learn more" link points at the guide that owns that query (see `build/en.json` → `seo.faq[].guide_keyword`).
