import { MessageCircle } from "lucide-react";

export default function Footer() {
  const WHATSAPP_NUMBER = "5541984804266";
  const WHATSAPP_MESSAGE = "Olá! Quero minha estratégia personalizada.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <footer className="py-12 bg-[#232326]" data-testid="footer">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#CDA580] hover:text-[#F8F7F2] transition-colors"
            data-testid="link-footer-whatsapp"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-[#F8F7F2]/10 text-center">
          <p className="text-sm text-[#F8F7F2]">
            © 2024 Agência. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
