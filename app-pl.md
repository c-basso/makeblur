# Rozmycie tła na zdjęciu (MakeBlur) — App Store (Polska), źródło dla /pl/

Dane z polskiej strony App Store (`apps.apple.com/pl/app/id6749166426`) i iTunes Lookup API (`country=pl&lang=pl_pl`), pobrane **9 października 2026**. Marka strony: **Make Blur** (`makeblur.com/pl/`); w opisie aplikacja nazywa się **MakeBlur**.

Nie wymyślać ocen, liczby pobrań ani recenzji. W polskim sklepie aplikacja **nie ma jeszcze ocen**. Okładka pokazuje wieniec «Loved by users»: **nie używać na stronie**.

---

## Tożsamość

| Pole | Wartość |
| --- | --- |
| Nazwa (PL) | **Rozmycie tła na zdjęciu** |
| W opisie | MakeBlur |
| App Store ID | `6749166426` |
| URL | https://apps.apple.com/pl/app/id6749166426 (na stronie: ogólny link `https://apps.apple.com/app/id6749166426`) |
| Deweloper | Vladimir Ivakhnenko |
| Marka strony | Make Blur |
| Kategoria | Grafika i DTP (dodatkowo: Zdjęcia i wideo) |
| Cena | Za darmo, z zakupami w aplikacji. **Żadnych cen na stronie.** |
| Wiek | 4+ |
| Wersja | 1.16.4 — poprawki błędów i ulepszenia interfejsu |
| Rozmiar | 25,7 MB |
| Zgodność | **iOS 18.6 lub nowszy**, tylko iPhone |
| Języki | Polski i 28 innych |
| Oceny PL | brak — nie pokazywać |
| Przetwarzanie | Na urządzeniu, bez internetu; zdjęcia nie są wysyłane na serwery |
| Regulamin | https://makeblur.com/terms.html |
| Prywatność | https://makeblur.com/privacy.html |

### Zrzuty ekranu (sklep PL — zestaw angielski)

Folder `img/appstore/pl/` (WebP 720×1558, jakość 0,72). **Polski sklep używa tych samych angielskich zrzutów co m.in. Korea i Holandia** (identyczne ścieżki mzstatic); pliki skopiowano z `img/appstore/ko/`. Podpisy na stronie to polskie tłumaczenia. Gdy w sklepie pojawią się polskie zrzuty, pobrać je ponownie do tych samych ścieżek.

| Plik | Nagłówek (dosłownie) | Podpis na stronie | Widoczne ustawienia |
| --- | --- | --- | --- |
| `01-cover.webp` | **BLUR — BACKGROUND AND FACES** (wieniec «Loved by users»: nie używać) | — | — |
| `02-motion.webp` | **ADD — MOTION BLUR TO ACTION SHOTS** | Motion blur do zdjęć w ruchu | Background + Motion, Radius 65 |
| `03-face.webp` | **HIDE — FACES BEFORE YOU SHARE** | Ukryj twarze przed udostępnieniem | Faces, Radius 80, Angle 32° |
| `04-box.webp` | **FOCUS — ON THE SUBJECT, BLUR THE REST** | Ostry obiekt, reszta rozmyta | Background + Box |
| `05-crystalize.webp` | **APPLY — PIXEL PRIVACY IN ONE TAP** | Pikselizacja jednym dotknięciem | Background + Crystallize |
| `06-ghost.webp` | **CREATE — SOFT VIBES WITH BOKEH** | Miękki klimat z bokeh | Full Photo + Ghosting, Radius 79 |

Ścieżki mzstatic (prefiks `https://is1-ssl.mzstatic.com/image/thumb/`, sufiks `/720x1558bb.png`):

