import Campfire from "../effects/Campfire";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center transform text-cream px-[7vw]"
    >
      <h1 className="font-display text-[clamp(2.2rem,6vw,4.4rem)] font-semibold leading-[1.15] max-w-195">
        Somewhere out there is a project{" "}
        <em className="not-italic text-fire-light">worth finding</em>.
      </h1>
      <p className="mt-5 max-w-135 text-[1.08rem] text-dim">
        I&apos;m Ahmed — a full-stack developer who likes exploring the space
        between clean code and things that feel alive.
      </p>

      <Campfire />

      <div className="flex flex-wrap justify-center gap-4.5 mt-12.5">
        <a
          href="#projects"
          className="font-mono text-[0.9rem] tracking-[0.04em] px-7 py-3.5 rounded-lg font-semibold text-[#1A0E05] bg-linear-to-br from-[#FF7A29] to-[#E8452C] transition-all duration-250 ease-out hover:shadow-[0_0_26px_rgba(255,122,41,0.45)] hover:-translate-y-0.5 focus-visible:outline-1 focus-visible:outline-nomai focus-visible:outline-offset-[3px]"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="font-mono text-[0.9rem] tracking-[0.04em] px-7 py-3.5 rounded-lg border border-[rgba(111,231,210,0.35)] text-nomai transition-all duration-250 ease-out hover:bg-[rgba(111,231,210,0.06)] focus-visible:outline-1 focus-visible:outline-nomai focus-visible:outline-offset-[3px]"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
