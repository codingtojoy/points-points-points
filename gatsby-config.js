module.exports = {
  siteMetadata: {
    title: `Becoming Agile`,
    description: `Hi there! I'm Greg Rancourt, an engineer, agile coach, and change management expert, and this is a blog I started to help you and your team become agile. I try to focus on the challenges of transitioning to an agile culture for the first time.`,
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
        name: `Becoming Agile`,
        short_name: `Becoming Agile`,
        start_url: `/`,
        background_color: `#035CA8`,
        theme_color: `#035CA8`,
        display: `minimal-ui`,
        icon: `src/assets/favicons/favicon-512x512.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
