# FUCAI — Guía rápida de marca (1 página)

**Fundación Caminos de Identidad (FUCAI)** · *Nuestro centro es la periferia*
Para quien va a **producir una pieza hoy** (documento, slide, post, correo).
El detalle vive en el sistema (`README.md`); los valores mandan desde
`03_tokens/tokens.json`. Este resumen lo verifica `scripts/build-skill.js`.

## Las 8 reglas que nunca se rompen

1. **Word/Docs: fondo blanco SIEMPRE** (portada y contraportada incluidas). La
   calidez va en la banda arena, nunca en fondo naranja.
2. **Naranja a sangre solo** en portadas/secciones/cierres de presentación — y en
   redes, solo en gancho y cierre del carrusel (máx. 2 láminas).
3. **Verde solo territorio/naturaleza.** Nunca como sinónimo del naranja.
4. **Space Grotesk Bold solo títulos; Calibri (Carlito) cuerpo.** Máx. 2 fuentes.
5. **Comunidades protagonistas, nunca receptoras**: jamás *beneficiarios,
   intervenir, ayudar, asistir, víctimas, poblaciones vulnerables, salvar*.
6. **Fotos reales, con consentimiento, color auténtico.** **Prohibido** usar IA
   para representar personas o comunidades.
7. **Blanco↔naranja solo en títulos grandes** (3.9:1); cuerpo siempre ≥ 4.5:1.
8. **Un elemento focal por pieza**; proporción 60-25-10-5; el aire es la marca.

## Paleta

<!-- [GEN] derivado de tokens.json (color.*) -->

| Token | HEX | Cuándo |
|-------|-----|--------|
| `color.naranja` | #E94513 | Acento primario: títulos, botones, barras (≈25 %) |
| `color.arena` | #EDE8D3 | Calidez: bandas, secciones, fondos suaves |
| `color.verde` | #2D6A4F | SOLO territorio/naturaleza/ambiente |
| `color.blanco` | #FFFFFF | Fondo por defecto (el 60 %) |
| `color.negro` | #000000 | Cuerpo de texto |
| `color.naranja-oscuro` | #C13A10 | Hover/activo de acciones |
| `color.durazno` | #F4A28A | SOLO fondo suave con texto oscuro |
| `color.arena-claro` | #F6F3E9 | Filas alternas, cajas |
| `color.verde-claro` | #74B597 | SOLO fondo de badges/secciones ambientales |
| `color.gris-texto` | #333333 | Texto secundario, captions, slogan en banda |

## Contraste esencial

<!-- [GEN] contraste calculado desde tokens.json (WCAG 2.x) — lo verifica build-skill.js -->

| Fondo | Texto | Contraste | Veredicto |
|-------|-------|-----------|-----------|
| Blanco (`color.blanco`) | Negro (`color.negro`) | 21:1 | ✓ cuerpo |
| Arena (`color.arena`) | Gris texto (`color.gris-texto`) | 10.3:1 | ✓ cuerpo |
| Naranja (`color.naranja`) | Blanco (`color.blanco`) | 3.9:1 | solo títulos grandes |
| Blanco (`color.blanco`) | Durazno (`color.durazno`) | 2:1 | ✕ nunca texto/ícono |

## Tipografía y espacio

Títulos **Space Grotesk Bold** (portada 28 pt · H1 22 · H2 16 · H3 13); cuerpo
**Calibri 11 pt** (interlineado 1.3); captions 9 pt gris. Escala de espaciado
4·8·12·16·24·32·48 pt; márgenes 2.5 cm (A4) / 1 in (Carta).

## Voz (junto al fuego, no desde un podio)

Sencillo · concreto · entusiasta · empoderador · realista · cercano. Voz activa
con las comunidades como sujeto; oraciones ≤ 25 palabras; datos de impacto
siempre en cifra; pilares en *cursiva*, uno por apertura; pueblos indígenas con
mayúscula y su grafía propia. Filtro antes de publicar: *¿habla desde la fuerza
o desde la carencia?* Si es desde la carencia, se reescribe.

## Redes exprés (carrusel 1080×1350)

5–9 láminas: gancho → desarrollo → **dato héroe** → cierre CTA. Máx. 2 láminas
intensas; una idea (≤ 40 palabras) y un foco por lámina; Space Grotesk +
Carlito; texto sobre foto con degradado ≥ 4.5:1; cierre con slogan y URL.
Checklist completa: `04_componentes/social/carrusel.md`.

## Antes de entregar

¿Un foco y aire? · ¿Verde solo territorio? · ¿Contraste ok? · ¿Léxico ético? ·
¿Slogan/pilar presente? · ¿Foto con consentimiento (nunca IA para personas)? ·
Word: ¿fondo blanco y `check_fucai.py` en verde? · Nombre:
`FUCAI_TipoDocumento_Tema_AAAA-MM.ext`.
