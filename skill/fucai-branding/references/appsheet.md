# FUCAI — Aplicaciones AppSheet

Branding y estándar de construcción de las apps AppSheet de FUCAI. Para **sintaxis de expresiones y fórmulas** (app formulas, valores iniciales, columnas virtuales, restricciones, deep links, selectores), usa el skill `appsheet-fundacion-caminos-de-identidad`. El estándar completo —con los casos, las trampas técnicas y el backlog— está en `04_componentes/appsheet/estandar-de-app.md`, validado en FucaiCampo.

## Color
- **Primario de la app:** naranja `#E94513` (acciones primarias, encabezados, acentos, barra superior).
- **Superficies:** blanco y arena `#EDE8D3` / arena claro `#F6F3E9`. Fondo general claro, nunca naranja como fondo general.
- **Verde `#2D6A4F` solo** en módulos/vistas de territorio, naturaleza o medio ambiente (p. ej. monitoreo de chagras, seguimiento ambiental). No intercambiable con el naranja.
- Proporción 60-25-10-5: superficies claras dominan; naranja como acento; verde solo en lo territorial.

## Tipografía
- AppSheet **no** dispone de Space Grotesk. Usa **Roboto** como sustituto más cercano (geométrico, limpio, disponible en la plataforma) para títulos/encabezados. Cuerpo en la fuente del sistema de AppSheet.

## Diseño de vistas (minimalista)
- Un foco por vista; evita el color denso y los íconos saturados.
- Íconos en estilo outline, en naranja/negro; verde solo en lo ambiental.
- Encabezados de tabla/tarjeta en naranja con texto blanco; filas/tarjetas alternas en arena claro.
- Acciones primarias en naranja; secundarias con contorno naranja sobre fondo claro.
- Datos: una serie → naranja; serie territorial → verde; ejes/etiquetas en grises de soporte.

## Cómo se arma la app

- **El flujo manda.** Cada pantalla se lee en el orden en que ocurre el proceso. Si la persona tiene que buscar dónde está, el orden está mal.
- **Menos en la lista, todo en el detalle.** La tarjeta muestra **dos** datos: el que decide y el que ubica. El detalle muestra todo, por secciones en orden del flujo.
- **Un toque menos:** un solo nivel de agrupación. Nada de entrar a un grupo para entrar a otro.
- **Navegación:** barra inferior con 5–6 entradas de uso diario; paneles temáticos de tarjetas; tableros por rol en el menú; el resto se alcanza por referencia.
- **Inicio numerado** («0 · Cuadro de control», «1 · Mis pendientes», «2 · Registrar», «3 · Mi trabajo reciente»): da un mapa mental estable y se replica en todas las apps.
- **Paneles alimentados por una tabla de accesos** (`*_accesos` + slice `*_accesos_mios`) con título, ícono, orden, vista destino, visibilidad por alcance, contador de pendientes y subtítulo dinámico. Para retirar una tarjeta se **filtra el slice**, no se borra.
- **Diseñado para campo:** se diligencia en sitio, desde el celular. Textos cortos, pasos, pocos campos por pantalla.

## Estados

Color **+ ícono + texto**, idéntico en todas las vistas, con un Format Rule por estado (`FR_estado_<estado>`). El estado va en el encabezado del detalle. AppSheet ordena los grupos alfabéticamente, no por flujo: para agrupar en el orden del proceso hace falta una columna virtual de orden.

**Usa los tokens `state.*`** (`07_gobernanza/analisis-de-vacios.md` ya no lo lista como vacío):

| Token | Hex | Qué señala |
|---|---|---|
| `state.neutral` | `#666666` | Borrador, anulado |
| `state.warning` | `#E94513` | En trámite, en revisión |
| `state.info` | `#2A6F97` | En curso, desembolsado |
| `state.success` | `#0F7B4F` | Legalizado, aprobado, cerrado |
| `state.danger` | `#9B2226` | Devuelto, mora, alerta |

Son **funcionales, no de marca**: nunca en piezas públicas ni documentos, y nunca solo color. `state.success` no es el verde de territorio, que sigue siendo solo narrativo.

## Microcopy en la app

Campos que se diligencian, **en forma de pregunta** («¿Qué se va a comprar?»); campos de lectura, con sustantivo corto («Solicitante»). Mayúscula solo al inicio, sin dos puntos finales, lo opcional se dice. **Nada de lenguaje de propiedad:** «Proyectos coordinados», no «Mis proyectos». El Display Name de una columna es **de la tabla** y se propaga a todas las vistas: escríbelo para el contexto más general.

## Nombres

`vc_` columnas virtuales · `FR_` format rules · `*_propio` / `*_centro` / `*_institucional` slices por alcance · `<dominio>_accesos` paneles · `CP ·`, `RF ·`, `Contab ·` prefijo de vista según el tablero. Todo lo que ve la persona lleva **Display Name en español**.

## Checklist de vista nueva

- [ ] Display Name en español, sin lenguaje de propiedad.
- [ ] Su `Show_If` coincide con la audiencia del panel o tablero que la contiene — **cruza las dos audiencias antes de mover una vista a un tablero**.
- [ ] Lista: un nivel de agrupación, sin IDs visibles, orden por fecha descendente.
- [ ] Detalle: estado en el encabezado, secciones en orden del flujo, sin correos ni códigos internos.
- [ ] Formulario: pasos si supera ocho campos; opcionales marcados.
- [ ] Estados con Format Rule (color + ícono).
- [ ] Probada en móvil —y en escritorio si es de Contabilidad o Revisoría— y con «Preview app as» para un usuario de cada alcance.

## Logo y marca
- Logo de la app / ícono de inicio: usa la "F" naranja sobre blanco (coherente con el favicon web). En cabeceras sobre fondo naranja, usa `logo_blanco.png`; sobre fondo claro, `logo_naranja.png`.
- Mantén el slogan *Nuestro centro es la periferia* en la pantalla "Acerca de" / pie de la app.

## Accesibilidad
- Contraste mínimo 4.5:1 en texto de cuerpo; naranja↔blanco solo en títulos grandes.
- Nunca transmitir estado/categoría solo por color: acompaña con etiqueta o ícono.

## Voz
Etiquetas, mensajes y textos de la app siguen `references/voice-tone.md`: sencillo, cercano, comunidades como protagonistas; evita "beneficiarios", "intervenir", etc.
