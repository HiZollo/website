/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    'inviteUrl': 'https://discord.com/oauth2/authorize?client_id=584677291318312963&permissions=1636382010871&scope=bot+applications.commands',
    'serverUrl': 'https://discord.com/invite/xUXTrYG2MZ',
    'dstUrl': 'https://discordservers.tw/bots/584677291318312963',
    'repoUrl': 'https://github.com/HiZollo/website'
  },
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
