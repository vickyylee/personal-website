'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto pt-16">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I&apos;m Vicky Lee 👋
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          Welcome to my personal website! I studied CS and Math at Wellesley College and think a lot about how the technical choices 
          we make are shaped by and (in turn) shape the systems we live in. This guides how I approach public 
          policy to help ensure technology better serves the public.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Feel free to explore my projects, read some of my thoughts, or get in touch!
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">
              Web Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building modern, responsive websites and web applications using the latest technologies.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">
              Creative Design
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creating beautiful and intuitive user interfaces that provide great user experiences.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'Node.js',
            'Tailwind CSS',
            'Git',
            'Web Design'
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
