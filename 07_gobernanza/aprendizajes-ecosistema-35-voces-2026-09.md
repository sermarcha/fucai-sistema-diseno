# Aprendizajes para el Sistema de Diseño FUCAI
**Origen:** proyecto *Ecosistema 35 Voces* — campaña FUCAI 35 años
**Fecha:** 2026-09-28 · **Versión de referencia del sistema:** v1.8.0 (+ sync correo 2026-09-28)

Este documento recoge lo que el proyecto confirmó, corrigió o dejó pendiente en el sistema de diseño. Cada punto cierra con una **propuesta concreta** para el repo `sermarcha/fucai-sistema-diseno`.

---

## 1. Color

### 1.1 Paleta de campaña: cerrada y sin azules
- La campaña funcionó con **naranja, blanco, arena y grises**. El verde quedó reservado a territorio, como manda la norma.
- Ningún azul fue necesario, ni siquiera para enlaces o estados.
- **Propuesta:** documentar la paleta de campaña como **subconjunto oficial** de la paleta institucional. Añadir la regla: *"Los enlaces usan el naranja con subrayado; nunca el azul del navegador."*

### 1.2 Enlaces por defecto
- Todo `a` sin estilo se ve azul. Esto rompe la paleta cerrada.
- **Propuesta:** incluir en `styles.css` un reset base: `a { color: var(--accent) }` y `a:hover { color: var(--accent-hover); text-decoration: underline }`.

### 1.3 Contraste naranja ↔ blanco
- El capítulo de correo del repo cita **3.1:1**. El valor WCAG vigente es **3.9:1**.
- En los dos casos el naranja sobre blanco **no alcanza 4.5:1** para texto de cuerpo. Solo sirve para titulares ≥ 24 px o negrita ≥ 18.66 px.
- **Propuesta:** corregir el dato en el capítulo de correo. Añadir una tabla de uso: naranja = títulos, cifras y botones con texto blanco en negrita; cuerpo siempre en negro o gris oscuro.

---

## 2. Tipografía

### 2.1 Mantener las familias del sitio al integrar
- La sección de campaña se integró al home con **Space Grotesk + Carlito**, las fuentes del sitio. Así el home no se lee como un micrositio aparte.
- **Propuesta:** regla de integración: *"Una campaña hereda la tipografía de su canal. No se introducen familias nuevas por campaña."*

### 2.2 Cursivas en relatos testimoniales
- Los 20 relatos transcritos llevan **cursivas reales del original**: palabras en lenguas indígenas, citas dentro de citas.
- La regla de cursivas (citas, lenguas indígenas, pilares) resultó suficiente. Pero hizo falta precisar qué hacer cuando **todo el relato es una cita**.
- **Propuesta:** en un relato en primera persona **no se pone todo en cursiva**. Se respeta la cursiva interna del original y el marco (voz, pueblo, territorio) va en redonda.

---

## 3. Contenido y voz

### 3.1 Fidelidad literal del relato
- Los relatos se publican **tal como los entregan las voces**. Solo se corrige formato; no se reescriben.
- El filtro editorial (*¿habla desde la fuerza o desde la carencia?*) se aplica a **títulos, SEO, asuntos de correo y CTA**, nunca al testimonio.
- **Propuesta:** añadir al capítulo de contenido: *"El testimonio es intocable. El filtro de voz se aplica al marco editorial que lo rodea."*

### 3.2 Contenido pendiente rotulado
- Los relatos 21–35 no habían llegado. Se usó una **reserva rotulada** ("Relato en preparación") en vez de texto de relleno.
- **Propuesta:** patrón oficial de **estado "en preparación"**: tarjeta en arena claro, etiqueta de texto (no solo color) y sin inventar contenido. Prohibido el *lorem ipsum* en piezas que se muestran a comunidades o aliados.

### 3.3 Ficha de relato como unidad de datos
- Cada relato se definió una sola vez con: `slug`, `fecha`, `voz`, `pueblo/territorio`, `tags`, `ilustración`, `titleSeo`, `cta`. Blog, landing, carrusel, home y newsletter la consumen.
- **Propuesta:** publicar la **ficha de relato** como componente de contenido del sistema: un esquema que cualquier campaña narrativa pueda reutilizar.

