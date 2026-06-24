# DESIGN.md — Sistema de Diseño FUCAI

> Fuente de verdad de identidad visual y voz para **Claude Design** (claude.ai/design)
> y cualquier agente que produzca piezas de la **Fundación Caminos de Identidad
> (FUCAI)** · NIT 800.173.574-1 · *Nuestro centro es la periferia*.
>
> Este archivo **deriva** de la fuente de verdad del repositorio
> (`03_tokens/tokens.json`, alineado al *Manual de Identidad Visual v1.1*) y del
> skill canónico `skill/fucai-branding/`. Si un valor cambia, mándalo desde los
> tokens y regenera (`scripts/build-skill.js`). Los datos marcados `[POR CONFIRMAR]`
> no existen aún en el repo: complétalos antes de usarlos.

---

## 1. Contexto y personalidad de marca

FUCAI acompaña a comunidades y pueblos —en especial indígenas— en sus procesos
propios de desarrollo sostenible, organizativo y cultural, desde la **periferia**
hacia el centro. Visualmente la marca es **minimalista, sofisticada y cálida**: un
lienzo blanco con mucho aire, un solo acento de color que carga significado, y la
calidez puesta en el tono tierra (arena) y en la fotografía de las comunidades, no
en saturar de color. La marca habla "junto al fuego", con las comunidades como
**protagonistas**, nunca como receptoras.

**Cinco principios de diseño** (el lente de toda decisión):

1. **Minimalista** — un elemento focal por pieza, mucho aire, nada decorativo
   porque sí. *Por qué:* el espacio en blanco es el default; lo que aparece debe
   ganarse su lugar.
2. **Refuerza el posicionamiento** — lo que aparece carga marca (un pilar por
   apertura, el verde solo para territorio, el slogan como firma). *Por qué:* cada
   elemento debe decir algo de FUCAI o sobra.
3. **Sofisticada** — contención: un solo acento, no muros de color. *Por qué:* la
   elegancia viene de la disciplina, no de la abundancia.
4. **Clara** — jerarquía fuerte, una idea por sección, lenguaje sencillo. *Por qué:*
   ante el conflicto entre estética y claridad, gana la claridad.
5. **Cálida / cercana** — calidez vía arena y fotografía humana, no vía más naranja.
   *Por qué:* la cercanía es de tono y textura, no de intensidad cromática.

**Regla que los reconcilia (úsala para desempatar):** *color, ornamento y texto son
escasos; todo lo que queda está cargado de significado de marca; el espacio en
blanco es el default y la marca es la señal.* Ante un caso no previsto: si dudas
"¿lo agrego?", no; si compite por atención, divídelo o quítalo; si pide "más calor",
añade arena o fotografía, nunca más naranja.

**Proporción de color 60-25-10-5:** 60 % blanco/arena · 25 % naranja · 10 % verde
(solo territorio) · 5 % negro/grises. Es lo que mantiene las piezas minimalistas y
sofisticadas a la vez.

**Pilares de marca** (en *cursiva*, uno por apertura, nunca en mayúsculas):
*Nuestro camino es la identidad* · *Nuestro centro es la periferia* (firma) ·
*Trabajo local, impacto global* · *Un discurso que se come, se bebe y se respira*.

---

## 2. Voz y tono

