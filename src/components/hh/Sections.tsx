import { useState } from "react";
import { z } from "zod";
import { Link } from "@tanstack/react-router";
import {
  ClipboardList,
  Headset,
  Truck,
  Box,
  Snowflake,
  Layers,
  PackageOpen,
  Zap,
  Container,
  Anchor,
  Calculator,
  Fuel,
  Receipt,
  MapPin,
  FileText,
  ShieldCheck,
  Check,
  ChevronDown,
  Quote,
  Globe,
  HandshakeIcon,
  FileCheck2,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { USMap } from "./USMap";

function SectionHeader({
  label,
  title,
  subtitle,
  center = false,
}: {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className="eyebrow">{label}</div>
      <h2 className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-hh-text-primary sm:text-[40px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[15px] leading-[1.7] text-hh-text-body">{subtitle}</p>
      )}
    </div>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
export function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: ClipboardList,
      t: "Tell us about your truck",
      d: "Fill out a 2-minute form. We collect your MC number, equipment type, preferred lanes, and target rate per mile.",
    },
    {
      n: "02",
      icon: Headset,
      t: "Get paired with a dedicated dispatcher",
      d: "You're matched with a dispatcher who specializes in your equipment and region. They learn your preferences, not just your specs.",
    },
    {
      n: "03",
      icon: Truck,
      t: "We find loads, you drive",
      d: "Your dispatcher negotiates rates, verifies brokers, handles paperwork, and keeps you loaded. You focus on the road.",
    },
  ];
  return (
    <section id="how" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionHeader
            label="HOW IT WORKS"
            title="From sign-up to first load in 24 hours."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="hh-card group flex h-full flex-col p-7">
                <div
                  className="mb-6 font-mono text-[12px] text-hh-orange"
                  style={{ letterSpacing: "0.12em" }}
                >
                  {s.n}
                </div>
                <s.icon
                  className="mb-5 h-7 w-7 transition-colors"
                  style={{ color: "var(--hh-orange)" }}
                />
                <h3 className="text-[20px] font-semibold tracking-tight text-hh-text-primary">
                  {s.t}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-hh-text-body">
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
export function Services() {
  const services = [
    {
      icon: Container,
      name: "Dry Van",
      d: "The backbone of freight. We find consistent 48-state dry van loads with top-tier brokers and negotiated rates above the market floor.",
    },
    {
      icon: Snowflake,
      name: "Reefer",
      d: "Temperature-controlled freight moves fast and pays well. We monitor load requirements so your cargo stays compliant.",
    },
    {
      icon: Layers,
      name: "Flatbed",
      d: "Oversized, oversize, or standard flatbed — we know which brokers pay the most and avoid the ones who don't.",
    },
    {
      icon: PackageOpen,
      name: "Step Deck",
      d: "Taller freight, smarter positioning. We find step deck loads that match your dimensions and maximize RPM.",
    },
    {
      icon: Zap,
      name: "Hotshot",
      d: "Time-sensitive, high-value, high-margin. We keep hotshot operators moving without the dead miles.",
    },
    {
      icon: Box,
      name: "Box Truck",
      d: "Local, regional, or long-haul box truck dispatch with access to exclusive broker networks.",
    },
    {
      icon: Anchor,
      name: "Power Only",
      d: "Drop-and-hook specialists. We keep your power unit productive between dedicated lanes.",
    },
  ];
  return (
    <section id="services" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionHeader
            label="WHAT WE DISPATCH"
            title="Built for every rig on the road."
            subtitle="We dispatch 7 equipment types across 48 states. Tell us what you run — we know the market rates, the best brokers, and the lanes that pay."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <div className="hh-card group flex h-full flex-col p-7">
                <s.icon
                  className="mb-5 h-7 w-7 text-hh-text-body transition-colors group-hover:[color:var(--hh-orange)]"
                />
                <h3 className="text-[18px] font-semibold tracking-tight text-hh-text-primary">
                  {s.name}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-hh-text-body">
                  {s.d}
                </p>
                <a
                  href="#cta"
                  className="mt-5 inline-flex items-center gap-1 text-[13px] font-medium text-hh-orange"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COVERAGE ---------------- */
export function Coverage() {
  const regions = ["West", "Mountain", "Midwest", "South", "Southeast", "Northeast"];
  return (
    <section id="coverage" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionHeader
            label="COVERAGE"
            title="48 states. One dispatcher who knows them all."
            subtitle="Horizon Haulers operates across the entire contiguous United States. Our dispatchers specialize by region — your load isn't being handled by someone who doesn't know the market."
          />
        </Reveal>
        <Reveal delay={120}>
          <div
            className="mt-12 rounded-2xl border p-4 lg:p-8"
            style={{
              borderColor: "var(--hh-border)",
              background:
                "linear-gradient(180deg, var(--hh-surface-2) 0%, var(--hh-surface) 100%)",
            }}
          >
            <USMap height={560} />
          </div>
        </Reveal>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {regions.map((r) => (
            <span
              key={r}
              className="rounded-full border px-3.5 py-1.5 font-mono text-[11px] text-hh-text-body"
              style={{
                borderColor: "var(--hh-border)",
                background: "var(--hh-surface)",
                letterSpacing: "0.1em",
              }}
            >
              {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
export function Pricing() {
  const semiFeatures = [
    "Dry Van, Reefer, Flatbed, Step Deck, Power Only",
    "Unlimited loads",
    "Dedicated dispatcher",
    "Rate negotiation",
    "Broker verification",
    "24/7 support",
    "Paperwork handling",
    "No setup fee",
    "No contract",
  ];
  const boxFeatures = [
    "Everything in Semi, plus:",
    "Box truck & hotshot-specific broker network",
    "Regional load optimization",
    "Time-sensitive load priority",
  ];

  return (
    <section id="pricing" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionHeader
            center
            label="PRICING"
            title="Straightforward pricing. No surprises."
            subtitle="We don't take a cut of your load value. You know exactly what you're paying before you haul your first mile."
          />
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-[860px] gap-5 md:grid-cols-2">
          <Reveal>
            <div className="hh-card flex h-full flex-col p-8">
              <div
                className="font-mono text-[11px] text-hh-text-muted"
                style={{ letterSpacing: "0.12em" }}
              >
                SEMI TRUCK
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-[44px] font-extrabold tracking-tight text-hh-text-primary">
                  $250
                </span>
                <span className="text-hh-text-muted">/ week</span>
              </div>
              <div
                className="mt-5 h-px"
                style={{ background: "var(--hh-border)" }}
              />
              <ul className="mt-6 flex-1 space-y-3">
                {semiFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[14px] text-hh-text-body"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-hh-orange" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="hh-btn-secondary mt-8 w-full">
                Get Started →
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div
              className="relative flex h-full flex-col rounded-xl p-8"
              style={{
                background: "var(--hh-surface)",
                border: "1px solid color-mix(in oklab, var(--hh-orange) 60%, transparent)",
                boxShadow:
                  "0 0 48px color-mix(in oklab, var(--hh-orange) 12%, transparent)",
              }}
            >
              <div
                className="absolute -top-3 right-6 rounded-full px-2.5 py-1 font-mono text-[10px] text-white"
                style={{
                  background: "var(--hh-orange)",
                  letterSpacing: "0.1em",
                }}
              >
                POPULAR
              </div>
              <div
                className="font-mono text-[11px] text-hh-orange"
                style={{ letterSpacing: "0.12em" }}
              >
                BOX TRUCK / HOTSHOT
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-[44px] font-extrabold tracking-tight text-hh-text-primary">
                  $350
                </span>
                <span className="text-hh-text-muted">/ week</span>
              </div>
              <div
                className="mt-5 h-px"
                style={{ background: "var(--hh-border)" }}
              />
              <ul className="mt-6 flex-1 space-y-3">
                {boxFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[14px] text-hh-text-body"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-hh-orange" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="hh-btn-primary mt-8 w-full">
                Get Started →
              </a>
            </div>
          </Reveal>
        </div>
        <p className="mx-auto mt-6 max-w-xl text-center text-[13px] text-hh-text-muted">
          No long-term contracts. Cancel with 7 days notice. No percentage cuts from your
          gross.
        </p>

        {/* Comparison */}
        <Reveal>
          <div
            className="mx-auto mt-16 max-w-[860px] rounded-2xl border p-8"
            style={{ borderColor: "var(--hh-border)", background: "var(--hh-surface)" }}
          >
            <h3 className="text-[22px] font-bold tracking-tight text-hh-text-primary">
              Why flat rate beats percentage pricing.
            </h3>
            <p className="mt-2 text-[14px] text-hh-text-body">
              On a $5,000 load, the math is simple.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div
                className="rounded-lg border p-5"
                style={{ borderColor: "var(--hh-border)" }}
              >
                <div
                  className="font-mono text-[11px] text-hh-text-muted"
                  style={{ letterSpacing: "0.12em" }}
                >
                  INDUSTRY % MODEL
                </div>
                <div className="mt-2 text-[28px] font-bold text-hh-text-primary">
                  $300
                </div>
                <div className="mt-1 text-[13px] text-hh-text-body">
                  6% of a $5,000 load
                </div>
              </div>
              <div
                className="rounded-lg border p-5"
                style={{
                  borderColor: "color-mix(in oklab, var(--hh-orange) 40%, transparent)",
                  background: "color-mix(in oklab, var(--hh-orange) 6%, transparent)",
                }}
              >
                <div
                  className="font-mono text-[11px] text-hh-orange"
                  style={{ letterSpacing: "0.12em" }}
                >
                  HORIZON HAULERS
                </div>
                <div className="mt-2 text-[28px] font-bold text-hh-text-primary">
                  $250
                </div>
                <div className="mt-1 text-[13px] text-hh-text-body">
                  Flat. Same week. Same fee.
                </div>
              </div>
            </div>
            <p className="mt-5 text-[13px] text-hh-text-muted">
              Haul more, keep more. The bigger the load, the more you save.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- TOOLS ---------------- */
function DeadheadCalc() {
  const [empty, setEmpty] = useState("75");
  const [cpm, setCpm] = useState("1.85");
  const cost = ((parseFloat(empty) || 0) * (parseFloat(cpm) || 0)).toFixed(2);
  return (
    <div className="mt-5 space-y-3">
      <div>
        <label className="font-mono text-[10px] text-hh-text-muted" style={{ letterSpacing: "0.1em" }}>
          EMPTY MILES
        </label>
        <input
          value={empty}
          onChange={(e) => setEmpty(e.target.value)}
          inputMode="decimal"
          className="mt-1 w-full rounded-md border bg-transparent px-3 py-2 text-[14px] text-hh-text-primary outline-none focus:border-hh-orange"
          style={{ borderColor: "var(--hh-border)" }}
        />
      </div>
      <div>
        <label className="font-mono text-[10px] text-hh-text-muted" style={{ letterSpacing: "0.1em" }}>
          OPERATING COST / MILE
        </label>
        <input
          value={cpm}
          onChange={(e) => setCpm(e.target.value)}
          inputMode="decimal"
          className="mt-1 w-full rounded-md border bg-transparent px-3 py-2 text-[14px] text-hh-text-primary outline-none focus:border-hh-orange"
          style={{ borderColor: "var(--hh-border)" }}
        />
      </div>
      <div
        className="rounded-md border p-3"
        style={{
          borderColor: "color-mix(in oklab, var(--hh-orange) 40%, transparent)",
          background: "color-mix(in oklab, var(--hh-orange) 8%, transparent)",
        }}
      >
        <div
          className="font-mono text-[10px] text-hh-orange"
          style={{ letterSpacing: "0.1em" }}
        >
          DEADHEAD COST
        </div>
        <div className="text-[24px] font-bold text-hh-text-primary">${cost}</div>
      </div>
    </div>
  );
}

function CPMCalc() {
  const [fuel, setFuel] = useState("4500");
  const [ins, setIns] = useState("1200");
  const [maint, setMaint] = useState("800");
  const [fin, setFin] = useState("2200");
  const [miles, setMiles] = useState("10000");
  const total = ["fuel", "ins", "maint", "fin"];
  void total;
  const m = parseFloat(miles) || 1;
  const sum =
    (parseFloat(fuel) || 0) +
    (parseFloat(ins) || 0) +
    (parseFloat(maint) || 0) +
    (parseFloat(fin) || 0);
  const cpm = (sum / m).toFixed(3);
  const fields: [string, string, (s: string) => void, string][] = [
    ["FUEL", fuel, setFuel, "$"],
    ["INSURANCE", ins, setIns, "$"],
    ["MAINTENANCE", maint, setMaint, "$"],
    ["FINANCING", fin, setFin, "$"],
    ["MILES DRIVEN", miles, setMiles, ""],
  ];
  return (
    <div className="mt-5 space-y-2.5">
      <div className="grid grid-cols-2 gap-2.5">
        {fields.map(([l, v, set, p]) => (
          <div key={l} className={l === "MILES DRIVEN" ? "col-span-2" : ""}>
            <label
              className="font-mono text-[10px] text-hh-text-muted"
              style={{ letterSpacing: "0.1em" }}
            >
              {l} {p && `(${p})`}
            </label>
            <input
              value={v}
              onChange={(e) => set(e.target.value)}
              inputMode="decimal"
              className="mt-1 w-full rounded-md border bg-transparent px-3 py-1.5 text-[13px] text-hh-text-primary outline-none focus:border-hh-orange"
              style={{ borderColor: "var(--hh-border)" }}
            />
          </div>
        ))}
      </div>
      <div
        className="rounded-md border p-3"
        style={{
          borderColor: "color-mix(in oklab, var(--hh-orange) 40%, transparent)",
          background: "color-mix(in oklab, var(--hh-orange) 8%, transparent)",
        }}
      >
        <div
          className="font-mono text-[10px] text-hh-orange"
          style={{ letterSpacing: "0.1em" }}
        >
          TRUE COST PER MILE
        </div>
        <div className="text-[24px] font-bold text-hh-text-primary">${cpm}</div>
      </div>
    </div>
  );
}

export function Tools() {
  const tools = [
    {
      icon: Calculator,
      name: "Deadhead Calculator",
      d: "Enter empty miles and your cost per mile. See the cost of the deadhead run instantly.",
      interactive: <DeadheadCalc />,
    },
    {
      icon: Fuel,
      name: "Cost Per Mile Calculator",
      d: "Fuel, insurance, maintenance, financing. See your true cost per mile so you never haul at a loss.",
      interactive: <CPMCalc />,
    },
    {
      icon: Receipt,
      name: "IFTA Fuel Tax Estimator",
      d: "Enter miles by state and fuel purchased. Get a quarterly IFTA estimate to stay ahead of filings.",
    },
    {
      icon: MapPin,
      name: "Rate Per Mile Checker",
      d: "Enter origin, destination, equipment type. See what market rates look like for that lane.",
    },
    {
      icon: FileText,
      name: "Invoice Generator",
      d: "Fill in load details. Download a clean PDF invoice. Free, no account needed.",
    },
    {
      icon: ShieldCheck,
      name: "Broker Credit Check",
      d: "Enter a broker MC number. We pull their credit score and payment history from public data.",
    },
  ];
  return (
    <section id="tools" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionHeader
            label="FREE TOOLS"
            title="Tools every owner-operator needs. On us."
            subtitle="No login required. No strings attached. We built these because we use them ourselves."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <div className="hh-card group flex h-full flex-col p-7">
                <t.icon className="mb-5 h-7 w-7 text-hh-text-body transition-colors group-hover:[color:var(--hh-orange)]" />
                <h3 className="text-[17px] font-semibold tracking-tight text-hh-text-primary">
                  {t.name}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-hh-text-body">
                  {t.d}
                </p>
                {t.interactive ? (
                  t.interactive
                ) : (
                  <a
                    href="#cta"
                    className="mt-auto pt-5 inline-flex items-center gap-1 text-[13px] font-medium text-hh-orange"
                  >
                    Request access <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY ---------------- */
export function Why() {
  const pillars = [
    {
      icon: Globe,
      t: "U.S.-based dispatchers",
      d: "Every dispatcher on our team is based in the United States. No overseas call centers. No language barriers. Your dispatcher picks up.",
    },
    {
      icon: HandshakeIcon,
      t: "No forced dispatch",
      d: "We never push a load you don't want. Every load offer is approved by you before we book. Your truck, your call.",
    },
    {
      icon: ShieldCheck,
      t: "Broker vetting on every load",
      d: "We check credit scores, payment history, and fraud flags on every broker before we book. You don't haul for someone who won't pay.",
    },
    {
      icon: FileCheck2,
      t: "FMCSA-compliant documentation",
      d: "We handle rate confirmations, BOLs, and check calls. Everything is documented and stored for you.",
    },
  ];
  return (
    <section id="why" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionHeader
            label="WHY HORIZON"
            title="Why owner-operators choose Horizon Haulers."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <div className="hh-card flex h-full gap-5 p-7">
                <div
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-lg"
                  style={{
                    background: "color-mix(in oklab, var(--hh-orange) 14%, transparent)",
                    color: "var(--hh-orange)",
                  }}
                >
                  <p.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[17px] font-semibold text-hh-text-primary">
                    {p.t}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-hh-text-body">
                    {p.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <blockquote
            className="mx-auto mt-16 max-w-3xl text-center text-[26px] font-bold leading-[1.3] tracking-tight text-hh-text-primary sm:text-[34px]"
          >
            "We don't get paid extra if you haul more.{" "}
            <span style={{ color: "var(--hh-orange)" }}>
              We get paid to keep you moving.
            </span>
            "
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
export function Testimonials() {
  const items = [
    {
      q: "I was skeptical about dispatch services after getting burned before. Horizon Haulers checked every broker before I touched a load. First month I averaged $2.80/mile dry van out of Dallas. That's real.",
      n: "Marcus T.",
      m: "Owner-Operator · 1 truck · Texas",
    },
    {
      q: "My dispatcher learned my lanes in the first week. Now I barely have to talk to her — she just sends me the load and I say yes or no. I've turned down maybe 3 loads in 6 months.",
      n: "DeShawn R.",
      m: "Flatbed operator · Ohio",
    },
    {
      q: "I was doing my own dispatch. Wasted 3 hours every morning chasing loads. Now I wake up and there's already a load waiting. My revenue went up and my stress went down.",
      n: "Ana M.",
      m: "Box truck · Florida",
    },
  ];
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionHeader label="CARRIER REVIEWS" title="Hear it from the drivers." />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.n} delay={i * 100}>
              <div className="hh-card relative flex h-full flex-col p-7">
                <Quote
                  className="absolute left-5 top-5 h-6 w-6 opacity-40"
                  style={{ color: "var(--hh-orange)" }}
                />
                <p className="mt-7 text-[15px] leading-[1.7] text-hh-text-primary">
                  {t.q}
                </p>
                <div
                  className="mt-6 border-t pt-4"
                  style={{ borderColor: "var(--hh-border)" }}
                >
                  <div className="text-[14px] font-semibold text-hh-text-primary">
                    {t.n}
                  </div>
                  <div
                    className="mt-0.5 font-mono text-[11px] text-hh-text-muted"
                    style={{ letterSpacing: "0.08em" }}
                  >
                    {t.m}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function FAQ() {
  const items = [
    {
      q: "Do you take a percentage of my loads?",
      a: "Never. We charge a flat weekly rate ($250 semi / $350 box truck). What you negotiate on a load is yours.",
    },
    {
      q: "Is there a contract or minimum commitment?",
      a: "No contracts. Cancel anytime with 7 days notice. You should stay because we earn it, not because we trapped you.",
    },
    {
      q: "What equipment types do you dispatch?",
      a: "Dry van, reefer, flatbed, step deck, hotshot, box truck, and power only. If you run it, we likely dispatch for it.",
    },
    {
      q: "How fast can I get started?",
      a: "Most carriers are paired with a dispatcher and booking loads within 24 hours of sign-up.",
    },
    {
      q: "Do I have to accept every load you find?",
      a: "No. Every load is sent to you for approval. We never force a load. Your truck, your call.",
    },
    {
      q: "What hours is dispatch available?",
      a: "24/7. Loads don't stop at 5pm, and neither do we. There's always a dispatcher reachable.",
    },
    {
      q: "Do you handle factoring or just dispatch?",
      a: "We're a dispatch service, not a factoring company. We do work with all major factoring companies and can refer you if you need one.",
    },
    {
      q: "Can I have more than one truck on the same account?",
      a: "Yes. Each truck is billed at the weekly rate. We offer fleet pricing for 3+ trucks — contact us for details.",
    },
    {
      q: "What states do you cover?",
      a: "All 48 contiguous states. We don't currently dispatch loads originating in Alaska or Hawaii.",
    },
    {
      q: "How do I cancel if I need to?",
      a: "Email or call. We'll wrap up your in-progress loads and close your account with 7 days notice.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[860px]">
        <Reveal>
          <SectionHeader center label="FAQ" title="Common questions." />
        </Reveal>
        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 40}>
                <div
                  className="rounded-xl border transition-colors"
                  style={{
                    borderColor: isOpen
                      ? "color-mix(in oklab, var(--hh-orange) 40%, transparent)"
                      : "var(--hh-border)",
                    background: "var(--hh-surface)",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-[15px] font-medium text-hh-text-primary">
                      {it.q}
                    </span>
                    <ChevronDown
                      className="h-4 w-4 shrink-0 transition-transform"
                      style={{
                        color: "var(--hh-orange)",
                        transform: isOpen ? "rotate(180deg)" : "none",
                      }}
                    />
                  </button>
                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-300"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <p className="px-5 pb-5 text-[14px] leading-[1.7] text-hh-text-body">
                        {it.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA / LEAD FORM ---------------- */

const leadSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9()+\-.\s]+$/, "Digits and ()-+. only"),
  equipment: z.string().min(1, "Select your equipment"),
  trucks: z.string().min(1, "Select fleet size"),
  notes: z.string().trim().max(500).optional().or(z.literal("")),
});

type LeadStatus = "idle" | "submitting" | "success" | "error";

export function CTABanner() {
  const [status, setStatus] = useState<LeadStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = leadSchema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0] ?? "");
        if (k && !fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setStatus("submitting");
    try {
      // Persist locally so leads aren't lost before a backend is connected.
      const key = "hh_leads";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      existing.push({ ...parsed.data, submittedAt: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(existing));
      await new Promise((r) => setTimeout(r, 400));
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full rounded-md border bg-transparent px-3 py-2.5 text-[14px] text-hh-text-primary placeholder:text-hh-text-muted focus:outline-none focus:ring-2 transition";
  const inputStyle: React.CSSProperties = {
    borderColor: "var(--hh-border)",
    background: "color-mix(in oklab, var(--hh-black) 60%, transparent)",
  };
  const labelCls =
    "mb-1.5 block text-[11px] font-mono uppercase tracking-[0.12em] text-hh-text-muted";

  return (
    <section id="cta" className="relative overflow-hidden px-6 py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, var(--hh-orange) 22%, transparent), transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <Reveal>
        <div
          className="mx-auto grid max-w-[1100px] gap-10 rounded-3xl border p-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:p-14"
          style={{
            borderColor: "color-mix(in oklab, var(--hh-orange) 30%, var(--hh-border))",
            background:
              "linear-gradient(180deg, var(--hh-surface-2) 0%, var(--hh-surface) 100%)",
          }}
        >
          <div className="lg:pt-2">
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-hh-text-body"
              style={{ borderColor: "var(--hh-border)", background: "var(--hh-surface)" }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--hh-green)", boxShadow: "0 0 8px var(--hh-green)" }}
              />
              Now onboarding
            </div>
            <h2 className="text-[34px] font-extrabold leading-[1.05] tracking-[-0.02em] text-hh-text-primary sm:text-[44px]">
              Request dispatching <span style={{ color: "var(--hh-orange)" }}>support</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-hh-text-body">
              Tell us about your truck and lanes. A U.S.-based dispatcher will call you
              within 24 hours — no contracts, no setup fees.
            </p>
            <ul className="mt-6 space-y-2.5 text-[14px] text-hh-text-body">
              {[
                "Onboarding in 24 hours",
                "Flat weekly rate — no percentage cut",
                "Cancel anytime",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4" style={{ color: "var(--hh-green)" }} />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {status === "success" ? (
            <div
              className="flex flex-col items-start justify-center rounded-2xl border p-8"
              style={{ borderColor: "var(--hh-border)", background: "var(--hh-surface-2)" }}
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-full"
                style={{ background: "color-mix(in oklab, var(--hh-green) 18%, transparent)" }}
              >
                <Check className="h-6 w-6" style={{ color: "var(--hh-green)" }} />
              </div>
              <h3 className="mt-4 text-[22px] font-bold text-hh-text-primary">
                Request received.
              </h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-hh-text-body">
                A dispatcher will reach out within 24 hours. Check your email for a
                confirmation. Need to talk now? Call{" "}
                <a
                  href="tel:+13074436094"
                  className="font-mono text-hh-text-primary underline decoration-dotted underline-offset-4"
                >
                  (307) 443-6094
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="hh-btn-secondary mt-6 h-10 text-[13px]"
              >
                Submit another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border p-6 lg:p-7"
              style={{ borderColor: "var(--hh-border)", background: "var(--hh-surface-2)" }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="lead-name" className={labelCls}>
                    Full name
                  </label>
                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Driver"
                    className={inputBase}
                    style={inputStyle}
                  />
                  {errors.name && (
                    <p className="mt-1 text-[12px] text-[color:var(--hh-orange)]">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="lead-phone" className={labelCls}>
                    Phone
                  </label>
                  <input
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(307) 443-6094"
                    className={inputBase}
                    style={inputStyle}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-[12px] text-[color:var(--hh-orange)]">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="lead-email" className={labelCls}>
                  Email
                </label>
                <input
                  id="lead-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@example.com"
                  className={inputBase}
                  style={inputStyle}
                />
                {errors.email && (
                  <p className="mt-1 text-[12px] text-[color:var(--hh-orange)]">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="lead-equipment" className={labelCls}>
                    Equipment
                  </label>
                  <select
                    id="lead-equipment"
                    name="equipment"
                    defaultValue=""
                    className={inputBase}
                    style={inputStyle}
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    <option value="dry-van">Dry van</option>
                    <option value="reefer">Reefer</option>
                    <option value="flatbed">Flatbed</option>
                    <option value="step-deck">Step deck</option>
                    <option value="power-only">Power only</option>
                    <option value="hotshot">Hotshot</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.equipment && (
                    <p className="mt-1 text-[12px] text-[color:var(--hh-orange)]">
                      {errors.equipment}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="lead-trucks" className={labelCls}>
                    Fleet size
                  </label>
                  <select
                    id="lead-trucks"
                    name="trucks"
                    defaultValue=""
                    className={inputBase}
                    style={inputStyle}
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    <option value="1">1 truck (owner-op)</option>
                    <option value="2-5">2–5 trucks</option>
                    <option value="6-10">6–10 trucks</option>
                    <option value="11+">11+ trucks</option>
                  </select>
                  {errors.trucks && (
                    <p className="mt-1 text-[12px] text-[color:var(--hh-orange)]">
                      {errors.trucks}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="lead-notes" className={labelCls}>
                  Lanes or notes (optional)
                </label>
                <textarea
                  id="lead-notes"
                  name="notes"
                  rows={3}
                  maxLength={500}
                  placeholder="e.g. Running TX → CA, home weekends"
                  className={inputBase}
                  style={inputStyle}
                />
              </div>

              {status === "error" && (
                <p className="mt-4 text-[13px] text-[color:var(--hh-orange)]">
                  Something went wrong. Please try again or call (307) 443-6094.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="hh-btn-primary mt-6 h-12 w-full text-[14px] disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Request dispatching support →"}
              </button>

              <p
                className="mt-4 text-center font-mono text-[11px] text-hh-text-muted"
                style={{ letterSpacing: "0.08em" }}
              >
                Takes 2 minutes · No credit card · No contract
              </p>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  return (
    <footer
      className="border-t px-6 py-16"
      style={{ borderColor: "var(--hh-border)", background: "var(--hh-black)" }}
    >
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              className="grid h-8 w-8 place-items-center rounded-md text-sm font-bold text-white"
              style={{ background: "var(--hh-orange)" }}
            >
              HH
            </span>
            <span className="text-[15px] font-semibold text-hh-text-primary">
              Horizon Haulers
            </span>
          </div>
          <p className="mt-4 max-w-xs text-[13px] leading-[1.65] text-hh-text-body">
            Truck dispatching for owner-operators and small fleets. 48 states. No
            contracts.
          </p>
          <div className="mt-6 space-y-2">
            <a
              href="tel:+13074436094"
              className="flex items-center gap-2 font-mono text-[12px] text-hh-text-body hover:text-hh-text-primary"
            >
              <Phone className="h-3.5 w-3.5" /> (307) 443-6094
            </a>
            <a
              href="mailto:dispatch@horizonhaulers.org"
              className="flex items-center gap-2 font-mono text-[12px] text-hh-text-body hover:text-hh-text-primary"
            >
              <Mail className="h-3.5 w-3.5" /> dispatch@horizonhaulers.org
            </a>
          </div>
        </div>

        {([
          {
            t: "Services",
            l: [
              { label: "Dry Van", href: "/#services" },
              { label: "Reefer", href: "/#services" },
              { label: "Flatbed", href: "/#services" },
              { label: "Hotshot", href: "/#services" },
              { label: "Box Truck", href: "/#services" },
              { label: "Power Only", href: "/#services" },
            ],
          },
          {
            t: "Company",
            l: [
              { label: "About", href: "/#why" },
              { label: "Coverage", href: "/#coverage" },
              { label: "Pricing", href: "/#pricing" },
              { label: "Contact", href: "/#cta" },
            ],
          },
          {
            t: "Tools",
            l: [
              { label: "Deadhead Calc", href: "/#tools" },
              { label: "Cost Per Mile", href: "/#tools" },
              { label: "IFTA Estimator", href: "/#tools" },
              { label: "Invoice Generator", href: "/#tools" },
            ],
          },
        ] as const).map((col) => (
          <div key={col.t}>
            <div
              className="font-mono text-[11px] text-hh-text-muted"
              style={{ letterSpacing: "0.12em" }}
            >
              {col.t.toUpperCase()}
            </div>
            <ul className="mt-4 space-y-2.5">
              {col.l.map((i) => (
                <li key={i.label}>
                  <a
                    href={i.href}
                    className="text-[13px] text-hh-text-body hover:text-hh-text-primary"
                  >
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className="mx-auto mt-12 flex max-w-[1200px] flex-col justify-between gap-3 border-t pt-6 text-[12px] text-hh-text-muted sm:flex-row"
        style={{ borderColor: "var(--hh-border)" }}
      >
        <div>© 2026 Horizon Haulers LLC</div>
        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-hh-text-body">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-hh-text-body">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
