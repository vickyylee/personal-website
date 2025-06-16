'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto pt-8 md:pt-16 px-6 md:px-6">
      <section className="mb-8 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
          Welcome! My name is Vicky 👋
        </h1>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-3 md:mb-4">
          I think a lot about how the technical choices we make are shaped by and 
          (in turn) shape the systems we live in. This guides how I approach public 
          policy to help ensure technology better serves the public.
        </p>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
          Feel free to explore my projects, read some of my thoughts, or get in touch!
        </p>
      </section>

      <section className="mb-8 md:mb-16">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-medium text-gray-800 dark:text-white mb-2">
              ML Engineering & Research
            </h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            I have conducted AI research across academia, government, and industry, applying machine learning to real-world challenges.
            I believe in using technology thoughtfully to create positive impact and enjoy the complex problem-solving it often demands.
            </p>
          </div>
          <div className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-medium text-gray-800 dark:text-white mb-2">
              AI Policy Research & Writing
            </h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
              I explore possibilities for international cooperation around AI, with a particular focus on the national security 
              implications of AI development and integration. I aspire to be an expert in translating complex technological concepts
              into accessible language to inform and shape policy conversations.
            </p>
          </div>
          <div className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-medium text-gray-800 dark:text-white mb-2">
              Teach & Volunteer
            </h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            I am passionate about giving back through teaching and volunteering. I have taught AI and technology skills to underserved 
            communities and supported local initiatives such as homeless shelters. If you&apos;re seeking volunteers with my experience, 
            please feel free to reach out!
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            'Languages: Python, Go, Java',
            'Data Analysis & ML Stack',
            'Software Development Tools',
            'Technical Writing, Policy Analysis, Public Speaking',
            'Fluent in Korean'
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
