# Color — FUCAI

> Narrativa y reglas de uso de la paleta. **La autoridad de los valores es
> `03_tokens/tokens.json`** (primitivos en `color.*`, semánticos en `surface.*`,
> `brand.*`, `accent.*`, `text.*`). Las tablas de valores están marcadas `[GEN]`:
> hoy se rellenan con los tokens vigentes; en el futuro un script las regenerará.

## Raíz territorial de la paleta

El color es narrativo y se usa con mesura: **naranja** = tierra, energía, fuego;
**arena** = territorios áridos de La Guajira y suelos amazónicos; **verde** = la
selva y la vida. El verde **no** es intercambiable con el naranja: aparece solo
en contextos de territorio, naturaleza y medio ambiente.

## Proporción 60-25-10-5

60 % blanco/arena · 25 % naranja · 10 % verde (solo territorio) · 5 % negro/grises.
Naranja y verde son **acentos**, nunca fondos generales. Esta proporción es lo que
hace una pieza minimalista y sofisticada a la vez (ver `01_fundamentos/principios-de-diseno.md`).

## Paleta de marca

<!-- [GEN] derivado de tokens.json (color.* → HEX); RGB/CMYK/Pantone desde Manual v1.1 -->

| Token | Nombre | HEX | RGB | CMYK | Pantone | Rol |
|-------|--------|-----|-----|------|---------|-----|
| `color.naranja` | Naranja FUCAI | #E94513 | 233,69,19 | 0/70/92/0 | 1665 XGC | Primario |
| `color.arena` | Arena / Crema | #EDE8D3 | 237,232,211 | 0/2/11/7 | 11-0105 TPG | Secundario / calidez |
| `color.verde` | Verde Amazónico | #2D6A4F | 45,106,79 | 75/0/53/58 | 18-0135 TCX | Terciario (solo territorio) |
| `color.blanco` | Blanco | #FFFFFF | 255,255,255 | 0/0/0/0 | 11-0601 TCX | Neutro / fondo |
| `color.negro` | Negro | #000000 | 0,0,0 | 0/0/0/100 | — | Neutro / texto |

## Tintes (50 %) y sombra

<!-- [GEN] derivado de tokens.json (color.*) -->

| Token | Nombre | HEX | Uso |
|-------|--------|-----|-----|
| `color.durazno` | Naranja claro | #F4A28A | **Solo fondo** de llamadas/cajas (texto oscuro encima) o acento sobre oscuro; nunca texto ni hover sobre claro |
| `color.arena-claro` | Arena claro | #F6F3E9 | Filas alternas, cajas informativas |
| `color.verde-claro` | Verde claro | #74B597 | **Solo fondo** de secciones ambientales y badges (texto oscuro encima); nunca color de texto |
| `color.naranja-oscuro` | Naranja oscuro | #C13A10 | Hover de acciones (`accent.hover`), sombra, profundidad |

**Regla de tintes:** los tintes al 50 % (durazno, verde-claro) rinden ~2:1 contra
blanco: son **superficies**, no tintas de texto ni de ícono. El hover de acciones
sobre fondo claro es `accent.hover` (naranja oscuro, 5.4:1 con texto blanco).

## Grises de soporte (no son color de marca)

<!-- [GEN] derivado de tokens.json (color.*) -->

| Token | HEX | Uso |
|-------|-----|-----|
| `color.gris-texto` | #333333 | Texto secundario, captions, footers |
| `color.gris-borde` | #666666 | Bordes y separadores |
| `color.gris-medio` | #999999 | Etiquetas de eje en gráficas |
| `color.gris-linea` | #CCCCCC | Líneas sutiles, datos atenuados |
| `color.gris-relleno` | #E8E8E8 | Rellenos sutiles de tabla/celda |

## Combinaciones autorizadas y contraste

<!-- [GEN] contraste calculado desde tokens.json (WCAG 2.x) — lo verifica build-skill.js -->

| Fondo | Texto | Contraste | Uso |
|-------|-------|-----------|-----|
| Blanco (`color.blanco`) | Negro (`color.negro`) | 21:1 | Cuerpo de texto |
| Blanco (`color.blanco`) | Naranja (`color.naranja`) | 3.9:1 | **Solo H1/H2 — nunca cuerpo** |
| Blanco (`color.blanco`) | Verde (`color.verde`) | 6.4:1 | Títulos de secciones de territorio |
| Naranja (`color.naranja`) | Blanco (`color.blanco`) | 3.9:1 | **Solo encabezados grandes / portadas pptx** |
| Naranja oscuro (`color.naranja-oscuro`) | Blanco (`color.blanco`) | 5.4:1 | Hover/activo de acciones |
| Verde (`color.verde`) | Blanco (`color.blanco`) | 6.4:1 | Secciones de impacto ambiental |
| Arena (`color.arena`) | Negro (`color.negro`) | 17.1:1 | Infografías, banners |
| Arena (`color.arena`) | Gris texto (`color.gris-texto`) | 10.3:1 | Texto secundario sobre banda arena |
| Arena claro (`color.arena-claro`) | Gris texto (`color.gris-texto`) | 11.4:1 | Filas alternas, cajas |

