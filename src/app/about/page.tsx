'use client';

import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto pt-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
      <div className="prose dark:prose-invert">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          I'm a software engineer and policy enthusiast with a background in Computer Science and Mathematics from Wellesley College.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          My work focuses on the intersection of technology and public policy, exploring how we can build systems that better serve society.
        </p>
      </div>
    </div>
  );
} 