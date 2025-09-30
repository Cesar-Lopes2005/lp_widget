import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Users,
  Target,
  Settings,
  MessageSquare,
  TrendingUp,
  Clock,
  Bot,
  Star,
  BarChart3
} from 'lucide-react';

interface CTServicesProps {
  onChatOpen: (message?: string) => void;
}

export const CTServices: React.FC<CTServicesProps> = ({ onChatOpen }) => {
  const services = [
    {
      id: 'sdr',
      icon: Target,
      title: 'Agente SDR',
      subtitle: 'Nosso Carro-Chefe',
      description: 'Automatização de prospecção e qualificação de leads',
      benefits: [
        'Prospecção automática',
        'Qualificação inteligente de leads',
        'Agendamento de reuniões',
        'Integração com WhatsApp e CRM',
        'Relatórios de performance'
      ],
      result: '3x mais leads qualificados',
      integrations: 'WhatsApp, 1 CRM incluído',
      featured: true
    },
    {
      id: 'farmer',
      icon: Users,
      title: 'Agente Farmer',
      subtitle: 'Retenção de Clientes',
      description: 'Automatização de relacionamento com clientes existentes',
      benefits: [
        'Follow-up automático de vendas',
        'Reativação de leads dormentes',
        'Nutrição de relacionamento',
        'Integração com WhatsApp e CRM',
        'Análise de satisfação'
      ],
      result: '40% aumento na retenção de clientes',
      integrations: 'WhatsApp, 1 CRM incluído',
      featured: false
    },
    {
      id: 'crm',
      icon: BarChart3,
      title: 'CRM Personalizado',
      subtitle: 'Análise de Dados',
      description: 'CRM sob medida para análise completa dos seus leads',
      benefits: [
        'Dashboards personalizados',
        'Métricas de performance em tempo real',
        'Funil de vendas visual',
        'Relatórios automatizados',
        'Integração total com agentes'
      ],
      result: 'Decisões baseadas em dados',
      integrations: 'Integra com todos nossos agentes',
      featured: false
    },
    {
      id: 'custom',
      icon: Settings,
      title: 'Automações Personalizadas',
      subtitle: 'Sob Medida',
      description: 'Processos internos e integrações customizadas',
      benefits: [
        'Automação de processos manuais',
        'Integrações entre sistemas',
        'Workflows personalizados',
        'Notificações inteligentes'
      ],
      result: 'Economia de 20h/semana',
      integrations: 'Google Workspace, ClickUp, Zapier',
      featured: false
    }
  ];

  const features = [
    {
      icon: MessageSquare,
      title: 'Respostas instantâneas 24/7',
      description: 'Seus clientes nunca ficam sem resposta'
    },
    {
      icon: Settings,
      title: 'Integração com sistemas existentes',
      description: 'Conecta com seu CRM, WhatsApp e mais 50+ ferramentas'
    },
    {
      icon: TrendingUp,
      title: 'Relatórios e analytics em tempo real',
      description: 'Acompanhe performance e resultados detalhados'
    },
    {
      icon: Bot,
      title: 'Conversas naturais com IA avançada',
      description: 'Muito além de chatbots tradicionais'
    },
    {
      icon: Clock,
      title: 'Implementação em 24 horas',
      description: 'Do contrato ao funcionamento em um dia'
    },
    {
      icon: Target,
      title: 'Automação de follow-up inteligente',
      description: 'Nunca perca uma oportunidade de venda'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900 mb-6">
            Nossos Agentes de IA
          </h2>
          <p className="section-subtitle text-gray-600 mx-auto">
            Soluções completas para automatizar seu relacionamento com clientes, 
            prospecção e processos internos
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`
                  relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                  ${service.featured ? 'border-primary' : 'border-gray-200'}
                `}
              >
                {service.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Mais Popular
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <div className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center mb-4
                    ${service.featured ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}
                  `}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefícios:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="text-sm font-medium text-green-800 mb-1">
                    Resultado:
                  </div>
                  <div className="text-lg font-bold text-green-900">
                    {service.result}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-700 mb-1">
                    Integrações:
                  </div>
                  <div className="text-sm text-gray-600">
                    {service.integrations}
                  </div>
                </div>

                <Button 
                  onClick={() => onChatOpen(`Gostaria de saber mais sobre o ${service.title}`)}
                  className={`
                    w-full font-medium
                    ${service.featured ? 'button-primary' : 'bg-gray-900 hover:bg-gray-800 text-white'}
                  `}
                >
                  Saiba Mais
                </Button>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Características Técnicas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Performance Garantida</h3>
          <p className="text-xl mb-8 opacity-90">
            Nossos agentes oferecem performance de nível enterprise
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="opacity-90">Uptime Garantido</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">&lt;2s</div>
              <div className="opacity-90">Tempo de Resposta</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};