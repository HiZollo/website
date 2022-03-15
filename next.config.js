/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/commands',
        destination: '/commands/message',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
