import { useEffect, useRef, useState } from "react";
import { US_STATES, MAP_W, MAP_H } from "../us-states-data";

// Hub city coordinates (lon, lat) — projected with the same params as us-states-data.ts
// We re-project here using approximate bbox of US (lon -125..-66, lat 24..49).
const HUBS: { name: string; lon: number; lat: number }[] = [
  { name: "Seattle", lon: -122.33, lat: 47.6 },
  { name: "Los Angeles", lon: -118.24, lat: 34.05 },
  { name: "Phoenix", lon: -112.07, lat: 33.45 },
  { name: "Denver", lon: -104.99, lat: 39.74 },
  { name: "Dallas", lon: -96.8, lat: 32.78 },
  { name: "Houston", lon: -95.37, lat: 29.76 },
  { name: "Kansas City", lon: -94.58, lat: 39.1 },
  { name: "Chicago", lon: -87.65, lat: 41.85 },
  { name: "Memphis", lon: -90.05, lat: 35.15 },
  { name: "Indianapolis", lon: -86.16, lat: 39.77 },
  { name: "Columbus", lon: -82.99, lat: 39.96 },
  { name: "Atlanta", lon: -84.39, lat: 33.75 },
  { name: "Charlotte", lon: -80.84, lat: 35.23 },
  { name: "New York", lon: -74.0, lat: 40.71 },
  { name: "Miami", lon: -80.19, lat: 25.76 },
];

// Bounds inferred from data set
const MIN_LON = -124.7, MAX_LON = -66.95;
const MIN_LAT = 24.5, MAX_LAT = 49.4;
const PAD = 20;
const sx = (MAP_W - 2 * PAD) / (MAX_LON - MIN_LON);
const sy = (MAP_H - 2 * PAD) / (MAX_LAT - MIN_LAT);
const s = Math.min(sx, sy);
const offX = (MAP_W - (MAX_LON - MIN_LON) * s) / 2;
const offY = (MAP_H - (MAX_LAT - MIN_LAT) * s) / 2;
const project = (lon: number, lat: number) => [
  (lon - MIN_LON) * s + offX,
  MAP_H - ((lat - MIN_LAT) * s + offY),
];

export function USMap({
  height = 520,
  showLabels = true,
  loop = true,
}: {
  height?: number;
  showLabels?: boolean;
  loop?: boolean;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Stagger by x position
  const maxX = Math.max(...US_STATES.map((s) => +s.cx));
  const minX = Math.min(...US_STATES.map((s) => +s.cx));

  return (
    <div className="relative w-full">
      {/* Orange ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, color-mix(in oklab, var(--hh-orange) 14%, transparent), transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <svg
        ref={ref}
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        style={{ width: "100%", height, display: "block" }}
        role="img"
        aria-label="Map of the contiguous United States showing Horizon Haulers coverage"
      >
        <defs>
          <filter id="hhGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* States */}
        {US_STATES.map((st) => {
          const t = (+st.cx - minX) / (maxX - minX);
          const delay = t * 2.2; // 0 → 2.2s sweep
          const isHover = hover === st.name;
          return (
            <path
              key={st.name}
              d={st.d}
              stroke="#2A3040"
              strokeWidth={0.7}
              fill={isHover ? "color-mix(in oklab, var(--hh-orange) 50%, var(--hh-surface))" : "var(--hh-surface)"}
              style={
                visible
                  ? {
                      animation: `hh-state-sweep ${loop ? "5s" : "2.4s"} ease-in-out ${delay}s ${loop ? "infinite" : "1"}`,
                      cursor: "pointer",
                      transition: "fill 0.2s ease",
                    }
                  : { transition: "fill 0.2s ease" }
              }
              onMouseEnter={() => setHover(st.name)}
              onMouseLeave={() => setHover(null)}
            >
              <title>{st.name}</title>
            </path>
          );
        })}

        {/* Hub dots */}
        {HUBS.map((h, i) => {
          const [x, y] = project(h.lon, h.lat);
          return (
            <g key={h.name} style={{ filter: "url(#hhGlow)" }}>
              <circle
                cx={x}
                cy={y}
                r={3.2}
                fill="var(--hh-orange)"
                style={
                  visible
                    ? {
                        transformOrigin: `${x}px ${y}px`,
                        animation: `hh-dot-pulse 2.6s ease-in-out ${0.15 * i}s infinite`,
                      }
                    : undefined
                }
              />
              {showLabels && (
                <text
                  x={x + 6}
                  y={y + 3}
                  fontSize="9"
                  fontFamily="JetBrains Mono, monospace"
                  fill="var(--hh-text-muted)"
                  style={{ pointerEvents: "none" }}
                >
                  {h.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
