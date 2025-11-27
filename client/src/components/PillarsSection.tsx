import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, RefreshCw } from "lucide-react";

const pillars = [
  {
    icon: Users,
    number: "1",
    title: "Demanda",
    description: "Como aumentar sua procura sem depender de sorte.",
  },
  {
    icon: TrendingUp,
    number: "2",
    title: "Conversão",
    description: "Como transformar seguidores em faturamento real.",
  },
  {
    icon: RefreshCw,
    number: "3",
    title: "Recompra",
    description: "Como clientes voltam mais, gastam mais e indicam mais.",
  },
];

export default function PillarsSection() {
  return (
    <section className="py-20 md:py-24 bg-[#F8F7F2]" data-testid="section-pillars">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#232326]">
            Os 3 Pilares do Crescimento
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white border-[#CDA580]/20 rounded-2xl"
              data-testid={`card-pillar-${index}`}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-[#9D6135]/10 flex items-center justify-center">
                  <pillar.icon className="h-8 w-8 text-[#9D6135]" />
                </div>
                <CardTitle className="text-2xl font-bold text-[#232326]">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#232326]/70 leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
