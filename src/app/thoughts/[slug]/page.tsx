import React from 'react';
import Link from 'next/link';
import { getPostBySlug } from '@/lib/posts';

interface PageParams {
  slug: string;
}

export default async function BlogPost({
  params,
}: {
  params: PageParams;
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto pt-16 px-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Post Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link 
          href="/thoughts"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Thoughts
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pt-16 px-6">
      <Link 
        href="/thoughts"
        className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
      >
        ← Back to Thoughts
      </Link>
      
      <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        
        <time className="text-gray-500 dark:text-gray-400 mb-8 block">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        
        <div 
          className="text-gray-600 dark:text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-400">
          I&apos;m currently working on a blog post about this topic. Check back soon!
        </p>
      </div>
    </div>
  );
} 