import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import alpinejs from '@astrojs/alpinejs';
import compress from 'astro-compress';
import compressor from 'astro-compressor';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import storyblok from '@storyblok/astro';

const env = loadEnv('', process.cwd(), ['STORYBLOK']);

// https://astro.build/config
export default defineConfig({
  site: 'https://www.orbnet.de/',
  // Currently only works in chrome and safari.
  prefetch: {
    prefetchAll: true,
  },
  // output: import.meta.env.DEV ? 'server' : 'static',
  output: 'static',
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
  redirects: {},
  integrations: [
    tailwind({applyBaseStyles: false}),
    sitemap(),
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
        CTABig: 'storyblok/structure/CTABig',
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
        FAQList: 'storyblok/content/FAQList',
        FAQListItem: 'storyblok/content/FAQListItem',
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
      livePreview: false,
      bridge: import.meta.env.DEV,
    }),
    // keep compress on the end
    compress(),
    compressor({
      gzip: true,
      brotli: true,
      fileExtensions: [
        '.cjs',
        '.css',
        '.html',
        '.js',
        '.mjs',
        '.pdf',
        '.svg',
        '.txt',
        '.xml',
      ],
    }),
  ],
});
