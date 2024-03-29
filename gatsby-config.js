/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// Initialize env variables
require('dotenv').config();

const path = require('path');
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
);

module.exports = {
  trailingSlash : `ignore`,
  siteMetadata: {
    title: `Melvic Gomez`,
    description: `Mabuhay! I am a full stack developer and UI/UX enthusiast from the Philippines with more than 7 years of experience on creating software application(web and mobile) and websites.`,
    author: `Melvic Gomez`,
    siteUrl: 'https://www.melvicgomez.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Melvic Gomez`,
        short_name: `MG`,
        start_url: `/`,
        background_color: `#AD2A1A`,
        theme_color: `#AD2A1A`,
        display: `minimal-ui`,
        icon: `src/images/mg-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['DM Sans'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-N2B7RSDD9X'],
        pluginConfig: {
          head: true,
          respectDNT: false,
          exclude: ['/404/'],
          origin: 'https://www.melvicgomez.com',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/', disallow: '/404' }],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-smoothscroll`,
  ],
};
