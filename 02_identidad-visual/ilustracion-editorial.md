# Ilustración editorial — acuarela cálida FUCAI

> Estilo, producción e inclusión de las ilustraciones de **libros y cartillas**.
> Es uno de los dos estilos generativos de la casa: el otro es `prompts-cristal.md`
> (cristal mate, para íconos de aplicación, redes y web). No se mezclan en una
> misma pieza. Colores: autoridad de `03_tokens/tokens.json`.
>
> Aprendizajes destilados de la producción de *35 Voces, 35 Caminos de Identidad*
> (2026), en `fucai-knowledge`: plan editorial v6, `5-ilustraciones/` y sus tres
> documentos de prompt.

## 1. La idea que sostiene todo: una serie, no encargos sueltos

Un libro ilustrado no se rompe porque una imagen salga mal; se rompe porque las
imágenes **no se parecen entre sí**. Lo que mantiene la unidad no es el talento de
cada pieza: es que el **bloque de estilo sea idéntico palabra por palabra** en
todos los prompts.

De ahí las tres reglas de método:

1. El bloque de estilo se escribe **una vez** y se pega completo al final de cada
   prompt. Esa copia es la fuente de verdad.
2. Si se afina el estilo, se reemplaza **en todos los prompts**, nunca en uno.
3. Toda pieza nueva que aparezca después —una apertura, una tapa, una cartilla
   derivada— parte de ese mismo bloque.

## 2. El estilo base

**Técnica.** Acuarela cálida sobre papel de algodón texturizado: pinceladas
húmedas y transparentes, bordes que se difuminan, manchas de aguada y velados
visibles, grano del papel presente. **Sin contornos negros duros y sin líneas de
tinta.**

**Paleta cerrada**, sin ningún color fuera de esta lista:

| Color | Hex | Dónde |
|---|---|---|
| Naranja terracota | `#E94513` (+ `#C13A10`, `#F06A3E`, `#F4A28A`) | Único acento cálido dominante: tierra, fuego, ropa, techos de barro, luz del atardecer |
| Arena / arena claro | `#EDE8D3` · `#F6F3E9` | Base cálida de fondos, suelos áridos, papel tonal |
| Verde amazónico | `#2D6A4F` (+ `#4E8A6F`, `#74B597`) | **Solo** selva, chagra, agua y territorio vivo |
| Blanco del papel | `#FFFFFF` | Aire y respiración de la composición |
| Grises | `#333333` · `#666666` | Solo sombras finas y detalles pequeños |

**Proporción 60-25-10-5:** 60 % blanco y arena · 25 % naranja terracota · 10 %
verde · 5 % grises.

**Prohibidos** el azul, el rojo puro, el morado, el amarillo, el rosa y cualquier
neón — **incluso en el cielo y en el agua**. El cielo se resuelve con aguadas de
arena y naranja muy diluido; el agua, con verde diluido y blanco del papel. Esta
es la regla que más se rompe sola, porque el generador tiende al cielo azul.

**Luz** natural y dorada, de amanecer o final de tarde. **Composición**
minimalista: un solo elemento focal y mucho blanco alrededor. Sin texto, letras,
números ni logos dentro de la imagen. Sin fotorrealismo ni render 3D.

## 3. Las familias de pieza

Cada familia tiene proporción y tamaño de producción propios. La medida sale de la
maqueta, no al revés:

| Familia | Proporción | Tamaño en página | Archivo a producir |
|---|---|---|---|
| Escena (cabecera de capítulo) | 3:2 horizontal | 130 × 87 mm | 3072 × 2048 px |
| Escena que además va en cubierta | 3:2 horizontal | 140 × 93 mm | 4096 × 2731 px |
| Apertura de parte | 4:3 horizontal | 130 × 98 mm | 3072 × 2304 px |
| Retrato de una voz | 3:4 vertical | 25 × 33 mm (12 mm en índice) | 1536 × 2048 px |
| Viñeta de margen | 1:3 vertical | 24 × 72 mm | 1024 × 3072 px, **fondo blanco puro** |
| Mapa a doble página | doble página a sangre | 346 × 246 mm con sangrado | 4087 × 2906 px |

**El mapa no se genera.** Exige precisión geográfica que los generadores no
garantizan: se encarga como pieza propia, ilustrada a mano o vectorial, sobre la
misma paleta.

**Las viñetas de margen no se piden de a una.** Son una familia numerosa y lo que
las sostiene es el parecido entre ellas: se encargan **en lotes y con la misma
semilla**.

## 4. Dos vías de producción, no dos estilos

Una ilustración de escena se puede producir **describiéndola** con palabras o
**partiendo de una fotografía del archivo**. Mismo bloque de estilo, misma paleta,
mismos tamaños. Lo único que cambia es de dónde sale la imagen.

La vía de la fotografía existe por una razón concreta: **cuando solo se describe,
el generador inventa el territorio** —pone una maloca donde no la hay, una montaña
de más, un material que no es de ese pueblo—. La foto lo sujeta. Marca el archivo
aprobado con el sufijo `-F` para saber de un vistazo cuáles se hicieron así.

## 5. El aprendizaje más útil: la fuerza se invierte

Es el punto que más tiempo ahorra, y el más fácil de equivocar.

| | Retrato de una persona | Escena con personas |
|---|---|---|
| **Qué se conserva** | La identidad: la familia debe reconocerla | La estructura: composición, arquitectura, gesto, luz |
| **Qué se pierde** | Solo la técnica fotográfica | La piel fotográfica, el color real y **las caras** |
| **Fuerza de transformación** | **Media, 0,50–0,65** | **Alta, 0,70–0,85** |
| **Si te pasas** | Inventa rasgos: deja de ser la persona | — |
| **Si te quedas corto** | Parece foto con filtro | Parece foto con filtro |

