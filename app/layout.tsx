import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

/* ================================
   FONTS (DESIGN SYSTEM)
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
   SEO METADATA (LANDING PAGES)
================================ */
export const metadata: Metadata = {
  title: {
    default: 'SR Associates | Tax & GST Consultants in Delhi',
    template: '%s | SR Associates',
  },
  description:
    'SR Associates is a trusted tax consultancy firm in Delhi providing Income Tax filing, GST registration & returns, startup compliance, and NRI taxation services.',
  keywords: [
    'Tax Consultant Delhi',
    'GST Consultant Delhi',
    'Income Tax Filing Delhi',
    'GST Registration Delhi',
    'CA Firm Delhi',
    'Tax Filing India',
    'GST Returns India',
  ],
  authors: [{ name: 'SR Associates' }],
  creator: 'SR Associates',
  publisher: 'SR Associates',
  openGraph: {
    title: 'SR Associates | Tax & GST Consultants in Delhi',
    description:
      'Expert Income Tax & GST services for individuals and businesses in Delhi, India.',
    url: 'https://www.srassociates.in',
    siteName: 'SR Associates',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SR Associates | Tax & GST Consultants in Delhi',
    description:
      'Professional Income Tax & GST filing services in Delhi.',
  },
};

/* ================================
   ROOT LAYOUT (LANDING)
================================ */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Local Business Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AccountingService',
              name: 'SR Associates',
              description:
                'Tax and GST consultancy firm in Delhi offering income tax filing, GST compliance, and advisory services.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Delhi',
                addressRegion: 'Delhi',
                addressCountry: 'IN',
              },
              areaServed: {
                '@type': 'Place',
                name: 'Delhi NCR',
              },
              serviceType: [
                'Income Tax Filing',
                'GST Registration',
                'GST Returns',
                'Startup Compliance',
                'NRI Taxation',
              ],
            }),
          }}
        />
      </head>

      <body className="bg-charcoal text-offwhite antialiased">
        {/* Main Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
