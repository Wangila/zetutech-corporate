import { cn } from "@/lib/cn";

const node = { fill: "#0b1222", stroke: "#334155", strokeWidth: 1 };
const label = {
  fill: "#94a3b8",
  fontSize: 11,
  fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
  letterSpacing: "0.08em",
  textAnchor: "middle" as const,
};
const layer = {
  ...label,
  fill: "#475569",
  fontSize: 9,
  letterSpacing: "0.2em",
  textAnchor: "start" as const,
};

const links = [
  // clients → gateway
  "M90 70 V88 Q90 100 102 100 H248 Q260 100 260 112 V130",
  "M260 70 V130",
  "M430 70 V88 Q430 100 418 100 H272 Q260 100 260 112 V130",
  // gateway → services
  "M260 186 V204 Q260 216 248 216 H80 Q68 216 68 228 V246",
  "M260 186 V204 Q260 216 248 216 H208 Q196 216 196 228 V246",
  "M260 186 V204 Q260 216 272 216 H312 Q324 216 324 228 V246",
  "M260 186 V204 Q260 216 272 216 H440 Q452 216 452 228 V246",
  // services → data
  "M68 286 V304 Q68 316 80 316 H138 Q150 316 150 328 V336",
  "M196 286 V304 Q196 316 184 316 H162 Q150 316 150 328 V336",
  "M324 286 V304 Q324 316 336 316 H358 Q370 316 370 328 V336",
  "M452 286 V304 Q452 316 440 316 H382 Q370 316 370 328 V336",
];

// Subset of links that carry animated "traffic", with staggered start times.
const flows = [
  { d: links[0], delay: "0s" },
  { d: links[1], delay: "0.9s" },
  { d: links[2], delay: "0.45s" },
  { d: links[4], delay: "0.3s" },
  { d: links[6], delay: "1.2s" },
  { d: links[8], delay: "0.6s" },
  { d: links[9], delay: "1.5s" },
];

const clients = [
  { x: 20, text: "WEB APP" },
  { x: 190, text: "MOBILE" },
  { x: 360, text: "PARTNER API" },
];

const services = [
  { x: 12, text: "IDENTITY" },
  { x: 140, text: "MATCHING" },
  { x: 268, text: "PAYMENTS" },
  { x: 396, text: "AI AGENTS" },
];

const description =
  "Reference architecture: web, mobile, and partner clients route through an API gateway to identity, matching, payments, and AI agent services, backed by PostgreSQL and an event stream.";

// Phone-sized variant: the same four layers stacked vertically, with larger type.
const compactLayers = [
  { title: "CLIENTS", detail: "web · mobile · partner api" },
  { title: "API GATEWAY", detail: "auth · rate limit", accent: true },
  { title: "SERVICES", detail: "identity · matching · payments · ai" },
  { title: "DATA", detail: "postgresql · event stream" },
];

