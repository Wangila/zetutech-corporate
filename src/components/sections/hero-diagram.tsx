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
// Amazon Bedrock AgentCore hosts the orchestrator and its tools; drawn as a platform boundary.
const platformFrame = {
  fill: "#f59e0b",
  fillOpacity: 0.03,
  stroke: "#f59e0b",
  strokeOpacity: 0.35,
  strokeDasharray: "5 4",
};

const description =
  "Agentic AI reference architecture: web, chat, and partner clients route through an API gateway with guardrails into Amazon Bedrock AgentCore, which hosts an agent orchestrator running a plan, act, observe loop. The orchestrator calls an LLM, MCP tools, RAG search, and a human review step. MCP tools act on business APIs and SaaS systems and read PostgreSQL business data; RAG search uses a vector database; evals and traces and an event stream complete the platform.";

/** Orthogonal connector from (x1, y1) down to (x2, y2), turning at y = turn. */
function elbow(x1: number, y1: number, x2: number, y2: number, turn: number) {
  if (x1 === x2) return `M${x1} ${y1} V${y2}`;
  const r = Math.min(12, Math.abs(x2 - x1) / 2);
  const dir = x2 > x1 ? 1 : -1;
  return [
    `M${x1} ${y1} V${turn - r}`,
    `Q${x1} ${turn} ${x1 + dir * r} ${turn}`,
    `H${x2 - dir * r}`,
    `Q${x2} ${turn} ${x2} ${turn + r}`,
    `V${y2}`,
  ].join(" ");
}

// Agent row (inside AgentCore) and the data row beneath it.
const agentColumns = [68, 196, 324, 452];
const AGENT_TOP = 316;
const AGENT_BOTTOM = 356;
const DATA_TOP = 410;

const agents = [
  { text: "LLM" },
  { text: "MCP TOOLS" },
  { text: "RAG SEARCH" },
  { text: "HUMAN REVIEW", human: true },
];

const dataNodes = [
  { cx: 52, text: "EVALS · TRACES", from: 0 },
  { cx: 156, text: "APIS · SAAS", from: 1 },
  { cx: 260, text: "POSTGRESQL", from: 1, cylinder: true },
  { cx: 364, text: "VECTOR DB", from: 2, cylinder: true },
  { cx: 468, text: "EVENT STREAM", from: 3 },
];

const links = {
  clients: [
    elbow(90, 70, 260, 110, 90),
    elbow(260, 70, 260, 110, 90),
    elbow(430, 70, 260, 110, 90),
  ],
  gateway: elbow(260, 154, 260, 206, 180),
  agents: agentColumns.map((x) => elbow(260, 270, x, AGENT_TOP, 292)),
  data: dataNodes.map(({ cx, from, cylinder }) =>
    elbow(agentColumns[from], AGENT_BOTTOM, cx, cylinder ? DATA_TOP - 2 : DATA_TOP, 383),
  ),
};

const allLinks = [...links.clients, links.gateway, ...links.agents, ...links.data];

// Animated traffic. "reverse" paths carry results back up to the orchestrator.
const flows = [
  { d: links.clients[0], delay: "0s" },
  { d: links.clients[1], delay: "0.9s" },
  { d: links.clients[2], delay: "0.45s" },
  { d: links.gateway, delay: "0.2s" },
  { d: links.agents[0], delay: "0.3s" },
  { d: links.agents[0], delay: "1.2s", reverse: true },
  { d: links.agents[1], delay: "0.7s" },
  { d: links.agents[1], delay: "1.5s", reverse: true },
  { d: links.agents[2], delay: "1.1s" },
  { d: links.agents[3], delay: "0.5s" },
  { d: links.data[1], delay: "0.8s" },
  { d: links.data[2], delay: "1.4s" },
  { d: links.data[3], delay: "1.0s" },
];

const clients = [
  { x: 20, text: "WEB APP" },
  { x: 190, text: "CHAT · SLACK" },
  { x: 360, text: "PARTNER API" },
];

function FlowPath({ d, delay, reverse }: { d: string; delay: string; reverse?: boolean }) {
  return (
    <path
      d={d}
      strokeDasharray="6 22"
      className="animate-flow opacity-80 motion-reduce:animate-none motion-reduce:opacity-0"
      style={{ animationDelay: delay, animationDirection: reverse ? "reverse" : undefined }}
    />
  );
}

