import Script from 'next/script';

interface PersonStructuredDataProps {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image?: string;
  email?: string;
  location?: string;
  sameAs?: string[];
}

export function PersonStructuredData({
  name,
  jobTitle,
  description,
  url,
  image,
  email,
  location,
  sameAs = [],
}: PersonStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    url,
    ...(image && { image }),
    ...(email && { email }),
    ...(location && { 
      address: {
        '@type': 'PostalAddress',
        addressLocality: location,
      }
    }),
    ...(sameAs.length > 0 && { sameAs }),
    knowsAbout: [
      'Web Development',
      'Software Engineering',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Full Stack Development',
      'Remote Work',
      'Agile Development',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Fullstack Developer',
      occupationLocation: {
        '@type': 'Country',
        name: 'Remote Worldwide',
      },
      skills: [
        'Next.js',
        'TypeScript',
        'React',
        'Node.js',
        'Tailwind CSS',
        'Git',
        'Vercel',
        'Database Design',
        'API Development',
        'Responsive Design',
      ],
    },
  };

  return (
    <Script
      id="person-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

interface WebsiteStructuredDataProps {
  name: string;
  description: string;
  url: string;
  author: string;
  inLanguage?: string[];
}

export function WebsiteStructuredData({
  name,
  description,
  url,
  author,
  inLanguage = ['en-US', 'pt-BR'],
}: WebsiteStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    description,
    url,
    author: {
      '@type': 'Person',
      name: author,
    },
    inLanguage,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/projects?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    mainEntity: {
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: author,
      },
    },
  };

  return (
    <Script
      id="website-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

interface ProjectStructuredDataProps {
  name: string;
  description: string;
  url: string;
  author: string;
  dateCreated?: string;
  dateModified?: string;
  image?: string;
  programmingLanguage?: string[];
  keywords?: string[];
}

export function ProjectStructuredData({
  name,
  description,
  url,
  author,
  dateCreated,
  dateModified,
  image,
  programmingLanguage = [],
  keywords = [],
}: ProjectStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    author: {
      '@type': 'Person',
      name: author,
    },
    creator: {
      '@type': 'Person',
      name: author,
    },
    ...(dateCreated && { dateCreated }),
    ...(dateModified && { dateModified }),
    ...(image && { image }),
    ...(programmingLanguage.length > 0 && { programmingLanguage }),
    ...(keywords.length > 0 && { keywords }),
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <Script
      id={`project-${name.toLowerCase().replace(/\s+/g, '-')}-structured-data`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

interface BreadcrumbStructuredDataProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
} 