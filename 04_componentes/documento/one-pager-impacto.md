# Componente — One-pager de impacto (financiadores)

> Pieza de **una página** que resume el impacto de un proyecto para el Grupo 2 de
> audiencias (cooperación, sector público, empresa): el público que financia y que
> hasta ahora no tenía pieza propia. Registro *concreto + realista*: impacto
> siempre en cifra, sin promesas infladas. Estado: **borrador** (sin builder).

## Anatomía (de arriba abajo, todo en una página)

1. **Header de solo texto** + filete naranja (`textHeader()`); nombre del proyecto
   y centro de costo en texto abierto (CC216, CC217…).
2. **Título** — Space Grotesk, `text.heading`: el proyecto en ≤ 8 palabras.
3. **Dato héroe** (`heroNumber()`): LA cifra del período, grande y en naranja.
   Una sola; las demás van en la tabla.
4. **Historia breve VJACel** (3–5 líneas, ver
   `05_contenido-lenguaje/historia-de-impacto.md`): territorio y comunidad
   concretos, comunidades como sujeto, cierre en logro.
5. **Tabla de resultados** (`dataTable()`): 3–5 indicadores en cifra, solo filetes
   horizontales, números a la derecha.
6. **Mapa opcional** del territorio según `04_componentes/cartografia/` (verde solo
   vegetación/territorio; rampa naranja para el dato).
7. **Uso de recursos** — 1 gráfico de una serie (rampa naranja) o mini-tabla;
   transparencia como valor, no como anexo.
8. **Aliados con nombre** (financiador, organizaciones indígenas, consorcio) y
   **contacto** + slogan en el pie estándar.

## Variantes

- Por proyecto (trimestral/anual) · por territorio · consolidado institucional.
- Co-branding Naane/CC217: membrete y logos según `naane-branding`.

## Reglas críticas

- **Una página real**: si no cabe, se recorta contenido, no el aire.
- Datos de impacto **siempre en cifra** y comparables (misma métrica entre
  períodos); nunca prometer lo no medible.
- Foto solo del banco autorizado con consentimiento; **nunca IA para personas**.
- Fondo blanco (regla dura docx); léxico ético; comunidades como sujeto.

## Cuándo usar / cuándo no

- **Usar:** anexo de informes a financiador, visitas, convocatorias, reuniones de
  consorcio.
- **No usar:** no reemplaza el informe narrativo completo; no es pieza de redes.

## Tokens y script

`text.heading`, `brand.primary`, `docx.tableHeader.*`, `dataviz.ramp.naranja`,
`surface.warmth.docx`. Se compone hoy con `textHeader()` + `heroNumber()` +
`dataTable()` + pie estándar de `scripts/generators/fucai_docx.js`.

> [Pendiente: builder `impactOnePager()` en `fucai_docx.js` y definición de los
> indicadores estándar por proyecto (ficha de medición) con dirección.]
