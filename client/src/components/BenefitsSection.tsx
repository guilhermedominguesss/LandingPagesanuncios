import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const benefits = [
  "Diagnóstico real do que trava seu faturamento",
  "Estratégia personalizada criada por especialistas",
  "Plano de crescimento direto ao ponto",
  "Caminho claro para resultados antes de 2026",
];

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

export default function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(to bottom, rgba(248,247,242,0.98), rgba(255,255,255,1))
        `,
      }}
      data-testid="section-benefits"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CDA580]/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <div className="text-center space-y-14">
          <motion.h2 
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariant}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#232326] leading-[1.15] tracking-tight"
          >
            O Que Você Vai Receber
          </motion.h2>

          <div className="space-y-4 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                custom={0.1 + index * 0.08}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUpVariant}
                className="flex items-center gap-5 p-5 md:p-6 rounded-2xl backdrop-blur-sm border border-[#CDA580]/10 text-left transition-all duration-300 hover:border-[#CDA580]/20"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.6), rgba(248,247,242,0.4))`,
                }}
                data-testid={`benefit-item-${index}`}
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#9D6135]/10 to-[#CDA580]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-[#9D6135]" />
                </div>
                <p className="text-lg text-[#232326]/80 font-light">{benefit}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            custom={0.5}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariant}
            className="pt-8"
          >
            <p className="text-base md:text-lg text-[#232326]/50 italic font-light">
              Usamos metodologia aplicada por grandes players e adaptada para pequenos e grandes negócios.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
