import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CTAButton from "./CTAButton";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      delay,
      ease: "easeOut",
    },
  }),
};

export default function ScarcitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden bg-[#232326]"
      data-testid="section-scarcity"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#9D6135]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#CDA580]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <div className="text-center space-y-10">
          <motion.h2 
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariant}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F7F2] leading-[1.15] tracking-tight"
            data-testid="text-scarcity-title"
          >
            ⏳ Vagas extremamente limitadas
          </motion.h2>

          <motion.p 
            custom={0.1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariant}
            className="text-lg md:text-xl text-[#CDA580]/80 max-w-2xl mx-auto leading-relaxed font-light"
          >
            A agenda para análises gratuitas está abrindo poucas vagas por semana para garantir qualidade. Se esgotar, só reabre em janeiro.
          </motion.p>

          <motion.div 
            custom={0.2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariant}
            className="pt-8"
          >
            <CTAButton variant="accent">
              Quero garantir minha vaga agora
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
