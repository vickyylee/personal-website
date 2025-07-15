'use client';

import React from 'react';
import Link from 'next/link';

export default function Writing() {
  const writings = [
    {
      title: "No More Waiting: Modernizing USCIS for Dreamerss",
      date: "2025-05-09",
      excerpt: "An exploration of USCIS&apos;s technological hurdles in implementing the DREAM Act if it is enacted.",
      link: "https://docs.google.com/document/d/1xYNi0PGt1F9K8YuyH_2Z7fj-H0jvRa1vwwNJ7Ikv3AM/edit?usp=sharing"
    },
  ];

  return (
    <div className="max-w-4xl mx-auto pt-8 md:pt-16 px-6 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
        Writing
      </h1>
      
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Here you&apos;ll find my thoughts!
        </p>
      
      <div className="space-y-6 md:space-y-8">
        {writings.map((writing, index) => (
          <article key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 md:pb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              {writing.title}
            </h2>
            
            <time className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2 md:mb-3 block">
              {new Date(writing.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {writing.excerpt}
            </p>
            
            <Link 
              href={writing.link}
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              Read this memo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
} 