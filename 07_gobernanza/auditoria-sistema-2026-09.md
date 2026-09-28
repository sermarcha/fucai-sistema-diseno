# Auditoría del sistema de diseño — septiembre 2026

**Alcance:** 93 archivos `.md`, 116 tokens, la maquinaria de verificación y los tres
destilados para agentes. **Método:** comprobación mecánica (enlaces, tokens sin
consumidor, hex contra paleta, cobertura `[GEN]`, cobertura del skill) más lectura
de los capítulos. **Versión de referencia:** 1.8.0 + lo no publicado.

---

## Veredicto

El núcleo está sano: hay una fuente de verdad real, una maquinaria que la verifica
y un registro de vacíos que resiste una comprobación. **Los problemas están en los
bordes** — destilados que crecieron más rápido que la verificación, y una paleta
cerrada que tres frentes empujan a la vez.

## 1. Lo que está sano

- **El eje tokens → verificación → emisión funciona.** Se probó a propósito
  introduciendo una deriva: el build falló señalando el token exacto.
- **El registro de vacíos no miente.** Afirma que las 21 rampas de dataviz se
  consumen pese a no aparecer citadas; se comprobó y es cierto —llegan a
  `tokens.css` (21 variables) y a `brand-constants.json`—.
- **La gobernanza tiene dientes:** mapa de fuente de verdad, versionado semántico,
  convención de commits y PR obligatorio.

## 2. Coherencia

### A. Tres destilados y solo uno verificado — *el hallazgo grave* · **resuelto**

| Destilado | Líneas | Hex | ¿Verificado? (antes → ahora) |
|---|---|---|---|
| `skill/fucai-branding/` | 1.336 | 106 | Parcial → parcial |
| **`DESIGN.md`** | 625 | 69 | **No → sí** |
| `GUIA-RAPIDA.md` | 77 | 10 | Sí |

`DESIGN.md` se autodenomina fuente de verdad, **se copia al paquete que se
distribuye** (`build-skill.js`) y se anuncia como «guía de diseño completa», pero no
estaba en `GEN_TARGETS`, no aparecía en el mapa de fuente de verdad ni en el README.
La mayor superficie de deriva estaba en el archivo que más se distribuye.

**Corregido en esta auditoría:** su tabla de color y sus **dos** tablas de contraste
quedan enlazadas a tokens y bajo verificación. Las cuentas suben de 20 a 21 tablas,
de 97 a 111 celdas y de 25 a 46 pares de contraste. Los 10 valores de contraste que
declaraba eran correctos; solo estaban sin vigilar.

### B. La paleta cerrada está bajo presión desde tres frentes · **resuelto**

- **Apps AppSheet:** azul y rojo **en producción** en los Format Rules.
- **Cartografía:** `#A9C9D6` / `#5B8AA6` (agua), `#E9C46A` (chagra), `#B08968`
  (curvas), marcados como «valor propuesto».
- **Web:** `#161310` es el color «Oscuro» del sitio —bandas de cierre, equipo,
  footer— y **no existe como token** ni está en el CSS que sí se verifica.

Y hay una contradicción de fondo: `DESIGN.md` § Estados semánticos marca el asunto
`[POR CONFIRMAR]` y **propone resolverlo dentro de la paleta** (alerta = naranja,
confirmación = verde solo territorial, neutros = grises). Producción ya salió de
ella. **El sistema propone una cosa y las apps hacen otra.**

No eran tres parches: era **una sola decisión de paleta**, y se tomó el 28 de
septiembre de 2026:

1. **Capa funcional `state.*`**, fuera de `color.*`, para que la paleta de marca siga
   cerrada. Solo dentro de interfaces, nunca solo color.
2. **El verde sigue siendo solo territorio.** El «cerrado OK» usa un verde funcional
   distinto (`#0F7B4F`), no `brand.territory`.
3. **Extensión `carto.*`** válida únicamente dentro de un mapa, porque la cartografía
   tiene convenciones de lectura propias.
4. **`#161310` pasa a ser `color.negro-calido`** y el tema oscuro lo adopta.

### C. Citación ambigua de las referencias del skill · **abierto**

14 documentos fuera del skill citan `references/X.md` —ruta relativa al paquete—,
que no resuelve desde la raíz. Conviven dos convenciones.

### D. Un enlace roto · **corregido**

`CHANGELOG.md` citaba `skill/references/color-system.md`, sin el segmento
`fucai-branding/`.

### E. Una regla general en un lugar particular · **abierto**

«Lenguaje de servicio, no de propiedad» entró al skill solo dentro de
`references/appsheet.md`, siendo una regla de léxico que aplica a informes y
tableros.

## 3. Completitud

**Madurez:** 7 componentes estables, 21 en borrador, 1 plantilla — **el 72 % en
borrador**.

| Medio | Estado | Falta |
|---|---|---|
| Documento `.docx` | Maduro | — (builder + QA) |
| Presentación `.pptx` | Builder sí | **Sin QA** |
| Hoja `.xlsx` | Builder sí | **Sin QA** |
| Correo | Borrador | Plantilla HTML probada en cliente |
| Web | Borrador | `#161310` sin token; enlaces fuera de `.sqs-block-content` |
| AppSheet | Borrador | Paleta de estados |
| Libro y cartilla | Borrador nuevo | Uso real que lo valide |
| Social | Borrador | Inventario de canales por llenar |

**Deuda declarada:** 41 `[Pendiente]`, 18 `[POR CONFIRMAR]`, 2 `[●]`. Concentrada en
gobernanza (12), identidad visual (10) y componentes (10).

**160 líneas de CHANGELOG sin publicar** desde 1.8.0 (26 de agosto).

## 4. Oportunidades, por retorno

| # | Oportunidad | Estado |
|---|---|---|
| 1 | Meter `DESIGN.md` bajo `[GEN]` | **Hecho** en esta auditoría |
| 2 | **Resolver la paleta de estados de una vez** — destraba apps, cartografía y el oscuro de la web | **Hecho** (2026-09-28) |
| 3 | Publicar 1.9.0: el trabajo de un mes está sin etiquetar | Abierto |
| 4 | Extender la verificación de «hex ∈ paleta» del CSS de Squarespace a todos los `.md` | Abierto |
| 5 | QA para `pptx` y `xlsx`, como el que ya tiene `docx` | Abierto |
| 6 | Unificar la convención de citas a rutas desde la raíz | Abierto |
| 7 | Subir a estable los componentes con builder y uso real | Abierto |

## 5. Mejora de la maquinaria hecha aquí

El marcador `[GEN]` **no cerraba**: se extendía hasta el final del archivo, de modo
que cualquier tabla posterior entraba en la verificación sin quererlo. Era una
fragilidad latente que impedía usarlo con confianza en documentos largos. Ahora el
marcador **no cruza titulares**. Se comprobó que ninguna tabla existente dependía de
esa fuga: las cuentas se mantuvieron intactas antes de ampliar la cobertura.

---

*Fundación Caminos de Identidad — FUCAI · Nuestro centro es la periferia*
