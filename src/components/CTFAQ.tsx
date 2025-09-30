import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface CTFAQProps {
  onChatOpen: (message?: string) => void;
}

export const CTFAQ: React.FC<CTFAQProps> = ({ onChatOpen }) => {
  const faqs = [
    {
      question: "Como funciona a integração com WhatsApp e Instagram?",
      answer: "Nossos agentes se conectam diretamente ao WhatsApp Business API e Instagram Direct. Eles respondem mensagens automaticamente 24/7, mantendo conversas naturais e inteligentes. A configuração é feita em algumas horas pela nossa equipe técnica."
    },
    {
      question: "Preciso saber programar para usar os agentes?",
      answer: "Não! Nossos agentes são plug-and-play. Nossa equipe cuida de toda a configuração, integração e treinamento. Você só precisa nos fornecer acesso às suas contas e definir as regras de negócio. Tudo é feito através de interfaces visuais simples."
    },
    {
      question: "Quanto tempo demora a implementação?",
      answer: "A implementação básica leva apenas 24 horas. Configurações mais complexas com múltiplas integrações podem levar até 48-72 horas. Fornecemos acompanhamento completo durante todo o processo e treinamento para sua equipe."
    },
    {
      question: "Posso testar antes de contratar?",
      answer: "Sim! Oferecemos 7 dias de teste grátis em todos os planos. Também disponibilizamos uma demonstração gratuita de 30 minutos onde mostramos o agente funcionando com seus dados reais. Sem compromisso!"
    },
    {
      question: "Os agentes substituem completamente o atendimento humano?",
      answer: "Não substituem, mas complementam! Os agentes cuidam de 80% das interações rotineiras (FAQ, qualificação, agendamentos). Casos complexos são automaticamente direcionados para humanos. Sua equipe foca no que realmente importa."
    },
    {
      question: "Como vocês protegem os dados dos meus clientes?",
      answer: "Usamos criptografia de ponta a ponta, servidores seguros no Brasil e seguimos a LGPD rigorosamente. Todos os dados são processados de forma segura e nunca compartilhados. Temos certificações de segurança ISO 27001."
    },
    {
      question: "Posso cancelar o serviço quando quiser?",
      answer: "Sim! Não trabalhamos com fidelidade. Você pode cancelar com 30 dias de antecedência. Durante o período de aviso, continuamos fornecendo suporte total. Sem multas ou taxas extras."
    },
    {
      question: "Que tipo de suporte vocês oferecem?",
      answer: "Plano Starter: suporte por email (resposta em 24h). Plano Pro: suporte prioritário via WhatsApp. Plano Enterprise: suporte 24/7 + gerente de conta dedicado + consultoria estratégica mensal."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900 mb-6">
            Perguntas Frequentes
          </h2>
          <p className="section-subtitle text-gray-600 mx-auto">
            Tire suas principais dúvidas sobre nossos agentes de IA e como eles podem transformar seu negócio
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 border border-gray-200 rounded-xl px-6 data-[state=open]:bg-white data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 pt-2 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Nossa equipe está pronta para responder todas as suas perguntas e 
              mostrar como nossos agentes podem transformar seu negócio
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onChatOpen('Tenho algumas dúvidas sobre os agentes de IA')}
                className="button-primary bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
              <Button 
                onClick={() => onChatOpen('Gostaria de agendar uma demonstração de 30 minutos')}
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 font-medium px-8 py-3"
              >
                Agendar Demonstração
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};