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
  Code2
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

const Header = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <header className="w-full bg-white z-50 shadow-sm border-b border-gray-100 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-24 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="logo.webp" 
            alt="Barros e Barros Sociedade de Advogados" 
            className="h-12 md:h-16 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="font-serif text-xl md:text-2xl text-brand-dark font-bold">BB Advogados</span>');
            }}
          />
        </div>

        {/* CTA Area */}
        <div className="flex items-center gap-4">
          <Button onClick={onCtaClick} variant="primary" className="py-2.5 px-5 text-sm shadow-brand-gold/20 shadow-lg">
            Falar com Advogado
          </Button>
        </div>
      </div>
    </header>
  );
};

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section id="inicio" className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-brand-dark overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light/10 transform skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-brand-gold/20 border border-brand-gold/30 rounded-full mb-6">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Atendimento Humanizado</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Separação e divórcio com orientação jurídica <span className="text-brand-gold italic">segura</span>, <span className="text-brand-gold italic">humanizada</span> e sigilosa.
            </h1>
            <p className="font-sans text-gray-300 text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A separação é um momento sensível e cheio de dúvidas. Com atendimento sigiloso, ajudamos você em questões como guarda, pensão, convivência e partilha de bens, conduzindo tudo com clareza e segurança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={onCtaClick} variant="white" className="shadow-lg shadow-brand-gold/10">
                Quero falar com um advogado agora
              </Button>
            </div>
            <p className="mt-4 text-xs text-gray-400 uppercase tracking-wider">Atendimento sigiloso e personalizado em toda Região Metropolitana</p>
          </div>

          {/* Image/Card */}
          <div className="flex-1 relative w-full max-w-md lg:max-w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700 min-h-[300px] bg-brand-light/20 group">
               {/* Using plain filename. Ensure matheus.webp is in the root folder */}
              <img 
                src="matheus.webp" 
                alt="Advogado Matheus Barros" 
                className="w-full h-auto object-contain"
                onError={(e) => {
                    // Fallback to a placeholder if local image is missing
                    e.currentTarget.src = "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
              {/* Name Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent p-6 pt-20">
                <p className="font-serif text-xl text-white font-bold">Dr. Matheus Barros</p>
                <p className="font-sans text-brand-gold text-sm font-medium tracking-wide">OAB/SP 123.456</p>
              </div>
            </div>
            {/* Decorative element behind image */}
            <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-brand-gold/30 rounded-2xl hidden md:block"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const EmpathySection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center text-brand-gold shadow-xl">
                <MessageCircle size={32} />
            </div>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-6 font-semibold">
          Separação é difícil e você não precisa enfrentar isso sem apoio
        </h2>
        <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
        <p className="font-sans text-gray-600 text-lg leading-relaxed mb-8">
          A separação costuma trazer dúvidas, medo e inseguranças. É comum ter várias dúvidas, 
          considerando as decisões importantes e preocupações com o patrimônio, os filhos e o futuro. 
          Quando tudo parece confuso, o jurídico pode pesar ainda mais. Estamos aqui para orientar 
          você com clareza, sigilo e segurança, explicando seus direitos e os próximos passos de forma 
          organizada e tranquila.
        </p>
      </div>
    </section>
  );
};

