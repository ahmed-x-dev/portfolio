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
    id: i,
    size: Number((Math.random() * 3 + 2).toFixed(1)),
    left: Math.random() * 100,
    duration: Number((Math.random() * 6 + 7).toFixed(1)),
    delay: Number((Math.random() * 10).toFixed(1)),
    drift: Number((Math.random() * 60 - 30).toFixed(0)),
  }));
}

export default function Embers({ count = 22 }: { count?: number }) {
  const embers = generateEmbers(count);

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
