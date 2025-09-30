import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Calendar,
  Users,
  ArrowRight
} from 'lucide-react';
import ctLogoDark from '@/assets/ct-logo-dark-horizontal.png';

interface CTContactProps {
  onChatOpen: (message?: string) => void;
}

export const CTContact: React.FC<CTContactProps> = ({ onChatOpen }) => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Universidade Federal do Espírito Santo',
      subtitle: 'Vitória - ES'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '(27) 99999-9999',
      subtitle: 'Resposta em até 1 hora'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@ctjunior.ufes.br',
      subtitle: 'Resposta em até 24 horas'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      content: 'Segunda à Sexta',
      subtitle: '8h às 18h'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Chat no Site',
      description: 'Qualificação inicial via nosso assistente virtual',
      icon: MessageCircle
    },
    {
      number: '02',
      title: 'Demonstração Gratuita',
      description: '30 minutos personalizados mostrando resultados reais',
      icon: Calendar
    },
    {
      number: '03',
      title: 'Teste 7 Dias',
      description: 'Período experimental para você conhecer os benefícios',
      icon: Users
    },
    {
      number: '04',
      title: 'Implementação',
      description: '24h para configuração básica e treinamento incluído',
      icon: ArrowRight
    }
  ];

  const openWhatsApp = () => {
    const whatsappMessage = 'Olá! Vim pelo site da CT Junior e gostaria de saber mais sobre as soluções de automação com IA.';
    const url = `https://wa.me/5527999999999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900 mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="section-subtitle text-gray-600 mx-auto">
            Entre em contato conosco e descubra como nossos agentes de IA podem 
            automatizar seus processos e multiplicar seus resultados
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Info */}
          <div>
            <div className="mb-8">
              <img 
                src={ctLogoDark} 
                alt="CT Junior" 
                className="h-12 object-contain mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Fale Conosco
              </h3>
              <p className="text-gray-600 text-lg">
                Somos a empresa júnior da UFES especializada em automação com IA. 
                Nossa equipe de jovens talentos está pronta para revolucionar seu atendimento e vendas.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-700 font-medium">
                        {info.content}
                      </p>
                      <p className="text-sm text-gray-500">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  onClick={openWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white font-medium py-3"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  onClick={() => onChatOpen('Gostaria de agendar uma demonstração gratuita')}
                  className="button-primary"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Demonstração
                </Button>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Como Funciona Nosso Processo
            </h3>
            
            <div className="space-y-6">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-gray-900">
                            {step.title}
                          </h4>
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">
                💡 Resultado Garantido
              </h4>
              <p className="text-gray-700">
                Em 30 dias, você verá resultados concretos: mais leads qualificados, 
                maior retenção de clientes e economia de tempo significativa. 
                Se não ficar satisfeito, devolvemos seu dinheiro.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Comece Hoje Mesmo!
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Milhares de empresas já automatizaram seus processos com IA. 
            Não fique para trás! Transforme seu negócio em 24 horas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onChatOpen('Quero começar agora! Como posso implementar os agentes?')}
              variant="outline"
              className="bg-white text-primary hover:bg-gray-100 font-medium px-8 py-3 text-lg"
            >
              Quero Começar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              onClick={() => onChatOpen()} // Apenas abre o chat
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-medium px-8 py-3 text-lg"
            >
              Tenho Mais Dúvidas
              <MessageCircle className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};