# Directrices para Claude · Correos de notificación en AppSheet (FUCAI)

**Versión 1.0 · septiembre 2026**
**Para:** Claude (y cualquier persona) que diseñe o modifique correos de automatización en las apps AppSheet de FUCAI: Fucai Campo, Bancabundancia, Caminos Artesanos, Activos FUCAI, FUCAI CRM, Catálogo Maderables y las que vengan.
**Complementa:** `../email/sistema-de-correo.md`, que dice *cómo se ve*. Este documento dice *cómo se construye*, paso a paso y sin margen de interpretación.

> Objetivo: que dos correos generados en apps distintas, por sesiones distintas de Claude, sean indistinguibles en estructura, estilo y voz. Solo cambian los datos.

---

## 0. Reglas duras (nunca se rompen)

1. **Usa el esqueleto de la §4 literalmente.** No rediseñes ni "mejores" colores, tamaños, espaciados o radios. Solo sustituyes los marcadores `{{…}}` y eliges bloques de la biblioteca (§5).
2. **Paleta cerrada:** `#F6F3E9` `#FFFFFF` `#E94513` `#000000` `#333333` `#666666` `#CCCCCC`. Ningún otro hex. El verde `#2D6A4F` no se usa en notificaciones.
3. **Estilos en línea únicamente.** Prohibido `<style>`, clases, `<link>`, flexbox, grid, `border-radius`, sombras, gradientes, imágenes de fondo y emojis.
4. **Una acción por correo** y **un dato héroe como máximo**.
5. **El pie institucional es fijo** (§5.9) y va en todos los correos.
6. **Nada de valores crudos:** moneda, fechas y estados pasan por las columnas de formato (§3). Nunca pongas `$` delante de un valor que ya lo trae.
7. **Español, tuteo, voz activa**, frases de 25 palabras o menos. Sin palabras de la lista "evitar" del sistema de marca.
8. **Antes de entregar, pasa el checklist de la §9** y reporta qué verificaste y qué no.

---

## 1. Cuándo aplicar este documento

Aplícalo siempre que la tarea implique:
- crear un bot, proceso o paso de tipo **Send an email** en AppSheet;
- redactar o cambiar el **asunto**, el **cuerpo** o la **plantilla HTML** de un correo automático;
- revisar un correo existente que "se ve distinto" a los demás.

Si el correo no es una notificación de sistema (newsletter o correo personal), usa el capítulo de correo del sistema de diseño, no este documento.

---

## 2. Qué debes averiguar antes de escribir (ficha del correo)

Completa esta ficha leyendo la app (tablas, columnas, slices, acciones, bots) y, si falta algo, pregunta. No inventes columnas.

| Campo | Pregunta | Ejemplo |
|---|---|---|
| `app` | ¿Qué sistema envía? | Fucai Campo |
| `modulo` | ¿Qué módulo? | Avances |
| `tabla` | ¿Tabla del evento? | `avances` |
| `evento` | ¿Qué cambio dispara el bot? (condición exacta) | `[estado]` cambia a `Devuelto` |
| `familia` | ¿Pide acción, devuelto, avance de estado, recordatorio o cierre? (§6) | Devuelto |
| `destinatarios` | ¿Quién recibe y por qué? (To / CC) | Solicitante; CC coordinador |
| `objeto` | ¿Cómo se nombra el registro? | Avance · Solicitud de pasajes · Préstamo |
| `id_visible` | ¿Qué columna es el número? | `[id_avance]` |
| `dato_heroe` | ¿Cuál es el dato más importante? (o ninguno) | Total solicitado |
| `campos` | 4–8 campos de la rejilla, en orden de importancia | Observaciones, Solicitante, Proyecto… |
| `detalle` | ¿Hay líneas hijas para una tabla? | `[Related detalle_avances]` |
| `accion` | ¿Qué debe hacer la persona y en qué vista? | Corregir en `avances_Detail` |
| `razon_envio` | ¿Por qué recibe este correo? | "Recibes este correo porque solicitaste el avance." |

