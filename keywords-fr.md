# Recherche de mots-clés — makeblur.com/fr/ (octobre 2026)

Objectif : se positionner sur Google (France, Belgique, Suisse, Canada) pour les recherches de personnes qui **ont déjà une photo sur leur iPhone et veulent en flouter une partie maintenant**. Ces recherches se transforment en téléchargements. Exclus : vidéo, Zoom/Teams, « supprimer l'arrière-plan », Photoshop, « rendre une photo floue nette ».

Sources (par fiabilité) :

1. `fr/queries.csv` — Google Trends, sujet *blur*, France, 16/01/2025–16/01/2026 : to blur 100, the blur 74, **motion blur 71**, blur background 54, easy blur 46 (maquillage), blur image 44, blur effect 39, blur photo 32, le blur 27 ; en hausse : **how to blur a picture on iphone +140 %**, **blur face +50 %**.
2. Fiche App Store FR : « Arrière Plan Flou Photo », sous-titre « Fond adouci, sujet net » (`app-fr.md`).
3. Vérification manuelle des SERP (octobre 2026) : iphonesoft (Clean Up), lecafedugeek, iautos (plaques), CNIL, caroom ; beaucoup de contenus traduits ou orientés outils web.
4. Fonctions réelles : onglets Background / Full Photo / Faces / Manual ; styles Gaussian, Motion, Ghosting, Box, Pixelate, Hexagonal, Crystallize.

Pas d'outil payant (Semrush, Ahrefs, Keyword Planner) dans cette session : **volumes = estimations par tranches** ; les données relatives de Trends sont réelles. À vérifier dans Keyword Planner.

**Note de langue :** en France, beaucoup tapent en anglais (« motion blur », « blur face », « le blur »). Les pages utilisent le terme français en H1/titre et l'anglais comme synonyme dans le texte. « easy blur » = produit de maquillage : exclu.

---

## 1. Qui convertit, qui ne convertit pas

| Convertit | Pourquoi | Ne convertit pas | Pourquoi |
| --- | --- | --- | --- |
| « flouter l'arrière-plan d'une photo iPhone » après coup | Mode Portrait oublié ou raté | « flouter arrière-plan Photoshop / Canva / en ligne » | Ordinateur / web |
| « flouter un visage », « blur face » (+50 %) | Vie privée avant publication ; Clean Up seulement iPhone 15 Pro+ | « flouter une vidéo », « CapCut » | App photo uniquement |
| « flouter plaque d'immatriculation » (Leboncoin, La Centrale) | Tâche précise, concurrence faible | « supprimer l'arrière-plan », « détourer » | Autre tâche |
| « masquer texte capture d'écran » | Conversations, adresses, commandes | « rendre une photo floue nette », « déflouter » | Tâche inverse |
| « motion blur », « effet bokeh », « flou gaussien » | Effet présent dans l'app | « easy blur », « blur primer » | Maquillage |
| « application pour flouter l'arrière-plan iPhone » | Commercial | « the blur », « blur groupe » | Musique |

---

## 2. Mots-clés principaux (la home /fr/ porte le cluster)

| Mot-clé | Est. mensuelle (FR+BE+CH+CA) | Intention | Notes |
| --- | --- | --- | --- |
| flouter l'arrière-plan d'une photo | 5k–15k | commerciale/how-to | Titre + H1 de la home. |
| flouter le fond d'une photo / fond flou | 3k–10k | how-to | Synonyme (« fond » plus familier). Guide 2. |
| arrière-plan flou (photo) | 2k–6k | familière | **= nom de l'app**. Guide 3. |
| flouter arrière-plan iPhone | 1k–5k | **forte** | Home + guide 1. |
| motion blur / effet flou | 5k–15k (souvent en anglais) | effet | Trends FR : motion blur 71, blur effect 39. Guides 11–12. |
| flouter une photo iPhone | 1k–5k (+140 % sur la requête anglaise) | how-to | Guide 10. |
| flouter un visage / blur face | 2k–6k (+50 %) | vie privée | Guide 5. |
| application pour flouter l'arrière-plan | 1k–3k | commerciale | Guide 4. |

Titre home : **« Flouter l'arrière-plan d'une photo sur iPhone | Make Blur »** (≤60). H1 : « Floutez l'arrière-plan d'une photo — après la prise de vue ».

---

## 3. Longue traîne → un guide par mot-clé

Règle : un mot-clé principal par URL (H1, `<title>`, 100 premiers mots, slug). D'abord la réponse honnête (ce que fait l'iPhone seul), ensuite les gestes exacts dans l'app.

