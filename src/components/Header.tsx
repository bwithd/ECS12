import { Nav } from "./Nav";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-left">
          <img className="header-logo" src="/logos/ECS12-logo_dm.png" alt="ECS12 logo" />
          <div className="header-meta">
           <div className="header-eyebrow">ECS12</div>
           <h1 className="header-title">STRUCTURE-BASED DRUG DESIGN: FROM BENCH TO BEDSIDE</h1>
           <p className="header-sub"></p>
           <div className="header-badge"> · 21–25 June 2027, Harwell campus, UK</div>
          </div>
      </div>
      <div className="header-right">
        <Nav />
      </div>
    </header>
  );
}
