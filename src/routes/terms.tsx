import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/hh/Nav";
import { Footer } from "@/components/hh/Sections";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Horizon Haulers" },
      {
        name: "description",
        content:
          "Terms governing use of Horizon Haulers truck dispatching services and website.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="mt-3 font-mono text-[12px] text-hh-text-muted">
          Last updated: June 2026
        </p>
        <div className="prose mt-10 space-y-6 text-[15px] leading-[1.75] text-hh-text-body">
          <p>
            By using Horizon Haulers dispatching services you agree to these terms. Our
            service is offered on a flat weekly rate with no long-term contract. You may
            cancel with 7 days written notice by email or phone.
          </p>
          <h2 className="text-[22px] font-semibold text-hh-text-primary">Our role</h2>
          <p>
            Horizon Haulers acts as your dispatcher and locates loads, negotiates rates,
            and handles paperwork on your behalf. We are not a broker, a motor carrier, or
            a factoring company. You remain responsible for safe operation, hours of
            service, and compliance with all FMCSA regulations.
          </p>
          <h2 className="text-[22px] font-semibold text-hh-text-primary">Payment</h2>
          <p>
            Dispatch fees are billed weekly via the payment method on file. Fees are due
            regardless of how many loads were accepted in the period. Declined payments
            may pause dispatching until resolved.
          </p>
          <h2 className="text-[22px] font-semibold text-hh-text-primary">Liability</h2>
          <p>
            Horizon Haulers is not liable for broker non-payment, cargo claims, equipment
            failure, or any loss arising from operation of your vehicle. We will assist in
            collections when possible but recovery is not guaranteed.
          </p>
          <h2 className="text-[22px] font-semibold text-hh-text-primary">Contact</h2>
          <p>
            Questions? Email{" "}
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
