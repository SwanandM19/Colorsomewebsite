import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Lumina Studio',
  description: 'Digital experiences for web, mobile and beyond.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-[#fbfbfb] text-gray-900 font-sans antialiased selection:bg-gray-200 flex flex-col overflow-x-hidden">
        <Script
          src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"
          strategy="afterInteractive"
        />
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
