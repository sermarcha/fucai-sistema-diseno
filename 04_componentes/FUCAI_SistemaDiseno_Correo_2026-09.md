# FUCAI · Sistema de diseño — Correo electrónico

**Capítulo del sistema de diseño FUCAI** · Versión 1.0 · septiembre 2026
Aplica a: **notificaciones automáticas** (AppSheet y otros sistemas), **boletín informativo / newsletter** (Squarespace Email Campaigns) y **firmas de correo** del personal.
Fuente de verdad de valores: `design-system/tokens.css` y `brand-constants.json`. Este capítulo los traduce al medio correo.

> *Nuestro centro es la periferia* · www.fucaicolombia.org · NIT 800.173.574-1

---

## 1. Principio

Un correo FUCAI debe reconocerse **antes de leerlo**: lienzo arena claro, tarjeta blanca, un filete naranja arriba, tipografía sobria y la firma de marca al pie. Cada tipo de correo tiene su tarea, pero los tres comparten la **misma estructura, la misma paleta y la misma voz**.

| Tipo | Tarea | Qué lo distingue | Qué comparte |
|---|---|---|---|
| **Notificación** | Informar un cambio y pedir **una** acción | Etiqueta del sistema, número del registro, chip de estado, dato héroe | Lienzo, tarjeta, filete, tipografía, pie de marca |
| **Newsletter** | Contar lo que pasa en los territorios | Titular editorial, fotografía, "Leer más" | Lienzo, tarjeta, filete, tipografía, pie de marca |
| **Firma** | Identificar a una persona | Nombre, cargo y contacto; sin logo pesado | Filete naranja, grises y firma *Nuestro centro es la periferia* |

**Regla de oro:** *una idea, un dato héroe, una acción*. El espacio en blanco es el default; el naranja es la señal.

---

## 2. Qué encontramos (auditoría de septiembre 2026)

Revisamos las notificaciones que ya envían Fucai Campo y Bancabundancia, el Boletín Informativo N.º 23–24 y las firmas actuales. El diseño de **Fucai Campo** (avances, legalizaciones y pasajes) es la referencia: ya aplica la paleta, la jerarquía y el pie de marca. Lo que hay que alinear:

| Hallazgo | Dónde | Corrección |
|---|---|---|
| Paleta propia (verde `#1E5B41`, arenas `#F7F4EE`/`#F2EFE7`), fuentes del sistema, esquinas redondeadas de 10–14 px | Bancabundancia | Usar la estructura base de este capítulo; la submarca solo cambia el **nombre del sistema** en la cabecera (ver §9) |
| Moneda con formato de EE. UU. (`$1,290,970.00`) | Fucai Campo | Formato colombiano: `$ 1.290.970` (sin decimales en COP) |
| Símbolo de moneda duplicado (`$$ 100.000`) | Bancabundancia | La plantilla nunca antepone `$` si el valor ya lo trae |
| Estados sin tilde tal como vienen de la base (`En revision - Dir. Contable`) | Fucai Campo | Mostrar la **etiqueta legible** del estado (ver §6.4) |
| Firma con grises fuera de paleta (`#111111`, `#6b6b6b`, `#b0b0b0`) y Helvetica | Firmas del personal | Grises de soporte `#000000 / #333333 / #666666` y pila Calibri |
| Pie de firma de marca ausente | Bancabundancia | Pie institucional completo (§5.6) |
| Boletín con pie genérico de Squarespace | Newsletter | Pie institucional con firma, dirección y redes (§8) |

---

## 3. Paleta para correo

Proporción **60-25-10-5** adaptada al correo: el lienzo y la tarjeta ocupan casi todo; el naranja aparece en 3–5 puntos, nunca como fondo de bloque.

