# FUCAI — Libros y cartillas

Publicación larga: libro conmemorativo, cartilla pedagógica, memoria de proyecto, sistematización. FUCAI lleva más de 170 títulos publicados. Capítulos completos en el sistema de diseño: `04_componentes/documento/libro-y-cartilla.md` (cómo se arma) y `02_identidad-visual/ilustracion-editorial.md` (cómo se ilustra).

**Esto no es un `.docx`.** Un libro se diagrama en InDesign o Canva; el `.md` es la fuente del texto, no la maqueta. Para informes y actas en Word, usa `references/docx.md`.

## Lo fijo y lo libre

Lo que hace reconocible un libro de FUCAI no es que se parezca a los anteriores, sino que resuelve igual las mismas cuatro cosas: el blanco manda, el naranja es señal, la voz es de quien cuenta, y el libro se hace cargo de las comunidades que pusieron su palabra.

| Fijo | Libre |
|---|---|
| Fondo blanco, sin sangrados ni tapas naranja · paleta y 60-25-10-5 · Space Grotesk en titulares y Calibri en cuerpo · voz y léxico ético · el aparato mínimo · las reglas éticas de imagen | La metáfora que estructura · el número y nombre de las partes · formato y retícula · escala tipográfica · las familias de ilustración · el ritmo y los recursos de navegación |

No pidas permiso para innovar en la columna derecha; no negocies la izquierda.

## El aparato mínimo

Cumple tres funciones — **situar** a quien no conoce FUCAI, **acreditar** ante aliados, **cuidar** a las comunidades:

Cubierta y contracubierta · página legal (NIT, ISBN, licencia, equipo) · presentación institucional con las cifras en cifra · **nota editorial «cómo se hizo»** · cuerpo · glosario si hay palabras en lengua propia · índice de voces · índice de ilustraciones con declaración de IA · agradecimientos (comunidades, aliados, equipo) · colofón · **anexo reservado no publicable**.

Las dos en negrita se olvidan siempre y son las que convierten la publicación en documento ético:

- **Nota editorial.** Dice que las voces hablan en primera persona, que se editó respetando el modo de decir de cada quien, qué nombres se cambiaron para proteger a alguien y **qué saberes pidieron las comunidades que no se publicaran**.
- **Anexo reservado.** Fuera del archivo de imprenta y del CMS: consentimientos de imagen y voz, restricciones culturales y transcripciones literales. Es la razón por la que el libro circula tranquilo.

## La metáfora estructurante

Una publicación larga necesita un hilo que haga que textos de autores distintos se lean como un solo libro. Que nazca del material o de la historia de la casa, que aguante todo el recorrido, que tenga apertura y cierre que rimen, y que se pueda ilustrar. Declara por parte el **pilar de marca** y la **emoción dominante** antes de diseñar: evita que el libro suene igual de principio a fin.

## Retícula de partida

Página 170 × 240 mm · sangrado 3 mm · caja de texto 130 mm · margen exterior reservado como franja de 34 × 230 mm para viñetas y retrato · encabezado de capítulo uniforme (territorio · línea · voz) · aperturas de parte en página impar · guardas en arena `#EDE8D3` liso. Otro formato es legítimo si se mantienen el blanco, la proporción de color y la franja.

## El método: se genera, no se maqueta a mano

El `.md` es la fuente y la maqueta un derivado. Las instrucciones de diagramación viajan **dentro del texto, entre corchetes, y no se imprimen**; cada marcador trae serie, proporción, medida y archivo a producir:

```
> [APERTURA I · serie de la olla · 4:3 · 130 × 98 mm, mitad inferior · archivo FUCAI_Apertura-1]
> [DATO HÉROE · página propia · cifra grande en naranja #E94513, Space Grotesk · una línea de contexto]
> [GUARDAS · arena #EDE8D3 liso, sin ilustración]
```

Cierra con un índice que los liste todos: es la orden de producción para quien ilustra.

**Si el libro se corrige a mano sobre la maqueta, traslada enseguida los cambios a la fuente o declara obsoleto el generador.** No lo dejes a medias: es el error que más caro sale.

## Ilustración: acuarela cálida

El estilo editorial de la casa. **No es el mismo que «Cristal FUCAI»** (ese es para íconos de aplicación y redes) y no se mezclan en una pieza.

Acuarela sobre papel de algodón: pinceladas húmedas, bordes que se difuminan, grano visible, **sin contornos negros ni líneas de tinta**. Paleta cerrada; **prohibido el azul incluso en el cielo y en el agua** — el cielo se resuelve con aguadas de arena y naranja diluido, el agua con verde diluido y blanco del papel. Un solo foco y mucho blanco.

**Una serie, no encargos sueltos:** el bloque de estilo se escribe una vez y se pega **idéntico** al final de cada prompt. Si se afina, se reemplaza en todos.

**El aprendizaje que más tiempo ahorra — la fuerza se invierte:**

| | Retrato de una persona | Escena con personas |
|---|---|---|
| Existe para | **Conservar** a la persona | **Disolverla** |
| Fuerza de transformación | Media, **0,50–0,65** | Alta, **0,70–0,85** |
| Si te pasas | Inventa rasgos | — |
| Si te quedas corto | Parece foto con filtro | Parece foto con filtro |

Produce cuatro variantes con la misma semilla y elige **la más fiel, no la más bonita**. Archiva prompt, semilla y —si vino de foto— el archivo de origen: sin eso no hay variantes coherentes después. Las piezas que riman (apertura y cierre) se producen con la misma semilla y encuadre, en el mismo lote.

Tamaños de producción y parámetros por herramienta: `02_identidad-visual/ilustracion-editorial.md`.

## Ética de la imagen

- **Niñez:** jamás rostros de niñas y niños ni cuerpos desnutridos. Espaldas, manos, siluetas.
- **Retratos:** la persona **aprueba** el suyo antes de publicarse — se le muestra y se le pregunta, no se le informa. Si no lo quiere, su ficha va solo en texto.
- **No se altera a la persona** (rasgos, edad, peinado, tono de piel, ropa) ni **se añade nada «étnico»** que no esté en la foto.
- **Rigor cultural:** el equipo territorial revisa cada boceto.
- **Declara la IA** en el índice de ilustraciones cuando se haya usado.

## Antes de mandar a imprenta

- [ ] Fondo blanco en las dos tapas; nada a sangre donde no toca.
- [ ] 60-25-10-5 revisado sobre el pliego, no pieza por pieza.
- [ ] Encabezado de capítulo uniforme en todos.
- [ ] Nota editorial escrita y revisada por quien coordinó el campo.
- [ ] Anexo reservado completo y **fuera** del archivo de imprenta.
- [ ] Consentimientos de toda persona retratada o citada.
- [ ] Índice de ilustraciones con créditos y declaración de IA.
- [ ] Página legal y colofón completos.
- [ ] **Cifras contrastadas entre sí:** es el error más frecuente cuando un dato aparece en varias páginas.
- [ ] Correcciones a mano trasladadas a la fuente.