---

## 3. Columnas de formato (créalas una vez por tabla)

Los correos leen **columnas virtuales de texto** ya formateadas, no las columnas originales. Así todas las apps muestran igual los datos. Prefijo obligatorio: `vc_mail_`.

| Columna virtual | Tipo | Fórmula base | Resultado |
|---|---|---|---|
| `vc_mail_estado` | Text | `SWITCH([estado], "Pendiente - Coordinador", "Pendiente de coordinación", "Pendiente - Direccion Ejecutiva", "Pendiente de Dirección Ejecutiva", "En revision - Coordinador", "En revisión de coordinación", "En revision - Dir. Contable", "En revisión de Dirección Contable", "Aprobado - pendiente desembolso", "Aprobado · pendiente de desembolso", [estado])` | Etiqueta legible, con tildes |
| `vc_mail_fecha` | Text | `TEXT([fecha_solicitud], "DD/MM/YYYY")` | `28/09/2026` |
| `vc_mail_valor` | Text | `CONCATENATE("$ ", SUBSTITUTE(TEXT(ROUND([total_solicitado])), ",", "."))` | `$ 1.290.970` |
| `vc_mail_url` | Url | `LINKTOROW([_THISROW], "avances_Detail")` | Enlace profundo a la vista de detalle |

Reglas:
- **Moneda COP:** sin decimales, punto de miles, `$ ` con espacio. La fórmula de `vc_mail_valor` depende del idioma y la configuración regional de la app: **pruébala con el botón Test del editor de expresiones** y ajusta el `SUBSTITUTE` hasta obtener exactamente `$ 1.290.970`. Si el valor ya viene con `$`, no lo antepongas otra vez.
- **Estados:** el `SWITCH` debe cubrir todos los valores del Enum de la tabla. Los que ya se leen bien caen en el valor por defecto `[estado]`.
- Usa el mismo nombre de columna en todas las apps (`vc_mail_estado`, `vc_mail_valor`…) para que las plantillas sean intercambiables.
- Columnas de tablas hijas (líneas de detalle) siguen el mismo patrón: `vc_mail_valor` en `detalle_avance`.

---

## 4. Esqueleto HTML obligatorio

Guárdalo como archivo `.html` en la carpeta de plantillas de la app en Drive (ver §8) y selecciónalo como **Email Body Template** del paso del bot. Los marcadores `{{…}}` los reemplazas tú al construir la plantilla; las expresiones `<<…>>` las resuelve AppSheet al enviar.

