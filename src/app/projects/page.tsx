'use client';

import React from 'react';

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto pt-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-medium text-gray-800 dark:text-white mb-2">Project 1</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Description of your first project goes here.
          </p>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              TypeScript
            </span>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-medium text-gray-800 dark:text-white mb-2">Project 2</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Description of your second project goes here.
          </p>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              Next.js
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              Tailwind
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 