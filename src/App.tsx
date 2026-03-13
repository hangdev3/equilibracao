import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, ArrowRight, ShieldCheck, Camera, 
  Moon, Sun, Bath, ClipboardCheck, 
  MessageCircle, Phone, AlertCircle, X, Send,
  Instagram, MapPin, CheckCircle2,
  ChevronLeft, ChevronRight
} from "lucide-react";

const assets = {
  logo: "https://s.ntc.qzz.io/s/equilibracao-logo",
  hero: "https://www.equilibracao.com.br/wp-content/uploads/2024/02/IMG-20240117-WA0060-1-768x576.jpg",
  science: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop",
  gallery: [
    "https://www.equilibracao.com.br/wp-content/uploads/2024/02/IMG-20240116-WA0050-1-768x1365.jpg",
    "https://www.equilibracao.com.br/wp-content/uploads/2024/02/IMG-20240115-WA0167-1-768x1024.jpg",
    "https://www.equilibracao.com.br/wp-content/uploads/2024/02/IMG-20230920-WA0073-1.jpg",
    "https://www.equilibracao.com.br/wp-content/uploads/2024/02/IMG-20230921-WA0163-1-768x1365.jpg",
    "https://www.equilibracao.com.br/wp-content/uploads/2024/02/IMG-20231226-WA0091-1-768x1365.jpg",
    "https://www.equilibracao.com.br/wp-content/uploads/2024/02/IMG-20231229-WA0117-1-768x1365.jpg",
  ],
  serviceDaycare: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop",
  serviceHospedagem: "https://www.equilibracao.com.br/wp-content/uploads/2024/02/IMG-20240115-WA0167-1-768x1024.jpg",
  serviceAdestramento: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1976&auto=format&fit=crop",
  whatsapp: "https://api.whatsapp.com/send?phone=5511954576105&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20promo%C3%A7%C3%A3o%F0%9F%91%87Avalia%C3%A7%C3%A3o%20%2B%201%20dia%20de%20Divers%C3%A3o%20Gr%C3%A1tis!"
};

const LordIcon = "lord-icon" as any;

const testimonials = [
  { text: "Lugar impecável. Deixo meu cão com a tranquilidade de quem sabe que ele está sendo educado e não apenas guardado.", name: "Ricardo M.", role: "Tutor do Max" },
  { text: "A melhora no comportamento dele em casa após começar o daycare foi nítida. O suporte técnico deles é de outro nível.", name: "Fernanda S.", role: "Tutora da Mel" },
  { text: "Acompanho tudo pelas câmeras e pelos vídeos. A transparência da equipe me faz ser cliente fiel há 2 anos.", name: "Juliana P.", role: "Tutora do Bob" },
  { text: "Ambiente limpo, organizado e pensado no bem-estar animal. Nada daquele cheiro forte de outros hotéis.", name: "Marcos T.", role: "Tutor do Zeus" },
  { text: "Equipe extremamente preparada. Entendem de comportamento canino como ninguém que já conheci em SP.", name: "Patrícia L.", role: "Tutora da Gaia" },
  { text: "Meu cachorro era antissocial e agressivo com outros. Hoje ele frequenta o daycare e é outro bicho. Gratidão total.", name: "André C.", role: "Tutor do Rock" },
  { text: "Os quartos são ótimos e o espaço externo é gigante. Ele volta pra casa cansado e feliz.", name: "Camila R.", role: "Tutora da Luna" },
  { text: "O processo de check-in e a triagem inicial mostram o quanto eles levam a sério a saúde de todos os cães lá dentro.", name: "Bruno V.", role: "Tutor do Fred" },
  { text: "Não é o mais barato, mas é o melhor. O valor que entregam em paz de espírito para o tutor não tem preço.", name: "Sofia G.", role: "Tutora da Maya" },
  { text: "Amo os vídeos diários! Ver as atividades que eles fazem me deixa muito segura.", name: "Helena F.", role: "Tutora do Pingo" }
];

