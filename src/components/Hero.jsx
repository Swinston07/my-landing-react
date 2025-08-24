import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-16 pb-12 md:grid-cols-2">
      <Reveal>
        <div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Custom Landing Pages —{" "}
            <span className="bg-gradient-to-r from-ocean-300 to-kelp-300 bg-clip-text text-transparent">
              No Templates
            </span>
          </h1>
          <p className="mt-4 text-neutral-300">
            Fast, responsive, modern pages with clean code (React + Tailwind). Perfect for launches,
            coaches, and small businesses.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="rounded-xl bg-kelp-400 px-5 py-3 font-semibold text-black hover:bg-kelp-300">
              Start Your Page
            </a>
            <a href="#work" className="rounded-xl border border-ocean-800 px-5 py-3 font-semibold hover:border-ocean-500">
              See Work
            </a>
          </div>
          <p className="mt-3 text-xs text-neutral-400">1–5 pages • Mobile-first • Deployed to Netlify/Vercel</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="rounded-2xl border border-ocean-900/40 bg-ocean-900/30 p-4 shadow-[0_10px_30px_-10px] shadow-black/40">
          <img src="/hero-image.png" alt="Sample landing page" className="h-auto w-full rounded-lg" />
        </div>
      </Reveal>
    </section>
  );
}
