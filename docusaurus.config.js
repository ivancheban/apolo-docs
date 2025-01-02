// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Apolo Documentation",
  tagline: "Dinosaurs are cool",
  favicon: "img/apolo.ico",

  // Set the production url of your site here
  url: "https://apolo-docusaurus.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ivancheban", // Usually your GitHub org/user name.
  projectName: "apolo-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ivancheban/apolo-docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/apolo.png",
      navbar: {
        title: "Apolo Documentation",
        logo: {
          alt: "Apolo Logo",
          src: "img/apolo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "conceptsSidebar",
            position: "left",
            label: "Concepts",
          },
          {
            type: "docSidebar",
            sidebarId: "cliSidebar",
            position: "left",
            label: "CLI Reference",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Apolo",
            items: [
              {
                label: "Apolo Home",
                to: "https://www.apolo.us",
              },
            ],
          },
          {
            title: "Blog",
            items: [
              {
                label: "Apolo Blog",
                href: "https://www.apolo.us/resources/blog",
              },
              {
                label: "Use Cases",
                href: "https://www.apolo.us/resources/use-cases",
              },
              {
                label: "Apolo Case Studies",
                href: "https://www.apolo.us/resources/case-studies",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Executive Team",
                to: "https://www.apolo.us/team",
              },
              {
                label: "GitHub",
                href: "https://github.com/neuro-inc/platform-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} All rights reserved. Ivan Cheban`,
      },
      prism: {
        theme: prismThemes.oneDark,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
