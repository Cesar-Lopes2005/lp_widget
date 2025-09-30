import React from 'react';
import { Button } from '@/components/ui/button';
import { Bot, Zap, TrendingUp, Users } from 'lucide-react';
import ctLogoDark from '@/assets/ct-logo-dark-horizontal.png';

interface CTHeroProps {
  onChatOpen: (message?: string) => void;
}

export const CTHero: React.FC<CTHeroProps> = ({ onChatOpen }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 section-container pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={ctLogoDark} 
              alt="CT Junior" 
              className="h-16 md:h-20 object-contain"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-8">
            <Bot className="w-4 h-4 mr-2" />
            Soluções de Automação com IA
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Transforme seu
            <span className="text-primary block">
              Atendimento e Vendas
            </span>
            com Agentes de IA
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Automatize relacionamento com clientes, prospecção e processos internos. 
            <strong className="text-gray-900"> Aumente 40% na retenção</strong> e 
            <strong className="text-gray-900"> triplique seus leads qualificados</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg"
              onClick={() => onChatOpen('Quero agendar uma demonstração gratuita de 30 minutos!')}
              className="button-primary text-lg px-8 py-4 h-auto font-semibold"
            >
              Demonstração Gratuita
              <Zap className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onChatOpen('Gostaria de testar o agente por 7 dias grátis!')}
              className="text-lg px-8 py-4 h-auto font-semibold border-2 hover:bg-primary/5"
            >
              Teste 7 Dias Grátis
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900">100+</div>
              <div className="text-sm text-gray-600">Clientes Ativos</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900">500K+</div>
              <div className="text-sm text-gray-600">Mensagens Processadas</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900">40%</div>
              <div className="text-sm text-gray-600">Aumento na Retenção</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900">3x</div>
              <div className="text-sm text-gray-600">Mais Leads Qualificados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};