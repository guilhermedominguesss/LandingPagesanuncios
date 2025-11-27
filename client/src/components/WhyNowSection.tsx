import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

export default function WhyNowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(to bottom, rgba(205,165,128,0.03), rgba(248,247,242,0.5)),
          rgba(248,247,242,1)
        `,
      }}
      data-testid="section-why-now"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CDA580]/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <div className="text-center space-y-10">
          <motion.h2 
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariant}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#232326] leading-[1.15] tracking-tight"
            data-testid="text-why-now-title"
          >
            Você está prestes a entrar no ciclo de maior oportunidade desde 2020.
          </motion.h2>

          <div className="space-y-5 pt-4">
            <motion.p 
              custom={0.1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-[#232326]/70 font-light leading-relaxed"
            >
              O Brasil está entrando no período de maior intenção de compra pré-2026.
            </motion.p>

            <motion.p 
              custom={0.15}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-[#232326]/70 font-light leading-relaxed"
            >
              Quem se posicionar agora sai na frente enquanto a concorrência dorme.
            </motion.p>

            <motion.p 
              custom={0.2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariant}
              className="text-lg md:text-xl text-[#232326]/70 font-light leading-relaxed"
            >
              Quem esperar, perde tráfego, perde demanda e fica para trás.
            </motion.p>
          </div>

          <motion.div 
            custom={0.3}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariant}
            className="mt-14"
          >
            <div 
              className="relative p-8 md:p-10 rounded-3xl backdrop-blur-md border border-[#CDA580]/15 shadow-2xl"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))`,
              }}
              data-testid="box-urgency"
            >
              <p className="text-lg md:text-xl font-medium text-[#232326] leading-relaxed">
                Cada semana perdida agora significa clientes indo para concorrentes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
