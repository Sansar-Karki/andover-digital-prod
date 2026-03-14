import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BOOKING_URL = "https://cal.com/sansar-karki-gsqccs";

type Page = "home" | "services" | "about" | "pricing" | "contact";

export default function AndoverDigitalWebsite() {
  const [page, setPage] = useState<Page>("home");

  const colors = {
    bg: "#F4EFE8",
    surface: "#FBF8F4",
    surfaceAlt: "#F7F1EA",
    text: "#141414",
    muted: "#666666",
    accent: "#E07A3F",
    line: "rgba(20,20,20,0.08)"
  };

  function PageTransition({ children }: { children: ReactNode }) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
  }

  function Header() {
    return (
      <header className="sticky top-0 z-30 backdrop-blur-md" style={{ background: "rgba(244,239,232,0.82)", borderBottom: `1px solid ${colors.line}` }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <button onClick={() => setPage("home")} className="flex items-center gap-3">
            <img src="/logo-a.png" className="h-9" alt="Andover Digital logo" />
            <span className="font-semibold text-lg tracking-tight text-[#141414]">Andover Digital</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-sm text-[#444]">
            <button onClick={() => setPage("services")} className="px-4 py-2 rounded-full hover:bg-black/5">Services</button>
            <button onClick={() => setPage("about")} className="px-4 py-2 rounded-full hover:bg-black/5">About</button>
            <button onClick={() => setPage("pricing")} className="px-4 py-2 rounded-full hover:bg-black/5">Pricing</button>
            <button onClick={() => setPage("contact")} className="ml-2 px-5 py-2.5 rounded-full bg-black text-white font-medium shadow-sm">
              Book Call
            </button>
          </div>
        </div>
      </header>
    );
  }

  function SectionLabel({ children }: { children: ReactNode }) {
    return <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8b4f2a]">{children}</div>;
  }

  function Hero() {
    return (
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-12 md:pt-14 md:pb-16 lg:pt-16 lg:pb-20">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-[560px]">
            <SectionLabel>Automation for growth</SectionLabel>
            <h1 className="mt-4 text-5xl md:text-7xl font-semibold leading-[0.9] tracking-[-0.05em] text-[#141414]">
              Business systems
              <br />
              that feel
              <br />
              <span style={{ color: colors.accent }}>effortless</span>
            </h1>

            <p className="mt-6 max-w-[520px] text-lg leading-8 text-[#666666]">
              Andover Digital builds automation systems for local businesses that need faster replies, cleaner operations, and less repetitive work sitting on someone’s plate.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <button onClick={() => setPage("contact")} className="px-6 py-3.5 rounded-xl bg-black text-white font-medium shadow-sm">
                Book discovery call
              </button>
              <button onClick={() => setPage("services")} className="px-6 py-3.5 rounded-xl border border-black/10 bg-[#faf7f3] text-[#141414] font-medium">
                View services
              </button>
            </div>
          </div>

          <div className="relative h-[520px] md:h-[560px] lg:h-[600px]">
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] md:h-[340px] md:w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(224,122,63,0.9)_0%,rgba(224,122,63,0.82)_58%,rgba(224,122,63,0.15)_100%)] shadow-[0_30px_70px_rgba(224,122,63,0.22)]" />

            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-[1.8rem] border border-white/50 bg-white/70 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.12)] backdrop-blur">
              <img
                src="/logo-a.png"
                alt="Andover Digital A logo"
                className="h-32 w-32 rounded-[1.3rem] object-cover"
              />
            </div>

            <div className="absolute left-[12%] top-[16%] rotate-[-8deg] rounded-2xl bg-[#ffd76a] px-5 py-4 shadow-lg border border-black/5 text-[#6d5310] font-semibold">
              Leads
            </div>
            <div className="absolute right-[12%] top-[16%] rotate-[6deg] rounded-2xl bg-white px-5 py-4 shadow-lg border border-black/5 text-[#4a4a4a] font-semibold">
              CRM
            </div>

            {[
              {
                title: "Form capture",
                text: "New inquiries are collected cleanly and routed to the right system instantly.",
                pos: "left-[-2%] top-[28%]"
              },
              {
                title: "Status sync",
                text: "Lead activity updates inside the CRM or tracker without manual entry.",
                pos: "right-[-2%] top-[38%]"
              },
              {
                title: "Instant response",
                text: "New leads get handled immediately with the right first-touch message.",
                pos: "left-[4%] bottom-[6%]"
              },
              {
                title: "Automated follow-up",
                text: "Sequences continue automatically until the conversation moves forward.",
                pos: "right-[4%] bottom-[4%]"
              }
            ].map((card) => (
              <div
                key={card.title}
                className={`absolute ${card.pos} w-[220px] rounded-2xl bg-white px-5 py-5 shadow-lg border border-black/5`}
              >
                <div className="text-sm font-semibold text-[#141414]">{card.title}</div>
                <div className="mt-2 text-xs text-[#666666] leading-5">{card.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["24/7", "Runs in the background"],
            ["Faster", "Lead response time"],
            ["Less", "Manual follow-up work"],
            ["Cleaner", "Operational visibility"]
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl bg-[#faf7f3] px-4 py-4 border border-black/5 shadow-sm min-h-[98px] flex flex-col justify-center">
              <div className="text-xl font-semibold text-[#141414]">{value}</div>
              <div className="mt-1 text-sm text-[#666666] leading-5">{label}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  function Problems() {
    const items = [
      ["Slow responses", "New leads often wait too long before anyone gets back to them."],
      ["Manual follow ups", "Important conversations continue only if someone remembers the next step."],
      ["Scattered information", "Customer details end up split across inboxes, spreadsheets, and CRMs."],
      ["Repeated admin work", "Teams spend hours every week doing tasks software should already handle."]
    ];

    return (
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20" style={{ borderTop: `1px solid ${colors.line}` }}>
        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 items-start">
          <div>
            <SectionLabel>Where time gets lost</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold text-[#141414] leading-tight max-w-md">
              The operational issues that quietly slow growth down.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {items.map(([title, text]) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-sm border border-black/5">
                <h3 className="font-semibold text-xl text-[#141414]">{title}</h3>
                <p className="text-[#666666] mt-3 leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function Systems() {
    const items = [
      ["Lead response automation", "Immediate replies and structured follow up sequences so new inquiries do not sit untouched."],
      ["CRM workflow automation", "Customer information moves between systems automatically instead of being copied by hand."],
      ["Review generation", "Customers are prompted for feedback at the right time without adding more admin work."]
    ];

    return (
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel>What we offer</SectionLabel>
          <h2 className="mt-4 text-4xl font-semibold text-[#141414] leading-tight">
            The systems that make the business easier to run.
          </h2>
          <p className="mt-4 text-[#666666] leading-7">
            Each build is designed around the workflow itself, so the automation fits the business instead of forcing the business to adapt to the software.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map(([title, text], index) => (
            <div key={title} className="rounded-2xl bg-white p-7 border border-black/5 shadow-sm">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center text-white font-semibold mb-5" style={{ background: index === 1 ? "#141414" : colors.accent }}>
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-[#141414]">{title}</h3>
              <p className="text-[#666666] mt-3 leading-7">{text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  function CTA() {
    return (
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-[#141414] text-white rounded-[2rem] p-12 md:p-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.16)]">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight max-w-3xl mx-auto">
            If the team is still doing this manually, there is probably a better system.
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/70 leading-8">
            A short discovery call is enough to identify the bottleneck, figure out what should be automated, and decide whether a build makes sense.
          </p>
          <div className="mt-8 flex justify-center">
            <button onClick={() => setPage("contact")} className="px-6 py-3 rounded-xl font-medium text-white" style={{ background: colors.accent }}>
              Book discovery call
            </button>
          </div>
        </div>
      </section>
    );
  }

  function HomePage() {
    return (
      <>
        <Hero />
        <Problems />
        <Systems />
        <CTA />
      </>
    );
  }

  function PageHero({ label, title, text }: { label: string; title: string; text: string }) {
    return (
      <div className="max-w-3xl">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-[0.95] tracking-tight text-[#141414]">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#666666] max-w-2xl">{text}</p>
      </div>
    );
  }

  function ServicesPage() {
    const items = [
      ["Lead response automation", "Immediate replies, structured follow-up, and better handling from the first inquiry to the next step.", "New leads should not sit untouched when the first response can happen automatically."],
      ["CRM workflow systems", "Customer information moves between forms, inboxes, spreadsheets, and CRMs without manual copying.", "This keeps records cleaner and makes it easier to see what is happening across the pipeline."],
      ["Review generation", "Automated review requests help turn completed work into visible proof and stronger local trust.", "The ask happens at the right time instead of being forgotten after the job is done."],
      ["Custom internal workflows", "Operational automations reduce repeated admin work and keep routine processes moving in the background.", "The build is shaped around the workflow itself so it fits the way the business already runs."]
    ];

    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <PageHero
          label="Services"
          title="Systems built around the parts of the business that slow everything down."
          text="The work starts with the operational bottleneck, not the software. The goal is to reduce delay, remove repeated admin work, and keep the process moving without more manual effort."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {items.map(([title, text, extra], index) => (
            <div key={title} className="rounded-[1.6rem] bg-white border border-black/5 p-8 shadow-sm">
              <div className="h-11 w-11 rounded-xl flex items-center justify-center text-white font-semibold mb-6" style={{ background: index % 2 === 0 ? colors.accent : "#141414" }}>
                {index + 1}
              </div>
              <h3 className="text-2xl font-semibold text-[#141414] leading-tight">{title}</h3>
              <p className="mt-4 text-[#666666] leading-7">{text}</p>
              <p className="mt-4 text-[#666666] leading-7">{extra}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function AboutPage() {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-[0.44fr_0.56fr] gap-12 items-center">
          <div className="overflow-hidden rounded-[1.8rem] bg-white border border-black/5 shadow-sm">
            <img src="/headshot.jpg" className="w-full h-full object-cover" alt="Sansar Karki" />
          </div>

          <div>
            <PageHero
              label="About"
              title="Built by someone who cares whether the system still works when the day gets busy."
              text="I build automation systems for businesses that want faster response times, cleaner operations, and fewer repetitive tasks sitting on someone’s plate."
            />
            <div className="mt-8 space-y-6 text-[#666666] leading-8 text-lg max-w-2xl">
              <p>
                The goal is not to add more software for the sake of it. The goal is to make the process easier to run, easier to trust, and easier to maintain once it is live.
              </p>
              <p>
                Andover Digital focuses on practical systems for local businesses, consultants, contractors, and service companies that need operations to move more smoothly in the background.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            ["Reliable builds", "Automations are designed to keep working when real-world inputs start getting messy."],
            ["Clear workflows", "The system should make sense to the people using it, not just the person who built it."],
            ["Practical outcomes", "The measure of success is saved time, cleaner operations, and less things falling through the cracks."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-[1.5rem] bg-white border border-black/5 p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-[#141414]">{title}</h3>
              <p className="mt-3 text-[#666666] leading-7">{text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function PricingPage() {
    const tiers = [
      {
        name: "Starter Build",
        price: "$750+",
        text: "Best for one focused workflow with a clear business use case.",
        features: ["1 core automation", "Basic integrations", "Setup and testing", "Launch support"]
      },
      {
        name: "Growth System",
        price: "$1.5k+",
        text: "Best for businesses that need a fuller lead or operations system.",
        features: ["Multi-step automation", "CRM workflow sync", "Follow-up logic", "Reporting visibility"]
      },
      {
        name: "Custom Ops Build",
        price: "Custom",
        text: "Best for more technical builds with several moving parts.",
        features: ["Complex workflows", "Custom logic", "Advanced automation design", "Ongoing refinement"]
      }
    ];

    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <PageHero
          label="Pricing"
          title="Clear starting points for businesses that want practical automation work."
          text="Final pricing depends on complexity, integrations, and how much custom logic the workflow needs, but these ranges give a realistic starting point."
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <div key={tier.name} className="rounded-[1.8rem] border border-black/5 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8b4f2a]">{tier.name}</div>
              <div className="mt-5 text-5xl font-semibold tracking-tight text-[#141414]">{tier.price}</div>
              <p className="mt-4 text-[#666666] leading-7">{tier.text}</p>
              <div className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <div key={feature} className="rounded-xl bg-[#faf7f3] border border-black/5 px-4 py-3 text-sm text-[#4d4d4d]">
                    {feature}
                  </div>
                ))}
              </div>
              <button onClick={() => setPage("contact")} className="mt-8 w-full rounded-xl px-5 py-3 font-medium text-white" style={{ background: index === 1 ? colors.accent : "#141414" }}>
                Ask about this build
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function ContactPage() {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[0.42fr_0.58fr] gap-10 items-start">
          <div>
            <PageHero
              label="Book a call"
              title="Let’s map the workflow and see what should be automated."
              text="A short discovery call is enough to understand the bottleneck, identify where time is getting lost, and decide whether a build makes sense."
            />

            <div className="mt-8 space-y-4 max-w-xl">
              {[
                "We look at the workflow that is slowing the business down.",
                "We identify what should be automated first.",
                "You get a clearer sense of scope, direction, and next steps."
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl bg-white border border-black/5 p-4 shadow-sm">
                  <div className="h-9 w-9 rounded-xl flex items-center justify-center text-white font-semibold" style={{ background: index === 1 ? "#141414" : colors.accent }}>
                    {index + 1}
                  </div>
                  <p className="text-[#4d4d4d] leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] overflow-hidden border border-black/5 bg-white p-3 shadow-sm">
            <iframe src={BOOKING_URL} className="w-full h-[720px] rounded-[1.2rem] bg-white" title="Schedule a call" />
          </div>
        </div>
      </div>
    );
  }

  function renderPage() {
    switch (page) {
      case "services":
        return <ServicesPage />;
      case "about":
        return <AboutPage />;
      case "pricing":
        return <PricingPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  }

  return (
    <div style={{ background: colors.bg }} className="min-h-screen text-[#141414]">
      <Header />
      <PageTransition>{renderPage()}</PageTransition>
    </div>
  );
}

