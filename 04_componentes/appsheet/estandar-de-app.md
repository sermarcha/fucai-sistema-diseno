# Aprendizajes de FucaiCampo para el Sistema de Diseño de FUCAI (AppSheet)

**App revisada:** Fucai Campo (`FucaiCampo-1002124312`) · **Fecha:** 28/09/2026 · **Autor:** Sergio Martínez Chaparro (con asistencia de Claude)
**Alcance:** patrones de UI/UX, lenguaje, navegación, visibilidad por rol y convenciones técnicas que se validaron o corrigieron en la implementación, en especial en el módulo de **Avances** (solicitud → aprobación → desembolso → legalización), **Pasajes** y los **tableros de seguimiento**.

> Este documento es la base para estandarizar las demás apps del ecosistema (Caminos Artesanos, Activos FUCAI, CRM B2B, Bancabundancia, Catálogo Maderables). Complementa el contrato de arquitectura `appsheet-arquitectura-fucai` (datos) y la guía de marca `fucai-branding` (identidad visual).
>
> **Dentro del sistema de diseño:** la identidad visual de las apps —tokens, barra,
> tarjetas, tipografía y reglas de color— vive en `patrones.md`, en esta misma
> carpeta. Aquí va cómo se arma la app. El destilado para un agente está en
> `skill/fucai-branding/references/appsheet.md`.

---

## 1. Principios de diseño

1. **El flujo manda.** Cada pantalla se lee en el mismo orden en que ocurre el proceso: *qué se pidió → en qué se gasta → quién aprobó → cómo se pagó → cómo se legalizó*. Si el usuario tiene que buscar dónde está, el orden está mal.
2. **Menos es más en la lista, todo en el detalle.** Las listas muestran 2 datos por tarjeta (el que decide y el que ubica). El detalle muestra todo, por secciones.
3. **Un toque menos.** Un solo nivel de agrupación en listas. Nada de "entrar a un grupo para entrar a otro grupo".
4. **El estado es lo primero que se ve.** Color + ícono + texto, siempre igual en todas las vistas.
5. **Lenguaje de servicio, no de propiedad.** "Proyectos coordinados", no "Mis proyectos". Los proyectos son de la fundación y de las comunidades.
6. **Cada quien ve lo suyo.** La visibilidad se decide por `usuario_alcance` (Propio · Centro · Financiero · Institucional) y por rol (`usuario_rol_app`), nunca por listas de correos sueltas.
7. **Se diseña para campo.** Los formularios de actividades se diligencian *en sitio y durante la actividad*, desde el celular: textos cortos, pasos, pocos campos por pantalla.

---

## 2. Tokens de marca aplicados en AppSheet

| Token | Valor en FucaiCampo | Uso |
|---|---|---|
| Color primario | `#E94513` (naranja FUCAI) | Barra, botones, íconos de navegación, botón flotante "+" |
| Tema | Claro | Todas las apps |
| Tipografía | Por defecto de AppSheet (Roboto) | Mantener; no mezclar fuentes |
| Íconos de estado | Font Awesome vía Format Rules | Ver §6 |

**Recomendación:** fijar estos tokens como estándar en *Settings → Theme & Brand* de todas las apps del ecosistema para que el usuario sienta una sola "familia" de apps.

---

## 3. Arquitectura de navegación

### 3.1 Estructura base (validada)

| Nivel | Qué es | Ejemplo en FucaiCampo |
|---|---|---|
| **Navegación primaria** (barra inferior, máx. 5–6) | Lo que se usa todos los días | Inicio · Niños · Participantes · Actividades · Más |
| **Paneles temáticos** (primaria/menú) | Tarjetas grandes, una por bandeja, con contador | Avances Panel · Pasajes Panel |
| **Menú** | Tableros de control por rol | Contabilidad · Dirección Estratégica · Hallazgos por responder · Revisoría Fiscal · Seguimiento de proyectos |
| **Referencia (`ref`)** | Vistas a las que se llega desde un panel o tablero | Mis avances, Legalizaciones, CP · …, RF · … |

### 3.2 Inicio numerado por secciones

La vista de **Inicio** se ordena por secciones numeradas, de la más estratégica a la más operativa:

