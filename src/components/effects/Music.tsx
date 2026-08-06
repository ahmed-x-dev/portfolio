"use client";

import { useEffect, useRef } from "react";

export default function Music() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const startMusic = async () => {
      if (!audioRef.current) return;

      try {
        await audioRef.current.play();
        audioRef.current.volume = 1;
      } catch (error) {
        console.error("Failed to play background music:", error);
      }

      document.removeEventListener("pointerdown", startMusic);
      document.removeEventListener("keydown", startMusic);
    };

    document.addEventListener("pointerdown", startMusic);
    document.addEventListener("keydown", startMusic);

    return () => {
      document.removeEventListener("pointerdown", startMusic);
      document.removeEventListener("keydown", startMusic);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      aria-hidden="true"
      style={{ display: "none" }}
    >
      <source src="/music/background.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
