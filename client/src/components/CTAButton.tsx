import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "accent";
  size?: "default" | "lg";
  className?: string;
}

export default function CTAButton({
  children,
  variant = "primary",
  size = "lg",
  className = "",
}: CTAButtonProps) {
  const WHATSAPP_NUMBER = "5541984804266";
  const WHATSAPP_MESSAGE = "Olá! Quero minha estratégia personalizada.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size={size}
      variant={variant === "accent" ? "secondary" : "default"}
      className={`group transition-all duration-300 hover:scale-105 ${className}`}
      data-testid="button-cta-whatsapp"
    >
      {children}
      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
    </Button>
  );
}
