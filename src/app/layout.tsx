import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vicky Lee - Personal Website",
  description: "Personal website of Vicky Lee - Software Engineer and Policy Enthusiast",
  icons: {
    icon: '/globe.svg',
    apple: '/globe.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob: https://*.vercel-storage.com; connect-src 'self' https://vickyylee.com; frame-src 'self' https://docs.google.com;"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gray-50 dark:bg-gray-900 antialiased`}>
        <Navigation />
        <main className="py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
