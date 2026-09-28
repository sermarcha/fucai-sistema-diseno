# Changelog

Todas las modificaciones notables de este repositorio se documentan aquí.
El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el versionado es [Semántico](https://semver.org/lang/es/) (MAJOR.MINOR.PATCH):

- **MAJOR** — cambios que rompen la compatibilidad de los tokens o la taxonomía.
- **MINOR** — nuevos tokens, temas, componentes o capas, compatibles hacia atrás.
- **PATCH** — correcciones de valores, documentación o andamiaje.

## [No publicado]

### Añadido
- **Componente `documento/markdown-pdf/`** — hoja de estilo
  `fucai-markdown-pdf.css` para exportar cualquier `.md` a PDF con marca desde
  VS Code, con la extensión `yzane.markdown-pdf`. Cubre el hueco entre el `.md`
  fuente y el `.docx` de entregable: hasta ahora no había forma de sacar un PDF
  con identidad de un archivo Markdown sin pasar por Word.
  Aplica la escala `font.size.*` (28/22/16/13/11/9/8 pt), la paleta de
  `tokens.json` v1.8.0, encabezado de tabla blanco sobre naranja con **filetes
  horizontales solamente**, cita con filete naranja sin caja, y fondo de página
  blanco siempre. El verde **no se aplica solo**: hay que marcarlo con
  `.territorio`, para que siga siendo color de territorio y no de decoración.
  Registrado en `04_componentes/catalogo.md`.
- **Referencia `references/email.md` en el skill** — el ruteo del skill no tenía
  fila para correo, pese a que ya existían el capítulo del medio y las directrices
  de notificaciones. Destila ambos en formato operativo: reglas duras, paleta,
  tipografía, anatomía, notificaciones de AppSheet, firma del personal y
  accesibilidad.
- **Tokens `email.*` de superficie, texto, filete y firma** — `email.surface.canvas`
  y `email.surface.card`; `email.accent`, `email.territory` y `email.rule`;
  `email.text.title`, `email.text.body` y `email.text.muted`; y el trío
  `email.signature.border` / `padding` / `maxWidth` (3 / 13 / 420 px). Cierran el
  hueco entre el grupo `email.*` previo (solo ancho, botón y fuentes) y los valores
  que el capítulo de correo usaba escritos a mano.

- **Registro de "Cristal FUCAI" en la capa de identidad** — el estilo generativo de
  imagen de la casa no aparecía en ninguna parte del repositorio fuera de su propia
  guía. Ahora `iconografia.md` distingue los **dos registros de ícono** (interfaz en
  outline 2 px · aplicación en Cristal), `ilustracion.md` lo recoge como estilo
  generativo con su límite —objetos y símbolos, nunca personas ni comunidades— y
  `references/photography.md` lo pone al alcance del agente.
- **Sección "Dos registros de escritura"** en `07_gobernanza/mapa-fuente-de-verdad.md`
  — distingue el **capítulo** (para una persona que decide: narra y explica el porqué)
  de la **directriz** (para un agente que construye: reglas duras, esqueleto literal,
  checklist). La directriz no sustituye al capítulo, lo ejecuta.

- **Componente `documento/libro-y-cartilla.md`** — cómo se arma una publicación
  larga de FUCAI. Separa de forma explícita **lo fijo** (blanco de fondo, paleta y
  60-25-10-5, Space Grotesk/Calibri, voz, aparato mínimo, ética) de **lo libre**
  (metáfora estructurante, formato y retícula, escala tipográfica, familias de
  ilustración, recursos de navegación), para que innovar no cueste identidad.
  Recoge el aparato editorial por sus tres funciones —situar, acreditar, cuidar—,
  la retícula de 170 × 240 con franja de margen, el **sistema de marcadores de
  diagramación** que viaja dentro del `.md` y no se imprime, y la regla de que el
  libro **se genera, no se maqueta a mano**.
- **`02_identidad-visual/ilustracion-editorial.md`** — el estilo de acuarela cálida
  para libros y cartillas, con su método de serie: bloque de estilo idéntico en
  todos los prompts, familias de pieza con sus tamaños de producción, las dos vías
  (describir o partir de fotografía), parámetros por herramienta, trazabilidad de
  prompt y semilla, reglas éticas y los ocho «no» del control de calidad.
  El aprendizaje central queda escrito: **la fuerza de transformación se invierte**
  —media (0,50–0,65) en el retrato, que existe para *conservar* a la persona; alta
  (0,70–0,85) en la escena, que existe para *disolverla*—.
  Destilados de la producción de *35 Voces, 35 Caminos de Identidad* en
  `fucai-knowledge`.

- **Referencia `references/libro-cartilla.md` en el skill** — el ruteo no tenía
  fila para publicaciones largas, así que un agente no podía llegar ni al
  componente de libro ni al estilo de acuarela. Destila ambos: lo fijo y lo libre,
  el aparato mínimo, la retícula, los marcadores de diagramación, la inversión de
  la fuerza entre retrato y escena, la ética de imagen y el checklist de imprenta.
  Se añaden «libro», «cartilla» y «publicación» a los disparadores del skill.

- **`07_gobernanza/aprendizajes-ecosistema-35-voces-2026-09.md`** — aprendizajes del
  proyecto del ecosistema digital de la campaña de 35 años (landing, blog, carrusel,
  home y boletín). Se ubicó en gobernanza junto a las otras revisiones y se
  incorporó a los capítulos: cierra con una tabla que dice dónde quedó cada uno de
  los 18 aprendizajes.
- **Sección «Ilustración de autor»** en `02_identidad-visual/fotografia.md`, con la
  tabla de **las cuatro vías de imagen** —foto real, ilustración de autor, retrato
  ilustrado desde foto, imagen generada de objetos— y cuándo vale cada una. La
  ilustración hecha por una persona es vía de primera clase en relatos íntimos, de
  niñez y de memoria, no un sustituto de emergencia.
- **§8.1 «Boletín de serie»** en el capítulo de correo: la familia del boletín que
  entrega una serie por entregas, distinta de las notificaciones de sistema.
  Verificada con 46 envíos. Incluye la regla de asunto (≤ 50 caracteres, la voz
  como sujeto) y el contador de serie.
- **Carrusel testimonial de 6 láminas** en `04_componentes/social/carrusel.md`.
- **Regla de campaña en tipografía:** una campaña hereda la tipografía de su canal;
  no se introducen familias nuevas por campaña.
- **«El testimonio es intocable»** en `lexico-institucional.md`: la regla de oro y
  la tabla sí/no se aplican al marco editorial, nunca al testimonio.
- **Cursivas cuando todo el texto es una cita** en la guía editorial.

- **`04_componentes/appsheet/estandar-de-app.md`** — estándar de construcción de las
  apps AppSheet, validado en FucaiCampo: principios, navegación con inicio numerado
  y paneles alimentados por tabla de accesos, vistas de detalle por secciones en
  orden del flujo, tarjeta de dos datos, estados con Format Rule, formularios por
  pasos, visibilidad por alcance y rol, convenciones de nombres, trampas técnicas y
  checklist de «hecho» para cada vista nueva. Cierra el pendiente que `patrones.md`
  arrastraba —el catálogo de vistas concretas— y trae una tabla de dónde quedó cada
  aprendizaje.
- **`references/appsheet.md` pasa de identidad visual a estándar de app** — el skill
  solo sabía de color y tipografía; un agente que construyera una vista no tenía
  navegación, microcopy, nombres ni checklist. Ahora sí.
- **Reglas de etiqueta en `microcopy.md`** — pregunta lo que la persona diligencia,
  nombra lo que solo lee; mayúscula solo al inicio; lo opcional se dice; pasos por
  encima de ocho campos.

- **`07_gobernanza/auditoria-sistema-2026-09.md`** — auditoría completa de coherencia
  y completitud: 93 archivos, 116 tokens, la maquinaria de verificación y los tres
  destilados. Registra lo sano, los cinco hallazgos de coherencia, el estado de
  madurez (72 % en borrador) y siete oportunidades por retorno.

- **Capa funcional `state.*`** — cinco tokens de estado para interfaces: `success`
  `#0F7B4F`, `danger` `#9B2226`, `info` `#2A6F97`, más `warning` y `neutral` que
  reusan el naranja de marca y el gris de soporte, sin añadir color. **Viven fuera de
  `color.*` a propósito:** la paleta de marca sigue cerrada. No se usan en piezas
  públicas, documentos, portadas ni redes, y nunca solo color — siempre con ícono y
  etiqueta. Los tres valores nuevos pasan AA sobre blanco y sobre arena claro.
- **Extensión `carto.*`** — `agua`, `agua-linea`, `chagra` y `curva-nivel`, válidos
  **únicamente dentro de un mapa**: la cartografía tiene convenciones de lectura
  propias —el agua se lee azul— y forzarlas a la paleta perjudica la comprensión.
  Eran «valor propuesto» en el componente de cartografía; ahora son tokens.
- **`color.negro-calido` `#161310`** — el negro de las bandas oscuras del sitio, que
  estaba en producción sin token.

### Cambiado
- **El verde de territorio no significa «éxito»** — el semáforo propuesto para las
  apps usaba `brand.territory` para «cerrado OK». Se rechazó: el verde narrativo es un
  activo de marca y diluirlo en un formulario financiero lo desgasta en todas partes.
  El «cerrado» usa el verde **funcional** `#0F7B4F`, distinto y solo de interfaz.
- **El tema oscuro adopta `#161310`** en vez de `#000000`, alineándose con el sitio.
- **El semáforo de las apps queda resuelto** en `estandar-de-app.md` §6 y en
  `references/appsheet.md`, que dejan de advertir de un vacío abierto.
- **Tres vacíos cerrados en el registro:** colores de estado (era prioridad alta),
  oscuro del sitio sin token y colores de cartografía. La paleta de estados dispersa
  entre apps deja de estar bloqueada.
- **Verificación ampliada a 24 tablas y 125 celdas** (desde 21/111): entran las tablas
  de estado de `DESIGN.md` y `color.md`, y la de cartografía. `TOKEN_REF` reconoce
  ahora los prefijos `state.` y `carto.`.
- **`DESIGN.md` entra bajo verificación** — era el mayor riesgo de deriva del repo:
  625 líneas y 69 hex escritos a mano, **copiado al paquete que se distribuye** y
  anunciado como «guía de diseño completa», pero fuera de `GEN_TARGETS`, del mapa de
  fuente de verdad y del README. Su tabla de color y sus **dos** tablas de contraste
  quedan enlazadas a tokens. La verificación sube de 20 a 21 tablas, de 97 a 111
  celdas y de 25 a 46 pares de contraste. Los 10 contrastes que declaraba eran
  correctos; solo estaban sin vigilar.
- **El marcador `[GEN]` ya no cruza titulares** — se extendía hasta el final del
  archivo, de modo que cualquier tabla posterior entraba en la verificación sin
  quererlo. Impedía usarlo con confianza en documentos largos. Se comprobó que
  ninguna tabla existente dependía de esa fuga.
- **`mapa-fuente-de-verdad.md`:** `DESIGN.md` queda registrado como destilado espejo
  y el diagrama refleja la cobertura real de `[GEN]`.
- **Enlace roto en el CHANGELOG** a `color-system.md`, sin el segmento `fucai-branding/`.
- **«Lenguaje de servicio, no de propiedad» entra en la tabla sí/no** del léxico:
  «proyectos coordinados», no «mis proyectos». Los proyectos son de la fundación y
  de las comunidades; quien los coordina no los posee.
- **Los colores de estado suben a prioridad alta en el registro de vacíos** — dejó de
  ser hipotético: las apps en producción usan **azul y rojo** en sus Format Rules y
  el estándar propone un semáforo con ambos, colores que la paleta FUCAI excluye. O
  se amplía la paleta con tokens de estado, o se resuelve el semáforo dentro de la
  paleta cerrada; mientras tanto el sistema no puede decir cuál es el color correcto.
- **`patrones.md`:** su pendiente de «catálogo de vistas concretas» queda resuelto y
  apunta al estándar; conserva solo el set de íconos como pendiente.
- **Contraste naranja↔blanco corregido: 3.1 → 3.9:1** — el capítulo de correo citaba
  un valor que no era el que calcula el propio build. Corregido tambien en
  `references/email.md`, junto con los umbrales WCAG de texto grande, que
  confundian px con pt (≥ 24 px / 18 pt, o ≥ 18.66 px / 14 pt en negrita).
- **Regla dura 9 precisada: prohibido *fabricar* personas, no ilustrarlas** — tal
  como estaba («IA prohibida para representar personas o comunidades») prohibía los
  retratos que el propio sistema documenta. Ahora distingue fabricar un rostro
  —prohibido— de **el retrato ilustrado de una publicación**, admisible porque parte
  de una fotografía real que la persona entregó, no altera sus rasgos, la persona lo
  aprueba antes de publicarse y se declara en el índice de ilustraciones. Corregida
  también en `references/photography.md`. **[● Confirmar con la Dirección.]**
- **La paleta de acuarela editorial queda bajo verificación `[GEN]`** — pasa a
  nombrar tokens `color.*` en vez de hex sueltos. La verificación sube a 20 tablas
  y 97 celdas.
- **La casa tiene dos estilos generativos, no uno** — al documentar el estilo del
  libro quedó claro que «Cristal FUCAI» (objetos, íconos de aplicación, redes) y
  «acuarela cálida» (libros y cartillas) conviven y no se mezclan en una misma
  pieza. `ilustracion.md` pasa a declarar **tres registros** —infografía y diagrama,
  Cristal, acuarela— y `references/photography.md` corrige haber presentado Cristal
  como el único.
- **La firma de correo deja de tener dos fuentes de verdad** — `SKILL.md` traía una
  firma en texto plano, sin filete ni jerarquía, que contradecía la del capítulo de
  correo. Como el skill es lo que consume un agente, toda firma generada salía con
  la versión pobre. Ahora `SKILL.md` describe la firma real y remite a
  `references/email.md` para el HTML.
- **Verificación `[GEN]` ampliada a la capa 04 y al skill** — `build-skill.js`
  reconoce el prefijo `email.*` y vigila las tablas de paleta de
  `04_componentes/email/sistema-de-correo.md` y `references/email.md`. La
  verificación pasa de 17 a 19 tablas y de 69 a 85 celdas.
- **Mapa de fuente de verdad y registro de vacíos al día** — tres filas nuevas en
  "Qué manda sobre qué" (correo, notificaciones de AppSheet, estilo Cristal); el
  diagrama de compilación ya refleja que `[GEN]` cubre 02_/04_/06_ y el skill; y
  `analisis-de-vacios.md` anota qué cerró cada documento: el ícono **de aplicación**
  queda resuelto y el vacío restante es el set plano **de interfaz**.
- **Catálogo:** la firma de correo del personal queda registrada apuntando al §10 del
  capítulo, sin crear una ficha que duplicara la especificación.
- **`README.md`:** la lista de familias de `04_componentes/` omitía `email/` y
  `cartografia/`, que ya existían.
- **Ubicación de los tres capítulos de septiembre** — estaban sueltos en la raíz
  de `04_componentes/`, fuera de su familia y con nombre `FUCAI_…_2026-09.md`.
  Se movieron con `git mv` y se renombraron a minúscula-con-guion, según la
  convención del repositorio:
  - `FUCAI_SistemaDiseno_Correo_2026-09.md` → `04_componentes/email/sistema-de-correo.md`
  - `FUCAI_Directrices_Claude_Notificaciones_AppSheet_2026-09.md` → `04_componentes/appsheet/notificaciones-correo.md`
  - `FUCAI_Guia_Prompts_Cristal_2026-09.md` → `02_identidad-visual/prompts-cristal.md`

  Se actualizaron el catálogo de componentes, el README de la familia email y la
  referencia cruzada entre el capítulo de correo y las directrices de AppSheet.

## [1.8.0] — 2026-08-26

MINOR: nuevo token `accent.hover`, nuevas verificaciones del build, guía rápida,
specimen y fichas nuevas. Aplica el plan de la revisión de agosto
(`07_gobernanza/revision-sistema-2026-08.md`, adenda al final).

### Añadido
- **Token `accent.hover`** (→ `color.naranja-oscuro`): hover/activo único de
  acciones sobre fondo claro (5.4:1 con blanco). Añadida la clave `accent.hover`
  a los 4 temas (oscuro usa durazno, 10.4:1 sobre negro). Resuelve la
  contradicción durazno vs. naranja-oscuro (H3).
- **`build-skill.js` — tres verificaciones nuevas que corren en CI**:
  **[B2]** contraste WCAG **calculado** desde los tokens vs. las tablas marcadas
  `[GEN] contraste calculado` (25 pares) · **[B3]** temas vs. tokens (claves
  idénticas, todo valor ∈ primitivos, `claro` = base, tienda/naane = claro por
  decisión 2026-06) · **[B4]** hex del CSS/HTML de Squarespace ∈ paleta (H6, H7).
  Empaquetado robusto en Windows/monturas (chmod antes de borrar/sobrescribir).
- **`GUIA-RAPIDA.md`**: la marca en una página para humanos (8 reglas duras,
  paleta, contraste esencial, voz, redes exprés, checklist). Sus tablas se
  verifican en el build como cualquier tabla `[GEN]`.
- **`scripts/generators/fucai_specimen.js`** (+ `npm run specimen`): genera
  `dist/specimen.html`, muestrario visual autocontenido desde los tokens
  (paleta con contraste calculado, rampas, tipografía, botones con hover
  correcto, tabla, banda arena, espaciado). QA visual de cada cambio de token.
- **`04_componentes/documento/one-pager-impacto.md`** (Borrador): pieza de una
  página para financiadores (dato héroe, historia VJACel, tabla de resultados,
  uso de recursos, aliados). Primer componente propio del Grupo 2 de audiencias.
- **`05_contenido-lenguaje/historia-de-impacto.md`** (Borrador): formato
  editorial VJACel reutilizable en carrusel, boletín, informes y web.
- **`07_gobernanza/revision-sistema-2026-08.md`**: revisión integral de agosto con
  verificación programática. Hallazgos nuevos: deriva del skill/DESIGN.md frente a
  las reglas de julio (H1), cifras de contraste documentadas que no coinciden con el
  cálculo WCAG (H2), hover contradictorio durazno vs. naranja-oscuro con falla de
  accesibilidad (H3), slogan naranja sobre arena a 3.21:1 (H4), temas y CSS
  Squarespace sin verificación en CI (H6, H7). Plan priorizado de 12 acciones para
  comunicación, coherencia e impacto.
- **`07_gobernanza/revision-redes-2026-07.md`**: revisión de los cinco últimos
  carruseles de redes frente al sistema; define el punto medio (proporción
  60-25-10-5 a nivel de carrusel, máx. 2 láminas intensas, prohibición de imágenes
  IA para representar personas/comunidades, texturas culturales con condiciones).
- **`04_componentes/social/carrusel.md`** reescrito a Borrador avanzado: principio
  rector, anatomía de 5–9 láminas (gancho → desarrollo → dato héroe → cierre),
  reglas duras, recursos autorizados con condiciones, 1080×1350 como default y
  lista de chequeo de 10 puntos.
- **`04_componentes/web/squarespace/`**: se crean los archivos de implementación que
  la guía referenciaba pero no existían — `fucai-custom.css` (11 bloques comentados:
  fuentes, header numerado, botones, enlaces, hero, imágenes, aliados, blog,
  newsletter, footer, accesibilidad) y `bloque-cifras.html` (contadores con
  IntersectionObserver y `prefers-reduced-motion`).
- **`04_componentes/web/GUIA-SQUARESPACE.md`** reescrita como guía paso a paso:
  §0 requisitos y glosario ES/EN de la interfaz, rutas exactas del panel 7.1, valores
  exactos por campo, punto de verificación («✓ Verifica») por sección y nueva tabla
  §12 de errores comunes y soluciones.
- **`04_componentes/cartografia/`** (Borrador): componente que fija las reglas de marca
  para mapas y **delega la implementación** cartográfica (estilos, gradientes por métrica,
  plantillas de impresión, KML) al repo **`fucai-geo`** (`qgis/sistema-diseno-mapas.md`).
  Lista las extensiones `carto.*` (agua, chagra, curva de nivel) candidatas a token de
  marca. Registrado en `07_gobernanza/mapa-fuente-de-verdad.md`.
- **Contenido estratégico oficial** en `01_fundamentos/plataforma-de-marca.md`:
  Personalidad de marca, Posicionamiento (Concepto Estratégico), Arquetipo (blend
  Puente/Sabio-Cuidador-Explorador), Narrativa de marca, "Qué nos hace único",
  "Nuestra lucha" y Pitch. Resuelve los `[Pendiente]` estratégicos de alta prioridad.
- **`01_fundamentos/audiencias.md`** reescrito con los **3 grupos oficiales**
  (comunidades+ciudadanía, socios estratégicos, marketing ético) con propuesta de
  valor, beneficios y mensaje clave.
- **`skill/naane-branding/`**: copiado al repo (antes solo se referenciaba; cierra la
  dependencia ausente del co-branding CC217).
- **`.github/workflows/ci.yml`**: CI que valida tokens.json, verifica las tablas
  `[GEN]` (`build-skill`) y empaqueta el skill en cada push/PR.
- `DESIGN.md`: añadidos concepto estratégico y personalidad en el contexto de marca.
- `03_tokens/taxonomia.md`: documentados los tokens reservados (sin consumidor aún).
- `07_gobernanza/analisis-de-vacios.md`: auditoría exhaustiva de vacíos.

### Cambiado
- **Contrastes recalculados con la fórmula WCAG** (H2) en
  `02_identidad-visual/color.md`, `06_accesibilidad/estandar-accesibilidad.md`,
  `DESIGN.md`, `GUIA-RAPIDA.md` y `skill/fucai-branding/references/color-system.md`:
  naranja↔blanco 3.1→**3.9:1**, verde↔blanco 5.9→**6.4:1**, arena↔negro
  10.5→**17.1:1**, arena claro↔gris 8.5→**11.4:1**; filas nuevas para
  naranja↔arena (3.2:1, solo títulos grandes), hover (5.4:1) y tintes (✕ texto).
  Las reglas duras no cambian; ahora las cifras resisten auditoría.
- **Slogan de la banda arena** (H4): de naranja (3.2:1 en texto pequeño) a
  **gris texto** (10.3:1) en la ficha, en `scripts/generators/fucai_docx.js →
  coverFooterBand()` y en el script espejo del skill. Verificado con un .docx
  de humo (`check_fucai.py` PASS, footer en `#333333`).
- **Condiciones de uso de los tintes** (H5): durazno y verde claro quedan
  documentados como **solo fondo** con texto oscuro (tokens `$description`,
  `color.md`, fichas de botón/card, DESIGN.md y skill).
- **`DESIGN.md` sincronizado con las reglas de julio** (H1): carrusel 1080×1350
  con arco y máx. 2 láminas intensas, **prohibición de imágenes IA para
  personas/comunidades**, secciones nuevas de email y cartografía, contrastes y
  hover corregidos.
- **Skill `fucai-branding` → v3.2** (H1): reglas duras 9–11 nuevas (IA prohibida
  para personas; carrusel; tintes solo fondo + hover naranja oscuro),
  `references/canva.md` con la sección completa del carrusel,
  `references/photography.md` con la regla de IA y duotonos,
  `references/color-system.md` y `web.md`/`docx.md` con contrastes calculados,
  ruta de salidas generalizada y ejemplo de nombre de archivo unificado.
  **Pendiente manual: re-subir el paquete (`npm run package:skill`) a claude.ai.**
- **`README.md`** (H8): estado actualizado a v1.8.0 (decía "v0.1.0 — scaffolding")
  y sección de build reescrita (el build y el CI ya existen; comandos reales).
- `CONTRIBUTING.md` y `07_gobernanza/mapa-fuente-de-verdad.md`: documentadas las
  verificaciones B2/B3/B4 del build.
- `04_componentes/catalogo.md`: registrados one-pager de impacto, cartografía,
  historia de impacto y specimen.

### Por hacer
- Builders `actaHeader()`, `signatureTable()`, `chapterDivider()` en `fucai_docx.js`;
  verificador de QA para `.pptx` y `.xlsx`.
- Logo: versión monocromática, tamaño mínimo y formato SVG; poblar `iconos/` con `.svg`.
- Definir colores de estado (éxito/error/alerta), H4–H6 + escala web (rem), grilla y
  breakpoints responsive.
- Confirmar el término "familias acompañadas" y alinear los textos oficiales
  (narrativa/audiencias) al léxico ético; política de localización; `LICENSE`.
- Automatizar la publicación del `.skill` por Releases; añadir la URL del repositorio
  (canal de issues/PR) en gobernanza.
- Del plan de agosto (revision-sistema-2026-08): **re-subir el paquete del skill a
  claude.ai** (acción manual) · plantillas Canva del carrusel · instrumentos de
  impacto (banco de fotos, inventario de canales, herramienta de mailing) ·
  política retroactiva sobre piezas con imágenes IA · semántica de estado
  unificada (UI/mapas/dataviz) · builder `impactOnePager()` e indicadores estándar.

## [1.7.0] — 2026-06-24

### Añadido
- **`build-skill.js --package`**: ensambla un **skill subible a claude.ai** en
  `dist/skill-package/fucai-branding/` = el skill existente + las actualizaciones del
  sistema de diseño. Incluye: `SKILL.md` con frontmatter **compatible** (name ≤64,
  description ≤200), `design-system/` (brand-constants.json, tokens.css, tokens.flat.json,
  brand-platform.md con Misión/Visión/Valores), `assets/fonts/` (Space Grotesk
  Regular/Medium/Bold) y `DESIGN.md`. Script npm `package:skill`.

### Verificado
- Estructura con la carpeta `fucai-branding/` como raíz; descripción de 184 caracteres
  (≤200); fuentes, plantillas y recursos presentes.

## [1.6.0] — 2026-06-24

### Cambiado
- **`/DESIGN.md` ampliado** a 12 secciones con mayor nivel de detalle: índice;
  misión/visión/valores en el contexto; **voz** con VJACel, registros por contexto
  (email/informe/redes/web) y **microcopy** (CTA, enlaces, formularios, mensajes de
  estado); **color** con combinaciones autorizadas y rampas de data-viz; tipografía
  con escala de presentación; **logo** con cobranding; **componentes** de documento,
  presentación, redes (estructuras A/B/C + tamaños) y AppSheet; accesibilidad con
  foco/teclado/ARIA/movimiento; nuevas secciones de **fotografía e ilustración**,
  **iconografía**, **temas (claro/oscuro) y submarcas** (con paleta de modo oscuro en
  variables CSS) y **"cómo decidir en marca"** (arbitraje + reglas rápidas).

### Verificado
- Los 21 HEX citados coinciden con los primitivos de `tokens.json` (ninguno inventado).
- 9 marcadores `[POR CONFIRMAR]`.

## [1.5.0] — 2026-06-24

### Añadido
- **`/DESIGN.md`** en la raíz: fuente de verdad de identidad visual y voz para
  **Claude Design** (claude.ai/design). Ocho secciones (contexto y personalidad,
  voz y tono, color, tipografía, logo, espaciado/layout, componentes, accesibilidad),
  con tokens en **variables CSS** y el *porqué* de cada decisión. Valores extraídos
  reales de `03_tokens/tokens.json` y del skill; lo ausente queda como `[POR CONFIRMAR]`.

### Verificado
- Los 21 HEX citados en DESIGN.md coinciden con los primitivos de `tokens.json`
  (ninguno inventado). 8 marcadores `[POR CONFIRMAR]`.

## [1.4.0] — 2026-06-24

Completa el compilador `build-skill.js` (vía elegida para cerrar de forma duradera la
brecha skill ↔ sistema de diseño detectada en v1.3.1).

### Añadido / Cambiado
- **`scripts/build-skill.js` IMPLEMENTADO** (antes esqueleto):
  - **[B] Verifica** que las tablas `[GEN]` de las capas 02/06 coincidan con los
    tokens (16 tablas, 58 celdas); falla si hay deriva. Es el guardián de sincronía.
  - **[A] `--write` emite `dist/skill/`**: `tokens.flat.json` (tokens resueltos),
    `tokens.css` (variables web/AppSheet: colores, rampas, radius, elevation, motion,
    tipografía, espaciado), `brand-constants.json` (constantes que embeben los
    generadores) y `brand-platform.md` (Misión/Visión/Valores/Pilares). Este paquete
    es **"el skill que incluye todo el sistema de diseño"**.
- `lib/tokens.js` expone `flat` (mapa resuelto), `leaves`, `resolve` y `meta`.
- `package.json`: `build` ahora ejecuta `build-skill.js --write`; **versión 1.4.0**.
- `03_tokens/tokens.json` `$meta.version` = **1.4.0** (estaba desincronizado en 0.1.0).
- `mapa-fuente-de-verdad.md`, `versionado.md` y `scripts/README.md`: `build-skill`
  documentado como compilador (ya no "esqueleto").

### Verificado
- `build-skill --write` produce `dist/skill/` (5 archivos); verificación `[GEN]` en
  verde; los generadores corren y `check_fucai.py` da PASS; `dist/` ignorado por git.

## [1.3.1] — 2026-06-24

### Añadido
- `07_gobernanza/verificacion-skill.md` — verificación de cobertura del skill frente
  al sistema de diseño. Veredicto: el skill es la autoridad de origen (colores,
  tipografía, voz, componentes) y el sistema de diseño es un **superconjunto**; el
  skill **no** incluye el sistema de tokens, la Misión/Visión/Valores oficiales, los
  tokens de radius/elevation/motion, las fuentes ni la gobernanza. Cierre previsto vía
  `scripts/build-skill.js`.

## [1.3.0] — 2026-06-24

Tokeniza **forma y movimiento** (web/AppSheet), resolviendo los `[Pendiente]` de
`forma-y-profundidad.md`, `movimiento.md`, `web/boton.md` y `web/card.md`.

### Añadido
- Grupos en `03_tokens/tokens.json`:
  - `radius.*` — `none` (0), `sm` (4 px, **radio de marca** del Manual §6.4),
    `md` (8 px, contenedores).
  - `elevation.sm` — única sombra sutil (gris `color.gris-linea`, sin color);
    el default es **sin sombra**.
  - `motion.duration.*` — `fast` (150 ms), `base` (250 ms); `motion.easing.*` —
    `standard`/`in`/`out` (cubic-bezier).
- Tablas `[GEN]` de radius, elevation, duration y easing en
  `forma-y-profundidad.md` y `movimiento.md`; `build-skill.js` las detecta.

### Cambiado
- `web/boton.md` y `web/card.md` referencian `radius.*`, `elevation.sm` y `motion.*`
  (antes `[Pendiente]`).
- `espaciado-y-layout.md`: el radio deja de figurar como pendiente (ya tokenizado).

### Nota
- `radius.sm` (4 px) proviene del Manual §6.4; elevación y movimiento son defaults
  minimalistas del sistema (el Manual no los define), coherentes con la filosofía
  plana de FUCAI.

### Verificado
- Todas las referencias resuelven; los 4 temas conservan claves idénticas; las
  tablas `[GEN]` coinciden con los tokens; los generadores corren y `check_fucai.py`
  da PASS.

## [1.2.0] — 2026-06-24

Completa la cobertura de color del Manual: tokeniza las rampas de visualización de
datos —incluida la **rampa verde** de territorio— que antes solo vivían en el skill.

### Añadido
- **9 primitivos de color faltantes** en `03_tokens/tokens.json` (pasos de rampa
  naranja: `naranja-medio`, `durazno-claro`, `naranja-niebla`; pasos de rampa verde:
  `verde-oscuro`, `verde-medio`, `verde-palido`, `verde-niebla`; grises `gris-medio`
  #999999 y `gris-relleno` #E8E8E8). La paleta del Manual v1.1 queda **completa**.
- Grupo **`dataviz.ramp.*`**: rampas naranja (serie general), verde (**solo
  territorio/naturaleza**) y neutral (ejes/etiquetas), 7 pasos cada una, que
  referencian primitivos (ningún hex repetido a mano).
- `lib/tokens.js` y `lib/tokens.py` exponen `RAMP_ORANGE`/`RAMP_GREEN`/`RAMP_NEUTRAL`;
  `scripts/build-skill.js` las incluye en las constantes de marca.
- `02_identidad-visual/color.md`: tabla `[GEN]` de las tres rampas; grises
  `gris-medio` y `gris-relleno` añadidos.

### Cambiado
- `scripts/generators/fucai_xlsx.py`: las rampas se **leen de tokens.json** (antes
  literales) — resuelto el `[Pendiente]` de tokenización de data-viz.
- `03_tokens/taxonomia.md`: documenta el grupo `dataviz`.

### Verificado
- 0 colores del skill faltan en tokens; todas las referencias resuelven; los 4 temas
  conservan claves idénticas (19); la tabla `[GEN]` de rampas coincide con los tokens;
  los generadores corren y `check_fucai.py` da PASS.

## [1.1.0] — 2026-06-24

Incorpora las respuestas del dueño de marca a los puntos de revisión humana del
informe v1.0.0 (`07_gobernanza/informe-revision.md`, adenda).

### Añadido
- **Misión, Visión y 12 Valores oficiales** de FUCAI en
  `01_fundamentos/plataforma-de-marca.md`.
- **Asignación de roles** en `07_gobernanza/modelo-de-gobernanza.md`:
  Dueño de marca = Fundación Caminos de Identidad (FUCAI, institucional);
  Mantenedor = Sergio Martínez.
- Adenda de respuestas de revisión humana en `07_gobernanza/informe-revision.md`.

### Cambiado
- **Submarca Tienda** (`03_tokens/temas/tienda-fucai.json`): por decisión del dueño de
  marca usa la **paleta FUCAI**; se descartan los provisionales terracota/ocre
  (`03_tokens/taxonomia.md` actualizado). Los 4 temas siguen con claves idénticas.
- **Referencias a archivos normalizadas** a rutas repo-relativas en fichas de
  componente, identidad visual y gobernanza.

### Pendiente (permanece, requiere decisión humana)
- Posicionamiento formal y arquetipo de marca; enunciado de personalidad (opcional).
- Canal de issues/PR (URL del remoto en GitHub).
- Hoja de ruta técnica aprobada: `build-skill.js` pleno y tokens diferidos.

## [1.0.0] — 2026-06-24

Primera versión estable. Auditoría completa (Fase 5) del sistema construido en las
Fases 1–4. Informe íntegro en `07_gobernanza/informe-revision.md`.

### Revisado
- Lista de verificación de 12 puntos: integridad de tokens, coherencia de valores,
  reglas duras, léxico ético, referencias/rutas, Git LFS, estructura, skill,
  configuración, compatibilidad técnica, pendientes y versionado.
- Resultado: 0 hallazgos críticos; 2 medios y 3 menores; ~35 `[Pendiente]`, todos
  esperados; 0 omisiones. Generadores corren y `check_fucai.py` da PASS.

### Corregido
- `.gitattributes`: las reglas de LFS para `*.docx/*.xlsx/*.pptx` ahora cubren las
  plantillas del skill (antes quedaban fuera de LFS).
- Coherencia de la regla de secciones de Word: armonizado a **2–3
  (portada/cuerpo/contraportada)** en `encabezado-acta.md`, `divisor-capitulo.md` y
  este CHANGELOG (antes algunas fichas decían "2"), alineado con el generador real.
- `color.md`: marcador `[GEN]` aclarado (HEX desde tokens; RGB/CMYK/Pantone desde
  Manual) y detector de `build-skill.js` hecho robusto a marcadores con sufijos.

### Añadido
- `07_gobernanza/informe-revision.md` — informe de revisión por severidad, con
  correcciones aplicadas y puntos para revisión humana.

## [0.4.0] — 2026-06-24

### Añadido
- **Componentes (`04_componentes/`)**: `catalogo.md` + fichas de `documento/`
  (portada, banda-arena, pie-naranja, encabezado-acta, tabla-firmas,
  divisor-capitulo), `presentacion/` (portada-titulo, slide-contenido),
  `appsheet/patrones.md`, `social/` (post, story, carrusel) y `web/` (boton, card).
  Las fichas de documento codifican las reglas técnicas críticas (fondo blanco,
  bug `rId0`, 2–3 secciones (portada/cuerpo/contraportada), bandas en `Footer`, `lineRule:"atLeast"`, campos abiertos).
- **Motor (`scripts/`)**: `lib/tokens.js` y `lib/tokens.py` (cargan y resuelven
  `tokens.json`); generadores **reutilizados del skill y adaptados** para leer la
  marca desde tokens (`fucai_docx.js`, `fucai_pptx.js`, `fucai_xlsx.py`,
  `check_fucai.py`); `build-skill.js` (esqueleto documentado del compilador);
  `scripts/README.md`.
- **Gobernanza (`07_gobernanza/`)**: `modelo-de-gobernanza.md`, `versionado.md`,
  `onboarding.md`, `mapa-fuente-de-verdad.md`.

### Cambiado
- `package.json`: CommonJS (se quitó `type: module`) para los generadores
  reutilizados; nuevos scripts `build:skill` y `qa:docx`.
- Eliminados los `.gitkeep` de `04_componentes/*`, `07_gobernanza/` y `scripts/*`.

### Verificado
- Los cuatro generadores corren tras la adaptación; `check_fucai.py` da PASS en
  todas las reglas duras sobre un `.docx` de prueba (fondo blanco, sin `rId0`,
  3 secciones, paleta y tipografías correctas). Ningún color/familia quedó quemado.

## [0.3.0] — 2026-06-24

### Añadido
- **Identidad visual (`02_identidad-visual/`)**: `logo/manual-de-logo.md`,
  `color.md`, `tipografia.md`, `espaciado-y-layout.md`, `iconografia.md`,
  `fotografia.md`, `ilustracion.md`, `forma-y-profundidad.md`, `movimiento.md`.
  Las tablas de valores se marcan `<!-- [GEN] derivado de tokens.json -->` y se
  rellenan con los tokens vigentes (no se quemaron HEX/tamaños a mano fuera de ellas).
- **Fuentes Space Grotesk** en `02_identidad-visual/tipografia/` (Git LFS):
  `SpaceGrotesk-{Regular,Medium,Bold}.ttf` (escritorio) + `.woff2` latin y
  latin-ext (web), con `FUENTES.md` de procedencia y licencia OFL.
- **Accesibilidad (`06_accesibilidad/`)**: `estandar-accesibilidad.md`
  (WCAG 2.2 AA, contraste cruzado con tokens) y `lenguaje-inclusivo.md`
  (eje ético: comunidades protagonistas).
- `*.ttf` añadido a las reglas de Git LFS en `.gitattributes`.

### Nota
- Los `.otf` originales de Space Grotesk no se descargaron: el entorno bloquea
  `raw.githubusercontent.com`. Se entregan `.ttf`/`.woff2` auténticos desde la
  distribución de Google Fonts; el `.otf` queda como `[Pendiente]` con instrucciones.

## [0.2.0] — 2026-06-24

### Añadido
- **Capa estratégica (`01_fundamentos/`)**: `plataforma-de-marca.md`,
  `principios-de-diseno.md`, `voz-y-tono.md`, `audiencias.md`.
- **Capa de contenido y lenguaje (`05_contenido-lenguaje/`)**: `guia-editorial.md`,
  `microcopy.md`, `lexico-institucional.md`, `localizacion.md`.
- Cada archivo es una plantilla estructurada con datos reales de FUCAI donde
  existen y marcadores `> [Pendiente: …]` donde el skill no aporta contenido
  oficial (no se inventó misión, visión, valores ni arquetipo).

### Cambiado
- Eliminados los `.gitkeep` de `01_fundamentos/` y `05_contenido-lenguaje/` al
  quedar pobladas.

## [0.1.0] — 2026-06-24

### Añadido
- **Scaffolding inicial** del sistema de diseño FUCAI.
- Repositorio git inicializado con rama `main`.
- Archivos de raíz: `README.md`, `CHANGELOG.md`, `CONTRIBUTING.md`,
  `.gitattributes` (Git LFS), `.gitignore`, `package.json`, `requirements.txt`.
- Árbol completo de las 7 capas con `.gitkeep` en las carpetas vacías.
- **Fuente de verdad poblada:** `03_tokens/tokens.json` en formato W3C Design
  Tokens con tres niveles (primitivos, semánticos por superficie, de componente),
  más tokens tipográficos y de espaciado.
- `03_tokens/taxonomia.md` con la nomenclatura, los alias y la regla de scope
  por plataforma.
- Cuatro temas con claves idénticas: `claro.json`, `oscuro.json`,
  `tienda-fucai.json` y `cobranding-naane.json`.
- Copia viva del skill institucional en `skill/fucai-branding/`.
- Logos `logo_naranja.png` y `logo_blanco.png` en `02_identidad-visual/logo/`.
