import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import ctLogoDark from '@/assets/ct-logo-dark-horizontal.png';

export const CTFooter: React.FC = () => {
  const quickLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Preços', href: '#precos' },
    { label: 'Casos de Sucesso', href: '#casos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' }
  ];

  const services = [
    { label: 'Agente Farmer', href: '#servicos' },
    { label: 'Agente SDR', href: '#servicos' },
    { label: 'Automações Personalizadas', href: '#servicos' },
    { label: 'Integrações CRM', href: '#servicos' }
  ];

  const integrations = [
    'WhatsApp Business',
    'Instagram Direct',
    'Pipedrive',
    'HubSpot',
    'Google Workspace',
    'ClickUp'
  ];

  const openWhatsApp = () => {
    const whatsappMessage = 'Olá! Vim pelo site da CT Junior e gostaria de saber mais sobre as soluções de automação com IA.';
    const url = `https://wa.me/5527999999999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src={ctLogoDark} 
              alt="CT Junior" 
              className="h-10 object-contain mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empresa júnior da UFES especializada em soluções de automação com IA. 
              Transformamos atendimento e vendas com agentes inteligentes.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  UFES, Vitória - ES
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  (27) 99999-9999
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  contato@ctjunior.ufes.br
                </span>
              </div>
            </div>

            <button 
              onClick={openWhatsApp}
              className="mt-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Fale Conosco</span>
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Integrations */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Principais Integrações</h3>
            <ul className="space-y-3">
              {integrations.map((integration, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {integration}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <span className="text-primary font-medium text-sm">
                + mais de 50 integrações disponíveis
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} CT Junior UFES. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Empresa Júnior da UFES</span>
              <span>•</span>
              <span>LGPD Compliant</span>
              <span>•</span>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};