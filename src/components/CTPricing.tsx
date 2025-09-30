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
  Zap,
  Target,
  Users
} from 'lucide-react';

interface CTPricingProps {
  onChatOpen: (message?: string) => void;
}

export const CTPricing: React.FC<CTPricingProps> = ({ onChatOpen }) => {
  const agents = [
    {
      id: 'sdr',
      name: 'Agente SDR',
      icon: Target,
      setup: 1000,
      monthly: 500,
      description: 'Automatize prospecção e qualificação de leads',
      setupIncludes: [
        'Integração WhatsApp Business',
        '1 CRM (Pipedrive, HubSpot ou RD)',
        'Configuração completa do agente',
        'Treinamento personalizado da IA',
        'Onboarding com a equipe'
      ],
      monthlyIncludes: [
        'Conversas ilimitadas ♾️',
        'Suporte técnico',
        'Atualizações contínuas',
        'Relatórios e analytics',
        'Monitoramento 24/7'
      ],
      addOns: [
        { name: 'Instagram', price: 200 },
        { name: 'CRM adicional', price: 300 },
        { name: 'LinkedIn', price: 300 }
      ],
      highlighted: true,
      badge: '⭐ Mais Vendido',
      result: '3x mais leads qualificados'
    },
    {
      id: 'farmer',
      name: 'Agente Farmer',
      icon: Users,
      setup: 1500,
      monthly: 500,
      description: 'Automatize relacionamento e retenção de clientes',
      setupIncludes: [
        'Integração WhatsApp Business',
        '1 CRM (Pipedrive, HubSpot ou RD)',
        'Configuração completa do agente',
        'Treinamento personalizado da IA',
        'Onboarding com a equipe'
      ],
      monthlyIncludes: [
        'Conversas ilimitadas ♾️',
        'Suporte técnico',
        'Atualizações contínuas',
        'Relatórios e analytics',
        'Monitoramento 24/7'
      ],
      addOns: [
        { name: 'Instagram', price: 200 },
        { name: 'CRM adicional', price: 300 },
        { name: 'Email Marketing', price: 250 }
      ],
      highlighted: false,
      result: '40% aumento na retenção'
    },
    {
      id: 'crm',
      name: 'CRM Personalizado',
      icon: BarChart3,
      setup: null,
      monthly: null,
      description: 'CRM sob medida para análise completa dos seus leads',
      setupIncludes: [
        'Dashboards personalizados',
        'Métricas de performance em tempo real',
        'Funil de vendas visual',
        'Relatórios automatizados',
        'Integração total com agentes de IA',
        'Treinamento da equipe'
      ],
      monthlyIncludes: [
        'Suporte dedicado',
        'Atualizações e melhorias',
        'Backup automático',
        'Segurança avançada'
      ],
      addOns: [],
      highlighted: false,
      badge: '🆕 Novo',
      customPricing: true,
      result: 'Decisões baseadas em dados'
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
          {agents.map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <div
                key={index}
                className={`
                  relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl
                  ${agent.highlighted
                    ? 'border-primary shadow-lg scale-105'
                    : 'border-gray-200 hover:border-primary/30'
                  }
                `}
              >
                {agent.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                      {agent.badge}
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4
                    ${agent.highlighted ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}
                  `}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {agent.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {agent.description}
                  </p>

                  {agent.customPricing ? (
                    <div className="py-4">
                      <div className="text-2xl font-bold text-gray-900">
                        Valor sob consulta
                      </div>
                      <div className="text-sm text-gray-600 mt-2">
                        Orçamento personalizado
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="mb-3">
                        <div className="text-sm text-gray-600 mb-1">Setup (uma vez)</div>
                        <div className="text-3xl font-bold text-gray-900">
                          R$ {agent.setup?.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Recorrência mensal</div>
                        <div className="text-3xl font-bold text-primary">
                          R$ {agent.monthly?.toLocaleString()}/mês
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Resultado */}
                <div className="mb-6 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="text-sm font-medium text-green-800 mb-1">
                    Resultado:
                  </div>
                  <div className="text-lg font-bold text-green-900">
                    {agent.result}
                  </div>
                </div>

                {/* Incluído no Setup */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">✓ Incluído no Setup:</h4>
                  <ul className="space-y-2">
                    {agent.setupIncludes.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recorrência Mensal */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">✓ Recorrência mensal:</h4>
                  <ul className="space-y-2">
                    {agent.monthlyIncludes.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add-ons */}
                {agent.addOns && agent.addOns.length > 0 && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3">💎 Add-ons Opcionais:</h4>
                    <ul className="space-y-2">
                      {agent.addOns.map((addon, idx) => (
                        <li key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-gray-700">{addon.name}</span>
                          <span className="font-medium text-gray-900">+R$ {addon.price}/mês</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button
                  onClick={() => onChatOpen(
                    agent.customPricing
                      ? `Gostaria de um orçamento para ${agent.name}`
                      : `Gostaria de contratar o ${agent.name}`
                  )}
                  className={`
                    w-full font-medium py-3
                    ${agent.highlighted
                      ? 'button-primary'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }
                  `}
                >
                  {agent.customPricing ? 'Solicitar Orçamento' : 'Começar Agora'}
                </Button>
              </div>
            );
          })}
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