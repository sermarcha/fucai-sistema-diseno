/**
 * example_presentacion.js — Plantilla de presentación FUCAI (.pptx). Ejemplo ejecutable y base.
 *
 *   node scripts/example_presentacion.js [salida.pptx]
 *
 * Patrón "sándwich": portada (naranja) → contenido (blanco) → dato → divisoria → cierre.
 * Reemplaza los textos. Requiere pptxgenjs.
 */
const pptxgen = require("pptxgenjs");
const P = require("./fucai_pptx.js");

(async () => {
  const out = process.argv[2] || "/mnt/user-data/outputs/FUCAI_Presentacion_Base_2026-06.pptx";
  const pres = new pptxgen();
  pres.defineLayout({ name: "FUCAI_169", width: 10, height: 5.625 });
  pres.layout = "FUCAI_169";

  // 1) Portada (fondo naranja, logo blanco)
  P.titleSlide(pres, {
    title: "Informe de Acompañamiento Territorial",
    subtitle: "Comunidades del medio y bajo Caquetá · Amazonía colombiana",
  });

  // 2) Contenido (blanco, barra naranja, logo en esquina) — máx. 6 líneas
  P.contentSlide(pres, {
    title: "El camino con las comunidades",
    addBody: (s) => {
      s.addText([
        { text: "Acompañamos a 14 comunidades en la recuperación de sus chagras.", options: { bullet: true } },
        { text: "El trabajo partió de lo que las comunidades ya saben y querían potenciar.", options: { bullet: true } },
        { text: "Fortalecimiento de la guardia y la soberanía alimentaria.", options: { bullet: true } },
      ], { x: 0.5, y: 1.3, w: 9, h: 2.8, fontSize: 16, fontFace: "Calibri", color: "000000", lineSpacingMultiple: 1.3 });
    },
  });

  // 3) Dato héroe
  P.contentSlide(pres, {
    title: "Resultados del semestre",
    addBody: (s) => {
      s.addText("423", { x: 0.5, y: 1.4, w: 9, h: 1.4, fontSize: 96, fontFace: "Space Grotesk", color: P.C.primary, bold: true });
      s.addText("familias fortalecieron su soberanía alimentaria", { x: 0.5, y: 3.0, w: 9, h: 0.6, fontSize: 18, fontFace: "Calibri", color: "333333" });
    },
  });

  // 4) Divisoria de sección (fondo naranja + pilar)
  P.sectionSlide(pres, { title: "Cobertura por territorio", pillar: "Nuestro centro es la periferia" });

  // 5) Cierre
  P.closingSlide(pres);

  await pres.writeFile({ fileName: out });
  console.log("OK ->", out);
})();
