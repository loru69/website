import { useEffect, useRef, useState } from "react";
import { USMap } from "./USMap";

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return v;
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), {
      threshold: 0.2,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const states = useCountUp(48, inView);
  const support = useCountUp(24, inView);

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32"
      ref={ref}
    >
      {/* Background grid + glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, #000 40%, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--hh-orange) 18%, transparent), transparent)",
          filter: "blur(40px)",
        }}
      />

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-8">
        <div>
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-mono"
            style={{
              borderColor: "var(--hh-border)",
              background: "var(--hh-surface)",
              color: "var(--hh-text-body)",
              letterSpacing: "0.08em",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: "var(--hh-green)",
                boxShadow: "0 0 8px var(--hh-green)",
              }}
            />
            DISPATCH ONLINE · NOW BOOKING LOADS
          </div>

          <h1
            className="text-[44px] font-extrabold leading-[1.02] tracking-[-0.03em] text-hh-text-primary sm:text-[56px] lg:text-[72px]"
            style={{ animation: "hh-fade-in 0.6s ease-out both" }}
          >
            You Drive.
            <br />
            We Handle{" "}
            <span style={{ color: "var(--hh-orange)" }}>Everything Else.</span>
          </h1>

          <p
            className="mt-6 max-w-[520px] text-[16px] leading-[1.7] text-hh-text-body"
            style={{ animation: "hh-fade-in 0.8s 0.15s ease-out both", opacity: 0 }}
          >
            Horizon Haulers is a 48-state truck dispatching service built for independent
            owner-operators and small fleets. We find the loads, negotiate the rates, and
            handle the paperwork — so you never sit empty.
          </p>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap items-end gap-x-10 gap-y-5">
            {[
              { v: `${states}`, l: "States Covered" },
              { v: `${support}/7`, l: "Dispatch Support" },
              { v: "0", l: "Long-term Contracts" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-[32px] font-bold tracking-tight text-hh-text-primary">
                  {s.v}
                </div>
                <div
                  className="mt-1 text-[11px] font-mono text-hh-text-muted"
                  style={{ letterSpacing: "0.12em", textTransform: "uppercase" }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#cta" className="hh-btn-primary">
              Get Started Free →
            </a>
            <a href="#how" className="hh-btn-secondary">
              See How It Works
            </a>
          </div>

          <p
            className="mt-5 text-[12px] font-mono text-hh-text-muted"
            style={{ letterSpacing: "0.08em" }}
          >
            No setup fees · No long-term contracts · Cancel anytime
          </p>
        </div>

        <div className="relative">
          <div
            className="rounded-2xl border p-3 lg:p-4"
            style={{
              borderColor: "var(--hh-border)",
              background:
                "linear-gradient(180deg, var(--hh-surface-2) 0%, var(--hh-surface) 100%)",
            }}
          >
            <div className="mb-2 flex items-center justify-between px-2">
              <div
                className="text-[10px] font-mono text-hh-text-muted"
                style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}
              >
                Live Coverage · 48 States
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--hh-green)" }}
                />
                <span
                  className="text-[10px] font-mono text-hh-text-body"
                  style={{ letterSpacing: "0.1em" }}
                >
                  LIVE
                </span>
              </div>
            </div>
            <USMap height={400} />
          </div>
        </div>
      </div>
    </section>
  );
}
