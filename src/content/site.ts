export const company = {
  name: "ZetuTech LLC",
  location: "Somerset, New Jersey",
  shortLocation: "Somerset, NJ",
  legalEmail: "brian@zetutech.com",
  contactEmail: "brian@zetutech.com",
  // Google Calendar appointment schedule; set to null to route booking CTAs to /contact instead.
  bookingUrl:
    "https://calendar.google.com/appointments/schedules/AcZssZ0HFt_vY03t4q4QgOnvqRA5tki2UzKrtYsBEUSPQwjcM13EOhX1PuSK5g70XLmNHeVQrTPfiOn8" as
      | string
      | null,
  linkedinUrl: "https://www.linkedin.com/in/brian-wangila-mba-9a0bb84/",
} as const;

export const bookingHref = company.bookingUrl ?? "/contact";

/** The booking page is external, so booking CTAs open it in a new tab and keep the site open. */
export const bookingLinkProps = company.bookingUrl
  ? ({ target: "_blank", rel: "noopener noreferrer" } as const)
  : {};

/** Site-wide SEO defaults, used by metadata, the sitemap, robots, and structured data. */
export const seo = {
  url: "https://zetutech.com",
  title: "ZetuTech LLC | Software Architecture & Advisory",
  description:
    "Boutique software architecture firm in Somerset, NJ. We help growing companies modernize legacy platforms, scale on AWS, and put agentic AI into production, led directly by a senior architect.",
} as const;

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Engagements", href: "/#engagements" },
  { label: "Talent", href: "/talent" },
  { label: "Approach", href: "/#approach" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
] as const;

export const hero = {
  eyebrow: "Software Architecture & Advisory",
  headline: ["Systems that scale", "Decisions that hold"],
  subtitle:
    "We help growing companies modernize legacy platforms, scale on the cloud, and ship AI that works in production. You work directly with a senior architect, not a sales team.",
  primaryCta: "Book a Consultation",
  secondaryCta: { label: "View Services", href: "/#services" },
  proofPoints: ["15+ years in enterprise architecture", "Senior-led, every engagement", "Somerset, NJ · Remote-first"],
} as const;

export const services = {
  eyebrow: "Services",
  title: "Architecture for systems that can’t afford to fail.",
  description:
    "Focused, senior-level engagements across the full lifecycle of a platform — from the first whiteboard to production and beyond.",
  items: [
    {
      icon: "cloud",
      title: "Cloud & Microservices Architecture",
      description:
        "Design resilient, observable distributed systems on AWS that scale with demand instead of against it.",
      outcomes: ["Service boundaries & domain design", "AWS reference architectures", "Cost & reliability reviews"],
    },
    {
      icon: "modernization",
      title: "Legacy System Modernization",
      description:
        "Migrate monoliths and aging platforms incrementally, without freezing the business or betting it on a rewrite.",
      outcomes: ["Strangler-fig migration plans", "Data migration strategy", "Zero-downtime cutovers"],
    },
    {
      icon: "ai",
      title: "AI & Agentic Workflow Integration",
      description:
        "Move AI from prototype to production with evaluation, guardrails, and workflows your team can actually operate.",
      outcomes: ["Use-case & feasibility assessment", "RAG & agent architectures", "Evaluation & safety guardrails"],
    },
    {
      icon: "marketplace",
      title: "Marketplace & Platform Engineering",
      description:
        "Build multi-sided platforms with the trust layer built in: verification, payments, escrow, and integrity controls.",
      outcomes: ["Matching & bidding systems", "Payments & escrow flows", "Trust & safety infrastructure"],
    },
    {
      icon: "advisory",
      title: "Fractional CTO & Architecture Reviews",
      description:
        "Senior technical leadership on demand — for roadmaps, due diligence, hiring, and high-stakes decisions.",
      outcomes: ["Architecture & code reviews", "Technical due diligence", "Roadmap & team guidance"],
    },
  ],
} as const;

export type ServiceIcon = (typeof services.items)[number]["icon"];

