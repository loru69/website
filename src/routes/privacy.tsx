import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/hh/Nav";
import { Footer } from "@/components/hh/Sections";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Horizon Haulers" },
      {
        name: "description",
        content:
          "How Horizon Haulers collects, uses, and protects information from carriers and visitors.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--hh-black)" }}>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <Link
          to="/"
          className="font-mono text-[11px] uppercase tracking-[0.12em] text-hh-text-muted hover:text-hh-text-primary"
        >
          ← Back home
        </Link>
        <h1 className="mt-6 text-[40px] font-extrabold tracking-tight text-hh-text-primary">
          Privacy Policy
        </h1>
        <p className="mt-3 font-mono text-[12px] text-hh-text-muted">
          Last updated: June 2026
        </p>
        <div className="prose mt-10 space-y-6 text-[15px] leading-[1.75] text-hh-text-body">
          <p>
            Horizon Haulers LLC ("we", "us") provides truck dispatching services to
            owner-operators and small fleets. This policy explains what we collect when
            you use our website or services and how we use it.
          </p>
          <h2 className="text-[22px] font-semibold text-hh-text-primary">
            Information we collect
          </h2>
          <p>
            When you submit our lead form we collect your name, phone, email, equipment
            type, fleet size, and any notes you provide. When you onboard as a carrier we
            also collect MC/DOT numbers, insurance certificates, and authority documents
            required to dispatch loads on your behalf.
          </p>
          <h2 className="text-[22px] font-semibold text-hh-text-primary">How we use it</h2>
          <p>
            We use your information to contact you about dispatching, to book and confirm
            loads with brokers, to verify your authority, and to send paperwork required
            by FMCSA. We do not sell your data.
          </p>
          <h2 className="text-[22px] font-semibold text-hh-text-primary">Contact</h2>
          <p>
            Questions about this policy? Email{" "}
            <a
              href="mailto:dispatch@horizonhaulers.org"
              className="text-hh-text-primary underline decoration-dotted underline-offset-4"
            >
              dispatch@horizonhaulers.org
            </a>{" "}
            or call{" "}
            <a
              href="tel:+13074436094"
              className="text-hh-text-primary underline decoration-dotted underline-offset-4"
            >
              (307) 443-6094
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
