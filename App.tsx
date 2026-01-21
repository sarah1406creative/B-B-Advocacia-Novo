import React, { useState, useEffect } from 'react';
import {
  Phone,
  CheckCircle2,
  Scale,
  Users,
  HeartHandshake,
  FileText,
  Gavel,
  Baby,
  Calculator,
  ChevronDown,
  ChevronUp,
  Star,
  MessageCircle,
  X,
  ShieldCheck,
  Lock,
  Sparkles,
  Code2,
  ArrowRight,
  Heart,
  Shield
} from 'lucide-react';
import { ServiceItem, FaqItem, Testimonial } from './types';

// --- Components defined internally for portability in this specific context ---

// 1. Reusable UI Components
const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}> = ({ children, variant = 'primary', className = '', onClick, fullWidth }) => {
  const baseStyles = "px-6 py-3 rounded-md font-sans font-bold transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm";
  const variants = {
    primary: "bg-brand-gold text-brand-dark hover:bg-yellow-500",
    outline: "border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white",
    white: "bg-white text-brand-dark hover:bg-gray-100"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="font-serif text-2xl font-bold text-brand-dark">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        <div className="p-8 overflow-y-auto font-sans text-gray-600 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

// 2. Section Components

const Header = () => {
  return (
    <header className="w-full bg-white z-50 shadow-sm border-b border-gray-100 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-24 flex items-center justify-center lg:justify-between">
        <div className="flex items-center">
          <img
            src="Logotipo-Barros-e-Barros-768x185.webp"
            alt="Barros e Barros Sociedade de Advogados"
            className="h-10 md:h-14 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="font-serif text-xl md:text-2xl text-brand-dark font-bold">Barros & Barros</span>');
            }}
          />
        </div>
      </div>
    </header>
  );
};

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section id="inicio" className="relative pt-6 md:pt-16 pb-20 md:pb-32 bg-brand-dark overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-light/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Abstract Grid Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 rounded-full mb-8 transform hover:scale-105 transition-transform cursor-default">
              <Sparkles size={14} className="text-brand-gold outline-none" />
              <span className="text-brand-gold text-[10px] font-extrabold uppercase tracking-[0.2em]">Atendimento de Elite</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white leading-[1.1] mb-8">
              Separação jurídica <span className="text-brand-gold italic block mt-2">segura e humanizada.</span>
            </h1>

            <p className="font-sans text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Conduzimos seu processo com <span className="text-white font-medium">discrição absoluta</span> e foco no menor desgaste emocional possível para sua família.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start mb-12">
              <Button onClick={onCtaClick} variant="white" className="w-full sm:w-auto shadow-2xl shadow-brand-gold/10 px-12 py-5 text-lg group overflow-hidden relative">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Falar com Advogado <MessageCircle size={18} className="text-brand-gold" />
                </span>
                <div className="absolute inset-0 bg-gray-50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 border-t border-white/5 pt-8">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-gold/30 transition-colors">
                  <ShieldCheck size={20} className="text-brand-gold/70 group-hover:text-brand-gold" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Segurança</p>
                  <p className="text-sm text-gray-300 font-medium">Sigilo Total</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-gold/30 transition-colors">
                  <Users size={20} className="text-brand-gold/70 group-hover:text-brand-gold" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Foco</p>
                  <p className="text-sm text-gray-300 font-medium">Humanizado</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-gold/30 transition-colors">
                  <Calculator size={20} className="text-brand-gold/70 group-hover:text-brand-gold" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-0.5">Agilidade</p>
                  <p className="text-sm text-gray-300 font-medium">Região Metropolitana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Card */}
          <div className="flex-1 relative w-full max-w-sm lg:max-w-md order-1 lg:order-2">
            {/* Main Spotlight Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-gold/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] border border-white/10 bg-gradient-to-b from-brand-light/10 to-transparent group">
              <img
                src="matheus.webp"
                alt="Advogado Matheus Barros"
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />

              {/* Glassmorphism Name Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-brand-dark/40 backdrop-blur-xl border border-white/10 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-serif text-2xl text-white font-bold mb-1 tracking-tight">Dr. Matheus Barros</p>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-[1px] bg-brand-gold/50"></div>
                  <p className="font-sans text-brand-gold text-xs font-extrabold uppercase tracking-widest">OAB/RS 115.392</p>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-brand-gold/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-gold/2 opacity-50 blur-2xl rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

const EmpathySection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center text-brand-gold shadow-xl border border-brand-gold/20">
            <MessageCircle size={32} />
          </div>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-8 font-semibold tracking-tight">
          Separação é difícil e você não precisa enfrentar isso <span className="text-brand-gold italic">sozinho.</span>
        </h2>
        <div className="w-20 h-1 bg-brand-gold/30 mx-auto mb-10"></div>
        <p className="font-sans text-gray-500 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          Sabemos que este é um momento de incertezas. Nossa missão é trazer clareza e segurança jurídica, conduzindo cada passo com o máximo sigilo e respeito à sua história.
        </p>
        <Button onClick={onCtaClick} variant="primary" className="px-12 py-5 text-lg shadow-xl shadow-brand-gold/20">
          Quero uma Orientação Especializada
        </Button>
      </div>
    </section>
  );
};

const ExpertiseSection = () => {
  const services: (ServiceItem & { icon: React.ReactNode })[] = [
    {
      title: "Divórcio Consensual ou Litigioso",
      description: "Atuamos tanto em casos amigáveis quanto em situações de conflito, garantindo que seus direitos patrimoniais e familiares sejam defendidos com estratégia e postura ética.",
      icon: <HeartHandshake size={32} />
    },
    {
      title: "Dissolução de União Estável",
      description: "Regularizamos o fim da união estável com análise detalhada de bens e direitos, conforme o regime aplicável, trazendo segurança jurídica para sua nova etapa.",
      icon: <FileText size={32} />
    },
    {
      title: "Guarda e Convivência",
      description: "Orientação focada no bem-estar dos filhos, buscando soluções equilibradas e juridicamente corretas para a organização do cotidiano familiar.",
      icon: <Baby size={32} />
    },
    {
      title: "Pensão Alimentícia",
      description: "Cálculo, revisão ou execução de pensão, assegurando que as necessidades de quem recebe e as possibilidades de quem paga sejam respeitadas de forma justa.",
      icon: <Calculator size={32} />
    },
    {
      title: "Partilha de Bens",
      description: "Estudo minucioso do patrimônio para uma divisão correta e transparente, preservando seus direitos e evitando prejuízos desnecessários.",
      icon: <Scale size={32} />
    },
    {
      title: "Regularização Jurídica",
      description: "Para quem já está separado de fato e deseja formalizar a situação no papel, evitando problemas futuros e garantindo paz de espírito.",
      icon: <CheckCircle2 size={32} />
    }
  ];

  return (
    <section id="atuacao" className="py-20 md:py-28 bg-brand-dark text-white relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
            Nossa Atuação Especializada em <span className="text-brand-gold italic">Direito de Família</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Oferecemos suporte jurídico estratégico e humano para cada uma das suas necessidades, conduzindo processos com excelência técnica e discrição absoluta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-brand-gold/50 hover:bg-white/[0.08] transition-all duration-500 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-500 transform group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{service.description}</p>
              <button
                onClick={() => (window as any).Typebot?.toggle()}
                className="text-brand-gold font-sans font-bold text-xs uppercase tracking-[0.2em] border-b border-brand-gold/30 hover:border-brand-gold transition-all pb-1 group-hover:tracking-[0.25em]"
              >
                Falar com Especialista
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm italic">Cuidamos de toda a documentação, inclusive testamentos e planejamentos sucessórios.</p>
        </div>
      </div>
    </section>
  );
};

const SecondTeamSection = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section id="sobre" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="relative group">
              {/* Decorative background accent */}
              <div className="absolute -inset-2 bg-gray-100 rounded-2xl -z-10 transform -rotate-2"></div>

              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src="taiane-barros.webp"
                  alt="Dra. Taiane Barros"
                  className="relative w-full h-auto object-contain bg-gray-50"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent p-6 pt-20">
                  <p className="font-serif text-xl text-white font-bold">Dra. Taiane Barros</p>
                  <p className="font-sans text-brand-gold text-sm font-medium tracking-wide">OAB/RS 137.457</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="inline-block p-3 rounded-full bg-brand-dark text-brand-gold mb-6 shadow-md">
              <Scale size={28} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-brand-dark">
              Conte com orientação jurídica clara e acolhedora
            </h2>
            <div className="w-16 h-1 bg-brand-gold mb-8"></div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Agende uma consulta e entenda seus direitos, próximos passos e as melhores alternativas para o seu caso. Nossa equipe está preparada para oferecer o suporte necessário com empatia e técnica.
            </p>
            <Button onClick={onCtaClick} variant="primary" className="w-full md:w-auto shadow-lg shadow-brand-gold/30">
              Quero falar com um advogado agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