```html
<div style="margin:0;padding:0;background-color:#F6F3E9;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#F6F3E9;">{{PREHEADER}}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background-color:#F6F3E9;">
<tr><td align="center" style="padding:32px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;width:100%;max-width:600px;background-color:#FFFFFF;border-top:3px solid #E94513;">

  <!-- 1 · CABECERA -->
  <tr><td style="padding:28px 28px 8px 28px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr>
      <td valign="middle"><a href="https://www.fucaicolombia.org" target="_blank" style="text-decoration:none;border:0;"><img src="https://drive.google.com/thumbnail?id=1vGJJaEBNEZqLNM9KtWe0wRh8E11rW3hW&sz=w260" width="130" alt="FUCAI" style="display:block;width:130px;height:auto;border:0;font-family:Calibri,Carlito,Arial,sans-serif;font-size:14px;color:#E94513;"></a></td>
      <td valign="middle" align="right" style="font-family:Calibri,Carlito,Arial,Helvetica,sans-serif;font-size:13px;line-height:18px;mso-line-height-rule:exactly;color:#666666;">{{APP}} · {{MODULO}}</td>
    </tr></table>
  </td></tr>

  <!-- 2 · IDENTIDAD -->
  <tr><td style="padding:24px 28px 0 28px;">
    <p style="margin:0 0 6px 0;font-family:Calibri,Carlito,Arial,Helvetica,sans-serif;font-size:13px;line-height:18px;mso-line-height-rule:exactly;letter-spacing:1.5px;text-transform:uppercase;color:#666666;">{{SOBRETITULO}}</p>
    <p style="margin:0;font-family:'Space Grotesk',Arial,Helvetica,sans-serif;font-size:34px;line-height:38px;mso-line-height-rule:exactly;font-weight:700;letter-spacing:-1px;color:#000000;">N.º <<[{{ID}}]>></p>
    <!-- BLOQUE chip de estado (§5.1) -->
  </td></tr>

  <!-- 3 · MENSAJE -->
  <tr><td style="padding:24px 28px 0 28px;font-family:Calibri,Carlito,Arial,Helvetica,sans-serif;font-size:16px;line-height:24px;mso-line-height-rule:exactly;color:#333333;">{{APERTURA}}</td></tr>

  <!-- 4 · DATOS: dato héroe (§5.2) + rejilla (§5.3–5.4) -->
  <tr><td style="padding:24px 28px 0 28px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
      {{FILAS_DE_DATOS}}
    </table>
  </td></tr>

  <!-- 4b · DETALLE opcional (§5.5) -->

  <!-- 5 · ACCIÓN (§5.6) -->

  <!-- 6 · FIRMA DEL SISTEMA -->
  <tr><td style="padding:24px 28px 0 28px;font-family:Calibri,Carlito,Arial,Helvetica,sans-serif;font-size:16px;line-height:24px;mso-line-height-rule:exactly;color:#333333;">— {{APP}}</td></tr>

  <!-- 7 · PIE INSTITUCIONAL (§5.9) -->

</table>
</td></tr>
</table>
</div>
```

---

## 5. Biblioteca de bloques (copiar tal cual)

### 5.1 Chip de estado
Va debajo del número. Siempre neutro: nunca verde para aprobado ni rojo para devuelto.
```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-top:14px;"><tr>
<td style="padding:6px 12px;background-color:#F6F3E9;border-left:3px solid #E94513;font-family:Calibri,Carlito,Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;mso-line-height-rule:exactly;color:#333333;">Estado en el sistema: <strong style="color:#333333;"><<[vc_mail_estado]>></strong></td>
</tr></table>
```

### 5.2 Dato héroe (máximo uno, ocupa las 2 columnas)
```html
<tr><td colspan="2" valign="top" style="padding:0 0 18px 0;font-family:Calibri,Carlito,Arial,Helvetica,sans-serif;">
<p style="margin:0 0 2px 0;font-size:12px;line-height:16px;mso-line-height-rule:exactly;letter-spacing:1px;text-transform:uppercase;color:#666666;">{{ETIQUETA}}</p>
<p style="margin:0;font-family:'Space Grotesk',Arial,Helvetica,sans-serif;font-size:44px;line-height:48px;mso-line-height-rule:exactly;font-weight:700;letter-spacing:-1px;color:#E94513;"><<[{{COLUMNA}}]>></p>
</td></tr>
```

### 5.3 Fila de dos datos
```html
<tr>
<td width="50%" valign="top" style="padding:0 12px 18px 0;font-family:Calibri,Carlito,Arial,Helvetica,sans-serif;">
<p style="margin:0 0 2px 0;font-size:12px;line-height:16px;mso-line-height-rule:exactly;letter-spacing:1px;text-transform:uppercase;color:#666666;">{{ETIQUETA_A}}</p>
<p style="margin:0;font-size:15px;line-height:21px;mso-line-height-rule:exactly;color:#333333;"><<[{{COLUMNA_A}}]>></p></td>
<td width="50%" valign="top" style="padding:0 0 18px 12px;font-family:Calibri,Carlito,Arial,Helvetica,sans-serif;">
<p style="margin:0 0 2px 0;font-size:12px;line-height:16px;mso-line-height-rule:exactly;letter-spacing:1px;text-transform:uppercase;color:#666666;">{{ETIQUETA_B}}</p>
<p style="margin:0;font-size:15px;line-height:21px;mso-line-height-rule:exactly;color:#333333;"><<[{{COLUMNA_B}}]>></p></td>
</tr>
```

