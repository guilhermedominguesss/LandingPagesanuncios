import { CheckCircle2, Award } from "lucide-react";

const benefits = [
  "Diagnóstico real do que trava seu faturamento",
  "Estratégia personalizada criada por especialistas",
  "Plano de crescimento direto ao ponto",
  "Caminho claro para resultados antes de 2026",
];

export default function BenefitsSection() {
  return (
    <section className="py-20 md:py-24 bg-[#F8F7F2]" data-testid="section-benefits">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center space-y-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#232326]">
            O Que Você Vai Receber
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white/70 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-md"
                data-testid={`benefit-item-${index}`}
              >
                <CheckCircle2 className="h-6 w-6 text-[#9D6135] flex-shrink-0 mt-1" />
                <p className="text-lg text-[#232326]">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white/50 rounded-2xl border border-[#CDA580]/30">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Award className="h-6 w-6 text-[#9D6135]" />
              <p className="text-sm font-semibold text-[#9D6135] uppercase tracking-wide">
                Metodologia Comprovada
              </p>
            </div>
            <p className="text-base md:text-lg text-[#232326]/80 italic">
              "Usamos metodologia aplicada por grandes players e adaptada para pequenos negócios."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
