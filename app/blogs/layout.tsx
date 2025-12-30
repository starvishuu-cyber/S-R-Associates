import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

import Nav from '../sections/Navbar';
import { Footer } from '../sections/Footer';



/* ================================
   FONTS (BLOG TYPOGRAPHY)
================================ */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

/* ================================
   BLOG METADATA (GENERIC)
   Individual posts override this
================================ */
export const metadata: Metadata = {
  title: {
    default: 'Tax & GST Insights | SR Associates',
    template: '%s | Tax Blog',
  },
  description:
    'Expert insights on Income Tax, GST compliance, startup taxation, and NRI taxation in India.',
  keywords: [
    'GST Blog',
    'Income Tax Blog India',
    'Tax Filing Articles',
    'GST Compliance Guide',
    'Indian Tax Laws',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'SR Associates Blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-charcoal text-offwhite antialiased">
        {/* Site Navigation */}
        <Nav />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-charcoal">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