Dicho corto: **el retrato existe para conservar a la persona; la escena, para
disolverla.** Quien está de frente en la foto pasa a estar de espaldas; las caras
se resuelven en aguada. Son documentos con reglas opuestas y **no se mezclan**.

## 6. Parámetros por herramienta

Producir siempre **cuatro variantes** con la misma semilla y elegir **la más fiel,
no la más bonita**: la más fiel a la persona en el retrato, al territorio en la
escena.

| Herramienta | Retrato | Escena |
|---|---|---|
| Midjourney | `--cref` + `--cw 100` (referencia de personaje) · `--stylize 50 --sw 200` | **No usar `--cref`**, trabaja en contra · `--iw 1 --stylize 100 --sw 250` |
| Stable Diffusion / Flux | denoising 0,50–0,62 · ControlNet *canny* o *lineart* suave | denoising 0,70–0,85 · ControlNet **depth** o canny suave, peso 0,4–0,6 |
| Adobe Firefly | estructura 80–100 · estilo 60–80 | estructura **40–60** (alta devuelve el filtro) · estilo 80–100 |
| DALL·E, Gemini, Ideogram | Subir foto + prompt en español, «Convierte esta fotografía…» | Igual; si sale demasiado parecida, añadir «reinterprétala por completo como acuarela pintada, no como foto filtrada» |
| Ilustrador o ilustradora | El documento es el brief | Vía preferible para cubiertas y escenas con personas en primer plano |

En todos los casos conviene dar **una ilustración ya aprobada de la serie como
referencia de estilo**: es más eficaz que describir el estilo otra vez.

## 7. Trazabilidad: sin esto no hay serie

Junto a cada imagen aprobada se archiva **el prompt exacto, la semilla y —si vino
de una foto— el nombre del archivo de origen**. No es burocracia: es lo único que
permite rehacer una variante coherente cuando alguien pida un cambio seis meses
después, y responder de dónde salió cada imagen.

Las **rimas** dependen de esto. Cuando dos piezas tienen que ser la misma imagen en
dos momentos —la que abre y la que cierra el libro, la primera y la última
apertura— se producen con **la misma semilla y el mismo encuadre**, en el mismo
lote. Las tapas se producen en el lote de las aperturas por la misma razón.

## 8. Reglas éticas (no se negocian)

1. **Niñez:** jamás rostros de niñas y niños, ni cuerpos desnutridos. Espaldas,
   manos, siluetas.
2. **Retratos:** la persona **aprueba** su retrato antes de publicarse —se le
   muestra y se le pregunta, no se le informa—. Si no lo quiere, su ficha va solo
   en texto.
3. **No se altera a la persona:** rasgos, edad, expresión, peinado, lentes, tono de
   piel y ropa se conservan. Nada de embellecer, rejuvenecer ni aclarar la piel.
4. **Nada «étnico» añadido:** ni collares, ni pinturas faciales, ni plumas, ni
   malocas de fondo que no estén en la foto. La identidad la pone la persona con lo
   que eligió llevar ese día; el generador cambia la técnica, no el contenido.
5. **Rigor cultural:** cada pueblo tiene su materialidad. El equipo territorial
   revisa cada boceto.
6. **Transparencia:** si una imagen se produjo con apoyo de inteligencia
   artificial, **se declara** en el índice de ilustraciones. Es una exigencia que
   va a envejecer bien.

Esto es coherente con la regla dura de marca: la IA **no representa personas ni
comunidades** en fotografía; el retrato ilustrado es admisible precisamente porque
parte de una foto real, con consentimiento, y no inventa a nadie.

## 9. Cómo entran en el documento

- **Fondo blanco y mancha contenida.** Sin ilustración a sangre en tapas, sin
  fondos naranja. La regla de marca pesa más aquí que en ninguna otra pieza.
- **La ilustración no se pega: se marca.** En el `.md` fuente va un marcador entre
  corchetes con serie, proporción, medida en el libro y archivo a producir — ver
  `04_componentes/documento/libro-y-cartilla.md`. El marcador no se imprime.
- **Las viñetas de margen** van en la franja del margen exterior, alineadas al
  encabezado corriente, una especie distinta por página y sin repetirse.
- **El retrato** va en la primera página del capítulo, margen exterior, a la altura
  del encabezado, con el nombre en un pie de 7 pt.
- **Entrega:** PNG sin compresión a 300 dpi para imprenta.
- **Índice de ilustraciones** al final: número, título de la escena, capítulo,
  crédito de quien la produjo y declaración de IA cuando aplique.

## 10. Control de calidad — los ocho «no» que descartan una variante

1. Se ve como **foto con filtro** y no como acuarela pintada → subir la fuerza.
2. Hay una **cara reconocible**, unos ojos dibujados o cualquier cara de niña o
   niño → descartar sin más.
3. Hay **azul, morado, amarillo o rosa**, aunque venga de la foto y aunque quede
   bonito → descartar.
4. **Apareció algo que no estaba** —una maloca, un tocado, una montaña— o cambió un
   material del territorio → descartar y avisar al equipo territorial: ese prompt
   está inventando.
5. La escena quedó **abigarrada**: más de un foco, sin blanco de papel, el fondo
   entero pintado → la marca pide aire.
6. **Contornos negros gruesos**, aspecto de cómic o de render → descartar.
7. La imagen **llega al borde** o el fondo quedó naranja pleno → descartar.
8. Aparecieron **letras, marcas, logos o la firma del generador** → descartar.

---

*Fundación Caminos de Identidad — FUCAI · Nuestro centro es la periferia*
