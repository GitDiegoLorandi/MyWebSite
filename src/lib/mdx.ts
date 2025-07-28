import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface MDXContent {
  metadata: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    author: string;
    [key: string]: string | number | boolean;
  };
  content: string;
}

const contentDirectory = path.join(process.cwd(), 'src/content');

export async function getMDXContent(slug: string, locale: string = 'en'): Promise<MDXContent | null> {
  try {
    const filePath = path.join(contentDirectory, locale, `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      console.warn(`MDX file not found: ${filePath}`);
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data: metadata, content } = matter(fileContents);

    return {
      metadata: metadata as MDXContent['metadata'],
      content,
    };
  } catch (error) {
    console.error(`Error reading MDX file ${slug}:`, error);
    return null;
  }
}

export function getAllMDXSlugs(locale: string = 'en'): string[] {
  try {
    const localeDirectory = path.join(contentDirectory, locale);
    
    if (!fs.existsSync(localeDirectory)) {
      return [];
    }

    const files = fs.readdirSync(localeDirectory);
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error(`Error reading MDX directory for locale ${locale}:`, error);
    return [];
  }
} 