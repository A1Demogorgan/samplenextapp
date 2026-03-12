export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-rose-100 via-amber-50 to-sky-100 px-6 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(251,191,36,0.18),_transparent_30%)]" />
      <section className="relative w-full max-w-4xl rounded-[2rem] border border-white/70 bg-white/75 p-10 text-center shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur md:p-16">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-500">
          Welcome
        </p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-900 md:text-7xl">
          Jelsiya and Dashwanth
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
          A simple landing page created to warmly welcome Jelsiya and
          Dashwanth.
        </p>
      </section>
    </main>
  );
}
