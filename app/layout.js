import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Social Media App',
  description:
    'Social media website using React, Tailwind, Next, HTML, and CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
