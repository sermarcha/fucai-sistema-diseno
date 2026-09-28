# FUCAI — Correo electrónico (notificaciones, boletín y firma)

Los tres correos de FUCAI comparten lienzo, tarjeta, filete naranja, tipografía y pie de marca; cambian solo en su tarea. Detalle completo en el sistema de diseño: `04_componentes/email/sistema-de-correo.md` dice **cómo se ve**; `04_componentes/appsheet/notificaciones-correo.md` dice **cómo se construye** una notificación de AppSheet, paso a paso.

| Tipo | Tarea | Qué lo distingue |
|---|---|---|
| Notificación | Informar un cambio y pedir **una** acción | Etiqueta del sistema, número de registro, chip de estado, dato héroe |
| Boletín | Contar lo que pasa en los territorios | Titular editorial, fotografía, "Leer más" |
| Firma | Identificar a una persona | Nombre, cargo y contacto; sin logo en imagen |

## ⛔ Reglas duras
- **Paleta cerrada** (abajo). Ningún otro hex. El **verde no se usa en notificaciones**: queda para boletín y contenidos de territorio.
- **Estilos en línea únicamente.** Prohibido `<style>`, clases, `<link>`, flexbox, grid, radio de esquina, sombras, gradientes, imágenes de fondo y emojis.
- Maquetación con **tablas** `role="presentation"`. Esquinas rectas: el filete superior de 3 px hace el trabajo visual.
- **Una sola acción por correo** y un dato héroe como máximo.
- Ancho máximo **600 px**, una columna, centrado. Pie institucional fijo en todos los correos.
- **Preheader** oculto al inicio: completa el asunto en ≤ 90 caracteres.
- Junto a cada `line-height`, siempre `mso-line-height-rule:exactly` (Outlook).
- Español, tuteo, voz activa, frases de 25 palabras o menos. Léxico de `references/voice-tone.md`.

## Paleta

<!-- [GEN] derivado de tokens.json (email.*) — lo verifica build-skill.js -->

| Token | Hex | Uso en correo |
|---|---|---|
| `email.surface.canvas` | `#F6F3E9` | Lienzo exterior, chip de estado, caja de acción |
| `email.surface.card` | `#FFFFFF` | Fondo de la tarjeta de contenido |
| `email.accent` | `#E94513` | Filete superior, dato héroe, enlaces, cabecera de tabla |
| `email.territory` | `#2D6A4F` | Solo territorio/naturaleza (boletín). Nunca en notificaciones |
| `email.text.title` | `#000000` | Número de registro y títulos de sección |
| `email.text.body` | `#333333` | Cuerpo y valores |
| `email.text.muted` | `#666666` | Etiquetas, nombre del sistema, pie |
| `email.rule` | `#CCCCCC` | Líneas de tabla y separador del pie |

## Tipografía
Los clientes no cargan fuentes web de forma fiable: se declara la de marca y se cae a una segura.

| Rol | Pila | Tamaño / interlínea |
|---|---|---|
| Titular o N.º de registro | `'Space Grotesk', Arial, Helvetica, sans-serif` | 34 / 38 px, −1 px de letra, peso 700 |
| Dato héroe | `'Space Grotesk', Arial, Helvetica, sans-serif` | 44 / 48 px, naranja, peso 700 |
| Título de sección | `'Space Grotesk', Arial, Helvetica, sans-serif` | 18 / 24 px, peso 700 |
| Sobretítulo | `Calibri, Carlito, Arial, sans-serif` | 13 / 18 px, MAYÚSCULAS, +1.5 px |
| Cuerpo | `Calibri, Carlito, Arial, sans-serif` | 16 / 24 px |
| Pie | `Calibri, Carlito, Arial, sans-serif` | 12 / 18 px, gris de soporte |

## Anatomía (la heredan los tres tipos)
Lienzo arena claro con relleno 32/12 px → tarjeta blanca de 600 px con filete superior naranja de 3 px y relleno lateral de 28 px. Dentro, en orden:

1. **Cabecera** — logo de 130 px a la izquierda; a la derecha, sistema y módulo en gris.
2. **Identidad** — sobretítulo en mayúsculas, titular o número de registro, chip de estado (arena con borde naranja).
3. **Mensaje** — apertura de 1–2 frases: qué pasó y qué se espera de la persona.
4. **Datos** — etiquetas en mayúsculas sobre valores, rejilla de 2 columnas; tabla opcional con cabecera naranja.
5. **Acción** — una sola, en caja con borde izquierdo naranja y enlace subrayado.
6. **Pie** — por qué recibes el correo, fecha, filete gris, razón social, NIT, web y *Nuestro centro es la periferia*.

## Notificaciones de sistema (AppSheet)
Antes de escribir una, lee `04_componentes/appsheet/notificaciones-correo.md`: trae el esqueleto HTML obligatorio, la biblioteca de bloques, las columnas de formato que se crean una vez por tabla y la configuración del bot. Reglas que no se negocian: nada de valores crudos (moneda, fechas y estados pasan por columnas de formato, nunca pongas `$` delante de un valor que ya lo trae) y el pie institucional va siempre.

## Firma del personal
Estructura, de arriba abajo, con **borde izquierdo naranja de 3 px**, 13 px de separación y 420 px de ancho máximo:

1. Nombre y apellido — 14 px, negrita, negro.
2. Cargo · FUCAI — 10 px, mayúsculas, naranja, +1.6 px de letra.
3. Teléfono · web — 12 px, gris; la URL en naranja.
4. *Nuestro centro es la periferia* — 11 px, cursiva, gris.

**Sin logo en imagen ni banners:** muchos clientes bloquean imágenes y los adjuntos inflan los hilos. El filete naranja es la marca. Un solo teléfono, cargo igual al de nómina, sin frases motivacionales ni redes personales. En respuestas y reenvíos, firma corta (nombre y cargo). Para aliados internacionales, cargo en inglés y el eslogan en español, que es firma de marca.

```html
<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Calibri,Carlito,Arial,sans-serif;max-width:420px;">
  <tr><td style="border-left:3px solid #E94513;padding:1px 0 1px 13px;">
    <div style="font-size:14px;line-height:19px;font-weight:700;color:#000000;">Nombre Apellido</div>
    <div style="font-size:10px;line-height:15px;font-weight:700;color:#E94513;letter-spacing:1.6px;text-transform:uppercase;padding-top:3px;">Cargo · FUCAI</div>
    <div style="font-size:12px;line-height:18px;color:#666666;padding-top:6px;">
      <a href="tel:+576012497984" style="color:#666666;text-decoration:none;">+57 601 249 7984</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="https://www.fucaicolombia.org" style="color:#E94513;text-decoration:none;font-weight:600;">fucaicolombia.org</a>
    </div>
    <div style="font-size:11px;line-height:16px;color:#666666;font-style:italic;padding-top:5px;">Nuestro centro es la periferia</div>
  </td></tr>
</table>
```

Como administrador de Google Workspace se puede desplegar centralizadamente para todo el dominio `fucaicolombia.org`.

## Accesibilidad y entregabilidad
- Contraste mínimo 4.5:1 en cuerpo; el naranja sobre blanco solo en texto grande.
- Nunca transmitas estado solo por color: acompáñalo con etiqueta de texto.
- Toda imagen lleva `alt`; el correo debe entenderse con las imágenes bloqueadas.
- Enlaces con texto descriptivo, nunca "haz clic aquí".
