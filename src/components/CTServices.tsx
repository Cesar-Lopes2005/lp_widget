import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Users,
  Target,
  Settings,
  MessageSquare,
  TrendingUp,
  Clock,
  Bot,
  Star,
  BarChart3,
  Check
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

        {/* Main Services - Tabs */}
        <Tabs defaultValue="sdr" className="mb-20">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto mb-8 bg-gray-100 p-2 rounded-xl">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="flex flex-col items-center gap-2 py-4 px-3 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all"
                >
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center transition-colors
                    ${service.featured ? 'bg-primary/10 text-primary' : 'bg-gray-200 text-gray-600'}
                  `}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-sm">{service.title}</div>
                    {service.featured && (
                      <div className="text-xs text-primary flex items-center justify-center gap-1 mt-1">
                        <Star className="w-3 h-3" />
                        Popular
                      </div>
                    )}
                  </div>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <TabsContent key={service.id} value={service.id} className="mt-0">
                <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden">
                  {/* Header com gradient */}
                  <div className={`
                    p-8 bg-gradient-to-br
                    ${service.featured
                      ? 'from-primary/10 via-primary/5 to-transparent'
                      : 'from-gray-50 to-white'
                    }
                  `}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`
                          w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg
                          ${service.featured ? 'bg-primary text-white' : 'bg-white text-primary border-2 border-primary'}
                        `}>
                          <IconComponent className="w-10 h-10" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-1">
                            {service.title}
                          </h3>
                          <p className="text-lg text-primary font-semibold">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                      {service.featured && (
                        <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-lg">
                          <Star className="w-4 h-4 mr-1" />
                          Mais Popular
                        </div>
                      )}
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl">
                      {service.description}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-8 grid md:grid-cols-2 gap-8">
                    {/* Coluna Esquerda - Benefícios */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <Check className="w-6 h-6 text-primary mr-2" />
                        Benefícios Principais
                      </h4>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start group">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 group-hover:bg-primary transition-colors">
                              <Check className="w-4 h-4 text-primary group-hover:text-white" />
                            </div>
                            <span className="text-gray-700 text-base leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Coluna Direita - Resultado e Integrações */}
                    <div className="space-y-6">
                      {/* Resultado */}
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-green-800">
                              Resultado Comprovado
                            </div>
                            <div className="text-2xl font-bold text-green-900">
                              {service.result}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-green-700">
                          Baseado em resultados reais de nossos clientes
                        </p>
                      </div>

                      {/* Integrações */}
                      <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                        <div className="flex items-center gap-2 mb-3">
                          <Settings className="w-5 h-5 text-primary" />
                          <h5 className="font-semibold text-gray-900">
                            Integrações Incluídas
                          </h5>
                        </div>
                        <p className="text-gray-700 font-medium">
                          {service.integrations}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <Button
                        onClick={() => onChatOpen(`Gostaria de saber mais sobre o ${service.title}`)}
                        className={`
                          w-full font-semibold text-lg py-6 rounded-xl shadow-lg
                          ${service.featured
                            ? 'button-primary'
                            : 'bg-gray-900 hover:bg-gray-800 text-white'
                          }
                        `}
                      >
                        {service.id === 'crm' ? 'Solicitar Orçamento' : 'Começar Agora'}
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>

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