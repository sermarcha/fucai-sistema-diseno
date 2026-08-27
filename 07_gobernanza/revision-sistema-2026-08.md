# Revisión del sistema de diseño — comunicación, coherencia e impacto (agosto 2026)

**Fecha:** 2026-08-26 · **Versión revisada:** v1.7.0 + cambios sin publicar (redes,
Squarespace, cartografía, contenido estratégico) · **Alcance:** las 7 capas, temas,
scripts, skill empaquetado y CI · **Método:** lectura completa + verificación
programática (contraste WCAG calculado, `build-skill` ejecutado, grep de valores
quemados).

Complementa —no repite— `analisis-de-vacios.md` (2026-06) y
`revision-redes-2026-07.md`. Aquí van **hallazgos nuevos** y mejoras orientadas a
tres objetivos: mejor comunicación, coherencia de marca y mayor impacto.

## Resumen ejecutivo

El sistema está **sano en su arquitectura**: la cadena tokens → generadores →
verificación `[GEN]` → CI funciona (verificado: `build-skill` PASS, 16 tablas / 58
filas en sincronía; generadores sin hex quemados). La capa estratégica quedó
completa y la revisión de redes de julio es un modelo de gobernanza viva.

Los riesgos reales de hoy son otros tres:

1. **Deriva del skill:** la herramienta que más piezas produce (skill
   `fucai-branding` en claude.ai) **no contiene** las reglas nuevas de julio
   (carrusel, prohibición de IA para personas, canales, email, cartografía). La
   coherencia de marca se está decidiendo en el repo pero no viaja al productor.
2. **Accesibilidad con cifras no verificadas:** varias cifras de contraste
   documentadas no coinciden con el cálculo WCAG, y dos usos vigentes (hover
   durazno, slogan naranja sobre arena) **fallan** el umbral que el propio sistema
   exige.
3. **Impacto sin instrumentos:** las reglas que sostienen el impacto (banco de
   fotos autorizado, inventario de canales, línea base de métricas, herramienta de
   mailing) siguen sin operacionalizarse; sin ellas, medio sistema es aspiracional.

---

## 1. Hallazgos nuevos

Severidad: **A** alto · **M** medio · **B** bajo.

### H1 (A) — El skill y `DESIGN.md` quedaron atrás de las reglas de julio

`scripts/build-skill.js --package` empaqueta: SKILL.md original (v3.1) +
`design-system/` + `DESIGN.md`. Verificado: **ninguno** de esos archivos contiene
las reglas del carrusel (máx. 2 láminas intensas, 1080×1350, proporción 60-25-10-5
a nivel de carrusel), la **prohibición de imágenes IA para representar personas o
comunidades**, las guías por canal, la familia email ni la cartografía. `DESIGN.md`
solo conoce los tamaños de junio (1080×1080). Quien produzca redes desde el skill
reproducirá exactamente las brechas que la revisión de julio corrigió.

→ **Acción:** actualizar `DESIGN.md` (§ redes) y `skill/fucai-branding/references/canva.md`
con las reglas de `04_componentes/social/carrusel.md`; regenerar y **re-subir** el
paquete a claude.ai; añadir al CI un chequeo de deriva (fecha/hash de las fichas de
componente vs. la sección correspondiente del skill, o al menos un aviso en el
CHANGELOG de "skill desactualizado desde…").

### H2 (A) — Cifras de contraste documentadas ≠ cálculo WCAG

Las tablas de `02_identidad-visual/color.md` y `06_accesibilidad/estandar-accesibilidad.md`
(marcadas `[GEN]… desde Manual v1.1`) no resisten el cálculo:

| Par | Documentado | Calculado (WCAG 2.x) |
|-----|-------------|----------------------|
| Naranja ↔ blanco | 3.1:1 | **3.94:1** |
| Verde ↔ blanco | 5.9:1 | **6.39:1** |
| Arena ↔ negro | 10.5:1 | **17.08:1** |
| Arena claro ↔ gris texto | 8.5:1 | **11.38:1** |

Las reglas duras se sostienen (naranja↔blanco sigue por debajo de 4.5:1 → solo
títulos grandes), pero un sistema que se presenta como fuente de verdad no debería
publicar cifras que una auditoría de accesibilidad refutaría en minutos.

→ **Acción:** calcular el contraste **programáticamente** en `build-skill.js` (la
fórmula es de 10 líneas) y regenerar las tablas; cambiar el marcador a
`[GEN] calculado desde tokens.json`. Deja de depender del Manual para un dato
derivable.

