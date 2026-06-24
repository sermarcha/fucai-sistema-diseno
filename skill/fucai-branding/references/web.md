# FUCAI — Páginas del sitio web (y artefactos HTML/React)

El sitio (www.fucaicolombia.org, en **Squarespace**) es "la casa de FUCAI": ahí conviven donantes, aliados, gobierno, comunidades y ciudadanía. Lenguaje accesible para todos. Para la redacción, sigue también `references/voice-tone.md`.

## Principios de diseño en web
- **Fondo blanco por defecto**; el color entra por acentos, secciones y datos, nunca como muro. Proporción 60-25-10-5.
- **Un elemento focal por sección** (un hero, un dato, un llamado). Mucho aire entre bloques.
- **Verde `#2D6A4F` solo** en páginas/secciones de territorio, naturaleza e impacto ambiental (Soberanía Alimentaria, Impacto). No intercambiable con el naranja.

## Tipografía web
- Títulos H1–H3: **Space Grotesk** Bold (Google Fonts CDN). Cuerpo: sistema sans-serif nativo (o Calibri/Carlito si se cargan).
- En Squarespace: subir/activar Space Grotesk para encabezados y asignar el cuerpo al sans nativo. Tracking levemente negativo en H1 grandes.

## Elementos de identidad (Manual §6.4)
- **Favicon:** la "F" en naranja `#E94513` sobre blanco (32×32 px, PNG).
- **Hero (inicio):** el headline principal **es un pilar de marca** — usa *"Nuestro camino es la identidad"*. Máx. 8 palabras, sin signos de exclamación.
- **Botones primarios:** fondo naranja, texto blanco, bordes redondeados 4 px.
- **Botones secundarios:** borde naranja, fondo transparente, texto naranja.
- **Enlaces:** naranja, sin subrayado en estado normal, subrayado en hover.
- **Footer:** siempre *"Nuestro centro es la periferia"* (firma) + www.fucaicolombia.org.

## Redacción por bloque (guía editorial §2.1)
| Bloque | Directriz |
|--------|-----------|
| Título Hero | Pilar *Nuestro camino es la identidad*. Máx. 8 palabras, sin "!" |
| Subtítulos | Infinitivo o 1ª persona plural: "Articular saberes", "Acompañamos comunidades". Nunca 3ª persona institucional |
| Cuerpo | Párrafos ≤4 líneas; una idea por párrafo; un dato concreto cada 2 párrafos como mínimo |
| Llamados a la acción | Verbos directos: "Conoce nuestro trabajo", "Súmate", "Aliánzate". Evitar "Haz clic aquí" / "Más información" |
| Quiénes Somos | Arrancar con el propósito (articular saberes ancestrales y modernos para el bienestar y la sostenibilidad). Los 4 pilares como declaraciones, no como lista |
| SEO | Integrar naturalmente: identidad cultural, pueblos indígenas, Amazonía, soberanía alimentaria, comunidades indígenas Colombia |

## Mapa de pilares por página (plataforma de marca)
- *Nuestro camino es la identidad* → Hero de Inicio, Quiénes Somos.
- *Nuestro centro es la periferia* → página de Impacto, sección de metodología.
- *Trabajo local, impacto global* → página Aliánzate, datos globales.
- *Un discurso que se come, se bebe y se respira* → Blog, página de Soberanía Alimentaria.

## Imágenes
Fotografía real de comunidades y territorio como protagonista (ver `references/photography.md`); una imagen fuerte por sección, no collages. Texto sobre foto solo con degradado oscuro y contraste ≥4.5:1.

## Accesibilidad
Contraste mínimo 3:1 títulos, 4.5:1 cuerpo. Naranja↔blanco (3.1:1) solo en títulos grandes, nunca en cuerpo. Nunca transmitir información solo por color (añade texto/ícono/forma). Foco visible en navegación por teclado.

## Tokens para HTML / React (artefactos y componentes)
```css
:root{
  --fucai-naranja:#E94513; --fucai-arena:#EDE8D3; --fucai-verde:#2D6A4F;
  --fucai-blanco:#FFFFFF; --fucai-negro:#000000;
  --fucai-naranja-claro:#F4A28A; --fucai-arena-claro:#F6F3E9; --fucai-verde-claro:#74B597;
  --fucai-gris-texto:#333333; --fucai-gris-medio:#666666; --fucai-gris-claro:#CCCCCC;
  --font-heading:'Space Grotesk','Arial Black',sans-serif;
  --font-body:'Calibri','Carlito','Arial',sans-serif;
}
```
- Importar Space Grotesk de Google Fonts. Fondo blanco; espaciado generoso (escala 4·8·12·16·24·32·48); un elemento focal por vista.
- Botones: primario → fondo naranja, texto blanco, radio 4 px; secundario → borde naranja, fondo transparente, texto naranja. Enlaces → naranja, subrayado solo en hover.
- Footer del artefacto: firma en cursiva + URL.