- **0 · Cuadro de control** — tableros según el rol (Seguimiento de proyectos, Dirección Estratégica, Revisoría Fiscal, Contabilidad, Hallazgos por responder).
- **1 · Mis pendientes** — lo que el usuario debe hacer hoy (p. ej. "Cargar pasabordos · 4 por cargar").
- **2 · Registrar** — accesos directos a formularios (Nueva actividad, Registrar familia, Registrar niño o niña).
- **3 · Mi trabajo reciente**.

**Patrón:** la numeración ("0 ·", "1 ·") le da al usuario un mapa mental estable. Replicarlo en todas las apps.

### 3.3 Paneles de tarjetas con tabla de accesos (patrón estrella)

Los paneles (Inicio, Avances, Pasajes) no son menús fijos: se alimentan de una **tabla pequeña de accesos** (`in_accesos`, `av_accesos`, `ps_accesos`) con un slice `*_accesos_mios`:

| Columna | Función |
|---|---|
| `acceso_id` | Identificador corto ("mis", "legalizar", "centro", "contab"…) |
| `titulo`, `icono`, `orden` | Presentación y orden de las tarjetas |
| `vista` | Vista destino (acción `*_acc_abrir` con `LINKTOVIEW`) |
| `acc_visible` | `SWITCH([acceso_id], …)` con la regla de visibilidad por alcance/rol |
| `acc_conteo` | Contador de pendientes de esa bandeja |
| `acc_detalle` | Subtítulo dinámico ("Nada en curso", "4 pasabordos por cargar") |

**Por qué funciona:** cada usuario ve solo sus bandejas, con un contador que le dice si hay trabajo. Las bandejas siguen el orden del flujo.
**Cómo retirar una tarjeta sin borrar datos:** agregar la exclusión en el filtro del slice. Ejemplo aplicado: `AND([acc_visible], [acceso_id] <> "centro")`. Para devolverla, basta con quitar la condición.

### 3.4 Tableros de seguimiento que absorben vistas

Las vistas "por centro de costos" (Actividades Centro, Niños Centro, Participantes Centro, Pasajes Centro y **Avances Centro**) se integran al **dashboard "Seguimiento de proyectos"** en lugar de vivir sueltas en paneles o menús.

- Orden del tablero: Proyectos coordinados → detalle del proyecto → Avances por atender → POA vencido → Niños a priorizar → Riesgos → Actividades recientes → Histórico de pasajes → Pasajes por centro de costos → Histórico de avances → Avances por centro de costos.
- En móvil se usan **pestañas**, y está activo el **modo interactivo**: al seleccionar un proyecto, se filtran las demás vistas.
- Nombres visibles homogéneos: "**<Objeto> por centro de costos**".

⚠️ **Lección de visibilidad:** si una vista con Show_If `alcance = "centro"` entra a un tablero que solo ven Institucional + coordinadores, los usuarios de alcance Centro que no coordinan pierden el acceso. **Antes de mover una vista a un tablero, hay que cruzar a quién se le muestra la vista con a quién se le muestra el tablero.**

---

## 4. Vistas de detalle

### 4.1 Orden secuencial por secciones (caso "Mis avances")

Las vistas de detalle se configuran con **orden de columnas manual** y **títulos de sección**:

1. **Encabezado:** `estado` como *Header column* (grande, con color e ícono del Format Rule, y el botón de acción que corresponda).
2. **Datos de la solicitud:** código, fecha, solicitante, documento, centro de costos, proyecto, coordinador/a, actividad, lugar, comunidad, fecha de fin, tipo de desembolso, indicaciones, total solicitado, firma.
3. **Líneas de gasto:** lista relacionada (`Related detalle_avances`).
4. **Aprobaciones del avance:** lista relacionada + regla de los 4 ojos.
5. **Desembolso y pago:** resumen del pago, confirmación de recibido.
6. **Legalización y soportes:** fecha, total ejecutado, retenciones, diferencia, saldos, notas, firma.

### 4.2 Qué se quita del detalle