const ReviewSection = () => {
  const reviews = [
    {
      name: "Eduarda Aveiro",
      date: "01/08/2025",
      text: "Os melhores advogados da região, indico de olhos fechados ❤️",
      initial: "E",
      color: "bg-pink-600"
    },
    {
      name: "David Minervine",
      date: "01/08/2025",
      text: "Excelente dr. Muito prestativo e atencioso!",
      initial: "D",
      color: "bg-green-700"
    },
    {
      name: "Edson Grecilo",
      date: "01/08/2025",
      text: "Profissionais empenhados em solucionar os processos, organizados, dinâmicos, pontuais no atendimento, recomendo!!",
      initial: "E",
      color: "bg-blue-600"
    },
    {
      name: "andriane rosa",
      date: "31/07/2025",
      text: "Um escritório que vai além do profissionalismo, trata cada cliente com carinho, atenção e um cuidado que faz toda a diferença. É lindo ver tanta dedicação e respeito em cada detalhe. Dá pra confiar de olhos fechados e com o coração tranquilo!",
      initial: "A",
      color: "bg-purple-600"
    },
    {
      name: "jose carlos cardoso",
      date: "31/07/2025",
      text: "Estou muito satisfeito com o trabalho, a seriedade e honestidade que é fundamental em qualquer que seja a ação, desde a mais simples até a mais complexa principalmente a honestidade é o que todos os clientes esperam de um escritório de advocacia e tenho plena certeza que com vocês isso é primordial, parabéns e continuem assim esse é o caminho certo.",
      initial: "J",
      color: "bg-orange-600"
    },
    {
      name: "Flávia Oliveira da Costa",
      date: "31/07/2025",
      text: "Excelentes profissionais, indico muito! Resolveram meu problema e são atenciosos.",
      initial: "F",
      color: "bg-teal-600"
    },
    {
      name: "Sandra Cardoso",
      date: "28/07/2025",
      text: "Atendimento maravilhoso, super atenciosos mantém a gente informada do andamento do processo.",
      initial: "S",
      color: "bg-red-600"
    },
    {
      name: "Sérgio Alexandre",
      date: "21/07/2025",
      text: "Ótimo profissional...super indico",
      initial: "S",
      color: "bg-indigo-600"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-serif text-2xl md:text-3xl text-gray-800 mb-4 max-w-3xl mx-auto">
            A confiança dos nossos clientes é o reflexo do cuidado que dedicamos a cada caso.
          </p>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>

        {/* Horizontal Scrollable Container */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">
          {reviews.map((review, idx) => (
            <div key={idx} className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col snap-start hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {review.initial}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">{review.date}</p>
                  </div>
                </div>
                <div className="w-5 h-5 opacity-40">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={14} />)}
                <div className="ml-1 flex items-center justify-center w-3.5 h-3.5 bg-blue-500 rounded-full">
                  <span className="text-[10px] text-white font-bold">✓</span>
                </div>
              </div>
              <p className="text-gray-600 italic text-left text-sm leading-relaxed flex-grow">"{review.text}"</p>
              <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
                <span className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter hover:text-brand-gold transition-colors cursor-pointer">Consulte Mais informação</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

const FAQSection = () => {
  const faqs: FaqItem[] = [
    {
      question: "Quanto tempo demora uma separação?",
      answer: "Depende se há acordo entre as partes. Quando existe consenso, o processo costuma ser rápido e pode ser resolvido em cartório em poucos dias. Nos casos com divergências (litigioso), o tempo varia conforme a situação, o volume de processos no judiciário e as decisões que precisam ser tomadas pelo juiz."
    },
    {
      question: "Posso me separar mesmo se o outro não concordar?",
      answer: "Sim. Ninguém é obrigado a permanecer casado. Se uma das partes deseja o divórcio, ele acontecerá, mesmo que a outra parte não concorde ou se recuse a assinar. Nesses casos, entra-se com um divórcio litigioso."
    },
    {
      question: "Preciso estar junto do meu ex para fazer a separação?",
      answer: "Não. Hoje em dia, a maioria dos procedimentos pode ser feita sem que o casal precise se encontrar. Tanto no divórcio consensual quanto no litigioso, as partes podem ser representadas por seus advogados, evitando constrangimentos."
    },
    {
      question: "A separação pode ser feita online?",
      answer: "Sim! Atualmente, o divórcio extrajudicial (em cartório) pode ser feito de forma 100% digital, por videoconferência e assinatura digital. O divórcio judicial também tramita de forma eletrônica."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:border-brand-gold/30">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors"
              >
                <span className={`font-sans font-semibold text-lg ${openIndex === idx ? 'text-brand-dark' : 'text-gray-700'}`}>
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="text-brand-gold shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-400 shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-200 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onOpenPrivacy, onOpenTerms }: { onOpenPrivacy: () => void, onOpenTerms: () => void }) => {
  return (
    <footer className="bg-brand-dark text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
        <div className="mb-6">
          <img
            src="Logotipo-Barros-e-Barros-768x185.webp"
            alt="Barros e Barros"
            className="h-10 w-auto mb-2 brightness-0 invert opacity-90 mx-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="font-serif text-2xl text-white font-bold">Barros & Barros</span>');
            }}
          />
        </div>

        <p className="text-sm leading-relaxed max-w-md mb-8 text-gray-500">
          Escritório especializado em Direito de Família. Nosso compromisso é com a resolução ética e segura de conflitos familiares.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500 uppercase tracking-wider mb-8">
          <button onClick={onOpenPrivacy} className="hover:text-brand-gold transition-colors">
            Política de Privacidade
          </button>
          <button onClick={onOpenTerms} className="hover:text-brand-gold transition-colors">
            Termos de Uso
          </button>
        </div>

        <div className="pt-8 border-t border-gray-800 w-full text-xs text-gray-600 mb-8">
          <p>&copy; {new Date().getFullYear()} Barros e Barros Sociedade de Advogados. Todos os direitos reservados.</p>
        </div>

        {/* Creative Lane Badge */}
        <a href="https://creativelane.io/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-black/20 border border-white/5 hover:border-white/10 hover:bg-black/30 transition-all duration-300">
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-bold uppercase tracking-widest text-sky-500 mb-0.5">Desenvolvido por</span>
            <span className="font-sans font-bold text-white text-lg leading-none">Creative Lane</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-sky-500/30 group-hover:bg-sky-500/10 transition-all ml-2">
            <Code2 size={18} className="text-gray-400 group-hover:text-sky-400 transition-colors" />
          </div>
        </a>
      </div>
    </footer>
  );
};

// 3. Main Composition
function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) setShowScrollTop(true);
      else setShowScrollTop(false);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Initialize Typebot
  useEffect(() => {
    const typebotInitScript = document.createElement("script");
    typebotInitScript.type = "module";

    typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2/dist/web.js'
    
    // Explicitly set the window object to store the opened state
    window.isChatOpen = false;

    Typebot.initBubble({
      typebot: "bbadvlp",
      apiHost: "https://flow.creativelane.com.br",
      theme: {
        button: { 
          backgroundColor: "#25D366",
          customIconSrc: window.location.origin + "/bubble-icon.png",
          size: "large"
        },
        chatWindow: { backgroundColor: "#F8F8F8" },
      },
      onOpen: () => { window.isChatOpen = true; },
      onClose: () => { window.isChatOpen = false; }
    });
    
    window.Typebot = Typebot;
    `;
    document.body.append(typebotInitScript);

    return () => {
      // Best effort cleanup
      if (document.body.contains(typebotInitScript)) {
        document.body.removeChild(typebotInitScript);
      }
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openChat = () => {
    if ((window as any).Typebot) {
      (window as any).Typebot.toggle();
    } else {
      console.log('Typebot loading...');
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-gold selection:text-white">
      <Header onCtaClick={openChat} />
      <main>
        <Hero onCtaClick={openChat} />
        <EmpathySection onCtaClick={openChat} />
        <ExpertiseSection onCtaClick={openChat} />
        <SecondTeamSection onCtaClick={openChat} />
        <ReviewSection />
        <FAQSection />
      </main>
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} onOpenTerms={() => setIsTermsOpen(true)} />

      {/* Scroll Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-10 h-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-xl flex items-center justify-center z-40 transition-all opacity-80 hover:opacity-100"
        >
          <ChevronUp size={20} />
        </button>
      )}

      {/* Modals */}
      <Modal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} title="Política de Privacidade">
        <p>A privacidade dos visitantes do nosso site é muito importante para nós. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.</p>
        <h4 className="font-bold text-gray-800 mt-4">Coleta de Dados</h4>
        <p>Coletamos informações apenas quando fornecidas voluntariamente, como ao preencher formulários de contato ou iniciar um chat. Os dados podem incluir nome, e-mail e telefone.</p>
        <h4 className="font-bold text-gray-800 mt-4">Uso das Informações</h4>
        <p>As informações são utilizadas exclusivamente para entrar em contato com você e fornecer os serviços jurídicos solicitados. Não compartilhamos seus dados com terceiros para fins de marketing.</p>
        <h4 className="font-bold text-gray-800 mt-4">Cookies</h4>
        <p>Utilizamos cookies para melhorar a experiência de navegação. Você pode desativar os cookies nas configurações do seu navegador.</p>
        <h4 className="font-bold text-gray-800 mt-4">Segurança</h4>
        <p>Adotamos medidas de segurança para proteger suas informações contra acesso não autorizado.</p>
      </Modal>

      <Modal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} title="Termos de Uso">
        <p>Bem-vindo ao site da Barros e Barros Sociedade de Advogados. Ao acessar e usar este site, você concorda com os seguintes termos:</p>
        <h4 className="font-bold text-gray-800 mt-4">Uso do Conteúdo</h4>
        <p>Todo o conteúdo deste site é apenas para fins informativos e não constitui aconselhamento jurídico oficial. A leitura das informações aqui contidas não cria uma relação advogado-cliente.</p>
        <h4 className="font-bold text-gray-800 mt-4">Propriedade Intelectual</h4>
        <p>O conteúdo, design e logotipos deste site são propriedade do escritório e estão protegidos por leis de direitos autorais.</p>
        <h4 className="font-bold text-gray-800 mt-4">Isenção de Responsabilidade</h4>
        <p>Não nos responsabilizamos por ações tomadas com base apenas nas informações deste site. Consulte sempre um advogado para o seu caso específico.</p>
        <h4 className="font-bold text-gray-800 mt-4">Alterações</h4>
        <p>Reservamo-nos o direito de alterar estes termos a qualquer momento, sem aviso prévio.</p>
      </Modal>

    </div>
  );
}

export default App;