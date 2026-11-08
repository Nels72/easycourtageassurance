// Source unique des URL du site : utilisée par l'app, le prérendu et le sitemap.
export const SITE_URL = 'https://easycourtage.fr';

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  /** Libellé du fil d'Ariane (absent pour l'accueil). */
  label?: string;
}

export interface ServiceContent {
  eyebrow: string;
  h1: string;
  intro: string;
  points: string[];
}

export const PAGES: PageMeta[] = [
  {
    path: '/',
    title: 'Courtier en assurance à Alfortville (94) | Easy Courtage Assurance',
    description:
      "Courtier indépendant à Alfortville depuis 2010 : assurance auto, habitation, santé, professionnels, emprunteur et cyber. Comparaison des offres et conseil en agence dans le Val-de-Marne.",
  },
  {
    path: '/assurance-auto',
    label: 'Assurance auto',
    title: 'Assurance auto à Alfortville (94), même malus ou résilié | Easy Courtage',
    description:
      "Responsabilité civile, tiers étendu ou tous risques : votre courtier d'Alfortville compare les offres, y compris pour les conducteurs malussés ou résiliés.",
  },
  {
    path: '/assurance-habitation',
    label: 'Assurance habitation',
    title: 'Assurance habitation à Alfortville (94) | Easy Courtage Assurance',
    description:
      "Propriétaire ou locataire dans le Val-de-Marne : protégez votre foyer et vos biens avec des garanties sur-mesure, comparées par un courtier indépendant.",
  },
  {
    path: '/assurance-sante-prevoyance',
    label: 'Santé et prévoyance',
    title: 'Mutuelle santé et prévoyance à Alfortville (94) | Easy Courtage',
    description:
      "Une mutuelle adaptée à vos besoins réels et une prévoyance qui protège votre famille : comparaison et conseil par votre courtier du Val-de-Marne.",
  },
  {
    path: '/assurance-professionnels',
    label: 'Assurance des professionnels',
    title: 'Assurance professionnelle RC Pro, décennale (94) | Easy Courtage',
    description:
      "RC Pro, multirisque, décennale : artisans, TPE et entreprises du Val-de-Marne, sécurisez votre activité avec un courtier indépendant basé à Alfortville.",
  },
  {
    path: '/assurance-emprunteur',
    label: 'Assurance emprunteur',
    title: 'Assurance emprunteur : simulation en ligne | Easy Courtage Assurance',
    description:
      "Comparez votre assurance de prêt immobilier avec votre courtier d'Alfortville. Simulation en ligne et conditions préférentielles négociées.",
  },
  {
    path: '/assurance-cyber',
    label: 'Assurance cyber',
    title: 'Assurance cyber pour entreprises : Global Cyber Secure | Easy Courtage',
    description:
      "Prévention, assurance et assistance 24/7 : protégez votre entreprise et vos données contre les cyberattaques avec l'offre Global Cyber Secure.",
  },
  {
    path: '/a-propos',
    label: 'À propos',
    title: 'À propos : courtier IARD à Alfortville depuis 2010 | Easy Courtage',
    description:
      "Easy Courtage Assurance accompagne les professionnels et particuliers du Val-de-Marne depuis 2010, depuis son agence du 47 rue Victor Hugo à Alfortville.",
  },
  {
    path: '/mentions-legales',
    label: 'Mentions légales',
    title: 'Mentions légales | Easy Courtage Assurance',
    description: "Mentions légales d'Easy Courtage Assurance, courtier d'assurance immatriculé à l'ORIAS sous le n° 10058195.",
  },
  {
    path: '/politique-confidentialite',
    label: 'Politique de confidentialité',
    title: 'Politique de confidentialité | Easy Courtage Assurance',
    description: "Données collectées, finalités, durées de conservation et droits RGPD chez Easy Courtage Assurance.",
  },
];

export const NOT_FOUND: PageMeta = {
  path: '/404',
  title: 'Page introuvable | Easy Courtage Assurance',
  description: "Cette page n'existe pas ou a été déplacée.",
};

// Ces textes ne reprennent que des informations déjà publiées sur le site.
export const SERVICES: Record<string, ServiceContent> = {
  '/assurance-auto': {
    eyebrow: 'Particuliers',
    h1: 'Assurance auto à Alfortville et dans le Val-de-Marne',
    intro:
      'Responsabilité civile, tiers étendu ou tous risques : nous comparons les offres de nos partenaires pour trouver la formule adaptée à votre véhicule et à votre profil.',
    points: ['Responsabilité civile, tiers étendu ou tous risques', 'Solutions même pour les conducteurs malussés ou résiliés', 'Accompagnement en cas de sinistre'],
  },
  '/assurance-habitation': {
    eyebrow: 'Particuliers',
    h1: 'Assurance habitation à Alfortville et dans le Val-de-Marne',
    intro: 'Protégez votre foyer et vos biens avec des garanties sur-mesure, que vous soyez propriétaire ou locataire.',
    points: ['Garanties sur-mesure pour propriétaires et locataires', 'Analyse gratuite de votre contrat actuel', 'Accompagnement en cas de sinistre'],
  },
  '/assurance-sante-prevoyance': {
    eyebrow: 'Particuliers et professionnels',
    h1: 'Mutuelle santé et prévoyance dans le Val-de-Marne',
    intro: "Une mutuelle qui s'adapte à vos besoins réels et une prévoyance qui protège votre famille en toute circonstance.",
    points: ['Une couverture adaptée à vos besoins réels', 'Une protection pour votre famille', 'Analyse gratuite de vos contrats actuels'],
  },
  '/assurance-professionnels': {
    eyebrow: 'Professionnels',
    h1: 'Assurance des professionnels : RC Pro, multirisque et décennale',
    intro:
      "Artisan qui démarre, gérant de TPE, entreprise qui se développe : sécurisez votre activité avec l'expertise d'un courtier dédié et des garanties qui suivent l'évolution de vos risques.",
    points: ['Responsabilité civile professionnelle', 'Multirisque professionnelle', 'Assurance décennale'],
  },
  '/assurance-emprunteur': {
    eyebrow: 'Prêt immobilier',
    h1: 'Assurance emprunteur : comparez votre assurance de prêt',
    intro:
      "Nous avons négocié des conditions préférentielles pour votre assurance emprunteur. Lancez une simulation pour estimer l'économie possible, jusqu'à 15 000 € selon votre situation.",
    points: ['Simulation en ligne', 'Conditions préférentielles négociées', 'Un conseiller à Alfortville pour vous accompagner'],
  },
  '/assurance-cyber': {
    eyebrow: 'Entreprises',
    h1: 'Global Cyber Secure : protégez votre entreprise et vos données',
    intro: 'Une réponse globale combinant prévention, assurance et assistance 24h/24 et 7j/7 face aux cyberattaques.',
    points: [
      'Prévention : Security Rating (Board of Cyber) et formation des équipes avec Kamaé',
      "Assurance : pertes d'exploitation, reconstitution des données et cyber-fraude",
      'Assistance : experts informatiques, juridiques, communication de crise et soutien psychologique',
    ],
  },
};

export function normalizePath(pathname: string): string {
  const clean = pathname.replace(/\.html$/, '').replace(/\/index$/, '/').replace(/\/+$/, '');
  return clean || '/';
}
