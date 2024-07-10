import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import alpinejs from '@astrojs/alpinejs';
import compress from 'astro-compress';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import jopSoftwareCookieConsent from '@jop-software/astro-cookieconsent';
import icon from 'astro-icon';
import storyblok from '@storyblok/astro';

const env = loadEnv('', process.cwd(), ['STORYBLOK']);

// https://astro.build/config
export default defineConfig({
  site: 'https://orbnetde.github.io/',
  // Currently only works in chrome and safari.
  prefetch: {
    prefetchAll: true,
  },
  output: import.meta.env.DEV ? 'server' : 'static',
  // output: 'static',
  // https on local
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  image: {
    // Allows Astro to download and optimize images from this source.
    domains: ['a.storyblok.com'],
  },
  redirects: {
    '/buchungssystem-online': '/online-buchungssystem',
    '/praxissoftware-arzte-therapeuten': '/branchen/praxissoftware-arzte-therapeuten',
    '/handwerker-software': '/branchen/handwerker-software',
    '/coaching-software-fuer-berater': '/branchen/coaching-software-fuer-berater',
    '/angebot-schreiben': '/funktionen/buchhaltung/angebot-schreiben',
    '/angebote-schreiben': '/funktionen/buchhaltung/angebot-schreiben',
    '/rechnung-schreiben': '/funktionen/buchhaltung/rechnung-schreiben',
    '/rechnungen-schreiben': '/funktionen/buchhaltung/rechnung-schreiben',
    '/mahnung-schreiben': '/funktionen/buchhaltung/mahnung-schreiben',
    '/gutschrift-erstellen': '/funktionen/buchhaltung/gutschrift-erstellen',
    '/online-banking': '/funktionen/buchhaltung/online-banking',
    '/datev-schnittstelle': '/funktionen/buchhaltung/datev-schnittstelle',
    '/belege-erfassen': '/funktionen/buchhaltung/belege-erfassen',
    '/zeiterfassung-online': '/funktionen/buchhaltung/zeiterfassung',
    '/steuerberater-login': '/funktionen/buchhaltung/steuerberater-login',
    '/finanz-dashboard': '/funktionen/buchhaltung/finanz-dashboard',
    '/nutzerverwaltung': '/funktionen/nutzerverwaltung',
    '/produkte-und-dienstleistungen': '/funktionen/produkte-und-dienstleistungen',
    '/orbnet-integrationen': '/funktionen/integrationen',
    '/landingpage-builder': '/funktionen/terminverwaltung/landingpage-builder',
    '/online-kalender': '/funktionen/terminverwaltung/online-kalender',
    // BLOG
    '/rechnung-auf-englisch-schreiben': '/blog/rechnung-auf-englisch-schreiben',
    '/rechnung-schreiben-welche-pflichtangaben/': '/blob/rechnung-schreiben-welche-pflichtangaben/',
    '/die-umsatzsteuer-id-alle-facts/': '/blob/die-umsatzsteuer-id-alle-facts/',
    '/rechnung-eu-ausland-diese-infos-brauchst-du/': '/blob/rechnung-eu-ausland-diese-infos-brauchst-du/',
    '/kleinunternehmer-rechnung/': '/blob/kleinunternehmer-rechnung/',
    '/gobd-leitfaden/': '/blob/gobd-leitfaden/',
    '/buchhaltung-regeln/': '/blob/buchhaltung-regeln/',
    '/vorteile-online-steuerberater/': '/blob/vorteile-online-steuerberater/',
    '/der-jahresabschluss/': '/blob/der-jahresabschluss/',
    '/euer-2021-selbst-erstellen/': '/blob/euer-2021-selbst-erstellen/',
    '/einnahmenueberschussrechnung/': '/blob/einnahmenueberschussrechnung/',
    '/kleinunternehmerregelung/': '/blob/kleinunternehmerregelung/',
  },
  integrations: [
    tailwind(),
    compress({
      ext: '.br',
      algorithm: 'brotliCompress',
    }),
    compress({
      ext: '.gz',
      algorithm: 'gzip',
    }),
    sitemap(),
    import.meta.env.PROD && jopSoftwareCookieConsent({
      categories: {
        analytics: {},
      },
      language: {
        default: 'de',
        translations: {
          de: {
            consentModal: {
              title: 'Wir nutzen Cookies',
              description: 'Wir verwenden Cookies und andere Technologien auf unserer Webseite. Einige von ihnen sind essenziell, während andere uns helfen, diese Webseite und Ihre Erfahrung zu verbessern. Weitere Informationen über die Verwendung Ihrer Daten finden Sie in unserer Datenschutzerklärung.',
              acceptAllBtn: 'Alle akzeptieren',
              acceptNecessaryBtn: 'Alle ablehnen',
              showPreferencesBtn: 'Individuelle Einstellungen',
            },
            preferencesModal: {
              title: 'Cookie Einstellungen bearbeiten',
              acceptAllBtn: 'Alle akzeptieren',
              acceptNecessaryBtn: 'Alle ablehnen',
              savePreferencesBtn: 'Aktuelle Auswahl akzeptieren',
              closeIconLabel: 'Schließen',
              sections: [{
                title: 'Google Analytics',
                description: 'Cookie von Google für Website-Analysen. Erzeugt statistische Daten darüber, wie der Besucher die Website nutzt.',
                linkedCategory: 'analytics',
              }],
            },
          },
        },
      },
      guiOptions: {
        consentModal: {
          layout: 'bar inline',
          position: 'bottom',
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: 'bar wide',
          position: 'right',
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
    }),
    alpinejs(),
    icon({
      include: {
        bi: ['arrow-up-square'],
      },
    }),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        // Base
        page: 'storyblok/Page',
        // Blog
        h2: 'storyblok/blog/H2',
        h3: 'storyblok/blog/H3',
        h4: 'storyblok/blog/H4',
        image: 'storyblok/blog/Image',
        InfoBlock: 'storyblok/blog/InfoBlock',
        paragraph: 'storyblok/blog/Paragraph',
        quote: 'storyblok/blog/Quote',
        // Structure
        CardTower: 'storyblok/structure/CardTower',
        Container: 'storyblok/structure/Container',
        CTA: 'storyblok/structure/CTA',
        CTAPill: 'storyblok/structure/CTAPill',
        Grid2: 'storyblok/structure/Grid2',
        Grid3: 'storyblok/structure/Grid3',
        Grid4: 'storyblok/structure/Grid4',
        LeftRightSection: 'storyblok/structure/LeftImageSection',
        RightLeftSection: 'storyblok/structure/RightImageSection',
        Section: 'storyblok/structure/Section',
        // Content
        Button: 'storyblok/content/Button',
        Card: 'storyblok/content/Card',
        FeatureCard: 'storyblok/content/FeatureCard',
        FeatureList: 'storyblok/content/FeatureList',
        FeatureListItem: 'storyblok/content/FeatureListItem',
        Hero: 'storyblok/content/Hero',
        HeroTypewriter: 'storyblok/content/HeroTypewriter',
        ImageHero: 'storyblok/content/HeroImage',
        Link: 'storyblok/content/Link',
        MiniCard: 'storyblok/content/MiniCard',
        SectionText: 'storyblok/content/SectionText',
        SectionQuickText: 'storyblok/content/SectionQuickText',
        SectionQuickTextItem: 'storyblok/content/SectionQuickTextItem',
        SimpleImage: 'storyblok/content/SimpleImage',
        SimpleText: 'storyblok/content/SimpleText',
        Table: 'storyblok/content/Table',
        TableRow: 'storyblok/content/TableRow',
        TableCol: 'storyblok/content/TableCol',
        // Static
        BlogSection: 'storyblok/static/BlogSection',
        Plans: 'storyblok/static/Plans',
        Testimonials: 'storyblok/static/Testimonials',
      },
      apiOptions: {
        region: 'eu',
        cache: {
          clear: 'auto',
          type: 'memory',
        },
      },
      // livePreview: import.meta.env.DEV,
      livePreview: import.meta.env.DEV,
      bridge: import.meta.env.DEV,
    }),
  ],
});
