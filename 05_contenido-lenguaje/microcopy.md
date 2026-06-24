# Microcopy / UX writing — FUCAI

> Textos breves de interfaz: botones, enlaces, formularios y mensajes. La voz es
> la misma que en todo (cercana, desde la fuerza); aquí cabe en pocas palabras.
> Aplica el léxico ético (`lexico-institucional.md`). Los colores y radios que se
> mencionan son autoridad de `03_tokens/tokens.json` (p. ej. `appsheet.primary`,
> `brand.primary`); aquí no se fijan valores.

## Principios

1. **Verbos directos, no relleno.** "Conoce nuestro trabajo", "Súmate",
   "Aliánzate" — nunca "Haz clic aquí" ni "Más información".
2. **Cercano, nunca culpabilizador.** Los mensajes de error no acusan a la
   persona; ofrecen el siguiente paso.
3. **Breve.** Una acción por botón; una idea por mensaje.
4. **Coherente con el léxico ético**: nada de "beneficiario", "asistir", etc.

## Botones (real)

- **Primario:** texto de acción claro (verbo + objeto). Estilo visual = naranja
  de marca (token `brand.primary`/`appsheet.primary`).
- **Secundario:** misma lógica de texto; estilo de borde sin relleno.
- Ejemplos: "Conoce nuestro trabajo" · "Súmate" · "Aliánzate" · "Descarga el informe".

## Enlaces (real)

Texto descriptivo del destino (no "aquí"). Naranja; subrayado solo en hover.

## Formularios

- **Etiquetas** en lenguaje natural y cercano: "¿Cómo te llamas?" antes que "Nombre*".
- **Texto de ayuda** que acompaña, no que ordena: "Lo usamos solo para
  responderte." 
- **Consentimiento** explícito en datos de personas e imágenes; en piezas
  comunitarias, opción de restricción cultural/espiritual (ética fotográfica del skill).

> [Pendiente: catálogo validado de etiquetas y textos de ayuda por formulario
> real (contacto, donación, voluntariado). Lo anterior son patrones, no copys
> oficiales.]

## Mensajes (estados)

Patrones propuestos, consistentes con la voz (a validar antes de producción):

| Estado | Patrón | Ejemplo |
|--------|--------|---------|
| Éxito | Celebrar el logro, breve | "¡Listo! Recibimos tu mensaje. Seguimos caminando juntos." |
| Error de validación | Sin culpar, con el siguiente paso | "Parece que falta tu correo. ¿Lo agregas para poder responderte?" |
| Error de sistema | Honesto y realista | "Algo no funcionó de nuestro lado. Intenta de nuevo en un momento." |
| Vacío / sin datos | Cálido, invita a la acción | "Aún no hay nada por aquí. Cuando lo haya, lo verás en este espacio." |

> [Pendiente: confirmar el catálogo definitivo de mensajes de error y estados
> con producto/comunicaciones. El skill documenta botones, enlaces y aperturas,
> no un set de errores oficial.]
