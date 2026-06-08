import { days } from "../code/sessions";

function colourForType(
  type: "Lecture" | "Practical" | "Meal" | "Break" | "Other",
) {
  switch (type) {
    case "Lecture":
      return "bg-emerald-100";
    case "Practical":
      return "bg-pink-100";
    case "Meal":
      return "bg-yellow-50";
    case "Break":
      return "bg-white";
    case "Other":
      return "bg-sky-100";
  }
}

export function Programme() {
  return (
    <main className="flex min-h-screen w-full flex-col pb-40 sm:pb-24">
      <h2 className="mt-6 text-center text-xl font-semibold text-gray-700 dark:text-gray-200">
        Programme
      </h2>
      <div className="m-auto mt-6 max-w-3xl text-center text-lg text-gray-700 dark:text-gray-200">
        <p className="mb-4">The programme for ECS12 will be published here soon.</p>
        <p>Please check back later </p>
      </div>
    </main>
  );
}
