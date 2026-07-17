# FUCAI — Guía de implementación del estilo en Squarespace 7.1 (paso a paso)

**Sitio:** www.fucaicolombia.org · **Plan requerido:** Business o Commerce (esta guía asume Commerce Basic; los Bloques de código con JS requieren Business o superior)
**Base:** Manual de Identidad Visual FUCAI v1.1 + `03_tokens/tokens.json` v1.7 + rediseño web 2026 (mockups del proyecto)
**Archivos que acompañan esta guía:** `squarespace/fucai-custom.css` · `squarespace/bloque-cifras.html`
**Última actualización:** julio 2026

---

## Índice

0. [Antes de empezar](#0-antes-de-empezar)
1. [El sistema de diseño en una página](#1-el-sistema-de-diseño-en-una-página)
2. [Configuración global paso a paso](#2-configuración-global-paso-a-paso)
3. [CSS personalizado](#3-css-personalizado)
4. [Header paso a paso](#4-header-paso-a-paso)
5. [Footer paso a paso](#5-footer-paso-a-paso)
6. [Patrones reutilizables (recetas)](#6-patrones-reutilizables)
7. [Receta por página](#7-receta-por-página)
8. [Bloque de cifras animadas](#8-bloque-de-cifras-animadas)
9. [IDs de sección](#9-ids-de-sección)
10. [SEO y metadatos](#10-seo-y-metadatos)
11. [Accesibilidad](#11-accesibilidad)
12. [Errores comunes y soluciones](#12-errores-comunes-y-soluciones)
13. [Checklist final](#13-checklist-final)

---

## 0. Antes de empezar

### 0.1 Qué necesitas tener a mano

| Recurso | Dónde está |
|---|---|
| CSS completo | `04_componentes/web/squarespace/fucai-custom.css` (este repo) |
| Bloque de cifras (HTML+JS) | `04_componentes/web/squarespace/bloque-cifras.html` (este repo) |
| Logo naranja / logo blanco | `02_identidad-visual/logo/logo_naranja.png` · `logo_blanco.png` |
| Paleta y tokens | `03_tokens/tokens.json` (los HEX de esta guía salen de ahí) |
| Léxico y voz | `05_contenido-lenguaje/lexico-institucional.md` |
| Cuenta Squarespace | Rol **Administrador** (Editor no puede tocar CSS ni Diseño) |
| Navegador | Chrome o Edge de escritorio (necesario para «Inspeccionar» en §9) |

### 0.2 Glosario de la interfaz (ES ↔ EN)

Squarespace puede mostrar el panel en inglés según la configuración de la cuenta. Equivalencias usadas en esta guía:

| Esta guía dice | En inglés |
|---|---|
| Estilos del sitio (icono de pincel al editar) | Site Styles |
| Sitio web → Herramientas del sitio web | Website → Website Tools |
| CSS personalizado | Custom CSS |
| Inserción de código | Code Injection |
| Bloque de código | Code Block |
| Bloque de resumen | Summary Block |
| Bloque de línea | Line Block |
| Encabezado fijo | Fixed Header |
| Temas de sección | Section Themes |
| Editar sección (icono de lápiz sobre una sección) | Edit Section |

> Las rutas del panel cambian levemente entre versiones. Si un menú no aparece donde se indica, usa el buscador del panel (tecla `/` o la lupa) y escribe el nombre del ajuste.

### 0.3 Orden de implementación (no lo alteres)

1. Configuración global (§2) → 2. Pegar CSS (§3) → 3. Header (§4) → 4. Footer (§5) → 5. Páginas (§6–§7) → 6. Cifras (§8) → 7. Sustituir IDs (§9) → 8. SEO (§10) → 9. Auditoría de accesibilidad (§11) → 10. Checklist (§13).

El CSS se pega **antes** de montar páginas: así ves el resultado real (tipografías, botones, numeración del menú) mientras construyes, y evitas re-trabajo.

---

## 1. El sistema de diseño en una página

Cinco atributos guían cada decisión: **minimalista · sofisticado · claro · cercano · con detalle técnico-editorial**.

| Elemento | Regla |
|---|---|
| Fondos | Blanco `#FFFFFF` domina (60%). Arena `#EDE8D3` / arena claro `#F6F3E9` para secciones de respiro. Oscuro `#161310` solo para bandas de cierre, equipo y footer. |
| Acentos | Naranja `#E94513` (25%). Verde `#2D6A4F` (10%) **solo** en territorio/naturaleza. Grises `#333333/#666666/#CCCCCC` (5%). |
| Títulos | **Space Grotesk Bold**, grandes (H1 46–98 px, H2 32–60 px), tracking −0.03em, interlínea ~1.0. |
| Cuerpo | **Carlito** (sustituto métrico de Calibri) 16–19 px, interlínea 1.5–1.65, máx ~46ch de ancho. |
| Encabezado de sección | «Encabezado técnico»: línea fina (hairline) arriba + número `01` en color de acento + kicker en mayúsculas con tracking 0.22em + (opcional) metadato a la derecha en gris. |
| Numeración | Números tabulares pequeños por todas partes: menú (01–06), secciones, listas, footer. Es la firma «técnica» del estilo. |
| Micro-animaciones | Reveal al hacer scroll (nativo), zoom lento del hero (CSS), contadores animados (JS), botones que se elevan al hover, imágenes con zoom suave al hover. |
| Botones | Primario: naranja, texto blanco, radio 4 px. Secundario: borde naranja, fondo transparente. |
| Enlaces | Naranja, sin subrayado; subrayado solo al hover. |
| Firma | *Nuestro centro es la periferia.* en cursiva + URL, siempre en el footer. |
| Fotografía | Real, de comunidades y territorio. Una imagen fuerte por sección. Texto sobre foto solo con degradado oscuro. |

**Prohibido:** verde fuera de territorio · naranja como fondo general · cuerpo de texto naranja sobre blanco o blanco sobre naranja · más de 2 fondos de color por página · emojis · iconografía decorativa.

---

## 2. Configuración global paso a paso

Todo lo de esta sección se hace **una sola vez** y aplica a todo el sitio.

### 2.1 Fuentes

**Ruta:** abre cualquier página → botón **Editar** → icono de **pincel** (arriba a la derecha) → **Fuentes**.

1. Entra en **Encabezados** (Headings) → **Familia tipográfica** → escribe `Space Grotesk` en el buscador → selecciónala → peso **Bold (700)**.
2. Abre **Encabezado 1** y fija exactamente:
   - Tamaño: `5.8rem` · Interlínea: `1` · Espaciado entre letras: `-0.03em` · Transformación: Ninguna
3. **Encabezado 2:** tamaño `3.5rem` · interlínea `1.05` · espaciado `-0.03em`
4. **Encabezado 3:** tamaño `1.8rem` · interlínea `1.2` · espaciado `0`
5. **Encabezado 4:** tamaño `1.3rem` · interlínea `1.25` · espaciado `0`
6. Entra en **Párrafos** (Paragraphs): deja la familia sans nativa (p. ej. Helvetica). **No busques Carlito aquí: no está en el selector; lo importa y aplica el CSS (§3).** Fija Párrafo 2 (el estándar) en `1.1rem`, interlínea `1.6`.
7. Entra en **Botones**: familia `Space Grotesk`, peso **Medium (500)**, tamaño `0.95rem`, espaciado `0.02em`, transformación Ninguna.
8. Entra en **Varios/Misceláneo** (Miscellaneous): familia `Space Grotesk`, tamaño `0.75rem`, transformación **Mayúsculas**, espaciado `0.2em`. (Esto viste categorías del blog, metadatos y navegación secundaria.)
9. Pulsa **Guardar** (arriba a la izquierda).

**✓ Verifica:** crea un bloque de texto de prueba con un H1: debe verse en Space Grotesk Bold, apretado y con interlínea compacta. El cuerpo aún se verá en la sans nativa — es normal hasta pegar el CSS.

### 2.2 Colores y temas de sección

**Ruta:** Editar → pincel → **Colores**.

**Paso A — Paleta.** Pulsa **Editar paleta** y asigna los 5 espacios con HEX exactos (escribe el valor, no lo elijas a ojo):

| Espacio de paleta | HEX | Nombre FUCAI |
|---|---|---|
| 1 (Blanco) | `#FFFFFF` | Blanco |
| 2 (Negro) | `#161310` | Oscuro |
| 3 (Acento 1) | `#E94513` | Naranja FUCAI |
| 4 (Acento 2) | `#EDE8D3` | Arena |
| 5 (Acento 3) | `#2D6A4F` | Verde Amazónico |

**Paso B — Temas de sección.** En la lista de temas (Lightest 1, Lightest 2, Light 1, Dark 1, Darkest 1…), edita **cuatro** y deja los demás sin usar. Para cada uno pulsa el lápiz y ajusta al menos: *Fondo de sección, Texto (párrafos), Encabezados, Fondo de botón primario, Texto de botón primario, Enlaces*:

| Tema Squarespace | Uso FUCAI | Fondo | Texto | Encabezados | Botón primario | Enlaces |
|---|---|---|---|---|---|---|
| **Lightest 1** → «Claro 1» | Tema por defecto | `#FFFFFF` | `#000000` | `#000000` | fondo `#E94513`, texto `#FFFFFF` | `#E94513` |
| **Lightest 2** → «Claro 2» | Territorio | `#F6F3E9` | `#000000` | `#000000` | fondo `#2D6A4F`, texto `#FFFFFF` | `#2D6A4F` |
| **Light 1** → «Claro 3» | ODS, banners cálidos | `#EDE8D3` | `#000000` | `#000000` | fondo `#2D6A4F`, texto `#FFFFFF` | `#2D6A4F` |
| **Darkest 1** → «Oscuro 1» | Equipo, cierre, footer | `#161310` | `#EDE8D3` | `#FFFFFF` | fondo `#E94513`, texto `#FFFFFF` | `#F4A28A` |

**✓ Verifica:** inserta una sección vacía, ábrela con el lápiz → pestaña **Colores** → cambia entre los 4 temas: los fondos deben corresponder exactamente a la tabla.

> Regla de asignación al construir: cada sección nueva sale en Claro 1. Solo cambias el tema cuando la receta de página (§7) lo pide. Nunca más de 2 fondos de color (arena/oscuro) por página.

### 2.3 Animaciones

**Ruta:** Editar → pincel → **Animaciones**.

1. Estilo: **Deslizar hacia arriba** (Fade + slide up).
2. Velocidad: **Media**.
3. Guardar.

Esto replica el «reveal» del mockup en todos los bloques sin código. No actives por bloque ninguna otra animación.

### 2.4 Espaciado y anchos

1. Editar → pincel → **Tamaño y valores** / **Espaciado**: ancho máximo del sitio **1280 px**; margen lateral ~4vw.
2. El relleno vertical se fija **por sección**: lápiz de la sección → **Formato** → altura de sección **Grande** (≈10 vw arriba y abajo). Es el valor por defecto de FUCAI: ante la duda, más aire.
3. Dentro de Fluid Engine usa siempre la escala 4 · 8 · 12 · 16 · 24 · 32 · 48 px para separar bloques (aprox.: 1 celda de la retícula ≈ 24 px en escritorio).

### 2.5 Favicon y logo

1. **Favicon:** Sitio web → Herramientas del sitio web → **Favicon** → sube la «F» naranja `#E94513` sobre blanco, PNG 32×32.
2. **Logo:** se sube en el header (§4.1). Usa `logo_naranja.png` para el header claro y `logo_blanco.png` en contextos oscuros (footer, §5). Proporción 2:1. **Nunca** deformar, recolorear ni añadir sombra.

---

## 3. CSS personalizado

### 3.1 Pegar el archivo

1. Abre `04_componentes/web/squarespace/fucai-custom.css` y copia **todo** su contenido (Ctrl+A, Ctrl+C).
2. En el panel: **Sitio web → Herramientas del sitio web → CSS personalizado** (ruta clásica: Diseño → CSS personalizado).
3. Si el campo ya tiene CSS de pruebas anteriores, bórralo por completo. Pega el archivo.
4. Pulsa **Guardar**.

**✓ Verifica de inmediato (con la vista previa del propio editor):**
- El cuerpo de texto cambió a Carlito (más redonda que Helvetica; la «g» de un solo piso).
- El menú del header muestra `01 02 03…` delante de cada enlace.
- Un botón primario se eleva 2 px al pasar el mouse.
- Los enlaces de párrafo se ven naranjas sin subrayado y se subrayan al hover.

Si algo de eso no ocurre, ve a §12 (errores comunes).

### 3.2 Qué hace cada bloque

El archivo está comentado con esta numeración:

| # | Bloque | Efecto |
|---|---|---|
| 1 | Fuentes | Importa Carlito y lo aplica al cuerpo; tracking y interlíneas de títulos |
| 2 | Header | Fondo translúcido con blur; numeración 01–06 del menú (escritorio y móvil); subrayado naranja animado |
| 3 | Botones | Primario naranja radio 4 px con elevación; secundario con borde naranja; variante para secciones oscuras |
| 4 | Enlaces | Naranja, subrayado solo al hover |
| 5 | Hero | Zoom lento de la imagen de fondo — **requiere sustituir `HERO_ID`** (§9) |
| 6 | Imágenes | Zoom suave al hover en imágenes enlazadas + esquinas 6 px |
| 7 | Aliados | Logos en gris, color al hover — **requiere sustituir `ALIADOS_ID`** (§9) |
| 8 | Blog | Títulos Space Grotesk con hover naranja; metadatos técnicos en mayúsculas; blockquote con filete naranja |
| 9 | Newsletter | Inputs y botón al estilo FUCAI |
| 10 | Footer | Hover cálido `#F4A28A` en enlaces |
| 11 | Accesibilidad | Anillo de foco naranja + `prefers-reduced-motion`. **No eliminar** |

> El CSS usa selectores estándar de 7.1 (`#header`, `.header-nav-item`, `.sqs-button-element--primary`, `.summary-title`…). Si Squarespace cambia clases en una actualización, revisa este archivo primero. Mantén el archivo del repo y el campo de Squarespace **sincronizados**: cualquier ajuste se hace primero en el repo y se vuelve a pegar completo.

---

## 4. Header paso a paso

**Ruta:** Editar → pasa el mouse por el header → **Editar encabezado del sitio**.

### 4.1 Logo
1. **Título y logo del sitio** → sube `logo_naranja.png`.
2. Altura del logo: **38 px** (rango válido: 36–40).
3. Texto alternativo: `FUCAI — Fundación Caminos de Identidad`.

### 4.2 Navegación
1. En **Páginas**, ordena la navegación principal exactamente así (arrastra):
   `Nosotros · Territorios · Líneas · Artículos · Tienda · Transparencia`
2. **No escribas números en los títulos de página.** El CSS antepone `01…06` con contadores automáticos; si escribes «01 Nosotros» quedará duplicado.
3. Todo lo que no deba aparecer en el menú va a la sección **No vinculadas**.

### 4.3 Botón del header
1. Editar encabezado → **Elementos** → activa **Botón**.
2. Texto: `Involúcrate` · Enlace: página Involúcrate.
3. Estilo: **Primario** (el CSS lo pinta naranja radio 4 px).

### 4.4 Comportamiento y estilo
1. **Estilo** → Encabezado fijo: **Básico**.
2. Fondo: **Sólido, blanco** (el CSS lo vuelve translúcido con blur; no actives el ajuste nativo de transparencia).
3. Relleno vertical: mínimo — altura total objetivo ~72 px.
4. No actives el borde inferior nativo: el hairline lo pinta el CSS.

**✓ Verifica:** en vista previa, el menú muestra `01 Nosotros … 06 Transparencia`, con subrayado naranja que se dibuja al hover; al hacer scroll el header se queda fijo con leve transparencia. En móvil (icono de teléfono del editor), el menú hamburguesa muestra los mismos números y el botón «Involúcrate» naranja.

---

## 5. Footer paso a paso

**Ruta:** Editar → baja al pie → **Editar pie de página**. Crea **3 secciones** (franjas), todas con tema **Oscuro 1** (lápiz → Colores → Darkest 1).

### Franja A — Firma editorial
1. Añade un **Bloque de línea** a todo el ancho (queda en arena tenue por el tema).
2. Debajo, fila con 2 bloques de texto pequeños en formato **Misceláneo**:
   - Izquierda: `FIRMA` → coloréalo naranja `#E94513`.
   - Derecha: `FUCAI — DESDE 1992` → gris arena (usa `#EDE8D3` al 60%; en el selector de color baja la opacidad).
3. Bloque de texto grande, formato Encabezado 2, **cursiva**: *Nuestro centro es **la periferia**.* — selecciona «la periferia» y coloréala `#F4A28A`.
4. Debajo, bloque de texto con enlace: `www.fucaicolombia.org` (el CSS le da hover cálido).

### Franja B — Cuatro columnas
En Fluid Engine coloca 4 grupos de bloques (en móvil se apilan en este mismo orden):

1. **Columna 1:** imagen `logo_blanco.png` (ancho ~140 px) + texto (máx. 34ch): «Más de 30 años caminando junto a los pueblos indígenas de la Amazonía, la Orinoquía, La Guajira y el Cauca.»
2. **Columna 2 — EXPLORA:** etiqueta `EXPLORA` (Misceláneo, naranja) + 6 enlaces en bloques de texto, numerados **a mano** (aquí sí):
   `01 Nosotros` · `02 Territorios` · `03 Líneas de enfoque` · `04 Artículos` · `05 Tienda` · `06 Transparencia`
   Números en arena al 35% de opacidad, texto del enlace en arena al 85%.
3. **Columna 3 — SÍGUENOS:** etiqueta + enlaces `Instagram ↗` `Facebook ↗` `YouTube ↗` `LinkedIn ↗` (el `↗` se escribe como texto, U+2197).
4. **Columna 4 — CONTACTO:** dirección en dos líneas · correo en `#F4A28A` · teléfono.

> Separadores: déjalo al aire (preferido) o usa bloques de línea verticales finos. Nada de cajas.

### Franja C — Barra técnica
- Izquierda: enlaces legales pequeños (Misceláneo): `Política de privacidad · Tratamiento de datos · Régimen ESAL · Transparencia`.
- Derecha: `NIT 800.173.574-1 · Bogotá 4°39′N 74°04′O · © 2026 FUCAI` — Space Grotesk 12 px, arena al 45%.

**✓ Verifica:** fondo `#161310` en las 3 franjas; ningún texto pequeño en naranja puro `#E94513` sobre el fondo oscuro (usa `#F4A28A` o arena); hover de enlaces vira a `#F4A28A`.

---

## 6. Patrones reutilizables

Estos cinco patrones construyen **todas** las páginas. Los pasos son de Fluid Engine (editor de arrastrar sobre retícula).

### 6.1 Encabezado técnico de sección — el patrón firma

1. **Bloque de línea** a todo el ancho del contenido, pegado al borde superior del área de contenido.
   Color de la línea: negro en fondos claros · arena al 20% en oscuros · **verde** si la sección es de territorio.
2. Justo debajo (separación 8–12 px), una fila de bloques de texto:
   - Izquierda, en un solo bloque (formato Misceláneo): `01  KICKER EN MAYÚSCULAS` — colorea el `01` con el acento de la sección (naranja o verde) y deja el kicker en negro/arena según fondo.
   - Derecha (opcional): metadato en gris `#666666`: `DESDE 1992 — BOGOTÁ, CO`, `4 REGIONES`, `ÍNDICE 01–07`…
3. Numera las secciones **de arriba abajo por página** (01, 02, 03…). El hero no se numera.

**✓ Verifica:** línea + número + kicker presentes; kicker con tracking amplio (viene del formato Misceláneo §2.1-8).

### 6.2 Titular editorial
- H2 en Space Grotesk Bold, una sola idea, máx. ~16–20 caracteres por línea (fuerza saltos con Shift+Enter si hace falta).
- Si lleva palabra en color, **solo una**, en el acento de la sección (selección manual de color sobre el texto).
- Acompañado de **un** párrafo de apoyo (máx. 46ch de ancho de bloque) o de nada.

### 6.3 Tarjeta de imagen con texto superpuesto (territorios)
1. **Bloque de imagen**, recorte 3:4 (vertical), **con enlace** a la página del territorio.
2. Superposición: en el bloque de imagen activa el ajuste de **superposición/overlay** con degradado oscuro de abajo hacia arriba (si tu plantilla no lo trae, superpón un Bloque de forma rectangular negro con degradado y opacidad ~55%, por debajo del texto en el orden de capas).
3. Texto arriba-izquierda (Misceláneo): `01 —` en blanco al 85%.
4. Texto abajo: nombre del territorio (H3/H4, blanco) + 1 línea de descripción (14 px, blanco al 85%).
5. El zoom al hover y las esquinas 6 px los pone el CSS (bloque 6). No añadas sombras.

### 6.4 Lista índice (líneas de enfoque)
1. Por cada fila: **Bloque de línea** fino (color `#E4DFCD`) + fila con 3 bloques de texto:
   `01` (gris `#666666`, tabular) · nombre (H4, Space Grotesk Bold) · descripción (Carlito 17 px, gris `#333333`).
2. Enlaza nombre (y opcionalmente toda la fila) a su página.
3. Hover: el color de enlace del tema ya vira a naranja; no necesitas CSS extra.

### 6.5 Banda oscura
1. Sección nueva → lápiz → Colores → **Oscuro 1** (Darkest 1).
2. Composición: mitad imagen a sangre / mitad texto, o texto centrado para CTAs.
3. Kickers y acentos en `#F4A28A` — **nunca** naranja puro `#E94513` para texto pequeño sobre oscuro.
4. Botones: primario naranja + secundario (el CSS le pone borde arena 40% automáticamente en secciones oscuras).

---

## 7. Receta por página

Cada sección indica su tema entre paréntesis. Construye siempre con los patrones de §6.

### 7.1 Inicio (Home)
1. **Hero** (imagen a sangre, pantalla completa): kicker `FUNDACIÓN CAMINOS DE IDENTIDAD` en `#F4A28A` · H1 pilar **«Nuestro camino es la identidad.»** (máx. 8 palabras, sin «!») · párrafo ≤ 46ch · botón primario «Conoce nuestro trabajo» + enlace «Contáctate →» · franja inferior con hairline y los 4 territorios numerados (`01 Amazonía · 02 Orinoquía · 03 La Guajira · 04 Cauca`, enlazados). Ajusta la sección a altura **Pantalla completa** y activa degradado oscuro sobre la foto.
2. **01 Somos FUCAI** (Claro 1): encabezado técnico (§6.1) + H2 editorial con «identidad» en naranja + párrafo/enlace + **bloque de cifras** (§8).
3. **02 Áreas de incidencia** (Claro 2, acento verde): encabezado técnico verde + H2 «El territorio es el protagonista.» + 4 tarjetas 3:4 (§6.3).
4. **03 Líneas de enfoque** (Claro 1): encabezado técnico + H2 + lista índice de 7 (§6.4).
5. **04 Talento local** (Oscuro 1): foto equipo / texto (§6.5).
6. **05 Voces del territorio** (Claro 1): encabezado técnico con «Ver todos →» a la derecha + **Bloque de resumen** del blog — configúralo: origen = blog «Artículos», diseño **Cuadrícula**, elementos **3**, mostrar miniatura + fecha + categoría, ocultar extracto largo.
7. **06 Agenda 2030** (Claro 3, acento verde): encabezado técnico verde + cuadrícula de 6 textos `ODS 2 / Hambre cero / línea de una frase`.
8. **Aliados** (Claro 1, sin número): etiqueta centrada + fila de logos como bloques de imagen (gris → color al hover vía CSS, requiere §9).
9. **07 Involúcrate** (Oscuro 1): encabezado técnico + H2 grande «Súmate a nuestro trabajo.» + botones Donar (primario) / Aliarse (secundario) + **Bloque de boletín**.

### 7.2 Territorios (Amazonía, Orinoquía, La Guajira, Cauca)
> Acento de estas páginas: **verde**. Fondo oscuro de heros y CTA: verde profundo `#1B4032` (fíjalo como fondo de sección personalizado, no como tema global).
1. **Hero** ~64vh: breadcrumb `Territorios / Amazonía` (Misceláneo) · H1 gigante · párrafo.
2. **Datos clave** (Claro 2): 4 cifras verdes grandes con etiqueta técnica (guion corto verde + label 11.5 px mayúsculas).
3. **01 Cómo caminamos aquí** (Claro 1): encabezado técnico verde + lead 20–25 px + 1–2 párrafos + pilar en cursiva verde.
4. **Cita:** blockquote (botón de cita del editor de texto) — el CSS le pone filete izquierdo; para páginas de territorio cámbialo a verde seleccionando el texto y coloreándolo, o deja el filete naranja global si la cita no es ambiental.
5. **Galería** (fondo `#1B4032`): mosaico de 5 fotos (1 vertical dominante + 4).
6. **02 Líneas activas aquí** (Claro 1): encabezado técnico + tarjetas con borde `#E4DFCD`, número verde.
7. **Artículos relacionados** (Claro 2): **Bloque de resumen** filtrado por la etiqueta del territorio, 2 elementos.
8. **CTA** (fondo `#1B4032`): H2 centrado + Donar/Aliarse.

### 7.3 Líneas de enfoque (índice + 7 páginas)
- **Índice:** hero corto claro + lista índice completa (§6.4) con descripciones.
- **Página de línea:** hero con foto y kicker numerado (`02 · SOBERANÍA ALIMENTARIA`) · encabezado técnico + narrativa · datos/hitos · artículos relacionados · CTA. Acento naranja, salvo Sostenibilidad y Soberanía alimentaria, que pueden usar verde.

### 7.4 Artículos (Blog)
1. Páginas → **+** → **Blog** → nómbralo «Artículos» → URL `/articulos`.
2. Cada entrada: **categoría** (Veeduría, Sostenibilidad, Soberanía alimentaria, Género, Niñez…) + **etiqueta** de territorio (Amazonía, Guajira…) + **imagen destacada** + **extracto manual** de 2 líneas máx. (alimenta los bloques de resumen y el SEO).
3. Diseño de entrada: imagen destacada a sangre · metadatos (el CSS los pone en mayúsculas naranjas) · H1 editorial · cuerpo a ~700 px · citas con blockquote.
4. Página índice del blog: hero corto + cuadrícula nativa o Bloque de resumen con filtros por categoría.

### 7.5 Nosotros
Hero editorial claro (H1 grande + foto) · 01 Historia (narrativa + hitos numerados) · 02 Equipo (banda oscura o retratos en cuadrícula) · 03 Metodología VJACel (Ver–Juzgar–Actuar–Celebrar como lista índice §6.4) · pilares en cursiva · CTA.

### 7.6 Involúcrate
Hero corto · `00 FORMAS DE COLABORAR` como índice de anclas · secciones numeradas: 01 Donar (datos bancarios/pasarela) · 02 Aliarse · 03 Suma tu talento · 04 Difundir · boletín (banda oscura). Formularios: **Bloque de formulario** nativo; el botón hereda el primario.

### 7.7 Tienda
**Commerce** nativo: productos con fotos reales, categorías (Tejido Wayúu, Café, Artesanía…). El CSS viste botones y tipografía. Ficha: título Space Grotesk, precio tabular, descripción Carlito. Franja «Cada compra sostiene autonomía» como banda arena (Claro 3).

### 7.8 Transparencia
Página documental: encabezados técnicos numerados por año/tipo · documentos PDF con **Bloque de enlace/archivo** · tabla de financiadores como filas con filetes horizontales finos (bloques de línea), nunca cajas de color.

---

## 8. Bloque de cifras animadas

Único JS del sitio. Va en la sección «01 Somos FUCAI» de Inicio.

1. En la sección, pulsa **+** → **Código** (Bloque de código). Tipo: **HTML** · «Mostrar código fuente» desactivado.
2. Abre `04_componentes/web/squarespace/bloque-cifras.html`, copia **todo** y pégalo en el bloque.
3. Pulsa fuera del bloque y **Guardar**.
4. Para cambiar cifras o textos, edita solo `data-target`, `data-suffix` y las etiquetas `fucai-cifra-label` (instrucciones en el propio archivo). Valores actuales: 30+ años · 4 territorios · 7 líneas.

**Comportamiento esperado:** los números cuentan de 0 al valor al entrar en pantalla (1.4 s, easing suave, una sola vez). Con `prefers-reduced-motion` activo muestran el valor final sin animar.

**✓ Verifica en el sitio publicado** (el JS no corre dentro del editor): recarga la página, baja hasta la sección y confirma la animación. Si ves el código como texto plano, el bloque quedó en tipo Markdown — cámbialo a HTML.

> Si algún día se baja de plan y los bloques de código dejan de ejecutar JS, sustituye por 3 bloques de texto estáticos — el diseño no se rompe.

---

## 9. IDs de sección

Dos reglas del CSS necesitan el ID real de su sección:

| Marcador en el CSS | Sección | Efecto |
|---|---|---|
| `HERO_ID` | Hero de Inicio | Zoom lento de la foto al cargar |
| `ALIADOS_ID` | Aliados (Inicio) | Logos gris → color al hover |

**Paso a paso (hazlo con la página ya publicada):**

1. Abre www.fucaicolombia.org en Chrome (no en el editor).
2. Clic derecho sobre el hero → **Inspeccionar**.
3. En el panel de DevTools, sube por el árbol HTML hasta el elemento `<section ...>` que envuelve el hero.
4. Copia el valor del atributo `data-section-id="..."` (una cadena tipo `65f2c3a1b2…`). Doble clic sobre el valor lo selecciona.
5. Ve a CSS personalizado, usa Ctrl+F del navegador o busca visualmente `HERO_ID` y sustitúyelo por la cadena copiada. El selector queda: `section[data-section-id="65f2c3a1b2…"] .section-background img`.
6. Repite los pasos 2–5 con la sección de Aliados y `ALIADOS_ID`.
7. Guardar → recarga el sitio publicado → **✓ Verifica:** el hero hace zoom-out lento (~14 s) al cargar; los logos de aliados están en gris y recuperan color al hover.

Atajo: extensión de Chrome «Squarespace ID Finder» muestra los IDs superpuestos sin abrir DevTools.

> Para replicar el zoom en los heros de Territorios: añade más selectores separados por coma en el bloque 5 del CSS, uno por cada `data-section-id`.

---

## 10. SEO y metadatos

1. **Título del sitio:** Configuración → SEO → título: `FUCAI — Fundación Caminos de Identidad`.
2. **Descripción por página:** en Páginas, engranaje de cada página → pestaña SEO → una frase con palabras clave naturales: *identidad cultural, pueblos indígenas, Amazonía, soberanía alimentaria, comunidades indígenas Colombia, Sentencia T-302*.
3. **URLs limpias** (engranaje → General → URL): `/territorios/amazonia`, `/lineas/soberania-alimentaria`, `/articulos/...`. Sin mayúsculas, sin tildes, sin guiones bajos.
4. **Imagen social (og:image)** por página: engranaje → Compartir en redes → foto real 1200×630; con degradado oscuro si lleva texto.
5. **Blog:** extracto manual siempre (2 líneas máx.).

---

## 11. Accesibilidad

- Contraste mínimo: 3:1 títulos, 4.5:1 cuerpo. **Naranja↔blanco (3.1:1) solo en títulos grandes** (≥24 px bold); nunca en cuerpo.
- Sobre oscuro `#161310`, texto pequeño siempre en arena `#EDE8D3`/blanco — kickers en `#F4A28A`, nunca `#E94513` puro.
- Texto sobre fotos: siempre con degradado oscuro debajo (≥4.5:1 medido sobre la zona del texto).
- Nunca transmitir información solo con color (los números y etiquetas del sistema ya ayudan).
- El CSS añade anillo de foco naranja para teclado (bloque 11) — no lo elimines.
- **Alt text en toda foto**: describe escena y territorio («Abuela y niña siembran yuca en la chagra, Amazonía»). Se edita en cada bloque de imagen → pestaña de contenido.
- **Auditoría antes de lanzar:** recorre Inicio solo con Tab (todo enlace/botón debe mostrar el anillo naranja) y pasa las páginas clave por un verificador de contraste (p. ej. WebAIM) con los pares de color reales.

---

## 12. Errores comunes y soluciones

| Síntoma | Causa probable | Solución |
|---|---|---|
| El cuerpo no se ve en Carlito | El `@import` debe ser la **primera línea** del CSS; hay reglas o comentarios antes | Repega el archivo completo; nada por encima del `@import` |
| Menú con números duplicados («01 01 Nosotros») | Se escribieron números en los títulos de página | Quita los números de los títulos; el CSS los pone solo |
| El menú no muestra números | CSS sin guardar, o la plantilla usa clases distintas | Guarda el CSS; verifica en el inspector que exista `.header-nav-item` |
| El hero no hace zoom / aliados no están en gris | `HERO_ID` / `ALIADOS_ID` sin sustituir, o se copió el ID con espacios | Repite §9; el ID va sin espacios y entre comillas |
| El bloque de cifras muestra el código como texto | Bloque de código en modo Markdown | Edita el bloque → tipo **HTML** |
| Las cifras no animan | Estás dentro del editor (el JS no corre ahí) o plan sin JS | Verifica en el sitio publicado; plan Business+ |
| Botones sin radio 4 px o sin elevación | Estilos de botón del tema pisan el CSS, o botón «terciario» | Usa solo Primario/Secundario; revisa que el CSS esté completo |
| Un tema de sección se ve con colores viejos | Se editó la paleta pero no el tema | Edita el **tema** (lápiz sobre Lightest 1, etc.) y fija los HEX de §2.2 |
| Texto naranja ilegible sobre oscuro | Se usó `#E94513` en vez de `#F4A28A` | Sustituye por durazno `#F4A28A` (regla §11) |
| En móvil el orden de bloques queda ilógico | Fluid Engine reordena por posición vertical | Abre la vista móvil del editor y reordena manualmente cada sección |
| El CSS dejó de funcionar tras una actualización de Squarespace | Cambio de clases internas | Revisa `fucai-custom.css` bloque por bloque en el inspector y actualiza selectores; registra el cambio en el repo |

---

## 13. Checklist final

**Sistema**
- [ ] Encabezado técnico (hairline + número + kicker) en cada sección de contenido
- [ ] Numeración coherente de arriba a abajo en cada página
- [ ] Máx. 2 fondos de color por página; el blanco domina

**Marca**
- [ ] Space Grotesk solo en títulos; cuerpo Carlito
- [ ] Verde solo en Territorios / Sostenibilidad / Soberanía alimentaria
- [ ] Hero de Inicio = pilar de marca, máx. 8 palabras, sin «!»
- [ ] Footer con *Nuestro centro es la periferia* + URL + NIT
- [ ] Voz: comunidades protagonistas; sin «beneficiarios», «ayudar», «intervenir», «víctimas», «vulnerables»

**Técnica**
- [ ] CSS pegado completo; `@import` de Carlito en la primera línea
- [ ] `HERO_ID` / `ALIADOS_ID` sustituidos y verificados en el sitio publicado
- [ ] Animación nativa «Deslizar hacia arriba», velocidad media
- [ ] Bloque de cifras contando al hacer scroll (verificado publicado)
- [ ] Header fijo con blur; menú numerado 01–06 (escritorio y móvil)
- [ ] Botón primario naranja radio 4 px con elevación al hover
- [ ] Blog conectado a los bloques de resumen de Inicio y Territorios
- [ ] Newsletter conectado (Email Campaigns o Mailchimp)
- [ ] Alt text en todas las fotos; navegación por Tab con foco visible
- [ ] Revisión móvil de cada página (Fluid Engine reordena: verifica jerarquía)
- [ ] og:image y descripción SEO en cada página

---

*Nuestro centro es la periferia.* · www.fucaicolombia.org