const services = [
  {
    id: "daycare",
    title: "Daycare Educativo",
    icon: <Sun size={32} />,
    image: assets.serviceDaycare,
    desc: "Foco em atividades que estimulam o cognitivo e socialização estruturada.",
    process: "Enriquecimento Ambiental"
  },
  {
    id: "hospedagem",
    title: "Hospedagem Premium",
    icon: <Moon size={32} />,
    image: assets.serviceHospedagem,
    desc: "Monitoramento noturno, quartos privativos e relatórios detalhados de bem-estar.",
    process: "Monitoramento 24h"
  },
  {
    id: "adestramento",
    title: "Adestramento & Consultoria",
    icon: <ClipboardCheck size={32} />,
    image: assets.serviceAdestramento,
    desc: "O braço de autoridade da marca. Modificação comportamental com especialistas.",
    process: "Metodologia Científica"
  }
];

// --- COMPONENTES AUXILIARES ---

const TestimonialsColumn = ({ testimonials, duration, className }: { testimonials: any[], duration: number, className?: string }) => (
  <div className={`flex flex-col gap-6 ${className}`}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
        <div key={i} className="p-8 rounded-[24px] bg-primary border border-white/5 shadow-lg max-w-xs w-full">
          <div className="flex gap-1 text-accent mb-4">
            {[...Array(5)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
          </div>
          <p className="text-[14px] leading-relaxed text-white/90 italic">"{t.text}"</p>
          <div className="flex items-center gap-3 mt-6">
            <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs">
              {t.name.split(' ')[0][0]}
            </div>
            <div>
              <div className="font-bold text-[14px]">{t.name}</div>
              <div className="text-[12px] text-white/50">{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[300px] bg-white rounded-[24px] shadow-2xl overflow-hidden text-gray-800"
          >
            <div className="bg-primary p-4 text-white flex justify-between items-center">
              <div>
                <h4 className="font-bold">Concierge Digital</h4>
                <p className="text-[12px] opacity-80">Como podemos ajudar hoje?</p>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Fechar"><X size={20} /></button>
            </div>
            <div className="p-4 space-y-3">
              <a 
                href={assets.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors text-left"
              >
                <div className="bg-accent/10 p-2 rounded-lg"><ClipboardCheck size={20} className="text-accent" /></div>
                <div className="text-[14px] font-medium">Solicitar Avaliação</div>
              </a>
              <a 
                href={assets.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors text-left"
              >
                <div className="bg-accent/10 p-2 rounded-lg"><MessageCircle size={20} className="text-accent" /></div>
                <div className="text-[14px] font-medium">Área do Cliente (Câmeras)</div>
              </a>
              <a 
                href={assets.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 p-3 bg-red-50 rounded-xl hover:bg-red-100 transition-colors text-left"
              >
                <div className="bg-red-500 p-2 rounded-lg"><AlertCircle size={20} className="text-white" /></div>
                <div className="text-[14px] font-medium text-red-600">Emergência</div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle size={32} />
      </button>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  const [formStep, setFormStep] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const { scrollLeft, clientWidth } = galleryRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      galleryRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // Form State
  const [formData, setFormData] = useState({
    petName: "",
    breed: "",
    behavior: "Sociável e calmo",
  });
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.petName.trim()) newErrors.petName = "Nome do pet é obrigatório";
    if (!formData.breed.trim()) newErrors.breed = "Raça é obrigatória";
    if (!file) newErrors.file = "Carteira de vacinas é obrigatória";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormStep(2);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setErrors(prev => ({ ...prev, file: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-primary text-surface font-sans selection:bg-accent selection:text-white overflow-x-hidden">
      
      {/* HEADER */}
      <header className={`fixed top-0 w-full z-[90] transition-all duration-300 px-6 ${isScrolled ? 'py-4 bg-primary/95 backdrop-blur-md shadow-xl' : 'py-8 bg-transparent'}`}>
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center p-1 shadow-lg overflow-hidden">
               <LordIcon
                  src="https://cdn.lordicon.com/zybujcxz.json"
                  trigger="in"
                  delay="1500"
                  state="in-reveal"
                  colors="primary:#0f172a,secondary:#ea580c"
                  style={{ width: '40px', height: '40px' }}
               />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] font-bold tracking-widest uppercase leading-none">EquilibraCão</span>
              <span className="text-[9px] uppercase tracking-[0.2em] opacity-50">Comportamentalismo Premium</span>
            </div>
          </div>
          <nav className="hidden lg:flex gap-10 text-[12px] tracking-widest uppercase font-semibold text-slate-400">
            <a href="#metodologia" className="hover:text-accent transition-colors">A Metodologia</a>
            <a href="#servicos" className="hover:text-accent transition-colors">Serviços</a>
            <a href="#unidades" className="hover:text-accent transition-colors">Galeria</a>
            <a href={assets.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-accent text-white px-6 py-2 rounded-full hover:bg-accent-hover transition-all">Solicitar Avaliação</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={assets.hero} 
            alt="EquilibraCão Hero" 
            className="w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary" />
        </div>

        <div className="container relative z-10 max-w-[1200px] px-6 mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-4 py-2 rounded-full text-[11px] uppercase tracking-widest font-bold backdrop-blur-sm text-accent">
              <ShieldCheck size={16} /> Onde o equilíbrio encontra o bem-estar
            </div>
            <h1 className="text-[48px] lg:text-[84px] font-bold leading-[1] tracking-tight">
              Mais que um hotel, uma <span className="text-accent italic font-serif">extensão da educação</span> do seu cão.
            </h1>
            <p className="text-[18px] lg:text-[20px] text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Foco no comportamentalismo canino para transformar a vida do seu pet através de socialização estruturada e enriquecimento ambiental.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <a href={assets.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-accent text-white px-10 py-5 rounded-full font-bold text-[16px] hover:bg-accent-hover transition-all shadow-xl hover:shadow-accent/40 flex items-center justify-center gap-2 group">
                Solicitar Avaliação Comportamental <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#metodologia" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold text-[16px] hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                Conhecer Metodologia
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* METODOLOGIA SECTION */}
      <section id="metodologia" className="py-32 bg-primary relative overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block text-accent font-bold uppercase tracking-[0.3em] text-[11px]">A Ciência por trás do Equilíbrio</div>
            <h2 className="text-[42px] lg:text-[56px] font-bold leading-tight italic font-serif">Autoridade Comportamental.</h2>
            <p className="text-slate-300 text-[18px] leading-relaxed">
              Não somos apenas um local de recreação. Nossa metodologia é baseada em três pilares fundamentais para o desenvolvimento saudável do seu cão:
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Enriquecimento Ambiental", desc: "Atividades sensoriais, cognitivas e físicas que reduzem o tédio e a ansiedade." },
                { title: "Modificação Comportamental", desc: "Suporte técnico para lidar com medos, reatividade e ansiedade de separação." },
                { title: "Socialização Estruturada", desc: "Interações monitoradas por especialistas que entendem a linguagem corporal canina." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="h-12 w-12 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0 text-accent font-bold">0{i+1}</div>
                  <div>
                    <h4 className="font-bold mb-1 text-white">{item.title}</h4>
                    <p className="text-slate-400 text-[14px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="relative">
            <img src={assets.science} alt="Metodologia" className="rounded-[48px] shadow-2xl border border-white/10" referrerPolicy="no-referrer" />
            <div className="absolute -bottom-10 -left-10 bg-accent p-8 rounded-[32px] shadow-2xl hidden lg:block max-w-xs">
              <p className="text-white font-bold text-[20px] leading-tight mb-2">Redução de 85%</p>
              <p className="text-white/80 text-[14px]">Nos níveis de ansiedade e estresse relatados pelos tutores após 3 meses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO SERVIÇOS */}
      <section id="servicos" className="py-32 bg-slate-900">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-[42px] font-bold italic font-serif">Ecossistema de Serviços</h2>
            <p className="text-slate-400 max-w-[600px] mx-auto text-[17px]">Cuidado individualizado focado no desenvolvimento comportamental.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map(s => (
              <div key={s.id} className="bg-primary rounded-[40px] border border-white/5 overflow-hidden hover:border-accent/50 transition-all group shadow-2xl">
                <div 
                  className="h-64 overflow-hidden relative cursor-zoom-in"
                  onClick={() => setSelectedImage(s.image)}
                >
                   <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                   <div className="absolute top-6 left-6 bg-accent p-3 rounded-2xl text-white shadow-lg">
                      {s.icon}
                   </div>
                </div>
                <div className="p-10">
                  <h3 className="text-[24px] font-bold mb-4">{s.title}</h3>
                  <p className="text-slate-400 text-[15px] mb-8 leading-relaxed">{s.desc}</p>
                  <div className="pt-6 border-t border-white/5 text-[12px] font-bold text-accent flex items-center gap-2 uppercase tracking-widest">
                    <CheckCircle2 size={16} /> {s.process}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA SECTION */}
      <section id="unidades" className="py-32 bg-primary">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <div className="inline-block text-accent font-bold uppercase tracking-[0.3em] text-[11px]">Experiência 360º</div>
              <h2 className="text-[42px] font-bold italic font-serif">Nossa Galeria.</h2>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-slate-400 max-w-md text-[17px] hidden lg:block">Momentos de alegria, socialização e cuidado em nossas instalações premium.</p>
              <div className="flex gap-2">
                <button 
                  onClick={() => scrollGallery('left')}
                  className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all cursor-pointer"
                  aria-label="Anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={() => scrollGallery('right')}
                  className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all cursor-pointer"
                  aria-label="Próximo"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          <div 
            ref={galleryRef}
            className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {assets.gallery.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="min-w-[300px] lg:min-w-[400px] h-[500px] rounded-[48px] overflow-hidden snap-center relative group cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Galeria ${i+1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-8 left-8 transform group-hover:translate-y-[-10px] transition-transform">
                  <p className="text-white font-bold text-[20px]">EquilibraCão Momento {i+1}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRÉ-RESERVA */}
      <section id="reserva" className="py-32 bg-slate-900">
        <div className="container max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
             <div className="inline-block text-accent font-bold uppercase tracking-[0.3em] text-[11px] mb-4">Avaliação Comportamental</div>
            <h2 className="text-[42px] font-bold leading-tight mb-8 italic font-serif text-white">Segurança em primeiro lugar.</h2>
            <p className="text-slate-400 text-[17px] mb-12 leading-relaxed">
              Diferente de hotéis comuns, nós filtramos os hóspedes para garantir que o seu pet conviva apenas com cães saudáveis e sociáveis.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="h-12 w-12 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0"><ShieldCheck className="text-accent" /></div>
                <div>
                   <h4 className="font-bold mb-1 text-white">Análise de Perfil</h4>
                  <p className="text-slate-400 text-[14px]">Avaliamos o comportamento para garantir harmonia no grupo.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="h-12 w-12 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0"><Camera className="text-accent" /></div>
                <div>
                  <h4 className="font-bold mb-1 text-white">Transparência Total</h4>
                  <p className="text-slate-400 text-[14px]">Receba notícias diárias por vídeo direto no seu WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-[48px] shadow-2xl text-gray-900 relative">
            {formStep === 1 ? (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Nome do Pet</label>
                    <input 
                      type="text" 
                      className={`w-full bg-slate-50 border ${errors.petName ? 'border-red-500' : 'border-slate-100'} p-4 rounded-2xl focus:border-accent outline-none transition-all`} 
                      placeholder="Ex: Thor" 
                      value={formData.petName}
                      onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                    />
                    {errors.petName && <p className="text-red-500 text-[10px] font-bold">{errors.petName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Raça</label>
                    <input 
                      type="text" 
                      className={`w-full bg-slate-50 border ${errors.breed ? 'border-red-500' : 'border-slate-100'} p-4 rounded-2xl focus:border-accent outline-none transition-all`} 
                      placeholder="Ex: Golden" 
                      value={formData.breed}
                      onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                    />
                    {errors.breed && <p className="text-red-500 text-[10px] font-bold">{errors.breed}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Comportamento</label>
                  <select 
                    className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl outline-none appearance-none cursor-pointer"
                    value={formData.behavior}
                    onChange={(e) => setFormData({ ...formData, behavior: e.target.value })}
                  >
                    <option>Sociável e calmo</option>
                    <option>Ativo / Muita energia</option>
                    <option>Tímido / Ansioso</option>
                    <option>Reativo (Vaga Individual)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Carteira de Vacinas</label>
                  <label className={`border-2 border-dashed ${errors.file ? 'border-red-500' : 'border-accent/20'} p-6 rounded-[28px] flex flex-col items-center gap-3 cursor-pointer hover:bg-slate-50 transition-colors group relative`}>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                    />
                    <div className="bg-accent/10 p-3 rounded-full group-hover:scale-110 transition-transform"><Camera size={20} className="text-accent" /></div>
                    <span className="text-[13px] text-gray-400 font-bold">
                      {file ? file.name : "Anexar foto ou PDF"}
                    </span>
                  </label>
                  {errors.file && <p className="text-red-500 text-[10px] font-bold text-center">{errors.file}</p>}
                </div>
                <button type="submit" className="w-full bg-accent text-white py-5 rounded-[20px] font-bold text-[17px] shadow-xl flex items-center justify-center gap-3 hover:bg-accent-hover transition-all transform hover:-translate-y-1 cursor-pointer">
                  Solicitar Avaliação <Send size={20} />
                </button>
                <p className="text-[11px] text-center text-gray-400">Analisaremos os dados em até 24h.</p>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 space-y-6">
                <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-[28px] font-bold text-primary">Pedido Recebido!</h3>
                <p className="text-gray-500 text-[17px]">Nossa equipe entrará em contato em breve para confirmar os detalhes.</p>
                <button onClick={() => setFormStep(1)} className="text-accent font-bold underline hover:text-accent-hover cursor-pointer">Fazer nova solicitação</button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section id="depoimentos" className="py-32 bg-primary overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-24">
             <div className="inline-flex items-center gap-2 text-accent mb-6 font-bold tracking-[0.4em] uppercase text-[11px]">
              <Star size={16} fill="currentColor" /> 5.0 no Google Business
            </div>
            <h2 className="text-[42px] font-bold italic font-serif leading-tight">Voz do Cliente.</h2>
          </div>

          <div className="flex justify-center gap-8 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] h-[650px] overflow-hidden">
            <TestimonialsColumn testimonials={testimonials.slice(0, 5)} duration={35} className="hidden sm:flex" />
            <TestimonialsColumn testimonials={testimonials.slice(5, 10)} duration={40} className="flex" />
            <TestimonialsColumn testimonials={testimonials.slice(0, 5)} duration={38} className="hidden lg:flex" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary pt-24 pb-12 border-t border-white/5">
        <div className="container max-w-[1200px] mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
               <div className="h-10 w-10 bg-white rounded flex items-center justify-center p-1">
                 <LordIcon
                    src="https://cdn.lordicon.com/zybujcxz.json"
                    trigger="in"
                    delay="1500"
                    state="in-reveal"
                    colors="primary:#0f172a,secondary:#ea580c"
                    style={{ width: '32px', height: '32px' }}
                 />
               </div>
               <span className="text-[16px] font-bold tracking-widest uppercase">EquilibraCão</span>
            </div>
            <p className="text-slate-400 text-[14px] leading-relaxed">
              Onde o equilíbrio encontra o bem-estar. Mais que um hotel, uma extensão da educação do seu cão.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors text-white"><Instagram size={18} /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors text-white"><Phone size={18} /></a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h5 className="font-bold uppercase text-[11px] tracking-[0.2em] text-accent">Navegação</h5>
            <ul className="space-y-4 text-[13px] text-slate-400">
              <li><a href="#metodologia" className="hover:text-white transition-colors">A Metodologia</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#unidades" className="hover:text-white transition-colors">Galeria</a></li>
              <li><a href={assets.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Área do Cliente</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold uppercase text-[11px] tracking-[0.2em] text-accent">Contato</h5>
            <div className="space-y-4 text-[13px] text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0" />
                <span>
                  R. Emerina, 55 - Cidade Vargas<br/>
                  São Paulo - SP, 04319-080<br/>
                  <span className="text-[11px] opacity-60">9928+WF Jabaquara</span>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span>(11) 95457-6105</span>
              </div>
              <div className="flex items-start gap-3">
                <Sun size={18} className="text-accent shrink-0" />
                <span>Aberto · Fecha 19:00</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold uppercase text-[11px] tracking-[0.2em] text-accent">Qualidade</h5>
            <div className="bg-accent/10 p-5 rounded-[24px] border border-accent/20 space-y-4">
               <div>
                 <ShieldCheck size={28} className="text-accent mb-3" />
                 <p className="text-[12px] font-bold text-white uppercase tracking-wider mb-1">Certificação</p>
                 <p className="text-[11px] text-slate-400">Monitoramento comportamental e controle rigoroso de higiene.</p>
               </div>
               <div className="pt-4 border-t border-accent/10 flex items-center gap-2">
                 <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                 <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Empresa de Empreendedoras</p>
               </div>
            </div>
          </div>
        </div>
        
        <div className="container max-w-[1200px] mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[11px] text-white/20 uppercase tracking-[0.3em]">
            © 2026 EquilibraCão • Todos os direitos reservados
          </p>
        </div>
      </footer>

      <FloatingWhatsApp />

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-6 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 m-4 text-white hover:text-accent transition-colors z-10"
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage} 
                alt="Visualização ampliada" 
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