### H3 (A) — El hover tiene dos autoridades contradictorias y una falla

- `04_componentes/web/boton.md`: hover = **durazno** (`accent.soft` #F4A28A).
- `tokens.json` / `color.md`: **naranja-oscuro** (#C13A10) = "hover/sombra/profundidad".

Calculado: durazno sobre blanco = **2.02:1** (falla 3:1 de componente y 4.5:1 de
texto; un enlace o texto de botón que pase a durazno en hover se vuelve ilegible).
Blanco sobre naranja-oscuro = **5.41:1** ✓.

→ **Acción:** una sola regla — *hover de acción = naranja-oscuro; durazno solo como
fondo suave con texto oscuro, nunca como color de texto ni de ícono accionable*.
Corregir `boton.md` y `fucai-custom.css` si aplica.

### H4 (M) — Slogan naranja sobre banda arena: 3.21:1 en texto pequeño

`banda-arena.md` (componente **estable**) pone el slogan en cursiva **naranja sobre
arena** = 3.21:1, en tamaño de caption. El propio estándar exige ≥ 4.5:1 para texto
no-grande. Igual riesgo donde el naranja se use como texto pequeño sobre arena.

→ **Acción:** slogan de la banda en `gris-texto`/negro (o naranja solo si sube a
tamaño/peso de "texto grande" WCAG). Documentar la combinación arena+naranja como
"solo títulos grandes", igual que blanco+naranja.

### H5 (M) — `verde-claro` como "badge de territorio" sin condición de uso

Verde claro sobre blanco = **2.39:1**. Válido únicamente como **fondo** con texto
oscuro; como color de texto o ícono informativo, falla. Hoy ninguna ficha lo dice.

→ **Acción:** añadir la condición en `color.md` y en `accent.territorySoft`
(`$description`).

### H6 (M) — Los temas duplican hex a mano y nadie los verifica

`temas/*.json` son "paletas resueltas": 4 archivos con hex literales que se
mantienen **a mano**. Si mañana cambia `color.naranja`, los 4 temas quedan
desincronizados en silencio: el CI valida `tokens.json` y las tablas `[GEN]`, pero
**no los temas**. Además sus claves (`component.docx.coverBand`) no coinciden con la
ruta real de tokens (`docx.cover.band`), lo que impide verificarlos por referencia.

→ **Acción:** o los temas usan referencias `{color.*}` y el build los resuelve, o
`build-skill.js` añade un chequeo "tema vs. tokens" al paso [B] del CI.

### H7 (M) — El CSS de Squarespace queda fuera de la fuente de verdad

`fucai-custom.css` quema 15+ hex (inevitable: Squarespace no lee tokens), pero nada
lo verifica. Mismo modo de falla silenciosa que H6.

→ **Acción:** generar el bloque de variables del CSS desde `tokens.css` (que el
build ya emite) o añadir sus hex al chequeo del CI.

### H8 (B) — README contradice la madurez real del sistema

El README dice **"Estado: v0.1.0 — scaffolding inicial"** y "Build previsto (fases
posteriores)", cuando `package.json` va en **1.7.0**, el build está implementado y
hay CI. Es la primera impresión del repo para cualquier persona u agente nuevo.

→ **Acción:** actualizar Estado y sección Build; enlazar `onboarding.md`.

### H9 (B) — "Naranja = alerta" en cartografía se cruza con los colores de estado

`cartografia/README.md` asigna al naranja el rol de **alerta** en mapas, mientras
los colores de estado (éxito/error/alerta) siguen `[Pendiente]` en `color.md`. Son
la misma decisión semántica tomada en dos lugares.

→ **Acción:** resolver **una sola vez** la semántica de estado (UI + mapas + dataviz)
y tokenizarla; que cartografía la referencie.

### H10 (B) — Menores

- `guia-editorial.md` ejemplifica `FUCAI_Informe_Amazonas_2026-06.pdf`; el skill,
  `2025-04` — unificar.
- El SKILL.md fija salidas a `/mnt/user-data/outputs/` (ruta de un entorno
  específico) — generalizar.
- La escala tipográfica define H1–H3 pero `fucai-custom.css` estiliza `h1–h4` —
  refuerza la pendiente H4–H6.

---

## 2. Mejoras para una mejor comunicación (adopción del sistema)

El sistema son ~3.000 líneas de Markdown excelentes **para agentes**; para el
equipo humano de comunicaciones no hay ninguna pieza de consumo rápido.

1. **Guía rápida de 1 página** (PDF/HTML generada desde tokens): paleta con usos,
   dos fuentes, proporción 60-25-10-5, léxico sí/no esencial, 6 reglas duras. Es el
   artefacto que más adopción compra por hora invertida.
2. **Specimen visual HTML** (auto-generado con `tokens.css`): ver la marca, no
   leerla — paleta, tipografía, botones, tablas, rampas dataviz. Sirve además como
   QA visual de cada cambio de token.
3. **Plantillas Canva del carrusel** (pendiente ya identificado en julio): sin
   ellas, la lista de chequeo de 10 puntos depende de la memoria de cada persona.
   Es la mejora nº 1 para que lo publicado converja con el sistema.
4. **Formato "historia de impacto" VJACel**: una ficha de componente editorial
   (Ver → Juzgar → Actuar → Celebrar, con dato héroe y cita con fuente) reutilizable
   en boletín, redes, web e informes. El arco ya existe informalmente en los
   carruseles; falta codificarlo como pieza.
5. **Onboarding en dos rutas:** `onboarding.md` sirve para técnicos; añadir una
   ruta de 5 minutos "soy de comunicaciones y voy a publicar hoy" (guía rápida +
   checklist + dónde pedir ayuda).

## 3. Mejoras para coherencia de marca

1. **Cerrar el ciclo skill ↔ sistema (H1).** Es la mejora de coherencia más
   importante: la marca es tan coherente como su productor más activo.
2. **Un solo hover, un solo estado (H3, H9)** y regenerar contrastes (H2): que la
   accesibilidad afirmada sea la accesibilidad calculada.
3. **Alinear los textos oficiales al léxico ético** (decisión pendiente desde
   junio, hoy más urgente): la Misión oficial dice "poblaciones excluidas" y la
   narrativa de origen "poblaciones más vulnerables", término que el léxico
   prohíbe. Mientras dirección no ratifique, cada pieza nueva hereda la ambigüedad.
   Cerrar también "familias acompañadas" (¿reemplaza o convive?).
4. **Blindar los duplicados silenciosos (H6, H7)** vía CI.
5. **Completar los builders documentados** (`chapterDivider()`, `actaHeader()`,
   `signatureTable()`) y el QA de `.pptx`/`.xlsx`: tres componentes "borrador" se
   arman a mano hoy, que es exactamente donde la coherencia se fuga.

## 4. Mejoras para mayor impacto

1. **Operativizar los 4 instrumentos vacíos** (todos ya identificados, ninguno
   ejecutado): banco de fotos autorizado con registro de consentimiento (sin él,
   "solo banco autorizado" no es aplicable y el riesgo ético de julio puede
   repetirse) · `inventario.md` de canales con línea base · herramienta de mailing
   + texto legal Ley 1581 · handles oficiales. Son decisiones de una reunión.
2. **Componente "informe/one-pager de impacto para financiadores".** El Grupo 2 de
   audiencias (cooperación) es el que financia y no tiene pieza propia: un
   one-pager por proyecto (dato héroe, mapa del territorio con las reglas de
   cartografía, historia VJACel, uso de recursos) producido por los generadores.
3. **Medición como componente, no como intención.** El sistema ya ordena "datos de
   impacto siempre en cifra"; falta el contenedor: una ficha `impacto.md` que
   estandarice qué cifras se reportan por proyecto y con qué visualización
   (rampas ya tokenizadas). Conecta con `transparencia y responsabilidad` (valor 10).
4. **Política retroactiva sobre piezas con imágenes IA** (pendiente de julio):
   decidir si se corrigen/retiran las publicadas. Mientras no se decida, el
   antecedente contradice la regla nueva.

## 5. Plan priorizado

| # | Acción | Tipo | Esfuerzo | Objetivo |
|---|--------|------|----------|----------|
| 1 | Actualizar DESIGN.md + skill con reglas de redes y re-subir paquete (H1) | deuda | Medio | Coherencia |
| 2 | Contraste calculado en build + regenerar tablas (H2) | deuda | Bajo | Coherencia |
| 3 | Resolver hover y condiciones de durazno/verde-claro (H3, H5) | decisión+deuda | Bajo | Coherencia |
| 4 | Slogan de banda arena a color con 4.5:1 (H4) | deuda | Bajo | Coherencia |
| 5 | Plantillas Canva del carrusel | deuda | Medio | Comunicación |
| 6 | Guía rápida 1 página + specimen HTML desde tokens | deuda | Medio | Comunicación |
| 7 | Banco de fotos + inventario de canales + mailing (instrumentos) | decisión | Medio | Impacto |
| 8 | Verificación de temas y CSS en CI (H6, H7) | deuda | Bajo | Coherencia |
| 9 | One-pager de impacto para financiadores + ficha `impacto.md` | deuda | Medio | Impacto |
| 10 | Alinear textos oficiales al léxico + "familias acompañadas" + política IA retroactiva | decisión | Bajo | Coherencia |
| 11 | Semántica de estado unificada (UI/mapas/dataviz) y tokenizada (H9) | decisión | Medio | Coherencia |
| 12 | README actualizado + menores (H8, H10) | deuda | Bajo | Comunicación |

## 6. Estado de los vacíos de junio (2026-06-25)

Cerrados desde entonces: posicionamiento/arquetipo/personalidad ✅ · audiencias
oficiales ✅ · `naane-branding` en el repo ✅ · CI ✅ · tokens reservados
documentados ✅ · reglas de redes (nuevo) ✅ · implementación Squarespace ✅ ·
cartografía ✅.

Siguen abiertos: builders docx · QA pptx/xlsx · logo mono/SVG/tamaño mínimo ·
iconos (`iconos/` vacío) · colores de estado · H4–H6/escala web · grilla y
breakpoints · alineación de léxico oficial · política de localización · LICENSE ·
URL del repo · publicación del `.skill` por Releases · banco de fotos.

## Veredicto

La arquitectura es ejemplar y la gobernanza funciona (julio lo demostró). Las tres
inversiones con mejor retorno son: **(1)** sincronizar el skill con las reglas
nuevas —sin eso, el sistema mejora en el repo y no en la calle—, **(2)** hacer que
la accesibilidad afirmada sea calculada y corregir los tres usos que hoy fallan, y
**(3)** convertir en operativos los instrumentos de impacto que las reglas ya
presuponen (banco de fotos, inventario, mailing, one-pager de impacto).

---

## Adenda — Aplicación del plan (2026-08-26, v1.8.0)

Se implementó la deuda técnica del plan; quedan abiertas las decisiones
institucionales. Detalle completo en `CHANGELOG.md` (v1.8.0).

| # | Acción | Estado |
|---|--------|--------|
| 1 | DESIGN.md + skill v3.2 con reglas de julio (H1) | ✅ Aplicada — **falta re-subir el paquete a claude.ai** (`npm run package:skill`) |
| 2 | Contraste calculado en build + tablas regeneradas (H2) | ✅ Aplicada — [B2] verifica 25 pares en CI |
| 3 | Hover unificado (`accent.hover` → naranja oscuro) y tintes solo-fondo (H3, H5) | ✅ Aplicada — token nuevo + 4 temas + fichas |
| 4 | Slogan de banda arena a gris texto 10.3:1 (H4) | ✅ Aplicada — ficha + generador repo + espejo del skill; .docx de humo PASS |
| 5 | Plantillas Canva del carrusel | ⏳ Pendiente (requiere Canva; las reglas ya están en el skill) |
| 6 | Guía rápida + specimen desde tokens | ✅ Aplicada — `GUIA-RAPIDA.md` (verificada por build) + `npm run specimen` |
| 7 | Instrumentos de impacto (banco fotos, inventario, mailing) | ⏳ Decisión de dirección/comunicaciones |
| 8 | Verificación de temas y CSS en CI (H6, H7) | ✅ Aplicada — [B3] y [B4] en `build-skill.js` |
| 9 | One-pager de impacto + formato historia | ✅ Fichas creadas (Borrador); falta builder `impactOnePager()` |
| 10 | Léxico oficial · "familias acompañadas" · política IA retroactiva | ⏳ Decisión del Dueño de marca |
| 11 | Semántica de estado unificada (UI/mapas/dataviz) | ⏳ Decisión + tokenización futura |
| 12 | README actualizado + menores (H8, H10) | ✅ Aplicada |

Verificación final: `node scripts/build-skill.js` **PASS** (17 tablas [GEN] / 69
filas · 25 pares de contraste · 4 temas · 24 hex de CSS) y `--package` emite el
skill v3.2 con las actualizaciones. Versión del sistema: **1.8.0** (nuevo token
`accent.hover` = MINOR).
