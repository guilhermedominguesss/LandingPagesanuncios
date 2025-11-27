import CTAButton from '../CTAButton';

export default function CTAButtonExample() {
  return (
    <div className="flex flex-col gap-4 p-8 bg-background">
      <CTAButton variant="primary">
        Quero falar com o Especialista agora
      </CTAButton>
      <CTAButton variant="accent">
        Quero garantir minha vaga agora
      </CTAButton>
    </div>
  );
}
