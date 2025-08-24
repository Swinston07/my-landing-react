import Reveal from "./Reveal";

export default function Work() {
  const projects = [
    { title: "Fitness App — Log In",    img: "/gymapp-landing.png", desc: "Responsive hero + CTA. Clean, custom code." },
    { title: "Fitness App — Dashboard",  img: "/gymapp-dashboard.jpeg", desc: "Component-led layout, fast and accessible." },
    { title: "Fitness App- Profile",   img: "/gymapp-profile.jpeg", desc: "Modern services section with contact capture." },
  ];

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-12">
      <Reveal><div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-bold">Recent Work</h2>
        <a href="#contact" className="hidden rounded-xl border border-ocean-800 px-4 py-2 text-sm hover:border-ocean-500 md:inline-flex">
          Start a project
        </a>
      </div></Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <figure className="group relative overflow-hidden rounded-xl border border-ocean-900/40 bg-ocean-900/30">
              <img src={p.img} alt={p.title} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" />
              {/* Dark overlay */}
              <div className="pointer-events-none absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {/* Hover text */}
              <figcaption className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-200">{p.desc}</p>
                <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs text-neutral-200">
                  <span className="rounded-md border border-white/20 px-2 py-0.5">React</span>
                  <span className="rounded-md border border-white/20 px-2 py-0.5">Tailwind</span>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12}>
        <div className="mt-8 text-center md:hidden">
          <a href="#contact" className="inline-flex rounded-xl border border-ocean-800 px-4 py-2 text-sm hover:border-ocean-500">
            Start a project
          </a>
        </div>
      </Reveal>
    </section>
  );
}
