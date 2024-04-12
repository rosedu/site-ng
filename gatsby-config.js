module.exports = {
  siteMetadata: {
    title: `ROSEdu Website`
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'G-8KS46N706N'
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 0,
        sv: 0
      }
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'ro',
        useLangKeyLayout: false
      }
    }
  ]
}
