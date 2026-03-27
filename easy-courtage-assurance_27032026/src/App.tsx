import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Car, 
  Home, 
  HeartPulse, 
  Briefcase, 
  ChevronRight, 
  Star, 
  CheckCircle2,
  Users,
  Search,
  Puzzle,
  X
} from 'lucide-react';
import { motion } from 'motion/react';

function loadGoogleAnalytics() {
  const win = window as any;
  var s = document.createElement('script');
  s.src = 'https://www.googletagmanager.com/gtag/js?id='
          + win.GA_ID;
  s.async = true;
  document.head.appendChild(s);
  win.dataLayer = win.dataLayer || [];
  function gtag(..._args: any[]){win.dataLayer.push(arguments);}
  win.gtag = gtag;
  gtag('js', new Date());
  gtag('config', win.GA_ID, { anonymize_ip: true });
}

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('eca_cookie_consent');
    if (consent === 'accepted') {
      loadGoogleAnalytics();
    } else if (consent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('eca_cookie_consent', 'accepted');
    loadGoogleAnalytics();
    closeBanner();
  };

  const handleRefuse = () => {
    localStorage.setItem('eca_cookie_consent', 'refused');
    closeBanner();
  };

  const closeBanner = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 400);
  };

  if (!isVisible) return null;

  return (
    <div 
      id="cookie-banner"
      className={`fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t-[3px] border-[#003f7f] shadow-[0_-4px_24px_rgba(0,0,0,.10)] p-6 md:p-8 flex flex-col gap-3 ${isClosing ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
    >
      <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-3">
        {/* BLOC 1 : TITRE + TEXTE */}
        <div className="flex items-start gap-3">
          <span className="text-[1.3rem] flex-shrink-0">🍪</span>
          <div>
            <h4 className="text-[0.95rem] font-bold text-[#003f7f] mb-1">Cookies & confidentialité</h4>
            <p className="text-[0.82rem] text-[#5a6478] leading-relaxed">
              Nous utilisons des cookies fonctionnels nécessaires au formulaire de devis (Tally) et des cookies de mesure d'audience (Google Analytics) pour mieux comprendre l'utilisation du site. Aucun cookie publicitaire ou de tracking commercial n'est utilisé.
            </p>
          </div>
        </div>

        {/* BLOC 2 : RÉSEAUX SOCIAUX */}
        <div className="border-t border-[#f0f0f0] pt-3">
          <span className="text-[0.78rem] text-[#9ca3af] mb-2 block">Retrouvez-nous sur :</span>
          <div className="flex flex-wrap gap-2">
            <a href="https://www.facebook.com/people/Easy-Courtage-Assurance-Alfortville/100085078044431/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-[#003f7f] no-underline px-3 py-1 border border-[#e2e8f0] rounded-full transition-all hover:bg-[#f4f7fc] hover:border-[#003f7f]">
              <span className="text-[#1877F2]">f</span> Facebook
            </a>
            <a href="https://www.instagram.com/nelseasy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-[#003f7f] no-underline px-3 py-1 border border-[#e2e8f0] rounded-full transition-all hover:bg-[#f4f7fc] hover:border-[#003f7f]">
              <span className="text-[#E1306C]">◈</span> Instagram
            </a>
            <a href="https://www.linkedin.com/in/nelson-duarte-0047b5139/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-[#003f7f] no-underline px-3 py-1 border border-[#e2e8f0] rounded-full transition-all hover:bg-[#f4f7fc] hover:border-[#003f7f]">
              <span className="text-[#0A66C2]">in</span> LinkedIn
            </a>
            <a href="https://x.com/CourtageEasy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-[#003f7f] no-underline px-3 py-1 border border-[#e2e8f0] rounded-full transition-all hover:bg-[#f4f7fc] hover:border-[#003f7f]">
              <span className="text-black font-bold">X</span> X
            </a>
          </div>
        </div>

        {/* BLOC 3 : BOUTONS */}
        <div className="border-t border-[#f0f0f0] pt-3 flex flex-col sm:flex-row items-center gap-3 sm:justify-end">
          <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('link-confidentialite')?.click(); }} className="text-[0.78rem] text-[#9ca3af] underline sm:mr-auto">
            En savoir plus
          </a>
          <button onClick={handleRefuse} className="w-full sm:w-auto bg-transparent text-[#5a6478] border border-[#e2e8f0] rounded-lg px-6 py-2.5 font-medium text-[0.88rem] cursor-pointer transition-all hover:bg-[#f4f7fc] hover:text-[#003f7f]">
            Continuer sans accepter
          </button>
          <button onClick={handleAccept} className="w-full sm:w-auto bg-[#003f7f] text-white border-none rounded-lg px-6 py-2.5 font-semibold text-[0.88rem] cursor-pointer transition-all hover:bg-[#0059b3] order-first sm:order-last">
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-3">
          <img
            src="logo-puzzle.png"
            alt="Easy Courtage Assurance"
            style={{
              height: '38px',
              width: 'auto',
              objectFit: 'contain',
              display: 'inline-block',
              verticalAlign: 'middle',
              marginRight: '0.5rem',
            }}
          />
          <span className="text-xl font-extrabold tracking-tight flex flex-col sm:flex-row sm:items-baseline sm:gap-1">
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent italic text-2xl">Easy</span>
            <span className="text-primary text-lg">Courtage Assurance</span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-semibold text-navy hover:text-primary transition-colors">Nos Assurances</a>
          <a href="#pourquoi" className="text-sm font-semibold text-navy hover:text-primary transition-colors">Pourquoi Nous</a>
          <a href="#agences" className="text-sm font-semibold text-navy hover:text-primary transition-colors">Notre Agence</a>
          <a href="#contact" className="bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md hover:shadow-lg">
            Demander un devis
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative bg-primary overflow-hidden py-20 lg:py-32">
    <div className="absolute inset-0 opacity-10">
      <img 
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000" 
        alt="Background" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-8">
            <img 
              src="/logo.png" 
              alt="Easy Courtage Assurance Logo" 
              className="h-20 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
              Courtier Indépendant • Val-de-Marne (94)
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
            L'assurance <span className="bg-gradient-to-r from-primary-light to-white bg-clip-text text-transparent italic"> vraiment adaptée à vos besoins</span>, près de chez vous.
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            Nous comparons les meilleures offres du marché pour vous garantir une protection optimale au tarif le plus juste.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:-translate-y-1">
              Obtenir un devis 
            </a>
            <a href="tel:0143781431" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm">
              Nous appeler
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <div className="bg-white border-b border-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-center">
        {[
          { label: "Années d'expérience", value: "+15" },
          { label: "Partenaires assureurs", value: "20+" },
          { label: "Clients satisfaits", value: "97%" },
        ].map((stat, i) => (
          <div key={i} className="space-y-1 min-w-[150px]">
            <div className="text-3xl font-extrabold text-primary">{stat.value}</div>
            <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, image }: any) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
  >
    <div className="h-48 overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <Icon className="w-8 h-8 mb-2" />
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {description}
      </p>
      <a href="#contact" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
        En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  </motion.div>
);

const Services = () => (
  <section id="services" className="py-24 bg-soft">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Nos Solutions</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-navy">Toutes vos assurances au même endroit</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard 
          icon={Car}
          title="Assurance Auto"
          description="Responsabilité civile, tous risques ou tiers étendu. Solutions même pour malussés ou résiliés."
          image="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800"
        />
        <ServiceCard 
          icon={Home}
          title="Habitation"
          description="Protégez votre foyer et vos biens avec des garanties sur-mesure pour propriétaires et locataires."
          image="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800"
        />
        <ServiceCard 
          icon={HeartPulse}
          title="Santé & Prévoyance"
          description="Une mutuelle qui s'adapte à vos besoins réels et protège votre famille en toute circonstance."
          image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
        />
        <ServiceCard 
          icon={Briefcase}
          title="Professionnels"
          description="RC Pro, multirisque, décennale. Sécurisez votre activité avec l'expertise d'un courtier dédié."
          image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
        />
      </div>
    </div>
  </section>
);

const WhyUs = () => (
  <section id="pourquoi" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Pourquoi Nous ?</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-navy mb-8">L'expertise d'un courtier indépendant à votre service</h3>
          <div className="space-y-8">
            {[
              { 
                icon: Search, 
                title: "Comparaison Objective", 
                desc: "Nous ne sommes liés à aucune compagnie. Notre priorité, c'est votre intérêt." 
              },
              { 
                icon: Puzzle, 
                title: "Garanties Optimales", 
                desc: "Nous analysons les petites lignes pour vous éviter les mauvaises surprises." 
              },
              { 
                icon: Users, 
                title: "Accompagnement Local", 
                desc: "Une agence physique pour vous recevoir et vous conseiller de vive voix." 
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-soft rounded-xl flex items-center justify-center text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              alt="Team meeting" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xs hidden sm:block">
            <div className="flex items-center gap-1 text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-sm font-medium text-navy italic mb-4">
              "Un service irréprochable. Ils ont trouvé une solution là où d'autres avaient échoué."
            </p>
            <span className="text-xs font-bold text-gray-500">— Client Alfortville</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Agencies = ({ onOpenMaps }: { onOpenMaps: () => void }) => (
  <section id="agences" className="py-24 bg-navy text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Nos Agences</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold">Où nous trouver ?</h3>
      </div>
      <div className="grid md:grid-cols-1 max-w-2xl mx-auto gap-8">
        {[
          {
            city: "Alfortville",
            address: "47 rue Victor Hugo, 94140 Alfortville",
            phone: "01 43 78 14 31",
            email: "easy@easycourtage.fr",
          }
        ].map((agency, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="text-accent" /> {agency.city}
            </h4>
            <div className="space-y-4 text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span 
                  id="link-maps" 
                  className="cursor-pointer underline decoration-dotted hover:text-white transition-colors"
                  onClick={onOpenMaps}
                >
                  {agency.address} <span className="text-xs">↗</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href={`tel:${agency.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{agency.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href={`mailto:${agency.email}`} className="hover:text-white transition-colors">{agency.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                <span>Lun - Ven : 9h30 - 12h30 - 14h00 - 19h00 - Sam : 9h30 - 13h00 </span>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href={`mailto:${agency.email}`}
                className="inline-block w-full text-center bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-bold transition-all"
              >
                Contacter l'agence
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-soft">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="grid lg:grid-cols-2">
          <div className="p-12 lg:p-20 bg-primary text-white">
            <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-4">Contactez-nous</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-8">Prêt à faire des économies ?</h3>
            <p className="text-white/70 mb-12 leading-relaxed">
              Remplissez le formulaire ci-contre ou appelez-nous directement. Nos experts étudient votre dossier sous 24h.
            </p>
            <div className="space-y-6">
              {[
                "Analyse gratuite de vos contrats actuels",
                "Optimisation de vos garanties",
                "Accompagnement en cas de sinistre"
          
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-6 h-6" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 lg:p-12">
            {/* Tally Form Embed Placeholder or actual iframe */}
            <div className="h-full min-h-[500px] w-full bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
              <iframe
                data-tally-src="https://tally.so/embed/oby4E5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[500px]"
                title="Sollicitation Devis Assurance"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ onOpenLegal, onOpenAbout, onOpenPrivacy }: { onOpenLegal: () => void; onOpenAbout: () => void; onOpenPrivacy: () => void }) => (
  <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="/logo.png" 
              alt="Easy Courtage Assurance Logo" 
              className="h-12 w-auto object-contain"
              onError={(e) => e.currentTarget.style.display = 'none'}
            />
            <span className="text-2xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent italic">Easy</span>
              <span className="text-primary ml-1">Courtage Assurance</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            Votre partenaire de confiance pour toutes vos assurances dans le Val-de-Marne. 
            Indépendance, expertise et proximité au service de votre protection.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-navy mb-6">Assurances</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-primary transition-colors">Auto & Moto</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Habitation</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Santé & Prévoyance</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Professionnels</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-navy mb-6">Informations</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><button id="link-apropos" onClick={onOpenAbout} className="hover:text-primary transition-colors cursor-pointer">À propos</button></li>
            <li><button onClick={onOpenLegal} className="hover:text-primary transition-colors cursor-pointer">Mentions légales</button></li>
            <li><button id="link-confidentialite" onClick={onOpenPrivacy} className="hover:text-primary transition-colors cursor-pointer">Politique de confidentialité</button></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-100 flex flex-col md:row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
        <p>© 2026 Easy Courtage Assurance. Tous droits réservés.</p>
        <p>ORIAS n° 10058195 • Courtier en assurance</p>
      </div>
    </div>
  </footer>
);

const AboutModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-[6px]"
        onClick={onClose}
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        id="modal-apropos"
        className="relative w-full max-w-[780px] max-h-[78%] bg-white rounded-[12px] shadow-[0_24px_80px_rgba(0,0,0,.25)] flex flex-col overflow-hidden"
      >
        {/* Top Gradient Bar */}
        <div className="h-[6px] w-full bg-gradient-to-r from-[#003f7f] to-[#0059b3]" />
        
        {/* Header */}
        <div className="px-12 pt-12 pb-6 flex justify-between items-start">
          <div>
            <h2 className="text-[1.6rem] font-bold text-[#003f7f] mb-1">À propos</h2>
            <p className="text-[0.85rem] text-[#5a6478]">Easy Courtage Assurance — Alfortville, depuis 2010</p>
          </div>
          <button 
            onClick={onClose}
            className="w-9 h-9 border border-[#e2e8f0] rounded-full flex items-center justify-center text-[#5a6478] hover:bg-[#f4f7fc] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-12 pb-12 text-[#1a1a2e]">
          {/* Stats Block */}
          <div className="grid grid-cols-3 bg-[#f4f7fc] rounded-lg p-6 mb-8 border border-[#e2e8f0]">
            <div className="text-center border-r border-[#e2e8f0]">
              <div className="text-[1.8rem] font-extrabold text-[#003f7f]">2010</div>
              <div className="text-[0.75rem] text-[#5a6478] uppercase tracking-[1px]">Fondé à Alfortville</div>
            </div>
            <div className="text-center border-r border-[#e2e8f0]">
              <div className="text-[1.8rem] font-extrabold text-[#003f7f]">+15 ans</div>
              <div className="text-[0.75rem] text-[#5a6478] uppercase tracking-[1px]">d'expertise IARD</div>
            </div>
            <div className="text-center">
              <div className="text-[1.8rem] font-extrabold text-[#003f7f]">100%</div>
              <div className="text-[0.75rem] text-[#5a6478] uppercase tracking-[1px]">Courtier indépendant</div>
            </div>
          </div>

          <div className="space-y-5 text-[0.95rem] leading-[1.85] text-[#3a3a4a]">
            <p>
              <strong className="font-bold text-[#003f7f]">Depuis 2010, on fait un seul métier. Et on le fait bien.</strong>
            </p>
            <p>
              Il y a des cabinets qui proposent tout à tout le monde. Easy Courtage Assurance a fait le choix inverse : se concentrer sur ce qu'on maîtrise vraiment — l'assurance IARD, pour les professionnels et les particuliers du Val-de-Marne.
            </p>
            <p>
              Quinze ans à Alfortville. Quinze ans à éplucher des contrats, à négocier avec les compagnies, à défendre les dossiers de nos clients quand ça coince. Pas depuis un plateau téléphonique à l'autre bout de la France — depuis le 47 rue Victor Hugo, à deux pas de chez vous.
            </p>
            <p>
              <strong className="font-bold text-[#003f7f]">Ce qu'on assure, on le connaît par cœur.</strong>
            </p>
            <p>
              L'artisan qui démarre son activité et ne sait pas quelles garanties sont vraiment indispensables. Le gérant de TPE dont le contrat multirisque ne couvre pas ce qu'il croit. L'entreprise qui se développe et dont les risques évoluent plus vite que sa protection. Le particulier malussé que les grands groupes ne veulent plus. On les connaît tous. On les accompagne tous.
            </p>
            <p>
              Courtier indépendant, nous ne sommes liés à aucune compagnie. Notre seule obligation : vous trouver le meilleur contrat au meilleur prix, parmi les offres de nos partenaires — Allianz, AXA, Generali, Thelem, CoveaRisk.
            </p>
            <p>
              <strong className="font-bold text-[#003f7f]">Ici, vous parlez à un expert. Pas à un algorithme.</strong>
            </p>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="bg-[#f4f7fc] border-t border-[#e2e8f0] px-12 py-4 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-[#003f7f] hover:bg-[#0059b3] text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
          >
            Fermer
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const PrivacyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-[6px]"
        onClick={onClose}
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        id="modal-confidentialite"
        className="relative w-full max-w-[780px] max-h-[78%] bg-white rounded-[12px] shadow-[0_24px_80px_rgba(0,0,0,.25)] flex flex-col overflow-hidden"
      >
        {/* Top Gradient Bar */}
        <div className="h-[6px] w-full bg-gradient-to-r from-[#003f7f] to-[#0059b3]" />
        
        {/* Header */}
        <div className="px-12 pt-12 pb-6 flex justify-between items-start">
          <div>
            <h2 className="text-[1.6rem] font-bold text-[#003f7f] mb-1">Politique de confidentialité</h2>
            <p className="text-[0.85rem] text-[#5a6478]">Easy Courtage Assurance — Données personnelles & RGPD</p>
          </div>
          <button 
            onClick={onClose}
            className="w-9 h-9 border border-[#e2e8f0] rounded-full flex items-center justify-center text-[#5a6478] hover:bg-[#f4f7fc] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-12 pb-12 text-[#1a1a2e]">
          {/* Stats Block */}
          <div className="grid grid-cols-3 bg-[#f4f7fc] rounded-lg p-6 mb-8 border border-[#e2e8f0]">
            <div className="text-center border-r border-[#e2e8f0]">
              <div className="text-[1.8rem] font-extrabold text-[#003f7f]">RGPD</div>
              <div className="text-[0.75rem] text-[#5a6478] uppercase tracking-[1px] leading-tight mt-1 px-2">Conforme au règlement UE 2016/679</div>
            </div>
            <div className="text-center border-r border-[#e2e8f0]">
              <div className="text-[1.8rem] font-extrabold text-[#003f7f]">5 ans</div>
              <div className="text-[0.75rem] text-[#5a6478] uppercase tracking-[1px] leading-tight mt-1 px-2">Durée max de conservation</div>
            </div>
            <div className="text-center">
              <div className="text-[1.8rem] font-extrabold text-[#003f7f]">0</div>
              <div className="text-[0.75rem] text-[#5a6478] uppercase tracking-[1px] leading-tight mt-1 px-2">Données vendues à des tiers</div>
            </div>
          </div>

          <div className="text-[#3a3a4a]">
            <p className="italic text-[1rem] text-[#5a6478] border-l-[3px] border-[#003f7f] pl-4 mb-8">
              "Chez Easy Courtage Assurance, la protection de vos données personnelles n'est pas une obligation administrative — c'est une exigence professionnelle."
            </p>

            <section>
              <h3 className="text-[1rem] font-bold text-[#003f7f] mt-[1.5rem] mb-[0.5rem] border-b-2 border-[#f0f0f0] pb-[0.4rem]">Qui sommes-nous ?</h3>
              <p className="text-[0.92rem] leading-[1.85] mb-4">
                Easy Courtage Assurance — 47 rue Victor Hugo, 94140 Alfortville<br />
                N° SIRET : 524 966 421 00017 — Immatriculée à l'ORIAS sous le n° 10 058 195<br />
                Contact : <a href="mailto:sg@easycourtage.fr" className="text-[#003f7f] font-bold">sg@easycourtage.fr</a><br />
                Responsable du traitement des données : Easy Courtage Assurance
              </p>
            </section>

            <section>
              <h3 className="text-[1rem] font-bold text-[#003f7f] mt-[1.5rem] mb-[0.5rem] border-b-2 border-[#f0f0f0] pb-[0.4rem]">Quelles données collectons-nous ?</h3>
              <p className="text-[0.92rem] leading-[1.85] mb-4">
                Nous collectons uniquement les données strictement nécessaires à la réalisation de nos services : identité, coordonnées, date de naissance, informations relatives au risque à assurer (véhicule, activité professionnelle, bien immobilier, situation de santé). Ces données sont recueillies directement auprès de vous, via notre formulaire en ligne ou lors de nos échanges en agence.
              </p>
            </section>

            <section>
              <h3 className="text-[1rem] font-bold text-[#003f7f] mt-[1.5rem] mb-[0.5rem] border-b-2 border-[#f0f0f0] pb-[0.4rem]">Pourquoi les collectons-nous ?</h3>
              <p className="text-[0.92rem] leading-[1.85] mb-2">Vos données sont utilisées exclusivement pour :</p>
              <ul className="space-y-2 mb-4">
                {[
                  "Établissement de devis et comparaison des offres d'assurance",
                  "Souscription et gestion de vos contrats",
                  "Traitement de vos réclamations éventuelles",
                  "Respect de nos obligations légales et réglementaires (LCB-FT, ORIAS, ACPR)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[0.92rem] leading-[1.85]">
                    <span className="w-[6px] h-[6px] bg-[#003f7f] mt-[0.6rem] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-[1rem] font-bold text-[#003f7f] mt-[1.5rem] mb-[0.5rem] border-b-2 border-[#f0f0f0] pb-[0.4rem]">Durée de conservation</h3>
              <p className="text-[0.92rem] leading-[1.85] mb-4">
                Vos données sont conservées pendant la durée de notre relation contractuelle, augmentée des délais légaux de prescription applicables en matière d'assurance — soit en général <strong className="font-bold text-[#003f7f]">5 ans</strong> après la fin du contrat. Les données de prospects non convertis sont supprimées au bout de <strong className="font-bold text-[#003f7f]">3 ans</strong>.
              </p>
            </section>

            <section>
              <h3 className="text-[1rem] font-bold text-[#003f7f] mt-[1.5rem] mb-[0.5rem] border-b-2 border-[#f0f0f0] pb-[0.4rem]">Qui y a accès ?</h3>
              <p className="text-[0.92rem] leading-[1.85] mb-4">
                Vos données sont accessibles uniquement aux collaborateurs d'Easy Courtage Assurance habilités, ainsi qu'aux compagnies d'assurances partenaires dans le strict cadre de l'établissement et de la gestion de vos contrats. <strong className="font-bold text-[#003f7f]">Elles ne sont jamais vendues, louées ou cédées à des tiers à des fins commerciales.</strong>
              </p>
            </section>

            <section>
              <h3 className="text-[1rem] font-bold text-[#003f7f] mt-[1.5rem] mb-[0.5rem] border-b-2 border-[#f0f0f0] pb-[0.4rem]">Vos droits</h3>
              <p className="text-[0.92rem] leading-[1.85] mb-2">Conformément au RGPD (Règlement UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez des droits suivants :</p>
              <ul className="space-y-2 mb-4">
                {[
                  { title: "Droit d'accès", desc: "obtenir une copie de vos données" },
                  { title: "Droit de rectification", desc: "corriger des données inexactes" },
                  { title: "Droit à l'effacement", desc: "demander la suppression de vos données" },
                  { title: "Droit d'opposition", desc: "vous opposer à un traitement" },
                  { title: "Droit à la portabilité", desc: "recevoir vos données dans un format structuré" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[0.92rem] leading-[1.85]">
                    <span className="w-[6px] h-[6px] bg-[#003f7f] mt-[0.6rem] flex-shrink-0" />
                    <span><strong className="font-bold text-[#003f7f]">{item.title}</strong> : {item.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[0.92rem] leading-[1.85] mb-4">
                Pour exercer ces droits, adressez votre demande à <a href="mailto:sg@easycourtage.fr" className="text-[#003f7f] font-bold">sg@easycourtage.fr</a> ou par courrier au 47 rue Victor Hugo, 94140 Alfortville. Réponse sous un mois maximum. En cas de réclamation non résolue : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#003f7f] font-bold">www.cnil.fr</a>
              </p>
            </section>

            <section>
              <h3 className="text-[1rem] font-bold text-[#003f7f] mt-[1.5rem] mb-[0.5rem] border-b-2 border-[#f0f0f0] pb-[0.4rem]">Sécurité des données</h3>
              <p className="text-[0.92rem] leading-[1.85] mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles adaptées : systèmes informatiques sécurisés, accès restreints, formation régulière de nos collaborateurs aux bonnes pratiques en matière de protection des données.
              </p>
            </section>

            <section>
              <h3 className="text-[1rem] font-bold text-[#003f7f] mt-[1.5rem] mb-[0.5rem] border-b-2 border-[#f0f0f0] pb-[0.4rem]">Cookies</h3>
              <p className="text-[0.92rem] leading-[1.85] mb-4">
                Le site easycourtage.fr peut déposer des cookies de navigation à des fins de mesure d'audience. Aucun cookie publicitaire ou de tracking tiers n'est utilisé. Vous pouvez configurer votre navigateur pour les refuser à tout moment.
              </p>
            </section>

            <p className="text-center text-[0.78rem] text-[#9ca3af] italic mt-8">
              "Dernière mise à jour : juillet 2023 — révisée mars 2026"
            </p>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="bg-[#f4f7fc] border-t border-[#e2e8f0] px-12 py-4 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-[#003f7f] hover:bg-[#0059b3] text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
          >
            Fermer
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const LegalModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative w-[80%] h-[75%] bg-[#0a0b0f] border border-[rgba(201,168,76,.25)] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[rgba(201,168,76,.6)] hover:text-[rgba(201,168,76,1)] transition-colors z-10"
        >
          <X className="w-8 h-8" />
        </button>
        
        <div className="flex-1 overflow-y-auto p-8 md:p-12 font-dmsans text-gray-300">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-DM Sans text-4xl text-[rgba(201,168,76,1)] mb-12 text-center">Mentions Légales</h1>
            
            <section className="mb-12">
              <h2 className="font-DM Sans text-2xl text-[rgba(201,168,76,1)] mb-6">1. PRÉSENTATION DU SITE</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, 
                  il est précisé aux utilisateurs du site easycourtage.fr l'identité des différents intervenants dans le 
                  cadre de sa réalisation et de son suivi :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Propriétaire : Easy Courtage Assurance — 47 Rue Victor Hugo, 94140 Alfortville — N° SIRET : 524 966 421 00017</li>
                  <li>Créateur du site : Alxor Labs</li>
                  <li>Capital social : 10 000 €</li>
                  <li>N° de TVA intracommunautaire : FR00524966421</li>
                  <li>Responsable de publication : Easy Courtage Assurance — sg@easycourtage.fr</li>
                  <li>Hébergeur : Gandi SAS — 63-65 boulevard Massena, 75013 Paris — France</li>
                  <li>Localisation du serveur : France</li>
                </ul>
                <p>
                  EASY COURTAGE ASSURANCE, Société à responsabilité limitée à associé unique, au capital social de 10 000 €, 
                  dont le siège est sis au 47 rue Victor Hugo, 94140 Alfortville, immatriculée sous le n° 524 966 421 R.C.S. Créteil.
                </p>
                <p>
                  EASY COURTAGE ASSURANCE est immatriculée à l'ORIAS (www.orias.fr) dans la catégorie « Courtier d'assurance » 
                  sous le n° 10058195, soumise au contrôle de l'Autorité de Contrôle Prudentiel et de Résolution, 
                  61 rue Taitbout, 75436 Paris Cedex 09.
                </p>
                <p>
                  Notre société ne détient aucune participation directe ou indirecte d'une compagnie d'assurance. 
                  Aucune entreprise d'assurance ne détient de participation directe ou indirecte dans notre société. 
                  EASY COURTAGE ASSURANCE exerce son activité en application des dispositions de l'article L520-1.II catégorie b) du Code des Assurances.
                </p>
                <p>
                  En cas de différend, vous pouvez adresser votre réclamation à « Service Réclamation ECA, 47 rue Victor Hugo, 94140 Alfortville ». 
                  Vous recevrez un accusé de réception sous 10 jours maximum et une réponse dans un délai maximum de 2 mois. 
                  Si le différend persiste, vous pouvez vous adresser au Médiateur de l'Assurance : 
                  La Médiation de l'Assurance, Pôle CSCA, TSA 50110, 75441 Paris Cedex 09 — le.mediateur@mediation-assurance.org — www.mediation-assurance.org
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-DM Sans text-2xl text-[rgba(201,168,76,1)] mb-6">2. CONDITIONS GÉNÉRALES D'UTILISATION</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  L'utilisation du site easycourtage.fr implique l'acceptation pleine et entière des présentes conditions générales d'utilisation. 
                  Ces conditions sont susceptibles d'être modifiées à tout moment ; les utilisateurs sont invités à les consulter régulièrement.
                </p>
                <p>
                  Le site est normalement accessible à tout moment. Une interruption pour maintenance technique peut être décidée par 
                  Easy Courtage Assurance, qui s'efforcera de communiquer préalablement les dates et heures d'intervention.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-DM Sans text-2xl text-[rgba(201,168,76,1)] mb-6">3. DESCRIPTION DES SERVICES FOURNIS</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Le site easycourtage.fr a pour objet de fournir une information concernant l'ensemble des activités de la société. 
                  Easy Courtage Assurance s'efforce de fournir des informations aussi précises que possible, sans pouvoir être tenue 
                  responsable des omissions ou inexactitudes. Toutes les informations sont données à titre indicatif et sont susceptibles d'évoluer.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-DM Sans text-2xl text-[rgba(201,168,76,1)] mb-6">4. LIMITATIONS CONTRACTUELLES SUR LES DONNÉES TECHNIQUES</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Le site utilise la technologie JavaScript. L'utilisateur s'engage à accéder au site avec un matériel récent, 
                  exempt de virus, et un navigateur à jour.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-DM Sans text-2xl text-[rgba(201,168,76,1)] mb-6">5. PROPRIÉTÉ INTELLECTUELLE ET CONTREFAÇONS</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Easy Courtage Assurance est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur 
                  tous les éléments accessibles sur le site (textes, images, graphismes, logo, icônes). 
                  Toute reproduction ou utilisation non autorisée sera considérée comme une contrefaçon conformément aux articles 
                  L.335-2 et suivants du Code de Propriété Intellectuelle.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-DM Sans text-2xl text-[rgba(201,168,76,1)] mb-6">6. LIMITATIONS DE RESPONSABILITÉ</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Easy Courtage Assurance ne pourra être tenue responsable des dommages directs et indirects causés au matériel de 
                  l'utilisateur lors de l'accès au site easycourtage.fr. Easy Courtage Assurance se réserve le droit de supprimer 
                  tout contenu déposé dans les espaces interactifs qui contreviendrait à la législation française.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-DM Sans text-2xl text-[rgba(201,168,76,1)] mb-6">7. GESTION DES DONNÉES PERSONNELLES</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Les données personnelles sont protégées conformément à la loi n° 78-17 du 6 janvier 1978 modifiée et au 
                  Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679).
                </p>
                <p>
                  Easy Courtage Assurance ne collecte des informations personnelles que pour les besoins des services proposés sur easycourtage.fr. 
                  Conformément aux articles 38 et suivants de la loi 78-17, tout utilisateur dispose d'un droit d'accès, de rectification 
                  et d'opposition aux données personnelles le concernant, en adressant une demande écrite à : sg@easycourtage.fr.
                </p>
                <p>
                  Aucune information personnelle n'est publiée, échangée, transférée ou vendue à des tiers sans le consentement de l'utilisateur.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-DM Sans text-2xl text-[rgba(201,168,76,1)] mb-6">8. LIENS HYPERTEXTES ET COOKIES</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Le site easycourtage.fr peut contenir des liens vers d'autres sites. Easy Courtage Assurance n'assume aucune 
                  responsabilité quant au contenu de ces sites externes.
                </p>
                <p>
                  La navigation sur easycourtage.fr est susceptible de provoquer l'installation de cookies destinés à faciliter 
                  la navigation et mesurer la fréquentation. L'utilisateur peut configurer son navigateur pour refuser les cookies, 
                  ce qui peut limiter l'accès à certains services.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-DM Sans text-2xl text-[rgba(201,168,76,1)] mb-6">9. DROIT APPLICABLE ET JURIDICTION</h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Tout litige relatif à l'utilisation du site easycourtage.fr est soumis au droit français. 
                  Attribution exclusive de juridiction aux tribunaux compétents de Paris.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-DM Sans text-2xl text-[rgba(201,168,76,1)] mb-6">10. PRINCIPALES LOIS CONCERNÉES</h2>
              <div className="space-y-4 leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés</li>
                  <li>Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique</li>
                  <li>Règlement UE 2016/679 (RGPD) du 27 avril 2016</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const MapsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      id="modal-maps-overlay"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-[6px]"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-[820px] bg-[#0a0b0f] rounded-xl shadow-[0_24px_80px_rgba(0,0,0,0.4)] overflow-hidden z-10"
        id="modal-maps"
      >
        {/* Top Gradient Bar */}
        <div className="h-[6px] bg-gradient-to-r from-[#003f7f] to-[#0059b3]" />
        
        {/* Header */}
        <div className="p-6 sm:px-8 flex justify-between items-center">
          <div>
            <h3 className="text-[1.1rem] font-bold text-white">Easy Courtage Assurance</h3>
            <p className="text-[0.82rem] text-[#8fa3c0] mt-1">47 rue Victor Hugo — 94140 Alfortville</p>
          </div>
          <button 
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-[#8fa3c0] hover:bg-white/10 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Info Block */}
        <div className="bg-white/[0.04] border-y border-white/[0.08] px-6 sm:px-8 py-3.5 flex flex-col sm:flex-row gap-x-8 gap-y-2.5 items-start sm:items-center">
          <a href="tel:0143781431" className="inline-flex items-center gap-1.5 text-[0.82rem] text-[#c9deff]">
            <Phone className="w-3.5 h-3.5" /> 01 43 78 14 31
          </a>
          <a href="mailto:easy@easycourtage.fr" className="inline-flex items-center gap-1.5 text-[0.82rem] text-[#c9deff]">
            <Mail className="w-3.5 h-3.5" /> easy@easycourtage.fr
          </a>
          <div className="inline-flex items-center gap-1.5 text-[0.82rem] text-[#8fa3c0]">
            <Clock className="w-3.5 h-3.5" /> Lun–Ven : 9h30–12h30 / 14h–19h — Sam : 9h30–13h00
          </div>
        </div>

        {/* Map Block */}
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.404245643444!2d2.417880212620702!3d48.804542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673d71a3e8fc7%3A0xf67896084fcd2dfe!2sEasy%20Courtage%20Assurance%20Alfortville%20Courtier%20d&#39;assurances!5e0!3m2!1sfr!2sfr!4v1711545000000!5m2!1sfr!2sfr"
            width="100%"
            height="380"
            className="block border-0 h-[260px] sm:h-[380px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Easy Courtage Assurance — Alfortville"
          ></iframe>
        </div>

        {/* Footer */}
        <div className="bg-white/[0.04] border-t border-white/[0.08] p-4 sm:px-8 sm:py-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
          <a 
            href="https://maps.google.com/?q=47+rue+Victor+Hugo+94140+Alfortville" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.82rem] text-[#c9deff] justify-center sm:justify-start"
          >
            Ouvrir dans Google Maps <span>↗</span>
          </a>
          <button 
            onClick={onClose}
            className="bg-white/[0.08] border border-white/15 text-white px-5 py-2 rounded-lg font-semibold text-[0.85rem] hover:bg-white/[0.15] transition-all w-full sm:w-auto"
          >
            Fermer
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isMapsOpen, setIsMapsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-navy selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Agencies onOpenMaps={() => setIsMapsOpen(true)} />
        <Contact />
      </main>
      <Footer 
        onOpenLegal={() => setIsLegalOpen(true)} 
        onOpenAbout={() => setIsAboutOpen(true)} 
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />
      <LegalModal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <MapsModal isOpen={isMapsOpen} onClose={() => setIsMapsOpen(false)} />
      <CookieBanner />
      
      {/* Floating Action Button for Mobile */}
      <a 
        href="tel:0143781431"
        className="fixed bottom-6 right-6 md:hidden bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-50 animate-bounce"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