**Idioma por defecto: español.** Tono **sencillo, concreto, entusiasta, empoderador,
realista y cercano**. Voz activa con las comunidades como sujeto ("las comunidades
Wayúu fortalecieron…", no "se fortaleció a…"). Oraciones ≤ 25 palabras; una idea por
párrafo. Datos de impacto siempre en cifra.

**Filtro antes de publicar:** *¿esta frase reconoce la agencia y dignidad de las
comunidades? ¿Habla desde la fuerza o desde la carencia?* Si es desde la carencia,
se reescribe.

### Léxico obligatorio (usar)

- **acompañamiento / acompañar** — verificado en el skill (sustituye a "intervenir/ayudar").
- **comunidades protagonistas / comunidades participantes** — verificado en el skill.
- **familias acompañadas** — término solicitado por FUCAI; coherente con la voz.
  `[POR CONFIRMAR]`: no aparece **verbatim** en el skill ni en el repo (la fuente
  canónica usa "comunidades participantes/protagonistas"); confirmar si reemplaza o
  convive con esos términos.
- Vocabulario de marca: articular · potenciar · fortalecer · territorio · saberes ·
  ancestral · Buen Vivir · identidad · camino · periferia · autonomía · soberanía ·
  celebrar · sembrar · honrar · diálogo · raíces · abundancia.

### Léxico prohibido (no usar) — verificado en el skill

| ✕ Prohibido | ✓ En su lugar | Por qué |
|-------------|---------------|---------|
| **beneficiarios** | comunidades, participantes, aliados | No reciben pasivamente; son protagonistas. |
| **intervenir** | acompañar, articular, fortalecer | No "arreglamos"; caminamos junto a. |
| **ayudar** (paternalista) | potenciar, articular, caminar junto a | Desde la fuerza, no desde la lástima. |
| asistir · llegar (a la comunidad) | acompañar, ser convocados | Evita la jerarquía asistencialista. |
| víctimas | personas que enfrentan, comunidades resilientes | Reconoce agencia, no solo daño. |
| poblaciones vulnerables | nombra a las comunidades por su propio nombre | La precisión honra; la etiqueta borra. |
| tercer mundo · subdesarrollado · primitivo · atrasado · salvar · civilizar | reescribir; ancestral, con saberes propios | Marco colonial. Prohibido. |

**Nombres propios:** pueblos indígenas con mayúscula (Wayúu, Uitoto, Tikuna) y con la
grafía que cada comunidad usa; palabras en lengua propia en *cursiva* la primera vez.
"FUCAI" siempre en mayúsculas.

---

## 3. Color

Valores reales de `03_tokens/tokens.json`. El verde es **narrativo**: aparece
**solo** en contextos de territorio, naturaleza o medio ambiente; nunca como
sinónimo del naranja.

```css
:root {
  /* Marca */
  --color-primario:          #E94513; /* Naranja FUCAI (Pantone 1665 XGC) */
  --color-primario-oscuro:   #C13A10; /* hover / sombra / profundidad del naranja */
  --color-secundario:        #EDE8D3; /* Arena (Pantone 11-0105 TPG): calidez, bandas */
  --color-secundario-claro:  #F6F3E9; /* Arena claro: filas alternas, cajas, separadores */
  --color-acento:            #F4A28A; /* Durazno (naranja 50%): hover suave, llamadas */
  --color-territorio:        #2D6A4F; /* Verde Amazónico (Pantone 18-0135 TCX): SOLO territorio */
  --color-territorio-claro:  #74B597; /* Verde claro: badges/secciones ambientales */
  /* Neutros */
  --color-fondo:             #FFFFFF; /* Blanco: lienzo base, fondo principal */
  --color-texto:             #000000; /* Negro: cuerpo de texto sobre claro */
  --color-texto-sobre-color: #FFFFFF; /* Texto sobre fondos de marca (naranja/verde/negro) */
  /* Grises de soporte (no son color de marca) */
  --color-texto-secundario:  #333333; /* captions, footers, texto secundario */
  --color-borde:             #666666; /* bordes y separadores */
  --color-linea:             #CCCCCC; /* líneas sutiles, datos atenuados */
  --color-superficie-sutil:  #E8E8E8; /* rellenos muy suaves de tabla/celda */
  --color-eje:               #999999; /* etiquetas de eje en gráficas */
}
```

| Token semántico | Variable CSS | Hex | Cuándo y por qué |
|-----------------|--------------|-----|------------------|
| Primario | `--color-primario` | `#E94513` | Acento principal: encabezados, botones, barras, serie de datos. Es la marca; úsalo con mesura (≈25 %). |
| Primario oscuro | `--color-primario-oscuro` | `#C13A10` | Estados *hover*/activo y profundidad del naranja. |
| Secundario (arena) | `--color-secundario` | `#EDE8D3` | Aporta **calidez** en bandas/secciones, no en el fondo general. |
| Secundario claro | `--color-secundario-claro` | `#F6F3E9` | Filas alternas, cajas informativas, separadores suaves. |
| Acento (durazno) | `--color-acento` | `#F4A28A` | *Hover* web y llamadas suaves; acento de bajo peso. |
| Territorio (verde) | `--color-territorio` | `#2D6A4F` | **Solo** territorio/naturaleza/ambiente. Narra; no sustituye al naranja. |
| Territorio claro | `--color-territorio-claro` | `#74B597` | Badges y secciones ambientales sobre fondos cálidos. |
| Fondo | `--color-fondo` | `#FFFFFF` | Lienzo por defecto. El blanco es el 60 % que da aire y sofisticación. |
| Texto | `--color-texto` | `#000000` | Cuerpo sobre fondo claro (contraste 21:1). |
| Texto sobre color | `--color-texto-sobre-color` | `#FFFFFF` | Texto sobre naranja/verde/negro (solo títulos grandes sobre naranja). |
| Texto secundario | `--color-texto-secundario` | `#333333` | Captions, pies, notas. |
| Borde | `--color-borde` | `#666666` | Bordes y separadores funcionales. |
| Línea | `--color-linea` | `#CCCCCC` | Líneas muy sutiles; atenuar datos no destacados. |

**Reglas duras de superficie:** el **fondo siempre es blanco** (la calidez va en
banda arena, nunca en fondo naranja a sangre); el **naranja como fondo completo** se
reserva a portadas/secciones/cierres de presentación, no a documentos ni a fondos
generales de web.

**Estados semánticos (éxito/error/alerta):** `[POR CONFIRMAR]` — el sistema **no**
define colores de estado y la paleta excluye rojo/azul/morado/amarillo genéricos.
Propuesta a validar: alerta = `--color-primario`; confirmación con verde **solo** si
el contexto es territorial; estados neutros con grises. Acompañar siempre de
ícono/etiqueta, nunca solo color.

**Rampas de visualización de datos** (una serie → naranja; serie de territorio →
verde; ejes → neutral), de oscuro a claro:
`#C13A10 #E94513 #F06A3E #F4A28A #F8C4AE #F6F3E9 #FBF9F3` ·
`#1B4032 #2D6A4F #4E8A6F #74B597 #A0D0B8 #C8E4D5 #EDE8D3` ·
`#000000 #333333 #666666 #999999 #CCCCCC #E8E8E8 #FFFFFF`.

---

## 4. Tipografía

Dos familias, una identidad. **Máximo dos fuentes por pieza.**

```css
:root {
  --fuente-titulos: 'Space Grotesk', 'Arial Black', sans-serif; /* títulos/encabezados */
  --fuente-cuerpo:  'Calibri', 'Carlito', 'Arial', sans-serif;  /* cuerpo */
  /* Pesos disponibles de Space Grotesk en el repo: 400 / 500 / 700 */
  --peso-regular: 400;
  --peso-medium:  500;
  --peso-bold:    700;
  /* Escala (unidad fuente de verdad: pt — escala documento/PDF) */
  --tamano-portada: 28pt;
  --tamano-h1:      22pt;
  --tamano-h2:      16pt;
  --tamano-h3:      13pt;
  --tamano-cuerpo:  11pt;
  --tamano-caption:  9pt;
  --tamano-footer:   8pt;
  --interlineado-cuerpo: 1.3;  /* mínimo 1.15 */
  --tracking-titulos:  -0.02;  /* solo títulos > 40 pt */
}
```

- **Títulos: Space Grotesk Bold (700)** — solo títulos y encabezados; nunca cuerpo,
  tablas, captions ni footers. Archivos en el repo: `SpaceGrotesk-Regular.ttf` (400),
  `-Medium.ttf` (500), `-Bold.ttf` (700). Respaldo: Arial Black.
- **Cuerpo: Calibri** — respaldo métrico **Carlito** (donde no haya Calibri), luego
  Arial / sans del sistema.
- *Por qué dos familias:* el contraste geométrico de Space Grotesk en titulares
  frente a la neutralidad legible de Calibri crea jerarquía sin recurrir a más color.

| Rol | Variable | Tamaño | Fuente / peso | Uso |
|-----|----------|--------|---------------|-----|
| Título portada | `--tamano-portada` | 28 pt | Space Grotesk Bold, naranja sobre blanco | Portadas/héroes. |
| H1 | `--tamano-h1` | 22 pt | Space Grotesk Bold, naranja | Apertura de sección (+ un pilar en cursiva). |
| H2 | `--tamano-h2` | 16 pt | Space Grotesk Bold, naranja | Subtítulos. |
| H3 | `--tamano-h3` | 13 pt | Space Grotesk Bold, negro | Sub-subtítulos. |
| Cuerpo | `--tamano-cuerpo` | 11 pt | Calibri Regular, negro | Texto corrido. |
| Caption | `--tamano-caption` | 9 pt | Calibri Italic, gris texto | Pies de imagen, notas. |
| Footer | `--tamano-footer` | 8 pt | Calibri Italic, gris | Pies de página. |

**Jerarquía y reglas:** un solo H1 por vista; interlineado de cuerpo 1.15–1.3; sin
subrayado en cuerpo (reservado a enlaces); cursiva solo para citas, nombres
científicos, lenguas indígenas (1ª mención) y pilares/slogan; **nunca más de 4
palabras seguidas en mayúsculas**; tracking negativo leve solo en títulos grandes.

> `[POR CONFIRMAR]` La escala es en **pt** (contexto documento/PDF, que es la fuente
> de verdad). Para web, conviértela proporcionalmente a rem/px y define **H4–H6**
> (no existen aún como tokens).

---

## 5. Logo

Archivos en `02_identidad-visual/logo/`. El logo es una **unidad indivisible**; su
color es **solo naranja o blanco**, nunca otro.

| Variante | Archivo | Sobre qué fondo | Por qué |
|----------|---------|-----------------|---------|
| Naranja (primaria) | `logo_naranja.png` | Claro: blanco o arena | Máximo contraste y calidez sobre el lienzo por defecto. |
| Blanco (secundaria) | `logo_blanco.png` | Oscuro o de color: naranja, verde, negro, foto oscura | Garantiza legibilidad cuando el fondo es intenso. |
| Monocromática (negra) | `[POR CONFIRMAR]` | Una sola tinta (sellos/grabado) | No existe en el repo. |

- **Proporción fija 2:1**; se escala proporcionalmente, **nunca se deforma ni rota**.
- **Área de protección:** margen libre alrededor igual a la **altura de la "F"**;
  ningún texto, imagen o borde la invade.
- **Favicon / ícono de app:** la **"F"** en naranja sobre blanco (32×32 px).
- **Tamaño mínimo:** `[POR CONFIRMAR]` (recomendación a validar: ≥ ~25 mm impreso /
  ~96 px en pantalla).
- **Formato:** en el repo solo hay **PNG**; versión vectorial (SVG) `[POR CONFIRMAR]`.

**Usos incorrectos:** no deformar ni cambiar la proporción · no rotar · no recolorear
(solo naranja o blanco) · no añadir sombras, contornos ni efectos · no encerrar en
cajas que invadan el área de protección · no poner la versión naranja sobre fondos de
bajo contraste · no reconstruir el logotipo con otra fuente.

---

## 6. Espaciado y layout

Escala única base **8**, motor del minimalismo. Los números son la fuente de verdad
(definidos en pt para documento; en web se usan como px directamente).

```css
:root {
  --espacio-xs:  4px;  /* 4  */
  --espacio-sm:  8px;  /* 8  — unidad base */
  --espacio-md:  12px; /* 12 */
  --espacio-lg:  16px; /* 16 */
  --espacio-xl:  24px; /* 24 */
  --espacio-2xl: 32px; /* 32 */
  --espacio-3xl: 48px; /* 48 */
}
```

**Principios de composición:** un **elemento focal** por página/vista (si compite, se
divide); se agrupa con espacio en blanco, **no con cajas ni bordes**; aperturas
generosas (un H1 naranja + un pilar en cursiva + aire). Márgenes de documento
consistentes: 2.5 cm (A4) / 1 in (Carta).

> `[POR CONFIRMAR]` Grilla de columnas, anchos de contenedor y **breakpoints**
> responsive (móvil/tablet/escritorio): aún no tokenizados.

---

## 7. Componentes

Patrones para web/artefactos (FUCAI es, sobre todo, documentos; los componentes web
se mantienen ligeros).

```css
:root {
  --radio-none: 0px;
  --radio-sm:   4px;  /* radio de marca: botones y tarjetas */
  --radio-md:   8px;  /* contenedores grandes */
  --sombra-sm:  0px 1px 3px 0px #CCCCCC; /* única elevación sutil; default = sin sombra */
  --duracion-rapida: 150ms; /* hover, foco */
  --duracion-base:   250ms; /* contenido / cambio de estado */
  --easing-standard: cubic-bezier(0.2, 0, 0, 1);
  --easing-in:       cubic-bezier(0.4, 0, 1, 1);
  --easing-out:      cubic-bezier(0, 0, 0.2, 1);
}
```

- **Botón primario:** fondo `--color-primario`, texto `--color-texto-sobre-color`,
  radio `--radio-sm`. *Hover:* `--color-acento`. Texto con **verbo directo**
  ("Conoce nuestro trabajo", "Súmate"), nunca "Haz clic aquí". *Por qué:* una sola
  acción clara por botón refuerza claridad y voz.
- **Botón secundario:** borde naranja, fondo transparente, texto naranja.
- **Enlaces:** naranja, sin subrayado en estado normal, subrayado en *hover*.
- **Tarjeta (card):** fondo `--color-fondo`, redondeo `--radio-sm`/`--radio-md`,
  **un foco por tarjeta**, profundidad mínima (usar `--sombra-sm` solo si es
  imprescindible; el default es sin sombra). Agrupar con aire, no con bordes pesados.
- **Encabezados:** Space Grotesk Bold en naranja; un H1 por vista; un pilar en
  cursiva en las aperturas.
- **Tablas:** encabezado naranja con texto blanco, filas alternas en arena claro,
  **solo filetes horizontales** (sin grilla completa); números a la derecha.
- **Foco (teclado):** indicador visible con contraste ≥ 3:1.

**Movimiento:** discreto y con propósito; honra `prefers-reduced-motion`; una sola
transición por interacción; sin rebotes ni parpadeos.

---

## 8. Accesibilidad

Objetivo: **WCAG 2.2 nivel AA**. Contraste mínimo **4.5:1 en cuerpo**, **3:1 en
títulos grandes** y componentes/foco.

| Fondo | Texto | Contraste | Veredicto |
|-------|-------|-----------|-----------|
| Blanco | Negro | 21:1 | ✓ cuerpo |
| Arena `#EDE8D3` | Negro | 10.5:1 | ✓ cuerpo |
| Arena claro `#F6F3E9` | Gris texto `#333333` | 8.5:1 | ✓ cuerpo |
| Blanco | Verde `#2D6A4F` | 5.9:1 | ✓ cuerpo (territorio) |
| Verde | Blanco | 5.9:1 | ✓ cuerpo |
| Blanco | Naranja `#E94513` | 3.1:1 | ✕ cuerpo · ✓ solo título grande/negrita |
| Naranja | Blanco | 3.1:1 | ✕ cuerpo · ✓ solo título grande / portada |

**Reglas duras:** naranja↔blanco (3.1:1) **solo** en texto grande en negrita, nunca
en cuerpo; texto sobre foto requiere degradado oscuro hasta ≥ 4.5:1; **nunca**
transmitir estado o categoría **solo con color** (añade etiqueta, ícono o forma).
*Por qué:* la inclusión es eje ético de FUCAI, no un checklist: una pieza que no se
puede leer o usar, excluye.

---

### Procedencia y mantenimiento

Valores extraídos de `03_tokens/tokens.json` (fuente de verdad), el skill
`skill/fucai-branding/` y la capa `02_identidad-visual/`. Para mantener este archivo
en sincronía, edita los **tokens** y regenera con `node scripts/build-skill.js`
(verifica las tablas derivadas y emite el paquete en `dist/skill/`).
