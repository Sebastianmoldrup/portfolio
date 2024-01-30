import type { Metadata } from 'next';
import { Catamaran } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const catamaran = Catamaran({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sebastian Møldrup',
  description: 'Generated by Sebastian Møldrup',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={catamaran.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
