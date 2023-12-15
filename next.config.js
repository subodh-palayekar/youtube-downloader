/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.ssyoutube.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
