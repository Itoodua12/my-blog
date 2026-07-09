export function Mascot() {
  return (
    <div className="mascot" aria-hidden="true">
      <svg viewBox="0 0 100 108" width="92" height="99">
        <ellipse cx="50" cy="101" rx="28" ry="4" style={{ fill: "var(--mascot-shadow)" }} />

        <path
          d="M 18 16 Q 18 8 30 8 L 70 8 Q 82 8 82 16 L 82 62 Q 82 70 74 70 L 26 70 Q 18 70 18 62 Z"
          style={{ fill: "var(--mascot-body)", stroke: "var(--mascot-stroke)" }}
          strokeWidth="2.5"
        />

        <path
          d="M 25 18 Q 25 14 30 14 L 70 14 Q 75 14 75 18 L 75 58 Q 75 62 71 62 L 29 62 Q 25 62 25 58 Z"
          style={{ fill: "var(--mascot-bezel)" }}
        />

        <rect
          x="30"
          y="19"
          width="40"
          height="34"
          rx="3"
          style={{ fill: "var(--mascot-screen)", stroke: "var(--mascot-stroke)" }}
          strokeWidth="2"
        />

        <g fontFamily="Menlo, Consolas, monospace" fontSize="4.6" style={{ fill: "var(--mascot-code)" }}>
          <text x="32.5" y="25">$ run.sh</text>
          <text x="32.5" y="30.5">01 &gt; init ok</text>
          <text x="32.5" y="36">02 &gt; build ok</text>
          <text x="32.5" y="41.5">03 &gt; deploy ok</text>
          <text x="32.5" y="47">04 &gt; ready_</text>
        </g>

        <path d="M 32 21 L 40 21 L 32 32 Z" style={{ fill: "var(--mascot-glare)" }} />

        <circle cx="50" cy="59" r="1.6" style={{ fill: "var(--mascot-stroke)" }} opacity="0.5" />
        <circle cx="72" cy="16" r="1.8" style={{ fill: "var(--accent)" }} />

        <line
          x1="30"
          y1="66"
          x2="46"
          y2="66"
          style={{ stroke: "var(--mascot-stroke)" }}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        <line
          x1="54"
          y1="66"
          x2="70"
          y2="66"
          style={{ stroke: "var(--mascot-stroke)" }}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />

        <path
          d="M 42 70 L 46 80 L 54 80 L 58 70 Z"
          style={{ fill: "var(--mascot-body)", stroke: "var(--mascot-stroke)" }}
          strokeWidth="2.5"
        />

        <path
          d="M 28 84 Q 28 80 34 80 L 66 80 Q 72 80 72 84 L 74 92 Q 75 96 70 96 L 30 96 Q 25 96 26 92 Z"
          style={{ fill: "var(--mascot-body)", stroke: "var(--mascot-stroke)" }}
          strokeWidth="2.5"
        />
        <line
          x1="34"
          y1="88"
          x2="66"
          y2="88"
          style={{ stroke: "var(--mascot-stroke)" }}
          strokeWidth="1.5"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}
