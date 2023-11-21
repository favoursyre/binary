/** @type {import('next').NextConfig} */
const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'Access-Control-Allow-Origin',
  //           value: '*',
  //         },
  //       ],
  //     },
  //   ];
  // },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'drive.google.com'
          },
          {
            protocol: 'https',
            hostname: 'files.edgestore.dev'
          }
        ],
      },
}

module.exports = nextConfig
