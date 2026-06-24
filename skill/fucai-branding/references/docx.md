# FUCAI — Documentos Word (.docx)

**Construye con el script, no a mano.** Todo el código probado vive en `scripts/fucai_docx.js`. Úsalo:

```javascript
const F = require("<skill>/scripts/fucai_docx.js");
const doc = F.assembleDoc({
  cover: F.buildCover({ title, subtitle, pillar }),
  body:  [ ...F.h1("Título", "pilar"), F.body("…"), ...F.heroNumber("423","…"),
           F.voiceQuote("…","— …"), F.dataTable({ headers, rows, numeric:true }) ],
  back:  F.buildBackCover({}),
  coverBand: { date: "Junio 2026", project: "Proyecto CC217 Naane (OIKOS–AICS)" }
});
await F.writeDoc(doc, "/mnt/user-data/outputs/FUCAI_Informe_Tema_2026-06.docx");
```

`scripts/example_informe.js` es un ejemplo ejecutable y plantilla. Tras generar, **corre siempre** `python3 scripts/check_fucai.py <archivo.docx>` y luego QA visual en PDF.

## Reglas no negociables (las codifica el script)
- **Fondo de página blanco siempre** — portada Y contraportada incluidas. Nunca portada/contraportada naranja ni rellenos a sangre. `background:{color:"FFFFFF"}` en el Document.
- **Encabezado de solo texto** (sin imagen) para evitar el bug `rId0`. El logo va como imagen en el cuerpo de portada/contraportada.
- **2–3 secciones** (portada / cuerpo / contraportada), nunca una por capítulo.
- Color por barras, sombreado de tabla y banda arena — **nunca por la página**.

## Maquetación
- Márgenes 2.5 cm (A4) / 1 in (Carta). Interlineado 1.15–1.3; espaciado tras párrafo ≥6 pt.
- Encabezado: filete naranja + texto a la derecha "Fundación Caminos de Identidad — FUCAI".
- Pie: filete naranja 3 pt + "Fundación Caminos de Identidad – FUCAI | www.fucaicolombia.org" + número de página.

## Portada (blanca, cálida, sofisticada)
Composición de arriba a abajo con aire deliberado:
1. Logo naranja en el cuerpo (≈4 cm), a la izquierda.
2. Filete naranja de 1.5 pt bajo el logo (el único acento).
3. Gran espacio en blanco (~⅓ de página) — el aire **es** la sofisticación.
4. Título Space Grotesk Bold naranja 28–32 pt, izquierda, leve tracking negativo.
5. Subtítulo Calibri 14 pt gris texto.
6. Un pilar de marca en cursiva 12 pt gris medio (la señal de posicionamiento).
7. Al pie: **banda arena `#EDE8D3`** con fecha + proyecto + slogan en cursiva (la calidez, sin inundar de naranja).

Sin relleno naranja. Sin foto en portadas formales (una foto cálida solo en piezas editoriales, en banda, nunca tras el texto).

## Contraportada (blanca, calma)
1. Espacio en blanco arriba. 2. Logo naranja centrado (≈4 cm). 3. Slogan *Nuestro centro es la periferia* centrado, Space Grotesk cursiva naranja 16 pt. 4. Bloque de contacto Calibri 10 pt gris (web, email, NIT). 5. **Barra naranja delgada al pie** (≈8 mm) con la URL en blanco. Nunca página naranja completa.

## Patrón de implementación fiable (ya en el script)
- La banda arena (portada) y la barra naranja (contraportada) van en el **footer de cada sección** → se anclan al pie sin depender de espaciados frágiles. Contienen solo texto → no disparan `rId0`.
- Portada y contraportada llevan **encabezado vacío explícito** para que no hereden el del cuerpo.
- Tres secciones: portada (header vacío + footer banda arena) · cuerpo (header texto + footer estándar) · contraportada (header vacío + footer barra naranja).

## Tablas (minimalistas)
Encabezado naranja + texto blanco; filas alternas `#F6F3E9`; **solo filetes horizontales** (sin líneas verticales); márgenes de celda generosos. Números a la derecha, texto a la izquierda, unidades en el encabezado ("Monto (COP)"). Campos de proyecto/centro de costos **siempre texto abierto, nunca casillas fijas**. `F.dataTable(...)` lo hace.

## Componentes de marca (refuerzan posicionamiento)
- `F.voiceQuote(cita, atribución)` — **Voz de la comunidad**: filete naranja izquierdo, cursiva, atribución "— Nombre, pueblo, territorio, año". Las comunidades son protagonistas.
- `F.h1(texto, pilar)` — **Apertura con pilar**: H1 + un pilar en cursiva (uno por sección, nunca los cuatro).
- `F.heroNumber(cifra, caption)` — **Dato héroe**: una cifra sola en Space Grotesk naranja 36–60 pt. Datos de impacto siempre en cifra.

## Apéndice de fiabilidad docx (prioridad #1: que abra bien)
- **Bug `rId0`:** un `ImageRun` dentro de `Header`/`Footer` genera una relación `rId0` inválida → Word/Pages rechazan el archivo. Solución: encabezados de solo texto; logo en el cuerpo. Verificar: descomprimir el .docx e inspeccionar `word/_rels/header1.xml.rels` por `Id="rId0"`. (Las bandas en footer son tablas de **texto**, sin imágenes → no disparan el bug.)
- **Bug de múltiples secciones:** una sección por capítulo genera un footer XML por sección → Word marca el archivo como malformado. Usa 2–3 secciones; implementa páginas divisorias como contenido de ancho completo dentro del cuerpo, no como secciones nuevas.
- **Solape de fuentes grandes:** en párrafos con tamaño > 60 pt, usa `spacing:{ line:<valor>, lineRule:"atLeast" }`.
- **Pipeline de validación:** `python3 /mnt/skills/public/docx/scripts/office/validate.py <archivo>` → convertir a PDF con LibreOffice → QA visual página por página. Extraer fuentes de .docx subidos con `pandoc -t markdown`. Salidas a `/mnt/user-data/outputs/`.
