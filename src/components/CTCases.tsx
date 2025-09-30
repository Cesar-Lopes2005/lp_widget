import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  ShoppingCart, 
  Building, 
  Home,
  Quote
} from 'lucide-react';

interface CTCasesProps {
  onChatOpen: (message?: string) => void;
}

export const CTCases: React.FC<CTCasesProps> = ({ onChatOpen }) => {
  const cases = [
    {
      icon: ShoppingCart,
      company: 'Loja Online',
      industry: 'E-commerce',
      agent: 'Agente Farmer',
      challenge: 'Alto índice de carrinho abandonado e baixa retenção de clientes',
      solution: 'Follow-up automático de carrinho abandonado + ofertas personalizadas',
      result: '40% aumento na retenção de clientes',
      metrics: [
        { label: 'Recuperação de carrinho', value: '+65%' },
        { label: 'Retenção de clientes', value: '+40%' },
        { label: 'Ticket médio', value: '+28%' }
      ],
      testimonial: "O agente farmer transformou nosso relacionamento com clientes. Agora recuperamos vendas que antes eram perdidas.",
      author: "Marina Silva, Diretora de E-commerce"
    },
    {
      icon: Building,
      company: 'Consultoria B2B',
      industry: 'Serviços Profissionais',
      agent: 'Agente SDR',
      challenge: 'Dificuldade em qualificar leads e agendar reuniões comerciais',
      solution: 'Prospecção automatizada no LinkedIn + qualificação via WhatsApp',
      result: '3x mais leads qualificados',
      metrics: [
        { label: 'Leads qualificados', value: '+300%' },
        { label: 'Reuniões agendadas', value: '+250%' },
        { label: 'Taxa de conversão', value: '+180%' }
      ],
      testimonial: "Triplicamos nossa geração de leads qualificados. O ROI foi impressionante desde o primeiro mês.",
      author: "Carlos Mendes, Diretor Comercial"
    },
    {
      icon: Home,
      company: 'Imobiliária Regional',
      industry: 'Imóveis',
      agent: 'Automação CRM',
      challenge: 'Processos manuais demorados e follow-up inconsistente',
      solution: 'Automação de entrada de dados + follow-up + agendamentos',
      result: 'Economia de 20h/semana',
      metrics: [
        { label: 'Tempo economizado', value: '20h/sem' },
        { label: 'Visitas agendadas', value: '+85%' },
        { label: 'Produtividade', value: '+150%' }
      ],
      testimonial: "Nossa equipe agora foca no que realmente importa: fechar negócios. A automação cuida do resto.",
      author: "Ana Costa, Proprietária"
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '100+',
      label: 'Clientes Ativos',
      description: 'Empresas de todos os tamanhos'
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Taxa de Satisfação',
      description: 'Clientes recommendam nossos serviços'
    },
    {
      icon: Clock,
      value: '500K+',
      label: 'Mensagens Processadas',
      description: 'Interações automatizadas com sucesso'
    }
  ];

  return (
    <section id="casos" className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900 mb-6">
            Casos de Sucesso
          </h2>
          <p className="section-subtitle text-gray-600 mx-auto">
            Veja como nossos agentes de IA transformaram negócios reais com resultados mensuráveis
          </p>
        </div>

        {/* Cases */}
        <div className="space-y-12 mb-20">
          {cases.map((case_, index) => {
            const IconComponent = case_.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {case_.company}
                        </h3>
                        <p className="text-primary font-medium">
                          {case_.industry} • {case_.agent}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Desafio:</h4>
                        <p className="text-gray-600">{case_.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solução:</h4>
                        <p className="text-gray-600">{case_.solution}</p>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                      <div className="flex items-center mb-3">
                        <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                        <span className="font-semibold text-green-800">Resultado Principal:</span>
                      </div>
                      <div className="text-2xl font-bold text-green-900">
                        {case_.result}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <Quote className="w-6 h-6 text-primary mb-3" />
                      <p className="text-gray-700 italic mb-3">
                        "{case_.testimonial}"
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        - {case_.author}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-6">Métricas de Impacto:</h4>
                    <div className="space-y-4">
                      {case_.metrics.map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-4"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium">
                              {metric.label}
                            </span>
                            <span className="text-2xl font-bold text-primary">
                              {metric.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Button 
                        onClick={() => onChatOpen(`Gostaria de um caso como o da ${case_.company}`)}
                        className="w-full button-primary"
                      >
                        Quero Resultados Similares
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Overall Stats */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Resultados Comprovados</h3>
            <p className="text-xl opacity-90">
              Mais de 100 empresas já transformaram seus resultados com nossos agentes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-xl font-semibold mb-2">{stat.label}</div>
                  <div className="opacity-90">{stat.description}</div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => onChatOpen('Quero ver mais casos de sucesso e resultados')}
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-medium px-8 py-3"
            >
              Ver Mais Casos de Sucesso
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};