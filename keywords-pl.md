# Badanie słów kluczowych — makeblur.com/pl/ (październik 2026)

Cel: wysokie pozycje w Google (Polska) na zapytania osób, które **mają już zdjęcie na iPhonie i chcą rozmyć jego część**. Takie zapytania kończą się pobraniem. Wykluczone: wideo, Zoom/Teams, «usuwanie tła», Photoshop, «wyostrzanie rozmazanego zdjęcia».

Źródła (wg wiarygodności):

1. Polski App Store: nazwa «Rozmycie tła na zdjęciu» (`app-pl.md`).
2. Ręczny przegląd SERP (październik 2026): Media Expert («jak uzyskać rozmyte tło na zdjęciu»), marszalstudio.pl («jak rozmyć tło na zdjęciu»), Canva («rozmycie tła za darmo»), CapCut/Dreamina («jak rozmazać tło»), Apeaksoft; imagazine.pl i benchmark.pl (brak polskiego w Apple Intelligence, blokada Siri AI w UE dla iOS 27); autoblog.spidersweb.pl («czy trzeba zasłaniać tablice rejestracyjne w internecie»); otomoto.pl (zdjęcia do ogłoszenia).
3. Rzeczywiste funkcje: karty Background / Full Photo / Faces / Manual; style Gaussian, Motion, Ghosting, Box, Pixelate, Hexagonal, Crystallize.

Brak dostępu do płatnych narzędzi (Planer słów kluczowych, Senuto) i brak eksportu Google Trends dla Polski (`pl/queries.csv`) w tej sesji: **wolumeny = szacunki w przedziałach**. Sprawdzić w Planerze/Senuto przed kolejną iteracją i dodać `pl/queries.csv`.

**Uwaga językowa:** Polacy piszą «rozmyć», «rozmazać», «zamazać» (twarz, tablicę), a o mozaice «zapikselować» / «pikselizacja». Zrzut ekranu to potocznie **«screen»**. Strony używają formy najczęstszej w H1/title, a wariantów w treści. Forma zwracania się: **ty**.

---

## 1. Kto konwertuje, kto nie

| Konwertuje | Dlaczego | Nie konwertuje | Dlaczego |
| --- | --- | --- | --- |
| «rozmycie tła iPhone» po zrobieniu zdjęcia | Zapomniany tryb Portret | «rozmycie tła Canva / Photoshop / online» | Desktop / web |
| «zamazać twarz na zdjęciu» | Dzieci, RODO, wizerunek; brak Apple Intelligence po polsku | «zamazać twarz na filmie», «CapCut» | Aplikacja tylko do zdjęć |
| «zamazać tablicę rejestracyjną» (Otomoto, OLX) | Konkretne zadanie, mała konkurencja | «usunąć tło», «wyciąć postać» | Inne zadanie |
| «zamazać tekst na screenie» | Messenger, adres, numer konta | «wyostrzyć rozmazane zdjęcie» | Odwrotność |
| «motion blur», «efekt bokeh», «rozmycie gaussowskie» | Efekt jest w aplikacji | «rozmycie tła Teams» | Wideorozmowy |
| «aplikacja do rozmywania zdjęć iPhone» | Komercyjne, chce instalować | «Blur zespół» | Muzyka |

---

## 2. Główne słowa kluczowe (strona /pl/ niesie klaster)

| Słowo kluczowe | Szac./mies. (PL) | Intencja | Uwagi |
| --- | --- | --- | --- |
| rozmycie tła (na zdjęciu) | 3k–10k | how-to/komercyjna | **= nazwa aplikacji w PL**. Title + H1 strony głównej. |
| jak rozmyć tło na zdjęciu | 2k–6k | how-to | Poradniki 1 i 3. |
| rozmycie tła iPhone | 1k–4k | **wysoka** | Strona główna + poradnik 1. |
| zamazać twarz na zdjęciu | 1k–4k | prywatność | Poradnik 5. |
| aplikacja do rozmycia tła | 1k–3k | komercyjna | Poradnik 4. |
| motion blur | 1k–5k (po angielsku) | efekt | Poradnik 12. |

Title strony głównej: **«Rozmycie tła na zdjęciu iPhone, także po fakcie | Make Blur»** (≤60). H1: «Rozmyj tło — nawet po zrobieniu zdjęcia».

---

## 3. Długi ogon → jeden poradnik na słowo kluczowe

Zasada: jedno główne słowo kluczowe na URL (H1, `<title>`, pierwsze 100 słów, slug). Najpierw uczciwa odpowiedź (co iPhone potrafi sam), potem dokładne kroki w aplikacji.