export const engagements = {
  eyebrow: "Ways to Engage",
  title: "Clear scope. Clear outcomes.",
  description:
    "Three engagement models, each designed to deliver something concrete. Most clients start with an assessment.",
  items: [
    {
      name: "Architecture Assessment",
      duration: "2–3 weeks · Fixed fee",
      description: "A deep review of your current system and a prioritized roadmap you can execute with or without us.",
      includes: [
        "Stakeholder & codebase review",
        "Risk, cost & scalability analysis",
        "Target architecture diagrams",
        "Written roadmap & readout session",
      ],
      featured: true,
    },
    {
      name: "Build Sprint",
      duration: "6–12 weeks · Milestone-based",
      description: "Hands-on delivery of a defined outcome — a migration phase, a new platform capability, or an AI system.",
      includes: [
        "Architecture & implementation",
        "Milestone demos & acceptance",
        "Documentation & runbooks",
        "Knowledge transfer to your team",
      ],
      featured: false,
    },
    {
      name: "Fractional Architect",
      duration: "Monthly retainer",
      description: "Ongoing senior guidance for teams that need architectural leadership without a full-time hire.",
      includes: [
        "Reserved monthly hours",
        "Design & code reviews",
        "Roadmap & vendor decisions",
        "Priority async access",
      ],
      featured: false,
    },
  ],
} as const;

export const talent = {
  eyebrow: "Engineering Talent",
  title: "Architect-vetted engineers, on demand.",
  description:
    "Extend your team with software engineers screened and technically vetted by a senior architect — not a recruiter. Contract or direct hire, from the United States and Kenya.",
  // Short version shown on the home page; the full offer lives at /talent.
  teaser: {
    description:
      "Need hands, not just a blueprint? We supply software engineers screened by a senior architect, on contract or as direct hires.",
    cta: "Explore Engineering Talent",
  },
  models: [
    {
      name: "Team Extension",
      type: "Contract",
      description:
        "Vetted engineers embedded in your team on a monthly contract, with optional architectural oversight from ZetuTech.",
      includes: [
        "Monthly engagement, flexible scaling",
        "Onboarded to your tools and workflows",
        "Optional architect oversight & code reviews",
        "Option to convert to a direct hire",
      ],
      cta: "Request Engineers",
    },
    {
      name: "Direct Hire",
      type: "Permanent placement",
      description:
        "We source, vet, and present candidates for your permanent roles. You hire them directly onto your team.",
      includes: [
        "Role scoping with a senior architect",
        "Practical assessments & system-design interviews",
        "A focused shortlist of pre-vetted candidates",
        "Support through offer and onboarding",
      ],
      cta: "Start a Search",
    },
  ],
  hubs: [
    {
      region: "United States",
      detail: "Onshore engineers for roles that need US time zones, on-site presence, or US work authorization.",
    },
    {
      region: "Kenya",
      detail:
        "Engineers from Nairobi, East Africa’s leading tech hub — strong English, daily overlap with US business hours, and exceptional value.",
    },
  ],
  roles: [
    "Frontend",
    "Backend",
    "Full-Stack",
    "Mobile",
    "Cloud & DevOps",
    "Site Reliability",
    "Data Engineering",
    "ML & AI",
    "QA & Test Automation",
    "Engineering Leads",
  ],
  vetting: [
    "Profile & reference screen",
    "Practical technical assessment",
    "System-design interview with a senior architect",
    "Matched to your stack and team",
  ],
} as const;

export const approach = {
  eyebrow: "Approach",
  title: "A blueprint before a single line of code.",
  steps: [
    {
      title: "Discover",
      description: "Understand the business goals, constraints, and the system as it really is — not as the diagram says.",
    },
    {
      title: "Architect",
      description: "Design the target state and an incremental path to it, with trade-offs made explicit and documented.",
    },
    {
      title: "Build",
      description: "Deliver in verifiable milestones, with working software and measurable progress at every step.",
    },
    {
      title: "Hand Off",
      description: "Leave your team with documentation, runbooks, and the confidence to own what was built.",
    },
  ],
} as const;