### 5.4 Fila de dato largo (observaciones, indicaciones)
Igual que 5.2, pero con valor a 15/21 px `#333333`. Envuélvela en `<<If: ISNOTBLANK([columna])>> … <<EndIf>>` para no mostrar etiquetas vacías.

### 5.5 Tabla de detalle (líneas hijas)
```html
<tr><td style="padding:28px 28px 0 28px;">
<p style="margin:0 0 12px 0;font-family:'Space Grotesk',Arial,Helvetica,sans-serif;font-size:18px;line-height:24px;mso-line-height-rule:exactly;font-weight:700;color:#000000;">Detalle de {{OBJETO_PLURAL}}</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
<tr style="background-color:#E94513;">
<th align="left" style="padding:10px 12px;font-family:Calibri,Carlito,Arial,Helvetica,sans-serif;font-size:12px;line-height:16px;color:#FFFFFF;font-weight:700;letter-spacing:1px;text-transform:uppercase;">{{COL_1}}</th>
<th align="left" style="padding:10px 12px;font-family:Calibri,Carlito,Arial,Helvetica,sans-serif;font-size:12px;line-height:16px;color:#FFFFFF;font-weight:700;letter-spacing:1px;text-transform:uppercase;">{{COL_2}}</th>
<th align="right" style="padding:10px 12px;font-family:Calibri,Carlito,Arial,Helvetica,sans-serif;font-size:12px;line-height:16px;color:#FFFFFF;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Valor (COP)</th>
</tr>
<tr>
<td valign="top" style="padding:10px 12px;border-bottom:1px solid #CCCCCC;font-family:Calibri,Carlito,Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;color:#333333;"><<Start: [{{REF_ROWS}}]>><<[{{CAMPO_1}}]>></td>
<td valign="top" style="padding:10px 12px;border-bottom:1px solid #CCCCCC;font-family:Calibri,Carlito,Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;color:#333333;"><<[{{CAMPO_2}}]>></td>
<td valign="top" align="right" style="padding:10px 12px;border-bottom:1px solid #CCCCCC;font-family:Calibri,Carlito,Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;color:#333333;white-space:nowrap;"><<[vc_mail_valor]>><<End>></td>
</tr>
<tr>
<td colspan="2" style="padding:14px 12px;border-top:2px solid #000000;font-family:'Space Grotesk',Arial,Helvetica,sans-serif;font-size:13px;line-height:18px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#000000;">Total</td>
<td align="right" style="padding:14px 12px;border-top:2px solid #000000;font-family:'Space Grotesk',Arial,Helvetica,sans-serif;font-size:18px;line-height:24px;font-weight:700;color:#E94513;white-space:nowrap;"><<[vc_mail_valor]>></td>
</tr>
</table>
</td></tr>
```
`<<Start:…>>` va al **inicio de la primera celda** y `<<End>>` al **final de la última celda** de la misma fila. Así AppSheet repite la fila completa por cada línea.

### 5.6 Acción (una sola)
```html
<tr><td style="padding:28px 28px 0 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background-color:#F6F3E9;border-left:3px solid #E94513;"><tr>
<td style="padding:18px 20px;font-family:Calibri,Carlito,Arial,Helvetica,sans-serif;">
<p style="margin:0 0 6px 0;font-size:12px;line-height:16px;mso-line-height-rule:exactly;letter-spacing:1px;text-transform:uppercase;color:#666666;">{{VERBO}} {{OBJETO_ARTICULO}} en {{APP}}</p>
<p style="margin:0;font-size:16px;line-height:24px;mso-line-height-rule:exactly;font-weight:700;color:#E94513;"><a href="<<[vc_mail_url]>>" style="color:#E94513;text-decoration:underline;">Abrir {{OBJETO_ARTICULO}} N.º <<[{{ID}}]>></a></p>
</td></tr></table>
</td></tr>
```

