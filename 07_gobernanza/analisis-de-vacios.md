# Análisis detallado de vacíos — Sistema de Diseño FUCAI

**Fecha:** 2026-06-25 · **Estado del repo:** `v1.7.0` + commit `672e9a3` (migración a Git LFS).
Búsqueda exhaustiva de huecos: no solo los marcadores `[Pendiente]`/`[POR CONFIRMAR]`
(38 en 24 archivos), sino inconsistencias, dependencias ausentes, deuda técnica y de
proceso. Severidad: **A** alto · **M** medio · **B** bajo. Tipo: **decisión** (humana
de FUCAI) · **deuda** (técnica, implementable).

> **Actualización 2026-06-25 (pendiente de commit).** Resueltos con información oficial
> de FUCAI y trabajo técnico: ✅ posicionamiento, arquetipo y personalidad de marca
> (`plataforma-de-marca.md`) · ✅ audiencias — 3 grupos oficiales (`audiencias.md`) ·
> ✅ narrativa, diferenciadores, lucha y pitch · ✅ dependencia `naane-branding`
> (copiada a `skill/naane-branding/`) · ✅ CI (`.github/workflows/ci.yml`) · ✅ tokens
> reservados documentados. **Siguen abiertos:** builders docx, QA pptx/xlsx, logo
> mono/SVG/tamaño mín., iconos, colores de estado, H4–H6/rem, grilla/breakpoints,
> alineación de léxico de textos oficiales, política de localización, LICENSE, URL del repo.

## 0. Git / LFS / versión (proceso)

- ✅ **Git LFS quedó activo:** los 16 binarios (logos, fuentes, plantillas) están como
  punteros LFS y todos los cubre `.gitattributes`. Cierra una deuda previa.
- **(B · deuda)** El commit `672e9a3` ("descripción del cambio") **no sigue** la
  convención de commits de `CONTRIBUTING.md`, **no subió versión** (sigue 1.7.0), **no
  tiene tag** ni entrada en `CHANGELOG.md`. → versionar/etiquetar y registrar el cambio.
- **(B · deuda)** Verificar que el **remoto/host soporte LFS** al hacer `push` (GitHub
  lo soporta; otros host pueden requerir configuración/cuota).

## 1. Capa estratégica (01_fundamentos)

