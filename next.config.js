module.exports = {
    trailingSlash: true, // Add trailing slash to all paths
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    publicRuntimeConfig: {
      staticFolder: '/static',
      api: "https://us-central1-kuray-dev.cloudfunctions.net/api",
      DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
      DISCORD_CHANNEL_ID: process.env.DISCORD_CHANNEL_ID,
    },
    env: {
      DISCORD_WEBHOOK_URL: process.env.DISCORD_WEBHOOK_URL,
      GITHUB_TREE: process.env.GITHUB_TREE,
    },
  
  }
  
  
  