module.exports = {
  siteMetadata: {
    title: `Melvic Gomez`,
    description: `I am Melvic, full stack developer and UI designer enthusiast based in the Philippines with almost 5 years of experience on creating software application (mobile and web) and websites.`,
    author: `Melvic Gomez`,
    siteUrl: 'https://www.melvicgomez.com'
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
  },
  {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
        modifyVars: {
          // "primary-color": "#183C52",
          // "heading-color": "#777777"
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-114667360-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: [],
        pageTransitionDelay: 0,
        containerId: "GTM-WG325XN",
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "www.melvicgomez.com",
      },
    },
    `gatsby-plugin-robots-txt`,
    // `gatsby-plugin-offline`,
  ],
}
