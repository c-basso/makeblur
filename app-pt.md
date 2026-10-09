# Desfocar o Fundo de uma Foto (MakeBlur) — App Store (Brasil), fonte para /pt/

Dados da página da App Store brasileira (`apps.apple.com/br/app/id6749166426`) e da iTunes Lookup API (`country=br&lang=pt_br`) em **9 de outubro de 2026**. Marca do site: **Make Blur** (`makeblur.com/pt/`); na descrição o app se chama **MakeBlur**.

**Variante:** o /pt/ é escrito em **português do Brasil** (decisão do proprietário, out/2026): `pt/queries.csv` é do Google Trends Brasil e o Brasil é o maior mercado. A App Store de Portugal tem outra localização («Desfocar foto e fundo», 0 avaliações); não é usada aqui.

Não inventar avaliações, downloads ou resenhas. No Brasil o app tem **3 avaliações (média 4)**: poucas demais, **não exibir**. A capa mostra louros com «Milhares de downloads»: **não usar no site**.

---

## Identidade

| Campo | Valor |
| --- | --- |
| Nome (BR) | **Desfocar o Fundo de uma Foto** |
| Subtítulo (BR) | Desfoque de imagem e retrato |
| Na descrição | MakeBlur |
| Nome em Portugal | Desfocar foto e fundo (não usado) |
| App Store ID | `6749166426` |
| URL | https://apps.apple.com/br/app/id6749166426 (no site: link genérico `https://apps.apple.com/app/id6749166426`) |
| Desenvolvedor | Vladimir Ivakhnenko |
| Marca do site | Make Blur |
| Categoria | Artes gráficas e design (secundária: Foto e vídeo) |
| Preço | Grátis, com compras dentro do app («Desfocar o Fundo de uma Foto»). **Nenhum preço no site.** |
| Classificação | 4+ |
| Versão | 1.16.4 — correções de bugs e melhorias na interface |
| Tamanho | 25,7 MB |
| Compatibilidade | **iOS 18.6 ou posterior**, só iPhone |
| Idiomas | Português e mais 28 |
| Avaliações BR | 3 (média 4) — não exibir |
| Processamento | No aparelho, sem internet; as fotos não são enviadas a servidores |
| Termos | https://makeblur.com/terms.html |
| Privacidade | https://makeblur.com/privacy.html |

### Capturas de tela (BR, localizadas)

Pasta `img/appstore/pt/` (WebP 720×1558, qualidade 0,72).

| Arquivo | Título (literal) | Ajustes visíveis |
| --- | --- | --- |
| `01-cover.webp` | **DESFOCA — FUNDOS E ROSTOS** (louros «Milhares de downloads»: não usar) | — |
| `02-motion.webp` | **COLOCA — MOTION BLUR PARA A AÇÃO** | Background + Motion, Radius 65 |
| `03-face.webp` | **OCULTA — ROSTOS ANTES DO POST** | Faces, Radius 80, Angle 32° |
| `04-box.webp` | **FOCUS — SUJEITO NÍTIDO, DESFOCA O RESTO** | Background + Box |
| `05-crystalize.webp` | **APLICA — MOSAICO PIXEL EM UM TOQUE** | Background + Crystallize |
| `06-ghost.webp` | **CRIA — EFEITO SUAVE COM BOKEH** | Full Photo + Ghosting, Radius 79 |

Caminhos mzstatic (prefixo `https://is1-ssl.mzstatic.com/image/thumb/`, sufixo `/720x1558bb.png`):

| Arquivo | Caminho |
| --- | --- |
| 01 | `PurpleSource211/v4/92/aa/93/92aa936a-fdb8-1a94-39bd-07f62f286121/1_cover_12_framed.png` |
| 02 | `PurpleSource211/v4/4d/57/5a/4d575aa7-30f0-c979-3c4b-9aee0dba02a5/2_motion_12_framed.png` |
| 03 | `PurpleSource221/v4/81/49/e7/8149e730-b84f-4b0b-251b-cf39ff168988/3_face_12_framed.png` |
| 04 | `PurpleSource221/v4/38/6d/44/386d4434-28ed-3808-d995-6e15d1532ae9/4_box_12_framed.png` |
| 05 | `PurpleSource211/v4/94/b4/a7/94b4a7ea-5dbb-6628-43e3-845665b75b8a/5_crys_12_framed.png` |
| 06 | `PurpleSource211/v4/70/32/f3/7032f341-1287-2ef9-a8bf-f9fbfe77079c/6_ghost_12_framed.png` |

### Interface do app (como nas capturas)

A interface nas capturas está **em inglês**; os guias citam os rótulos como aparecem, com explicação em português na primeira menção:

- Barra superior: **Close** (fechar) · **Save** (salvar)
- Abas: **Background** (fundo) · **Full Photo** (foto inteira) · **Faces** (rostos) · **Manual** (pincel)
- Estilos: **Motion** · **Gaussian** · **Ghosting** · **Box** · **Pixelate** · **Hexagonal** · **Crystallize**
- Controles: **Radius** (intensidade) · **Angle** (direção, no Motion)

Se a versão brasileira do app traduzir os rótulos, atualizar `build/guides/pt/*.json` e `build/pt.json`.

---

## Descrição da App Store (Brasil) — estrutura e conteúdo

Resumo da descrição brasileira (não copiar o texto da loja no site; usar como fonte dos fatos).

Seções: **O QUE ESTE APP FAZ · PARA QUEM É ESTE APP · COMO USAR O APP · PRINCIPAIS RECURSOS · EXEMPLOS DE USO · TIPO DE APP E PLATAFORMA · PREÇO E DADOS**.

Afirmações principais:

- Detecta automaticamente o sujeito principal e o mantém nítido; desfoca o fundo.
- Intensidade do desfoque ajustável.
- Efeitos de mosaico e pixelização; motion blur e desfoque gaussiano.
- Opção de desfocar rostos.
- Detecção de bordas para separar sujeito e fundo.
- Editor simples, sem experiência em design.
- Funciona com a fototeca do iPhone, processamento no aparelho, sem internet.
- Compras dentro do app para recursos premium (opcionais).

## O que o iPhone faz sozinho (contexto para os guias)

| Ferramenta | Limite |
| --- | --- |
| Modo Retrato (Câmera) | Só na hora da foto; depois, em Fotos → Editar, ajusta a profundidade. Fotos comuns não têm dados de profundidade. |
| App Fotos → Editar | Sem pincel de desfoque, sem desfoque de fundo para fotos comuns. |
| Marcação | Caneta, marca-texto e formas: cobre, não desfoca. O marca-texto é semitransparente. |
| Limpeza (Apple Intelligence) | A partir do iPhone 15 Pro, iOS 18.4+ em português. Remove objetos; pode pixelizar um rosto circulado. Um de cada vez. |
| Ajustes → Imagem de Fundo | Desfoca o papel de parede, não as fotos. |

## Mensagens-chave para o site

1. Desfocar o fundo **depois da foto**, sem Modo Retrato.
2. Rostos, placas, texto em prints: privacidade antes de postar, **sem Apple Intelligence**, em qualquer iPhone com iOS 18.6.
3. Tudo no aparelho: nenhum envio.
4. Grátis para baixar; recursos avançados opcionais via compras dentro do app — **nunca preços**.
