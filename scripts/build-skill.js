/**
 * build-skill.js — Compilador del Sistema de Diseño FUCAI.
 * =============================================================================
 * Hace mecánico el principio del repo: 03_tokens/tokens.json es la fuente de verdad
 * y el skill/los documentos se DERIVAN de ahí. Dos responsabilidades:
 *
 *   [A] EMITIR el paquete del skill regenerado desde el sistema de diseño (--write):
 *       dist/skill/ con los tokens resueltos (JSON + CSS), las constantes de marca
 *       que embeben los generadores y la plataforma de marca (Misión/Visión/Valores).
 *       Así, el "skill" que se distribuye INCLUYE todo el sistema de diseño.
 *
 *   [B] VERIFICAR que las tablas marcadas <!-- [GEN] ... --> de la capa 02/06 sigan
 *       coincidiendo con los tokens (detección de deriva). Es la forma segura e
 *       idempotente de "mantener generadas" esas tablas.
 *
 * USO
 *   node scripts/build-skill.js            # dry-run: constantes + verificación [GEN]
 *   node scripts/build-skill.js --write     # además emite dist/skill/ (ignorado por git)
 * =============================================================================
 */
const fs = require("fs");
const path = require("path");
const T = require("./lib/tokens.js"); // C, FONT, SZ, PT, RAMP, flat, leaves, resolve, raw, meta

const ROOT = path.join(__dirname, "..");
const WRITE = process.argv.includes("--write");
const OUT = path.join(ROOT, "dist", "skill");

/* ============================ helpers de formato ========================== */
const isObj = (v) => v && typeof v === "object" && !Array.isArray(v);
const norm = (s) => String(s).replace(/−/g, "-").trim(); // normaliza el menos unicode

// Resuelve referencias también dentro de objetos (p. ej. el color de una sombra).
function deep(v) {
  v = T.resolve(v);
  if (isObj(v)) { const o = {}; for (const k of Object.keys(v)) o[k] = deep(v[k]); return o; }
  if (Array.isArray(v)) return v.map(deep);
  return v;
}
// Representación "de documento" de un valor (para verificar tablas [GEN]).
function display(v) {
  v = deep(v);
  if (typeof v === "string") return v.startsWith("#") ? v.toUpperCase() : v;
  if (Array.isArray(v)) return v.join(", ");
  if (isObj(v) && "value" in v && "unit" in v) return v.value + " " + v.unit;
  return null; // compuesto (p. ej. sombra): no se verifica como celda simple
}
// Valor CSS de un token según su forma.
function css(v) {
  v = deep(v);
  if (typeof v === "string") return v; // color hex
  if (Array.isArray(v)) {
    if (v.every((x) => typeof x === "number")) return "cubic-bezier(" + v.join(", ") + ")"; // easing
    return v.map((f) => (/\s/.test(f) ? "'" + f + "'" : f)).join(", "); // fontFamily
  }
  if (isObj(v) && "value" in v && "unit" in v) return "" + v.value + v.unit; // dimension/duration
  if (isObj(v) && "color" in v) { // shadow
    const d = (x) => "" + x.value + x.unit;
    return d(v.offsetX) + " " + d(v.offsetY) + " " + d(v.blur) + " " + d(v.spread) + " " + v.color;
  }
  return String(v);
}

/* ===================== [A] constantes de marca (snapshot) ================= */
function buildBrandConstants() {
  return { color: T.C, font: T.FONT, sizePt: T.PT, ramp: T.RAMP };
}

/* ===================== [B] verificación de tablas [GEN] =================== */
const GEN_TARGETS = [
  "02_identidad-visual/color.md",
  "02_identidad-visual/tipografia.md",
  "02_identidad-visual/espaciado-y-layout.md",
  "02_identidad-visual/forma-y-profundidad.md",
  "02_identidad-visual/movimiento.md",
  "06_accesibilidad/estandar-accesibilidad.md",
];
const GEN_RE = /\[GEN\][^\n]*tokens\.json/;
const TOKEN_REF = /`((?:color|surface|brand|accent|text|font|space|layout|docx|pptx|appsheet|dataviz|radius|elevation|motion)\.[A-Za-z0-9_.\-]+)`/g;

