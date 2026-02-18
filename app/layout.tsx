import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'C Programming Tutorial - Complete Guide',
  description: 'Complete C Programming Tutorial - 90+ Examples for Beginners',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
