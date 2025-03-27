import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/courses/*',
          '/about',
          '/contact',
          '/sitemap.xml',
        ],
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/_next/',
          '/static/',
          '/*.json$',
          '/*.xml$',
        ],
        crawlDelay: 10,
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/*.jpg$', '/*.jpeg$', '/*.gif$', '/*.png$', '/*.webp$'],
        disallow: ['/private/', '/admin/'],
      },
    ],
    sitemap: 'https://robomonkeyai.com/sitemap.xml',
  }
} 