| Token | Hex | Uso en correo | Nunca |
|---|---|---|---|
| `lienzo` (arena claro) | `#F6F3E9` | Fondo exterior, chip de estado, caja de acción | Texto |
| `tarjeta` (blanco) | `#FFFFFF` | Fondo del contenido | — |
| `acento` (naranja) | `#E94513` | Filete superior 3 px, dato héroe, enlaces, borde izquierdo de chip/caja, cabecera de tabla, total | Párrafos de cuerpo; fondos grandes |
| `territorio` (verde) | `#2D6A4F` | Solo contenidos de territorio/naturaleza (boletín, monitoreo ambiental) | Estados de "aprobado"; notificaciones financieras |
| `titulo` (negro) | `#000000` | Número del registro, títulos de sección | — |
| `texto` | `#333333` | Cuerpo y valores | — |
| `secundario` | `#666666` | Etiquetas, sistema, pie | Texto largo |
| `filete` | `#CCCCCC` | Líneas de tabla y separador del pie | — |

**Contraste:** naranja sobre blanco (3.1:1) solo en textos ≥ 18 px o negrita ≥ 14 px. Enlaces naranjas siempre subrayados en el cuerpo para que no dependan del color.

---

## 4. Tipografía para correo

Los clientes de correo no cargan fuentes web de forma fiable. Se declara la fuente de marca y se deja caer a una segura:

| Rol | Pila | Tamaño / interlínea | Peso |
|---|---|---|---|
| Número o titular (H1) | `'Space Grotesk', Arial, Helvetica, sans-serif` | 34 / 38 px (letter-spacing −1 px) | 700 |
| Dato héroe (monto) | `'Space Grotesk', Arial, Helvetica, sans-serif` | 44 / 48 px, naranja | 700 |
| Título de sección (H2) | `'Space Grotesk', Arial, Helvetica, sans-serif` | 18 / 24 px | 700 |
| Sobretítulo (eyebrow) | `Calibri, Carlito, Arial, Helvetica, sans-serif` | 13 / 18 px, MAYÚSCULAS, +1.5 px | 400 |
| Cuerpo | `Calibri, Carlito, Arial, Helvetica, sans-serif` | 16 / 24 px | 400 |
| Etiqueta de dato | Calibri | 12 / 16 px, MAYÚSCULAS, +1 px, `#666666` | 400 |
| Valor de dato | Calibri | 15 / 21 px, `#333333` | 400 |
| Tabla | Calibri | 14 / 20 px | 400 |
| Pie | Calibri | 12 / 18 px, `#666666` | 400 |

Siempre `mso-line-height-rule:exactly` junto a cada `line-height` (Outlook).

---

## 5. Anatomía común (los tres tipos la heredan)

```
┌──────────────────── lienzo #F6F3E9 · padding 32px 12px ────────────────────┐
│ ┌──────── tarjeta #FFFFFF · 600 px máx · filete superior 3px #E94513 ─────┐ │
│ │ [logo 130 px]                         Sistema · Módulo  (13px #666)    │ │ 1 Cabecera
│ │                                                                         │ │
│ │ SOBRETÍTULO EN MAYÚSCULAS                                               │ │ 2 Identidad
│ │ Titular o N.º registro (Space Grotesk 34)                               │ │
│ │ ▌Estado en el sistema: Etiqueta   (chip arena + borde naranja)          │ │
│ │                                                                         │ │
│ │ Párrafo de apertura: qué pasó y qué se espera de ti (1–2 frases).       │ │ 3 Mensaje
│ │                                                                         │ │
│ │ ETIQUETA            ETIQUETA                                            │ │ 4 Datos
│ │ Dato héroe / valores en rejilla de 2 columnas                           │ │
│ │ [tabla opcional con cabecera naranja y total]                           │ │
│ │                                                                         │ │
│ │ ▌ACCIÓN EN MAYÚSCULAS                                                   │ │ 5 Acción
│ │ ▌Enlace naranja subrayado (una sola acción)                             │ │
│ │ ────────────────────────────────────────── filete #CCC                  │ │
│ │ Por qué recibes este correo · fecha                                     │ │ 6 Pie
│ │ Fundación Caminos de Identidad · NIT 800.173.574-1 · www.fucaicolombia.org │
│ │ *Nuestro centro es la periferia*                                        │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────┘
```

