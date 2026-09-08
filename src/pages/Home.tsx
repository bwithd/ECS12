import { InternalLink } from "../components/Elements";

export function Home() {
  return (
    <main className="m-auto flex min-h-screen max-w-7xl flex-col gap-4 bg-white pb-32 text-gray-900 sm:pb-24 dark:bg-gray-900 dark:text-gray-100">
      <div className="grid gap-6">
        <div>
          <h1 className="mb-1 flex w-full flex-col items-start gap-1 text-left text-3xl font-bold md:-translate-x-2 md:flex-row md:items-baseline md:text-center">
            {/* <img
              src="/logos/ECS12-logo.png"
              alt="ECS12"
              style={{ width: "140px", height: "auto", display: "block", transform: "translateX(-150px) translateY(140px)" }}
              className="shrink-0"
            /> */}
            <span>Structure‑Based Drug Discovery:  <br /> From Bench to Bedside</span>
          </h1>
          {/* <p className="text-center md:text-left text-lg">
            <b>21–25 June 2027</b> — Rutherford Appleton Laboratory, Harwell Science
            and Innovation Campus, Didcot, Oxford, UK
          </p> */}

          <p className="mt-4">
            <strong>
              Five‑day school dedicated to structure‑based drug discovery, combining lectures with hands‑on, expert‑led tutorials.
            </strong>
          </p>

          <p>
            Participants will gain practical experience and a working understanding of the full DMTA (Design–Make–Test–Analyse) workflow, with practical sessions and lectures covering the essentials of crystallography and fragment‑based drug discovery.
          </p>

          <h3 className="mt-4 mb-2 text-lg font-semibold">Hands‑on training includes</h3>
          <ul className="list-disc pl-6">
            <li>High‑throughput crystallography, experiment preparation and data dissemination</li>
            <li>Data analysis workflows and best practices</li>
            <li>Algorithmic follow‑up design and candidate selection</li>
            <li>Digitised chemistry and affinity measurement techniques</li>
            <li>Introduction to Design–Make–Test aspects of the DMTA pipeline</li>
            <li>Lectures and expert tutorials on structure determination and ligand optimisation</li>
          </ul>

          <p className="mt-4">
            The preliminary <InternalLink to="programme" text="programme " />
             will be published here soon.
          </p>

          <p className="mt-2">
            <InternalLink to="location" text="More details and directions" />
          </p>
        </div>
      </div>
    </main>
  );
}
