# FUCAI — Presentaciones (.pptx)

**Construye con el script:** `scripts/fucai_pptx.js` (PptxGenJS).

```javascript
const pptxgen = require("pptxgenjs");
const P = require("<skill>/scripts/fucai_pptx.js");
const pres = new pptxgen();
P.titleSlide(pres, { title:"…", subtitle:"…" });           // fondo naranja (o verde/negro)
P.contentSlide(pres, { title:"…", addBody:(s)=>{ s.addText("…",{x:0.5,y:1.2,w:9,h:3,fontSize:16,fontFace:"Calibri",color:"000000"}); } });
P.sectionSlide(pres, { title:"…", pillar:"…" });
P.closingSlide(pres);
await pres.writeFile({ fileName:"/mnt/user-data/outputs/FUCAI_Presentacion_Tema_2026-06.pptx" });
```

A diferencia de Word, las diapositivas **sí** pueden usar fondo naranja/verde/negro completo en portada/sección/cierre. Las de contenido van en blanco y minimalistas.

## Patrón "sándwich"
1. **Portada** → fondo naranja (verde para mazos de territorio, o negro) + `logo_blanco.png` + título Space Grotesk 36–44 pt blanco + subtítulo + un pilar en cursiva + URL.
2. **Contenido** → fondo blanco + barra naranja delgada arriba + `logo_naranja.png` pequeño arriba a la derecha + título Space Grotesk naranja + cuerpo Calibri negro + barra arena al pie. **Máx. 6 líneas.**
3. **Dato** → una cifra héroe Space Grotesk 36–60 pt naranja + texto mínimo.
4. **Cita** → Calibri Italic 16–18 pt; idealmente una voz de la comunidad con atribución.
5. **Divisoria de sección** → fondo naranja o verde + Space Grotesk blanco + un pilar.
6. **Cierre** → fondo naranja/negro + `logo_blanco.png` + slogan + URL + contacto.