function LoopRing({ cx, cy }: { cx: number; cy: number }) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={8}
      fill="none"
      stroke="#f59e0b"
      strokeWidth={1.5}
      strokeDasharray="3 4"
      className="origin-center animate-[spin_6s_linear_infinite] [transform-box:fill-box] motion-reduce:animate-none"
    />
  );
}

export function HeroDiagram({ className }: { className?: string }) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-6">
        <svg
          viewBox="0 0 520 462"
          className="h-auto w-full"
          role="img"
          aria-label={description}
        >
          <defs>
            <filter id="orchestrator-glow" x="-20%" y="-50%" width="140%" height="200%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>

          {/* layer labels */}
          <text x={20} y={20} {...layer}>CLIENTS</text>
          <text x={360} y={136} {...layer}>EDGE</text>

          {/* Amazon Bedrock AgentCore platform boundary */}
          <rect x={4} y={176} width={512} height={196} rx={14} {...platformFrame} />
          <text x={16} y={193} {...layer} fill="#f59e0b" letterSpacing="0.16em">
            AMAZON BEDROCK AGENTCORE
          </text>
          <text x={504} y={193} {...layer} fontSize={8} letterSpacing="0.06em" textAnchor="end">
            runtime · memory · identity · gateway · observability
          </text>

          {/* static wiring */}
          <g fill="none" stroke="#1e293b" strokeWidth={1.5}>
            {allLinks.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>

          {/* animated traffic */}
          <g fill="none" stroke="#f59e0b" strokeWidth={1.5} strokeLinecap="round">
            {flows.map((flow) => (
              <FlowPath key={`${flow.d}-${flow.delay}`} {...flow} />
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
          <rect x={170} y={110} width={180} height={44} rx={10} {...node} />
          <text x={260} y={129} {...label} fill="#e2e8f0">API GATEWAY</text>
          <text x={260} y={145} {...label} fontSize={9} fill="#64748b">auth · guardrails</text>

          {/* agent orchestrator */}
          <rect x={120} y={206} width={280} height={64} rx={12} fill="#f59e0b" opacity={0.25} filter="url(#orchestrator-glow)" />
          <rect x={120} y={206} width={280} height={64} rx={12} fill="#0b1222" stroke="#f59e0b" strokeOpacity={0.8} />
          <LoopRing cx={146} cy={238} />
          <text x={268} y={234} {...label} fontSize={12} fill="#f8fafc">AGENT ORCHESTRATOR</text>
          <text x={268} y={253} {...label} fontSize={9} fill="#fbbf24">plan → act → observe</text>

          {/* agents & tools */}
          {agents.map(({ text, human }, index) => (
            <g key={text}>
              <rect
                x={agentColumns[index] - 56}
                y={AGENT_TOP}
                width={112}
                height={AGENT_BOTTOM - AGENT_TOP}
                rx={8}
                {...node}
                strokeDasharray={human ? "4 3" : undefined}
              />
              <text x={agentColumns[index]} y={AGENT_TOP + 24} {...label} fontSize={10}>{text}</text>
            </g>
          ))}

          {/* data & systems */}
          {dataNodes.map(({ cx, text, cylinder }) =>
            cylinder ? (
              <g key={text}>
                <path d={`M${cx - 46} ${DATA_TOP + 6} V${DATA_TOP + 36} A46 8 0 0 0 ${cx + 46} ${DATA_TOP + 36} V${DATA_TOP + 6}`} {...node} />
                <ellipse cx={cx} cy={DATA_TOP + 6} rx={46} ry={8} {...node} />
                <text x={cx} y={DATA_TOP + 28} {...label} fontSize={9}>{text}</text>
              </g>
            ) : (
              <g key={text}>
                <rect x={cx - 48} y={DATA_TOP} width={96} height={40} rx={8} {...node} />
                <text x={cx} y={DATA_TOP + 24} {...label} fontSize={9}>{text}</text>
              </g>
            ),
          )}
        </svg>
      </div>
      <figcaption className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">
        Fig. 01 — Agentic AI Reference Architecture
      </figcaption>
    </figure>
  );
}
