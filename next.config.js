module.exports = {
  trailingSlash: true, // Add trailing slash to all paths
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  publicRuntimeConfig: {
    staticFolder: '/static',
    api: "https://us-central1-kuray-dev.cloudfunctions.net/api",
  },

}