### 5.1 Contenedor
- Ancho máximo **600 px**, centrado; `padding` interior de la tarjeta **28 px** a los lados.
- Maquetación con **tablas** (`role="presentation"`) y estilos **en línea**. Sin `<style>`, sin clases, sin flexbox ni grid.
- Esquinas **rectas** (radio 0). La marca es sobria: el filete superior hace el trabajo visual.
- **Preheader** oculto al inicio: una frase que complete el asunto (≤ 90 caracteres).

### 5.2 Cabecera
- Logo naranja FUCAI a **130 px** de ancho, enlazado a www.fucaicolombia.org, con `alt` en texto.
- A la derecha, en `#666666`: **Sistema · Módulo** (ej. *Fucai Campo · Avances*, *Bancabundancia · Préstamos*).

### 5.3 Bloque de identidad
- **Sobretítulo:** qué es el correo (*Nueva solicitud de avance*, *Legalización para revisar*).
- **Titular:** en notificaciones, el número del registro (`N.º 7859f37d`); en el boletín, el titular editorial.
- **Chip de estado** (solo notificaciones): fondo arena, borde izquierdo naranja 3 px, `Estado en el sistema: <strong>Etiqueta</strong>`.

### 5.4 Datos
- Rejilla de **2 columnas** (50/50) de pares *etiqueta en mayúsculas → valor*; campos largos (observaciones, indicaciones) ocupan las dos columnas.
- **Un único dato héroe** por correo (el monto, la fecha del vuelo, el número de días vencido), en Space Grotesk 44 px naranja.
- Tablas de detalle: cabecera naranja con texto blanco en mayúsculas 12 px; filas con filete inferior `#CCCCCC`; fila de total con filete superior negro de 2 px y el valor en naranja.

### 5.5 Acción
- **Una** acción por correo, en caja arena con borde izquierdo naranja: etiqueta en mayúsculas (*Revisar la solicitud en Fucai Campo*) y enlace naranja, subrayado, que nombra el objeto (*Abrir el avance N.º 7859f37d*).
- Nunca "haz clic aquí".

### 5.6 Pie (obligatorio y fijo)
1. Una frase que explique **por qué** la persona recibe el correo y la fecha de generación.
2. `Fundación Caminos de Identidad · NIT 800.173.574-1 · www.fucaicolombia.org` (URL en naranja, sin subrayado).
3. *Nuestro centro es la periferia* en cursiva, `#666666`.
4. En correos automáticos sin buzón de respuesta: *Mensaje automático — no respondas a este correo.*

---

## 6. Notificaciones de sistemas (AppSheet)

### 6.1 Asunto
Patrón fijo: **`<Objeto> N.º <id> · <qué pasó> [· <para quién o siguiente paso>]`**

- `Avance N.º 7859f37d · nueva solicitud de Daniela Ballesteros pendiente de tu aprobación`
- `Avance N.º 8b51615c · devuelto para corrección`
- `Pasajes · solicitud N.º 830a5825 · tiquetes comprados`

Máximo ~80 caracteres. Sin mayúsculas sostenidas, sin emojis, sin signos de exclamación.

### 6.2 Familias de notificación

Cada correo pertenece a una familia; la familia fija el sobretítulo, el tono de la apertura y la acción.

| Familia | Cuándo | Apertura modelo | Acción |
|---|---|---|---|
| **Pide acción** | Alguien debe aprobar, revisar o cargar algo | "Hola. **{Nombre}** envió {objeto} y espera tu revisión como {rol}." | *Revisar …* |
| **Devuelto** | Hay que corregir | "{Objeto} fue devuelto. Revisa las observaciones, corrige lo que haga falta y vuélvelo a enviar." | *Corregir …* |
| **Avance de estado** | Aprobado, desembolsado, comprado | "Listo. {Objeto} {qué cambió}. {Qué sigue}." | *Ver …* |
| **Recordatorio** | Algo lleva días sin moverse | "Hola. {Objeto} sigue en «{estado}» desde hace **{n} días**." | *Abrir …* |
| **Cierre** | Legalizado, cerrado | "Listo. {Objeto} quedó {cerrado}. No tienes nada pendiente." | *Ver el registro* (opcional) |