---

## 4. Imagen e ilustración

### 4.1 Ilustración para personas y comunidades
- Las 19 ilustraciones entregadas se **asignaron a escenas por su contenido visual**, no por orden.
- Esto es coherente con la prohibición de IA para representar personas: la ilustración de autor y la fotografía con consentimiento son las dos vías válidas.
- **Propuesta:** añadir a Fotografía una sección **"Ilustración de autor"**: cuándo sustituye a la foto (relato íntimo, niñez, memoria), procedencia y crédito obligatorios, nunca generada por IA.

### 4.2 Menos ilustraciones que relatos
- Hubo 19 ilustraciones para 35 relatos.
- **Propuesta:** regla de reutilización. Una ilustración puede acompañar a varios relatos si la escena coincide. Nunca dos veces seguidas en el mismo canal ni en el mismo envío.

### 4.3 Implementación web
- Poner las ilustraciones como **fondos CSS** evitó iconos de imagen rota mientras llegaban los archivos definitivos.
- **Propuesta (técnica):** recomendar un contenedor con fondo arena y relación de aspecto fija como estado de espera de toda imagen editorial.

---

## 5. Componentes y patrones nuevos

| Patrón | Dónde nació | Propuesta para el sistema |
|---|---|---|
| **Tarjeta de relato** (número, voz, pueblo, ilustración, tags) | Landing, Home | Nueva variante `Card type="relato"` |
| **Filtro por tag/territorio** | Landing 35 tarjetas | Chips con estado activo en texto + filete, no solo color |
| **Contador de campaña** (n.º / 35) | Landing, Newsletter | Variante de `StatHero` en formato serie |
| **Hero de campaña con objeto simbólico** (la olla) | Landing | Patrón "objeto ancla": un único elemento focal por campaña |
| **Sección de campaña en home** (encabezado + 3 destacados) | Home, sección 05 | Bloque reutilizable para futuras campañas |
| **Plantilla de relato blog** (h2, párrafos, cursivas, CTA final) | Relato Blog | Plantilla oficial de artículo testimonial |

---

## 6. Redes sociales

- El **carrusel de 6 láminas** (1080×1350) con pie por relato confirmó el formato de las guías por canal.
- Secuencia validada: portada con voz → cita → contexto (territorio) → relato (2 láminas) → cierre con CTA.
- **Propuesta:** fijar esta secuencia como **carrusel testimonial** en las guías por canal, con límite de palabras por lámina y pie de publicación con: voz, pueblo, CTA y hashtag de campaña.

---

## 7. Correo / newsletter

### 7.1 Anatomía única
- Una sola anatomía sirvió para los **46 envíos**: 35 relatos + 7 aperturas de temporada + 4 transversales (bienvenida, libro, cierre).
- Cada envío lleva **asunto, preheader, ficha de envío y fecha de calendario**.
- **Propuesta:** añadir al capítulo Correo la **familia "boletín de serie"**, distinta de las 5 familias de notificación AppSheet.

### 7.2 Asunto y preheader
- Los asuntos funcionan mejor con **la voz como protagonista** ("Lo que enseña la abuela…") que con la institución ("FUCAI presenta…").
- **Propuesta:** regla de asunto: ≤ 50 caracteres, comunidad o voz como sujeto, sin mayúsculas sostenidas y sin emoji. El preheader completa el asunto; no lo repite.

### 7.3 Producción técnica
- La maqueta está lista. El HTML de envío real (tablas + CSS en línea, probado en Gmail/Outlook) sigue abierto.
- **Propuesta:** extender `templates/correo-notificacion/` con una variante de boletín, que usará el mismo pie institucional fijo y la misma paleta cerrada de 7 hex.

---

## 8. Arquitectura del ecosistema

