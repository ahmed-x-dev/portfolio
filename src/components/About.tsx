export default function About() {
  return (
    <section id="about" className="px-[7vw] py-27.5 relative">
      <div className="font-mono text-nomai text-[0.8rem] tracking-[0.08em] mb-2.5">
        {"// SHIP LOG"}
      </div>
      <h2 className="font-display text-[clamp(1.9rem,4vw,2.7rem)] font-semibold mb-11">
        Traveler Profile
      </h2>

      <div className="relative max-w-190 bg-bg-panel/55 border border-border rounded p-10">
        {/* nomai corner brackets */}
        <span className="absolute -top-px -left-px w-5.5 h-5.5 border-2 border-nomai/70 border-r-0 border-b-0" />
        <span className="absolute -top-px -right-px w-5.5 h-5.5 border-2 border-nomai/70 border-l-0 border-b-0" />
        <span className="absolute -bottom-px -left-px w-5.5 h-5.5 border-2 border-nomai/70 border-r-0 border-t-0" />
        <span className="absolute -bottom-px -right-px w-5.5 h-5.5 border-2 border-nomai/70 border-l-0 border-t-0" />

        <p className="text-dim text-[1.02rem] leading-[1.75] mb-4">
          <b className="text-cream font-medium">Role:</b> Full-stack developer,
          building things end to end — from database to the pixel that glows
          when you hover it.
        </p>
        <p className="text-dim text-[1.02rem] leading-[1.75] mb-4">
          I like TypeScript, clean architecture, and quiet, well-lit interfaces.
          Most of what I know, I learned by breaking something on purpose and
          figuring out why.
        </p>

        <div className="flex flex-wrap gap-2.5 mt-5.5">
          {[
            "curious by default",
            "ships in loops",
            "reads the whole error",
            "always exploring",
          ].map((trait) => (
            <span
              key={trait}
              className="font-mono text-[0.75rem] px-3 py-1.5 rounded-full border border-nomai/30 text-nomai"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
