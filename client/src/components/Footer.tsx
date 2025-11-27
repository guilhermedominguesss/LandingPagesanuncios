import { MessageCircle } from "lucide-react";

export default function Footer() {
  const WHATSAPP_NUMBER = "5541984804266";
  const WHATSAPP_MESSAGE = "Olá! Quero minha estratégia personalizada.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <footer className="py-16 bg-[#232326] relative" data-testid="footer">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F8F7F2]/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="flex flex-col items-center gap-8 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#CDA580]/20 text-[#CDA580] hover:text-[#F8F7F2] hover:border-[#CDA580]/40 transition-all duration-300"
            data-testid="link-footer-whatsapp"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-light">Falar no WhatsApp</span>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-[#F8F7F2]/5 text-center">
          <p className="text-sm text-[#F8F7F2]/40 font-light">
            © 2024 Agência. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
