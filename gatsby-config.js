require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Melvic Gomez`,
    description: `I am Melvic, full stack developer and UI designer enthusiast based in the Philippines with almost 5 years of experience on creating software application (mobile and web) and websites.`,
    author: `Melvic Gomez`,
    siteUrl: "https://www.melvicgomez.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        https: true,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Sen:500,700,800,900", "DM Sans"],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "font-size-base": "16px",
          "text-color": "rgba(0,0,0,0.8)",
          "primary-color": "#C02F1D",
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-114667360-1",
        head: true,
        exclude: ["/404"],
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "melvicgomez.com",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/", disallow: "/404" }],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.CMS_API_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [`blogs`,`projects`,`designs`],
        loginData: {
          identifier: process.env.CMS_IDENTIFIER,
          password: process.env.CMS_PASSWORD,
        },
      },
    },
    // `gatsby-plugin-offline`,
  ],
};
