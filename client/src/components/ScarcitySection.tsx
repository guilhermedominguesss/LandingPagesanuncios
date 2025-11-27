import CTAButton from "./CTAButton";
import { Clock } from "lucide-react";

export default function ScarcitySection() {
  return (
    <section className="py-20 md:py-24 bg-[#232326]" data-testid="section-scarcity">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center gap-3">
            <Clock className="h-8 w-8 text-[#CDA580]" />
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8F7F2]" data-testid="text-scarcity-title">
              ⏳ Vagas extremamente limitadas
            </h2>
          </div>

          <p className="text-lg md:text-xl text-[#CDA580] max-w-2xl mx-auto leading-relaxed">
            A agenda para análises gratuitas está abrindo poucas vagas por semana para garantir qualidade. 
            Se esgotar, só reabre em janeiro.
          </p>

          <div className="pt-6">
            <CTAButton variant="accent" size="lg">
              Quero garantir minha vaga agora
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