function checkGenTables() {
  const issues = [];
  let tablesChecked = 0, rowsChecked = 0;
  for (const rel of GEN_TARGETS) {
    const p = path.join(ROOT, rel);
    if (!fs.existsSync(p)) { issues.push(rel + ": ARCHIVO FALTANTE"); continue; }
    const lines = fs.readFileSync(p, "utf8").split("\n");
    let marker = null;
    for (const line of lines) {
      if (GEN_RE.test(line)) { marker = (/[Cc]ontraste|Manual/.test(line)) ? null : line; if (marker) tablesChecked++; continue; }
      if (!marker) continue;
      if (!line.trim().startsWith("|") || /^\|[\s|:-]+\|?\s*$/.test(line)) continue; // no fila / separador
      const refs = [...line.matchAll(TOKEN_REF)].map((m) => m[1].replace(/\.$/, ""));
      if (!refs.length) continue;
      for (const ref of refs) {
        if (!(ref in T.flat)) { issues.push(rel + ": token inexistente `" + ref + "`"); continue; }
        const d = display(T.flat[ref]);
        if (d === null) continue; // token compuesto (sombra): no verificable como celda
        rowsChecked++;
        const want = norm(d);
        if (!norm(line).includes(want)) issues.push(rel + ": `" + ref + "` esperaba \"" + want + "\" — no aparece en la fila");
      }
    }
  }
  // Caso especial: tabla de rampas (filas sin token por celda).
  const cm = fs.readFileSync(path.join(ROOT, "02_identidad-visual/color.md"), "utf8");
  const block = cm.split("dataviz.ramp.*) -->")[1] || "";
  const rampOf = (n) => Object.keys(T.leaves).filter((k) => k.startsWith("dataviz.ramp." + n + "."))
    .sort((a, b) => parseInt(a.split(".").pop()) - parseInt(b.split(".").pop()))
    .map((k) => String(T.resolve(T.leaves[k])).toUpperCase());
  for (const pair of [["Naranja —", "naranja"], ["Verde —", "verde"], ["Neutral —", "neutral"]]) {
    const label = pair[0], name = pair[1];
    const row = block.split("\n").find((l) => l.trim().startsWith("| " + label));
    if (!row) { issues.push("color.md: fila de rampa \"" + label + "\" no hallada"); continue; }
    tablesChecked++;
    const cells = row.split("|").slice(2, 9).map((c) => c.trim().toUpperCase());
    if (cells.join(",") !== rampOf(name).join(",")) issues.push("color.md: rampa " + name + " no coincide con dataviz.ramp." + name);
    else rowsChecked += 7;
  }
  return { issues, tablesChecked, rowsChecked };
}

