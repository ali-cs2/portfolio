"use client";

import { profile } from "@/data/profile";

export default function OverlayHUD() {
  return (
    <>
      <div className="pointer-events-none fixed left-4 top-4 z-20 max-w-sm rounded-lg border border-cyan-500/50 bg-slate-950/70 p-4 text-cyan-50 backdrop-blur">
        <h1 className="text-lg font-semibold text-cyan-100">{profile.displayName}</h1>
        <p className="mt-1 text-xs text-cyan-200/90">{profile.location}</p>
        <p className="mt-2 text-xs text-cyan-300">{profile.emails[0]}</p>
        <p className="text-xs text-cyan-300">{profile.phones.join(" | ")}</p>
      </div>

      <div className="pointer-events-none fixed bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full border border-cyan-500/60 bg-slate-950/75 px-4 py-2 text-xs tracking-wide text-cyan-100 shadow-neon backdrop-blur">
        Use WASD to move
      </div>

      <div className="pointer-events-none fixed right-4 top-4 z-20 rounded-lg border border-cyan-500/50 bg-slate-950/70 px-3 py-2 text-[11px] text-cyan-200 backdrop-blur">
        Click anywhere in scene to lock mouse
      </div>
    </>
  );
}
