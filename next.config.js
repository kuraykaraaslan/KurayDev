const NODE_ENV = process.env.NODE_ENV || "production";

if (NODE_ENV === "development") {
  require('dotenv').config({ path: `./.env.development` });
} else {
  require('dotenv').config({ path: `./.env.production` });
}


module.exports = {
  trailingSlash: true, // Add trailing slash to all paths
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  publicRuntimeConfig: {
    staticFolder: "/static",
    api: "https://us-central1-kuray-dev.cloudfunctions.net/api",
    DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
    DISCORD_CHANNEL_ID: process.env.DISCORD_CHANNEL_ID,
  },
  env: {
    DISCORD_WEBHOOK_URL: process.env.DISCORD_WEBHOOK_URL,
    DISCORD_DOORMAN_WEBHOOK_URL: process.env.DISCORD_DOORMAN_WEBHOOK_URL,
    GITHUB_TREE: process.env.GITHUB_TREE,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GITHUB_USER: process.env.GITHUB_USER,
    GITLAB_TOKEN: process.env.GITLAB_TOKEN,
    GITLAB_USER: process.env.GITLAB_USER,
    INTERNAL_API_URL: process.env.INTERNAL_API_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
    RECAPTCHA_CLIENT_KEY: process.env.RECAPTCHA_CLIENT_KEY,
    RECAPTCHA_SERVER_KEY: process.env.RECAPTCHA_SERVER_KEY,
    ADMIN_PHONE: process.env.ADMIN_PHONE,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_USER: process.env.DATABASE_USER,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_PORT: process.env.DATABASE_PORT,
  },
};
