'use client';

import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto pt-8 md:pt-16 px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">About Me</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-3 md:mb-4 leading-relaxed">
          I recently graduated from Wellesley College with a B.A. in Computer Science and a minor in Mathematics. I&apos;m originally from South Korea
          and moved to the U.S. for college. I&apos;m working on: 
        </p>
        <ul className="list-disc pl-4 md:pl-6 text-base md:text-lg text-gray-600 dark:text-gray-300 mb-3 md:mb-4 leading-relaxed space-y-2">
          <li>Tracking new research in the AI safety/security space</li>
          <li>Following AI policy conversations (etc. export controls, U.S.-China competition & other global developments, 
            frontier industry announcements, forecasts,etc.)</li>
          <li>Developing my writing and policy foresight</li>
          <li>Finding my next good read!</li>
        </ul>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          I plan to live in the intersection of technology and public policy, exploring how we can build safe systems do we intend them to do.
        </p>
      </div>
    </div>
  );
} 