# FUCAI — Tipografía, espaciado y maquetación

## Dos fuentes, una identidad

| Rol | Fuente | Fallback | Peso | Disponibilidad |
|-----|--------|----------|------|----------------|
| Títulos | Space Grotesk | Arial Black | Bold 700 | Google Fonts, Canva, web |
| Cuerpo | Calibri | Arial / **Carlito** | Regular 400, Bold 700 | Nativa en Office, Google Docs |
| Logo | Futura PT Demi | (no se sustituye) | — | Solo en el archivo del logo |

Carlito es sustituto métrico idéntico de Calibri (Canva o donde no haya Calibri). En **AppSheet**, usa **Roboto** como sustituto de Space Grotesk.

## Escala — Word / PDF

| Elemento | Fuente | Tamaño | Color | Peso |
|----------|--------|--------|-------|------|
| Título portada | Space Grotesk | 28 pt | Naranja sobre **blanco** | Bold |
| H1 | Space Grotesk | 22 pt | Naranja (o blanco sobre barra naranja) | Bold |
| H2 | Space Grotesk | 16 pt | Naranja | Bold |
| H3 | Space Grotesk | 13 pt | Negro | Bold |
| Cuerpo | Calibri | 11 pt | Negro | Regular |
| Citas/cajas | Calibri | 11 pt | Negro | Italic |
| Encabezado tabla | Calibri | 10–11 pt | Blanco sobre naranja | Bold |
| Contenido tabla | Calibri | 10 pt | Negro | Regular |
| Caption | Calibri | 9 pt | Gris `#333333` | Italic |
| Footer | Calibri | 8–9 pt | Gris `#666666` | Italic |

## Escala — Presentaciones

| Elemento | Fuente | Tamaño | Notas |
|----------|--------|--------|-------|
| Título portada | Space Grotesk | 36–44 pt | Blanco sobre naranja/verde/negro |
| Título contenido | Space Grotesk | 26–32 pt | Naranja sobre blanco |
| Subtítulo sección | Space Grotesk | 22–26 pt | Negro o naranja según contexto |
| Cuerpo/bullets | Calibri | 14–16 pt | Negro, **máx. 6 líneas** |
| Cifras clave | Space Grotesk | 36–60 pt | Naranja, elemento héroe |
| Citas | Calibri Italic | 16–18 pt | Negro o blanco según fondo |
| Footer | Calibri | 8–10 pt | Gris, en barra arena |

## Reglas tipográficas
1. Space Grotesk **solo** títulos/encabezados — nunca cuerpo, tablas, captions ni footers.
2. Máx. dos fuentes por documento.
3. Interlineado cuerpo: 1.15 mín., 1.3 recomendado.
4. Tras títulos: ≥12 pt de espaciado.
5. Sin subrayado en cuerpo (reservado a hipervínculos).
6. Cursivas solo: citas, nombres científicos, palabras en lenguas indígenas (1ª vez), pilares/slogan.
7. **Nunca** más de 4 palabras seguidas en MAYÚSCULAS; reserva las mayúsculas para etiquetas cortas.
8. Títulos grandes (>40 pt): leve tracking negativo (≈ −1 a −2%).
9. Alineación cuerpo: justificada o izquierda. Centrado solo en títulos de portada.

## Sistema de espaciado (motor del minimalismo)
Escala única (puntos): **4 · 8 · 12 · 16 · 24 · 32 · 48**.
En docx-js, `spacing.after/before` van en veinteavos de punto → pt × 20 (12 pt = 240, 16 pt = 320, 24 pt = 480).

- Márgenes Word/Docs: 2.5 cm (A4) o 1 in (Carta), consistentes en todo el documento.
- **Un elemento focal** por página/diapositiva; si compite, divide.
- Agrupa con espacio en blanco, no con cajas ni bordes.
- Aperturas de sección generosas: mucho aire, un H1 naranja, un pilar en cursiva, nada más.
- Espaciado tras párrafo: 6 pt (denso) a 12 pt (editorial). Un párrafo = una idea (≤8 líneas en documentos, ≤5 en web/redes).
