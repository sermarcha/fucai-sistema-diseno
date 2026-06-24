/**
 * example_informe.js — Minimal, runnable example of a FUCAI institutional report.
 * Doubles as a template: copy it, swap the content, keep the structure.
 *
 *   node scripts/example_informe.js  ->  /mnt/user-data/outputs/FUCAI_Informe_Base_AAAA-MM.docx
 *
 * After generating, ALWAYS run:  python3 scripts/check_fucai.py <output.docx>
 */
const F = require("./fucai_docx.js");

const cover = F.buildCover({
  title: "Informe de Acompañamiento Territorial",
  subtitle: "Comunidades del medio y bajo Caquetá · Amazonía colombiana",
  pillar: "Nuestro centro es la periferia",
});

const body = [
  ...F.h1("El camino con las comunidades", "Un discurso que se come, se bebe y se respira"),
  F.body("Durante el primer semestre de 2026, FUCAI acompañó a 14 comunidades en la recuperación de sus chagras y en el fortalecimiento de su guardia. El trabajo partió de lo que las comunidades ya saben y querían potenciar, no de una agenda externa."),
  ...F.heroNumber("423", "familias fortalecieron su soberanía alimentaria"),
  F.voiceQuote(
    "Volvimos a sembrar en la chagra lo que nuestras abuelas sembraban. El territorio nos reconoce de nuevo.",
    "— Mujer mayor, pueblo Uitoto, La Chorrera, 2026"),
  F.sp(16),
  F.h2("Cobertura por territorio"),
  F.dataTable({
    headers: ["Territorio", "Comunidades", "Familias"],
    rows: [["Bajo Caquetá", "6", "184"], ["Medio Caquetá", "5", "142"], ["La Chorrera", "3", "97"]],
    numeric: true,
  }),
];

const back = F.buildBackCover({});

(async () => {
  const out = process.argv[2] || "/mnt/user-data/outputs/FUCAI_Informe_Base_2026-06.docx";
  const doc = F.assembleDoc({
    cover, body, back,
    coverBand: { date: "Junio 2026", project: "Proyecto CC217 Naane (OIKOS–AICS)" },
  });
  await F.writeDoc(doc, out);
  console.log("OK ->", out);
})();
