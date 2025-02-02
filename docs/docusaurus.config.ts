import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'The Node Forge', // Edit
  tagline: 'Lightweight NPM Packages Made Easy', // Edit
  favicon: 'img/favicon.ico', // Edit

  url: 'https://the-node-forge.github.io',
  baseUrl: '/',

  organizationName: 'The-Node-Forge',
  projectName: 'npm-template', // Edit
  // deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/The-Node-Forge/npm-template/tree/main/docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/The-Node-Forge/npm-template/tree/main/docs/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'The Node Forge',
      logo: {
        alt: 'The Node Forge Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Docs',
        // },
        {
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/The-Node-Forge/npm-template',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'API',
              to: '/docs/api/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/The-Node-Forge/npm-template',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Node Forge. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['../src/index.ts'], // Update with main entry file
        tsconfig: '../tsconfig.json',
        out: 'docs/api',
        includeVersion: true,
        hideGenerator: true, // Hide "Generated by TypeDoc" footer
        categorizeByGroup: true, // Organizes API by modules, classes, functions
        excludePrivate: true, // Exclude private methods
        excludeProtected: true, // Exclude protected methods
        excludeExternals: true, // Exclude external packages
        excludeNotDocumented: true, // Exclude code without JSDoc comments
      },
    ],
  ],
};

export default config;
