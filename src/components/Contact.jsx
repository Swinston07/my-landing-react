import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-12">
      <Reveal><h2 className="text-2xl font-bold mb-2">Contact</h2></Reveal>
      <Reveal delay={0.06}><p className="mb-6 text-neutral-300">Tell me about your project. I’ll reply with next steps.</p></Reveal>

      <Reveal delay={0.12}>
        <form action="https://formspree.io/f/xovnaekl" method="POST" className="grid gap-4">
          <div>
            <label className="mb-1 block text-sm">Name</label>
            <input name="name" required className="w-full rounded-lg border border-ocean-900/40 bg-ocean-900/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-kelp-400"/>
          </div>
          <div>
            <label className="mb-1 block text-sm">Email</label>
            <input type="email" name="email" required className="w-full rounded-lg border border-ocean-900/40 bg-ocean-900/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-kelp-400"/>
          </div>
          <div>
            <label className="mb-1 block text-sm">Message</label>
            <textarea name="message" rows="5" required className="w-full rounded-lg border border-ocean-900/40 bg-ocean-900/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-kelp-400"></textarea>
          </div>

          <button className="rounded-xl bg-kelp-400 px-5 py-3 font-semibold text-black hover:bg-kelp-300">
            Send Message
          </button>

          <p className="text-xs text-neutral-400">
            📧 Prefer email? <a className="underline hover:text-ocean-300" href="mailto:sterlingdev951@gmail.com">sterlingdev951@gmail.com</a>
          </p>
        </form>
      </Reveal>
    </section>
  );
}
