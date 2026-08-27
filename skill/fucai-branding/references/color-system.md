# FUCAI — Sistema de color (Manual v1.1)

La paleta tiene raíz territorial: naranja = tierra, energía, fuego; arena = territorios áridos de La Guajira y suelos amazónicos; verde = la selva y la vida. El color es narrativo y se usa con mesura.

## Paleta principal — 3 colores de marca + 2 neutros

| Nombre | Rol | Pantone | HEX | RGB · CMYK | Uso |
|--------|-----|---------|-----|------------|-----|
| Naranja FUCAI | Primario | 1665 XGC | `#E94513` | 233,69,19 · 0/70/92/0 | Encabezados, acentos, botones, barras, encabezados de tabla, logo, serie de datos primaria |
| Arena / Crema | Secundario | 11-0105 TPG | `#EDE8D3` | 237,232,211 · 0/2/11/7 | Fondos suaves, filas alternas, secciones, **calidez** |
| Verde Amazónico | Terciario | 18-0135 TCX | `#2D6A4F` | 45,106,79 · 75/0/53/58 | **Solo territorio/naturaleza/medio ambiente** — acentos, etiquetas, gráficas de impacto territorial |
| Blanco | Neutro | 11-0601 TCX | `#FFFFFF` | 255,255,255 | Fondo principal; texto sobre fondos oscuros |
| Negro | Neutro | — | `#000000` | 0,0,0 | Texto sobre fondos claros. Nunca color de marca ni serie de datos |

**El verde no es intercambiable con el naranja.** Verde solo en contextos de territorio/naturaleza.

## Paleta secundaria — tintes (50% de cada color de marca)
Los tintes se derivan **solo** de los tres colores de marca, nunca de los neutros.

| Nombre | Origen | HEX | Uso |
|--------|--------|-----|-----|
| Naranja claro | Naranja 50% | `#F4A28A` | **Solo fondo** de llamadas/cajas con texto oscuro, o acento sobre fondo oscuro. Con blanco: 2:1 — nunca texto, ícono ni hover de acción |
| Naranja oscuro | Extremo de rampa | `#C13A10` | **Hover/activo de acciones** (botones/enlaces; 5.4:1 con blanco), sombra, profundidad |
| Arena claro | Arena 50% | `#F6F3E9` | Filas alternas, cajas informativas, separadores |
| Verde claro | Verde 50% | `#74B597` | **Solo fondo** de secciones ambientales y badges, con texto oscuro. Con blanco: 2.4:1 — nunca color de texto |

## Grises de soporte tipográfico (NO son colores de marca)
Funcionales: texto secundario, bordes, separadores. Nunca como acento visual.
`#333333` texto secundario/captions/footers · `#666666` bordes/separadores · `#CCCCCC` líneas muy sutiles, bordes de celda secundarios · (rampa) `#999999` etiquetas de eje · `#E8E8E8` rellenos sutiles de tabla.

## Proporción 60-25-10-5
60% blanco/arena · 25% naranja · 10% verde (territorio) · 5% negro/grises. Naranja y verde son acentos, nunca fondos generales. Esta proporción es lo que hace una pieza minimalista y sofisticada a la vez.

## Combinaciones autorizadas fondo/texto

| Fondo | Texto | Contraste (calculado WCAG) | Uso |
|-------|-------|-----------|-----|
| Blanco | Negro | 21:1 | Cuerpo de texto |
| Blanco | Naranja | 3.9:1 | **Solo H1/H2 — nunca cuerpo** |
| Blanco | Verde | 6.4:1 | Títulos de secciones de territorio/ambiente |
| Naranja | Blanco | 3.9:1 | **Solo encabezados grandes/portadas — nunca cuerpo** |
| Naranja oscuro | Blanco | 5.4:1 | Hover/activo de acciones ✓ |
| Verde | Blanco | 6.4:1 | Secciones de impacto ambiental, etiquetas |
| Arena | Negro | 17.1:1 | Infografías, banners |
| Arena | Gris texto | 10.3:1 | Texto secundario sobre banda arena (slogan) |
| Arena | Verde | 5.2:1 | Badges sobre fondos cálidos |
| Arena | Naranja | 3.2:1 | **Solo títulos grandes en negrita — nunca cuerpo/captions** |
| Negro | Blanco | 21:1 | Alto contraste, pósters |
| Arena claro | Gris texto | 11.4:1 | Filas alternas, cajas informativas |

**Disciplina de contraste:** naranja↔blanco es 3.9:1 y naranja↔arena 3.2:1 → pasan WCAG solo para texto grande en negrita. **Nunca** texto blanco tamaño cuerpo sobre naranja, ni naranja tamaño cuerpo sobre blanco o arena. Los tintes al 50 % (naranja claro `#F4A28A`, verde claro `#74B597`) son **superficies**: nunca color de texto ni de ícono; el hover de acciones es naranja oscuro `#C13A10`. Mínimos: 3:1 títulos, 4.5:1 cuerpo. Nunca solo color para transmitir info (añade ícono/forma). *(Cifras calculadas con la fórmula WCAG desde los tokens del sistema de diseño, 2026-08; sustituyen a las del Manual.)*

## Rampas de visualización de datos
Una serie → rampa naranja. Serie de territorio → rampa verde. Ejes/líneas/etiquetas → neutros. Nunca colores fuera de estas rampas.

- Naranja: `#C13A10 #E94513 #F06A3E #F4A28A #F8C4AE #F6F3E9 #FBF9F3`
- Verde (solo territorio): `#1B4032 #2D6A4F #4E8A6F #74B597 #A0D0B8 #C8E4D5 #EDE8D3`
- Neutros: `#000000 #333333 #666666 #999999 #CCCCCC #E8E8E8 #FFFFFF`

Reglas: sin azul/rojo/morado/amarillo; máx. 3 tonos por gráfico sin justificación; tonos claros nunca como serie principal; negro nunca como serie; sin degradados en barras/sectores; resalta un dato clave en `#E94513` y atenúa el resto a `#CCCCCC`.

## Impresión y modo oscuro
CMYK naranja **0/70/92/0** (Pantone 1665 XGC); verde **75/0/53/58**. Siempre CMYK para offset. Sangrado 3 mm; PDF/X-4 o PDF/X-1a con fuentes incrustadas; 300 dpi. Modo oscuro: fondo negro, texto arena `#EDE8D3`.
