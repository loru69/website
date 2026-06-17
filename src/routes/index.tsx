import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/hh/Nav";
import { Hero } from "@/components/hh/Hero";
import {
  HowItWorks,
  Services,
  Coverage,
  Pricing,
  Tools,
  Why,
  Testimonials,
  FAQ,
  CTABanner,
  Footer,
} from "@/components/hh/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Horizon Haulers — 48-State Truck Dispatching for Owner-Operators" },
      {
        name: "description",
        content:
          "Flat-rate truck dispatching for owner-operators and small fleets across 48 states. We find loads, negotiate rates, and handle paperwork. No contracts.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen" style={{ background: "var(--hh-black)" }}>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Coverage />
        <Pricing />
        <Tools />
        <Why />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
