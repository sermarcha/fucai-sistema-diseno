# Principios de diseño — FUCAI

> Los **cinco atributos obligatorios** de FUCAI, convertidos en principios
> accionables. Toda decisión de diseño pasa por este lente. Los valores
> concretos (HEX, tamaños, escala de espaciado, proporción 60-25-10-5) son
> autoridad de `03_tokens/tokens.json`; aquí va el criterio, no los números.

## Regla que reconcilia los cinco

> **Color, ornamento y texto son escasos — y todo lo que queda está cargado de
> significado de marca. El espacio en blanco es el default; la marca es la señal.**

Cuando dos principios compiten, esta frase manda: ante la duda, quita antes que
agregar; deja respirar; conserva solo lo que carga marca.

---

## 1. Minimalista

**Definición.** Un elemento focal por página o diapositiva; mucho aire; nada
decorativo porque sí.

**Ejemplo.** Una apertura de sección: un H1, un pilar en cursiva y espacio en
blanco. Nada más. (Escala de espaciado: tokens `space.*` en `tokens.json`.)

**Cómo desempata.** Si una pieza tiene dos focos que compiten, **divídela** en
dos. Si un elemento no aporta significado, se elimina. El minimalismo gana
cuando la duda es "¿lo agrego?": no.

## 2. Que refuerza el posicionamiento

**Definición.** Lo que aparece carga marca: verde solo para territorio, un pilar
en cada apertura, el slogan como firma discreta, comunidades como protagonistas.

**Ejemplo.** En una página de impacto ambiental, el acento es verde (`brand.territory`
en `tokens.json`); en una de gobernanza, es naranja. El color narra, no decora.

**Cómo desempata.** Decide **qué contenido se queda**: si un elemento no refuerza
identidad, periferia, trabajo local/global o el "discurso que se come", sobra.
El verde nunca se usa como sinónimo del naranja.

## 3. Sofisticada

**Definición.** Espacio en blanco disciplinado más un solo acento, no muros de
color. Elegancia por contención.

**Ejemplo.** Una portada con banda arena y un único bloque naranja, no un fondo
saturado. (Proporción 60-25-10-5; ver `tokens.json`.)

**Cómo desempata.** Si la pieza se siente "ruidosa", reduce acentos a uno.
La sofisticación gana sobre el impulso de "llenar" el lienzo.

## 4. Clara

**Definición.** Lienzo blanco, jerarquía fuerte, una idea por sección, lenguaje
sencillo.

**Ejemplo.** Un informe con jerarquía tipográfica nítida (títulos Space Grotesk,
cuerpo Calibri; familias en `tokens.json`) y un dato héroe por sección.

**Cómo desempata.** Si claridad y estética chocan, **gana la claridad**: legible
antes que bonito. La jerarquía y el contraste (ver `06_accesibilidad/`) no se
sacrifican por decoración.

## 5. Cálida / cercana

**Definición.** Calidez vía arena y fotografía —no vía más naranja— y voz "junto
al fuego".

**Ejemplo.** Una banda arena (`surface.warmth.docx`) y una foto real de la
comunidad como protagonista dan calidez; subir el naranja, no.

**Cómo desempata.** Si la pieza pide "más calor", se añade **arena o fotografía
humana**, nunca más saturación de naranja. La cercanía es de tono y textura, no
de intensidad cromática.

---

## Procedimiento de arbitraje (cuando varios compiten)

1. **¿Carga marca?** Si un elemento no refuerza el posicionamiento, se elimina
   (principios 1 y 2).
2. **¿Se entiende?** La claridad nunca se sacrifica por estética (principio 4).
3. **¿Respira?** Si compite por atención, se divide o se quita (principios 1 y 3).
4. **¿Da calidez correctamente?** El calor entra por arena y fotografía, no por
   más naranja (principio 5).

Regla de cierre: en empate, **menos y con más significado** gana siempre.
