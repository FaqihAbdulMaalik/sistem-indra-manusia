import { motion } from "motion/react";

export default function AmbientGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Main sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #b8d4f8 0%, #a0c8f0 15%, #7ab8ee 32%, #5aa8e8 50%, #6ab8f0 65%, #8ecff5 82%, #b0e0f8 100%)",
        }}
      />

      {/* Blurred orbs */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 900,
          height: 900,
          background:
            "radial-gradient(circle, rgba(120,180,255,0.7) 0%, rgba(80,140,240,0.3) 50%, transparent 75%)",
          top: -200,
          left: -100,
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.06, 1], x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(160,220,255,0.65) 0%, rgba(100,180,240,0.3) 55%, transparent 75%)",
          bottom: -100,
          right: -50,
          filter: "blur(70px)",
        }}
        animate={{ scale: [1, 1.1, 1], x: [0, -15, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(200,235,255,0.6) 0%, transparent 70%)",
          top: "30%",
          left: "35%",
          filter: "blur(80px)",
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(80,200,180,0.35) 0%, transparent 70%)",
          bottom: "20%",
          left: "10%",
          filter: "blur(90px)",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Specular highlight top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0.9) 60%, transparent 100%)",
        }}
      />
    </div>
  );
}
