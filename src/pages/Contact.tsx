import { Heading, Link } from "../components/Elements";
import { people } from "../code/people";

export function Contact() {
  const organisers = people.filter((person) => person.tags?.includes("Organiser"));

  return (
    <main className="contact-page mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 text-gray-900 dark:text-gray-100 sm:px-8 lg:px-12">
      <div className="contact-intro max-w-4xl">
        <Heading text="Contact us" />
        <p className="max-w-3xl">
          Feel free to contact organisers at <a href="mailto:ecs12@listserv.stfc.ac.uk">ecs12@listserv.stfc.ac.uk</a>  should you have any
          queries related to the school, including registration, programme, or
          accommodation. 
        </p>
      </div>
      <div className="contact-grid">
        {organisers.map((person) => (
          <article key={person.name} className="contact-card">
            <img
              src={`${import.meta.env.BASE_URL}people/${person.photo}`}
              alt={person.name}
              className="contact-photo"
            />
            <p className="contact-name">{person.name}</p>
            {/* {person.email && (
              <Link href={`mailto:${person.email}`} text={person.email} />
            )} */}
          </article>
        ))}
      </div>
    </main>
  );
}
