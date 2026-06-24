# FUCAI — Hojas de cálculo (.xlsx)

**Construye con el helper:** `scripts/fucai_xlsx.py` (openpyxl). Valida fórmulas con `/mnt/skills/public/xlsx/scripts/recalc.py`.

```python
import sys; sys.path.insert(0, "<skill>/scripts")
from fucai_xlsx import apply_fucai_header, apply_fucai_body, style_title, RAMP_ORANGE, RAMP_GREEN
from openpyxl import Workbook
wb = Workbook(); ws = wb.active
ws.append(["Territorio","Comunidades","Familias"]); ws.append(["Bajo Caquetá",6,184])
apply_fucai_header(ws)                 # fila 1: naranja + texto blanco
apply_fucai_body(ws, numeric_from_col=2)  # cuerpo: filas alternas arena, números a la derecha
wb.save("/mnt/user-data/outputs/FUCAI_Presupuesto_Tema_2026-06.xlsx")
```

## Reglas
- Minimalista: encabezado naranja, filas alternas `#F6F3E9`, **solo filete inferior** (sin cuadrícula completa).
- Números a la derecha, texto a la izquierda, **unidades en el encabezado** ("Monto (COP)").
- Títulos: Space Grotesk naranja (`style_title`). Cuerpo: Calibri.
- Gráficas: usa `RAMP_ORANGE` (serie principal), `RAMP_GREEN` (solo territorio/naturaleza), neutros para ejes. Sin azul/rojo/morado/amarillo.
- Logo opcional con `openpyxl.drawing.image.Image` en A1, proporción 2:1.
