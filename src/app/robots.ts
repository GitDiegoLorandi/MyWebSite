import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://diegolorandi.dev';

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/projects',
          '/projects/*',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '*.json',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/about',
          '/projects',
          '/projects/*',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/about', 
          '/projects',
          '/projects/*',
        ],
        crawlDelay: 2,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
} 