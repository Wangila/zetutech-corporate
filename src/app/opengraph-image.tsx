import { ImageResponse } from "next/og";
import { hero } from "@/content/site";

export const alt = "ZetuTech LLC — Software Architecture & Advisory. Systems that scale. Decisions that hold.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Link preview shown when the site is shared on LinkedIn, Slack, X, etc. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#020617",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              border: "2px solid rgba(245,158,11,0.6)",
              background: "rgba(245,158,11,0.1)",
            }}
          >
            <svg width="34" height="34" viewBox="0 0 32 32">
              <path
                d="M9 9.5h14L9 22.5h14"
                fill="none"
                stroke="#f59e0b"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: -1 }}>ZetuTech</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, letterSpacing: 6, color: "#f59e0b", textTransform: "uppercase" }}>
            {hero.eyebrow}
          </div>
          <div style={{ marginTop: 20, fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05 }}>
            {hero.headline[0]}
          </div>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05, color: "#64748b" }}>
            {hero.headline[1]}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#94a3b8" }}>
          <div>Cloud · Modernization · Agentic AI · Engineering Talent</div>
          <div>Somerset, NJ</div>
        </div>
      </div>
    ),
    size,
  );
}
