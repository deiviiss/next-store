const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false
  },
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com', 'api.lorem.space', 'store.storeimages.cdn-apple.com', 'http2.mlstatic.com', 'w7.pngwing.com'],
  },
})

  // env: {
  //   customKey: 'customValue'
  // },
  // basePath: '/dist',
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/hola',
  //       destination: 'https://david.hilera@hotmail.com',
  //       permanent: true
  //     }
  //   ]
  // }
