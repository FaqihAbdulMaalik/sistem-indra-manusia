import { useState } from "react";
import { motion } from "motion/react";
import { SENSE_CARDS, ACCENTS, type SenseName } from "../_data/senses.ts";

const GLASS_TINTS: Record<SenseName, string> = {
  nose:   "rgba(255, 100,  80, 0.08)",
  tongue: "rgba(255, 160,  20, 0.08)",
  eye:    "rgba( 40, 130, 255, 0.10)",
  ear:    "rgba( 40, 200, 100, 0.08)",
  skin:   "rgba(160,  60, 240, 0.08)",
};

const ICON_BG: Record<SenseName, string> = {
  nose:   "linear-gradient(135deg, rgba(255,110,80,0.22), rgba(255,80,60,0.12))",
  tongue: "linear-gradient(135deg, rgba(255,170,20,0.22), rgba(255,140,0,0.12))",
  eye:    "linear-gradient(135deg, rgba(40,150,255,0.22), rgba(20,120,240,0.12))",
  ear:    "linear-gradient(135deg, rgba(40,210,100,0.22), rgba(20,190,80,0.12))",
  skin:   "linear-gradient(135deg, rgba(170,60,250,0.22), rgba(140,40,230,0.12))",
};

function SenseIcon({ id }: { id: SenseName }) {
  const icons: Record<SenseName, React.ReactNode> = {
    nose: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2C12 2 8 6 8 12c0 3 1 5 2 6.5C11 20 12 21 12 22" />
        <path d="M12 2c0 0 4 4 4 10 0 3-1 5-2 6.5C13 20 12 21 12 22" />
        <path d="M8 18.5C7 19.5 5 20 5 22h14c0-2-2-2.5-3-3.5" />
      </svg>
    ),
    tongue: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M8 2h8a2 2 0 0 1 2 2v8c0 4-3 8-6 10-3-2-6-6-6-10V4a2 2 0 0 1 2-2z" />
        <line x1="12" y1="6" x2="12" y2="12" />
        <line x1="9"  y1="8" x2="9"  y2="11" />
        <line x1="15" y1="8" x2="15" y2="11" />
      </svg>
    ),
    eye: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    ear: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M6 8a6 6 0 0 1 12 0c0 5-4 6-4 10a2 2 0 0 1-4 0" />
        <path d="M9 13a3 3 0 0 0 3 3" />
      </svg>
    ),
    skin: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
        <path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2" />
        <path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8" />
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
      </svg>
    ),
  };
  return <>{icons[id]}</>;
}

type Props = {
  onCardClick: (sense: SenseName) => void;
};

export default function BentoGrid({ onCardClick }: Props) {
  return (
    <div className="grid grid-cols-12 gap-4">
      {SENSE_CARDS.map((card, i) => (
        <BentoCard
          key={card.id}
          card={card}
          index={i}
          onClick={() => onCardClick(card.id)}
        />
      ))}
    </div>
  );
}

type CardProps = {
  card: (typeof SENSE_CARDS)[number];
  index: number;
  onClick: () => void;
};

function BentoCard({ card, index, onClick }: CardProps) {
  const [hovered, setHovered] = useState(false);
  const accent = ACCENTS[card.id];

  return (
    <motion.div
      className={`col-span-12 relative overflow-hidden rounded-[22px] cursor-pointer ${card.colSpan}`}
      style={{
        background: hovered ? `rgba(255,255,255,0.62)` : `rgba(255,255,255,0.50)`,
        border: "1px solid rgba(255,255,255,0.72)",
        backdropFilter: "blur(28px) saturate(1.8)",
        WebkitBackdropFilter: "blur(28px) saturate(1.8)",
        boxShadow: hovered
          ? `0 2px 0 rgba(255,255,255,0.8) inset, 0 -1px 0 rgba(180,200,240,0.3) inset, 0 20px 60px rgba(30,80,180,0.16), 0 0 30px ${accent.glow}`
          : "0 2px 0 rgba(255,255,255,0.72) inset, 0 8px 32px rgba(60,100,180,0.09)",
        transition: "box-shadow 0.35s ease, background 0.3s ease",
      }}
      initial={{ opacity: 0, y: 44 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1], delay: 0.3 + index * 0.1 }}
      whileHover={{ scale: 1.022, y: -5 }}
      whileTap={{ scale: 0.975 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Tint overlay */}
      <motion.div
        className="absolute inset-0 rounded-[22px] pointer-events-none"
        style={{ background: GLASS_TINTS[card.id], opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Specular top-edge */}
      <div
        className="absolute top-0 left-4 right-4 h-[1.5px] rounded-full pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.95) 40%, rgba(255,255,255,0.95) 60%, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 p-7">
        <div
          className="w-12 h-12 rounded-[13px] flex items-center justify-center mb-5"
          style={{
            background: ICON_BG[card.id],
            border: "1px solid rgba(255,255,255,0.6)",
            color: accent.hex,
            boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset",
          }}
        >
          <SenseIcon id={card.id} />
        </div>

        <p className="text-[10.5px] font-semibold tracking-[0.1em] uppercase mb-2"
          style={{ color: accent.hex, opacity: 0.9 }}>
          {card.label}
        </p>

        <h2 className="text-[clamp(22px,3vw,27px)] font-bold tracking-[-0.022em] leading-tight mb-2.5"
          style={{ color: "rgba(10,35,90,0.92)" }}>
          {card.organ}
        </h2>

        <p className="text-[14.5px] leading-relaxed max-w-[320px]"
          style={{ color: "rgba(30,60,130,0.6)" }}>
          {card.subtitle}
        </p>

        <motion.div
          className="inline-flex items-center gap-1.5 mt-5 text-[12px] font-medium"
          animate={{ color: hovered ? "rgba(30,80,180,0.75)" : "rgba(30,80,180,0.35)" }}
        >
          <span>Lihat detail</span>
          <motion.svg
            width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.3 }}
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </motion.svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