### 5.7 Aviso contextual (opcional, máximo uno)
Para reglas del proceso ("necesita dos aprobadores distintos"). Caja arena **sin** borde naranja, texto 14/20 px `#333333`. No reemplaza la acción.

### 5.8 Días (recordatorios)
Dato héroe con el número y la unidad: `<<[vc_dias]>> días sin movimiento` o `<<[vc_dias]>> días vencido`. Si la fecha base puede estar vacía o ser inválida, protege la columna con `IF(ISBLANK(...), "", ...)` en lugar de corregir los datos.

### 5.9 Pie institucional (fijo)
```html
<tr><td style="padding:32px 28px 28px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-top:1px solid #CCCCCC;"><tr>
<td style="padding:20px 0 0 0;font-family:Calibri,Carlito,Arial,Helvetica,sans-serif;">
<p style="margin:0 0 10px 0;font-size:12px;line-height:18px;mso-line-height-rule:exactly;color:#666666;">Notificación automática de {{APP}} generada el <<TEXT(TODAY(), "DD/MM/YYYY")>>. {{RAZON_ENVIO}} Mensaje automático: no respondas a este correo.</p>
<p style="margin:0 0 6px 0;font-size:12px;line-height:18px;mso-line-height-rule:exactly;color:#666666;">Fundación Caminos de Identidad · NIT 800.173.574-1 · <a href="https://www.fucaicolombia.org" style="color:#E94513;text-decoration:none;">www.fucaicolombia.org</a></p>
<p style="margin:0;font-size:12px;line-height:18px;mso-line-height-rule:exactly;color:#666666;font-style:italic;">Nuestro centro es la periferia</p>
</td></tr></table>
</td></tr>
```

---

## 6. Textos por familia (plantillas de redacción)

Rellena solo los huecos. No cambies la estructura de la frase.

| Familia | Sobretítulo | Apertura | Acción (`{{VERBO}}`) | Dato héroe |
|---|---|---|---|---|
| **Pide acción** | `Nueva solicitud de {objeto}` · `{Objeto} para revisar` | `Hola. <strong><<[nombre]>></strong> envió {objeto con artículo} y espera tu {aprobación/revisión} como {rol}.` | Revisar | Monto o fecha clave |
| **Devuelto** | `{Objeto} devuelto` | `{Objeto con artículo} de <strong><<[nombre]>></strong> fue devuelto. Revisa las observaciones, corrige lo que haga falta y vuélvelo a enviar.` | Corregir | Ninguno: primero **Observaciones** |
| **Avance de estado** | `{Objeto} {aprobado/desembolsado/comprado}` | `Listo. {Objeto con artículo} {cambio}. {Qué sigue, en una frase}.` | Ver | Monto o fecha |
| **Recordatorio** | `{Objeto} sin movimiento` | `Hola. {Objeto con artículo} N.º <<[id]>> sigue en «<<[vc_mail_estado]>>» desde hace <strong><<[vc_dias]>> días</strong>.` | Abrir | Días |
| **Cierre** | `{Objeto} {legalizado/cerrado}` | `Listo. {Objeto con artículo} quedó {cerrado}. No tienes nada pendiente.` | Ver (opcional) | Monto final |

**Preheader:** repite el hecho en una frase con nombre y cifra: `Nueva solicitud de avance de <<[nombre]>> por <<[vc_mail_valor]>>`.

**Razón de envío** (una frase, empieza con "Recibes este correo porque…"): *…solicitaste el avance.* / *…coordinas el proyecto del avance.* / *…eres responsable de contabilidad.*

