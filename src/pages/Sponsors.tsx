import { confirmedSponsors } from "../code/sponsors";

export function Sponsors() {
  return (
    <main className="sponsors">
      <h2 className="sponsors-heading">Sponsors</h2>
      <p className="sponsors-intro">
        ECS12 is made possible by the generous support of our sponsors.
      </p>
      <ul className="sponsors-list">
        {confirmedSponsors.map((sponsor) => (
          <li key={sponsor.name}>
            <a
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              title={sponsor.name}
            >
              <img
                src={`${import.meta.env.BASE_URL}logos/${sponsor.logo}`}
                alt={sponsor.name}
              />
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
