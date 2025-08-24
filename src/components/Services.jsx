import Reveal from "./Reveal";

export default function Services() {
  const items = [
    { title: "Custom Landing Pages", desc: "Designed and coded from scratch. No templates or CMS." },
    { title: "Performance & SEO Basics", desc: "Mobile-first, fast load, semantic HTML, OG/meta tags." },
    { title: "Integrations", desc: "Contact/opt-in forms, email tools, Stripe on larger scopes." },
  ];

  return (
    <section id="services" className="border-y border-ocean-900/40 bg-ocean-900/20">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Reveal><h2 className="mb-6 text-2xl font-bold">Services</h2></Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="rounded-xl border border-ocean-900/40 bg-ocean-900/30 p-5 transition hover:border-ocean-700/60 hover:bg-ocean-900/40">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
