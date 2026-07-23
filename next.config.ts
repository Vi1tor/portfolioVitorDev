import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'vitorprogramador.com.br' }],
        destination: 'https://www.vitorprogramador.com.br/:path*',
        permanent: true,
      },
      { source: '/sobre', destination: '/#sobre', permanent: true },
      { source: '/projetos', destination: '/#projetos', permanent: true },
      { source: '/stack', destination: '/#stack', permanent: true },
      { source: '/contato', destination: '/#contato', permanent: true },
    ]
  },
}

export default nextConfig
