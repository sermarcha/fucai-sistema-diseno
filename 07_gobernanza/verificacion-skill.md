# Verificación — ¿el skill incluye todo el sistema de diseño?

**Fecha:** 2026-06-24 · **Repo:** v1.3.0 · **Skill:** `skill/fucai-branding/` (25 archivos, SKILL.md presente).

Objetivo: comprobar si la copia del skill refleja todo el sistema de diseño. Método:
comparación de cobertura capa por capa, con evidencia programática.

## Veredicto

**No.** El skill es la **autoridad de origen** de la marca (identidad visual, voz y
generación de entregables) y el sistema de diseño se **derivó** de él, por lo que el
skill cubre bien esa parte. Pero el sistema de diseño **extiende** al skill: lo que se
formalizó o añadió después de la Fase 1 **no** está en el skill. El sistema de diseño
es un **superconjunto** del skill, no al revés.

Esto es coherente con el principio del repo: **los tokens son la fuente de verdad y el
skill debería regenerarse desde ellos** (mecanismo previsto: `scripts/build-skill.js`,
hoy esqueleto).

## Matriz de cobertura

| Elemento del sistema de diseño | ¿En el skill? | Evidencia |
|--------------------------------|---------------|-----------|
| **Colores** (21 primitivos, incl. rampas naranja/verde/neutral) | ✅ Sí, completos | Los 21 HEX del repo están en el skill (`color-system.md`) |
| **Tipografía** (familias, escala, pesos, interlineado) | ✅ Sí | `typography-layout.md` |
| **Espaciado** (4·8·12·16·24·32·48) | ✅ Sí | `typography-layout.md` |
| **Voz, tono y léxico ético** | ✅ Sí | `voice-tone.md` |
| **Filosofía, 5 atributos, 4 pilares, VJACel** | ✅ Sí | `SKILL.md` |
| **Componentes** (docx/pptx/xlsx/appsheet/social/web) | ✅ Sí (como referencias) | `docx.md`, `pptx.md`, `xlsx.md`, `appsheet.md`, `canva.md`, `web.md` |
| **Logo** (reglas + PNG) | ✅ Sí | `SKILL.md`, `assets/` |
| **Contraste/accesibilidad** | ✅ Sí (parcial) | `color-system.md`, `web.md` |
| **Sistema de tokens** (`tokens.json`, taxonomía, temas como archivos) | ❌ No | 0 archivos de tokens en el skill (tiene los valores, no el sistema) |
| **Misión, Visión y Valores oficiales** | ❌ No | sin menciones en el skill (provienen del dueño de marca, no del skill) |
| **`radius.md` (8px), `elevation.*`, `motion.*`** | ❌ No | skill solo menciona radio 4 px; 0 de elevación/movimiento |
| **Fuentes Space Grotesk (.ttf/.woff2)** | ❌ No | 0 archivos de fuente en el skill (solo logos) |
| **Gobernanza, versionado, onboarding, mapa de fuente de verdad** | ❌ No | el skill es de generación, no de gobernanza |
| **Motor token-driven** (`scripts/lib`, generadores que leen tokens) | ❌ No | el skill trae los generadores originales con valores embebidos |

## Brechas, en dos categorías

**(A) Contenido que el skill podría/debería reflejar para "incluir" el sistema:**
- La **Misión, Visión y los 12 Valores** oficiales (hoy solo en
  `01_fundamentos/plataforma-de-marca.md`). Es la brecha de contenido más relevante.
- Una **referencia a `03_tokens/tokens.json` como fuente de verdad** y a los nuevos
  grupos de tokens (`radius`, `elevation`, `motion`, `dataviz.ramp`).

**(B) Artefactos de nivel repositorio que NO corresponden al skill** (el skill es una
herramienta de generación, no el repositorio): los archivos de tokens y temas, las
fuentes como activos versionados, la capa de gobernanza y el motor `scripts/`. Estos
"viven" en el sistema de diseño; el skill los **consume/deriva**, no los contiene.

## Recomendación

El cierre correcto y duradero es **`build-skill.js`**: regenerar las constantes del
skill desde `tokens.json` y empaquetar el `.skill` por Releases (ver `versionado.md`).
Mientras ese compilador se completa, la brecha (A) puede cerrarse a mano sincronizando
el `SKILL.md` (incrustar Misión/Visión/Valores y un puntero a los tokens). La brecha
(B) no se cierra: es, por diseño, responsabilidad del repositorio, no del skill.
