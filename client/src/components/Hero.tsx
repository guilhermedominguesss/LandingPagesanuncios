import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import { Check, AlertTriangle } from "lucide-react";

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

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 30% 20%, rgba(157,97,53,0.06) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(205,165,128,0.08) 0%, transparent 50%),
          linear-gradient(to bottom, #F8F7F2, rgba(248,247,242,1))
        `,
      }}
      data-testid="section-hero"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#CDA580]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#9D6135]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-24 max-w-5xl">
        <div className="text-center space-y-8">
          <motion.h1 
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#232326] leading-[1.1] tracking-tight"
            data-testid="text-hero-title"
          >
            A última chance de escalar seu negócio antes de 2026 começa aqui.
          </motion.h1>

          <motion.p 
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="text-lg md:text-xl text-[#232326]/70 max-w-3xl mx-auto leading-relaxed font-light"
            data-testid="text-hero-subtitle"
          >
            Uma estratégia criada sob medida para aumentar sua captação, acelerar seu faturamento e destravar o crescimento que você ainda não conseguiu — sem complicação.
          </motion.p>

          <motion.div 
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center max-w-3xl mx-auto pt-4"
          >
            <div className="flex items-center gap-3 text-[#232326]/80">
              <div className="w-5 h-5 rounded-full bg-[#9D6135]/10 flex items-center justify-center">
                <Check className="h-3 w-3 text-[#9D6135]" />
              </div>
              <span className="text-base font-light">Estratégia personalizada</span>
            </div>
            <div className="flex items-center gap-3 text-[#232326]/80">
              <div className="w-5 h-5 rounded-full bg-[#9D6135]/10 flex items-center justify-center">
                <Check className="h-3 w-3 text-[#9D6135]" />
              </div>
              <span className="text-base font-light">Testada em centenas de negócios</span>
            </div>
            <div className="flex items-center gap-3 text-[#232326]/80">
              <div className="w-5 h-5 rounded-full bg-[#9D6135]/10 flex items-center justify-center">
                <Check className="h-3 w-3 text-[#9D6135]" />
              </div>
              <span className="text-base font-light">Resultados acelerados em até 30 dias</span>
            </div>
          </motion.div>

          <motion.div 
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="pt-10"
          >
            <CTAButton variant="primary">
              Quero falar com o Especialista agora
            </CTAButton>
          </motion.div>

          <motion.div 
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="flex items-center justify-center gap-2 text-[#9D6135]/80 text-sm pt-4"
            data-testid="text-hero-urgency"
          >
            <AlertTriangle className="h-4 w-4" />
            <span className="font-light">Agenda para novembro e dezembro quase cheia.</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
