import { useState } from "react";

import { colourForType, days } from "../code/sessions";

export function Programme() {
  const [selected, setSelected] = useState(0);
  const day = days[selected];

  const downloadPdf = async () => {
    const { downloadProgrammePdf } = await import("../code/programmePdf");
    downloadProgrammePdf();
  };

  return (
    <main className="programme">
      <div className="programme-download">
        <button onClick={downloadPdf} className="programme-download-btn">
          <span className="material-symbols-outlined">download</span>
          Download PDF
        </button>
      </div>

      <h2 className="programme-heading">Programme</h2>

      <div role="tablist" className="day-tabs">
        {days.map((d, i) => (
          <button
            key={d.title}
            role="tab"
            aria-selected={i === selected}
            onClick={() => setSelected(i)}
            className={i === selected ? "day-tab active" : "day-tab"}
          >
            <span className="day-tab-day">{d.tab.day}</span>
            <span className="day-tab-sub">{d.tab.sub}</span>
          </button>
        ))}
      </div>

      <div role="tabpanel" className="programme-panel">
        <h2 className="programme-day-title">{day.title}</h2>
        <table className="programme-table">
          <tbody>
            {day.sessions.map((session, idx) => (
              <tr key={idx}>
                <td
                  className="programme-time"
                  style={{ backgroundColor: colourForType[session.type] }}
                >
                  {session.time}
                </td>
                <td className="programme-slot">
                  <p className="programme-title">{session.title}</p>
                  <p className="programme-speakers">
                    {session.speakers?.map((s) => s.name).join(", ")}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
