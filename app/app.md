# How to Blur Photo (Make Blur) — App Store source of truth

Pulled from the live [App Store listing](https://apps.apple.com/app/id6749166426) and the iTunes Lookup API (`id=6749166426`, US store) on **16 September 2026**. Website brand remains **Make Blur** (`makeblur.com`); the store display name is **How to Blur Photo**.

Do not invent ratings, download counts, or review volume. The listing currently has too few ratings to use as social proof.

---

## Product identity

| Field | Value |
| --- | --- |
| App Store name | How to Blur Photo |
| Subtitle | Sharp Subject, Soft Focus |
| Bundle ID | `ru.ivakhnenko.blur` |
| App Store ID | `6749166426` |
| URL | https://apps.apple.com/app/id6749166426 |
| Seller / artist | Vladimir Ivakhnenko |
| Website brand | Make Blur |
| Domain | https://makeblur.com |
| Category | Graphics & Design |
| Price | Free, with in-app purchases |
| Age rating | 4+ |
| Version | 1.16.4 (released 14 Sep 2026) — release notes: “This version of How to Blur Photo includes some bugs fixes and UI improvements” |
| First release | 18 Nov 2025 |
| Size | 25.7 MB (`25717760` bytes) |
| Minimum OS | **iOS 18.6** (the listing raised this from 17.1; every page on the site must say 18.6) |
| Platforms | iPhone only (no iPad screenshots; listing says “Only for iPhone”) |
| Languages | English + 30 more — HR, CS, DA, NL, EN, FI, FR, DE, EL, HE, HU, ID, IT, JA, KO, MS, NB, PL, PT, RO, RU, ZH-Hans, ZH-Hant, SK, ES, SV, TH, TR, UK, VI (+ Filipino per store page) |
| Average rating | **3.0** from **2** ratings — do not display as a conversion stat |
| Privacy (App Privacy) | Data not linked to you: Purchases, Identifiers, Diagnostics. Accessibility features: not yet indicated by developer. Copyright line on store: © 2026 c-basso |
| Processing | On-device. Photos are not uploaded to external servers when you blur backgrounds. |
| Terms | https://makeblur.com/terms.html |
| Privacy policy | https://makeblur.com/privacy.html |

### In-app purchases (store listing)

- Make Blur Background Photo Effect — $4.99 (also offered as a subscription with a free trial)
- Make Blur Photo — $29.99
- Basic background blur is included; advanced blur styles and tools are IAP

### Store assets (downloaded)

Saved under `img/appstore/` (WebP for the site; 1024px PNG icon kept as source):

| File | Listing role |
| --- | --- |
| `icon.webp` / `icon-180.webp` / `icon-1024.png` | App icon |
| `01-cover.webp` | Cover / background blur (framed iPhone) |
| `02-motion.webp` | Motion blur |
| `03-face.webp` | Face blur |
| `04-box.webp` | Box / background blur control |
| `05-crystalize.webp` | Crystalize |
| `06-ghost.webp` | Ghosting |

Source URLs on Apple's CDN (320x480 thumbs in the lookup API; replace the trailing `320x480bb.jpg` with e.g. `1290x2796bb.png` for full size):

| File | mzstatic path |
| --- | --- |
| icon | `Purple211/v4/c6/36/fa/c636fa72-9db2-4620-9f2c-05384218bc10/AppIcon-0-0-1x_U007ephone-0-1-85-220.png` |
| 01 cover | `PurpleSource211/v4/b9/99/d2/b999d2b8-bffa-9c81-f639-e47d005bd8ef/1_cover_12_framed.png` |
| 02 motion | `PurpleSource211/v4/4f/5f/7c/4f5f7c08-5c65-5319-175a-cde81554feb2/2_motion_12_framed.png` |
| 03 face | `PurpleSource221/v4/d2/93/e8/d293e8b7-f397-45f7-2b19-5476b188f7e4/3_face_12_framed.png` |
| 04 box | `PurpleSource211/v4/42/8a/80/428a80f3-efd6-7c67-5e9e-1d09f820b5f1/4_box_12_framed.png` |
| 05 crystalize | `PurpleSource211/v4/0e/39/af/0e39af1d-d258-19de-6c9d-9a0c9ee5e01b/5_crys_12_framed.png` |
| 06 ghost | `PurpleSource211/v4/a9/3c/83/a93c83ff-0d2b-3414-678e-4c18a091a0cf/6_ghost_12_framed.png` |

### Screenshot headlines (verbatim from the framed images)

1. **BLUR — BACKGROUND AND FACES** (cover; shows icon + “Loved by users” laurel — do not reuse the stars on the site)
2. **ADD — MOTION BLUR TO ACTION SHOTS**
3. **HIDE — FACES BEFORE YOU SHARE**
4. **FOCUS — ON THE SUBJECT, BLUR THE REST**
5. **APPLY — PIXEL PRIVACY IN ONE TAP**
6. **CREATE — SOFT VIBES WITH BOKEH**

### Real in-app UI (visible in the screenshots — use these labels in guides)

- Top bar: **Close** · **Save**
- Mode tabs: **Background** · **Full Photo** · **Faces** · **Manual**
- Style chips: **Motion** · **Gaussian** · **Ghosting** · **Box** · **Pixelate** · **Hexagonal** · **Crystallize** (Bokeh is named in the listing copy and screenshot 6)
- Sliders: **Radius** (0–100; 65 / 79 / 80 shown) and **Angle** (degrees; shown for Motion)
- Faces mode shows a grid of detected faces, each blurred individually
- Manual mode = brush over any region yourself (blur part of a photo, text, plates)

---

## App Store description (verbatim)

How to Blur Photo is an iOS photo editor for blurring backgrounds after you take a picture. Blur the background of a photo in seconds with precise control, add motion blur to action shots, and get a soft gaussian blur look. Use How to Blur Photo after you shoot—no DSLR and no complex software.

**WHAT THIS APP DOES**

How to Blur Photo is a photo editor built around one job: blur photo backgrounds. The app detects your subject automatically so the person or object stays sharp while the background goes soft. Adjust blur intensity, add motion blur, apply gaussian blur styles, and try creative effects including mosaic and pixel looks. Everything runs on your device—no internet connection required.

**WHO THIS APP IS FOR**

Anyone who wants to blur the background of a photo: social creators, portrait shooters, and casual photographers who want subjects to stand out with a clean, blurred background.

**HOW TO USE THIS APP**

Blur the background of a photo in three steps: select a photo, adjust blur strength, save. How to Blur Photo finds the subject for accurate background blur. Learn how to blur the background after taking a photo with simple controls and no technical skills.

**KEY FEATURES**

- Blur background – Blur photo backgrounds with precise control for everyday shots and portraits.
- Photo blur background – Create photo background blur and photo blur background effects with one tap.
- Motion blur – Add dynamic motion blur to action photos.
- Gaussian blur – Soft gaussian styles that keep the subject sharp and the background smooth.
- Smart edge detection – Separates subject from background for natural results.
- Blur background of photo – Works on photos you have already taken.
- Blur image backgrounds – Multiple intensity levels for depth and focus on your subject.

**USE CASES**

- Social media – Blur photo backgrounds so subjects stand out in posts and stories.
- Action shots – Use motion blur for energy and movement.
- Quick edits – Blur background of photo images without a desktop editor.

**HOW IT WORKS**

The app uses advanced algorithms to detect subjects and blur backgrounds naturally. When you want to blur the background of a photo, the app analyzes the image, identifies your main subject, and provides tools to blur background areas with precision.

**PRICING AND PRIVACY**

How to Blur Photo includes basic background blur; advanced blur styles and tools are available through in-app purchases. Photos are processed on your device—they are not uploaded to external servers when you blur backgrounds.

Download How to Blur Photo today—the easy way to blur background of photos. Whether you need photo blur background, blur photo background, or want to learn how to blur the background of a photo, this app has you covered.

---

## Keywords already in the listing / ASO copy

Extracted from name, subtitle, description, and feature bullets (order ≈ emphasis in the listing):

1. how to blur photo
2. blur background
3. blur the background of a photo
4. blur background of photo
5. photo blur background
6. blur photo background
7. blur photo backgrounds
8. motion blur
9. gaussian blur
10. blur image backgrounds
11. photo background blur
12. how to blur the background
13. sharp subject / soft focus (subtitle)
14. mosaic / pixel (creative effects)
15. background blur after you shoot (differentiator vs Portrait mode)

Site and older ASO list (`queries.csv`, App Store Search Ads / popularity index, US):

| Keyword | Relative popularity |
| --- | --- |
| blur background | 100 |
| blur photo | 67 |
| blur image | 64 |
| motion blur | 51 |
| blur background of photo | 12 |
| gaussian blur | 10 |
| how to blur a photo on iphone | 7 |
| how to blur a picture on iphone | 7 |
| motion blur effect | 5 |
| how to make a photo blurry | 5 |
| how to blur photos on iphone | 3 |
| how to make background blurry on iphone | 3 |

Google Search Console-style US interest (`searched_with_top-queries_US_*.csv`, relative 0–100):

| Query | Interest | YoY | Keep for this site? |
| --- | --- | --- | --- |
| the blur | 100 | +60% | No — band |
| blur background | 68 | -6% | Yes — primary |
| background blur | 66 | -3% | Yes — synonym |
| blur photo | 40 | +20% | Yes |
| photo blur | 38 | +10% | Yes |
| motion blur | 37 | +20% | Yes — feature page |
| blur video | 35 | +40% | No — app is photos |
| blur image | 26 | +7% | Yes |
| face blur / blur face | 20 | **+40%** | Yes — rising, app has a screenshot |
| blur background iphone | 13 | +1% | Yes — high intent |
| blur photo background | 12 | +6% | Yes — commercial |
| how to blur a photo | 10 | +20% | Yes |
| how to blur background on iphone | 6 | +9% | Yes — money how-to |
| blur background of photo | 6 | +20% | Yes — matches listing |
| gaussian blur | 5 | +20% | Yes — feature |
| how to blur photo on iphone | 5 | +30% | Yes |
| how to blur a photo on iphone | 3 | +40% | Yes |
| zoom / capcut / primer / makeup / meaning / game | various | — | No — zero download intent |

App Store keyword tools (ASOTools, Google App Store volumes — directional, not Google web volume):

| Keyword | Approx. App Store volume | KD (reported) |
| --- | --- | --- |
| blur background | 43 | 34 (head term, crowded) |
| background blur | 32 | 8 |
| photo background blur | 19 | 7 |
| blur photo background | 17 | 9 |
| background blur app | 16 | 7 |

Web SEO note: “remove background” / “background remover” volumes are much higher, but that is a **different job** (cutout, not blur). Do not retarget the site at remove.bg queries.

---

## Keyword strategy (what will actually get downloads)

### Who converts

Someone who already has a photo on an iPhone and wants the **subject sharp / background soft** (or a face hidden) **after** the shot. Portrait mode only works at capture time and only on supported cameras. Apple Photos Clean Up face blur needs Apple Intelligence hardware. This app’s wedge: **any photo, on-device, after you shoot, iPhone, iOS 18.6+**.

### Who does not convert (do not chase)

- Band / makeup / game / dictionary queries (`the blur`, `blur primer`, `blur meaning`)
- Video blur (`blur video`, CapCut)
- Zoom/Teams virtual background
- Full background **removal** (transparent PNG / e-commerce cutouts)
- Generic “photo editor” — unwinnable vs Picsart / Lightroom

### Primary keywords (homepage pillar)

Own one commercial cluster on `/`:

1. **blur background of a photo** — exact listing phrase, commercial + how-to mix
2. **how to blur photo** — matches the App Store name
3. **blur background on iPhone** — device-qualified, download intent
4. **blur photo background** / **photo blur background** — close variants in body, not a second homepage

Homepage job: rank for the cluster, explain the after-you-shoot gap, show real store screenshots, send the tap to the App Store.

### Long-tail keywords (one guide URL each)

Each URL answers the searcher’s question first, then shows the exact taps in the app. No two pages share the same primary.

| # | Primary keyword | Intent | URL slug | Why it can convert |
| --- | --- | --- | --- | --- |
| 1 | how to blur background on iPhone | How-to, iPhone | `how-to-blur-background-on-iphone.html` | Highest-intent how-to; Portrait mode is the SERP competitor |
| 2 | blur background of photo | Commercial / tool | `blur-background-of-photo.html` | Listing phrase; “I want the result” |
| 3 | how to blur a photo on iPhone | How-to | `how-to-blur-a-photo-on-iphone.html` | App Store query + GSC growth |
| 4 | how to blur a picture on iPhone | How-to (picture phrasing) | `how-to-blur-a-picture-on-iphone.html` | Same job, different query; keep unique angle (any picture in Recents) |
| 5 | motion blur effect | Feature | `motion-blur-effect.html` | Strong ASO term; action-shot use case |
| 6 | gaussian blur | Feature | `gaussian-blur-iphone.html` | Soft portrait look; people searching the filter name |
| 7 | how to blur faces in a photo | Privacy how-to | `how-to-blur-faces-in-a-photo.html` | Rising GSC; unique screenshot; vs Apple Intelligence Clean Up |
| 8 | how to make background blurry on iPhone | How-to (colloquial) | `how-to-make-background-blurry-on-iphone.html` | Beginner phrasing, low KD |
| 9 | blur photo background | Commercial | `blur-photo-background.html` | ASO 17; app-shaped query |
| 10 | how to make a photo blurry | How-to (full-image) | `how-to-make-a-photo-blurry.html` | Whole-image blur; can mention limited web editor, CTA to app for subject-aware blur |
| 11 | how to blur part of a picture on iPhone | How-to (region) | `how-to-blur-part-of-a-picture-on-iphone.html` | Photos has no blur brush; Manual mode is the answer |
| 12 | how to blur text in a photo | Privacy how-to | `how-to-blur-text-in-a-photo.html` | Screenshots with addresses/chats; Manual + Pixelate |
| 13 | how to blur license plate in photo | Privacy how-to | `how-to-blur-license-plate-in-photo.html` | Car-sale / marketplace photos; low competition |
| 14 | how to pixelate a photo on iPhone | Effect / privacy | `how-to-pixelate-a-photo-on-iphone.html` | Pixelate style is a listing screenshot |
| 15 | bokeh effect iPhone | Effect | `bokeh-effect-iphone.html` | Photographers searching the look |
| 16 | best app to blur background on iPhone | Commercial | `best-app-to-blur-background-on-iphone.html` | Bottom-of-funnel; compare against native iOS options |

Full research, estimates, and the cannibalization map live in `keywords.md` (September 2026).

### Mapping: FAQ → guide (Learn more)

Every homepage FAQ is a real ranked question with a “Learn more” link into the matching guide (or the closest one). Guides include their own FAQ schema for the long-tail.

### Cannibalization rules

- Homepage = cluster hub, not a 3,000-word tutorial.
- Guides = one primary keyword in H1, title, URL, first 100 words.
- “Picture” vs “photo” pages stay distinct: picture = any image already on the phone; photo = camera roll / portrait-style result.
- Full-image blur vs background blur stay distinct (guide 10 vs guides 1–2, 8–9).
- Online editor (`photo-blur-editor-online.html`) stays a **limited full-image** tool. Do not claim selective background blur in the browser (`CONTENT_NOTES.md`).

---

## Positioning for SEO + conversion

**Entity (GEO):** How to Blur Photo is a free iPhone photo editor (Graphics & Design) that blurs photo backgrounds and faces after you shoot. It runs on iOS 18.6+, processes images on-device, and is listed as How to Blur Photo / branded Make Blur.

**Differentiator vs SERP:** iPhone Portrait mode blurs at capture. This app blurs photos you already took. Face privacy does not require Apple Intelligence hardware.

**CTA:** App Store download. Secondary: relevant guide, then the limited online editor.

**Social proof:** Skip star widgets until rating count is meaningful. Use specifics: on-device, 7 styles (motion, gaussian, ghosting, pixelate, hexagonal, crystalize, bokeh), face blur, iOS 18.6+, 30+ languages.

**Last updated:** 16 September 2026 (v1.16.4, iOS 18.6+)
