import CTAButton from "./CTAButton";
import { Check, AlertTriangle } from "lucide-react";
import heroImage from "@assets/generated_images/premium_business_strategy_hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#232326]/90 via-[#232326]/80 to-[#9D6135]/70" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20 max-w-6xl">
        <div className="text-center space-y-8">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8F7F2] leading-tight" data-testid="text-hero-title">
            A última chance de escalar seu negócio antes de 2026 começa aqui.
          </h1>

          <p className="text-lg md:text-xl text-[#CDA580] max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
            Uma estratégia criada sob medida para aumentar sua captação, acelerar seu faturamento e destravar o crescimento que você ainda não conseguiu — sem complicação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto pt-4">
            <div className="flex items-center gap-2 text-[#F8F7F2]">
              <Check className="h-5 w-5 text-[#CDA580]" />
              <span className="text-base">Estratégia personalizada</span>
            </div>
            <div className="flex items-center gap-2 text-[#F8F7F2]">
              <Check className="h-5 w-5 text-[#CDA580]" />
              <span className="text-base">Testada em centenas de negócios</span>
            </div>
            <div className="flex items-center gap-2 text-[#F8F7F2]">
              <Check className="h-5 w-5 text-[#CDA580]" />
              <span className="text-base">Resultados acelerados em até 30 dias</span>
            </div>
          </div>

          <div className="pt-8">
            <CTAButton variant="primary" size="lg">
              Quero falar com o Especialista agora
            </CTAButton>
          </div>

          <div className="flex items-center justify-center gap-2 text-[#CDA580] text-sm pt-4" data-testid="text-hero-urgency">
            <AlertTriangle className="h-4 w-4" />
            <span>Agenda para novembro e dezembro quase cheia.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
