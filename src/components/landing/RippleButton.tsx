"use client";

import { useState, type MouseEvent, type ReactNode } from "react";

type Ripple = { id: number; x: number; y: number; size: number };

export default function RippleButton({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const id = Date.now();
    setRipples((r) => [
      ...r,
      { id, x: e.clientX - rect.left - size / 2, y: e.clientY - rect.top - size / 2, size },
    ]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 650);
    onClick?.(e);
  };

  return (
    <button onClick={handleClick} className={`relative overflow-hidden ${className}`}>
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/35"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            animation: "ripple 650ms ease-out forwards",
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </button>
  );
}
