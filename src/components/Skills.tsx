import { nodes, links } from "@/data/skills";

export default function Skills() {
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <section id="skills" className="px-[7vw] py-27.5 relative">
      <div className="font-mono text-nomai text-[0.8rem] tracking-[0.08em] mb-2.5">
        {"// MAPPED SO FAR"}
      </div>
      <h2 className="font-display text-[clamp(1.9rem,4vw,2.7rem)] font-semibold mb-11">
        Skills
      </h2>

      <div className="relative max-w-180">
        <svg viewBox="0 0 620 320" className="w-full h-auto overflow-visible">
          <g stroke="rgba(111,231,210,0.25)" strokeWidth="1">
            {links.map(([from, to]) => {
              const a = nodeMap[from];
              const b = nodeMap[to];
              return (
                <line
                  key={`${from}-${to}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                />
              );
            })}
          </g>

          {nodes.map((node) => (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r={node.glowR}
                fill="var(--color-nomai)"
                opacity="0.25"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill="var(--color-bg-panel)"
                stroke="var(--color-nomai)"
                strokeWidth="1.5"
              />
              <text
                x={node.x}
                y={node.y + node.labelDy}
                textAnchor="middle"
                fill="var(--color-cream)"
                fontFamily="var(--font-mono)"
                fontSize="11"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
}
