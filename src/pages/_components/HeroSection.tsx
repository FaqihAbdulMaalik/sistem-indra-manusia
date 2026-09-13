import { motion } from "motion/react";

const SCHOOL_LOGO = "https://hercules-cdn.com/file_8AvQHpr8t7yBZU10qbvfgp6c";

export default function HeroSection() {
  return (
    <header className="text-center pt-16 pb-12 select-none">

      {/* School badge */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full mb-8 liquid-glass"
      >
        <img
          src={SCHOOL_LOGO}
          alt="Logo SMP El Rasyad IJHS"
          className="w-7 h-7 rounded-full object-cover"
          style={{ filter: "drop-shadow(0 1px 2px rgba(0,80,160,0.15))" }}
        />
        <span className="text-[12px] font-semibold tracking-[0.06em] uppercase"
          style={{ color: "rgba(20,60,120,0.75)" }}>
          SMP El Rasyad IJHS &nbsp;·&nbsp; IPA Kelas IX
        </span>
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: 0.08 }}
        className="flex justify-center mb-8"
      >
        <div
          className="w-28 h-28 rounded-[32px] liquid-glass flex items-center justify-center p-2"
          style={{
            boxShadow:
              "0 0 0 1.5px rgba(255,255,255,0.85) inset, 0 20px 60px rgba(30,80,180,0.18), 0 4px 16px rgba(30,80,180,0.12)",
          }}
        >
          <img
            src={SCHOOL_LOGO}
            alt="Logo El Rasyad"
            className="w-full h-full object-contain rounded-[24px]"
          />
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
        className="text-[clamp(38px,7.5vw,72px)] font-bold leading-[1.04] tracking-[-0.03em]"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,40,100,0.95) 0%, rgba(30,80,160,0.85) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 2px 8px rgba(255,255,255,0.4))",
        }}
      >
        Sistem Indra<br />Pada Manusia
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.24 }}
        className="mt-5 text-[clamp(15px,2.3vw,19px)] max-w-[560px] mx-auto leading-relaxed font-light"
        style={{ color: "rgba(20,60,120,0.65)" }}
      >
        Sistem indra terdiri dari organ indra yang berfungsi untuk menerima
        rangsangan dari lingkungan sekitar.
      </motion.p>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="mt-8 flex items-center justify-center gap-2 text-[13px] font-medium"
        style={{ color: "rgba(30,80,160,0.4)" }}
      >
        <span>Ketuk kartu untuk detail</span>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          className="animate-bounce"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </header>
  );
}
