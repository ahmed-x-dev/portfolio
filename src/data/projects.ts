type Project = {
  name: string;
  date: string;
  description: string;
  stack: string[];
  liveUrl: string;
  sourceUrl?: string | null;
};

export const projects: Project[] = [
  {
    name: "MyPedia",
    date: "LOG — LAUNCHED",
    description:
      "Personal media tracker for organizing and tracking movies, TV series, anime, manga, games, and books.",
    stack: [
      "Nextjs",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "clerk",
      "TanStack Query",
      "Zustand",
      "Fastapi",
      "PostgreSQL",
      "Redis",
    ],
    liveUrl: "https://mypedia-rho.vercel.app/",
  },
];
