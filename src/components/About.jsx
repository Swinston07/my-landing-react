import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-y border-ocean-900/40 bg-ocean-900/20">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2">
        <Reveal>
          <div>
            <h2 className="text-2xl font-bold">About Sterling</h2>
            <p className="mt-3 text-neutral-300">
              Full-stack developer focused on clean, custom builds—no templates or CMS. I prioritize fast load times,
              responsive design, and clear communication from kickoff to delivery.
            </p>
            <ul className="mt-4 list-inside list-disc text-sm text-neutral-300">
              <li>Custom code: React, Tailwind, Java, REST APIs</li>
              <li>Mobile-first, accessible, SEO-friendly</li>
              <li>Deploy to Netlify/Vercel + basic analytics</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-kelp-400 px-5 py-3 font-semibold text-black hover:bg-kelp-300">
                Let’s work together
              </a>
              <a href="https://github.com/Swinston07" target="_blank" rel="noreferrer"
                 className="rounded-xl border border-ocean-800 px-5 py-3 font-semibold hover:border-ocean-500">
                GitHub
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-ocean-900/40 bg-ocean-900/30 p-4">
            <img src="/professional1.jpg" alt="Sterling" className="h-auto w-full rounded-lg object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
