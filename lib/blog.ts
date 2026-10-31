import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const BLOG_DIRECTORY = path.join(process.cwd(), 'content/blog');

export interface BlogFrontmatter {
  title: string;
  description: string;
  category: string;
  date: string;
  updated?: string;
  readTime: string;
  keywords?: string[];
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => filename.replace(/\.mdx$/, ''));
}

export function getPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIRECTORY, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const { data, content } = matter(fs.readFileSync(filePath, 'utf8'));
  return { slug, frontmatter: data as BlogFrontmatter, content };
}

export function getAllPosts(): BlogPost[] {
  return getPostSlugs()
    .map((slug) => getPost(slug))
    .filter((post): post is BlogPost => post !== null);
}

/** Last meaningful edit: `updated` when a post has been refreshed, otherwise `date`. */
export function getLastModified(frontmatter: BlogFrontmatter): string {
  return frontmatter.updated || frontmatter.date;
}

/**
 * Pulls Q&A pairs out of a post's FAQ section so they can be emitted as FAQPage schema.
 * Expected format, under a `## ...FAQ...` or `## Frequently Asked Questions` heading:
 *
 *   **Q: Question text?**
 *   A: Answer text, as a single paragraph.
 */
export function extractFaqs(content: string): BlogFaq[] {
  const section = content.match(/^##\s+.*(?:FAQ|Frequently Asked).*$([\s\S]*?)(?=^##\s|(?![\s\S]))/im);

  if (!section) {
    return [];
  }

  const faqs: BlogFaq[] = [];
  const pattern = /\*\*Q:\s*(.+?)\*\*\s*\n+A:\s*([\s\S]+?)(?=\n\s*\n|\n\*\*Q:|$)/g;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(section[1])) !== null) {
    faqs.push({
      question: match[1].trim(),
      answer: stripMarkdown(match[2]),
    });
  }

  return faqs;
}

function stripMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