### 6.3 Dato héroe por familia
- Solicitudes y aprobaciones de dinero → **monto**.
- Recordatorios → **días** sin movimiento o de vencimiento (*12 días vencido*).
- Pasajes → **fecha del primer vuelo**.
- Devoluciones → sin dato héroe; las **observaciones** van primero en la rejilla.

### 6.4 Estados: valor en base de datos vs. etiqueta visible
Los estados se guardan como códigos. El correo muestra una etiqueta legible, con tildes y en español natural:

| Valor en la app | Etiqueta en el correo |
|---|---|
| `Pendiente - Coordinador` | Pendiente de coordinación |
| `Pendiente - Direccion Ejecutiva` | Pendiente de Dirección Ejecutiva |
| `En revision - Dir. Contable` | En revisión de Dirección Contable |
| `Aprobado - pendiente desembolso` | Aprobado · pendiente de desembolso |
| `Desembolsado` · `Devuelto` · `Legalizado` · `Gestionado` | Igual |

El chip de estado es **siempre neutro** (arena + borde naranja). El color no comunica aprobado/rechazado: lo dice el texto.

### 6.5 Formatos de datos
| Dato | Formato |
|---|---|
| Moneda COP | `$ 1.290.970` — separador de miles punto, sin decimales |
| Otras monedas | `EUR 1.250,00` — código ISO delante |
| Fecha | `28/09/2026`; en frases, `28 de septiembre de 2026` |
| Hora | `8:20 p. m.` |
| Identificadores | `N.º 7859f37d` (con "N.º", nunca "#" ni "No.") |
| Nombres | Tal como están en `usuarios` (nombre completo) |

---

## 7. Voz en los correos

Basada en `references/voice-tone.md`.
- **Tuteo cercano**, voz activa, oraciones de 25 palabras o menos.
- Apertura de notificación: "Hola." + qué pasó con sujeto y verbo. Apertura de boletín o correo personal: "Hola, [nombre]:".
- Cierre de notificación: `— {Sistema}` (ej. *— Fucai Campo*). Cierre de correo personal o boletín: *Seguimos caminando juntos. Un abrazo desde la periferia.*
- Las comunidades son protagonistas: "las tejedoras de Manaure", no "las beneficiarias".
- Evitar: *beneficiarios, intervenir, ayudar* (paternalista), *asistir, víctimas, poblaciones vulnerables, salvar*.
- Nada de "Estimado(a) señor(a)", "Por medio de la presente", "Cordialmente," en notificaciones.

---

## 8. Newsletter (Boletín Informativo)

Mismo esqueleto de §5, con estas variaciones:

- **Asunto:** `Boletín Informativo · N.º 24 · 2026` + **preheader** con el titular principal (*La voz del territorio frente a la Sentencia T-302*). Punto medio (·) como separador, no barra vertical.
- **Cabecera:** logo + `Boletín Informativo · N.º 24` a la derecha.
- **Apertura:** "Hola, [nombre]:" + 2–3 frases que sitúen el territorio y la voz de la comunidad.
- **Artículo principal:** fotografía horizontal 600 × 338 px (16:9) a sangre de la tarjeta; fecha en sobretítulo; titular en Space Grotesk 24–28 px; extracto de 2–3 líneas; enlace *Leer el artículo completo*.
- **Lecturas recomendadas:** lista de 2–4 titulares con filete inferior `#CCCCCC`; cada titular es un enlace.
- **Verde territorio** permitido aquí para sobretítulos de secciones de territorio y naturaleza; nunca junto a naranja en el mismo bloque.
- **Pie:** firma de marca + dirección (Calle 54 N.º 10-81, Bogotá) + redes en texto o íconos monocromos `#666666` + *Darse de baja*. Reemplaza el pie genérico de la plataforma cuando la herramienta lo permita.
- **Frecuencia y extensión:** un tema central por edición; ≤ 350 palabras de texto visible antes de los enlaces.

