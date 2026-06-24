# Cómo contribuir al Sistema de Diseño FUCAI

Este repositorio es la fuente única de verdad de la marca FUCAI. Cambiar un
token cambia toda la producción institucional derivada, así que se trabaja con
disciplina y revisión.

## Principio innegociable

**Los tokens y las reglas explícitas mandan; los documentos son derivados.**
No se quema ningún valor numérico (color, tamaño, margen) fuera de
`03_tokens/tokens.json`. Si necesitas un valor nuevo, se define como token; no
se escribe a mano en una plantilla, un script o un documento.

## Roles

| Rol | Responsabilidad |
|-----|-----------------|
| **Guardián de marca** | Custodia `03_tokens/` y `01_fundamentos/`. Aprueba cualquier cambio de color, tipografía, espaciado o filosofía. Única persona que puede fusionar cambios MAJOR. |
| **Mantenedor** | Revisa y fusiona PRs a `main`. Garantiza que el repositorio compile y que la taxonomía se respete. |
| **Colaborador** | Cualquier integrante de FUCAI que propone cambios vía Pull Request. |
| **Consumidor** | Persona o herramienta agéntica que lee los tokens para producir entregables. No edita; reporta inconsistencias como *issues*. |

## Flujo de Pull Request

1. Crea una rama desde `main`: `git checkout -b tipo/descripcion-corta`
   (`tipo` = `feat`, `fix`, `docs`, `tokens`, `chore`).
2. Haz cambios pequeños y atómicos. Un PR = un propósito.
3. Actualiza `CHANGELOG.md` (sección *No publicado*) y sube la versión si aplica.
4. Abre el PR contra `main` con descripción del *qué* y el *por qué*.
5. Revisión: un **Mantenedor** para cambios menores; el **Guardián de marca**
   además para cualquier cambio en `03_tokens/` o `01_fundamentos/`.
6. Se fusiona solo con la revisión aprobada y el checklist de QA en verde.

`main` está protegida: no se hace *push* directo; todo entra por PR revisado.

## Checklist de QA previo a fusionar a `main`

- [ ] `tokens.json` es JSON válido y todas las referencias `{...}` resuelven.
- [ ] No hay valores numéricos quemados fuera de `03_tokens/`.
- [ ] Los cuatro temas conservan **exactamente las mismas claves**.
- [ ] La taxonomía (`taxonomia.md`) está actualizada si cambió la nomenclatura.
- [ ] Se respeta la regla de scope por plataforma (docx/pptx/appsheet/web/social).
- [ ] Paleta 60-25-10-5; verde solo para territorio/naturaleza.
- [ ] Contraste conforme a `06_accesibilidad/` (mín. 3:1 títulos, 4.5:1 cuerpo).
- [ ] Word con fondo blanco (incl. portada y contraportada); fondos sólidos solo en pptx.
- [ ] Voz y tono sin palabras de la lista "evitar".
- [ ] `CHANGELOG.md` actualizado y versión semántica correcta.
- [ ] El repositorio no incluye entregables (`.docx`/`.pptx`/`.pdf`) ni `dist/`.

## Convención de commits

`tipo(alcance): resumen en imperativo` — p. ej. `tokens(color): añade verde claro`,
`docs(readme): aclara el mapa de fuente de verdad`.
