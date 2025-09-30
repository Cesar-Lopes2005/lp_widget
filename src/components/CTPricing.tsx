import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Check, 
  Star, 
  Bot, 
  MessageSquare, 
  BarChart3, 
  Headphones, 
  Shield, 
  Zap 
} from 'lucide-react';

interface CTPricingProps {
  onChatOpen: (message?: string) => void;
}

export const CTPricing: React.FC<CTPricingProps> = ({ onChatOpen }) => {
  const plans = [
    {
      name: 'Starter',
      price: 297,
      period: '/mês',
      description: 'Ideal para pequenas empresas começando com automação',
      features: [
        '1 Agente de IA',
        'WhatsApp OU Instagram',
        'Até 1.000 conversas/mês',
        '1 integração CRM',
        'Relatórios básicos',
        'Suporte por email'
      ],
      highlighted: false,
      cta: 'Começar Agora'
    },
    {
      name: 'Pro',
      price: 697,
      period: '/mês',
      description: 'Solução completa para empresas em crescimento',
      features: [
        '2 Agentes de IA',
        'WhatsApp + Instagram',
        'Até 5.000 conversas/mês',
        '3 integrações CRM',
        'Automações avançadas',
        'Relatórios completos',
        'Suporte prioritário',
        'Treinamento incluído'
      ],
      highlighted: true,
      cta: 'Mais Popular',
      badge: 'Mais Popular'
    },
    {
      name: 'Enterprise',
      price: 1497,
      period: '/mês',
      description: 'Para empresas que precisam de máxima performance',
      features: [
        'Agentes ilimitados',
        'Todas as integrações',
        'Conversas ilimitadas',
        'CRMs ilimitados',
        'Automações personalizadas',
        'Dashboard executivo',
        'Suporte 24/7',
        'Gerente de conta dedicado',
        'Consultoria estratégica'
      ],
      highlighted: false,
      cta: 'Falar com Vendas'
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: '7 dias de teste grátis',
      description: 'Teste sem compromisso'
    },
    {
      icon: MessageSquare,
      title: 'Demonstração gratuita',
      description: '30 min personalizada'
    },
    {
      icon: Zap,
      title: 'Sem fidelidade',
      description: 'Cancele com 30 dias de aviso'
    }
  ];

  return (
    <section id="precos" className="py-20 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900 mb-6">
            Planos e Preços
          </h2>
          <p className="section-subtitle text-gray-600 mx-auto">
            Escolha o plano ideal para o tamanho da sua empresa. 
            Todos incluem teste grátis de 7 dias.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl
                ${plan.highlighted 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-primary/30'
                }
              `}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    R$ {plan.price.toLocaleString()}
                  </span>
                  <span className="text-gray-600 ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`
                        w-5 h-5 mr-3 mt-0.5 flex-shrink-0
                        ${plan.highlighted ? 'text-primary' : 'text-green-500'}
                      `} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={() => onChatOpen(`Gostaria de contratar o plano ${plan.name}`)}
                className={`
                  w-full font-medium py-3
                  ${plan.highlighted 
                    ? 'button-primary' 
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }
                `}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600">
                  {guarantee.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Integration Highlight */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">50+ Integrações Disponíveis</h3>
          <p className="text-xl mb-8 opacity-90">
            Conecte com suas ferramentas favoritas sem complicação
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2 text-primary">Comunicação</h4>
              <div className="space-y-1 opacity-90">
                <div>WhatsApp Business</div>
                <div>Instagram</div>
                <div>Gmail</div>
                <div>Slack</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">CRMs</h4>
              <div className="space-y-1 opacity-90">
                <div>Pipedrive</div>
                <div>HubSpot</div>
                <div>RD Station</div>
                <div>Salesforce</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">Produtividade</h4>
              <div className="space-y-1 opacity-90">
                <div>ClickUp</div>
                <div>Notion</div>
                <div>Asana</div>
                <div>Trello</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">Google</h4>
              <div className="space-y-1 opacity-90">
                <div>Google Sheets</div>
                <div>Calendar</div>
                <div>Drive</div>
                <div>Forms</div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button 
              onClick={() => onChatOpen('Gostaria de ver todas as integrações disponíveis')}
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
            >
              Ver Todas as Integrações
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};