import fs from 'fs';
import path from 'path';

const BLOGS_PATH = path.join(process.cwd(), 'content/blogs');

export interface BlogMeta {
  title: string;
  description: string;
  date: string;
  author: string;
  authorRole?: string;
  category: string;
  image?: string;
  tags?: string[];
  featured?:boolean;
}

export interface BlogSection {
  type: 'heading' | 'paragraph' | 'list' | 'table' | 'quote' | 'code' | 'image';
  level?: 1 | 2 | 3 | 4; // For headings
  content?: string | string[]; // For text, paragraphs, lists
  items?: string[]; // For lists
  ordered?: boolean; // For ordered lists
  headers?: string[]; // For tables
  rows?: string[][]; // For tables
  language?: string; // For code blocks
  alt?: string; // For images
  caption?: string; // For images/tables
}

export interface BlogPost {
  slug: string;
  meta: BlogMeta;
  sections: BlogSection[];
  readingTime: string;
}

// Calculate reading time
function calculateReadingTime(sections: BlogSection[]): string {
  let wordCount = 0;
  
  sections.forEach(section => {
    if (section.content) {
      if (Array.isArray(section.content)) {
        wordCount += section.content.join(' ').split(/\s+/).length;
      } else {
        wordCount += section.content.split(/\s+/).length;
      }
    }
    if (section.items) {
      wordCount += section.items.join(' ').split(/\s+/).length;
    }
  });
  
  const minutes = Math.ceil(wordCount / 200);
  return `${minutes} min read`;
}

// Get all blog slugs
export function getAllBlogSlugs(): string[] {
  const files = fs.readdirSync(BLOGS_PATH);
  return files
    .filter((file) => file.endsWith('.json'))
    .map((file) => file.replace('.json', ''));
}

// Get blog by slug
export async function getBlogBySlug(slug: string): Promise<BlogPost> {
  const filePath = path.join(BLOGS_PATH, `${slug}.json`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContent);
  
  const readingTime = calculateReadingTime(data.sections);

  return {
    slug,
    meta: data.meta,
    sections: data.sections,
    readingTime,
  };
}

// Get all blogs with metadata
export function getAllBlogs(): BlogPost[] {
  const slugs = getAllBlogSlugs();
  
  const blogs = slugs.map((slug) => {
    const filePath = path.join(BLOGS_PATH, `${slug}.json`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    const readingTime = calculateReadingTime(data.sections);

    return {
      slug,
      meta: data.meta,
      sections: data.sections,
      readingTime,
    };
  });

  // Sort by date (newest first)
  return blogs.sort((a, b) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });
}
