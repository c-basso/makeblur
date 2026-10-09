# 모자이크 배경 흐림 및 흐림 처리 (MakeBlur) — App Store (한국), /ko/ 원천 자료

한국 App Store 페이지(`apps.apple.com/kr/app/id6749166426`)와 iTunes Lookup API(`country=kr&lang=ko_kr`)에서 **2026년 10월 9일** 수집. 사이트 브랜드: **Make Blur**(`makeblur.com/ko/`). 설명문 속 앱 이름은 **MakeBlur**.

평점·다운로드 수·리뷰를 지어내지 말 것. 한국 스토어 평점은 **2개(5.0)**: 너무 적어서 **표시하지 않음**. 커버의 월계관 「Loved by users」는 **사이트에 사용하지 않음**.

---

## 기본 정보

| 항목 | 값 |
| --- | --- |
| 앱 이름 (KR) | **모자이크 배경 흐림 및 흐림 처리** |
| 설명문 내 이름 | MakeBlur |
| App Store ID | `6749166426` |
| URL | https://apps.apple.com/kr/app/id6749166426 (사이트에서는 범용 링크 `https://apps.apple.com/app/id6749166426`) |
| 개발자 | Vladimir Ivakhnenko |
| 사이트 브랜드 | Make Blur |
| 카테고리 | 그래픽 및 디자인 (보조: 사진 및 비디오) |
| 가격 | 무료, 앱 내 구입 있음. **사이트에 가격 표시 금지.** |
| 연령 | 4+ |
| 버전 | 1.16.4 — 버그 수정 및 UI 개선 |
| 크기 | 25.7MB |
| 호환성 | **iOS 18.6 이상**, iPhone 전용 |
| 언어 | 한국어 외 28개 |
| 평점 (KR) | 2개 (5.0) — 표시하지 않음 |
| 처리 | 기기 내, 오프라인. 사진을 서버로 보내지 않음 |
| 이용약관 | https://makeblur.com/terms.html |
| 개인정보 처리방침 | https://makeblur.com/privacy.html |

### 스크린샷 (KR 스토어 — 영어 버전)

폴더 `img/appstore/ko/` (WebP 720×1558, 품질 0.72). **한국 스토어 스크린샷은 현지화되지 않은 영어 버전**입니다. 사이트 캡션은 한국어로 번역해 사용합니다. 한국어 스크린샷을 올리면 같은 경로로 다시 내려받을 것.

| 파일 | 헤드라인 (원문) | 사이트 캡션 | 보이는 설정 |
| --- | --- | --- | --- |
| `01-cover.webp` | **BLUR — BACKGROUND AND FACES** («Loved by users» 월계관: 사용 안 함) | — | — |
| `02-motion.webp` | **ADD — MOTION BLUR TO ACTION SHOTS** | 액션 사진에 모션 블러 | Background + Motion, Radius 65 |
| `03-face.webp` | **HIDE — FACES BEFORE YOU SHARE** | 공유 전에 얼굴 가리기 | Faces, Radius 80, Angle 32° |
| `04-box.webp` | **FOCUS — ON THE SUBJECT, BLUR THE REST** | 주인공은 선명하게, 나머지는 흐리게 | Background + Box |
| `05-crystalize.webp` | **APPLY — PIXEL PRIVACY IN ONE TAP** | 탭 한 번으로 모자이크 | Background + Crystallize |
| `06-ghost.webp` | **CREATE — SOFT VIBES WITH BOKEH** | 부드러운 보케 감성 | Full Photo + Ghosting, Radius 79 |

mzstatic 경로 (접두사 `https://is1-ssl.mzstatic.com/image/thumb/`, 접미사 `/720x1558bb.png`):

| 파일 | 경로 |
| --- | --- |
| 01 | `PurpleSource211/v4/b9/99/d2/b999d2b8-bffa-9c81-f639-e47d005bd8ef/1_cover_12_framed.png` |
| 02 | `PurpleSource211/v4/4f/5f/7c/4f5f7c08-5c65-5319-175a-cde81554feb2/2_motion_12_framed.png` |
| 03 | `PurpleSource221/v4/d2/93/e8/d293e8b7-f397-45f7-2b19-5476b188f7e4/3_face_12_framed.png` |
| 04 | `PurpleSource211/v4/42/8a/80/428a80f3-efd6-7c67-5e9e-1d09f820b5f1/4_box_12_framed.png` |
| 05 | `PurpleSource211/v4/0e/39/af/0e39af1d-d258-19de-6c9d-9a0c9ee5e01b/5_crys_12_framed.png` |
| 06 | `PurpleSource211/v4/a9/3c/83/a93c83ff-0d2b-3414-678e-4c18a091a0cf/6_ghost_12_framed.png` |

### 앱 화면 표기 (스크린샷 기준)

스크린샷의 UI는 **영어**입니다. 가이드는 화면에 보이는 표기를 그대로 쓰고, 처음 나올 때 한국어로 설명합니다:

- 상단 바: **Close**(닫기) · **Save**(저장)
- 탭: **Background**(배경) · **Full Photo**(사진 전체) · **Faces**(얼굴) · **Manual**(브러시)
- 스타일: **Motion** · **Gaussian** · **Ghosting** · **Box** · **Pixelate** · **Hexagonal** · **Crystallize**
- 슬라이더: **Radius**(강도) · **Angle**(Motion의 방향)

한국어 앱에서 표기가 번역되면 `build/guides/ko/*.json`과 `build/ko.json`을 갱신할 것.

---

## App Store 설명문 (한국) — 구성과 내용

한국어 설명문 요약 (스토어 문구를 사이트에 그대로 옮기지 말고 사실 확인용으로만 사용).

섹션: **이 앱으로 할 수 있는 것 · 이런 분께 · 사용 방법 · 주요 기능 · 활용 예 · 작동 방식 · 요금 및 데이터**.

주요 내용:

- 사진 배경을 강도 조절하며 흐리게, 또는 모자이크·픽셀 효과로.
- 주 피사체를 자동 감지해 배경과 분리.
- 세밀한 조정을 위한 브러시 마스크, 배경만 흐리게 하는 아웃포커스 필터.
- 기기 안에서 처리, 흐림 처리 시 사진을 외부 서버로 업로드하지 않음.

## 아이폰 기본 기능으로 할 수 있는 것 (가이드 전제)

| 기능 | 한계 |
| --- | --- |
| 인물 사진 모드 (카메라) | 촬영할 때만. 이미 찍은 인물 사진은 「사진」→편집→「f」로 심도 조절. 일반 사진에는 심도 정보 없음. |
| 「사진」 앱 → 편집 | 블러 브러시 없음, 일반 사진 배경 흐림 없음. |
| 마크업 | 펜·형광펜·도형: 가리기만 하고 흐리게 못 함. 형광펜은 반투명. |
| 클린업 (Apple Intelligence) | iPhone 15 Pro 이상, iOS 18.4부터 한국어 지원. 원치 않는 물체·사람을 지우는 도구로, 블러·모자이크 도구가 아님. |
| 설정 → 배경화면 | 배경화면 흐림일 뿐 사진이 아님. |

## 사이트 핵심 메시지

1. **찍은 후에도** 배경 흐리게(아웃포커싱). 인물 사진 모드 필요 없음.
2. 얼굴·번호판·캡처 속 글자: 올리기 전 개인정보 보호를 **Apple Intelligence 없이**, iOS 18.6 이상 모든 아이폰에서.
3. 모두 기기 안에서: 업로드 없음.
4. 무료 다운로드, 고급 기능은 선택형 앱 내 구입 — **가격은 절대 표시하지 않음**.
