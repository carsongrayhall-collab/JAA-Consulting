import type { Metadata } from "next";
import Link from "next/link";
import {
  aiTasks,
  apiSurface,
  architectureBlocks,
  buyerStages,
  complianceChecks,
  coreConstraints,
  dataModel,
  disclosurePoints,
  implementationPhases,
  pricingFields,
  scoreBands,
  scoringWeights,
  sellerStates,
  specMeta,
  successMetrics,
  workflowLanes
} from "@/lib/motorcycle-broker-spec";

export const metadata: Metadata = {
  title: "SPEC-1 | AI-Brokered Motorcycle Deal Orchestration",
  description:
    "Product and workflow blueprint for a compliant AI-assisted intermediary platform for cross-border motorcycle sourcing between Italy and France."
};

function SpecCard({
  title,
  children
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="section-card rounded-[28px] p-6 md:p-8">
      <div className="mb-4 flex items-center justify-between gap-4 border-b border-[rgba(110,31,27,0.12)] pb-3">
        <h2 className="font-serif text-[1.7rem] leading-none text-burgundy md:text-[2rem]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function MotorcycleBrokerSpecPage() {
  return (
    <main className="min-h-screen bg-parchment">
      <div className="mx-auto max-w-[1180px] px-4 pb-20 pt-8 md:px-6 md:pt-10">
        <div className="section-card relative overflow-hidden rounded-[36px] border border-[rgba(110,31,27,0.16)] px-6 py-8 shadow-card md:px-10 md:py-10">
          <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(110,31,27,0.14),transparent_68%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-5">
              <p className="font-body text-[0.78rem] uppercase tracking-[0.22em] text-mutedTone">{specMeta.eyebrow}</p>
              <div className="space-y-4">
                <h1 className="max-w-[14ch] font-serif text-[2.9rem] leading-[0.92] text-burgundy md:text-[4.5rem]">
                  {specMeta.title}
                </h1>
                <p className="max-w-[60ch] text-[1rem] leading-7 text-text md:text-[1.05rem]">{specMeta.subtitle}</p>
                <p className="max-w-[62ch] text-[0.96rem] leading-7 text-mutedTone">{specMeta.summary}</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/"
                  className="rounded-full border border-burgundy bg-burgundy px-5 py-2.5 font-body text-sm text-white transition-opacity hover:opacity-90"
                >
                  Back to Home
                </Link>
                <a
                  href="#milestones"
                  className="rounded-full border border-[rgba(110,31,27,0.24)] px-5 py-2.5 font-body text-sm text-burgundy transition-colors hover:bg-[rgba(110,31,27,0.06)]"
                >
                  View Delivery Phases
                </a>
              </div>
            </div>

            <aside className="grid gap-4 rounded-[28px] border border-[rgba(110,31,27,0.12)] bg-white/45 p-5">
              <div>
                <p className="font-body text-[0.72rem] uppercase tracking-[0.18em] text-mutedTone">MVP posture</p>
                <p className="mt-2 font-serif text-[1.35rem] leading-tight text-burgundy">
                  Human-in-the-loop broker assistant
                </p>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-text">
                {coreConstraints.map((constraint) => (
                  <li key={constraint} className="flex gap-3">
                    <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-burgundy" />
                    <span>{constraint}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {workflowLanes.map((lane) => (
            <section key={lane.name} className="section-card rounded-[28px] p-6">
              <p className="font-body text-[0.74rem] uppercase tracking-[0.22em] text-mutedTone">{lane.name}</p>
              <h2 className="mt-3 font-serif text-[2rem] leading-none text-burgundy">{lane.title}</h2>
              <p className="mt-3 text-sm leading-6 text-text">{lane.description}</p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-mutedTone">
                {lane.outcomes.map((item) => (
                  <li key={item} className="rounded-full border border-[rgba(110,31,27,0.12)] px-3 py-1.5">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <SpecCard title="System Architecture">
            <div className="grid gap-4 md:grid-cols-3">
              {architectureBlocks.map((block) => (
                <div key={block.title} className="rounded-[24px] border border-[rgba(110,31,27,0.12)] bg-white/50 p-4">
                  <h3 className="font-serif text-[1.25rem] text-burgundy">{block.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-text">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SpecCard>

          <SpecCard title="Scoring Engine">
            <div className="space-y-5">
              <div className="rounded-[24px] border border-[rgba(110,31,27,0.12)] bg-white/55 p-4">
                <p className="font-body text-[0.78rem] uppercase tracking-[0.18em] text-mutedTone">Formula</p>
                <p className="mt-3 font-serif text-[1.45rem] leading-tight text-burgundy">
                  0.35 spread + 0.20 cleanliness + 0.15 seller latency + 0.15 listing age + 0.10 paperwork + 0.05
                  demand fit
                </p>
              </div>
              <div className="grid gap-3">
                {scoringWeights.map((weight) => (
                  <div
                    key={weight.factor}
                    className="grid gap-2 rounded-[20px] border border-[rgba(110,31,27,0.12)] bg-white/45 p-4 md:grid-cols-[120px_70px_1fr]"
                  >
                    <span className="font-serif text-[1.1rem] text-burgundy">{weight.factor}</span>
                    <span className="font-body text-sm uppercase tracking-[0.12em] text-mutedTone">{weight.weight}</span>
                    <span className="text-sm leading-6 text-text">{weight.note}</span>
                  </div>
                ))}
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {scoreBands.map((band) => (
                  <div key={band.label} className="rounded-[20px] border border-[rgba(110,31,27,0.12)] px-4 py-3">
                    <p className="font-serif text-[1.45rem] leading-none text-burgundy">{band.label}</p>
                    <p className="mt-2 font-body text-[0.75rem] uppercase tracking-[0.14em] text-mutedTone">
                      {band.meaning}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-text">{band.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </SpecCard>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <SpecCard title="Bounded AI Tasks">
            <ul className="grid gap-3 text-sm leading-6 text-text">
              {aiTasks.map((task) => (
                <li key={task} className="rounded-[20px] border border-[rgba(110,31,27,0.12)] bg-white/45 px-4 py-3">
                  {task}
                </li>
              ))}
            </ul>
          </SpecCard>

          <SpecCard title="Workflow States">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <p className="font-body text-[0.75rem] uppercase tracking-[0.18em] text-mutedTone">Seller lane</p>
                <ol className="mt-3 space-y-2 text-sm leading-6 text-text">
                  {sellerStates.map((state, index) => (
                    <li key={state} className="rounded-[18px] border border-[rgba(110,31,27,0.12)] px-4 py-2.5">
                      <span className="mr-2 font-serif text-burgundy">{index + 1}.</span>
                      {state}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <p className="font-body text-[0.75rem] uppercase tracking-[0.18em] text-mutedTone">Buyer lane</p>
                <ol className="mt-3 space-y-2 text-sm leading-6 text-text">
                  {buyerStages.map((stage, index) => (
                    <li key={stage} className="rounded-[18px] border border-[rgba(110,31,27,0.12)] px-4 py-2.5">
                      <span className="mr-2 font-serif text-burgundy">{index + 1}.</span>
                      {stage}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </SpecCard>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <SpecCard title="Publication And Payment Controls">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[24px] border border-[rgba(110,31,27,0.12)] bg-white/50 p-5">
                <p className="font-body text-[0.75rem] uppercase tracking-[0.18em] text-mutedTone">Required disclosure</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-text">
                  {disclosurePoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[24px] border border-[rgba(110,31,27,0.12)] bg-white/50 p-5">
                <p className="font-body text-[0.75rem] uppercase tracking-[0.18em] text-mutedTone">Pricing inputs</p>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-text">
                  {pricingFields.map((field) => (
                    <li key={field} className="rounded-full border border-[rgba(110,31,27,0.12)] px-3 py-1.5">
                      {field}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[24px] border border-[rgba(110,31,27,0.12)] bg-white/50 p-5">
                <p className="font-body text-[0.75rem] uppercase tracking-[0.18em] text-mutedTone">Before publish</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-text">
                  {complianceChecks.beforePublish.map((check) => (
                    <li key={check}>{check}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[24px] border border-[rgba(110,31,27,0.12)] bg-white/50 p-5">
                <p className="font-body text-[0.75rem] uppercase tracking-[0.18em] text-mutedTone">Before payment coordination</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-text">
                  {complianceChecks.beforePayment.map((check) => (
                    <li key={check}>{check}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SpecCard>

          <SpecCard title="API Surface">
            <div className="grid gap-3">
              {apiSurface.map((endpoint) => (
                <code
                  key={endpoint}
                  className="rounded-[18px] border border-[rgba(110,31,27,0.12)] bg-[rgba(255,255,255,0.48)] px-4 py-3 font-mono text-[0.86rem] text-burgundy"
                >
                  {endpoint}
                </code>
              ))}
            </div>
          </SpecCard>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SpecCard title="Core Data Model">
            <div className="grid gap-4">
              {dataModel.map((table) => (
                <div key={table.table} className="rounded-[24px] border border-[rgba(110,31,27,0.12)] bg-white/50 p-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-serif text-[1.25rem] text-burgundy">{table.table}</h3>
                    <span className="rounded-full bg-[rgba(110,31,27,0.08)] px-3 py-1 font-body text-[0.72rem] uppercase tracking-[0.14em] text-mutedTone">
                      Core table
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-text">{table.purpose}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {table.columns.map((column) => (
                      <span
                        key={column}
                        className="rounded-full border border-[rgba(110,31,27,0.12)] px-3 py-1.5 font-mono text-[0.78rem] text-burgundy"
                      >
                        {column}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SpecCard>

          <SpecCard title="Success Review Loop">
            <div className="space-y-5">
              <div className="rounded-[24px] border border-[rgba(110,31,27,0.12)] bg-white/50 p-5">
                <p className="font-body text-[0.75rem] uppercase tracking-[0.18em] text-mutedTone">Weekly metrics</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-text">
                  {successMetrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[24px] border border-[rgba(110,31,27,0.12)] bg-white/50 p-5">
                <p className="font-body text-[0.75rem] uppercase tracking-[0.18em] text-mutedTone">Review questions</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-text">
                  <li>Which sourcing signals produced false positives?</li>
                  <li>Which messages needed heavy operator rewrites?</li>
                  <li>Where did response lag hurt conversion?</li>
                  <li>How much margin leaked between negotiated and realized fee?</li>
                </ul>
              </div>
            </div>
          </SpecCard>
        </div>

        <section id="milestones" className="mt-6 section-card rounded-[28px] p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-[rgba(110,31,27,0.12)] pb-3">
            <h2 className="font-serif text-[1.7rem] leading-none text-burgundy md:text-[2rem]">Delivery Milestones</h2>
            <span className="font-body text-[0.74rem] uppercase tracking-[0.18em] text-mutedTone">Five-step rollout</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-5">
            {implementationPhases.map((phase) => (
              <div key={phase.milestone} className="rounded-[24px] border border-[rgba(110,31,27,0.12)] bg-white/50 p-5">
                <p className="font-body text-[0.75rem] uppercase tracking-[0.18em] text-mutedTone">{phase.milestone}</p>
                <h3 className="mt-2 font-serif text-[1.4rem] leading-tight text-burgundy">{phase.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-text">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
