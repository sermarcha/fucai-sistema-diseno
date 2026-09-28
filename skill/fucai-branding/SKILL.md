---
name: fucai-branding
description: "Apply FUCAI institutional branding (design philosophy, colors, typography, logo, recurring components, voice & tone) to EVERY document and design. ALWAYS read and follow this skill whenever creating or editing ANY deliverable for FUCAI or Sergio — Word (.docx), Excel (.xlsx), PowerPoint (.pptx), Canva designs, Google Docs/Slides/Sheets, AppSheet apps, HTML/web artifacts, React components, social media graphics, email signatures, books and cartillas (libros, cartillas, publicaciones largas), and any other professional output. Trigger on: any document or design creation request, any mention of FUCAI, 'colores institucionales', 'marca FUCAI', 'identidad visual', 'logo FUCAI', 'presentación', 'informe', 'acta', 'presupuesto', 'libro', 'cartilla', 'publicación', or when the user asks for any document without specifying a different brand. Also trigger when writing text content for FUCAI to apply voice & tone. If in doubt, apply FUCAI branding — it is the default for ALL outputs."
---

# FUCAI Institutional Branding

Single source of truth for everything produced for **Fundación Caminos de Identidad (FUCAI)**, aligned to *Manual de Identidad Visual v1.1 (abril 2026)*.
**Version 3.3** (modular: lean overview + `references/` + executable `scripts/`; web, AppSheet, correo y publicaciones como referencias propias; sincronizado 2026-09 con el sistema de diseño: reglas de redes/carrusel 2026-07, prohibición de IA para personas, contrastes calculados, hover naranja oscuro).

> Firma: *Nuestro centro es la periferia* · www.fucaicolombia.org · comunicaciones@fucaicolombia.org · NIT 800.173.574-1

## ⛔ Reglas duras (no negociables — verifícalas siempre)
1. **Word/Docs: fondo de página blanco SIEMPRE** — portada Y contraportada incluidas. Nunca portada/contraportada naranja ni rellenos a sangre. (Fondos sólidos solo en diapositivas pptx/Slides de portada/sección/cierre.)
2. **Word: encabezado de solo texto, nunca imagen en header/footer** (evita el bug `rId0` que rompe el archivo). El logo va como imagen en el cuerpo.
3. **Word: 2–3 secciones** (portada/cuerpo/contraportada), nunca una por capítulo.
4. **Paleta 60-25-10-5:** 60% blanco/arena · 25% naranja `#E94513` · 10% verde `#2D6A4F` (solo territorio/naturaleza) · 5% negro/grises. Naranja y verde son acentos, nunca fondos generales.
5. **Space Grotesk solo para títulos; Calibri (Carlito) para cuerpo.**
6. **Slogan en cursiva** en pies/cierres; **www.fucaicolombia.org** en pies y comunicaciones externas.
7. **Voz:** sin palabras de la lista "evitar"; comunidades como protagonistas; idioma español por defecto.
8. **Tras generar un `.docx`, `.pptx` o `.xlsx`, corre `python3 scripts/check_fucai.py <archivo>` y haz QA visual** antes de entregar. El verificador comprueba que todo color explícito del artefacto sea un token.
9. **Imágenes generadas por IA: PROHIBIDO fabricar personas o comunidades.** No se inventan rostros ni escenas comunitarias: las comunidades protagonistas son reales. Fotos siempre reales, del banco autorizado, con consentimiento y color auténtico (sin duotonos naranjas). **Única excepción — el retrato ilustrado de una publicación:** parte de una fotografía real que la persona entregó, no altera sus rasgos, la persona lo aprueba antes de publicarse y se declara en el índice de ilustraciones (ver `references/libro-cartilla.md`).
10. **Redes: carrusel 1080×1350 con máximo 2 láminas intensas** (gancho y cierre); la proporción 60-25-10-5 se mide sobre el carrusel completo (ver `references/canva.md`).
11. **Tintes al 50 % (naranja claro `#F4A28A`, verde claro `#74B597`) solo como FONDO** con texto oscuro; nunca color de texto/ícono. Hover de acciones = naranja oscuro `#C13A10`.

