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
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <img 
            src="/logo.jpg" 
            alt="" 
            className="h-12 sm:h-14 w-auto object-contain"
          />
          <span className="hidden sm:flex flex-col py-1.5 pl-3 border-l border-gray-200 group-hover:border-primary/30 transition-colors">
            <span className="text-lg font-extrabold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent italic">Easy</span>
              <span className="text-navy font-normal not-italic ml-0.5">Courtage</span>
            </span>
            <span className="text-sm font-bold text-primary tracking-wide uppercase">Assurance</span>
          </span>
        </a>
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
            Courtier Indépendant • Val-de-Marne (94)
          </span>
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

/* Icônes compagnies : dossier public/partenaires (source: Refonte_ECA_WEB). Temps d'affichage ~3,5 s par logo (cycle 32 s). */
const PARTENAIRES = [
  { name: "AXA", logo: "/partenaires/AXA.ico", alt: "AXA" },
  { name: "Allianz", logo: "/partenaires/ALLIANZ.ico", alt: "Allianz" },
  { name: "Thélem", logo: "/partenaires/THELEM.ico", alt: "Thélem Assurances" },
  { name: "April", logo: "/partenaires/APRIL.ico", alt: "April" },
  { name: "Asaf", logo: "/partenaires/ASAF.ico", alt: "Asaf" },
  { name: "Cipres", logo: "/partenaires/CIPRES.ico", alt: "Cipres" },
  { name: "Covea Risk", logo: "/partenaires/COVEARISK.ico", alt: "Covea Risk" },
  { name: "Helvetia", logo: "/partenaires/HELVETIA.ico", alt: "Helvetia" },
  { name: "Leader", logo: "/partenaires/LEADER.ico", alt: "Leader" },
];

const DUREE_CYCLE_MARQUEE_MS = 32000; /* 9 logos × ~3,5 s = 31,5 s, arrondi 32 s */
const TEMPS_PAR_LOGO_MS = Math.round(DUREE_CYCLE_MARQUEE_MS / PARTENAIRES.length);

const Stats = () => (
  <div className="bg-white border-b border-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-center">
        {/* Années d'expérience */}
        <div className="text-center md:text-left">
          <div className="text-3xl font-extrabold text-primary">+15</div>
          <div className="text-sm text-gray-500 font-medium mt-1">ans d&apos;expérience</div>
        </div>

        {/* Principaux partenaires – défilé dynamique */}
        <div className="flex flex-col items-center w-full overflow-hidden">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Principaux partenaires</div>
          <div className="w-full overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}>
            <div
              className="flex items-center gap-10 sm:gap-14 shrink-0 w-max"
              style={{
                animation: `partenaires-marquee ${DUREE_CYCLE_MARQUEE_MS / 1000}s linear infinite`,
              }}
            >
              {[...PARTENAIRES, ...PARTENAIRES].map((p, i) => (
                <div key={i} className="flex items-center justify-center h-16 sm:h-20 w-36 sm:w-44 shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                  <img src={p.logo} alt={p.alt} className="max-h-16 sm:max-h-20 w-auto object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Arguments sobres */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-4 sm:gap-6 md:gap-3 text-center md:text-right">
          <div>
            <div className="text-sm font-semibold text-navy">Devis gratuit & sans engagement</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-navy">Courtier indépendant à votre écoute</div>
          </div>
        </div>
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
                icon: ShieldCheck, 
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

const Agencies = () => (
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
            mapUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("47 rue Victor Hugo 94140 Alfortville"),
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
                <a href={agency.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-2 transition-colors">{agency.address}</a>
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
            {/* Formulaire Tally : https://tally.so/r/oby4E5 - Demande d'étude personnalisée */}
            <div className="w-full rounded-2xl overflow-hidden border border-gray-200 bg-white min-h-[520px]">
              <iframe
                src="https://tally.so/embed/oby4E5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="100%"
                className="w-full min-h-[520px] border-0"
                title="Demande d'étude personnalisée"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MENTIONS_LEGALES = `Société à responsabilité limitée à associé unique, au capital social de 10.000 €, siège social au 47 rue Victor Hugo 94140 Alfortville, RCS Créteil 524 966 421. Immatriculée à l'ORIAS sous le n° 100 58 195 en tant que Courtier d'assurance.
Soumise au contrôle de l'ACPR (61 rue Taitbout 75436 Paris Cedex 09). Aucune participation directe ou indirecte détenue ou détenant avec une compagnie d'assurance. Nous ne fondons pas notre analyse sur un nombre suffisant de contrats d'assurance disponibles sur le marché. La liste de nos partenaires assureurs est disponible sur simple demande.
Rémunération : commissions versées par les assureurs et/ou honoraires à la charge du souscripteur.`;

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Contact en bas de page */}
      <section className="mb-16 py-12 bg-soft rounded-2xl border border-gray-100">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-navy mb-3">Contact</h3>
          <p className="text-gray-600 text-sm mb-6">Une question ? Envoyez-nous un message.</p>
          <a 
            href="mailto:easy@easycourtage.fr" 
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Nous contacter par email
          </a>
        </div>
      </section>

      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="/logo.jpg" 
              alt="Easy Courtage Assurance Logo" 
              className="h-12 w-auto object-contain"
              onError={(e) => e.currentTarget.style.display = 'none'}
            />
            <span className="text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent italic font-bold">Easy</span>
              <span className="text-primary ml-1 font-bold">Courtage Assurance</span>
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
            <li><a href="#services" className="hover:text-primary transition-colors">Auto & Moto</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Habitation</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Santé & Prévoyance</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Professionnels</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-navy mb-6">Informations</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#a-propos" className="hover:text-primary transition-colors">À propos</a></li>
            <li className="relative group/mentions">
              <span className="cursor-help hover:text-primary transition-colors inline-block">Mentions légales</span>
              <div className="absolute left-0 bottom-full mb-2 hidden group-hover/mentions:block z-50 w-[min(90vw,28rem)] p-4 bg-white border border-gray-200 rounded-xl shadow-xl text-left text-xs text-gray-600 leading-relaxed max-h-64 overflow-y-auto">
                {MENTIONS_LEGALES.split('\n').map((line, i) => (
                  <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                ))}
              </div>
            </li>
            <li><a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
        <p>© 2026 <strong>Easy Courtage Assurance</strong>. Tous droits réservés.</p>
        <p>ORIAS n° 100 58 195 • Courtier en assurance</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-navy selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Agencies />
        <Contact />
        <section id="a-propos" className="py-16 bg-soft border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">À propos</h2>
            <p className="text-navy text-sm leading-relaxed max-w-2xl">
              <strong>Easy Courtage Assurance</strong> est un courtier en assurance indépendant basé à Alfortville (94). 
              Nous comparons les offres des principaux assureurs pour vous proposer des garanties adaptées à vos besoins, 
              avec un accompagnement de proximité et des conseils personnalisés.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      
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
