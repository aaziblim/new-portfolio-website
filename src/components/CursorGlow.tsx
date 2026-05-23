"use client";

import { useEffect, useRef } from "react";

export const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);
  const pos = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;

      // Cancel any pending frame and schedule a new one
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        glow.style.left = `${pos.current.x}px`;
        glow.style.top = `${pos.current.y}px`;
        glow.style.opacity = "1";
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(raf.current);
      glow.style.opacity = "0";
    };

    const onEnter = () => {
      glow.style.opacity = "1";
    };

    document.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf.current);
      document.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow-global"
      aria-hidden="true"
      style={{ opacity: 0 }}
    />
  );
};