/* ===================== [A] emitir el paquete dist/skill =================== */
function section(md, title) { // extrae "## title" hasta el próximo "## "
  const re = new RegExp("(^|\\n)## " + title + "[^\\n]*\\n([\\s\\S]*?)(?=\\n## |$)");
  const m = md.match(re);
  return m ? m[2].trim() : "";
}
function emitBundle() {
  fs.mkdirSync(OUT, { recursive: true });
  const meta = T.meta || {};

  const flatResolved = {};
  for (const k of Object.keys(T.flat)) flatResolved[k] = deep(T.flat[k]);
  fs.writeFileSync(path.join(OUT, "tokens.flat.json"), JSON.stringify(flatResolved, null, 2) + "\n");
  fs.writeFileSync(path.join(OUT, "brand-constants.json"), JSON.stringify(buildBrandConstants(), null, 2) + "\n");

  const cssVar = (name, val) => "  --fucai-" + name + ": " + css(val) + ";";
  const pick = (pre) => Object.keys(T.flat).filter((k) => k.startsWith(pre));
  const colorVars = pick("color.").map((k) => cssVar("color-" + k.split(".")[1], T.flat[k]));
  const rampVars = pick("dataviz.ramp.").map((k) => { const s = k.split("."); return cssVar("ramp-" + s[2] + "-" + s[3], T.flat[k]); });
  const radiusVars = pick("radius.").map((k) => cssVar("radius-" + k.split(".")[1], T.flat[k]));
  const elevVars = pick("elevation.").map((k) => cssVar("elevation-" + k.split(".")[1], T.flat[k]));
  const motionVars = pick("motion.").map((k) => cssVar(k.replace("motion.", "").replace(".", "-"), T.flat[k]));
  const fontVars = pick("font.family.").map((k) => cssVar("font-" + k.split(".")[2], T.flat[k]));
  const spaceVars = pick("space.").map((k) => cssVar("space-" + k.split(".")[1], T.flat[k]));
  const cssOut = [
    "/* FUCAI — variables CSS generadas desde 03_tokens/tokens.json. NO editar a mano. */",
    "/* " + (meta.org || "FUCAI") + " · " + (meta.slogan || "") + " */",
    ":root {",
    "  /* Colores */", colorVars.join("\n"),
    "  /* Rampas de visualización de datos */", rampVars.join("\n"),
    "  /* Radios */", radiusVars.join("\n"),
    "  /* Elevación (box-shadow) */", elevVars.join("\n"),
    "  /* Movimiento */", motionVars.join("\n"),
    "  /* Tipografía */", fontVars.join("\n"),
    "  /* Espaciado */", spaceVars.join("\n"),
    "}", "",
  ].join("\n");
  fs.writeFileSync(path.join(OUT, "tokens.css"), cssOut);

  const plat = fs.readFileSync(path.join(ROOT, "01_fundamentos/plataforma-de-marca.md"), "utf8");
  const platOut = [
    "# FUCAI — Plataforma de marca (generado)",
    "> " + (meta.org || "") + " · NIT " + (meta.nit || "") + " · *" + (meta.slogan || "") + "*",
    "> Extraído de 01_fundamentos/plataforma-de-marca.md por build-skill.js.",
    "", "## Propósito", section(plat, "Propósito"),
    "", "## Misión", section(plat, "Misión"),
    "", "## Visión", section(plat, "Visión"),
    "", "## Valores", section(plat, "Valores"),
    "", "## Pilares", section(plat, "Los cuatro pilares"), "",
  ].join("\n");
  fs.writeFileSync(path.join(OUT, "brand-platform.md"), platOut);

  fs.writeFileSync(path.join(OUT, "MANIFEST.md"),
    "# Paquete del skill FUCAI (generado)\n\n" +
    "- Versión de tokens: " + (meta.version || "?") + "\n- Manual: " + (meta.manual || "?") + "\n" +
    "- Generado por: scripts/build-skill.js\n- Fuente de verdad: 03_tokens/tokens.json\n\n" +
    "Contenido: tokens.flat.json (tokens resueltos), brand-constants.json (constantes que " +
    "embeben los generadores), tokens.css (variables web/AppSheet), brand-platform.md " +
    "(misión/visión/valores/pilares). Este paquete representa el skill que INCLUYE todo el " +
    "sistema de diseño. dist/ no se versiona (ver .gitignore).\n");

  return fs.readdirSync(OUT);
}

/* ================================== main ================================= */
function main() {
  const brand = buildBrandConstants();
  console.log("\n=== build-skill — Sistema de Diseño FUCAI ===");
  console.log("Fuente de verdad:", path.relative(ROOT, T.tokensPath));
  console.log("\n[A] Constantes de marca resueltas desde tokens.json:");
  console.log("    color :", JSON.stringify(brand.color));
  console.log("    font  :", JSON.stringify(brand.font));
  console.log("    sizePt:", JSON.stringify(brand.sizePt));
  console.log("    ramp  :", JSON.stringify(brand.ramp));

  console.log("\n[B] Verificación de tablas [GEN] vs tokens:");
  const r = checkGenTables();
  console.log("    tablas verificadas: " + r.tablesChecked + " | celdas/filas verificadas: " + r.rowsChecked);
  if (r.issues.length) r.issues.forEach((i) => console.log("    ✗ " + i));
  else console.log("    ✓ todas las tablas [GEN] coinciden con los tokens");

  if (WRITE) {
    const files = emitBundle();
    console.log("\n[A] dist/skill/ emitido:", files.join(", "));
  } else {
    console.log("\n(usa --write para emitir dist/skill/)");
  }
  console.log("=== fin ===\n");
  return r.issues.length ? 1 : 0;
}

if (require.main === module) process.exit(main());
module.exports = { buildBrandConstants, checkGenTables, emitBundle, GEN_TARGETS };
