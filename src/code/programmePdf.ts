import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";

import { colourForType, days } from "./sessions";

const hexToRgb = (hex: string): [number, number, number] => [
  parseInt(hex.slice(1, 3), 16),
  parseInt(hex.slice(3, 5), 16),
  parseInt(hex.slice(5, 7), 16),
];

const headerFill: [number, number, number] = [7, 89, 133]; // sky-800

export function downloadProgrammePdf() {
  const doc = new jsPDF({ format: "a4" });
  const margin = 15;

  doc.setFontSize(18);
  doc.text(
    "ECS12 School 2027",
    margin,
    20,
    {
      maxWidth: doc.internal.pageSize.getWidth() - 2 * margin,
    },
  );
  doc.setFontSize(14);
  doc.text("Programme", margin, 36);

  let y = 42;
  for (const day of days) {
    autoTable(doc, {
      startY: y,
      margin: { left: margin, right: margin },
      head: [[{ content: day.title, colSpan: 3 }]],
      body: day.sessions.map((s) => [
        s.time,
        s.title,
        s.speakers?.map((p) => p.name).join(", ") ?? "",
      ]),
      theme: "grid",
      rowPageBreak: "avoid",
      headStyles: { fillColor: headerFill, fontSize: 11, halign: "center" },
      styles: { fontSize: 9, lineColor: [220, 220, 220], lineWidth: 0.1 },
      columnStyles: {
        0: { cellWidth: 14 },
        1: { fontStyle: "bold" },
        2: { cellWidth: 60 },
      },
      didParseCell: (data) => {
        if (data.section === "body") {
          data.cell.styles.fillColor =
            hexToRgb(colourForType[day.sessions[data.row.index].type]);
        }
      },
    });
    y = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable
      .finalY + 8;
  }

  doc.save("ECS12-programme.pdf");
}
