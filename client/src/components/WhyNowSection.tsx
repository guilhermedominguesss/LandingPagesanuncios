export default function WhyNowSection() {
  return (
    <section className="py-20 md:py-24 bg-[#F8F7F2]" data-testid="section-why-now">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#232326]" data-testid="text-why-now-title">
            Você está prestes a entrar no ciclo de maior oportunidade desde 2020.
          </h2>

          <div className="space-y-6 text-left md:text-center pt-4">
            <p className="text-lg text-[#232326]/80">
              O Brasil está entrando no período de maior intenção de compra pré-2026.
            </p>

            <p className="text-lg text-[#232326]/80">
              Quem se posicionar agora sai na frente enquanto a concorrência dorme.
            </p>

            <p className="text-lg text-[#232326]/80">
              Quem esperar, perde tráfego, perde demanda e fica para trás.
            </p>
          </div>

          <div className="mt-12 p-6 md:p-8 bg-white/50 border-l-4 border-[#9D6135] rounded-r-lg" data-testid="box-urgency">
            <p className="text-lg md:text-xl font-semibold text-[#232326]">
              Cada semana perdida agora significa clientes indo para concorrentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
