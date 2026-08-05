import { useMemo } from "react";

interface Star {
  id: number;
  size: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Number((Math.random() * 1.8 + 0.6).toFixed(1)),
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Number((Math.random() * 3 + 2).toFixed(1)),
    delay: Number((Math.random() * 4).toFixed(1)),
  }));
}

export default function StarField({ count = 90 }: { count?: number }) {
  const stars = useMemo(() => generateStars(count), [count]);

  return (
    <div
      className="fixed inset-0 -z-20"
      style={{
        animation: "fieldFadeIn 1.5s ease-out both",
      }}
    >
      {stars.map((s) => (
        <div
          key={s.id}
          className="star absolute rounded-full bg-cream"
          style={
            {
              width: `${s.size}px`,
              height: `${s.size}px`,
              top: `${s.top}%`,
              left: `${s.left}%`,
              animation: `twinkle ${s.duration}s ease-in-out infinite backwards`, // backwards: tells the browser to apply the 0% keyframe during the delay
              animationDelay: `${s.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
