export default function Campfire() {
  return (
    <div className="relative mt-11.5">
      <div className="relative w-32.5 h-29 flex items-end justify-center">
        {/* ground shadow */}
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-37.5 h-5 blur-[2px] bg-[radial-gradient(ellipse,rgba(0,0,0,0.5),transparent_70%)]" />

        {/* logs */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-25 h-6.5">
          <div className="absolute left-1/2 bottom-0.5 w-18.5 h-3.75 rounded-[7px] -translate-x-1/2 rotate-22 bg-[linear-gradient(180deg,#8a5a34_0%,#5f3a20_55%,#40270f_100%)] shadow-[inset_0_-3px_4px_rgba(0,0,0,0.45),0_2px_4px_rgba(0,0,0,0.35)] after:content-[''] after:absolute after:inset-[3px_8px] after:border-t after:border-black/25" />
          <div className="absolute left-1/2 bottom-1 w-18.5 h-3.75 rounded-[7px] -translate-x-1/2 rotate-[-24deg] bg-[linear-gradient(180deg,#8a5a34_0%,#5f3a20_55%,#40270f_100%)] shadow-[inset_0_-3px_4px_rgba(0,0,0,0.45),0_2px_4px_rgba(0,0,0,0.35)] after:content-[''] after:absolute after:inset-[3px_8px] after:border-t after:border-black/25" />
          <div className="absolute left-1/2 bottom-2.25 w-15.5 h-3.75 rounded-[7px] -translate-x-1/2 -rotate-2 opacity-95 bg-[linear-gradient(180deg,#a06a3d_0%,#6b4425_55%,#46290f_100%)] shadow-[inset_0_-3px_4px_rgba(0,0,0,0.45),0_2px_4px_rgba(0,0,0,0.35)] after:content-[''] after:absolute after:inset-[3px_8px] after:border-t after:border-black/25" />

          {/* embers */}
          <span className="absolute bottom-3 left-[38%] w-1 h-1 rounded-full bg-fire-light shadow-[0_0_6px_var(--color-fire)] animate-[emberGlow_1.8s_ease-in-out_infinite] [animation-delay:0.2s]" />
          <span className="absolute bottom-3.5 left-[58%] w-1 h-1 rounded-full bg-fire-light shadow-[0_0_6px_var(--color-fire)] animate-[emberGlow_1.8s_ease-in-out_infinite] [animation-delay:0.9s]" />
          <span className="absolute bottom-2.25 left-[48%] w-1 h-1 rounded-full bg-fire-light shadow-[0_0_6px_var(--color-fire)] animate-[emberGlow_1.8s_ease-in-out_infinite] [animation-delay:0.5s]" />
        </div>

        {/* flame */}
        <div className="absolute bottom-5 w-15 h-22.5">
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-40 h-15 blur-[6px] bg-[radial-gradient(ellipse,rgba(255,122,41,0.35),transparent_70%)] animate-[glowpulse_1.4s_ease-in-out_infinite]" />

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-21">
            <div className="w-full h-full opacity-85 blur-[2px] rounded-[50%/60%_60%_40%_40%] bg-[radial-gradient(circle_at_50%_70%,var(--color-fire),var(--color-ember)_80%)] animate-flicker [animation-delay:0s]" />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-9 h-14.5">
            <div className="w-full h-full opacity-90 blur-[2px] rounded-[50%/60%_60%_40%_40%] bg-[radial-gradient(circle_at_50%_70%,var(--color-fire-light),var(--color-fire)_85%)] animate-flicker [animation-delay:0.15s]" />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-7.5">
            <div className="w-full h-full opacity-95 blur-[2px] rounded-[50%/60%_60%_40%_40%] bg-[radial-gradient(circle_at_50%_70%,#FFF3D6,var(--color-fire-light)_85%)] animate-flicker [animation-delay:0.3s]" />
          </div>
        </div>
      </div>
    </div>
  );
}
