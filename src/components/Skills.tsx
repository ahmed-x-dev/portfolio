const nodes = [
  {
    id: "typescript",
    label: "TypeScript",
    x: 90,
    y: 80,
    r: 6,
    glowR: 20,
    labelDy: -20,
  },
  {
    id: "react",
    label: "React",
    x: 230,
    y: 150,
    r: 7,
    glowR: 24,
    labelDy: -22,
  },
  {
    id: "nextjs",
    label: "Next.js",
    x: 380,
    y: 70,
    r: 6,
    glowR: 20,
    labelDy: -20,
  },
  {
    id: "nodejs",
    label: "Node.js",
    x: 330,
    y: 240,
    r: 6,
    glowR: 20,
    labelDy: 24,
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    x: 480,
    y: 200,
    r: 6,
    glowR: 20,
    labelDy: 24,
  },
  {
    id: "docker",
    label: "Docker",
    x: 520,
    y: 120,
    r: 5,
    glowR: 18,
    labelDy: -18,
  },
  { id: "git", label: "Git", x: 60, y: 220, r: 5, glowR: 18, labelDy: 24 },
];

const links = [
  ["typescript", "react"],
  ["react", "nextjs"],
  ["react", "nodejs"],
  ["nodejs", "postgresql"],
  ["nextjs", "docker"],
  ["typescript", "git"],
];

export default function Skills() {
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <section id="skills" className="px-[7vw] py-27.5 relative">
      <div className="font-mono text-nomai text-[0.8rem] tracking-[0.08em] mb-2.5">
        {"// MAPPED SO FAR"}
      </div>
      <h2 className="font-display text-[clamp(1.9rem,4vw,2.7rem)] font-semibold mb-11">
        Star Chart
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
