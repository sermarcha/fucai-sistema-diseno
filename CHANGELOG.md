# Changelog

Todas las modificaciones notables de este repositorio se documentan aquí.
El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el versionado es [Semántico](https://semver.org/lang/es/) (MAJOR.MINOR.PATCH):

- **MAJOR** — cambios que rompen la compatibilidad de los tokens o la taxonomía.
- **MINOR** — nuevos tokens, temas, componentes o capas, compatibles hacia atrás.
- **PATCH** — correcciones de valores, documentación o andamiaje.

## [No publicado]

### Por hacer
- Poblar las capas 01, 02 (tipografía/iconos), 04, 05, 06 y 07 (fases 2–5).
- Implementar los generadores en `scripts/generators/` y el comando `npm run build`.
- Confirmar contra el Manual de Identidad los valores provisionales de la
  submarca Tienda FUCAI (terracota y ocre) en `03_tokens/temas/tienda-fucai.json`.

## [0.1.0] — 2026-06-24

### Añadido
- **Scaffolding inicial** del sistema de diseño FUCAI.
- Repositorio git inicializado con rama `main`.
- Archivos de raíz: `README.md`, `CHANGELOG.md`, `CONTRIBUTING.md`,
  `.gitattributes` (Git LFS), `.gitignore`, `package.json`, `requirements.txt`.
- Árbol completo de las 7 capas con `.gitkeep` en las carpetas vacías.
- **Fuente de verdad poblada:** `03_tokens/tokens.json` en formato W3C Design
  Tokens con tres niveles (primitivos, semánticos por superficie, de componente),
  más tokens tipográficos y de espaciado.
- `03_tokens/taxonomia.md` con la nomenclatura, los alias y la regla de scope
  por plataforma.
- Cuatro temas con claves idénticas: `claro.json`, `oscuro.json`,
  `tienda-fucai.json` y `cobranding-naane.json`.
- Copia viva del skill institucional en `skill/fucai-branding/`.
- Logos `logo_naranja.png` y `logo_blanco.png` en `02_identidad-visual/logo/`.
