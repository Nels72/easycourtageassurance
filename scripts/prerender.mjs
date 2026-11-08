// Génère un fichier HTML complet par page, puis le sitemap, après le build Vite.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = resolve(root, 'dist');
const bundle = resolve(root, 'node_modules/.ssr-eca/entry-server.js');
const { render, PAGES, NOT_FOUND, SITE_URL } = await import(pathToFileURL(bundle).href);

const template = readFileSync(resolve(dist, 'index.html'), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
const urlOf = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

const agency = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  '@id': `${SITE_URL}/#agence`,
  name: 'Easy Courtage Assurance',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.jpg`,
  image: `${SITE_URL}/logo.jpg`,
  telephone: '+33143781431',
  email: 'easy@easycourtage.fr',
  foundingDate: '2010',
  identifier: { '@type': 'PropertyValue', propertyID: 'ORIAS', value: '10058195' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '47 rue Victor Hugo',
    postalCode: '94140',
    addressLocality: 'Alfortville',
    addressRegion: 'Val-de-Marne',
    addressCountry: 'FR',
  },
  areaServed: { '@type': 'AdministrativeArea', name: 'Val-de-Marne' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:30', closes: '12:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '14:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:30', closes: '13:00' },
  ],
  sameAs: [
    'https://www.facebook.com/people/Easy-Courtage-Assurance-Alfortville/100085078044431/',
    'https://x.com/CourtageEasy',
  ],
};

function head(page, indexable) {
  const url = urlOf(page.path);
  const tags = [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
  ];
  if (!indexable) {
    tags.push('<meta name="robots" content="noindex" />');
    return tags.join('\n    ');
  }
  tags.push(
    `<link rel="canonical" href="${url}" />`,
    '<meta property="og:type" content="website" />',
    '<meta property="og:locale" content="fr_FR" />',
    '<meta property="og:site_name" content="Easy Courtage Assurance" />',
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE_URL}/logo.jpg" />`,
    jsonLd(agency),
  );
  if (page.label) {
    tags.push(
      jsonLd({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: page.label, item: url },
        ],
      }),
    );
  }
  return tags.join('\n    ');
}

function write(file, page, indexable = true) {
  const html = template
    .replace(/<title>[\s\S]*?<\/title>\s*<link rel="canonical"[^>]*>/, () => head(page, indexable))
    .replace('<div id="root"></div>', () => `<div id="root">${render(page.path)}</div>`);
  if (!html.includes('name="description"') || html.includes('<div id="root"></div>')) {
    throw new Error(`Prérendu incomplet pour ${page.path}`);
  }
  writeFileSync(resolve(dist, file), html);
}

for (const page of PAGES) {
  write(page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`, page);
}
write('404.html', NOT_FOUND, false);

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map((p) => `  <url>\n    <loc>${urlOf(p.path)}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n')}
</urlset>
`;
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap);

console.log(`Prérendu : ${PAGES.length} pages + 404, sitemap généré.`);
