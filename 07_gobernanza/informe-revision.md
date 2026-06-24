# Informe de revisión — Sistema de Diseño FUCAI

**Fecha:** 2026-06-24 · **Versión auditada:** v0.4.0 → **v1.0.0** · **Tipo:** auditoría pura (Fase 5/5).

Revisión completa del repositorio contra la lista de verificación de 12 puntos. No
se añadió contenido de marca nuevo: se verificó lo construido, se corrigió lo
inequívoco y se reportó lo demás.

## Resumen ejecutivo

Estado general: **sano y coherente.** La fuente de verdad (`03_tokens/`) es íntegra,
los temas son consistentes, las reglas duras se sostienen y los generadores corren y
pasan el QA.

- **Críticos:** 0
- **Medios:** 2 — **ambos corregidos automáticamente**
- **Menores:** 3 — 2 corregidos, 1 documentado como aceptable
- **Marcadores `[Pendiente]`:** ~35 — **todos esperados** (decisión humana, automatización diferida o bloqueo ambiental). **0 omisiones.**

## Hallazgos por severidad

### Críticos
Ninguno.

### Medios (corregidos)

**M1 — Git LFS no cubría las plantillas del skill.** `archivo: .gitattributes`
El patrón `assets/templates/**/*.docx|xlsx|pptx` estaba anclado a la raíz y **no**
casaba con las plantillas reales en `skill/fucai-branding/assets/templates/`
(`git check-attr` daba `unspecified`). Tres binarios de Office quedaban fuera de LFS.
→ **Corregido automáticamente:** se sustituyeron por reglas `*.docx`, `*.xlsx`,
`*.pptx` (los únicos binarios de Office del repo son plantillas/fuentes). `git
check-attr` ahora da `lfs` para las tres plantillas.

**M2 — Incoherencia en el número de secciones de Word.** `archivos:
04_componentes/documento/encabezado-acta.md, divisor-capitulo.md, CHANGELOG.md`
Algunas fichas afirmaban "**exactamente 2 secciones** (portada/cuerpo)", mientras
que `02_identidad-visual/espaciado-y-layout.md`, el skill y el **generador real**
(`assembleDoc` produce portada/cuerpo/contraportada = **3 secciones**, confirmado por
`check_fucai.py`: "Secciones: 3") indican **2–3**. La afirmación "2" contradecía la
fuente de verdad.
→ **Corregido automáticamente:** armonizado a "**2–3 secciones (portada, cuerpo,
contraportada)**" conservando la regla esencial intacta (los divisores de capítulo
son tablas en el cuerpo, **nunca** secciones nuevas).

### Menores

**m1 — Marcador `[GEN]` impreciso en la tabla principal de color.** `archivo:
02_identidad-visual/color.md` — el marcador decía "derivado de tokens.json" pero la
tabla incluye RGB/CMYK/Pantone, que **no** viven en `tokens.json` (solo el HEX).
→ **Corregido automáticamente:** marcador aclarado a "derivado de tokens.json
(color.* → HEX); RGB/CMYK/Pantone desde Manual v1.1". Además se hizo **robusto** el
detector de `scripts/build-skill.js` para aceptar marcadores con sufijos (sigue
contando 4 tablas en color.md).

**m2 — Referencias por nombre de archivo en vez de ruta repo-relativa.** `archivos:
varias fichas de 04, onboarding.md, CHANGELOG.md` — se citan archivos por su nombre
(p. ej. `fucai_docx.js`, `references/web.md`) en lugar de su ruta completa. **No son
enlaces rotos**: todos los archivos existen y el contexto los identifica.
→ **Revisión humana (opcional, estilístico).** No corregido: alto volumen de cambios
y ningún destino inexistente. Recomendación: en futuras ediciones, usar rutas
repo-relativas para navegación directa.

**m3 — HEX ilustrativo en la taxonomía.** `archivo: 03_tokens/taxonomia.md` — la línea
`color.naranja = "#E94513"` muestra un valor HEX como **ejemplo del formato** de un
token primitivo. Coincide con `tokens.json` y es pedagógico (no es una tabla de
valores que pueda derivar).
→ **Sin corrección (aceptable).** Documentado; cambiarlo restaría claridad.

## Resultado de la lista de verificación (12 puntos)