Disciplina (detalle en `06_accesibilidad/estandar-accesibilidad.md`): mínimo 3:1
para títulos, 4.5:1 para cuerpo. Naranja↔blanco (3.9:1) y naranja↔arena (3.2:1)
**solo** en texto grande en negrita — nunca cuerpo ni captions. Nunca transmitir
información solo por color.

> Nota: estas cifras se calculan con la fórmula WCAG desde los tokens (no se
> copian del Manual). Si un primitivo cambia, `scripts/build-skill.js` detecta la
> deriva de esta tabla.

## Reglas duras de superficie (ya en tokens)

- **Word/Docs: fondo de página SIEMPRE blanco**, portada y contraportada incluidas
  (`surface.page.docx`). La calidez entra por la **banda arena** (`surface.warmth.docx`),
  nunca por un fondo naranja a sangre.
- **Naranja de fondo solo en portadas/secciones/cierres de PowerPoint/Slides**
  (`surface.title.pptx`).

## Colores semánticos de estado (éxito / error / alerta)

**Resuelto (2026-09): capa funcional, no de marca.** Vive fuera de `color.*` a
propósito — la paleta de marca sigue cerrada — y solo existe dentro de interfaces.

<!-- [GEN] derivado de tokens.json (state.*) — lo verifica build-skill.js -->

| Token | Hex | Qué señala | Sobre blanco |
|---|---|---|---|
| `state.neutral` | `#666666` | Borrador, inicial, anulado | 5.7:1 |
| `state.warning` | `#E94513` | En trámite: pendiente, en revisión | 3.9:1 · solo texto grande |
| `state.info` | `#2A6F97` | En curso: desembolsado, en camino | 5.5:1 |
| `state.success` | `#0F7B4F` | Cerrado correctamente: legalizado, aprobado | 5.3:1 |
| `state.danger` | `#9B2226` | Requiere acción: devuelto, mora, alerta | 7.9:1 |

**No se usan** en piezas públicas, documentos, portadas, presentaciones ni redes.
**Nunca solo color:** siempre con ícono y etiqueta. Y `state.success` **no es** el
verde de territorio: `brand.territory` `#2D6A4F` sigue siendo solo narrativo.


> [Pendiente: definir como tokens los colores de estado (éxito/error/alerta) para
> interfaces. `tokens.json` **no** los define hoy, y la paleta del Manual excluye
> rojo/azul/morado/amarillo genéricos. Propuesta a validar y luego tokenizar (no
> oficial): alerta/acento de atención = naranja `brand.primary`; confirmación con
> verde **solo** si el contexto es territorial; estados neutros con grises de
> soporte. Acompañar SIEMPRE de ícono/etiqueta, nunca solo color.]

## Visualización de datos

Una serie → **rampa naranja**; serie de territorio/naturaleza → **rampa verde**;
ejes/líneas/etiquetas → **rampa neutral**. Sin azul/rojo/morado/amarillo; máx. 3
tonos por gráfico; resalta un dato clave en naranja y atenúa el resto a
`color.gris-linea`. Las rampas viven en `03_tokens/tokens.json` (`dataviz.ramp.*`) y
las consumen los generadores (p. ej. `scripts/generators/fucai_xlsx.py` →
`RAMP_ORANGE`, `RAMP_GREEN`, `RAMP_NEUTRAL`).

<!-- [GEN] derivado de tokens.json (dataviz.ramp.*) -->

| Rampa | 1 (oscuro) | 2 | 3 | 4 | 5 | 6 | 7 (claro) |
|-------|-----------|---|---|---|---|---|-----------|
| Naranja — serie general | #C13A10 | #E94513 | #F06A3E | #F4A28A | #F8C4AE | #F6F3E9 | #FBF9F3 |
| Verde — **solo territorio/naturaleza** | #1B4032 | #2D6A4F | #4E8A6F | #74B597 | #A0D0B8 | #C8E4D5 | #EDE8D3 |
| Neutral — ejes/líneas/etiquetas | #000000 | #333333 | #666666 | #999999 | #CCCCCC | #E8E8E8 | #FFFFFF |

Reglas: los tonos claros nunca como serie principal; el negro nunca como serie; sin
degradados en barras ni sectores. El verde es **exclusivo de territorio/naturaleza**,
nunca sustituto del naranja.
