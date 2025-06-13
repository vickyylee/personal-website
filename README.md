# Personal Website

A modern, responsive personal website built with Next.js 14, TypeScript, and Tailwind CSS. Features a clean, minimalist design with dark mode support and a blog system.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark mode support
- 📱 Mobile-first approach
- 📝 Blog system with markdown support
- ⚡ Fast page loads with Next.js
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Content:** Markdown files
- **Icons:** SVG icons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal-website.git
   ```

2. Install dependencies:
   ```bash
   cd personal-website
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
personal-website/
├── content/           # Blog posts in markdown
├── public/           # Static assets
├── src/
│   ├── app/         # Next.js app directory
│   ├── components/  # React components
│   └── lib/         # Utility functions
└── package.json
```

## Adding Blog Posts

1. Create a new markdown file in `content/posts/`
2. Add frontmatter:
   ```markdown
   ---
   title: "Your Post Title"
   date: "YYYY-MM-DD"
   excerpt: "A brief description of your post"
   ---
   ```
3. Write your content in markdown
4. The post will automatically appear in the Thoughts page

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The site is automatically deployed to Vercel when changes are pushed to the main branch.

## License

MIT License - feel free to use this code for your own personal website!

## Contact

- Website: [your-website.com](https://your-website.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
