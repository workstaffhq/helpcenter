// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `Workstaff`,
  tagline: 'DO NOT USE',
  url: 'https://help.workstaff.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/icon.svg',
  organizationName: 'workstaffhq',
  projectName: 'helpcenter',
  trailingSlash: true,
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

  plugins: [
    require.resolve('docusaurus-lunr-search'),
    'docusaurus-plugin-sass'
  ],

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
          customCss: require.resolve('./src/css/custom.scss'),
        },
        gtag: {
          trackingID: 'G-X5YGR0T7WL',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        }
      },
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
                label: 'Features Matrix',
                to: '/docs/managers/features-matrix',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'Support',
                href: 'mailto:support@workstaff.app',
              },
              {
                label: 'Sales',
                href: 'mailto:sales@workstaff.app',
              },
              {
                label: 'Book a Call',
                href: 'https://workstaff.app/book-a-call',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Workstaff Inc.`,
      },
    }),
};

module.exports = config;
