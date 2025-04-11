import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/static/',
          '/404',
          '/500',
          '/*.json$',
          // '/*?*',
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/llms.txt'],
        disallow: ['/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: ['/llms.txt'],
        disallow: ['/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/static/',
          '/404',
          '/500',
          '/*.json$',
        ],
      },
    ],
    sitemap: 'https://www.metric-converter.com/sitemap.xml',
    host: 'https://www.metric-converter.com',
  }
} 