export function CompactDiagram({ className }: { className?: string }) {
  const top = (index: number) => 8 + index * 84;
  return (
    <svg viewBox="0 0 320 324" className={cn("h-auto w-full", className)} role="img" aria-label={description}>
      <g fill="none" stroke="#1e293b" strokeWidth={1.5}>
        {compactLayers.slice(1).map((_, index) => (
          <g key={index}>
            <path d={`M110 ${top(index) + 56} V${top(index + 1)}`} />
            <path d={`M210 ${top(index) + 56} V${top(index + 1)}`} />
          </g>
        ))}
      </g>
      <g fill="none" stroke="#f59e0b" strokeWidth={1.5} strokeLinecap="round">
        {compactLayers.slice(1).map((_, index) => (
          <g key={index}>
            <path
              d={`M110 ${top(index) + 56} V${top(index + 1)}`}
              strokeDasharray="6 22"
              className="animate-flow opacity-80 motion-reduce:animate-none motion-reduce:opacity-0"
              style={{ animationDelay: `${index * 0.4}s` }}
            />
            <path
              d={`M210 ${top(index) + 56} V${top(index + 1)}`}
              strokeDasharray="6 22"
              className="animate-flow opacity-80 motion-reduce:animate-none motion-reduce:opacity-0"
              style={{ animationDelay: `${index * 0.4 + 0.9}s` }}
            />
          </g>
        ))}
      </g>
      {compactLayers.map(({ title, detail, accent }, index) => (
        <g key={title}>
          <rect
            x={10}
            y={top(index)}
            width={300}
            height={56}
            rx={10}
            fill="#0b1222"
            stroke={accent ? "#f59e0b" : "#334155"}
            strokeOpacity={accent ? 0.6 : 1}
          />
          {accent && (
            <circle cx={28} cy={top(index) + 28} r={3} fill="#f59e0b" className="animate-pulse motion-reduce:animate-none" />
          )}
          <text x={160} y={top(index) + 25} {...label} fontSize={13} fill="#e2e8f0">
            {title}
          </text>
          <text x={160} y={top(index) + 43} {...label} fontSize={10} fill="#64748b" letterSpacing="0.04em">
            {detail}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function HeroDiagram({ className }: { className?: string }) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-6">
        <CompactDiagram className="sm:hidden" />
        <svg
          viewBox="0 0 520 410"
          className="hidden h-auto w-full sm:block"
          role="img"
          aria-label={description}
        >
          {/* layer labels */}
          <text x={20} y={20} {...layer}>CLIENTS</text>
          <text x={370} y={156} {...layer}>EDGE</text>
          <text x={132} y={236} {...layer} textAnchor="middle">SERVICES</text>
          <text x={450} y={362} {...layer}>DATA</text>

          {/* static wiring */}
          <g fill="none" stroke="#1e293b" strokeWidth={1.5}>
            {links.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>

          {/* animated traffic */}
          <g fill="none" stroke="#f59e0b" strokeWidth={1.5} strokeLinecap="round">
            {flows.map(({ d, delay }) => (
              <path
                key={d}
                d={d}
                strokeDasharray="6 22"
                className="animate-flow opacity-80 motion-reduce:animate-none motion-reduce:opacity-0"
                style={{ animationDelay: delay }}
              />
            ))}
          </g>

          {/* clients */}
          {clients.map(({ x, text }) => (
            <g key={text}>
              <rect x={x} y={30} width={140} height={40} rx={8} {...node} />
              <text x={x + 70} y={54} {...label}>{text}</text>
            </g>
          ))}

          {/* gateway */}
          <rect x={170} y={130} width={180} height={56} rx={10} fill="#0b1222" stroke="#f59e0b" strokeOpacity={0.6} />
          <circle cx={186} cy={146} r={3} fill="#f59e0b" className="animate-pulse motion-reduce:animate-none" />
          <text x={260} y={156} {...label} fill="#e2e8f0">API GATEWAY</text>
          <text x={260} y={174} {...label} fontSize={9} fill="#64748b">auth · rate limit</text>

          {/* services */}
          {services.map(({ x, text }) => (
            <g key={text}>
              <rect x={x} y={246} width={112} height={40} rx={8} {...node} />
              <text x={x + 56} y={270} {...label}>{text}</text>
            </g>
          ))}

          {/* postgres cylinder */}
          <path d="M75 346 V392 A75 10 0 0 0 225 392 V346" {...node} />
          <ellipse cx={150} cy={346} rx={75} ry={10} {...node} />
          <text x={150} y={378} {...label}>POSTGRESQL</text>

          {/* event stream */}
          <rect x={295} y={336} width={150} height={44} rx={8} {...node} />
          <text x={370} y={362} {...label}>EVENT STREAM</text>
        </svg>
      </div>
      <figcaption className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
        Fig. 01 — Reference Architecture
      </figcaption>
    </figure>
  );
}
