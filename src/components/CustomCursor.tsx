import { useEffect, useRef, useState } from "react";

// ─── Option A: Crosshair + glow trail ────────────────────────────────────────
// A sharp crosshair snaps to the cursor.
// A soft cyan glow ring follows with lag.
// 8 fading trail dots chase the cursor for a motion-blur effect.
// On hover: crosshair turns cyan, ring expands and brightens.
// On click: ring pulses inward.

const TRAIL_COUNT = 8;

export default function CustomCursor() {
  const crossRef  = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const mouse  = useRef({ x: -200, y: -200 });
  const ring   = useRef({ x: -200, y: -200 });
  const trail  = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: -200, y: -200 }))
  );
  const rafId  = useRef(0);

  const [hovering, setHovering] = useState(false);
  const [, setClicking] = useState(false);
  const [visible,  setVisible]  = useState(false);

  useEffect(() => {
    document.documentElement.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovering(
        !!el.closest("a, button, [role='button'], input, textarea, select, label")
      );
    };
    const onDown  = () => {
      setClicking(true);
      if (ringRef.current) ringRef.current.dataset.clicking = "1";
    };
    const onUp    = () => {
      setClicking(false);
      if (ringRef.current) ringRef.current.dataset.clicking = "0";
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove",  onMove,  { passive: true });
    document.addEventListener("mouseover",  onOver,  { passive: true });
    document.addEventListener("mousedown",  onDown);
    document.addEventListener("mouseup",    onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const animate = () => {
      const mx = mouse.current.x;
      const my = mouse.current.y;

      // Crosshair snaps instantly
      if (crossRef.current) {
        crossRef.current.style.transform =
          `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      }

      // Ring lerps with lag
      ring.current.x += (mx - ring.current.x) * 0.13;
      ring.current.y += (my - ring.current.y) * 0.13;
      if (ringRef.current) {
        const s = ringRef.current.dataset.clicking === "1" ? 0.78 : 1;
        ringRef.current.style.transform =
          `translate(${ring.current.x}px,${ring.current.y}px) translate(-50%,-50%) scale(${s})`;
      }

      // Trail — each point chases the one before it
      trail.current[0].x += (mx - trail.current[0].x) * 0.25;
      trail.current[0].y += (my - trail.current[0].y) * 0.25;
      for (let i = 1; i < TRAIL_COUNT; i++) {
        trail.current[i].x += (trail.current[i - 1].x - trail.current[i].x) * 0.30;
        trail.current[i].y += (trail.current[i - 1].y - trail.current[i].y) * 0.30;
      }
      trailRefs.current.forEach((el, i) => {
        if (!el) return;
        el.style.transform =
          `translate(${trail.current[i].x}px,${trail.current[i].y}px) translate(-50%,-50%)`;
      });

      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.documentElement.style.cursor = "";
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mousedown",  onDown);
      document.removeEventListener("mouseup",    onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  const opacity = visible ? 1 : 0;

  return (
    <>
      {/* Glow trail dots */}
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => {
        const size  = Math.max(3, 10 - i * 1.0);
        const alpha = (1 - i / TRAIL_COUNT) * 0.38;
        return (
          <div
            key={i}
            ref={el => { trailRefs.current[i] = el; }}
            className="pointer-events-none fixed top-0 left-0 z-[9997] rounded-full will-change-transform"
            style={{
              width:      size,
              height:     size,
              background: `rgba(6,182,212,${alpha})`,
              boxShadow:  `0 0 ${size * 2}px rgba(6,182,212,${alpha * 0.8})`,
              opacity,
              transition: "opacity 0.3s",
            }}
          />
        );
      })}

      {/* Lagging glow ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full will-change-transform"
        style={{
          width:      hovering ? 48 : 36,
          height:     hovering ? 48 : 36,
          border:     `1px solid rgba(6,182,212,${hovering ? 0.9 : 0.45})`,
          boxShadow:  `0 0 ${hovering ? 18 : 8}px rgba(6,182,212,${hovering ? 0.5 : 0.18})`,
          background: hovering ? "rgba(6,182,212,0.05)" : "transparent",
          opacity,
          transition:
            "width 0.2s ease, height 0.2s ease, " +
            "border 0.2s ease, box-shadow 0.2s ease, " +
            "background 0.2s ease, opacity 0.3s ease",
        }}
      />

      {/* Crosshair */}
      <div
        ref={crossRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
        style={{ opacity, transition: "opacity 0.3s" }}
      >
        {/* Horizontal bar */}
        <div style={{
          position:   "absolute",
          top:        "50%",
          left:       "50%",
          transform:  "translate(-50%,-50%)",
          width:      hovering ? 18 : 14,
          height:     1.5,
          background: hovering ? "#22d3ee" : "rgba(255,255,255,0.85)",
          boxShadow:  hovering ? "0 0 6px rgba(34,211,238,0.9)" : "none",
          borderRadius: 2,
          transition: "width 0.15s, background 0.15s, box-shadow 0.15s",
        }} />
        {/* Vertical bar */}
        <div style={{
          position:   "absolute",
          top:        "50%",
          left:       "50%",
          transform:  "translate(-50%,-50%)",
          width:      1.5,
          height:     hovering ? 18 : 14,
          background: hovering ? "#22d3ee" : "rgba(255,255,255,0.85)",
          boxShadow:  hovering ? "0 0 6px rgba(34,211,238,0.9)" : "none",
          borderRadius: 2,
          transition: "height 0.15s, background 0.15s, box-shadow 0.15s",
        }} />
        {/* Center dot */}
        <div style={{
          position:     "absolute",
          top:          "50%",
          left:         "50%",
          transform:    "translate(-50%,-50%)",
          width:        hovering ? 5 : 3,
          height:       hovering ? 5 : 3,
          borderRadius: "50%",
          background:   hovering ? "#22d3ee" : "white",
          boxShadow:    hovering ? "0 0 8px rgba(34,211,238,0.9)" : "none",
          transition:   "all 0.15s",
        }} />
      </div>
    </>
  );
}
