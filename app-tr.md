# Blur Photo Background Effect (MakeBlur) — App Store (Türkiye), /tr/ için kaynak

Türkiye App Store sayfasından (`apps.apple.com/tr/app/id6749166426`) ve iTunes Lookup API’den (`country=tr&lang=tr_tr`) **9 Ekim 2026** tarihinde alındı. Site markası: **Make Blur** (`makeblur.com/tr/`); açıklamada uygulamanın adı **MakeBlur**.

Puan, indirme sayısı ya da yorum uydurma. Türkiye mağazasında **henüz puan yok**. Kapakta «Loved by users» defne çelengi var: **sitede kullanılmaz**.

---

## Kimlik

| Alan | Değer |
| --- | --- |
| Ad (TR mağaza) | **Blur Photo Background Effect** (ad İngilizce; açıklama Türkçe) |
| Açıklamada | MakeBlur |
| App Store ID | `6749166426` |
| URL | https://apps.apple.com/tr/app/id6749166426 (sitede genel bağlantı `https://apps.apple.com/app/id6749166426`) |
| Geliştirici | Vladimir Ivakhnenko |
| Site markası | Make Blur |
| Kategori | Grafik ve Tasarım (ikincil: Fotoğraf ve Video) |
| Fiyat | Ücretsiz, uygulama içi satın almalar var. **Sitede fiyat yok.** |
| Yaş | 4+ |
| Sürüm | 1.16.4 — hata düzeltmeleri ve arayüz iyileştirmeleri |
| Boyut | 25,7 MB |
| Uyumluluk | **iOS 18.6 veya üstü**, yalnızca iPhone |
| Diller | Türkçe ve 28 dil daha |
| Puanlar TR | yok — gösterilmez |
| İşleme | Cihazda, internetsiz; fotoğraflar sunuculara yüklenmez |
| Koşullar | https://makeblur.com/terms.html |
| Gizlilik | https://makeblur.com/privacy.html |

**Not:** Mağaza adı İngilizce kaldığı için sitede ad tırnak içinde aynen kullanılır («Blur Photo Background Effect»); Türkçe bir mağaza adı eklenirse `build/tr.json` içindeki `STORE` değeri güncellenmeli.

### Ekran görüntüleri (TR mağaza — İngilizce set)

Klasör `img/appstore/tr/` (WebP 720×1558, kalite 0,72). **Türkiye mağazası Kore, Hollanda, Polonya, Romanya ve Tayland ile aynı İngilizce ekran görüntülerini kullanıyor** (aynı mzstatic yolları); dosyalar `img/appstore/ko/` klasöründen kopyalandı. Sitedeki açıklamalar Türkçe çeviridir.

| Dosya | Başlık (aynen) | Sitedeki açıklama | Görünen ayarlar |
| --- | --- | --- | --- |
| `01-cover.webp` | **BLUR — BACKGROUND AND FACES** («Loved by users» çelengi: kullanılmaz) | — | — |
| `02-motion.webp` | **ADD — MOTION BLUR TO ACTION SHOTS** | Aksiyon karelerine motion blur | Background + Motion, Radius 65 |
| `03-face.webp` | **HIDE — FACES BEFORE YOU SHARE** | Paylaşmadan önce yüzleri gizle | Faces, Radius 80, Angle 32° |
| `04-box.webp` | **FOCUS — ON THE SUBJECT, BLUR THE REST** | Konu net, gerisi bulanık | Background + Box |
| `05-crystalize.webp` | **APPLY — PIXEL PRIVACY IN ONE TAP** | Tek dokunuşla pikselleştirme | Background + Crystallize |
| `06-ghost.webp` | **CREATE — SOFT VIBES WITH BOKEH** | Bokeh ile yumuşak hava | Full Photo + Ghosting, Radius 79 |

mzstatic yolları: `app-ko.md` ile aynı.

### Uygulama arayüzü (ekran görüntülerinde görüldüğü gibi)

Arayüz **İngilizce**; rehberler etiketleri göründüğü gibi yazar, ilk geçtiği yerde Türkçe açıklar:

- Üst çubuk: **Close** (kapat) · **Save** (kaydet)
- Sekmeler: **Background** (arka plan) · **Full Photo** (tüm fotoğraf) · **Faces** (yüzler) · **Manual** (fırça)
- Stiller: **Motion** · **Gaussian** · **Ghosting** · **Box** · **Pixelate** · **Hexagonal** · **Crystallize**
- Kaydırıcılar: **Radius** (yoğunluk) · **Angle** (yön, Motion’da)

---

## App Store açıklaması (Türkiye) — yapı ve içerik

Özet (mağaza metni siteye kopyalanmaz; yalnızca bilgi kaynağı).

Başlıklar: **BU UYGULAMA NE YAPAR · BU UYGULAMA KİMLER İÇİN · UYGULAMA NASIL KULLANILIR · TEMEL ÖZELLİKLER · KULLANIM ALANLARI · UYGULAMA TİPİ VE PLATFORM · FİYATLANDIRMA VE VERİ**.

Ana iddialar:

- Konuyu otomatik algılar, net tutar ve arka planı bulanıklaştırır.
- Kayıtlı fotoğraflarda bulanıklık yoğunluğu ayarlanır; mozaik ve piksel efektleri.
- DSLR benzeri derinlik için bokeh ve Gauss tarzı bulanıklık.
- Cihazda işleme; fotoğraflar sunuculara yüklenmez.
- Premium özellikler için uygulama içi satın almalar (isteğe bağlı).

## iPhone’un kendisi neler yapabilir (rehberler için bağlam)

| Özellik | Sınır |
| --- | --- |
| Portre modu (Kamera) | Yalnızca çekim anında. Sonra Fotoğraflar → Düzenle’de derinlik ayarlanır. Normal fotoğraflarda derinlik verisi yok. |
| Fotoğraflar → Düzenle | Bulanıklaştırma fırçası yok, normal fotoğraf için arka plan bulanıklığı yok. |
| İşaretleme (Markup) | Kalem, fosforlu kalem, şekiller: kapatır, bulanıklaştırmaz. Fosforlu kalem yarı saydam. |
| Clean Up (Apple Intelligence) | iOS 26.1’den beri Türkçe; iPhone 15 Pro ve üstü. Nesneleri siler; bulanıklık veya mozaik aracı değildir. |
| Ayarlar → Duvar Kâğıdı | Duvar kâğıdını bulanıklaştırır, fotoğraflarını değil. |

## Site için ana mesajlar

1. Arka planı **çektikten sonra da** bulanıklaştır, Portre modu gerekmez.
2. Yüzler, plakalar, ekran görüntüsündeki yazılar: paylaşmadan önce gizlilik, **Apple Intelligence olmadan**, iOS 18.6 olan her iPhone’da.
3. Her şey cihazda: hiçbir şey yüklenmez.
4. Ücretsiz indir; gelişmiş özellikler isteğe bağlı uygulama içi satın alma — **asla fiyat yok**.