- **(A · decisión)** **Posicionamiento formal** (declaración "Para X, FUCAI es Y que
  Z"), **arquetipo de marca** y **enunciado de personalidad** de una frase: siguen como
  `[Pendiente]` en `plataforma-de-marca.md`. Misión/Visión/Valores ya están.
- **(M · decisión)** **Perfiles de audiencia detallados** (necesidades, canales,
  objeciones) en `audiencias.md`: hoy es síntesis, no investigación de públicos.

## 2. Lenguaje y voz (05_contenido-lenguaje)

- **(M · decisión)** **"familias acompañadas"**: término solicitado pero **no aparece
  verbatim** en el skill ni en el repo; confirmar si reemplaza o convive con
  "comunidades participantes/protagonistas". (En `DESIGN.md` y léxico.)
- **(M · decisión)** **Política de localización**: qué piezas se traducen y a qué
  lenguas (Wayuunaiki u otras), flujo y responsables (`localizacion.md`).
- **(B · decisión)** Convenciones de **puntuación** (comillas «» vs " ") en `guia-editorial.md`.
- **(B · decisión)** **Catálogos de microcopy** validados (formularios reales,
  mensajes de error definitivos) en `microcopy.md`.
- **(B · decisión)** Ampliación del **glosario** por términos de proyecto (`lexico-institucional.md`).

## 3. Identidad visual (02_identidad-visual)

- **(M · deuda)** **Logo:** falta la **versión monocromática (negra)**, el **tamaño
  mínimo** (mm/px) y el **formato vectorial (SVG)** — hoy solo hay PNG.
- **(M · deuda)** **Iconografía de interfaz:** la carpeta `iconos/` está **vacía**
  (solo `.gitkeep`); faltan la **grilla de construcción**, los tamaños estándar y la
  **librería de `.svg`** outline. *(2026-09: el **ícono de aplicación** sí quedó
  resuelto — estilo Cristal FUCAI en `prompts-cristal.md`. El vacío que queda es el
  set plano de interfaz.)*
- **(A · decisión)** **Colores de estado** (éxito/error/alerta): sin definir como
  tokens; la paleta excluye rojo/azul genéricos, así que requiere decisión +
  tokenización. **Sube a prioridad alta (2026-09):** ya no es hipotético. Las apps
  AppSheet en producción usan **azul** («Aprobado – pendiente desembolso») y **rojo**
  (alertas, mora) en sus Format Rules, y el estándar propone un semáforo de seis
  categorías con ambos colores (`04_componentes/appsheet/estandar-de-app.md` §6).
  O se amplía la paleta con tokens de estado, o se resuelve el semáforo dentro de la
  paleta cerrada. Mientras tanto, las apps están fuera de norma y el sistema no
  puede decir cuál es el color correcto.
- **(M · deuda)** **Tipografía web:** faltan **H4–H6** y la conversión de la escala (pt)
  a **rem/px** para web.
- **(M · deuda)** **Grilla de columnas y breakpoints** responsive (web/AppSheet): no tokenizados.
- **(B · decisión)** **Ilustración:** sin set ilustrativo propio definido
  (`ilustracion.md`). *(2026-09: el estilo **generativo** sí está fijado —
  Cristal FUCAI, con ADN, plantilla de prompt y bloques por formato.)*
- **(B · decisión)** **Fotografía:** falta el **enlace al banco autorizado en Drive** y
  el formato de registro de consentimiento (`fotografia.md`).
- **(B · deuda)** **Modo oscuro:** las rampas de **visualización de datos** no se
  re-especifican para fondo negro (contraste/serie en oscuro).

## 4. Tokens (03_tokens)

- **(B · deuda)** **Tokens sin consumidor**: `accent.territorySoft`, `text.footer`,
  `docx.tableHeader.text`, `pptx.titleSlide.text`, `appsheet.accent` están definidos
  pero ningún generador ni documento los referencia. → conectarlos al motor o
  documentarlos como "reservados". *(2026-09: el capítulo de correo ya consume el
  grupo `email.*` ampliado, y su tabla de paleta está bajo verificación `[GEN]`.)*
- **Aclaración (no es vacío):** las 21 entradas `dataviz.ramp.*` y los primitivos de
  paso de rampa (`naranja-medio`, `verde-oscuro`, etc.) **sí se consumen**
  programáticamente (vía `lib/tokens` → `RAMP_*` y `tokens.css`); no son huérfanos.

## 5. Motor y scripts (deuda técnica)

- **(M · deuda)** **Builders documentados pero no implementados** en `fucai_docx.js`:
  `actaHeader()`, `signatureTable()`, `chapterDivider()` (hoy se arman a mano).
- **(M · deuda)** **QA parcial:** `check_fucai.py` solo valida `.docx`; **no hay
  verificador** para `.pptx` ni `.xlsx`.
- **(B · deuda)** **Publicación del `.skill`** por Releases/CI desde `dist/skill/`:
  el empaquetado existe (`build-skill --package`), falta el disparador automático.

## 6. Co-branding (dependencia ausente)

- **(M · decisión/deuda)** El skill **`naane-branding`** se referencia en **8 archivos**
  (incl. `cobranding-naane.json`, `manual-de-logo.md`, `DESIGN.md`) pero **no está en el
  repo**. Quien use solo este repositorio no tiene las reglas de *lockup* AICS+NAANE ni
  los logos del consorcio. → **decidir:** copiar `naane-branding` al repo (como se hizo
  con `fucai-branding`) o declarar explícitamente la dependencia externa y dónde vive.

## 7. Infraestructura del repositorio (deuda)

- **(M · deuda)** **Sin CI** (`.github/workflows/` no existe): nada ejecuta
  automáticamente `build-skill` (verificación `[GEN]`) ni `check_fucai` en cada PR, pese
  a que `CONTRIBUTING.md` exige ese checklist de QA.
- **(M · deuda)** **Sin pruebas automatizadas** de los generadores (docx/pptx/xlsx) ni
  de la integridad de tokens/temas (hoy se valida a mano).
- **(B)** Falta un `LICENSE` explícito a nivel de repo (package.json dice `UNLICENSED`;
  las fuentes Space Grotesk son OFL, documentado en `FUENTES.md`).

## 8. Submarca Tienda (no es vacío)

`tienda-fucai.json` usa la paleta FUCAI por decisión del dueño de marca; la ausencia de
subpaleta propia es una **decisión registrada**, no un hueco.

---

## 9. Campañas y ecosistema digital (aprendizajes 2026-09)

Abiertos por el proyecto *Ecosistema 35 Voces*; el detalle y la propuesta de cada
uno están en `aprendizajes-ecosistema-35-voces-2026-09.md`.

- **(M · deuda)** **Enlaces fuera de `.sqs-block-content`:** el CSS de Squarespace
  solo pinta de naranja los enlaces de párrafo y lista. Cualquier `<a>` fuera de
  esos selectores sale azul de navegador y rompe la paleta cerrada. Falta un
  fallback; no se añadió aquí porque un `a { }` general puede pisar la navegación
  del sitio en vivo y merece probarse.
- **(M · deuda)** **Componentes web de campaña sin ficha:** tarjeta de relato,
  filtro por tag/territorio con estado en texto y filete (no solo color), contador
  de serie como variante de dato héroe, hero de «objeto ancla», bloque de sección
  de campaña en home y plantilla de artículo testimonial. Nacieron en el proyecto y
  funcionan; falta ficharlos.
- **(M · deuda)** **Estado «en preparación»:** patrón para contenido que aún no
  llega —tarjeta en arena claro y etiqueta de **texto**, no solo color—. Con una
  regla dura asociada: **prohibido el *lorem ipsum*** en piezas que se muestran a
  comunidades o aliados.
- **(M · decisión)** **Ficha de relato como esquema de contenido:** `slug`, fecha,
  voz, pueblo/territorio, tags, ilustración, título SEO y llamado. Definida una vez
  y consumida por blog, landing, carrusel, home y boletín. Falta publicarla como
  componente reutilizable por cualquier campaña narrativa.
- **(M · deuda)** **Plantilla HTML de envío del boletín de serie:** la maqueta está
  definida (§8.1 del capítulo de correo); falta el HTML real con tablas y estilos
  en línea, probado en Gmail y Outlook.
- **(B · decisión)** **Modelo «campaña = datos + plantillas por canal»:** una sola
  fuente de datos y cinco salidas. Funcionó; falta documentarlo como método.
- **(B · decisión)** **Set de íconos:** sigue `[POR CONFIRMAR]` (Lucide recoloreado
  o set propio). Es el mismo vacío del apartado 3, visto desde el lado digital.

## 10. Apps AppSheet (aprendizajes 2026-09)

Abiertos por la revisión de FucaiCampo; el detalle está en
`04_componentes/appsheet/estandar-de-app.md`.

- **(M · deuda)** **Orden de los estados:** AppSheet agrupa alfabéticamente, no por
  flujo. La solución estándar es una columna virtual de orden (1 = Borrador …
  9 = Legalizado); falta aplicarla y fijarla como convención.
- **(M · deuda)** **Paleta de estados dispersa** entre avances, pasajes y hallazgos:
  tres conjuntos de Format Rules que deberían ser uno. Depende de la decisión de
  colores de estado del apartado 3.
- **(M · deuda)** **Vistas con nombre técnico visible** (`coord_proyectos_Detail`,
  `rf_*_Detail`): todo lo que ve la persona necesita Display Name en español.
- **(M · deuda)** **Set de íconos de estado:** hoy Font Awesome vía Format Rules, sin
  catálogo fijado. Es el mismo vacío de iconografía del apartado 3, visto desde la app.
- **(A · decisión)** **Llevar el estándar a las demás apps** del ecosistema (Caminos
  Artesanos, Activos FUCAI, CRM B2B, Bancabundancia, Catálogo Maderables). Es lo que
  convierte cinco apps sueltas en una familia.

---

## Resumen por prioridad

| Prioridad | Vacíos |
|-----------|--------|
| **Alta (decisión humana)** | Posicionamiento formal · arquetipo · personalidad. |
| **Media (decisión)** | "familias acompañadas" · política de localización · colores de estado · audiencias detalladas. |
| **Media (deuda técnica)** | Logo (mono/SVG/tamaño mín.) · librería de iconos · H4–H6 + escala web · grilla/breakpoints · builders docx · QA pptx/xlsx · dependencia `naane-branding` · CI · pruebas. |
| **Baja** | Tokens sin consumidor · convención de commit/tag del último cambio · puntuación · glosario · microcopy · ilustración · banco de fotos · data-viz en oscuro · LICENSE · LFS en remoto. |

**Nada de lo anterior es un error del sistema:** son extensiones previstas (decisiones
de marca de FUCAI) o deuda técnica acotada. La fuente de verdad (tokens), el motor y la
verificación `[GEN]` están sanos y en sincronía.
