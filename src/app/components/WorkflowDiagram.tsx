import React from 'react'

const R = 30

interface NodeData {
  id: string
  cx: number
  cy: number
  color: string
  label: string
  sub: string
  icon: React.ReactNode
}

interface EdgeData {
  x1: number
  y1: number
  x2: number
  y2: number
  delay: number
}

/* ── icons (tiny inline SVG paths, centered at 0,0) ── */
const IconWebhook = () => (
  <g stroke="white" strokeWidth="1.6" strokeLinecap="round" fill="none">
    <path d="M-6,-4 L0,0 L-6,4" />
    <path d="M0,0 L6,0" />
    <circle cx="6" cy="0" r="2.5" fill="white" stroke="none" />
  </g>
)

const IconJson = () => (
  <g fill="white" fontSize="11" fontFamily="ui-monospace,monospace" fontWeight="700">
    <text textAnchor="middle" dominantBaseline="central" y="1">{'{}'}</text>
  </g>
)

const IconRouter = () => (
  <g stroke="white" strokeWidth="1.6" strokeLinecap="round" fill="none">
    <line x1="-7" y1="0" x2="0" y2="0" />
    <line x1="0" y1="0" x2="7" y2="-5" />
    <line x1="0" y1="0" x2="7" y2="5" />
    <circle cx="7" cy="-5" r="2" fill="white" stroke="none" />
    <circle cx="7" cy="5" r="2" fill="white" stroke="none" />
  </g>
)

const IconAI = () => (
  <g fill="white">
    <text textAnchor="middle" dominantBaseline="central" y="1"
      fontSize="11" fontFamily="sans-serif" fontWeight="800">AI</text>
  </g>
)

const IconEmail = () => (
  <g stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none">
    <rect x="-7" y="-5" width="14" height="10" rx="1.5" />
    <path d="M-7,-5 L0,2 L7,-5" />
  </g>
)

const IconHttp = () => (
  <g stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none">
    <circle cx="0" cy="0" r="6.5" />
    <line x1="-6.5" y1="0" x2="6.5" y2="0" />
    <path d="M0,-6.5 Q3,0 0,6.5 Q-3,0 0,-6.5" />
  </g>
)

const IconSlack = () => (
  <g fill="white" fontSize="14" fontFamily="ui-monospace,monospace" fontWeight="700">
    <text textAnchor="middle" dominantBaseline="central" y="1">#</text>
  </g>
)

/* ── data ── */
const NODES: NodeData[] = [
  {
    id: 'webhook', cx: 72, cy: 160,
    color: '#ef4444',
    label: 'Webhooks', sub: 'Customer Mailbox',
    icon: <IconWebhook />,
  },
  {
    id: 'json', cx: 215, cy: 160,
    color: '#8b5cf6',
    label: 'JSON', sub: 'Parse data',
    icon: <IconJson />,
  },
  {
    id: 'router', cx: 358, cy: 160,
    color: '#22c55e',
    label: 'Router', sub: 'Branching logic',
    icon: <IconRouter />,
  },
  {
    id: 'ai', cx: 498, cy: 78,
    color: '#f59e0b',
    label: 'AI Prompt', sub: 'Analyse context',
    icon: <IconAI />,
  },
  {
    id: 'email', cx: 630, cy: 78,
    color: '#ef4444',
    label: 'Send Email', sub: 'Auto response',
    icon: <IconEmail />,
  },
  {
    id: 'http', cx: 498, cy: 242,
    color: '#06b6d4',
    label: 'HTTPS', sub: 'External request',
    icon: <IconHttp />,
  },
  {
    id: 'slack', cx: 630, cy: 242,
    color: '#3b82f6',
    label: 'Slack', sub: 'Notification',
    icon: <IconSlack />,
  },
]

// ── edge math ──
// Router(358,160) → AI(498,78):   dir=(140,-82) len≈163  unit=(0.859,-0.503)
//   start: (358+30×0.859, 160-30×0.503)=(384,145)  end: (498-30×0.859, 78+30×0.503)=(472,93)
// Router(358,160) → HTTP(498,242): dir=(140,82) same len
//   start: (384,175)  end: (472,227)

const EDGES: EdgeData[] = [
  { x1: 102, y1: 160, x2: 185, y2: 160, delay: 0 },      // Webhook → JSON
  { x1: 245, y1: 160, x2: 328, y2: 160, delay: 0.3 },    // JSON → Router
  { x1: 384, y1: 145, x2: 472, y2: 93,  delay: 0.6 },    // Router → AI
  { x1: 384, y1: 175, x2: 472, y2: 227, delay: 0.6 },    // Router → HTTP
  { x1: 528, y1: 78,  x2: 600, y2: 78,  delay: 0.9 },    // AI → Email
  { x1: 528, y1: 242, x2: 600, y2: 242, delay: 0.9 },    // HTTP → Slack
]

/* ══════════════════════════════════════════════════════════ */
export default function WorkflowDiagram() {
  return (
    <>
      <style>{`
        @keyframes wfDash { to { stroke-dashoffset: -20; } }
        .wf-edge { animation: wfDash 1.5s linear infinite; }
      `}</style>

      <svg
        width="100%"
        viewBox="0 0 710 320"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Workflow d'automatisation email avec IA"
        style={{ overflow: 'visible' }}
      >
        {/* ── Edges ── */}
        {EDGES.map((e, i) => {
          const mx = (e.x1 + e.x2) / 2
          const my = (e.y1 + e.y2) / 2
          return (
            <g key={i}>
              <line
                x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                className="wf-edge"
                style={{ animationDelay: `${e.delay}s` }}
              />
              {/* midpoint dot */}
              <circle cx={mx} cy={my} r={3.5}
                fill="rgba(255,255,255,0.08)"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="1"
              />
            </g>
          )
        })}

        {/* ── Nodes ── */}
        {NODES.map((n) => (
          <g key={n.id}>
            {/* outer glow */}
            <circle cx={n.cx} cy={n.cy} r={R + 16}
              fill={n.color} fillOpacity={0.1} />
            {/* subtle ring */}
            <circle cx={n.cx} cy={n.cy} r={R + 5}
              fill="none"
              stroke={n.color} strokeWidth="1" strokeOpacity={0.3} />
            {/* main circle */}
            <circle cx={n.cx} cy={n.cy} r={R} fill={n.color} />
            {/* inner top highlight */}
            <ellipse
              cx={n.cx} cy={n.cy - 9}
              rx={R * 0.55} ry={R * 0.35}
              fill="white" fillOpacity={0.1}
            />
            {/* icon — shifted to node center */}
            <g transform={`translate(${n.cx}, ${n.cy})`}>
              {n.icon}
            </g>

            {/* label */}
            <text
              x={n.cx} y={n.cy + R + 18}
              textAnchor="middle"
              fill="white"
              fontSize={11}
              fontWeight={600}
              fontFamily="sans-serif"
            >
              {n.label}
            </text>
            {/* sublabel */}
            {n.sub && (
              <text
                x={n.cx} y={n.cy + R + 30}
                textAnchor="middle"
                fill="rgba(255,255,255,0.4)"
                fontSize={9}
                fontFamily="sans-serif"
              >
                {n.sub}
              </text>
            )}
          </g>
        ))}
      </svg>
    </>
  )
}