| # | Punto | Veredicto |
|---|-------|-----------|
| 1 | Integridad de tokens (refs, ciclos, 3 niveles, temas con mismas claves) | ✓ 60 tokens, 0 refs rotas, 4 temas con 19 claves idénticas |
| 2 | Coherencia de valores ([GEN] vs tokens; valores de marca correctos) | ✓ HEX/tamaños/espaciado de las tablas [GEN] coinciden; m1 aclarado |
| 3 | Reglas duras consistentes en todo el repo | ✓ tras corregir M2 (secciones) |
| 4 | Léxico ético | ✓ "beneficiarios"/"intervenir" solo como ejemplos del "no" |
| 5 | Referencias cruzadas y rutas | ✓ funciones de generador existen; archivos existen (ver m2) |
| 6 | Git LFS y binarios | ✓ tras corregir M1 |
| 7 | Estructura (árbol, sin huérfanas, .gitkeep) | ✓ único dir vacío: `02_identidad-visual/iconos/` con `.gitkeep` |
| 8 | Skill íntegro | ✓ 25 archivos, `SKILL.md` presente |
| 9 | Configuración (.gitignore, package.json, requirements.txt) | ✓ deps `docx` y `pptxgenjs` declaradas; `openpyxl` declarada |
| 10 | Compatibilidad técnica (docx, tokens, build-skill) | ✓ generadores corren; `check_fucai.py` PASS; contrato coherente |
| 11 | Pendientes (esperados vs omisiones) | ✓ ~35, todos esperados; 0 omisiones |
| 12 | Versionado / CHANGELOG | ✓ coherente; se publica v1.0.0 |

## Correcciones aplicadas (6 archivos)

1. `.gitattributes` — LFS cubre ahora todas las plantillas de Office (M1).
2. `04_componentes/documento/encabezado-acta.md` — "2 secciones" → "2–3" (M2).
3. `04_componentes/documento/divisor-capitulo.md` — "2 secciones" → "2–3" (M2).
4. `CHANGELOG.md` — "2 secciones" → "2–3 (portada/cuerpo/contraportada)" (M2).
5. `02_identidad-visual/color.md` — marcador `[GEN]` aclarado (m1).
6. `scripts/build-skill.js` — detector de `[GEN]` robusto a sufijos (m1).

## Pendientes: clasificación

**Todos ESPERADOS. Ninguna omisión** (cada fase entregó su alcance). Se agrupan así:

**A. Decisión estratégica/operativa de FUCAI (requieren dirección):**
misión, visión, valores, personalidad, posicionamiento y arquetipo
(`plataforma-de-marca.md`); perfiles de audiencia detallados; convenciones de
puntuación; política de localización; ampliación del glosario; catálogos de
microcopy; asignación de personas a roles; convención de etiquetas y publicación del
`.skill`; enlace al banco de fotos en Drive.

**B. Tokenización / automatización diferida por diseño (fases futuras):**
completar `build-skill.js`; rampas de data-viz; tokens de radio/sombra y de
movimiento; grilla/breakpoints; jerarquía H4–H6; grilla y librería de iconos;
colores de estado (éxito/error/alerta); catálogo ARIA por componente; builders
`actaHeader()`, `signatureTable()`, `chapterDivider()`; catálogo de vistas AppSheet;
set ilustrativo propio; versión monocromática y tamaño mínimo del logo.

**C. Bloqueo ambiental (documentado):**
los `.otf` de Space Grotesk no se descargaron porque el entorno bloquea
`raw.githubusercontent.com`; se entregaron `.ttf`/`.woff2` auténticos y el comando
para añadir el `.otf` (`02_identidad-visual/tipografia/FUENTES.md`).

## Puntos para revisión humana

1. **Capa estratégica (A):** redactar y validar misión, visión, valores,
   posicionamiento y arquetipo. Es la decisión institucional más importante pendiente.
2. **Roles de gobernanza:** asignar Dueño de marca y Mantenedores (`modelo-de-gobernanza.md`).
3. **Submarca Tienda:** confirmar contra el Manual los valores provisionales de
   terracota y ocre (`03_tokens/temas/tienda-fucai.json`).
4. **Estilo (m2):** decidir si se normalizan las referencias a rutas repo-relativas.
5. **Hoja de ruta técnica (B):** priorizar la implementación plena de `build-skill.js`
   y los tokens diferidos (radio/sombra/movimiento, data-viz, H4–H6).

## Veredicto

El sistema está **listo como v1.0.0**: íntegro, coherente y con la fuente de verdad
gobernando los valores. Los pendientes son trabajo de evolución previsto, no defectos.
