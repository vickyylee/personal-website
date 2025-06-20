'use client';

import React from 'react';

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto pt-8 md:pt-16 px-6 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-medium text-gray-800 dark:text-white mb-2">SecureLLM: Using Compositionality to Build Provably Secure Language Models</h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">
            Research paper on building provably secure language models for private, sensitive, and secret data. Third author on this work that introduces a new approach to LLM security through compositional fine-tuning.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              Research & Technical Writing
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              AI Safety
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              LLMs
            </span>
          </div>
          <div className="mt-4">
            <a 
              href="https://arxiv.org/abs/2405.09805"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Read the paper
            </a>
          </div>
        </div>
        <div className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-medium text-gray-800 dark:text-white mb-2">CS350: Exploration of AI Safety</h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">
            A culminating report on my exploration of AI safety considerations over my independent study the fall of my senior year.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              Research & Technical Writing
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              Tech to Policy
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
        <div className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-medium text-gray-800 dark:text-white mb-2">Personal Website</h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">
            You&apos;re here! More coming soon.
            <br />
            Built with Next.js and deployed on Vercel.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              Web Development
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              Git
            </span>
          </div>
          <div className="mt-4 space-y-2">
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
            <br />
            <a 
              href="https://github.com/vickyylee/personal-website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View source code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 