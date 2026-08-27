# Sistema de Diseño FUCAI

**Fundación Caminos de Identidad (FUCAI)** · NIT 800.173.574-1
*Nuestro centro es la periferia*

Fuente única de verdad de la marca FUCAI. Este repositorio es leído tanto por
personas como por herramientas agénticas. Su principio rector es uno solo:

> **Los tokens y las reglas explícitas son la fuente de verdad; los documentos
> son derivados.** Ningún valor de marca (un color, un tamaño, un margen) se
> escribe a mano en una plantilla o un documento: se define una vez aquí y todo
> lo demás lo consume.

Alineado al *Manual de Identidad Visual v1.1 (abril 2026)* y al skill
institucional `fucai-branding`, que se conserva íntegro en `skill/` como espejo
versionado de la autoridad de marca.

---

## Las 7 capas

| # | Capa | Qué contiene |
|---|------|--------------|
| 01 | `01_fundamentos/` | Filosofía de diseño, principios, los cinco atributos y los pilares de marca. |
| 02 | `02_identidad-visual/` | Activos visuales: `logo/`, `tipografia/`, `iconos/`. |
| 03 | `03_tokens/` | **El corazón.** `tokens.json` (W3C), `taxonomia.md` y `temas/`. Manda sobre todo valor. |
| 04 | `04_componentes/` | Patrones reutilizables por plataforma: `documento/`, `presentacion/`, `appsheet/`, `social/`, `web/`. |
| 05 | `05_contenido-lenguaje/` | Voz y tono, lista de palabras a evitar, glosario, plantillas de texto. |
| 06 | `06_accesibilidad/` | Reglas de contraste, tamaños mínimos, criterios WCAG. |
| 07 | `07_gobernanza/` | Versionado, roles, proceso de cambio, propiedad de la marca. |

Acompañan al árbol: `skill/` (copia viva del skill `fucai-branding`) y
`scripts/` (generadores que consumen los tokens; `generators/` y `lib/`).

---

## Mapa de fuente única de verdad

Cada valor de marca tiene **una sola** carpeta que lo gobierna. Si dos lugares
discrepan, manda esta tabla.

| Valor / decisión | Carpeta que manda | Archivo autoritativo |
|------------------|-------------------|----------------------|
| Colores (primitivos, semánticos, de componente) | `03_tokens/` | `tokens.json` |
| Variantes de paleta (claro, oscuro, submarcas, co-branding) | `03_tokens/temas/` | `temas/*.json` |
| Nomenclatura, alias y regla de scope por plataforma | `03_tokens/` | `taxonomia.md` |
| Tipografía (familias, escala, pesos) | `03_tokens/` | `tokens.json` (grupo `font`) |
| Espaciado y márgenes | `03_tokens/` | `tokens.json` (grupos `space`, `layout`) |
| Logo y sus reglas de uso | `02_identidad-visual/logo/` | activos + reglas |
| Filosofía, atributos y pilares | `01_fundamentos/` | — |
| Voz, tono y palabras a evitar | `05_contenido-lenguaje/` | — |
| Reglas de contraste y accesibilidad | `06_accesibilidad/` | — |
| Patrones por plataforma (docx, pptx, appsheet, social, web) | `04_componentes/` | — |
| Autoridad de marca de referencia (espejo) | `skill/fucai-branding/` | `SKILL.md` + `references/` |

Regla de oro: **no se queman valores numéricos fuera de `tokens.json`.** Las
demás capas referencian tokens; nunca redefinen el valor crudo.

---

## Build y verificación (implementados)

Los entregables NO se versionan: el repositorio guarda *fuentes*. El build genera
todo bajo `dist/` (ignorado por git) consumiendo `03_tokens/tokens.json` y el tema
activo, y **verifica** la sincronía del sistema (lo mismo corre el CI en cada PR).

```bash
# Dependencias
npm install            # generadores Node (docx, pptx)
pip install -r requirements.txt   # generadores Python (xlsx)

npm run build:skill    # verifica: tablas [GEN], contraste WCAG calculado,
                       # temas vs tokens y hex del CSS de Squarespace
npm run build          # además emite dist/skill/ (tokens resueltos, CSS, constantes)
npm run package:skill  # ensambla el paquete del skill subible a claude.ai
npm run specimen       # genera dist/specimen.html (muestrario visual desde tokens)
npm run qa:docx -- <archivo>      # QA de un .docx generado
```

`dist/` se crea en tiempo de ejecución y está en `.gitignore`; nunca se commitea.

---

## Estado

`v1.8.0` — sistema en operación: fuente de verdad poblada y verificada por CI,
capa estratégica oficial completa, generadores token-driven (docx/pptx/xlsx),
componentes de documento/presentación/redes/email/web/cartografía, skill
empaquetable y guía rápida (`GUIA-RAPIDA.md`). Pendientes y decisiones abiertas:
ver `07_gobernanza/analisis-de-vacios.md` y `CHANGELOG.md`.
