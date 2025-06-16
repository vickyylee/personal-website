'use client';

import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto pt-8 md:pt-16 px-6 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">Contact Me</h1>
      <div className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
          I&apos;m always interested in hearing and learning from others. Feel free to reach out!
        </p>
        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center gap-2 md:gap-3">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:your.email@example.com" className="text-sm md:text-base text-blue-600 dark:text-blue-400 hover:underline">
              yl108@wellesley.edu
            </a>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <Link 
              href="https://www.linkedin.com/in/yerim-vicky-lee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm md:text-base text-blue-600 dark:text-blue-400 hover:underline"
            >
              linkedin.com/yerim-vicky-lee
            </Link>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm md:text-base text-gray-600 dark:text-gray-300">
              Location: (Currently) New York, NY
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 