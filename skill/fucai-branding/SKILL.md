---
name: fucai-branding
description: "Apply FUCAI institutional branding (design philosophy, colors, typography, logo, recurring components, voice & tone) to EVERY document and design. ALWAYS read and follow this skill whenever creating or editing ANY deliverable for FUCAI or Sergio — Word (.docx), Excel (.xlsx), PowerPoint (.pptx), Canva designs, Google Docs/Slides/Sheets, AppSheet apps, HTML/web artifacts, React components, social media graphics, email signatures, and any other professional output. Trigger on: any document or design creation request, any mention of FUCAI, 'colores institucionales', 'marca FUCAI', 'identidad visual', 'logo FUCAI', 'presentación', 'informe', 'acta', 'presupuesto', or when the user asks for any document without specifying a different brand. Also trigger when writing text content for FUCAI to apply voice & tone. If in doubt, apply FUCAI branding — it is the default for ALL outputs."
---

# FUCAI Institutional Branding

Single source of truth for everything produced for **Fundación Caminos de Identidad (FUCAI)**, aligned to *Manual de Identidad Visual v1.1 (abril 2026)*.
**Version 3.1** (modular: lean overview + `references/` + executable `scripts/`; web y AppSheet como referencias propias).

> Firma: *Nuestro centro es la periferia* · www.fucaicolombia.org · comunicaciones@fucaicolombia.org · NIT 800.173.574-1

## ⛔ Reglas duras (no negociables — verifícalas siempre)
1. **Word/Docs: fondo de página blanco SIEMPRE** — portada Y contraportada incluidas. Nunca portada/contraportada naranja ni rellenos a sangre. (Fondos sólidos solo en diapositivas pptx/Slides de portada/sección/cierre.)
2. **Word: encabezado de solo texto, nunca imagen en header/footer** (evita el bug `rId0` que rompe el archivo). El logo va como imagen en el cuerpo.
3. **Word: 2–3 secciones** (portada/cuerpo/contraportada), nunca una por capítulo.
4. **Paleta 60-25-10-5:** 60% blanco/arena · 25% naranja `#E94513` · 10% verde `#2D6A4F` (solo territorio/naturaleza) · 5% negro/grises. Naranja y verde son acentos, nunca fondos generales.
5. **Space Grotesk solo para títulos; Calibri (Carlito) para cuerpo.**
6. **Slogan en cursiva** en pies/cierres; **www.fucaicolombia.org** en pies y comunicaciones externas.
7. **Voz:** sin palabras de la lista "evitar"; comunidades como protagonistas; idioma español por defecto.
8. **Tras generar un .docx, corre `python3 scripts/check_fucai.py <archivo>` y haz QA visual en PDF** antes de entregar.

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
| Presentación (.pptx) | `references/pptx.md` | `scripts/fucai_pptx.js` · ejemplo `scripts/example_presentacion.js` |
| Hoja de cálculo (.xlsx) | `references/xlsx.md` | `scripts/fucai_xlsx.py` · ejemplo `scripts/example_presupuesto.py` |
| Diseño en Canva | `references/canva.md` | (brand kit `kAGulOuplLw`) |
| Páginas del sitio web (Squarespace) · HTML/React | `references/web.md` | — |
| Aplicaciones AppSheet | `references/appsheet.md` | (fórmulas: skill `appsheet-fundacion-caminos-de-identidad`) |
| Google Docs/Slides/Sheets | `references/gworkspace.md` | — |
| Detalle de color (tintes, rampas, combinaciones) | `references/color-system.md` | — |
| Tipografía y espaciado | `references/typography-layout.md` | — |
| Texto/comunicaciones (voz y tono) | `references/voice-tone.md` | — |
| Fotografía e ilustración | `references/photography.md` | — |
| Tienda FUCAI · Naane/CC217 (co-branding) | `references/subbrands.md` | — |

**Cómo construir un artefacto:** lee la referencia → ejecuta el script (no reescribas su código a mano) → corre el verificador de QA → QA visual. Los scripts resuelven la ruta de `assets/` por sí mismos (no hay marcador que sustituir).

**Plantillas listas** en `assets/templates/` (abrir y reemplazar textos, sin ejecutar nada): `FUCAI_Informe_Base.docx` (Word) · `FUCAI_Presupuesto_Base.xlsx` (Excel, con fórmulas) · `FUCAI_Presentacion_Base.pptx` (PowerPoint). Se regeneran con los scripts `example_*`.

## Paleta exprés (detalle en `references/color-system.md`)
Naranja `#E94513` · Arena `#EDE8D3` · Verde `#2D6A4F` (solo territorio) · Blanco `#FFFFFF` · Negro `#000000`. Tintes: naranja claro `#F4A28A`, arena claro `#F6F3E9`, verde claro `#74B597`. Grises de soporte (no marca): `#333333 #666666 #CCCCCC`. Contraste: naranja↔blanco 3.1:1 solo para títulos grandes, nunca cuerpo.

## Tipografía exprés (detalle en `references/typography-layout.md`)
Títulos **Space Grotesk Bold**; cuerpo **Calibri** (Carlito en Canva, Roboto en AppSheet). Escala de espaciado: 4·8·12·16·24·32·48 pt. Un elemento focal por página; márgenes 2.5 cm / 1 in.

## Logo
`assets/logo_naranja.png` (fondos claros) · `assets/logo_blanco.png` (fondos oscuros/color). Unidad indivisible, proporción 2:1, escalar proporcionalmente. Encabezado ≈4 cm. Nunca deformar, rotar, recolorear (solo naranja o blanco) ni añadir efectos. Espacio de respeto = altura de la "F".

## Voz exprés (detalle en `references/voice-tone.md`)
Tono: sencillo, concreto, entusiasta, empoderador, realista, cercano. Voz activa; oraciones ≤25 palabras. Evita: beneficiarios, intervenir, ayudar (paternalista), asistir, llegar, víctimas, poblaciones vulnerables, salvar, civilizar. Comunidades como protagonistas; datos de impacto en cifra.

## Componentes de marca (en `fucai_docx.js`)
`voiceQuote()` Voz de la comunidad · `h1(texto, pilar)` apertura con pilar · `heroNumber()` dato héroe · banda arena de portada · barra naranja de contraportada.

## Firma de email
```
Nombre Apellido
Cargo | Fundación Caminos de Identidad — FUCAI
www.fucaicolombia.org
Nuestro centro es la periferia
```

## Reglas generales y nombres de archivo
- Aplica FUCAI por defecto salvo que se pida otra marca; sin azul/gris genérico.
- Salidas a `/mnt/user-data/outputs/`. Nombre: `FUCAI_TipoDocumento_Tema_AAAA-MM.ext` (ej. `FUCAI_Informe_Amazonas_2025-04.pdf`).
- Campos de proyecto/centro de costos: siempre texto abierto (CC216 Manos Unidas · CC217 Naane OIKOS-AICS · CC218 Misereor-KZE).

## Checklist de entrega
**Filosofía:** un elemento focal + aire (minimalista); slogan/pilar presente, verde solo territorio, comunidades protagonistas (posicionamiento).
**Visual:** logo correcto; Space Grotesk títulos / Calibri cuerpo; paleta 60-25-10-5; **Word blanco incl. portada y contraportada**; tablas con filetes horizontales; contraste ok; encabezado de solo texto.
**Verbal:** sin palabras "evitar"; voz activa; un pilar; slogan y URL donde corresponda.
**Fiabilidad (docx):** `check_fucai.py` en verde; abre en Word/Pages; 2–3 secciones.
**Final:** nombre con fecha; fuentes incrustadas si es PDF.
