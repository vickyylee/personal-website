import React from 'react';
// import Link from 'next/link';
// import { getAllPosts } from '@/lib/posts';

export default function Thoughts() {
  // const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto pt-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Thoughts
      </h1>
      
      <div className="text-gray-600 dark:text-gray-300 text-lg">
        Coming soon...
      </div>

      {/* Blog posts will be added here later
      <div className="space-y-8">
        {posts.map((post) => (
          <Link 
            key={post.slug}
            href={`/thoughts/${post.slug}`}
            className="block group"
          >
            <article className="border-b border-gray-200 dark:border-gray-700 pb-8 hover:bg-gray-50 dark:hover:bg-gray-800/50 p-4 rounded-lg transition-colors">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              
              <time className="text-gray-500 dark:text-gray-400 text-sm mb-3 block">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          </Link>
        ))}
      </div>
      */}
    </div>
  );
} 