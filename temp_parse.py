import xml.etree.ElementTree as ET
import os

ss_path = "/Users/dripto/.gemini/jetski/brain/59b07e2c-d0ff-462c-8bc9-4c5124ba7625/scratch/qec_program/xl/sharedStrings.xml"
sheet_path = "/Users/dripto/.gemini/jetski/brain/59b07e2c-d0ff-462c-8bc9-4c5124ba7625/scratch/qec_program/xl/worksheets/sheet2.xml"

ns = {'ns': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}

# Read shared strings
shared_strings = []
tree = ET.parse(ss_path)
root = tree.getroot()
for si in root.findall('ns:si', ns):
    t = si.find('ns:t', ns)
    if t is not None:
        shared_strings.append(t.text if t.text else "")
    else:
        text = ""
        for r in si.findall('ns:r', ns):
            rt = r.find('ns:t', ns)
            if rt is not None and rt.text:
                text += rt.text
        shared_strings.append(text)

# Read sheet2
tree = ET.parse(sheet_path)
root = tree.getroot()
sheet_data = root.find('ns:sheetData', ns)

for row in sheet_data.findall('ns:row', ns):
    r_idx = row.get('r')
    row_content = []
    for c in row.findall('ns:c', ns):
        ref = c.get('r')
        t = c.get('t')
        v = c.find('ns:v', ns)
        
        val = ""
        if v is not None:
            val = v.text
            if t == 's':
                idx = int(val)
                if idx < len(shared_strings):
                    val = shared_strings[idx]
                else:
                    val = f"ERR: idx {idx}"
        row_content.append(f"{ref}: {val}")
    print(f"Row {r_idx}: {' | '.join(row_content)}")
