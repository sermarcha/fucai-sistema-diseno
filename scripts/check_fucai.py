#!/usr/bin/env python3
"""
check_fucai.py — QA objetiva de un artefacto FUCAI (.docx, .pptx, .xlsx).
Ejecútalo después de generar cualquier entregable.

    python3 scripts/check_fucai.py <archivo>

Los tres formatos son OOXML (un zip con XML dentro), así que se revisan sin
dependencias externas. Regla común a los tres: todo color explícito debe ser un
token de 03_tokens/tokens.json.

HARD checks (must pass, exit 1 on failure):
  - White page background declared (<w:background w:color="FFFFFF"/>)
  - No invalid rId0 relationship in any header/footer rels (the bug that makes Word reject files)
SOFT checks (warn only):
  - Section count is small (<= 4)
  - Orange #E94513 is used; no obvious off-brand colors (generic blue/red)
  - Space Grotesk and Calibri are referenced
"""
import sys, re, zipfile, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "lib"))
from tokens import C, FONT, PALETTE  # naranja, familias y paleta desde 03_tokens/tokens.json

OK, WARN, FAIL = "PASS", "WARN", "FAIL"
ORANGE = C["primary"]  # desde tokens.json
OFF_BRAND = {"0000FF": "azul genérico", "4472C4": "azul Office", "FF0000": "rojo genérico",
             "1F4E79": "azul oscuro Office", "5B9BD5": "azul Office claro"}

def _report(path, results, hard_fail):
    print(f"\nQA FUCAI — {path}\n" + "-" * 60)
    for status, msg in results:
        mark = {OK: "✓", WARN: "!", FAIL: "✗"}[status]
        print(f"[{status}] {mark} {msg}")
    print("-" * 60)
    if hard_fail:
        print("RESULTADO: ✗ Hay fallos duros. NO entregar hasta corregir.\n")
        return 1
    print("RESULTADO: ✓ Reglas duras superadas. Revisa los WARN y haz QA visual antes de entregar.\n")
    return 0


def _off_palette(xml, pattern):
    """Devuelve los hex explícitos del XML que no son ningún token."""
    fuera = {}
    for m in re.finditer(pattern, xml):
        hx = "#" + m.group(1)[-6:].upper()
        if hx not in PALETTE:
            fuera[hx] = fuera.get(hx, 0) + 1
    return fuera


def _fuentes(results, all_xml):
    sg = FONT["heading"].replace(" ", "") in all_xml.replace(" ", "")
    cal = FONT["body"] in all_xml
    if sg and cal:
        results.append((OK, "Tipografías Space Grotesk (títulos) y Calibri (cuerpo) referenciadas."))
    else:
        miss = [n for n, ok in ((FONT["heading"], sg), (FONT["body"], cal)) if not ok]
        results.append((WARN, "Falta(n) tipografía(s): " + ", ".join(miss) + "."))


def check_pptx(z, names):
    """Presentación: el color explícito de las diapositivas debe ser de la paleta."""
    results, hard_fail = [], False
    slides = [n for n in names if re.match(r"ppt/slides/slide\d+\.xml$", n)]
    slide_xml = "".join(z.read(n).decode("utf-8", "ignore") for n in slides)
    all_xml = "".join(z.read(n).decode("utf-8", "ignore") for n in names if n.endswith(".xml"))

    # HARD — deriva de color en las diapositivas
    fuera = _off_palette(slide_xml, r'<a:srgbClr val="([0-9A-Fa-f]{6})"')
    if fuera:
        results.append((FAIL, "Colores fuera de los tokens en las diapositivas: " +
                        ", ".join(f"{h} (×{n})" for h, n in sorted(fuera.items()))))
        hard_fail = True
    else:
        results.append((OK, f"Todo color explícito de las {len(slides)} diapositivas es un token."))

    # SOFT — el tema puede arrastrar defaults de Office
    tema = "".join(z.read(n).decode("utf-8", "ignore") for n in names if n.startswith("ppt/theme/"))
    ft = _off_palette(tema, r'<a:srgbClr val="([0-9A-Fa-f]{6})"')
    if ft:
        results.append((WARN, f"El tema arrastra {len(ft)} color(es) ajeno(s) a la paleta "
                              "(defaults de Office). No afecta a lo visible, pero conviene limpiar la plantilla."))
    else:
        results.append((OK, "El tema no arrastra colores ajenos a la paleta."))

    if C["primary"] in all_xml.upper():
        results.append((OK, f"Naranja FUCAI #{C['primary']} presente."))
    else:
        results.append((WARN, f"No se detectó el naranja #{C['primary']}. ¿Se aplicó la marca?"))
    _fuentes(results, all_xml)
    return results, hard_fail


