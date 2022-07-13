// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'The Dart Tutorial 2022',
    tagline: 'A fast, easy to use, and fun way to learn Dart.',
    url: 'https://chornthorn.github.io',
    baseUrl: '/dart_tutorial/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    organizationName: 'chornthorn',
    projectName: 'dart_tutorial',
    trailingSlash: false,

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/chornthorn/dart_tutorial/tree/main/docs/',
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
            navbar: {
                title: 'Dart Tutorial',
                logo: {
                    alt: 'Dart Frog Logo',
                    src: 'img/logo.svg',
                    width: 32,
                    height: 32,
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'overview',
                        position: 'left',
                        label: 'Docs',
                    },
                    {
                        href: 'https://github.com/chornthorn/dart_tutorial',
                        position: 'right',
                        className: 'navbar-github-icon',
                        'aria-label': 'GitHub repository',
                    },
                ],
            },
            footer: {
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Overview',
                                to: '/docs/overview',
                            },
                            {
                                label: 'Basics',
                                to: '/docs/category/introduction-',
                            },
                        ],
                    },
                    {
                        title: 'Resources',
                        items: [
                            {
                                label: 'Blog Post',
                                href: '#',
                            },
                            {
                                label: 'Official Docs',
                                href: 'https://dart.dev/guides',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Open an Issue',
                                href: 'https://github.com/chornthorn/dart_tutorial/issues/new/choose',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/chornthorn/dart_tutorial',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Chorn Thorn .<br/>Built with 💙 by <a target="_blank" rel="noopener noreferrer" aria-label="Very Good Ventures" href="https://github.com/chornthorn">Docusaurus</a>.`,
            },
            prism: {
                additionalLanguages: ['dart'],
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