- Correos (`email_solicitante`, `email_coordinador`), códigos internos (`centro_num`), roles técnicos (`rol_solicitante`).
- Encabezados que pertenecen a formularios (`seccion1_cabecera`, `seccion2_linea_gasto`).
- Listas que solo tienen sentido en formularios (p. ej. `Related soportes_avances` con Show_If de tipo Form).

### 4.3 Títulos de sección reutilizables

Los títulos son **columnas virtuales tipo Show** con el texto en la fórmula y un Show_If por vista:

```
cont_sec_solicitud     = "Datos de la solicitud"
cont_sec_desembolso    = "Desembolso y pago"
cont_sec_legalizacion  = "Legalización y soportes"
Show_If: IN(CONTEXT("View"), LIST("avances_contabilidad_Detail", "mis_avances_Detail"))
```

**Aprendizaje:** es mejor **reutilizar el mismo título en varias vistas** (ampliando la lista del `IN(CONTEXT("View"), …)`) que crear una columna Show nueva por vista. Hay menos columnas, los textos son coherentes y el mantenimiento es más simple.

### 4.4 Listas relacionadas siempre visibles

**Error encontrado:** las líneas de gasto no se veían en "Mis avances". La columna sí estaba en el slice, pero **no estaba en el orden manual de columnas** de la vista.
**Regla:** cuando una vista de detalle usa orden **Manual**, toda columna nueva (sobre todo las `Related …`) hay que **agregarla a mano** a esa vista. Revisarlo en cada cambio del modelo.

---

## 5. Vistas de lista (deck/tabla)

### 5.1 Tarjeta estándar (caso "Mis avances")

| Elemento | Antes (denso) | Estándar |
|---|---|---|
| Agrupación | Centro de costos → Estado (2 niveles) | **Solo Estado** (1 nivel, con contador) |
| Título principal | Monto | **Monto** (el dato que decide) |
| Línea secundaria | Fecha con hora y segundos | **`CC218 · 28/09/2026`** (columna virtual de tarjeta) |
| Esquina superior derecha | ID interno (`7bc10138`) | **Vacía** |
| Barra de acciones | Íconos en cada fila | **Apagada**; las acciones quedan en el detalle |
| Orden | — | Fecha descendente (lo más reciente primero) |

### 5.2 Columnas virtuales "de tarjeta"

Para componer textos de lista se crean columnas virtuales dedicadas:

```
vc_tarjeta_linea = CONCATENATE([centro_costos], "  ·  ", TEXT([fecha_solicitud], "DD/MM/YYYY"))
Show_If: NOT(IN(CONTEXT("ViewType"), LIST("Detail", "Form")))
```

- **No apagar "Show"** del todo: AppSheet **oculta de los selectores de encabezado del deck** las columnas con Show = falso. Se usa un Show_If que las esconde solo en detalle y formulario.
- Separador estándar: `" · "` (punto medio con espacios).
- Fechas en listas sin hora: `DD/MM/YYYY`.
- Mismo patrón usado en `lb_ninos`, `lb_participantes`, `act_actividades_grupales` y `ps_solicitudes` (nombre completo, edad, resumen, estado).

### 5.3 Vistas principales de campo

Actividades, Participantes y Niños: **agrupar por comunidad y ordenar por fecha descendente**. Las tres usan slices `*_propio` para que sean coherentes entre sí.

---

## 6. Estados y reglas de formato (Format Rules)

- Un Format Rule por estado, con el nombre `FR_estado_<estado>`: borrador, pendiente coordinación/contable, pendiente dirección, aprobado, desembolsado, en revisión, devuelto, legalizado, cancelado.
- Cada estado lleva **color + ícono** (ej.: "Aprobado – pendiente desembolso" en azul con ícono de documento; "En revisión – Dir. Contable" en naranja con lupa).
- Alertas con reglas propias: `FR_diferencia_total_rojo`, `FR_rf_alerta_avance`, `FR_rf_mora`.
- La misma paleta de estados se aplica en pasajes (`ps_solicitudes`, 6 reglas) y en hallazgos (`rf_hallazgos`, 7 reglas).

**Pendiente de estandarizar:** al agrupar por estado, AppSheet ordena los grupos **alfabéticamente**, no según el flujo. La solución estándar es una columna virtual `vc_orden_estado` (1 = Borrador … 9 = Legalizado) para agrupar u ordenar.

