// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

export default {
  basePath: isProd ? '/whop-cover-letter' : '',
  trailingSlash: true,
};
