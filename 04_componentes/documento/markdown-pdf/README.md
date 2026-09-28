# Markdown → PDF con marca FUCAI

Componente de documento. Convierte cualquier `.md` de los repositorios en un PDF con la identidad FUCAI, sin salir de VS Code y sin instalar LaTeX, pandoc ni nada más.

`fucai-markdown-pdf.css` es la hoja de estilo; se alimenta de `03_tokens/tokens.json` v1.9.0 y del *Manual de Identidad Visual v1.1*.

---

## 1. Instalación

```
code --install-extension yzane.markdown-pdf
```

La extensión trae su propio Chromium: si no encuentra Chrome ni Edge instalados, se descarga uno y lo gestiona sola.

## 2. Ajustes

En `settings.json` del usuario (`Ctrl+Shift+P` → *Preferences: Open User Settings (JSON)*):

```json
"markdown-pdf.styles": [
  "D:/Repos/fucai-sistema-diseno/04_componentes/documento/markdown-pdf/fucai-markdown-pdf.css"
],
"markdown-pdf.includeDefaultStyles": false,
"markdown-pdf.printBackground": true,
"markdown-pdf.format": "A4",
"markdown-pdf.margin.top": "25mm",
"markdown-pdf.margin.bottom": "25mm",
"markdown-pdf.margin.right": "25mm",
"markdown-pdf.margin.left": "25mm",
"markdown-pdf.displayHeaderFooter": true,
"markdown-pdf.headerTemplate": "<div></div>",
"markdown-pdf.footerTemplate": "<div style='font-size:8pt;width:100%;padding:0 25mm;color:#666666;font-family:Calibri,Carlito,Arial,sans-serif;display:flex;justify-content:space-between;'><span style='font-style:italic'>Fundación Caminos de Identidad — FUCAI · www.fucaicolombia.org</span><span class='pageNumber'></span></div>",
"markdown-pdf.convertOnSave": false
```

**Los dos ajustes que no son opcionales.** `includeDefaultStyles: false` — sin él, los estilos de GitHub que trae la extensión pisan la hoja de marca y el PDF sale gris. Y `printBackground: true` — sin él, el encabezado naranja de las tablas y las bandas arena salen en blanco.

## 3. Uso

`Ctrl+Shift+P` → **Markdown PDF: Export (pdf)**. También exporta a `html`, `png` y `jpeg`, y `Export (settings)` respeta el tipo configurado.

## 4. Qué aplica la hoja

| Elemento | Resultado |
|---|---|
| Fondo de página | Blanco siempre, portada incluida |
| Primer `#` del archivo | 28 pt Space Grotesk, naranja: título del documento |
| `#` · `##` · `###` | 22 / 16 / 13 pt — naranja, naranja, negro |
| Cuerpo | Calibri 11 pt, interlineado 1,3, negro |
| `>` cita | Filete naranja a la izquierda y cursiva, sin caja |
| Tablas | Encabezado blanco sobre naranja, **solo filetes horizontales**, encabezado repetido al cambiar de página |
| Enlaces y viñetas | Naranja |
| `código` | Tinte arena claro |
| Verde `#2D6A4F` | **No se aplica solo.** Es color de territorio: se marca a mano con `<span class="territorio">` |

Clases sueltas para escribir dentro del Markdown: `.salto` (página nueva), `.dato` (dato héroe a 36 pt), `.pilar` (pilar o slogan en cursiva), `.banda` (banda arena), `.territorio`.

Para que cada `#` abra en página nueva —útil en compilados largos, estorbo en un documento de una pieza— descomenta el bloque 10 de la hoja.

## 5. Antes de entregar

Las reglas del checklist de marca que esta hoja **no** puede verificar por ti:

1. **El logo.** La hoja no lo inserta: si el PDF es institucional, el `.md` tiene que traerlo como imagen en el cuerpo, nunca en el encabezado.
2. **La proporción 60-25-10-5.** Un documento con veinte tablas queda demasiado naranja. Si pasa, conviene alternar tablas con texto.
3. **El verde.** Solo territorio y naturaleza. Si aparece en otra parte, está mal usado.
4. **La voz.** Sin «beneficiarios», «intervenir», «ayudar», «víctimas» ni «vulnerables».
5. **Las fuentes.** La hoja las trae de Google Fonts, así que la primera exportación necesita red. Si se va a trabajar sin conexión, instala **Space Grotesk** y **Carlito** en el sistema: los fallback entran solos.

## 6. Límite conocido

La extensión convierte **un archivo a la vez**. Para un lote grande —las 553 fichas de maderables, por ejemplo— hace falta un script, no una extensión.

---
*Fundación Caminos de Identidad — FUCAI · Nuestro centro es la periferia · www.fucaicolombia.org*
