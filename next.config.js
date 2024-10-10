// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/whop-cover-letter' : '',  // Your GitHub repo name
  trailingSlash: true,  // Ensures correct static export paths
};