| # | Główne słowo kluczowe | Szac./mies. | Tryb | URL (`/pl/…`) | Dlaczego konwertuje |
| --- | --- | --- | --- | --- | --- |
| 1 | rozmycie tła iPhone (po zrobieniu zdjęcia) | 1k–4k | Background | `rozmycie-tla-iphone.html` | Główny how-to; SERP mówi tylko o trybie Portret. |
| 2 | rozmyte tło na zdjęciu | 2k–6k | Background | `rozmyte-tlo-zdjecie.html` | Nastawione na efekt: profil, Instagram, ogłoszenia. |
| 3 | jak rozmyć tło | 2k–6k | Background | `jak-rozmyc-tlo.html` | Sformułowanie początkujących; jak mocno. |
| 4 | aplikacja do rozmycia zdjęć iPhone | 1k–3k | cała aplikacja | `aplikacja-rozmycie-zdjec-iphone.html` | Dół lejka; uczciwe porównanie metod. |
| 5 | zamazać twarz na zdjęciu | 1k–4k | Faces | `zamazac-twarz-na-zdjeciu.html` | Wszystkie twarze naraz, bez Apple Intelligence. |
| 6 | rozmyć część zdjęcia | 500–2k | Manual | `rozmyc-czesc-zdjecia-iphone.html` | Zdjęcia nie mają pędzla rozmycia. |
| 7 | zamazać tablicę rejestracyjną | 1k–3k | Manual + Pixelate | `zamazac-tablice-rejestracyjna.html` | Otomoto, OLX, grupy na Facebooku. |
| 8 | zamazać tekst na screenie | 500–2k | Manual + Pixelate | `zamazac-tekst-screen-iphone.html` | Zakreślacz w Oznaczeniach jest półprzezroczysty. |
| 9 | zapikselować zdjęcie iPhone | 500–2k | Pixelate | `zapikselowac-zdjecie-iphone.html` | «Mozaika i pikselizacja» w opisie. |
| 10 | rozmyć zdjęcie (całe) | 1k–3k | Full Photo | `rozmyc-zdjecie-iphone.html` | Cały kadr; edytor online jako ograniczona alternatywa. |
| 11 | efekt rozmycia zdjęcia (blur) | 1k–3k | wszystkie style | `efekt-rozmycia-zdjecie.html` | Przegląd stylów. |
| 12 | motion blur zdjęcie | 1k–5k | Motion | `motion-blur-zdjecie.html` | Zrzut «Motion blur to action shots». |
| 13 | efekt bokeh iPhone | 500–2k | Background + Gaussian | `efekt-bokeh-iphone.html` | Zrzut «Soft vibes with bokeh». |
| 14 | rozmycie gaussowskie | 500–2k | Gaussian | `rozmycie-gaussowskie-iphone.html` | Nazwa filtra (Photoshop PL: «Rozmycie gaussowskie»). |

### Rozważone i odrzucone

| Słowo kluczowe | Powód |
| --- | --- |
| rozmycie tła online / bez aplikacji | Tylko ograniczony edytor web (całe zdjęcie). |
| rozmycie tła w filmie | Aplikacja tylko do zdjęć. |
| usunąć tło / wyciąć | Inne zadanie. |
| wyostrzyć zdjęcie | Odwrotność. |
| rozmycie tła bez trybu portret (osobna strona) | Ta sama intencja co #1 → H2 w #1. |

---

## 4. Mapa kanibalizacji

| Klaster | Strony | Własny kąt |
| --- | --- | --- |
| Tło, how-to iPhone | 1, 3 | 1 = po fakcie / bez Portretu; 3 = początkujący, jak mocno |
| Tło, komercyjne | 2, 4 | 2 = efekt na profil/social; 4 = porównanie metod |
| Prywatność | 5, 6, 7, 8, 9 | Twarze (auto) / dowolny obszar / tablica / tekst / piksele |
| Całe zdjęcie | 10, 11 | cały kadr / efekt rozmycia wyjaśniony |
| Efekty | 12, 13, 14 | ruch / bokeh / gaussowskie |

## 5. Szablon on-page

- `<title>` 50–60 znaków, słowo kluczowe na początku, «iPhone» jeśli jest w zapytaniu.
- Meta description 150–160: słowo kluczowe + «po zrobieniu zdjęcia» albo prywatność + «za darmo».
- H1 = pytanie tak, jak jest wyszukiwane. Pierwszy akapit: bezpośrednia odpowiedź w 40–60 słowach.
- Blok «Co iPhone potrafi sam» (tryb Portret, Oznaczenia, Apple Intelligence i ich granice).
- Kroki w aplikacji z prawdziwymi etykietami.
- Wskazówki (3) + FAQ (3) → FAQPage; HowTo + Article + Breadcrumb generuje build.

## 6. FAQ strony głównej → poradnik

Każde pytanie to realne zapytanie; «Czytaj więcej» prowadzi do poradnika, który jest właścicielem słowa kluczowego (`build/pl.json` → `seo.faq[].guide_keyword`).