| # | Mot-clé principal | Est. mensuelle | Mode | URL (`/fr/…`) | Pourquoi ça convertit |
| --- | --- | --- | --- | --- | --- |
| 1 | comment flouter l'arrière-plan d'une photo sur iPhone | 2k–6k | Background | `flouter-arriere-plan-photo-iphone.html` | How-to principal ; la SERP répond « mode Portrait ». |
| 2 | flouter le fond d'une photo | 2k–8k | Background | `flouter-fond-photo.html` | Formulation familière, « je veux le résultat ». Couvre « fond flou » en H2. |
| 3 | arrière-plan flou photo | 1k–4k | Background | `arriere-plan-flou-photo.html` | Nom de l'app ; angle débutant : intensité 30/60/90. |
| 4 | application pour flouter l'arrière-plan sur iPhone | 1k–3k | App entière | `application-flouter-arriere-plan-iphone.html` | Bas de funnel ; comparaison honnête avec les options natives. |
| 5 | comment flouter un visage sur une photo | 2k–6k | Faces | `flouter-visage-photo.html` | « blur face » +50 % ; Clean Up limité aux iPhone 15 Pro+. |
| 6 | flouter une partie d'une photo sur iPhone | 1k–3k | Manual | `flouter-partie-photo-iphone.html` | Photos n'a pas de pinceau de flou. |
| 7 | flouter une plaque d'immatriculation sur une photo | 1k–3k | Manual + Pixelate | `flouter-plaque-immatriculation-photo.html` | Leboncoin, La Centrale, ParuVendu ; usurpation de plaques. |
| 8 | masquer un texte sur une capture d'écran | 1k–3k | Manual + Pixelate | `masquer-texte-capture-ecran-iphone.html` | Le feutre d'Annoter est semi-transparent. |
| 9 | pixeliser une photo sur iPhone | 500–2k | Pixelate | `pixeliser-photo-iphone.html` | « Mosaïque et pixel » dans la fiche ; capture « Pixel privacy ». |
| 10 | comment flouter une photo sur iPhone | 1k–5k | Full Photo / tous | `flouter-photo-iphone.html` | Requête « how to blur a picture on iphone » +140 % ; photo entière. |
| 11 | effet flou photo | 1k–4k | Tous les styles | `effet-flou-photo.html` | Expression de la fiche ; « blur effect » 39 ; page parapluie des styles. |
| 12 | motion blur photo (effet de mouvement) | 2k–6k | Motion | `motion-blur-photo.html` | Trends FR 71 : le terme le plus fort du sujet. |
| 13 | effet bokeh iPhone | 1k–3k | Background + Gaussian | `effet-bokeh-iphone.html` | Capture « Doux vibes avec bokeh ». |
| 14 | flou gaussien | 500–2k | Gaussian | `flou-gaussien-iphone.html` | Nom du filtre. |

### Étudiés et écartés

| Mot-clé | Raison |
| --- | --- |
| flouter photo en ligne / gratuit sans app | Seul l'éditeur web limité (photo entière) ; pas de nouvelles pages web (`CONTENT_NOTES.md`). |
| flouter une vidéo | App photo uniquement. |
| supprimer / détourer l'arrière-plan | Autre tâche. |
| rendre une photo floue nette | Tâche inverse. |
| fond flou (page dédiée) | Même intention que #2 → H2 dans #2. |
| flouter l'arrière-plan sans mode portrait | Même intention que #1 → H2 dans #1. |

---

## 4. Carte de cannibalisation

| Cluster | Pages | Angle propre |
| --- | --- | --- |
| Arrière-plan, how-to iPhone | 1, 3 | 1 = après la prise de vue / sans mode Portrait ; 3 = débutant, quelle intensité |
| Arrière-plan, commercial | 2, 4 | 2 = résultat pour réseaux/profil ; 4 = comparer les méthodes |
| Vie privée | 5, 6, 7, 8, 9 | visages (auto) / zone libre / plaque / texte / pixelisation |
| Photo entière | 10, 11 | flouter toute la photo / l'effet flou expliqué |
| Effets | 12, 13, 14 | mouvement / bokeh / gaussien |

## 5. Modèle on-page

- `<title>` 50–60 caractères, mot-clé en tête, « iPhone » s'il est dans la requête.
- Meta description 150–160 : mot-clé + « après la prise de vue » ou vie privée + « gratuit ».
- H1 = la question telle qu'elle est tapée. Premier paragraphe : réponse directe de 40–60 mots.
- Bloc « Ce que fait l'iPhone tout seul » (Portrait, Annoter, Clean Up et leurs limites).
- Étapes dans l'app avec les libellés réels.
- Conseils (3) + FAQ (3–4) → FAQPage ; HowTo + Article + Breadcrumb générés par le build.

## 6. FAQ de la home → guide

Chaque question de la FAQ est une recherche réelle ; « En savoir plus » renvoie au guide propriétaire du mot-clé (`build/fr.json` → `seo.faq[].guide_keyword`).
