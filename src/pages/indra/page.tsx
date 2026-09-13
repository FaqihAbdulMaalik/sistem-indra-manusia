import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "motion/react";
import { FULL_CONTENT } from "../_data/full-content.ts";
import { ACCENTS, type SenseName } from "../_data/senses.ts";
import AmbientGlow from "../_components/AmbientGlow.tsx";
import QuizSection from "../_components/QuizSection.tsx";
import type { ContentBlock } from "../_data/full-content.ts";

const SCHOOL_LOGO = "https://hercules-cdn.com/file_8AvQHpr8t7yBZU10qbvfgp6c";

const ICONS: Record<SenseName, React.ReactNode> = {
  nose: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M12 2C12 2 8 6 8 12c0 3 1 5 2 6.5C11 20 12 21 12 22" />
      <path d="M12 2c0 0 4 4 4 10 0 3-1 5-2 6.5C13 20 12 21 12 22" />
      <path d="M8 18.5C7 19.5 5 20 5 22h14c0-2-2-2.5-3-3.5" />
    </svg>
  ),
  tongue: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M8 2h8a2 2 0 0 1 2 2v8c0 4-3 8-6 10-3-2-6-6-6-10V4a2 2 0 0 1 2-2z" />
      <line x1="12" y1="6" x2="12" y2="12" /><line x1="9" y1="8" x2="9" y2="11" /><line x1="15" y1="8" x2="15" y2="11" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  ear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M6 8a6 6 0 0 1 12 0c0 5-4 6-4 10a2 2 0 0 1-4 0" /><path d="M9 13a3 3 0 0 0 3 3" />
    </svg>
  ),
  skin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2" /><path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  ),
};

const VALID_IDS: SenseName[] = ["nose", "tongue", "eye", "ear", "skin"];

