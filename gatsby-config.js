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
  siteMetadata: {
    title: `Melvic Gomez`,
    description: `I am Melvic, full stack developer and UI designer enthusiast based in the Philippines with almost 5 years of experience on creating software application (mobile and web) and websites.`,
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
          families: ['Sen:500,700,800,900', 'DM Sans'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'G-RW0R4M3FWN',
        head: false,
        exclude: ['/404'],
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'melvicgomez.com',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/', disallow: '/404' }],
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be ommitted or customized
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
        // Any additional eslint-webpack-plugin options below
        // ...
      },
    },
  ],
};
