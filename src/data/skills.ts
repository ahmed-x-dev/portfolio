export type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  r: number;
  glowR: number;
  labelDy: number;
};

export type Link = [string, string];

export const nodes: Node[] = [
  // Frontend starting point
  {
    id: "typescript",
    label: "TypeScript",
    x: 70,
    y: 60,
    r: 6,
    glowR: 20,
    labelDy: -20,
  },

  // Backend starting point
  {
    id: "python",
    label: "Python",
    x: 85,
    y: 320,
    r: 6,
    glowR: 20,
    labelDy: 24,
  },

  // Shared tool connecting both starting points
  { id: "git", label: "Git", x: 175, y: 190, r: 6, glowR: 20, labelDy: -20 },

  // Frontend
  { id: "react", label: "React", x: 290, y: 80, r: 7, glowR: 24, labelDy: -22 },
  {
    id: "nextjs",
    label: "Next.js",
    x: 460,
    y: 50,
    r: 6,
    glowR: 20,
    labelDy: -20,
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    x: 375,
    y: 180,
    r: 5,
    glowR: 18,
    labelDy: 22,
  },

  // Backend
  {
    id: "fastapi",
    label: "FastAPI",
    x: 300,
    y: 285,
    r: 6,
    glowR: 20,
    labelDy: 24,
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    x: 500,
    y: 320,
    r: 6,
    glowR: 20,
    labelDy: 24,
  },

  // Infrastructure
  {
    id: "docker",
    label: "Docker",
    x: 590,
    y: 195,
    r: 5,
    glowR: 18,
    labelDy: -18,
  },
];
export const links: Link[] = [
  // Git connects the two starting points
  ["typescript", "git"],
  ["python", "git"],

  // Frontend
  ["typescript", "react"],
  ["react", "nextjs"],
  ["react", "tailwind"],

  // Backend
  ["python", "fastapi"],
  ["fastapi", "postgresql"],

  // Infrastructure
  ["nextjs", "docker"],
  ["postgresql", "docker"],
];
