import { motion } from "motion/react";

export default function PageFooter() {
  return (
    <motion.footer
      className="text-center pt-14 pb-4 text-[13px]"
      style={{ color: "rgba(30,80,160,0.35)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8 }}
    >
      Dibuat untuk Tugas IPA&nbsp;&nbsp;·&nbsp;&nbsp;
      <span style={{ color: "rgba(30,80,160,0.5)" }}>Sistem Indra Pada Manusia</span>
      &nbsp;&nbsp;·&nbsp;&nbsp;
      SMP El Rasyad IJHS &nbsp;·&nbsp; {new Date().getFullYear()}
    </motion.footer>
  );
}
