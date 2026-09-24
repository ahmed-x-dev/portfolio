export default function Contact() {
  return (
    <section id="contact" className="px-[7vw] py-27.5 relative text-center">
      <div className="font-mono text-nomai text-[0.8rem] tracking-[0.08em] mb-2.5 text-center">
        {"// SEND A SIGNAL"}
      </div>
      <h2 className="font-display text-[clamp(1.9rem,4vw,2.7rem)] font-semibold mb-11">
        Let&apos;s talk
      </h2>

      <div className="max-w-140 mx-auto bg-bg-panel/60 border border-border rounded-[10px] px-9 py-11.5">
        <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.3rem)] font-semibold mb-3.5">
          Got a project in mind?
        </h2>
        <p className="text-dim mb-7.5">
          Open to freelance work, collaborations, or just talking shop about
          code.
        </p>

        <a
          href="mailto:a8392280@gmail.com"
          className="inline-block font-mono text-[0.9rem] tracking-[0.04em] px-7 py-3.5 rounded-lg font-semibold text-[#1A0E05] bg-linear-to-br from-fire to-ember transition-all duration-250 ease-out hover:shadow-[0_0_26px_rgba(255,122,41,0.45)] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-nomai focus-visible:outline-offset-[3px]"
        >
          Send a signal 🔥
        </a>

        <div className="flex justify-center gap-6.5 mt-7.5 font-mono text-[0.82rem] text-dim">
          <a
            href="https://github.com/ahmed-x-dev"
            target="_blank"
            className="hover:text-nomai"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-faisal-680413248"
            target="_blank"
            className="hover:text-nomai"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
