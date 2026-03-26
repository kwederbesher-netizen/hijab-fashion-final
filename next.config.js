/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ],
  },
  
  // إعدادات الـ redirects
  async redirects() {
    return [
      // الصفحات العربية (301 redirect)
      {
        source: '/ar/main-page',
        destination: '/ar',
        permanent: true, // 301 redirect
      },
      {
        source: '/ar/page',
        destination: '/ar',
        permanent: true,
      },
      {
        source: '/ar/e-catalogue',
        destination: '/ar/catalog',
        permanent: true,
      },
      // الصفحة الإنجليزية
      {
        source: '/access-hijab-clothes-prices-catalogues',
        destination: '/en/catalog',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig