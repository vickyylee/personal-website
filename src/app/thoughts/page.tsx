import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Thoughts() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto pt-8 md:pt-16 px-6 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
        Thoughts
      </h1>
      
      <div className="space-y-6 md:space-y-8">
        {posts.map((post) => (
          <Link 
            key={post.slug}
            href={`/thoughts/${post.slug}`}
            className="block group"
          >
            <article className="border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8 hover:bg-gray-50 dark:hover:bg-gray-800/50 p-3 md:p-4 rounded-lg transition-colors">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              
              <time className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2 md:mb-3 block">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
} 