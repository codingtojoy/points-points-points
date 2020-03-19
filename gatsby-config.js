module.exports = {
  siteMetadata: {
    title: `points points points`,
    description: `this is points points points, a blog about becoming agile (and maybe a few other things)`,
    author: `Greg Rancourt`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `points points points`,
        short_name: `points points points`,
        start_url: `/`,
        background_color: `#404854`,
        theme_color: `#404854`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