## Filosofía de diseño (el lente de toda decisión)
Cinco atributos a la vez: **minimalista · que refuerza el posicionamiento · sofisticada · clara · cercana.**
Regla que los reconcilia: *color, ornamento y texto son escasos — y todo lo que queda está cargado de significado de marca. El espacio en blanco es el default; la marca es la señal.*
- **Minimalista:** un elemento focal por página; mucho aire; nada decorativo porque sí.
- **Refuerza posicionamiento:** lo que aparece carga marca — verde solo para territorio, un pilar en cada apertura, el slogan como firma discreta, comunidades como protagonistas.
- **Sofisticada:** espacio en blanco disciplinado + un solo acento naranja, no muros de color.
- **Clara:** lienzo blanco, jerarquía fuerte, una idea por sección, lenguaje sencillo.
- **Cercana:** calidez vía arena y fotografía (no vía más naranja), voz "junto al fuego".

Pilares (uno por sección, en cursiva): *Nuestro camino es la identidad · Nuestro centro es la periferia · Trabajo local, impacto global · Un discurso que se come, se bebe y se respira.* Metodología: **Ver–Juzgar–Actuar–Celebrar (VJACel)**.

## 🧭 Ruteo — según la tarea, lee la referencia y ejecuta el script
| Tarea | Referencia | Script ejecutable |
|-------|-----------|-------------------|
| Documento Word (.docx) | `references/docx.md` | `scripts/fucai_docx.js` · ejemplo `scripts/example_informe.js` · QA `scripts/check_fucai.py` |
| Presentación (.pptx) | `references/pptx.md` | `scripts/fucai_pptx.js` · ejemplo `scripts/example_presentacion.js` · QA `scripts/check_fucai.py` |
| Hoja de cálculo (.xlsx) | `references/xlsx.md` | `scripts/fucai_xlsx.py` · ejemplo `scripts/example_presupuesto.py` · QA `scripts/check_fucai.py` |
| Diseño en Canva | `references/canva.md` | (brand kit `kAGulOuplLw`) |
| Páginas del sitio web (Squarespace) · HTML/React | `references/web.md` | — |
| Aplicaciones AppSheet | `references/appsheet.md` | (fórmulas: skill `appsheet-fundacion-caminos-de-identidad`) |
| Libro, cartilla o publicación larga | `references/libro-cartilla.md` | (ilustración: `02_identidad-visual/ilustracion-editorial.md`) |
| Correo: notificación, boletín o firma | `references/email.md` | (notificaciones AppSheet: `04_componentes/appsheet/notificaciones-correo.md`) |
| Google Docs/Slides/Sheets | `references/gworkspace.md` | — |
| Detalle de color (tintes, rampas, combinaciones) | `references/color-system.md` | — |
| Tipografía y espaciado | `references/typography-layout.md` | — |
| Texto/comunicaciones (voz y tono) | `references/voice-tone.md` | — |
| Fotografía e ilustración | `references/photography.md` | — |
| Tienda FUCAI · Naane/CC217 (co-branding) | `references/subbrands.md` | — |

**Cómo construir un artefacto:** lee la referencia → ejecuta el script (no reescribas su código a mano) → corre el verificador de QA → QA visual. Los scripts resuelven la ruta de `assets/` por sí mismos (no hay marcador que sustituir).

**Plantillas listas** en `assets/templates/` (abrir y reemplazar textos, sin ejecutar nada): `FUCAI_Informe_Base.docx` (Word) · `FUCAI_Presupuesto_Base.xlsx` (Excel, con fórmulas) · `FUCAI_Presentacion_Base.pptx` (PowerPoint). Se regeneran con los scripts `example_*`.

