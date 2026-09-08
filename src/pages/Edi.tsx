import { Heading, InternalLink, List } from "../components/Elements";

export function Edi() {
  return (
    <main className="m-auto flex min-h-screen max-w-7xl flex-col gap-6 bg-white pb-24 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      
      <section>
        <Heading text="Statement on Equity and Inclusion" />

        <p>
          The ECS12 Organising Committee supports and promotes gender equality
          in line with the IUCr policy.
        </p>

        <p>
          The International Union of Crystallography aims to achieve gender
          balance across its activities, while also recognising diversity,
          geographic representation, and academic disciplines.
        </p>

        <p>
          To support this goal, IUCr promotes fair representation in committees,
          events, and leadership roles. Event organisers are expected to
          demonstrate efforts toward gender balance.
        </p>

        <p>
          The ECS12 Organising Committee also supports both IUCr and CCP4 Codes
          of Conduct.
        </p>

        <p>
          <strong>No form of harassment will be tolerated.</strong>
        </p>

        <p>
          We are committed to a diverse and balanced panel of speakers,
          welcoming individuals of all:
        </p>

        <List>
          <li>Races and ethnicities</li>
          <li>Genders and gender identities</li>
          <li>Ages and abilities</li>
          <li>Religions and beliefs</li>
          <li>Sexual orientations</li>
        </List>

        <p>
          All speakers must agree to the Code of Conduct before participating.
          Attendees must also agree to the CCP4 Code of Conduct during
          registration.
        </p>
      </section>

      <section>
        <Heading text="CCP4 Code of Conduct" />

        <p><strong>Be professional.</strong></p>

        <p>
          Harassment, discrimination, or exclusionary behaviour is not
          acceptable. This includes:
        </p>

        <List>
          <li>Disrupting talks or events</li>
          <li>Inappropriate physical contact</li>
          <li>Unwanted attention or intimidation</li>
          <li>Recording individuals without consent</li>
          <li>Offensive or belittling comments</li>
        </List>

        <p>
          These behaviours may relate to characteristics such as gender identity,
          sexual orientation, disability, age, appearance, ethnicity,
          nationality, or religion.
        </p>

        <p>
          All communication must remain respectful and appropriate for a
          professional audience. Sexual language or imagery is not allowed.
        </p>

        <p>
          <strong>Be kind and respectful.</strong> Do not insult or put down
          others.
        </p>

        <p>
          Organisers reserve the right to remove anyone who does not follow this
          code.
        </p>
      </section>

      <section>
        <Heading text="Incident Reporting and Resolution" />

        <p>
          If someone makes you or others feel unsafe or unwelcome, you are
          encouraged to speak up.
        </p>

        <p>
          If you are not comfortable addressing the situation directly, report it
          to a member of the Organising Committee as soon as possible.
        </p>

        <p>
          Reports can be submitted via the{" "}
          <InternalLink to="/contact" text="contact page" />. Please include:
        </p>

        <List>
          <li>What happened</li>
          <li>Who was involved</li>
          <li>Any relevant context</li>
        </List>

        <p>
          The Committee will handle all reports seriously and work to resolve
          issues appropriately.
        </p>

        <p>
          Thank you for helping maintain a welcoming, respectful, and inclusive
          environment.
        </p>
      </section>

      <section>
        <Heading text="Sanctions" />

        <p>
          If someone is asked to stop inappropriate behaviour, they must comply
          immediately.
        </p>

        <p>
          Organisers may take appropriate action, including warnings, removal
          from events, or banning from future participation.
        </p>

        <p>Possible actions include:</p>

        <List>
          <li>Issuing a warning</li>
          <li>Restricting interaction with others</li>
          <li>Ending a talk early</li>
          <li>Withholding publication of content</li>
          <li>Removing speaking privileges</li>
          <li>Ending event responsibilities</li>
          <li>Removing the individual from the event</li>
          <li>Blocking on social platforms</li>
          <li>Banning from future events</li>
          <li>Publishing an anonymous report</li>
          <li>Informing the individual’s employer</li>
        </List>
      </section>

    </main>
  );
}