**Semáforo institucional — resuelto (2026-09).** El sistema define la capa funcional
`state.*`, fuera de `color.*` para que la paleta de marca siga cerrada:

| Categoría | Token | Hex | Estados |
|---|---|---|---|
| Borrador / inicial | `state.neutral` | `#666666` | Borrador |
| En trámite | `state.warning` | `#E94513` | Pendiente …, En revisión … |
| En curso | `state.info` | `#2A6F97` | Aprobado – pendiente desembolso, Desembolsado |
| Cerrado OK | `state.success` | `#0F7B4F` | Legalizado, Cerrado, Gestionado |
| Requiere acción | `state.danger` | `#9B2226` | Devuelto, alertas, mora |
| Anulado | `state.neutral` tachado | `#666666` | Cancelado |

Dos precisiones que cambian lo que se propuso en la revisión: el verde de «cerrado»
**no es** `brand.territory` `#2D6A4F` —ese sigue siendo solo narrativo— sino el verde
funcional `#0F7B4F`; y estos colores **no se usan fuera de una interfaz**.

---

## 7. Lenguaje y microcopy

### 7.1 Reglas

- **Preguntas en los campos que el usuario diligencia:** "¿Qué se va a comprar o contratar?", "¿Cuándo termina la actividad?", "¿Cuánto se ejecutó en esta línea?".
- **Sustantivos cortos en lecturas:** "Solicitante", "Centro de costos", "Total ejecutado", "Diferencia".
- **Mayúscula solo al inicio:** "Fecha de legalización", no "Fecha de Legalización".
- **Sin dos puntos finales ni textos de sistema** en las etiquetas.
- **Opcional explícito:** "Notas de la legalización (opcional)", "Retención de ICA (solo si aplica)".
- **Nada de lenguaje de propiedad** sobre proyectos: "Proyectos coordinados", "Pasajes por centro de costos".
- **Etiquetas según el contexto**, con `IF(CONTEXT("View") = …)`. Ej.: `Related detalle_avances` se llama "Líneas de gasto a legalizar" en el formulario de legalización y "Líneas de gasto" en el resto.

### 7.2 Correcciones hechas (ejemplos)

| Antes | Después |
|---|---|
| "Estado de aprobaciones coorrespondientes al Coordinador del Proyecto y Contador:" | "Aprobaciones del avance" |
| "Avances Centro" (nombre técnico visible) | "Avances por centro de costos" |
| "Mis proyectos" | "Proyectos coordinados" |

⚠️ El **Display Name de una columna es de la tabla**: cambiarlo afecta todas las vistas que la muestran. Hay que escribirlo pensando en el contexto más general, o usar una expresión con `CONTEXT()`.

---

## 8. Formularios

- **Asistente por pasos con Page_Header:** formularios largos (p. ej. `avances_legalizables_Form`, 4 pasos) divididos en páginas con columnas Show `sol_paso1..3`, `leg_paso3..4`.
- **Show_If por vista** para esconder en el formulario lo que no se diligencia ahí: `CONTEXT("View") <> "avances_legalizables_Form"`.
- **Editable_If por estado y dueño:** `AND(USEREMAIL() = [email_solicitante], IN([estado], LIST("Borrador","Devuelto")))`.
- **Fechas automáticas cuando ocurre el paso**, no al crear el registro (confirmación de recibido, legalización). Las fechas que dependen de un tercero (desembolso en banco) las digita quien corresponde (Contabilidad).
- **Datos del usuario desde `usuarios`** (nombre, documento, rol) con `LOOKUP(USEREMAIL(), …)`. Solo se digitan cuando la solicitud es para un tercero.
- **Botones de acción por rol:** Contabilidad solo edita los campos de sus botones (desembolso, comprobante); nada más.

---

## 9. Visibilidad y control de acceso (UX de roles)