## Paleta exprés (detalle en `references/color-system.md`)
Naranja `#E94513` · Arena `#EDE8D3` · Verde `#2D6A4F` (solo territorio) · Blanco `#FFFFFF` · Negro `#000000`. Tintes (solo fondos, texto oscuro encima): naranja claro `#F4A28A`, arena claro `#F6F3E9`, verde claro `#74B597`. Hover de acciones: naranja oscuro `#C13A10` (5.4:1 con blanco). Grises de soporte (no marca): `#333333 #666666 #CCCCCC`. Contraste: naranja↔blanco 3.9:1 solo para títulos grandes, nunca cuerpo.

## Tipografía exprés (detalle en `references/typography-layout.md`)
Títulos **Space Grotesk Bold**; cuerpo **Calibri** (Carlito en Canva, Roboto en AppSheet). Escala de espaciado: 4·8·12·16·24·32·48 pt. Un elemento focal por página; márgenes 2.5 cm / 1 in.

## Logo
`assets/logo_naranja.png` (fondos claros) · `assets/logo_blanco.png` (fondos oscuros/color). Unidad indivisible, proporción 2:1, escalar proporcionalmente. Encabezado ≈4 cm. Nunca deformar, rotar, recolorear (solo naranja o blanco) ni añadir efectos. Espacio de respeto = altura de la "F".

## Voz exprés (detalle en `references/voice-tone.md`)
Tono: sencillo, concreto, entusiasta, empoderador, realista, cercano. Voz activa; oraciones ≤25 palabras. Evita: beneficiarios, intervenir, ayudar (paternalista), asistir, llegar, víctimas, poblaciones vulnerables, salvar, civilizar. Comunidades como protagonistas; datos de impacto en cifra.

## Componentes de marca (en `fucai_docx.js`)
`voiceQuote()` Voz de la comunidad · `h1(texto, pilar)` apertura con pilar · `heroNumber()` dato héroe · banda arena de portada · barra naranja de contraportada.

## Firma de email
Borde izquierdo naranja de 3 px, 13 px de separación, 420 px de ancho máximo, y cuatro líneas: **Nombre Apellido** (14 px negrita) · **CARGO · FUCAI** (10 px, mayúsculas, naranja) · teléfono y `fucaicolombia.org` (12 px gris, URL en naranja) · *Nuestro centro es la periferia* (11 px cursiva).

**Sin logo en imagen ni banners:** el filete naranja es la marca. En respuestas y reenvíos, firma corta. El HTML listo para pegar en Gmail está en `references/email.md`.

## Reglas generales y nombres de archivo
- Aplica FUCAI por defecto salvo que se pida otra marca; sin azul/gris genérico.
- Salidas a la carpeta de entregables del entorno (p. ej. `outputs/`). Nombre: `FUCAI_TipoDocumento_Tema_AAAA-MM.ext` (ej. `FUCAI_Informe_Amazonas_2026-06.pdf`). Para CC217: prefijo `CC217_…`.
- Campos de proyecto/centro de costos: siempre texto abierto (CC216 Manos Unidas · CC217 Naane OIKOS-AICS · CC218 Misereor-KZE).

## Checklist de entrega
**Filosofía:** un elemento focal + aire (minimalista); slogan/pilar presente, verde solo territorio, comunidades protagonistas (posicionamiento).
**Visual:** logo correcto; Space Grotesk títulos / Calibri cuerpo; paleta 60-25-10-5; **Word blanco incl. portada y contraportada**; tablas con filetes horizontales; contraste ok; encabezado de solo texto.
**Verbal:** sin palabras "evitar"; voz activa; un pilar; slogan y URL donde corresponda.
**Fiabilidad (docx):** `check_fucai.py` en verde; abre en Word/Pages; 2–3 secciones.
**Final:** nombre con fecha; fuentes incrustadas si es PDF.
