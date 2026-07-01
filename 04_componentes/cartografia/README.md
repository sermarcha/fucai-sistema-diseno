# Componente · Cartografía (mapas)

**Estado:** Borrador · **Ámbito:** transversal (QGIS · Google Earth Engine · Google Earth Pro)

Cómo se aplica la marca FUCAI a los **mapas**. Este componente fija las reglas de marca
para la cartografía y **delega la implementación** (estilos QGIS, rampas, plantillas de
impresión, KML) al repositorio geoespacial.

> **Fuente de verdad de la implementación:** repo **`fucai-geo`** →
> `qgis/sistema-diseno-mapas.md`. Aquí vive la *regla de marca*; allá, el *cómo*.

---

## Reglas de marca para mapas

Heredan del sistema (no se redefinen aquí):

- **Color semántico:** `color.verde` (`#2D6A4F`) **solo** para territorio / naturaleza /
  vegetación; `color.naranja` (`#E94513`) para intervención humana, dato y **alerta**;
  `color.arena` (`#EDE8D3`) fondo/calidez; grises de soporte para base y referencia.
- **Rampas de datos:** `dataviz.ramp.verde` (territorio), `dataviz.ramp.naranja` (dato/
  intervención), `dataviz.ramp.neutral` (ejes/grid). Cambio = divergente naranja↔verde.
- **Tipografía:** títulos en `font.family.heading` (Space Grotesk); rótulos y leyenda en
  `font.family.body` (Calibri/Carlito), con respaldo Arial en sistemas sin la fuente.
- **Accesibilidad:** contraste ≥ 4.5:1 en leyenda/rótulos; nunca información solo por
  color (etiqueta + patrón); rampas seguras para daltonismo.
- **Logo y composición:** según `02_identidad-visual/logo/`; márgenes con `space.*`.

## Extensiones cartográficas (candidatas a token)

La cartografía necesita valores que la marca aún no define. Viven en `fucai-geo` y son
**candidatos a promoverse** a `03_tokens/tokens.json` (vía PR, revisión del Dueño de marca):

| Extensión | Uso | Valor propuesto |
| --- | --- | --- |
| `carto.agua` / `carto.agua-linea` | Cuerpos de agua y ríos | `#A9C9D6` / `#5B8AA6` |
| `carto.chagra` | Chagra / cultivo (coberturas) | `#E9C46A` |
| `carto.curva-nivel` | Curvas de nivel (andino) | `#B08968` |
| Paletas por ecosistema | Mapa base por región | ver `fucai-geo` |

## Cuándo usar / cuándo no

- **Usar** para cualquier mapa institucional (informes, presentaciones a comunidades,
  monitoreo satelital).
- **No** definir aquí estilos técnicos ni HEX de implementación: eso vive en `fucai-geo`.

## Pendiente

- [ ] Validar paletas por ecosistema en terreno (especialmente Cauca).
- [ ] Decidir promoción de las extensiones `carto.*` a tokens de marca.
- [ ] Registrar este componente en `07_gobernanza/mapa-fuente-de-verdad.md` si se aprueba.

---

*Fundación Caminos de Identidad — FUCAI · La implementación cartográfica vive en `fucai-geo`.*
