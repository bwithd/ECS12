export function CourseMaterials() {
  return (
    <main className="flex min-h-screen w-full flex-col gap-4 bg-white p-4 pb-32 text-slate-800 sm:pb-24 dark:bg-slate-900 dark:text-slate-100">
      <h1 className="mb-2 text-2xl font-bold">Course Materials</h1>

      <p className="text-gray-600 dark:text-gray-400">
        Placeholder page — materials and links will be added here.
      </p>

      <section className="mt-6">
        <h2 className="mb-2 text-xl font-semibold">CCP4 Cloud Tutorials</h2>
        <div className="rounded border border-dashed border-gray-300 p-4 text-gray-500 dark:border-gray-700">
          Tutorials placeholder
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-2 text-xl font-semibold">Slides</h2>
        <div className="rounded border border-dashed border-gray-300 p-4 text-gray-500 dark:border-gray-700">
          Slides placeholder
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-2 text-xl font-semibold">Other materials</h2>
        <div className="rounded border border-dashed border-gray-300 p-4 text-gray-500 dark:border-gray-700">
          Additional materials placeholder
        </div>
      </section>
    </main>
  );
}

export default CourseMaterials;
