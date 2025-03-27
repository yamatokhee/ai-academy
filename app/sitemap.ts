import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://robomonkeyai.com'
  // For more accurate lastModified dates, consider fetching data or using file system info
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily', // Adjust frequency based on how often content changes
      priority: 1, // Homepage usually has highest priority
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9, // Courses might be more important than 'about'
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly', // Contact page likely changes infrequently
      priority: 0.7,
    },
    // Add more pages here if they exist, e.g., blog posts, specific course detail pages
  ]
}
