import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import HeroSection from "./_components/HeroSection.tsx";
import BentoGrid from "./_components/BentoGrid.tsx";
import AmbientGlow from "./_components/AmbientGlow.tsx";
import PageFooter from "./_components/PageFooter.tsx";
import { type SenseName } from "./_data/senses.ts";

export default function Index() {
  const navigate = useNavigate();

  const handleCardClick = (sense: SenseName) => {
    navigate(`/indra/${sense}`);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      <AmbientGlow />
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 pb-24">
        <HeroSection />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <BentoGrid onCardClick={handleCardClick} />
        </motion.div>
        <PageFooter />
      </div>
    </div>
  );
}
