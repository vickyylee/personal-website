'use client';

import React from 'react';

export default function Thoughts() {
  return (
    <div className="max-w-4xl mx-auto pt-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Thoughts</h1>
      <div className="space-y-8">
        <article className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            The Intersection of Technology and Policy
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Exploring how technological decisions impact society and how we can build better systems...
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Posted on March 15, 2024
          </div>
        </article>
        <article className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            Building for the Public Good
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Thoughts on creating technology that serves everyone...
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Posted on March 10, 2024
          </div>
        </article>
      </div>
    </div>
  );
} 