- **Una fuente de datos, cinco salidas:** landing, blog, carrusel, home y newsletter leen de los mismos archivos de datos. Un cambio en un relato se propaga a todos los canales.
- **Un índice del ecosistema** (mapa de piezas y estado) fue clave para coordinar.
- **Propuesta:** documentar el modelo **"campaña = datos + plantillas por canal"** como método para las próximas campañas institucionales.

---

## 9. Pendientes para el repo

1. Corregir contraste naranja↔blanco en el capítulo de correo (3.1 → **3.9:1**).
2. Añadir reset de enlaces naranjas a `styles.css`.
3. Crear `Card type="relato"` y el estado "en preparación".
4. Documentar la ilustración de autor en Fotografía.
5. Añadir la familia "boletín de serie" y su plantilla HTML de envío.
6. Añadir a guías por canal el carrusel testimonial de 6 láminas.
7. Publicar el esquema de ficha de relato.
8. Confirmar el set de íconos (Lucide u otro propio). Sigue `[POR CONFIRMAR]`.

---

## 10. Dónde quedó cada aprendizaje

Incorporado al repositorio el 2026-09-28. Lo que era **norma o corrección** se
aplicó en su capítulo; lo que era **decisión o componente por construir** quedó en
el registro de vacíos, para que no se pierda ni se invente por la puerta de atrás.

| # | Aprendizaje | Dónde quedó |
|---|---|---|
| 1.1 | Paleta de campaña cerrada, sin azules | Ya era norma (regla dura 4 del skill · `02_identidad-visual/color.md`). Confirmado, sin cambio |
| 1.2 | Enlaces por defecto salen azules | `analisis-de-vacios.md` §9 — **no aplicado**: un `a { }` general puede pisar la navegación del sitio en vivo |
| 1.3 | Contraste naranja↔blanco 3.1 → **3.9:1** | **Corregido** en `04_componentes/email/sistema-de-correo.md` §11 y `skill/fucai-branding/references/email.md`, con los umbrales WCAG de texto grande bien puestos |
| 2.1 | Una campaña hereda la tipografía de su canal | **Integrado** en `02_identidad-visual/tipografia.md` § Campañas |
| 2.2 | Cursivas cuando todo el texto es una cita | **Integrado** en `05_contenido-lenguaje/guia-editorial.md` § Cursivas |
| 3.1 | El testimonio es intocable | **Integrado** en `05_contenido-lenguaje/lexico-institucional.md` |
| 3.2 | Estado «en preparación» · prohibido el *lorem ipsum* | `analisis-de-vacios.md` §9 |
| 3.3 | Ficha de relato como esquema de contenido | `analisis-de-vacios.md` §9 |
| 4.1 | Ilustración de autor | **Integrado** en `02_identidad-visual/fotografia.md` y `skill/fucai-branding/references/photography.md`, con la tabla de **las cuatro vías de imagen** |
| 4.2 | Reutilizar una ilustración en varios relatos | **Integrado** en `fotografia.md` § Ilustración de autor |
| 4.3 | Contenedor de espera en vez de imagen rota | **Integrado** en `fotografia.md` § Ilustración de autor |
| 5 | Seis componentes de campaña nacidos en el proyecto | `analisis-de-vacios.md` §9 |
| 6 | Carrusel testimonial de 6 láminas | **Integrado** en `04_componentes/social/carrusel.md` |
| 7.1 | Familia «boletín de serie» | **Integrado** en `sistema-de-correo.md` §8.1 |
| 7.2 | Asunto con la voz como sujeto, preheader que completa | **Integrado** en `sistema-de-correo.md` §8.1 |
| 7.3 | Plantilla HTML de envío del boletín | `analisis-de-vacios.md` §9 |
| 8 | Modelo «campaña = datos + plantillas por canal» | `analisis-de-vacios.md` §9 |
| 9.8 | Set de íconos `[POR CONFIRMAR]` | `analisis-de-vacios.md` §9, junto al mismo vacío visto desde el lado impreso |

---

---

*Nuestro centro es la periferia* · FUCAI · comunicaciones@fucaicolombia.org
