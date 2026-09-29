export const company = {
  name: "ZetuTech LLC",
  location: "Somerset, New Jersey",
  shortLocation: "Somerset, NJ",
  legalEmail: "brian@zetutech.com",
  contactEmail: "brian@zetutech.com",
  // Set to a Cal.com / Calendly URL to enable direct booking; until then, CTAs route to /contact.
  bookingUrl: null as string | null,
} as const;

export const bookingHref = company.bookingUrl ?? "/contact";

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
  { label: "Talent", href: "/#talent" },
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
    eyebrow: "Built In-House",
    title: "AssignNet: The Standard in Verifiable Matching",
    description:
      "A multi-sided marketplace connecting clients with vetted academic and technical specialists. Every engagement is gated by identity verification, integrity scanning, and milestone-based delivery, with escrow-backed settlement so both sides of the market can transact with confidence.",
    status: "Platform Currently in Closed Beta",
  },
  features: [
    {
      icon: "shield-check",
      title: "Triple-Gate Integrity",
      description:
        "Mandatory asynchronous integrity scans and strict structural variance enforcement on every deliverable.",
    },
    {
      icon: "circle-dollar-sign",
      title: "Direct Escrow Settlement",
      description: "Secure Peer-to-Peer USD routing, released only against verified milestones.",
    },
  ],
} as const;

export type FeatureIcon = (typeof work.features)[number]["icon"];

export const leadership = {
  eyebrow: "About",
  title: "Engineered by Experience.",
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