export const work = {
  eyebrow: "Proof of Practice",
  title: "We build what we advise on.",
  description:
    "ZetuTech doesn’t only design platforms for clients — we engineer and operate our own. AssignNet is where our architecture principles are tested in production.",
  flagship: {
    eyebrow: "Built & Operated In-House",
    title: "AssignNet: a trust-first, two-sided marketplace",
    description:
      "AssignNet matches clients with vetted specialists for research and technical work. We designed, built, and run the whole platform: competitive bidding, milestone-based delivery, real-time collaboration, and a mediation process for when things go wrong.",
    status: "Live in production",
    caseStudy: { href: "/work/assignnet", cta: "Read the case study" },
  },
  features: [
    {
      icon: "shield-check",
      title: "Verification & Integrity Pipeline",
      description:
        "Identity and credential checks (KYC) before anyone can bid, and automated AI and plagiarism scanning on every delivery through the Copyleaks API.",
    },
    {
      icon: "circle-dollar-sign",
      title: "Two Payment Rails",
      description:
        "Stripe escrow that releases funds only on approval, alongside pay-after-review settlement over M-Pesa or bank transfer.",
    },
  ],
} as const;

export type FeatureIcon = (typeof work.features)[number]["icon"];

/** Technical case study at /work/assignnet. Facts are drawn from the AssignNet codebase. */
export const assignnetCaseStudy = {
  eyebrow: "Case Study",
  title: "Engineering trust into a two-sided marketplace.",
  summary:
    "AssignNet lets clients post research and technical work, receive bids from vetted specialists, and pay only when the work checks out. We architected, built, and operate the whole platform. Here is how it works under the hood.",
  facts: [
    { label: "Role", value: "Architecture, build & operations" },
    { label: "Frontend", value: "Next.js 16 · TypeScript · Vercel" },
    { label: "Backend", value: "FastAPI · Python 3.12 · Railway" },
    { label: "Data", value: "PostgreSQL (Supabase) · Prisma" },
  ],
  challenge: {
    title: "The problem",
    paragraphs: [
      "A marketplace where strangers exchange money for work fails the moment either side stops trusting it. Clients need to know the specialist is who they claim to be and that the work is original. Specialists need to know they will be paid. The platform needs both sides to stay on-platform, across the United States and Kenya.",
      "That turns a simple listing site into a set of hard problems: identity verification, automated quality gates, escrowed payments on two continents, and moderation that works without a large operations team.",
    ],
  },
  architecture: {
    title: "Architecture at a glance",
    description:
      "A modular monolith: one FastAPI service organized into 17 feature modules, with a typed Next.js frontend and a single PostgreSQL database. Simple to operate, with clear seams if a module ever needs to be split out.",
    layers: [
      {
        name: "Web app",
        detail: "Next.js 16 on Vercel. Typed forms with Zod, hardened security headers, Playwright end-to-end tests.",
      },
      {
        name: "API",
        detail:
          "FastAPI on Railway, containerized, with health-checked deploys. Modules for tasks, bids, integrity, wallet, payouts, support, and admin.",
      },
      {
        name: "Data",
        detail: "PostgreSQL on Supabase with 31 Prisma models and 48 versioned migrations. File storage on Supabase Storage.",
      },
      {
        name: "Integrations",
        detail: "Stripe (escrow and Connect payouts), Paystack (KES payouts), Copyleaks (AI and plagiarism scans), Resend (email), ClamAV.",
      },
    ],
  },
  decisions: {
    title: "Key design decisions",
    items: [
      {
        title: "Quality gates as an explicit state machine",
        body: "Every delivery passes an integrity scan before the client can see it. Rather than a flag on the task, the scan is modeled as task states: scanning, passed, revision required, and failure paths. Files stay hidden until a scan passes. When the scanning provider's webhook is late, the task moves to a pending state for automatic recovery, and after four hours it escalates to a human auditor, so no task can get stuck silently.",
      },
      {
        title: "Our own ledger, not the payment provider, is the source of truth",
        body: "Every payment event writes a row to an internal ledger of credits and debits, each with a clear status: pending, completed, or reversed. Balances, escrow holds, and fees are computed from the ledger, not by calling Stripe. That makes wallets fast, auditable, and correct even when a provider is slow or down.",
      },
      {
        title: "Two payment rails for two markets",
        body: "Clients can pay through Stripe escrow, where funds release only on approval, or a pay-after-review track. Specialists are paid through Stripe Connect or, in Kenya, through Paystack to M-Pesa or a bank account. If the platform's local balance is short, payouts queue for retry instead of failing.",
      },
      {
        title: "Deterministic moderation, by design",
        body: "Messages are checked for shared contact details and attempts to take payment off-platform, and flagged for review without blocking the conversation. Abusive language is blocked or censored by tier, and repeat offenders are flagged automatically. All of it is rule-based rather than machine learning, so every decision is predictable and explainable.",
      },
      {
        title: "Defense in depth for accounts and files",
        body: "Uploads are checked twice: the file's actual bytes must match its declared type, then it is scanned for malware. Accounts support authenticator-app MFA, sessions are tracked, and security events are audit-logged. When payout details change, the owner gets a one-time link to freeze the account if it wasn't them.",
      },
    ],
  },
  practice: {
    title: "How it's engineered",
    items: [
      "90+ backend tests across unit, integration, and security suites",
      "Browser end-to-end tests with Playwright",
      "Typed end to end: Pydantic on the API, TypeScript and Zod on the web",
      "Containerized API with health-checked, auto-restarting deploys",
      "Versioned schema migrations and pre-commit hooks",
    ],
  },
  takeaway: {
    title: "What this means for your project",
    body: "The problems AssignNet solves (verification, escrow and payouts, integrity checks, moderation, and reliable third-party integrations) show up in most marketplaces and platforms. We bring these patterns, and the lessons from running them in production, to client engagements.",
    services: ["Marketplace & Platform Engineering", "Cloud & Microservices Architecture"],
  },
} as const;

