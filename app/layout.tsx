import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WebWave Hackathon 2025 - Code Your Way to the Future',
  description: 'Join the premier web development hackathon. Build innovative web applications, compete for amazing prizes, and connect with talented developers from around the world.',
  keywords: 'hackathon, web development, coding competition, programming, React, Node.js, JavaScript',
  authors: [{ name: 'WebWave Hackathon Team' }],
  openGraph: {
    title: 'WebWave Hackathon 2025',
    description: 'Code your way to the future. Join the premier web development hackathon.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebWave Hackathon 2025',
    description: 'Code your way to the future. Join the premier web development hackathon.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}