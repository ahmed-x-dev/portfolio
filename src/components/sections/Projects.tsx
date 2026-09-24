import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-[7vw] py-27.5 relative">
      <div className="font-mono text-nomai text-[0.8rem] tracking-[0.08em] mb-2.5">
        {"// Ship Log"}
      </div>
      <h2 className="font-display text-[clamp(1.9rem,4vw,2.7rem)] font-semibold mb-11">
        Projects
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-bg-panel/60 border border-border rounded-lg p-6.5 transition-[border-color,transform,box-shadow] duration-300 ease-out hover:border-nomai/50 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="flex justify-between items-center mb-3.5">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <div className="flex items-center gap-1.5 font-mono text-[0.7rem] text-nomai">
                <span className="w-1.5 h-1.5 rounded-full bg-nomai shadow-[0_0_8px_var(--color-nomai)] animate-[signalPulse_1.6s_ease-in-out_infinite]" />
                STRONG
              </div>
            </div>

            <div className="font-mono text-[0.72rem] text-dim mb-3.5">
              {project.date}
            </div>

            <p className="text-dim text-[0.92rem] leading-[1.6] mb-4.5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[0.7rem] px-2.5 py-1 rounded bg-white/4 text-dim"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 font-mono text-[0.78rem]">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fire-light hover:underline"
                >
                  view live
                </a>
              )}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fire-light hover:underline"
                >
                  source
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
