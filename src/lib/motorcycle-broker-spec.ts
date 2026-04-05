export const specMeta = {
  eyebrow: "SPEC-1",
  title: "AI-Brokered Motorcycle Deal Orchestration",
  subtitle:
    "A human-in-the-loop operating blueprint for compliant cross-border motorcycle sourcing between Italy and France.",
  summary:
    "The MVP positions the operator as a transparent intermediary, not the owner or seller of record, with AI constrained to drafting, extraction, scoring, and workflow support."
} as const;

export const coreConstraints = [
  "Do not assume ownership of the motorcycle.",
  "Do not hold client funds or operate as escrow.",
  "Do not misrepresent the operator as the seller.",
  "Do not automate scraping or outbound messaging where platform rules forbid it.",
  "Keep a human operator in the approval loop for outreach and buyer-facing communications."
];

export const workflowLanes = [
  {
    name: "Lane A",
    title: "Sourcing",
    description: "Compliant listing ingestion from approved feeds, manual imports, and operator-assisted capture.",
    outcomes: ["normalize listings", "dedupe candidates", "score opportunities", "reject weak leads early"]
  },
  {
    name: "Lane B",
    title: "Seller Negotiation",
    description: "Human-approved Italian outreach, document checks, negotiation tracking, and seller pre-qualification.",
    outcomes: ["draft outreach", "track responsiveness", "verify docs", "align on floor price"]
  },
  {
    name: "Lane C",
    title: "Buyer Conversion",
    description: "Transparent French publication, buyer qualification, transport coordination, and closeout tracking.",
    outcomes: ["publish disclosed listing", "qualify buyers", "coordinate payment path", "track paperwork"]
  }
] as const;

export const architectureBlocks = [
  {
    title: "Input Layer",
    items: [
      "Manual CSV import",
      "Copy and paste parser",
      "Approved partner or API feeds",
      "Browser assist mode only when allowed"
    ]
  },
  {
    title: "Core Platform",
    items: [
      "Ingestion service and normalizer",
      "Opportunity scoring engine",
      "CRM and workflow API",
      "AI orchestrator with schema-validated tasks",
      "Compliance rules engine and audit log"
    ]
  },
  {
    title: "Execution Layer",
    items: [
      "Messaging gateway for human-approved sends",
      "French listing composer",
      "Transport quote tracking",
      "Document verification workflows",
      "Separate fee and payout handling"
    ]
  }
] as const;

export const scoringWeights = [
  { factor: "Spread", weight: "35%", note: "FR fair value minus acquisition, transport, and fee buffer." },
  { factor: "Cleanliness", weight: "20%", note: "Signals from image count, description quality, and condition clues." },
  { factor: "Seller latency", weight: "15%", note: "Observed responsiveness from current or historical threads." },
  { factor: "Listing age", weight: "15%", note: "Bonus after day 5 with a cap for stale inventory." },
  { factor: "Paperwork", weight: "10%", note: "Confidence in registration docs, VIN proof, and maintenance records." },
  { factor: "Demand fit", weight: "5%", note: "How well the bike matches the chosen niche strategy." }
] as const;

export const scoreBands = [
  { label: "80+", meaning: "Hot", description: "Push into outreach queue immediately." },
  { label: "65-79", meaning: "Workable", description: "Worth operator review and selective follow-up." },
  { label: "<65", meaning: "Skip", description: "Reject unless manually promoted for strategic reasons." }
] as const;

export const aiTasks = [
  "Extract listing facts into structured JSON.",
  "Classify red flags from listing text, image metadata, and conversations.",
  "Draft seller outreach in Italian for operator approval.",
  "Summarize seller replies and recommend next best action.",
  "Generate transparent French brokered listing copy with disclosures.",
  "Draft buyer qualification replies in French with policy checks.",
  "Summarize phone calls or voice notes into auditable notes."
] as const;

export const sellerStates = [
  "New lead",
  "Awaiting outreach approval",
  "Contacted",
  "Seller responsive",
  "Pre-qualified",
  "Negotiating",
  "Reserved at target",
  "Ready to list",
  "Listed in France",
  "Buyer interested",
  "Deal coordinating",
  "Completed or cancelled"
] as const;

export const buyerStages = [
  "New inquiry",
  "Intent check",
  "Financing and timing check",
  "Disclosure acknowledged",
  "Reservation fee requested or seller introduction",
  "Transport selected",
  "Paperwork complete",
  "Closed won or lost"
] as const;

