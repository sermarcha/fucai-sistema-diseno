# Componentes de email / mailing — FUCAI

> Familia de componentes para **correo electrónico**: correo institucional,
> boletín y campañas de mailing. Plataforma nueva en el sistema (antes solo había
> documento, presentación, AppSheet, social y web). Estado: **borrador**.

## Por qué email es su propia familia

El correo no se renderiza como un documento ni como una web normal: los clientes
(Gmail, Outlook, Apple Mail) tienen un **soporte de HTML/CSS limitado y desigual**.
Por eso email tiene reglas técnicas propias y, idealmente, **tokens propios**
(ancho máximo, fuentes seguras de cliente de correo) para no quemar valores a mano
—fiel a la regla de oro del sistema—.

## Fichas

| Ficha | Qué es |
|-------|--------|
| `sistema-de-correo.md` | **Capítulo del medio**: paleta, tipografía y anatomía común de los tres tipos de correo (notificación, boletín, firma). |
| `plantilla.md` | Estructura base de un correo FUCAI (cabecera, cuerpo, pie, firma). |
| `boletin.md` | Boletín periódico: varios bloques de contenido en una sola pieza. |
| `campana-mailing.md` | Guía de campaña: segmentación, asunto, preheader, CTA, frecuencia, métricas y cumplimiento. |

> **Cómo se construyen las notificaciones.** Este capítulo dice *cómo se ve* el
> correo. Las reglas de implementación en AppSheet —columnas de formato,
> esqueleto HTML, biblioteca de bloques y configuración del bot— están en
> `../appsheet/notificaciones-correo.md`.

## Qué referencia esta familia (no lo redefine)

- **Voz y tono** → `01_fundamentos/voz-y-tono.md`. En email pesa lo **cercano**:
  apertura "Hola, [nombre]: te escribimos desde el equipo de FUCAI para…"; cierre
  "Seguimos caminando juntos. Un abrazo desde la periferia, [nombre]."
- **Léxico ético** → `05_contenido-lenguaje/lexico-institucional.md` (manda siempre).
- **Microcopy y CTA** → `05_contenido-lenguaje/microcopy.md` (verbos directos,
  nada de "Haz clic aquí").
- **Audiencias** → `01_fundamentos/audiencias.md` (el tono cambia por público).
- **Color, tipografía, proporción, logo** → `03_tokens/tokens.json` y
  `02_identidad-visual/logo/` (autoridad).
- **Contraste y accesibilidad** → `06_accesibilidad/`.

## Grupo de tokens `email.*` (ya creado en `03_tokens/tokens.json`)

Para no escribir medidas a mano, el grupo de componente `email.*` vive en
`tokens.json` (nivel 3, referencia a semánticos; regla de cadena del sistema):

- `email.maxWidth` — ancho máximo del cuerpo: **600 px**, diseño de una columna.
- `email.font.heading` → `{font.family.heading}` y `email.font.body` →
  `{font.family.body}`. Estas familias **ya incluyen fallback seguro de email**
  (Space Grotesk → Arial Black/Arial; Calibri → Carlito/Arial), así que no se
  duplican: el correo reusa las fuentes de marca con su degradado.
- `email.button.bg` → `{brand.primary}` · `email.button.text` → `{text.onColor}`.
- `email.surface.canvas` → `{color.arena-claro}` (lienzo exterior) ·
  `email.surface.card` → `{color.blanco}` (tarjeta del contenido).
- `email.accent` → `{brand.primary}` (filete de 3 px, dato héroe, enlaces) ·
  `email.territory` → `{brand.territory}`, **solo** boletín y contenidos de
  territorio, nunca en notificaciones · `email.rule` → `{color.gris-linea}`.
- `email.text.title` / `email.text.body` / `email.text.muted` → negro, gris de
  texto y gris de soporte.
- `email.signature.border` **3 px**, `email.signature.padding` **13 px** y
  `email.signature.maxWidth` **420 px** — la firma del personal.

La tabla de paleta de `sistema-de-correo.md` está marcada `[GEN]`: `build-skill.js`
verifica en cada build que sus hex sigan coincidiendo con estos tokens.

> [Pendiente: elegir la herramienta de envío oficial (p. ej. Mailchimp, Brevo,
> Acumbamail) y validar el texto legal de tratamiento de datos antes de pasar
> estas fichas de borrador a estable.]
