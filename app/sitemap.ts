///This refers to the sitemap configurations

///Libraries -->
import { MetadataRoute } from 'next'
 
///Commencing code -->
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl: string = process.env.NEXT_PUBLIC_DOMAIN_NAME

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us/our-company`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
        url: `${baseUrl}/register/0`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    {
        url: `${baseUrl}/login`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
    {
      url: `${baseUrl}/about-us/our-principles`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}