module.exports = {
  siteMetadata: {
    name: `Vojta Oupicky`,
    title: `The Great GatsbyJS`,
    date: `January 13, 2019`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src`,
      },
    },
  ],
};