export const disclosurePoints = [
  "The bike is sourced through a partner seller in Italy.",
  "The broker coordinates verification, transport, and paperwork.",
  "Ownership remains with the seller until the sale closes."
] as const;

export const pricingFields = [
  "seller_ask",
  "seller_min_accepted",
  "estimated_transport",
  "target_broker_fee"
] as const;

export const complianceChecks = {
  beforePublish: [
    "Seller availability confirmed within SLA window.",
    "Mandatory document checklist completed.",
    "Disclosure text is present.",
    "No ownership claim by the broker.",
    "No fake location or registration claims.",
    "No unsupported condition claims such as accident free.",
    "Operator approval recorded."
  ],
  beforePayment: [
    "Buyer has seller identity and payment destination.",
    "Broker fee invoice is separate if the broker collects a fee.",
    "Transport responsibility is explicit."
  ]
} as const;

export const dataModel = [
  {
    table: "listings",
    purpose: "Normalized source listing records and raw payload capture.",
    columns: ["source_platform", "source_listing_id", "source_url", "make", "model", "year", "mileage_km", "price_eur"]
  },
  {
    table: "opportunities",
    purpose: "Scored candidate deals, market estimate, and operator ownership.",
    columns: ["listing_id", "fr_market_estimate_eur", "target_buy_eur", "transport_estimate_eur", "broker_fee_target_eur", "score"]
  },
  {
    table: "contacts",
    purpose: "Seller, buyer, and carrier identities with role-aware metadata.",
    columns: ["role", "full_name", "phone", "email", "language", "country"]
  },
  {
    table: "deals",
    purpose: "Commercial state, pricing, and compliance status for active transactions.",
    columns: ["opportunity_id", "seller_contact_id", "buyer_contact_id", "public_price_eur", "broker_fee_eur", "state"]
  },
  {
    table: "messages",
    purpose: "Inbound and outbound communication history with AI draft and approval trace.",
    columns: ["deal_id", "direction", "channel", "participant_role", "body", "ai_draft", "approved_by", "sent_at"]
  },
  {
    table: "documents",
    purpose: "Document checklist, verification state, and extracted fields.",
    columns: ["deal_id", "doc_type", "status", "file_ref", "extracted_fields", "verified_by"]
  },
  {
    table: "audit_events",
    purpose: "Immutable trace of outputs, approvals, message sends, and price changes.",
    columns: ["entity_type", "entity_id", "event_type", "actor_type", "actor_id", "payload", "created_at"]
  }
] as const;

export const apiSurface = [
  "POST /imports/manual-listing",
  "POST /opportunities/:id/score",
  "POST /deals/:id/seller-message/draft",
  "POST /deals/:id/seller-message/send",
  "POST /deals/:id/prequalify",
  "POST /deals/:id/fr-listing/generate",
  "POST /deals/:id/buyer-reply/draft",
  "POST /deals/:id/reservation-fee/create",
  "POST /deals/:id/transport-quote",
  "GET /dashboard/pipeline"
] as const;

export const implementationPhases = [
  {
    milestone: "M1",
    title: "Sourcing Console",
    items: ["manual import", "normalize", "dedupe", "score", "seller workflow Kanban"]
  },
  {
    milestone: "M2",
    title: "Seller Desk",
    items: ["listing extraction", "Italian outreach drafts", "approval queue", "reply summaries", "negotiation tracking"]
  },
  {
    milestone: "M3",
    title: "Buyer Desk",
    items: ["brokered listing generator", "French buyer replies", "disclosure enforcement", "intent qualification"]
  },
  {
    milestone: "M4",
    title: "Deal Ops",
    items: ["document checklist", "transport quote tracking", "fee separation", "closeout checklist"]
  },
  {
    milestone: "M5",
    title: "Optimization",
    items: ["seller reliability score", "cleanliness classifier", "niche recommendation", "SLA dashboards"]
  }
] as const;

export const successMetrics = [
  "Qualified opportunity rate",
  "Seller response rate",
  "Median time to first seller reply",
  "Pre-qualification pass rate",
  "Buyer inquiry to reservation conversion",
  "Average broker fee per closed deal",
  "Cancellation rate after reservation",
  "Transport issue rate",
  "Compliance incident count",
  "Operator time per closed deal"
] as const;