---

## 9. Submarcas y sistemas (Fucai Campo, Bancabundancia, Caminos Artesanos, Activos, CRM…)

Todas las apps de FUCAI usan **el mismo esqueleto y la misma paleta**. Lo único que cambia es:
1. El texto **Sistema · Módulo** de la cabecera.
2. La firma del cierre (`— Bancabundancia`).
3. La frase de "por qué recibes este correo".

No se crean paletas por app. Si una submarca necesita identificarse más, se añade su nombre como sobretítulo, nunca otro color de acento. Co-branding con financiadores (Naane/CC217, Tienda FUCAI) sigue `references/subbrands.md`.

---

## 10. Firma de correo del personal

### 10.1 Estructura
```
▌Nombre Apellido                                  (14 px · negrita · #000000)
▌CARGO · FUCAI                                    (10 px · MAYÚSCULAS · +1.6 px · #E94513)
▌+57 601 249 7984  ·  fucaicolombia.org           (12 px · #666666 · URL en naranja)
▌Nuestro centro es la periferia                   (11 px · cursiva · #666666)
```
Borde izquierdo naranja 3 px, `padding-left` 13 px, ancho máximo 420 px, pila `Calibri, Carlito, Arial, sans-serif`.

### 10.2 Reglas
- **Sin logo en imagen** ni banners: muchos clientes bloquean imágenes y los adjuntos inflan los hilos. El filete naranja es la marca.
- Un solo teléfono (fijo institucional o celular de trabajo). Sin frases motivacionales, sin redes personales.
- Cargo en español, igual al de nómina. Para proyectos: `Coordinador de Proyectos · FUCAI`, `Técnica de campo · CC215 · FUCAI`.
- En respuestas y reenvíos se usa la **firma corta** (solo nombre y cargo).
- Versión en inglés para aliados internacionales: `Project Coordinator · FUCAI` y el slogan en español (es firma de marca).

### 10.3 Código de firma (Gmail · Configuración → Firma)
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
Como administrador de Google Workspace se puede desplegar de forma centralizada para todo el dominio `fucaicolombia.org`.

---

## 11. Accesibilidad y entregabilidad

- Todo correo debe entenderse **con las imágenes apagadas**: el logo tiene `alt`, nada importante vive dentro de una imagen.
- Texto alternativo en toda fotografía del boletín (qué muestra y quién, con consentimiento registrado).
- Tamaño mínimo de texto 12 px; cuerpo 16 px.
- Enlaces con texto descriptivo y subrayados en el cuerpo.
- Estructura lógica de lectura (tablas `role="presentation"`), idioma `es`.
- Peso del HTML < 100 KB para evitar el recorte de Gmail.
- Versión de texto plano coherente con el HTML (AppSheet la genera; revisar que se lea en orden).

---

## 12. Checklist antes de publicar una plantilla

**Estructura:** lienzo arena · tarjeta 600 px · filete naranja 3 px · cabecera con logo y *Sistema · Módulo* · pie institucional completo.
**Contenido:** asunto con patrón · preheader · un dato héroe · una acción · razón de envío en el pie.
**Datos:** moneda `$ 1.290.970` · fechas `dd/mm/aaaa` · `N.º` · estados con etiqueta legible · sin `$$`.
**Voz:** tuteo · voz activa · sin palabras de la lista "evitar" · cierre `— Sistema`.
**Técnica:** estilos en línea · sin `<style>` ni clases · `mso-line-height-rule` · probado en Gmail web, Gmail móvil y Outlook.