export default function IndraDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const senseId = VALID_IDS.includes(id as SenseName) ? (id as SenseName) : null;

  useEffect(() => {
    if (!senseId) navigate("/", { replace: true });
  }, [senseId, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!senseId) return null;

  const content = FULL_CONTENT[senseId];
  const accent = ACCENTS[senseId];

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      <AmbientGlow />

      <div className="relative z-10 max-w-[800px] mx-auto px-5 pb-24">
        {/* Navbar */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="flex items-center justify-between py-5"
        >
          <button onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer liquid-glass text-[13px] font-medium transition-all hover:scale-[1.03]"
            style={{ color: "rgba(20,60,120,0.75)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Kembali
          </button>

          <div className="flex items-center gap-2">
            <img src={SCHOOL_LOGO} alt="Logo" className="w-6 h-6 rounded-full object-cover" />
            <span className="text-[11px] font-semibold tracking-wide uppercase hidden sm:block" style={{ color: "rgba(20,60,120,0.5)" }}>SMP El Rasyad IJHS</span>
          </div>
        </motion.nav>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
          className="mb-10"
        >
          <div className="w-16 h-16 rounded-[18px] flex items-center justify-center mb-5"
            style={{ background: `linear-gradient(135deg, ${accent.hex}28, ${accent.hex}14)`, border: "1px solid rgba(255,255,255,0.65)", color: accent.hex, boxShadow: `0 1px 0 rgba(255,255,255,0.7) inset, 0 8px 32px ${accent.hex}20` }}>
            {ICONS[senseId]}
          </div>

          <p className="text-[11.5px] font-semibold tracking-[0.1em] uppercase mb-2" style={{ color: accent.hex }}>{content.label}</p>

          <h1 className="text-[clamp(38px,7vw,62px)] font-bold tracking-[-0.03em] leading-tight mb-3"
            style={{ background: "linear-gradient(180deg, rgba(8,30,100,0.95) 0%, rgba(30,80,160,0.8) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {content.organ}
          </h1>

          <p className="text-[17px] leading-relaxed max-w-[600px]" style={{ color: "rgba(20,60,130,0.6)" }}>{content.tagline}</p>

          <div className="mt-6 h-px" style={{ background: "rgba(30,80,180,0.1)" }} />

          <p className="mt-5 text-[15.5px] leading-[1.75]" style={{ color: "rgba(20,60,130,0.7)" }}>{content.intro}</p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-6">
          {content.sections.map((section, i) => (
            <motion.div key={section.heading}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.2 + i * 0.08 }}
              className="rounded-[22px] overflow-hidden liquid-glass"
            >
              <div className="px-7 py-4 border-b" style={{ background: `linear-gradient(90deg, ${accent.hex}10, transparent)`, borderColor: "rgba(255,255,255,0.5)" }}>
                <h2 className="text-[15px] font-bold tracking-[-0.01em]" style={{ color: "rgba(8,30,100,0.88)" }}>{section.heading}</h2>
              </div>
              <div className="px-7 py-6 space-y-5">
                {section.blocks.map((block, j) => (
                  <BlockRenderer key={j} block={block} accent={accent.hex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quiz */}
        <QuizSection senseId={senseId} />

        {/* Other senses */}
        <OtherSenses currentId={senseId} />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center pt-10 pb-2 text-[12px]"
          style={{ color: "rgba(30,80,160,0.3)" }}
        >
          SMP El Rasyad IJHS · IPA Kelas IX · {new Date().getFullYear()}
        </motion.footer>
      </div>
    </div>
  );
}

function BlockRenderer({ block, accent }: { block: ContentBlock; accent: string }) {
  switch (block.type) {
    case "text":
      return <p className="text-[15px] leading-[1.75]" style={{ color: "rgba(20,60,130,0.7)" }}>{block.content}</p>;

    case "highlight":
      return (
        <div className="rounded-[14px] p-4" style={{ background: `${accent}12`, border: `1px solid ${accent}28` }}>
          <p className="text-[14px] leading-relaxed font-medium" style={{ color: "rgba(10,40,110,0.8)" }}>{block.content}</p>
        </div>
      );

    case "numbered-list":
      return (
        <ol className="space-y-3.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-6 h-6 rounded-[7px] flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5" style={{ background: `${accent}18`, color: accent }}>{i + 1}</span>
              <p className="text-[14.5px] leading-relaxed" style={{ color: "rgba(20,60,130,0.72)" }}>
                <strong className="font-semibold" style={{ color: "rgba(8,30,100,0.88)" }}>{item.title}</strong>{" — "}{item.desc}
              </p>
            </li>
          ))}
        </ol>
      );

    case "chip-group":
      return (
        <div className="flex flex-wrap gap-2">
          {block.items.map((c) => (
            <span key={c} className="px-3.5 py-1.5 rounded-full text-[12px] font-medium"
              style={{ background: "rgba(255,255,255,0.55)", border: "1px solid rgba(30,80,180,0.12)", color: "rgba(30,80,160,0.65)" }}>
              {c}
            </span>
          ))}
        </div>
      );

    case "two-col":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {block.items.map((item) => (
            <div key={item.title} className="rounded-[14px] p-4" style={{ background: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 1px 0 rgba(255,255,255,0.7) inset" }}>
              <p className="text-[13px] font-semibold mb-1.5" style={{ color: item.color }}>{item.title}</p>
              <p className="text-[12.5px] leading-relaxed" style={{ color: "rgba(20,60,130,0.65)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      );

    case "three-col":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {block.items.map((item) => (
            <div key={item.title} className="rounded-[14px] p-4" style={{ background: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 1px 0 rgba(255,255,255,0.7) inset" }}>
              <p className="text-[13px] font-semibold mb-1.5" style={{ color: item.color }}>{item.title}</p>
              <p className="text-[12.5px] leading-relaxed" style={{ color: "rgba(20,60,130,0.65)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      );

    case "taste-chips":
      return (
        <div className="flex flex-wrap gap-2.5">
          {block.items.map((t) => (
            <span key={t.label} className="px-5 py-2 rounded-full text-[14px] font-semibold"
              style={{ background: t.bg, color: t.color, border: `1px solid ${t.border}` }}>{t.label}</span>
          ))}
        </div>
      );

    case "table":
      return (
        <div className="overflow-x-auto rounded-[14px]" style={{ border: "1px solid rgba(30,80,180,0.1)" }}>
          <table className="w-full text-[13px]">
            <thead>
              <tr style={{ background: "rgba(30,80,180,0.06)", borderBottom: "1px solid rgba(30,80,180,0.1)" }}>
                {block.headers.map((h) => (
                  <th key={h} className="text-left px-4 py-2.5 font-semibold" style={{ color: "rgba(8,30,100,0.75)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.18)", borderBottom: "1px solid rgba(30,80,180,0.06)" }}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-2.5 ${j === 0 ? "font-semibold" : ""}`}
                      style={{ color: j === 0 ? "rgba(8,30,100,0.8)" : "rgba(20,60,130,0.65)" }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "info-box":
      return (
        <div className="rounded-[14px] p-4" style={{ background: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.65)" }}>
          <p className="text-[12px] font-semibold uppercase tracking-wide mb-2" style={{ color: "rgba(30,80,180,0.45)" }}>{block.title}</p>
          <p className="text-[14px] leading-relaxed" style={{ color: "rgba(20,60,130,0.7)" }}>{block.content}</p>
        </div>
      );

    case "section":
      return (
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "rgba(30,80,160,0.4)" }}>{block.title}</p>
          <div className="space-y-3">
            {block.blocks.map((b, i) => <BlockRenderer key={i} block={b} accent={accent} />)}
          </div>
        </div>
      );

    default:
      return null;
  }
}

const SENSE_META: { id: SenseName; organ: string; label: string }[] = [
  { id: "nose",   organ: "Hidung",  label: "Penghidu" },
  { id: "tongue", organ: "Lidah",   label: "Pengecap" },
  { id: "eye",    organ: "Mata",    label: "Penglihatan" },
  { id: "ear",    organ: "Telinga", label: "Pendengaran" },
  { id: "skin",   organ: "Kulit",   label: "Peraba" },
];

function OtherSenses({ currentId }: { currentId: SenseName }) {
  const navigate = useNavigate();
  const others = SENSE_META.filter((s) => s.id !== currentId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="mt-10"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.09em] mb-4" style={{ color: "rgba(30,80,160,0.4)" }}>Materi Lainnya</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {others.map((s) => {
          const acc = ACCENTS[s.id];
          return (
            <button key={s.id} onClick={() => navigate(`/indra/${s.id}`)}
              className="rounded-[16px] p-4 text-left cursor-pointer transition-all hover:scale-[1.03] hover:-translate-y-0.5 liquid-glass">
              <div className="w-9 h-9 rounded-[10px] flex items-center justify-center mb-3"
                style={{ background: `linear-gradient(135deg, ${acc.hex}28, ${acc.hex}14)`, border: "1px solid rgba(255,255,255,0.6)", color: acc.hex }}>
                <div className="scale-75">{ICONS[s.id]}</div>
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-wide mb-0.5" style={{ color: acc.hex }}>{s.label}</p>
              <p className="text-[14px] font-bold" style={{ color: "rgba(8,30,100,0.85)" }}>{s.organ}</p>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
