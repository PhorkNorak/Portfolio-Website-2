'use client';

import { Inter } from 'next/font/google';
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Phork Norak - Data Scientist and AI Engineer Portfolio" />
        <meta name="keywords" content="Data Science, AI, Machine Learning, Portfolio, Software Development" />
        <meta name="author" content="Phork Norak" />
        <meta property="og:title" content="Phork Norak - Data Scientist Portfolio" />
        <meta property="og:description" content="Portfolio showcasing data science and AI engineering projects" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <title>Phork Norak - Data Scientist Portfolio</title>
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`} suppressHydrationWarning>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster position="bottom-right" />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
