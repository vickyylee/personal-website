'use client';

import React from 'react';

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto pt-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-medium text-gray-800 dark:text-white mb-2">Personal Website</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            You're here! More coming soon.
          </p>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              Next.js
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              Git
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              Vercel
            </span>
          </div>
          <div className="mt-4">
            <a 
              href="https://vickyylee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Visit website
            </a>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-medium text-gray-800 dark:text-white mb-2">CS350: Exploration of AI Safety</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A culminating report on my exploration of AI safety considerations over my independent study the fall of my senior year.
          </p>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              Research
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              Technical Writing
            </span>
          </div>
          <div className="mt-4">
            <a 
              href="https://docs.google.com/document/d/1FYh3LJ0fviPa-KXztewivbzFpGnMOqWAUwX2dtYXU3E/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Read the report
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 