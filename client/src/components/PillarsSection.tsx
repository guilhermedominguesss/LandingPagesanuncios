import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, TrendingUp, RefreshCw } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Demanda",
    description: "Como aumentar sua procura sem depender de sorte.",
  },
  {
    icon: TrendingUp,
    title: "Conversão",
    description: "Como transformar seguidores em faturamento real.",
  },
  {
    icon: RefreshCw,
    title: "Recompra",
    description: "Como clientes voltam mais, gastam mais e indicam mais.",
  },
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

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay,
      ease: "easeOut",
    },
  }),
};

export default function PillarsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 50% 0%, rgba(157,97,53,0.04) 0%, transparent 60%),
          linear-gradient(to bottom, #F8F7F2, rgba(248,247,242,0.98))
        `,
      }}
      data-testid="section-pillars"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div 
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariant}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#232326] leading-[1.15] tracking-tight">
            Os 3 Pilares do Crescimento
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              custom={0.1 + index * 0.1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariant}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative p-8 md:p-10 rounded-3xl backdrop-blur-md border border-[#CDA580]/15 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              style={{
                background: `linear-gradient(145deg, rgba(255,255,255,0.8), rgba(255,255,255,0.5))`,
              }}
              data-testid={`card-pillar-${index}`}
            >
              <div className="text-center space-y-6">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9D6135]/10 to-[#CDA580]/10 flex items-center justify-center">
                  <pillar.icon className="h-7 w-7 text-[#9D6135]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#232326] tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-[#232326]/60 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
