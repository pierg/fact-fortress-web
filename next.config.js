// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/fact-fortress-web' : '',
  assetPrefix: isProd ? '/fact-fortress-web' : '',
}