export const leadership = {
  eyebrow: "About",
  title: "Engineered by Experience.",
  founder: { name: "Brian Wangila", role: "Founder · Senior Software Architect" },
  paragraphs: [
    "ZetuTech LLC was founded by Brian Wangila, a Senior Software Architect with more than 15 years of experience in system architecture, cloud microservices, and enterprise digital transformation.",
    "That career has been spent migrating legacy enterprise systems, decomposing monoliths into resilient distributed services, and designing platforms where correctness is not optional.",
    "As a boutique firm, every engagement is led personally by Brian — no hand-offs to junior teams, no layers between you and the person designing your system.",
  ],
  credentials: [
    { title: "Machine Learning", issuer: "Cornell University" },
    { title: "Systems Design", issuer: "Cornell University" },
    { title: "Designing and Building AI Products and Services", issuer: "MIT xPro" },
  ],
  terminal: {
    title: "zetutech://leadership",
    command: "zetutech query --founder --verbose",
    rows: [
      { key: "LOCATION", value: "Somerset, NJ" },
      { key: "EXPERIENCE", value: "15+ years" },
      { key: "FOCUS", value: "B2B Marketplaces, Agentic Workflows, AI" },
      { key: "STACK", value: "Next.js, Python, PostgreSQL, AWS" },
    ],
  },
} as const;

export const ctaBand = {
  title: "Have a system that needs to scale?",
  description:
    "Tell us where you are and where you need to be. You’ll get a straight answer on whether we can help — usually within one business day.",
  primary: "Book a Consultation",
  secondary: { label: "Send a Message", href: "/contact" },
} as const;

export const contactOptions = {
  services: [
    ...services.items.map((item) => item.title),
    "Engineering Talent — Team Extension (Contract)",
    "Engineering Talent — Direct Hire",
    "Not sure yet",
  ],
  budgets: ["Under $10k", "$10k – $25k", "$25k – $75k", "$75k+", "Not sure yet"],
  timelines: ["As soon as possible", "Within 1 month", "1–3 months", "Just exploring"],
};

export const footer = {
  links: [
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
  copyright: "© 2026 ZetuTech LLC. All rights reserved.",
} as const;

export const legal = {
  effectiveDate: "September 29, 2026",
} as const;
