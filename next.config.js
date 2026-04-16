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
  
  // إزالة السمات غير القياسية (لإصلاح خطأ hydration)
  compiler: {
    reactRemoveProperties: { properties: ['^fdprocessedid$'] },
  },
  
  async redirects() {
    return [
      {
        source: '/ar/main-page',
        destination: '/ar',
        permanent: true,
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
      {
        source: '/access-hijab-clothes-prices-catalogues',
        destination: '/en/catalog',
        permanent: true,
      },
      {
        source: '/hijab-clothes-catalog',
        destination: '/en/catalog',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig