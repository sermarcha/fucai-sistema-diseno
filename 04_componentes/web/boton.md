# Componente — Botón (web/HTML/React)

> Botón de interfaz web. Minoría dentro del sistema (FUCAI es sobre todo
> documentos). Estado: **borrador**. Mantener ligero.

## Anatomía / variantes

- **Primario:** fondo `brand.primary` (naranja), texto `text.onColor` (blanco),
  radio 4 px.
- **Secundario:** borde naranja, fondo transparente, texto naranja.
- **Enlace:** naranja, sin subrayado en normal, subrayado en hover.

## Estados

- Normal · hover/activo (**naranja oscuro `accent.hover`** — el fondo del primario
  y el texto/borde del secundario y del enlace pasan a naranja oscuro; **nunca**
  durazno, que a 2:1 sobre blanco es ilegible) · foco (anillo visible, contraste
  ≥ 3:1) · deshabilitado (gris de soporte).
- `accent.soft` (durazno) solo puede aparecer como **fondo suave** de una llamada
  con texto oscuro; jamás como color del texto o del ícono del botón.

## Reglas críticas

- Texto de acción con verbo directo ("Conoce nuestro trabajo", "Súmate"), nunca
  "Haz clic aquí" (ver `05_contenido-lenguaje/microcopy.md`).
- **Foco visible** por teclado; objetivo táctil cómodo (ver `06_accesibilidad/`).
- Contraste: naranja↔blanco (3.9:1) válido en botón grande/negrita; verificar
  tamaño. En hover, naranja oscuro↔blanco (5.4:1) ✓.

## Cuándo usar / cuándo no

- **Usar:** acciones en web/artefactos.
- **No usar:** no como elemento dominante; no pastilla completa ni cuadrado duro.

## Tokens

`brand.primary`, `text.onColor`, `accent.hover` (hover/activo), `radius.sm` (4 px),
`motion.duration.fast` + `motion.easing.standard` (transición de hover/foco).
Detalle en `02_identidad-visual/forma-y-profundidad.md` y `movimiento.md`.
