"use client";

import { useEffect } from "react";
import { prefersReducedMotion } from "../../lib/browser.js";

export function SmoothScrollProvider({ children }) {
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    let frame = 0;
    let lenis;
    let cancelled = false;
    const stopLenis = () => lenis?.stop();
    const startLenis = () => lenis?.start();

    const boot = async () => {
      try {
        const Lenis = (await import("lenis")).default;
        if (cancelled) return;

        lenis = new Lenis({
          duration: 1.18,
          easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
          smoothWheel: true,
          wheelMultiplier: 0.82,
          touchMultiplier: 1.06,
        });
        window.__yairoLenis = lenis;

        if (document.documentElement.classList.contains("is-profile-open")) {
          lenis.stop();
        }

        const raf = (time) => {
          lenis?.raf(time);
          frame = requestAnimationFrame(raf);
        };

        frame = requestAnimationFrame(raf);
      } catch {
        document.documentElement.style.scrollBehavior = "smooth";
      }
    };

    document.addEventListener("yairo:lock-scroll", stopLenis);
    document.addEventListener("yairo:unlock-scroll", startLenis);
    boot();

    return () => {
      cancelled = true;
      document.removeEventListener("yairo:lock-scroll", stopLenis);
      document.removeEventListener("yairo:unlock-scroll", startLenis);
      if (frame) cancelAnimationFrame(frame);
      if (window.__yairoLenis === lenis) {
        delete window.__yairoLenis;
      }
      lenis?.destroy();
    };
  }, []);

  return children;
}