| Alcance / rol | Ve |
|---|---|
| **Propio** | Sus registros (Mis avances, Mis pasajes, Mis legalizaciones si aplica) |
| **Centro** | Lo de su(s) centro(s) de costos (`usuario_proyecto`) |
| **Financiero / Institucional** | Tableros institucionales, legalizaciones, panel de pasajes |
| **Coordinador de proyecto** | Seguimiento de proyectos (proyectos donde es `email_coordinador`) |
| **Contabilidad** | Panel Contabilidad (vistas de escritorio, solo campos de sus botones) |
| **Revisor Fiscal** | Vistas RF de solo lectura + hallazgos |
| **Admin** | Todo, incluido borrar en cualquier estado |

- Reglas de flujo explícitas en la UI: máximo 3 avances abiertos; bloqueo si pasan más de 7 días hábiles sin legalizar; regla de los 4 ojos.
- Suplentes de aprobación documentados (subdirector y Admin en pasajes).
- **Vistas de Contabilidad y Revisoría pensadas para escritorio:** layout de escritorio en "Split view" y detalle multicolumna.

---

## 10. Convenciones de nombres

| Prefijo / patrón | Uso | Ejemplo |
|---|---|---|
| `vc_` | Columna virtual de cálculo o presentación | `vc_tarjeta_linea`, `vc_info_pago`, `vc_cuatro_ojos` |
| `<rol>_sec_` | Títulos de sección Show por rol | `cont_sec_*`, `rf_sec_*` |
| `sol_paso#`, `leg_paso#` | Encabezados de página en formularios | `sol_paso1` |
| `seccion#_` | Encabezados internos de formulario | `seccion2_linea_gasto` |
| `FR_` | Format Rules | `FR_estado_legalizado` |
| `<dominio>_accesos` / `_mios` | Tablas y slices de paneles de tarjetas | `av_accesos_mios` |
| `CP ·`, `RF ·`, `DIR ·`, `Contab ·`, `MEL ·`, `Nutri ·` | Prefijo del nombre de la vista según el tablero al que pertenece | `CP · Histórico de avances` |
| `*_propio`, `*_centro`, `*_institucional` | Slices por alcance | `ninos_propio` |

**Pendiente:** varias vistas conservan nombres técnicos sin Display Name (`coord_proyectos_Detail`, `rf_*_Detail`). Todo lo que ve el usuario debe tener un nombre en español.

---

## 11. Trampas técnicas encontradas (checklist anti-errores)

1. **Orden manual de columnas:** si una columna no se agrega a la vista, no aparece aunque esté en la tabla y en el slice.
2. **Vistas `_Inline` compartidas:** cambiar `detalle_avance_Inline` o `aprobaciones_Inline` afecta **todas** las vistas que muestran esa lista. Si se necesita un comportamiento distinto, crear una vista de referencia propia.
3. **La lista relacionada puede venir de otra vista:** en "Mis avances", la tabla de aprobaciones no usa `aprobaciones_Inline`, sino una vista de tabla de `aprobaciones` que agrupa por `id_avance` y repite el código. Antes de editar, hay que identificar qué vista está renderizando la lista.
4. **Display Name a nivel de tabla:** se propaga a todas las vistas (§7).
5. **Show = falso oculta la columna de los encabezados del deck:** usar Show_If con `CONTEXT("ViewType")` (§5.2).
6. **Los grupos se ordenan alfabéticamente** (§6).
7. **Un Show_If de una vista dentro de un tablero sigue aplicando:** revisar el cruce de audiencias (§3.4).
8. **Retirar en vez de borrar:** para quitar tarjetas o vistas, filtrar el slice o condicionar la visibilidad; no borrar filas ni vistas mientras haya dependencias.
9. **Guardar después de cada bloque de cambios** en el editor: los cambios sin guardar se pierden al recargar.

---

## 12. Checklist para cada vista nueva (Definición de "Hecho")

- [ ] Tiene **Display Name en español**, sin lenguaje de propiedad.
- [ ] Su **Show_If** coincide con la audiencia del panel o tablero que la contiene.
- [ ] Lista: **1 nivel de agrupación**, título = dato que decide, línea secundaria = dato que ubica, sin IDs visibles, orden por fecha descendente.
- [ ] Detalle: **estado en el encabezado**, secciones en orden del flujo, sin correos ni códigos internos, todas las listas relacionadas incluidas.
- [ ] Formulario: pasos (Page_Header) si tiene más de 8 campos, campos en forma de pregunta, opcionales marcados.
- [ ] Estados con **Format Rule** (color + ícono) de la paleta institucional.
- [ ] Probada en **móvil** y, si es de Contabilidad o RF, en **escritorio**.
- [ ] Probada con **"Preview app as"** al menos con un usuario de cada alcance afectado.

