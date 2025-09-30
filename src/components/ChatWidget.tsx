import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
  initialMessage?: string;
}

const WEBHOOK_URL = '/api/webhook';
const WHATSAPP_NUMBER = '5527999999999';
const WHATSAPP_MESSAGE = 'Olá! Vim pelo site da CT Junior e gostaria de saber mais sobre as soluções de automação com IA.';

export const ChatWidget: React.FC<ChatWidgetProps> = ({ 
  isOpen, 
  onToggle, 
  initialMessage 
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "Quanto custa o Agente SDR?",
    "Qual a diferença entre SDR e Farmer?",
    "Quero agendar uma demonstração",
    "Como funciona o CRM personalizado?"
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        text: '👋 Olá! Sou o assistente virtual da CT Junior. Estou aqui para tirar suas dúvidas sobre nossas soluções de automação com IA. Como posso ajudar?',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);

      if (initialMessage) {
        setTimeout(() => {
          handleSendMessage(initialMessage);
        }, 1000);
      }
    }
  }, [isOpen, initialMessage]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (message?: string) => {
    const messageText = message || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors', // Explicitly set CORS mode
        body: JSON.stringify({
          message: messageText,
          sessionId,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        const responseText = await response.text();
        console.log('Raw response:', responseText);

        let data;
        try {
          data = responseText ? JSON.parse(responseText) : {};
        } catch (e) {
          console.error('Failed to parse JSON:', e);
          data = { response: responseText };
        }

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.output?.response || data.response || data.output || responseText || getDefaultResponse(messageText),
          sender: 'bot',
          timestamp: new Date()
        };

        setTimeout(() => {
          setMessages(prev => [...prev, botMessage]);
          setIsTyping(false);
        }, 1500);
      } else {
        const errorText = await response.text();
        console.error('Response not ok:', response.status, response.statusText);
        console.error('Error body:', errorText);
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      console.log('Falling back to default response for:', messageText);
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getDefaultResponse(messageText),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setTimeout(() => {
        setMessages(prev => [...prev, fallbackMessage]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const getDefaultResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();

    console.log('Using fallback response for message:', message);

    if (lowerMessage.includes('reunião') || lowerMessage.includes('agendar') || lowerMessage.includes('demonstração')) {
      return 'Perfeito! Vou conectar você com nossa equipe para agendar uma demonstração personalizada. Clique no botão do WhatsApp abaixo para continuar! 🗓️';
    }

    if (lowerMessage.includes('preço') || lowerMessage.includes('custo') || lowerMessage.includes('valor') || lowerMessage.includes('plano')) {
      return 'Nosso Agente SDR tem setup de R$ 1.000 + R$ 500/mês (conversas ilimitadas, WhatsApp e 1 CRM incluídos). O Agente Farmer é R$ 1.500 de setup + R$ 500/mês. Todos incluem 7 dias de teste grátis! 💰';
    }

    if (lowerMessage.includes('sdr')) {
      return 'Nosso Agente SDR é perfeito para prospecção! Setup de R$ 1.000 + R$ 500/mês com conversas ilimitadas, WhatsApp e CRM incluídos. Triplique seus leads qualificados! 🎯';
    }

    if (lowerMessage.includes('farmer')) {
      return 'O Agente Farmer é ideal para retenção de clientes! Setup de R$ 1.500 + R$ 500/mês com conversas ilimitadas, WhatsApp e CRM incluídos. Aumente 40% na retenção! 👥';
    }

    if (lowerMessage.includes('crm')) {
      return 'Oferecemos CRM personalizado com dashboards sob medida para análise completa dos seus leads! Valor sob consulta. Quer saber mais? 📊';
    }

    if (lowerMessage.includes('whatsapp') || lowerMessage.includes('integra')) {
      return 'Sim! WhatsApp Business está incluído no setup. Também integramos com CRMs (Pipedrive, HubSpot, RD Station) e mais de 50 outras ferramentas! 📱';
    }

    if (lowerMessage.includes('diferença') || lowerMessage.includes('chatbot')) {
      return 'Nossos agentes usam IA avançada para conversas naturais, aprendem com cada interação e se integram ao seu CRM. Muito além de um chatbot tradicional! 🤖✨';
    }

    if (lowerMessage.includes('conversa') || lowerMessage.includes('limite')) {
      return 'Nossos agentes têm conversas ILIMITADAS! ♾️ Você paga um valor fixo mensal sem surpresas na fatura. Converse o quanto precisar! 🚀';
    }

    return 'Entendi! Nossa equipe pode te ajudar melhor com essa questão. Que tal continuar a conversa pelo WhatsApp para um atendimento mais detalhado? 😊';
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (!isOpen) {
    return (
      <Button
        onClick={onToggle}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg animate-pulse-glow z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] md:max-w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 animate-fade-in-left">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-primary/5 to-primary/10 rounded-t-2xl">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="font-medium text-gray-900">CT Junior IA</div>
            <div className="text-xs text-green-600 flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse" />
              Online agora
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="h-8 w-8 p-0 hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
          title="Fechar chat"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex items-start space-x-2",
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            {message.sender === 'bot' && (
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-gray-600" />
              </div>
            )}
            <div
              className={cn(
                "max-w-[80%] rounded-2xl",
                message.sender === 'user'
                  ? 'bg-primary text-primary-foreground p-3'
                  : 'bg-secondary border border-primary/20 p-3'
              )}
            >
              <div className="text-sm">{message.text}</div>
              <div className={cn(
                "text-xs mt-1",
                message.sender === 'user' ? 'text-primary-foreground/70' : 'text-gray-500'
              )}>
                {formatTime(message.timestamp)}
              </div>
            </div>
            {message.sender === 'user' && (
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-primary-foreground" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-gray-600" />
            </div>
            <div className="bg-secondary border border-primary/20 p-3 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>
        )}

        {/* Quick Questions */}
        {messages.length === 1 && !isTyping && (
          <div className="space-y-2">
            <div className="text-xs text-gray-500 text-center">Perguntas rápidas:</div>
            <div className="grid gap-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSendMessage(question)}
                  className="text-xs h-auto py-2 px-3 justify-start hover:bg-primary/5 hover:border-primary/30"
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* WhatsApp Button */}
      <div className="p-4 border-t border-gray-200">
        <Button
          onClick={openWhatsApp}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Continue no WhatsApp</span>
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Digite sua mensagem..."
            disabled={isTyping}
            className="flex-1"
          />
          <Button
            onClick={() => handleSendMessage()}
            disabled={!inputValue.trim() || isTyping}
            size="sm"
            className="px-3"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};