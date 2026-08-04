"use client";

import { useEffect, useState } from "react";

// config array for the nav links, each with an href and label
const links = [
  { href: "#hero", label: "home" },
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  // State to track the active section
  const [active, setActive] = useState<string>("");

  // Use the IntersectionObserver API to detect when a section is in view
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]"); // Select all sections with an id attribute
    const observer = new IntersectionObserver( // Create a new IntersectionObserver
      (entries) => {
        // Define the callback function
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id); // true when section crosses the rootMargin-shrunk viewport band
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }, // shrinks detection zone to a thin band near vertical center — section only counts as "active" when it crosses that band
    );
    sections.forEach((s) => observer.observe(s)); // starts watching each section.
    return () => observer.disconnect(); // the Cleanup Function (stops observing when the component unmounts (avoids memory leaks / stale observers on re-render))
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-[6vw] py-5 bg-bg/75 backdrop-blur-md border-b border-border">
      <a href="#" className="flex items-center gap-2.5">
        <span className="w-4.5 h-6.5 rounded-[50%_50%_50%_50%/65%_65%_35%_35%] bg-[radial-gradient(circle_at_50%_70%,var(--color-fire-light),var(--color-fire)_70%,var(--color-ember)_100%)] animate-flicker" />
        <span className="font-display font-semibold text-lg text-cream">
          ahmed.dev
        </span>
      </a>

      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href} // the href is the section id, e.g., #about, #projects, etc.(Automatically scrolls to the section that matches its ID when clicked *_*)
            className={`font-mono text-[0.9rem] tracking-wide transition-colors ${
              active === link.href.slice(1) ? "text-fire-light" : "text-dim" // slice(1) removes the # from the href to match the section id
            } hover:text-cream`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