def check_xlsx(z, names):
    """Hoja de cálculo: los rellenos y fuentes de styles.xml deben ser de la paleta."""
    results, hard_fail = [], False
    styles = z.read("xl/styles.xml").decode("utf-8", "ignore") if "xl/styles.xml" in names else ""
    all_xml = "".join(z.read(n).decode("utf-8", "ignore") for n in names if n.endswith(".xml"))

    # HARD — deriva de color en los estilos (rgb viene en ARGB: FFxxxxxx).
    # Solo <fonts>, <fills> y <borders>: el bloque <colors><indexedColors> es la tabla
    # heredada que Excel escribe en TODO .xlsx, no colores en uso. Revisarla da 40
    # falsos positivos en cualquier archivo.
    usados = "".join(m.group(0) for m in
                     re.finditer(r"<(fonts|fills|borders)\b.*?</\1>", styles, re.S))
    fuera = _off_palette(usados, r'rgb="((?:[0-9A-Fa-f]{2})?[0-9A-Fa-f]{6})"')
    if fuera:
        results.append((FAIL, "Colores fuera de los tokens en xl/styles.xml: " +
                        ", ".join(f"{h} (×{n})" for h, n in sorted(fuera.items()))))
        hard_fail = True
    else:
        results.append((OK, "Todo color explícito de los estilos es un token."))

    if C["primary"] in styles.upper():
        results.append((OK, f"Naranja FUCAI #{C['primary']} presente en los estilos."))
    else:
        results.append((WARN, f"No se detectó el naranja #{C['primary']} en los estilos. "
                              "El encabezado de tabla va naranja con texto blanco."))
    _fuentes(results, all_xml)
    return results, hard_fail


def main(path):
    ext = os.path.splitext(path)[1].lower()
    if ext not in (".docx", ".pptx", ".xlsx"):
        print(f"[{FAIL}] Formato no soportado: {ext or '(sin extensión)'}. Usa .docx, .pptx o .xlsx.")
        return 2
    try:
        z = zipfile.ZipFile(path)
    except Exception as e:
        print(f"[{FAIL}] No se pudo abrir el archivo: {e}")
        return 1
    names = z.namelist()
    if ext == ".pptx":
        return _report(path, *check_pptx(z, names))
    if ext == ".xlsx":
        return _report(path, *check_xlsx(z, names))
    doc_xml = z.read("word/document.xml").decode("utf-8", "ignore") if "word/document.xml" in names else ""
    all_xml = "".join(z.read(n).decode("utf-8", "ignore") for n in names if n.endswith(".xml") or n.endswith(".rels"))

    results, hard_fail = [], False

    # HARD 1 — white page background
    if re.search(r'<w:background[^>]*w:color="FFFFFF"', doc_xml):
        results.append((OK, "Fondo de página blanco declarado (#FFFFFF)."))
    else:
        results.append((FAIL, "Falta el fondo de página blanco. Usa background:{color:'FFFFFF'} en el Document."))
        hard_fail = True

    # HARD 2 — no rId0 in header/footer rels
    bad = [n for n in names if re.search(r"word/(header|footer)\d*\.xml\.rels$", n)
           and 'Id="rId0"' in z.read(n).decode("utf-8", "ignore")]
    if bad:
        results.append((FAIL, f"rId0 inválido en {', '.join(bad)} (imagen en header/footer). Usa header de solo texto."))
        hard_fail = True
    else:
        results.append((OK, "Sin rId0 inválido en encabezados/pies (no hay imágenes en header/footer)."))

    # SOFT — section count
    n_sect = doc_xml.count("<w:sectPr")
    if n_sect <= 4:
        results.append((OK, f"Secciones: {n_sect} (arquitectura sana, 2–3 esperadas)."))
    else:
        results.append((WARN, f"Secciones: {n_sect}. Demasiadas — riesgo de archivo malformado. Usa 2–3."))

    # SOFT — palette
    if ORANGE in all_xml.upper():
        results.append((OK, f"Naranja FUCAI #{ORANGE} presente."))
    else:
        results.append((WARN, f"No se detectó el naranja #{ORANGE}. ¿Se aplicó la marca?"))
    found_off = {hex_: name for hex_, name in OFF_BRAND.items() if hex_ in all_xml.upper()}
    if found_off:
        results.append((WARN, "Colores fuera de marca detectados: " +
                        ", ".join(f"#{h} ({n})" for h, n in found_off.items())))
    else:
        results.append((OK, "Sin colores azul/rojo genéricos fuera de paleta."))

    # SOFT — fonts
    sg = FONT["heading"].replace(" ", "") in all_xml.replace(" ", "")
    cal = FONT["body"] in all_xml
    if sg and cal:
        results.append((OK, "Tipografías Space Grotesk (títulos) y Calibri (cuerpo) referenciadas."))
    else:
        miss = []
        if not sg: miss.append("Space Grotesk")
        if not cal: miss.append("Calibri")
        results.append((WARN, "Falta(n) tipografía(s): " + ", ".join(miss) + "."))

    return _report(path, results, hard_fail)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python3 check_fucai.py <archivo.docx|.pptx|.xlsx>")
        sys.exit(2)
    sys.exit(main(sys.argv[1]))