const AudienceSection = () => {
  const points = [
    {
      icon: <CheckCircle2 className="text-brand-gold" size={28} />,
      title: "Decisão de Divórcio",
      text: "Casais que desejam formalizar a separação, seja de forma consensual ou litigiosa, buscando o melhor caminho jurídico."
    },
    {
      icon: <Users className="text-brand-gold" size={28} />,
      title: "Filhos Menores",
      text: "Famílias que precisam organizar questões fundamentais como guarda, convivência e pensão alimentícia."
    },
    {
      icon: <Scale className="text-brand-gold" size={28} />,
      title: "Partilha de Bens",
      text: "Quem construiu patrimônio durante a união e necessita de uma divisão justa e correta perante a lei."
    },
    {
      icon: <FileText className="text-brand-gold" size={28} />,
      title: "União Estável",
      text: "Pessoas que precisam formalizar ou dissolver uma união estável, garantindo seus direitos retroativos."
    },
    {
      icon: <ShieldCheck className="text-brand-gold" size={28} />,
      title: "Situações Complexas",
      text: "Casos que envolvem conflitos acentuados e exigem uma atuação firme, estratégica e protetiva."
    },
    {
      icon: <Lock className="text-brand-gold" size={28} />,
      title: "Segurança Jurídica",
      text: "Quem já está separado de fato, mas precisa regularizar a situação no papel para evitar problemas futuros."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4">
            Para quem é o nosso atendimento?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
             Atuamos com foco total em Direito de Família, oferecendo soluções personalizadas para cada momento da sua vida.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-brand-gold/50 transition-all group duration-300">
              <div className="mb-4 bg-gray-50 w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-brand-dark transition-colors duration-300">
                {point.icon}
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-dark mb-3">{point.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services: (ServiceItem & { icon: React.ReactNode })[] = [
    {
      title: "Divórcio Consensual",
      description: "Quando há acordo entre as partes, cuidamos de toda a documentação e formalização para que o divórcio seja concluído com segurança jurídica, rapidez e o mínimo de desgaste.",
      icon: <HeartHandshake size={32} />
    },
    {
      title: "Divórcio Litigioso",
      description: "Quando não existe consenso, atuamos de forma estratégica para defender seus direitos patrimoniais e familiares, sempre com postura ética, firmeza e foco em resultados.",
      icon: <Gavel size={32} />
    },
    {
      title: "Dissolução de União Estável",
      description: "Regularizamos a união estável com análise de bens, direitos e responsabilidades, conforme o regime aplicável ao caso, garantindo segurança jurídica em cada etapa.",
      icon: <FileText size={32} />
    },
    {
      title: "Guarda e Convivência",
      description: "Orientação completa sobre guarda dos filhos e convivência, buscando soluções equilibradas e juridicamente corretas para a realidade da sua família.",
      icon: <Baby size={32} />
    },
    {
      title: "Partilha de Bens",
      description: "Estudo detalhado do patrimônio para uma divisão justa, de acordo com o regime de bens e as particularidades da relação, preservando seus direitos e sua tranquilidade.",
      icon: <Scale size={32} />
    },
    {
      title: "Pensão Alimentícia",
      description: "Cálculo, revisão ou execução de pensão alimentícia, garantindo que os direitos de quem recebe e os deveres de quem paga sejam cumpridos de forma adequada.",
      icon: <Calculator size={32} />
    }
  ];

  return (
    <section id="atuacao" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Como podemos ajudar na sua separação
          </h2>
          <p className="text-gray-300">
            Deixe a papelada e as complexidades legais conosco: cuidamos de cada detalhe com excelência técnica e discrição.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-brand-gold hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-2 flex-grow">{service.description}</p>
            </div>
          ))}
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
                                    src="taiane.webp" 
                                    alt="Dra. Taiane Barros" 
                                    className="relative w-full h-auto object-contain bg-gray-50"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                                    }}
                                />
                                {/* Name Overlay */}
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent p-6 pt-20">
                                    <p className="font-serif text-xl text-white font-bold">Dra. Taiane Barros</p>
                                    <p className="font-sans text-brand-gold text-sm font-medium tracking-wide">OAB/SP 123.456</p>
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
    return (
        <section className="py-24 bg-gray-50 relative">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <p className="font-serif text-2xl text-gray-800 mb-12">
                    A confiança dos nossos clientes é o reflexo do cuidado que dedicamos a cada caso.
                </p>

                <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 max-w-lg mx-auto relative">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-xl">D</div>
                            <div className="text-left">
                                <p className="font-bold text-gray-900">David Minervine</p>
                                <p className="text-xs text-gray-500">01/08/2025</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-8 h-8">
                            {/* Genuine Google G SVG */}
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex text-yellow-400 mb-6 gap-1">
                        <Star fill="currentColor" size={24}/>
                        <Star fill="currentColor" size={24}/>
                        <Star fill="currentColor" size={24}/>
                        <Star fill="currentColor" size={24}/>
                        <Star fill="currentColor" size={24}/>
                    </div>
                    <p className="text-gray-700 italic text-left text-lg leading-relaxed">"Excelente dr. Muito prestativo e atencioso! Resolveu meu caso com agilidade."</p>
                </div>
            </div>
        </section>
    )
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
            <div className="inline-block p-3 rounded-full bg-gray-100 text-brand-dark shadow-sm mb-4 border border-gray-200">
                <span className="font-serif font-bold text-xl">?</span>
            </div>
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
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
              src="logo.webp" 
              alt="Barros e Barros" 
              className="h-12 w-auto mb-2 brightness-0 invert opacity-90 mx-auto" 
              onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="font-serif text-2xl text-white font-bold">BB Advogados</span>');
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
    // Using base64 encoded WhatsApp SVG for custom icon
    // Using a path that has fill-rule="evenodd" to correctly cut out the phone from the white bubble
    const whatsappIcon = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC40MDMgNS41OTZBOS4wMDUgOS4wMDUgMCAwIDAgMTIuMDE2IDIuOTk4Yy00Ljk2MyAwLTguOTk5IDQuMDM4LTguOTk5IDguOTk5IDAgMS41ODguNDE0IDMuMTM1IDEuMjA1IDQuNDg3TDIuOTk4IDIxLjAwOGw1Ljc1Mi0xLjUxM2ExLjU2IDEuNTYgMCAwIDAgLjMxMy0uMTgyIDguOTggOC45OCAwIDAgMCAyLjk1My41MDFoLLjAwNGM0Ljk2MyAwIDguOTk5LTQuMDM4IDguOTk5LTguOTk5IDAtMi40MDUtLjkzNi00LjY2Ni0yLjYxNi02LjI5OUwxOC40MDMgNS41OTZ6TTEyLjAxNiAxOS41NjNoLS4wMDNhNy41MzMgNy41MzMgMCAwIDEtMy44NDEtMS4wNTRsLS4yNzUtLjE2My0yLjg1MS43NS43NjEtMi43NzktLjE3OS0uMjg1YTcuNTM4IDcuNTM4IDAgMCAxLTEuMTU3LTQuMDM0YzAtNC4xNTkgMy4zODMtNy41NDMgNy41NDYtNy41NDMgMi4wMTYgMCAzLjkxMS43ODYgNS4zMzYgMi4yMTJBMi41MTYgMi41MTYgMCAwIDEgMTIuMDE2IDE5LjU2M3ptNC4xMzQtNS42NTFjLS4yMjYtLjExMy0xLjM0LS42NjEtMS41NDgtLjczNy0uMjA4LS4wNzUtLjM1OS0uMTEzLS41MS4xMTMtLjE1MS4yMjctLjU4Ni43MzctLjcxOC44ODctLjEzMi4xNTItLjI2NS4xNy0uNDkxLjA1Ny0uMjI2LS4xMTMtLjk1Ny0uMzUzLTEuODIzLTEuMTI2LS42NzUtLjYwMy0xLjEzMS0xLjM0Ni0xLjI2My0xLjU3My0uMTMyLS4yMjYtLjAxNC0uMzQ4LjEtLjQ2MS4xMDEtLjEwMS4yMjctLjI2NC4zNC0uMzk2LjExMy0uMTMyLjE1MS0uMjI2LjIyNy0uMzc3LjA3NS0uMTUxLjAzOC0uMjgzLS4wMTktLjM5Ni0uMDU3LS4xMTMtLjUxLTEuMjI3LS42OTktMS42ODEtLjE4OC0uNDQ0LS4zNzYtLjM4NiYtLjUxLS4zOTItLjEyNS0uMDA4LS4yNzEtLjAwOS0uNDItLjAwOS0uMTUxIDAtLjM5Ni4wNTctLjYwNC4yODMtLjIwOC4yMjctLjc5My43NzQtLjc5MyAxLjg4OCAwIDEuMTE0LjgxMiAyLjE5Ljk4MyAyLjQxNi4xNy4yMjYgMS43NjEgMi42OTIgNC4zOTYgMy44My41NDkuMjM3Ljk3Ny4zNzkgMS4zMTMuNDg1LjU1Ny4xNzYgMS4wNjQuMTUxIDEuNDY2LjA5MS40NTMtLjA2NyAxLjM0LS41NDcgMS41MjktMS4wNzUuMTg5LS41MjguMTg5LS45ODEuMTMyLTEuMDc1LS4wNTctLjA5NC0uMjA4LS4xNTEtLjQzNC0uMjY0eiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=";

    typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js'

    Typebot.initBubble({
      typebot: "bbadvlp",
      apiHost: "https://flow.creativelane.com.br",
      theme: {
        button: { 
          backgroundColor: "#25D366", // WhatsApp Green
          customIconSrc: "${whatsappIcon}",
          size: "large"
        },
        chatWindow: { backgroundColor: "#F8F8F8" },
      },
    });
    
    // Helper to expose typebot to global scope for button clicks
    window.Typebot = Typebot;
    `;
    document.body.append(typebotInitScript);

    return () => {
      // Best effort cleanup
      if(document.body.contains(typebotInitScript)) {
          document.body.removeChild(typebotInitScript);
      }
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openChat = () => {
    if ((window as any).Typebot) {
      (window as any).Typebot.open();
    } else {
      console.log('Typebot loading...');
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-gold selection:text-white">
      <Header onCtaClick={openChat} />
      <main>
        <Hero onCtaClick={openChat} />
        <EmpathySection />
        <AudienceSection />
        <ServicesSection />
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