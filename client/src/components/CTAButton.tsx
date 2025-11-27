import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "accent";
  className?: string;
}

export default function CTAButton({
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const WHATSAPP_NUMBER = "5541984804266";
  const WHATSAPP_MESSAGE = "Olá! Quero minha estratégia personalizada.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  const isPrimary = variant === "primary";

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ 
        scale: 1.05,
        filter: "brightness(1.1)",
      }}
      whileTap={{ scale: 0.98 }}
      className={`
        group relative overflow-hidden
        w-full sm:w-auto
        px-10 py-5
        rounded-full
        font-medium text-lg
        transition-all duration-300
        ${isPrimary 
          ? 'bg-gradient-to-r from-[#9D6135] to-[#B87A4A] text-[#F8F7F2]' 
          : 'bg-gradient-to-r from-[#CDA580] to-[#D4B896] text-[#232326]'
        }
        shadow-[0_8px_32px_rgba(157,97,53,0.25)]
        hover:shadow-[0_12px_48px_rgba(157,97,53,0.35)]
        ${className}
      `}
      data-testid="button-cta-whatsapp"
    >
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      <motion.div
        className="absolute inset-0 bg-white/10"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  );
}
