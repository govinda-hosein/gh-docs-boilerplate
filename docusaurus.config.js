// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GH Docs Boilerplate",
  tagline: "Documentation is cool!",
  url: "https://govindahosein.com/",
  baseUrl: "/gh-docs-boilerplate/",
  onBrokenLinks: "throw",
  favicon: "img/logo.svg",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Govinda Hosein", // Usually your GitHub org/user name.
  projectName: "gh-docs-boilerplate", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */

      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "scripts",
        path: "content/scripts",
        routeBasePath: "scripts",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "release_notes",
        path: "content/release_notes",
        routeBasePath: "release_notes",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateTime: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "GH Dev Notes",
        logo: {
          alt: "GH Dev Notes",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/release_notes/sample_page",
            position: "right",
            label: "Release Notes",
          },
          {
            to: "/scripts/sample_page",
            position: "right",
            label: "Scripts",
          },
          {
            to: "/docs/sample_page/",
            position: "right",
            label: "Projects",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Govinda Hosein`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: ["@docusaurus/theme-mermaid"],
};

module.exports = config;
