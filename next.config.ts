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
    ]
  },
}

export default nextConfig
