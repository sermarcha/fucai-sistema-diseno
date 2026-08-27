/**
 * fucai_specimen.js — Muestrario visual del Sistema de Diseño FUCAI.
 * =============================================================================
 * Genera dist/specimen.html: una página autocontenida que muestra la marca
 * (paleta con contraste calculado, rampas, tipografía, botones, tabla, espaciado)
 * leyendo TODO desde 03_tokens/tokens.json vía lib/tokens. Sin valores quemados.
 *
 * Uso:  npm run specimen   →  abre dist/specimen.html en el navegador.
 * Sirve como QA visual: si un token cambia, el specimen cambia con él.
 * =============================================================================
 */
const fs = require("fs");
const path = require("path");
const T = require("../lib/tokens.js");

const ROOT = path.join(__dirname, "..", "..");
const OUT_DIR = path.join(ROOT, "dist");
const OUT = path.join(OUT_DIR, "specimen.html");

const hex = (p) => String(T.raw(p)).toUpperCase();
const pt = (p) => T.raw(p).value;

/* --- contraste WCAG (misma fórmula que build-skill.js) --- */
function relLum(h) {
  const s = String(h).replace("#", "");
  const ch = [0, 2, 4].map((i) => parseInt(s.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
  return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
}
const contrast = (a, b) => {
  const la = relLum(a), lb = relLum(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
};
const ratio = (a, b) => (Math.round(contrast(a, b) * 10) / 10) + ":1";

/* --- datos desde tokens --- */
const paleta = [
  ["color.naranja", "Naranja FUCAI — primario"],
  ["color.arena", "Arena — calidez"],
  ["color.verde", "Verde Amazónico — SOLO territorio"],
  ["color.blanco", "Blanco — fondo"],
  ["color.negro", "Negro — texto"],
  ["color.naranja-oscuro", "Naranja oscuro — hover de acciones"],
  ["color.durazno", "Durazno — solo fondo suave"],
  ["color.arena-claro", "Arena claro — filas/cajas"],
  ["color.verde-claro", "Verde claro — solo fondo de badges"],
  ["color.gris-texto", "Gris texto — captions"],
];
const rampas = ["naranja", "verde", "neutral"].map((n) => [n,
  [1, 2, 3, 4, 5, 6, 7].map((i) => String(T.raw("dataviz.ramp." + n + "." + i)).toUpperCase())]);
const spaces = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"];

const N = hex("color.naranja"), NO = hex("color.naranja-oscuro"), A = hex("color.arena"),
  AC = hex("color.arena-claro"), V = hex("color.verde"), B = hex("color.blanco"),
  K = hex("color.negro"), GT = hex("color.gris-texto"), GB = hex("color.gris-borde"),
  GL = hex("color.gris-linea");

const swatch = ([tok, label]) => {
  const h = hex(tok);
  const dark = relLum(h) < 0.4;
  return `<div class="sw" style="background:${h};color:${dark ? B : K};border:1px solid ${GL}">
    <strong>${h}</strong><span>${tok}</span><em>${label}</em>
    <small>vs blanco ${ratio(h, B)} · vs negro ${ratio(h, K)}</small></div>`;
};
const rampRow = ([n, cells]) => `<div class="ramp"><span class="rlabel">${n}</span>${cells
  .map((c) => `<span class="cell" style="background:${c}" title="${c}"></span>`).join("")}</div>`;
const spaceRow = spaces.map((s) => {
  const v = pt("space." + s);
  return `<div class="sp"><code>space.${s}</code><span style="width:${v * 2}px"></span><small>${v} pt</small></div>`;
}).join("");

const html = `<!doctype html><html lang="es"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>FUCAI — Specimen del sistema de diseño</title>
<style>
  /* Generado desde 03_tokens/tokens.json — NO editar a mano. */
  :root { --naranja:${N}; --arena:${A}; --verde:${V}; }
  * { box-sizing: border-box; }
  body { margin:0; padding:48px; background:${B}; color:${K};
    font-family: Calibri, Carlito, Arial, sans-serif; line-height:1.3; max-width:960px; }
  h1,h2 { font-family:'Space Grotesk','Arial Black',sans-serif; color:${N}; letter-spacing:-0.02em; }
  h1 { font-size:28pt; margin:0 0 8pt; } h2 { font-size:16pt; margin:32pt 0 12pt; }
  .pilar { font-style:italic; color:${GT}; margin:0 0 24pt; }
  .grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(170px,1fr)); gap:8px; }
  .sw { padding:12px; border-radius:4px; min-height:110px; display:flex; flex-direction:column; gap:2px; }
  .sw span,.sw em,.sw small { font-size:10px; } .sw strong { font-size:13px; }
  .ramp { display:flex; align-items:center; gap:2px; margin:4px 0; }
  .rlabel { width:70px; font-size:11px; color:${GT}; }
  .cell { flex:1; height:28px; border:1px solid ${GL}; }
  .btn { display:inline-block; padding:8px 20px; border-radius:4px; font-weight:bold;
    background:${N}; color:${B}; border:none; cursor:pointer; margin-right:8px;
    transition: background 150ms cubic-bezier(0.2,0,0,1); font-size:14px; }
  .btn:hover { background:${NO}; }
  .btn.sec { background:transparent; color:${N}; border:2px solid ${N}; }
  .btn.sec:hover { color:${NO}; border-color:${NO}; background:transparent; }
  .softbox { background:${hex("color.durazno")}; color:${K}; padding:12px; border-radius:4px; font-size:13px; }
  table { border-collapse:collapse; width:100%; font-size:13px; }
  th { background:${N}; color:${B}; text-align:left; padding:8px; }
  td { padding:8px; border-bottom:1px solid ${GL}; }
  tr:nth-child(even) td { background:${AC}; }
  .banda { background:${A}; padding:16px; border-radius:0; margin-top:8px; }
  .banda em { color:${GT}; }
  .sp { display:flex; align-items:center; gap:8px; margin:2px 0; }
  .sp span { display:inline-block; height:12px; background:${N}; }
  .sp code,.sp small { font-size:11px; color:${GT}; width:80px; }
  .verde-note { color:${V}; font-weight:bold; }
  footer { margin-top:48px; border-top:3px solid ${N}; padding-top:8px; font-size:11px; color:${GB}; font-style:italic; }
</style></head><body>
<h1>Sistema de Diseño FUCAI</h1>
<p class="pilar">Nuestro centro es la periferia</p>
<p>Muestrario generado desde <code>03_tokens/tokens.json</code> (v${(T.meta || {}).version || "?"}).
Si un token cambia, esta página cambia. Regenerar: <code>npm run specimen</code>.</p>

<h2>Paleta y contraste</h2>
<div class="grid">${paleta.map(swatch).join("\n")}</div>

<h2>Rampas de visualización de datos</h2>
${rampas.map(rampRow).join("\n")}
<p class="verde-note">La rampa verde es exclusiva de territorio/naturaleza.</p>

<h2>Tipografía</h2>
<h1 style="margin:0">Título H1 — Space Grotesk Bold ${pt("font.size.h1")} pt</h1>
<h2 style="margin:8pt 0">H2 naranja ${pt("font.size.h2")} pt</h2>
<p>Cuerpo Calibri ${pt("font.size.body")} pt, interlineado ${T.raw("font.lineHeight.body")}. Las comunidades
son protagonistas: FUCAI acompaña, articula y fortalece. <strong>Los datos de
impacto van en cifra</strong>: 8 comunidades, 5.000 consultas.</p>
<p style="font-size:${pt("font.size.caption")}pt;color:${GT};font-style:italic">Caption ${pt("font.size.caption")} pt gris — pies de foto con contexto y crédito.</p>

<h2>Acciones (hover = naranja oscuro, nunca durazno)</h2>
<button class="btn">Conoce nuestro trabajo</button>
<button class="btn sec">Súmate</button>
<p class="softbox">Caja suave sobre durazno: siempre con texto oscuro (${ratio(hex("color.durazno"), K)}).
El durazno nunca es color de texto sobre claro (${ratio(hex("color.durazno"), B)} con blanco).</p>

<h2>Tabla FUCAI (solo filetes horizontales)</h2>
<table><tr><th>Territorio</th><th>Comunidades</th><th>Monto (COP)</th></tr>
<tr><td>La Guajira</td><td>12</td><td style="text-align:right">45.000.000</td></tr>
<tr><td>Amazonas</td><td>8</td><td style="text-align:right">38.500.000</td></tr>
<tr><td>Cauca</td><td>5</td><td style="text-align:right">21.300.000</td></tr></table>

<h2>Banda arena (portada)</h2>
<div class="banda">Agosto de 2026 · CC217 Naane (OIKOS–AICS)<br>
<em>Nuestro centro es la periferia</em> — slogan en gris texto (${ratio(A, GT)}), nunca naranja pequeño sobre arena (${ratio(A, N)}).</div>

<h2>Escala de espaciado (base 8 pt)</h2>
${spaceRow}

<footer>Fundación Caminos de Identidad — FUCAI · www.fucaicolombia.org · generado por scripts/generators/fucai_specimen.js</footer>
</body></html>`;

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT, html);
console.log("specimen generado:", path.relative(ROOT, OUT));