---

## 13. Dónde quedó cada aprendizaje en el sistema

Incorporado al repositorio el 2026-09-28. Lo que era **norma** se aplicó en su
capítulo; lo que era **decisión abierta** quedó en el registro de vacíos.

| § | Aprendizaje | Dónde quedó |
|---|---|---|
| 1 | Principios de diseño (flujo, lista/detalle, un toque menos, estado visible) | **Integrado** en `references/appsheet.md` § Cómo se arma la app |
| 2 | Tokens de marca en AppSheet | Ya era norma en `patrones.md`. Confirmado |
| 3 | Navegación, inicio numerado, paneles con tabla de accesos | **Integrado** en `references/appsheet.md` |
| 4–5 | Detalle por secciones, tarjeta de dos datos | **Integrado** en `references/appsheet.md` |
| 6 | Estados: color + ícono + texto, un `FR_` por estado | **Integrado**; el semáforo con **azul y rojo** queda como decisión abierta |
| 6 | **Azul y rojo fuera de la paleta FUCAI** | `analisis-de-vacios.md` §3 — **subido a prioridad alta**: ya no es hipotético, está en producción |
| 6 | Orden de estados alfabético vs. flujo | `analisis-de-vacios.md` §10 |
| 7 | Lenguaje de servicio, no de propiedad | **Integrado** en `05_contenido-lenguaje/lexico-institucional.md`, tabla sí/no |
| 7 | Etiquetas: pregunta vs. sustantivo, mayúscula inicial, opcional explícito | **Integrado** en `05_contenido-lenguaje/microcopy.md` § Reglas de etiqueta |
| 8 | Formularios por pasos, `Editable_If` por estado y dueño | **Integrado** (resumen) en `references/appsheet.md` |
| 9 | Visibilidad por alcance y rol | **Integrado** (resumen) en `references/appsheet.md`, con el aviso de cruzar audiencias |
| 10 | Convenciones de nombres | **Integrado** en `references/appsheet.md` § Nombres |
| 10 | Vistas con nombre técnico visible | `analisis-de-vacios.md` §10 |
| 11 | Trampas técnicas | Quedan aquí: son propias de AppSheet, no del sistema de diseño |
| 12 | Checklist de «hecho» | **Integrado** en `references/appsheet.md` § Checklist de vista nueva |
| 13 | Backlog de FucaiCampo | Propio de la app: pertenece a `fucai-appsheet`, no al sistema. El punto 8 —llevar el estándar a las demás apps— sí quedó en `analisis-de-vacios.md` §10 |

---

## 14. Backlog de mejoras identificado en la revisión

> Este backlog es de **FucaiCampo**, no del sistema de diseño. Su casa natural es el
> repositorio `fucai-appsheet`; se conserva aquí como registro de la revisión.

| # | Mejora | Impacto |
|---|---|---|
| 1 | `vc_orden_estado` para ordenar los grupos según el flujo (avances y pasajes) | Alto |
| 2 | Limpiar la vista de aprobaciones que se muestra dentro del avance: quitar la agrupación por `id_avance` y la columna repetida | Medio |
| 3 | Definir la audiencia de "Avances por centro de costos" dentro de Seguimiento de proyectos (alcance Centro vs. coordinadores) | Alto |
| 4 | Poner Display Name a las vistas técnicas visibles (`coord_proyectos_Detail`, `rf_*_Detail`) | Medio |
| 5 | Unificar la paleta de estados entre avances, pasajes y hallazgos | Medio |
| 6 | Revisar "Resumen del pago" (`vc_info_pago`): hoy muestra el nombre del solicitante antes de que haya pago | Bajo |
| 7 | Evaluar un acceso rápido solo para "Confirmar recibido" en la lista de Mis avances | Bajo |
| 8 | Llevar estos estándares a Caminos Artesanos, Activos FUCAI, CRM B2B y Bancabundancia | Alto |
