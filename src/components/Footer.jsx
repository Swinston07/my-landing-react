export default function Footer() {
  return (
    <footer className="border-t border-ocean-900/40">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-4 py-6 text-sm text-neutral-400 sm:flex-row sm:gap-6">
        <span>© {new Date().getFullYear()} Sterling Dev</span>
        <div className="flex gap-4">
          {/* Replace with your real links */}
          <a href="https://linkedin.com/in/yourprofile" className="hover:text-ocean-300">LinkedIn</a>
          <a href="https://github.com/yourprofile" className="hover:text-ocean-300">GitHub</a>
          <a href="https://calendly.com/yourcalendly/intro" className="hover:text-ocean-300">Book a Call</a>
        </div>
      </div>
    </footer>
  );
}
