import { days } from "../code/sessions";

const speakers = [
  ...new Map(
    days
      .flatMap((day) => day.sessions)
      .flatMap((session) => session.speakers ?? [])
      .map((person) => [person.name, person]),
  ).values(),
].sort((a, b) => a.name.split(" ").pop()!.localeCompare(b.name.split(" ").pop()!));

export function People() {
  return (
    <main className="speakers">
      <h2 className="speakers-heading">Speakers</h2>
      <ul className="speakers-list">
        {speakers.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </main>
  );
}
