# Componente — Patrones de vista AppSheet

> Identidad visual de las apps AppSheet de FUCAI. Para fórmulas/expresiones, usa el
> skill `appsheet-fundacion-caminos-de-identidad`. Estado: **borrador** (tokens sin builder).

## Tokens

- **Primario:** `appsheet.primary` → `brand.primary`: barra superior,
  acciones primarias, encabezados, acentos.
- **Acento:** `accent.appsheet` → `color.durazno`: realces suaves.
- **Superficies:** blanco y arena/arena claro; fondo general claro, **nunca naranja**.
- **Verde** (`brand.territory`): solo en módulos de territorio/naturaleza/ambiente.

## Anatomía / patrones de vista

- **Barra superior** naranja con `02_identidad-visual/logo/logo_blanco.png`; sobre fondo claro, `02_identidad-visual/logo/logo_naranja.png`.
- **Tarjetas/tablas:** encabezado naranja con texto blanco; filas/tarjetas alternas
  en arena claro.
- **Acciones:** primaria naranja; secundaria con contorno naranja sobre fondo claro.
- **Datos:** una serie → naranja; serie territorial → verde; ejes/etiquetas en grises.
- **Tipografía:** AppSheet no tiene Space Grotesk → **Roboto** para títulos; cuerpo
  en la fuente del sistema.

## Reglas críticas

- Un foco por vista; íconos outline naranja/negro (verde solo ambiental).
- Proporción 60-25-10-5; superficies claras dominan.
- Contraste ≥ 4.5:1 en cuerpo; naranja↔blanco solo en títulos grandes.
- Nunca estado/categoría solo por color: acompañar con etiqueta o ícono.
- Slogan en la pantalla "Acerca de"/pie de la app.

## Cuándo usar / cuándo no

- **Usar:** cualquier app AppSheet de FUCAI.
- **No usar:** no fondo naranja general; no verde fuera de lo territorial.

## El estándar de app

Este documento fija la **identidad visual**. Cómo se arma la app —navegación,
paneles de tarjetas con tabla de accesos, orden de las vistas de detalle, listas,
estados, formularios por pasos, visibilidad por alcance y rol, convenciones de
nombres, trampas técnicas y el checklist de «hecho» para cada vista nueva— está en
`estandar-de-app.md`, validado en FucaiCampo y pensado para todas las apps del
ecosistema.

> [Pendiente: el set de íconos. El skill fija color y tipografía, no una librería.]