### 6.1 Asunto (campo Email Subject del bot)
Patrón: `{Objeto} N.º <<[id]>> · {qué pasó} [· {para quién o qué sigue}]`
```
Avance N.º <<[id_avance]>> · nueva solicitud de <<[nombre_solicitante]>> pendiente de tu aprobación
Avance N.º <<[id_avance]>> · devuelto para corrección
Pasajes · solicitud N.º <<[id_solicitud]>> · tiquetes comprados
Préstamo N.º <<[id_prestamo]>> · recibimos tu solicitud
```
Sin mayúsculas sostenidas, sin "!", sin emojis, ≤ 80 caracteres con datos típicos.

---

## 7. Configuración del bot en AppSheet

| Ajuste | Valor |
|---|---|
| Nombre del bot | `Bot N · {Módulo} · {evento}` (ej. `Bot 3 · Avances · devuelto`) |
| Nombre del paso | `mail_{modulo}_{familia}` (ej. `mail_avances_devuelto`) |
| Evento | Data change con condición **específica del cambio**, p. ej. `AND([_THISROW_BEFORE].[estado] <> "Devuelto", [_THISROW_AFTER].[estado] = "Devuelto")`. Nunca "cualquier actualización" sin condición |
| Recordatorios | Evento programado (Schedule) diario con `ForEachRowInTable` y filtro explícito |
| Email To | Expresión con los correos reales desde `usuarios`/columnas `email_*`; `CC` solo si la persona debe estar informada; **sin** listas fijas escritas a mano |
| Email Subject | Patrón de la §6.1 |
| Email Body Template | Archivo `.html` de Drive (§8) |
| Email Body (texto) | Vacío si hay plantilla |
| Reply-to | Correo del área responsable (ej. contabilidad o logística), no el de quien construyó la app |
| Adjuntos | Solo si el proceso lo exige (cotización, comprobante) |

---

## 8. Archivos y nombres

- Carpeta Drive por app: `…/{App}/Plantillas correo/`.
- Nombre de plantilla: `mail_{modulo}_{familia}.html` (ej. `mail_pasajes_comprado.html`).
- El logo se sirve siempre desde el mismo ID de Drive (§4); si cambia, se cambia en todas las plantillas a la vez.
- Mantén en la carpeta un `LEEME.md` con la tabla de bots → plantilla → destinatarios → condición.

---

## 9. Checklist de entrega (reporta el resultado al usuario)

**Estructura**
- [ ] Esqueleto de la §4 sin alteraciones; bloques de la §5 copiados tal cual.
- [ ] Solo hex de la paleta cerrada; sin `<style>`, clases, `border-radius` ni emojis.
- [ ] Cabecera `{App} · {Módulo}` y pie institucional completo.

**Contenido**
- [ ] Asunto con patrón; preheader presente.
- [ ] Una acción, con enlace profundo (`LINKTOROW`) a la vista correcta.
- [ ] Máximo un dato héroe; campos vacíos protegidos con `<<If:…>>`.
- [ ] Voz: tuteo, voz activa, sin palabras "evitar", cierre `— {App}`.

**Datos**
- [ ] Moneda `$ 1.290.970` (probado con Test); sin `$$`.
- [ ] Fechas `DD/MM/YYYY`; `N.º`; estado por `vc_mail_estado`.

**Técnica**
- [ ] Condición del evento restringida al cambio exacto; destinatarios por expresión.
- [ ] Probado enviando un registro de prueba y revisado en Gmail web y móvil.
- [ ] Informas al usuario qué quedó guardado, qué probaste y qué no.

---

## 10. Qué hacer ante casos no previstos

1. Si un correo necesita algo que la biblioteca no tiene, **no inventes un bloque**: combina los existentes (rejilla + aviso contextual) y propón el bloque nuevo al usuario para añadirlo a este documento.
2. Si una app ya tiene correos con otro diseño (por ejemplo, Bancabundancia), migra primero **datos y voz** y luego la estructura, correo por correo, sin cambiar la lógica del bot.
3. Si el usuario pide un color o estilo fuera de la paleta, avisa que rompe la coherencia entre apps y sugiere la alternativa dentro del sistema antes de aplicarlo.
