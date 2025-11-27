import { Check } from "lucide-react";

const benefits = [
  "Diagnóstico real do que trava seu faturamento",
  "Estratégia personalizada criada por especialistas",
  "Plano de crescimento direto ao ponto",
  "Caminho claro para resultados antes de 2026",
];

export default function BenefitsSection() {
  return (
    <section className="py-20 md:py-24 bg-white" data-testid="section-benefits">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center space-y-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#232326]">
            O Que Você Vai Receber
          </h2>

          <div className="space-y-4 text-left max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4"
                data-testid={`benefit-item-${index}`}
              >
                <Check className="h-6 w-6 text-[#9D6135] flex-shrink-0 mt-0.5" />
                <p className="text-lg text-[#232326]">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <p className="text-base md:text-lg text-[#232326]/70 italic">
              Usamos metodologia aplicada por grandes players e adaptada para pequenos negócios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
