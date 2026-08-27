# Componente — Banda arena (portada)

> Banda cálida al pie de la portada: aporta la calidez sin inundar de naranja.
> Generador: `scripts/generators/fucai_docx.js → coverFooterBand()`. Estado: **estable**.

## Anatomía

Tabla de una celda, ancho completo, fondo arena (`docx.cover.band` →
`surface.warmth.docx`), con: fecha, proyecto (texto abierto) y slogan en cursiva
**gris texto** (`text.caption`). Texto en Calibri.

> Nota de accesibilidad (2026-08): el slogan iba en naranja sobre arena = 3.2:1,
> insuficiente para texto pequeño (mínimo 4.5:1). Se cambió a gris texto (10.3:1).
> El naranja sobre arena queda reservado a títulos grandes en negrita.

## Variantes

- Solo slogan · fecha + slogan · fecha + proyecto + slogan.
- Co-branding: el texto de proyecto nombra el financiador (p. ej. "CC217 Naane (OIKOS–AICS)").

## Estados

Altura mínima fija (`HeightRule.ATLEAST`) para que la banda se ancle al pie aunque
el contenido de portada sea corto.

## Reglas técnicas críticas

- Va **dentro del `Footer`** de la sección de portada, como **tabla de solo texto**
  (sin imágenes → no dispara el bug `rId0`).
- Es **banda**, no fondo de página: el fondo de la portada sigue blanco.
- La calidez se logra con arena; **nunca** subiendo el naranja.

## Cuándo usar / cuándo no

- **Usar:** al pie de portadas de documento.
- **No usar:** no como fondo de página, no en el cuerpo con espaciadores, no en Word como bloque suelto.

## Tokens y script

`docx.cover.band`, `surface.warmth.docx`, `text.caption` (slogan). Producido por `coverFooterBand()`.
