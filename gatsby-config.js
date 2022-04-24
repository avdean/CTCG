require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `CryptoTCG`,
    siteTitleAlt: `CryptoTCG - Crypto Trading Card Game`,
    siteHeadline: `Emilia - Gatsby Theme from @lekoarts`,
    siteUrl: `https://crypto-TCG.nft`,
    siteDescription: `An omnichain collection of Crypto Trading Card NFT's, that can only be bought on their respective blockchains and networks.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
               name: `VagrantTea's CryptoTCG`,
               socialMedia: [
                 {
                   title: `Instagram`,
                   href: `https://www.instagram.com/cryptoTCG`
                 }
               ]
             }
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CryptoTCG - Crypto Trading Card Game`,
        short_name: `CryptoTCG`,
        description: `An omnichain collection of Crypto Trading Card NFT's, that can only be bought on their respective blockchains and networks.`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
