# Versionado — FUCAI

> Política de versionado semántico del sistema y su relación con el CHANGELOG y los
> Releases de GitHub.

## Versionado semántico (MAJOR.MINOR.PATCH)

- **MAJOR** — cambios que rompen la compatibilidad de los tokens o la taxonomía
  (renombrar/eliminar tokens, cambiar la regla de scope, alterar la plataforma de
  marca). Obliga a revisar los consumidores.
- **MINOR** — nuevos tokens, temas, componentes o capas, compatibles hacia atrás.
- **PATCH** — correcciones de valores puntuales, documentación o andamiaje.

La versión vive en `package.json` y en el encabezado de `CHANGELOG.md`.

## Relación con el CHANGELOG

Cada cambio notable se registra en `CHANGELOG.md` (formato Keep a Changelog) bajo
*No publicado*; al publicar una versión se mueve a su sección con fecha. El
historial hasta hoy: `v0.1.0` (scaffolding), `v0.2.0` (estratégica y verbal),
`v0.3.0` (identidad visual y accesibilidad), `v0.4.0` (componentes, motor y
gobernanza).

## Relación con los Releases de GitHub

- Cada versión publicada se etiqueta (`git tag vX.Y.Z`) y se crea un **Release** en
  GitHub con las notas tomadas del CHANGELOG.
- **El paquete `.skill` se distribuye por Releases, NO como archivo suelto por
  commit.** El build (`scripts/build-skill.js`) genera el artefacto a partir de los
  tokens; se adjunta al Release de la versión correspondiente.
- Así, "qué versión del skill estoy usando" siempre corresponde a un Release
  trazable, y `main` queda libre de binarios generados.

El compilador (`scripts/build-skill.js --write`) ya **emite el paquete** en
`dist/skill/`.

**Historial etiquetado (2026-09-28).** La auditoría encontró que este documento daba
por etiquetadas versiones que **no tenían ningún tag**, ni local ni remoto. Se
subsanó: las doce versiones están ahora etiquetadas sobre sus commits de publicación,
con la fecha original de cada uno.

`v0.1.0` · `v1.0.0` · `v1.1.0` · `v1.2.0` · `v1.3.0` · `v1.3.1` · `v1.4.0` · `v1.5.0`
· `v1.6.0` · `v1.7.0` · `v1.8.0` · `v1.9.0`

> [Pendiente: crear los **Releases** en GitHub a partir de estos tags y adjuntar el
> paquete `.skill` de cada uno. Los tags ya existen; falta la publicación.]

> [Pendiente: automatizar la publicación del `.skill` por Releases (CI) a partir
> de `dist/skill/`. El empaquetado ya está; falta solo el disparador de publicación.]