| Plik | Ścieżka |
| --- | --- |
| 01 | `PurpleSource211/v4/b9/99/d2/b999d2b8-bffa-9c81-f639-e47d005bd8ef/1_cover_12_framed.png` |
| 02 | `PurpleSource211/v4/4f/5f/7c/4f5f7c08-5c65-5319-175a-cde81554feb2/2_motion_12_framed.png` |
| 03 | `PurpleSource221/v4/d2/93/e8/d293e8b7-f397-45f7-2b19-5476b188f7e4/3_face_12_framed.png` |
| 04 | `PurpleSource211/v4/42/8a/80/428a80f3-efd6-7c67-5e9e-1d09f820b5f1/4_box_12_framed.png` |
| 05 | `PurpleSource211/v4/0e/39/af/0e39af1d-d258-19de-6c9d-9a0c9ee5e01b/5_crys_12_framed.png` |
| 06 | `PurpleSource211/v4/a9/3c/83/a93c83ff-0d2b-3414-678e-4c18a091a0cf/6_ghost_12_framed.png` |

### Interfejs aplikacji (jak na zrzutach)

Interfejs na zrzutach jest **po angielsku**; poradniki podają etykiety tak, jak je widać, z polskim wyjaśnieniem przy pierwszym użyciu:

- Górny pasek: **Close** (zamknij) · **Save** (zapisz)
- Karty: **Background** (tło) · **Full Photo** (całe zdjęcie) · **Faces** (twarze) · **Manual** (pędzel)
- Style: **Motion** · **Gaussian** · **Ghosting** · **Box** · **Pixelate** · **Hexagonal** · **Crystallize**
- Suwaki: **Radius** (siła) · **Angle** (kierunek, przy Motion)

Jeśli polska wersja aplikacji przetłumaczy etykiety, zaktualizować `build/guides/pl/*.json` i `build/pl.json`.

---

## Opis w App Store (Polska) — struktura i treść

Streszczenie polskiego opisu (nie przenosić tekstu ze sklepu dosłownie; używać jako źródła faktów).

Nagłówki: **CO ROBI TA APLIKACJA · DLA KOGO JEST TA APLIKACJA · JAK UŻYWAĆ APLIKACJI · NAJWAŻNIEJSZE FUNKCJE · PRZYKŁADY UŻYCIA · TYP APLIKACJI I PLATFORMY · CENY I DANE**.

Główne twierdzenia:

- Automatycznie wykrywa główny obiekt lub osobę, zostawia go ostro i zmiękcza tło.
- Regulacja siły rozmycia i dopracowanie efektu.
- Efekty kreatywne: mozaika i pikselizacja.
- Przetwarzanie na urządzeniu bez internetu; zdjęcia nie trafiają na serwery.
- Działa z biblioteką zdjęć, dla osób bez doświadczenia w edycji.
- Zakupy w aplikacji dla funkcji premium (opcjonalnie).

## Co iPhone potrafi sam (kontekst dla poradników)

| Funkcja | Ograniczenie |
| --- | --- |
| Tryb Portret (Aparat) | Tylko podczas robienia zdjęcia. Potem w Zdjęcia → Edycja zmienisz głębię. Zwykłe zdjęcia nie mają danych o głębi. |
| Zdjęcia → Edycja | Brak pędzla rozmycia, brak rozmycia tła dla zwykłych zdjęć. |
| Oznaczenia (Markup) | Pióro, zakreślacz, kształty: zasłaniają, nie rozmywają. Zakreślacz jest półprzezroczysty. |
| Clean Up (Apple Intelligence) | **Nie ma po polsku** (stan: czerwiec 2026). Działa od iPhone 15 Pro tylko po przełączeniu iPhone’a na obsługiwany język (np. angielski). Usuwa obiekty; to nie narzędzie do rozmycia ani mozaiki. |
| Ustawienia → Tapeta | Rozmywa tapetę, nie Twoje zdjęcia. |

Kontekst prawny (tablice): wg autoblog.spidersweb.pl numer rejestracyjny w polskim prawie nie jest daną osobową i nie trzeba go zasłaniać; wielu sprzedających i tak to robi.

## Kluczowe komunikaty strony

1. Rozmycie tła **także po zrobieniu zdjęcia**, bez trybu Portret.
2. Twarze, tablice, tekst na screenach: prywatność przed udostępnieniem **bez Apple Intelligence** (której i tak nie ma po polsku), na każdym iPhonie z iOS 18.6.
3. Wszystko na urządzeniu: nic nie jest wysyłane.
4. Darmowe pobranie; funkcje zaawansowane opcjonalnie w zakupach w aplikacji — **nigdy cen**.
