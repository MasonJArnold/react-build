{
     resolve: 'gatsby-source-wordpress',
     options: {
       // The base url to your WP site.
       baseUrl: 'https://gatsbyreact.wpengine.com',
       // WP.com sites set to true, WP.org set to false
       hostingWPCOM: true,
       // The protocol. This can be http or https.
       protocol: 'http',
       // Use 'Advanced Custom Fields' Wordpress plugin
       useACF: true,
       auth: {},
       // Set to true to debug endpoints on 'gatsby build'
       verboseOutput: true
     }
   },```
