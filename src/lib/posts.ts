import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = join(process.cwd(), 'content/posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export function getAllPosts(): Post[] {
  // Get file names under /posts
  const fileNames = readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = join(postsDirectory, fileName);
    const fileContents = readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = join(postsDirectory, `${slug}.md`);
    const fileContents = readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content: contentHtml
    };
  } catch {
    console.error('Error loading posts');
    return null;
  }
} 