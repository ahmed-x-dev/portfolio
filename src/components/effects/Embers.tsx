import { useMemo } from "react";
// useMemo caches a value so React doesn't recreate it on every render.

// Ember is a TypeScript interface, which is a way to define the shape of an object.
interface Ember {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  drift: number;
}

function generateEmbers(count: number): Ember[] {
  return Array.from({ length: count }, (_, i) => ({
    // Create an array of Ember objects with random properties
    id: i, // Unique identifier
    size: Number((Math.random() * 3 + 2).toFixed(1)), // Random size between 2 and 5
    left: Math.random() * 100, // Random left position between 0% and 100%
    duration: Number((Math.random() * 6 + 7).toFixed(1)), // Random duration between 7 and 13 seconds
    delay: Number((Math.random() * 10).toFixed(1)), // Random delay between 0 and 10 seconds
    drift: Number((Math.random() * 60 - 30).toFixed(0)), // Random drift between -30 and 30 pixels
  }));
}

export default function Embers({ count = 22 }: { count?: number }) {
  const embers = useMemo(() => generateEmbers(count), [count]); // Generate embers only when the count changes
  // The useMemo hook is used to memoize the generated embers, so they are not regenerated on every
  // render unless the count changes.

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ animation: "fieldFadeIn 1.5s ease-out both" }}
    >
      {embers.map((e) => (
        <div
          key={e.id}
          className="ember absolute rounded-full -bottom-2.5"
          style={
            {
              width: `${e.size}px`,
              height: `${e.size}px`,
              left: `${e.left}%`,
              background:
                "radial-gradient(circle, var(--color-fire-light), var(--color-fire) 60%, transparent 100%)",
              opacity: 0,
              animation: `rise ${e.duration}s ease-in ${e.delay}s infinite`,
              "--drift": `${e.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
