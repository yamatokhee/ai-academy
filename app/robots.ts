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
          '/*.xml$', // Note: This disallows all XML except the sitemap specified below
        ],
      },
      {
        // Be specific for image bots if needed, otherwise '*' covers them
        userAgent: 'Googlebot-Image',
        allow: ['/*.jpg$', '/*.jpeg$', '/*.gif$', '/*.png$', '/*.webp$'],
        disallow: ['/private/', '/admin/'], // Ensure images in private areas aren't crawled
      },
      // Add more specific rules if needed for other bots
    ],
    sitemap: 'https://robomonkeyai.com/sitemap.xml',
  }
}
