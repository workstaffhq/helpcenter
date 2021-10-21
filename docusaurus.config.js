// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Workstaff Help Center',
  tagline: 'DO NOT USE',
  url: 'https://help.workstaff.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.svg',
  organizationName: 'workstaff',
  projectName: 'helpcenter',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
      },
    },
  },

  plugins: [require.resolve('docusaurus-lunr-search')],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: 'Help Center',
        logo: {
          alt: 'Workstaff Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'managers/index',
            position: 'left',
            label: 'For Managers',
          },
          {
            type: 'doc',
            docId: 'workers/index',
            position: 'left',
            label: 'For Workers',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'For Managers',
                to: '/docs/managers',
              },
              {
                label: 'For Workers',
                to: '/docs/workers',
              },
            ],
          },
          {
            title: 'Additional Resources',
            items: [
              {
                label: 'Email',
                href: 'mailto:support@workstaff.app',
              },
              {
                label: 'Product Updates',
                to: '/blog/tags/product-updates',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Workstaff Inc.`,
      },
    }),
};

module.exports = config;
