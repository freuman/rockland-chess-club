import type { Metadata } from "next";
import { Playfair_Display, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville",
  display: "swap",
});

// The staging site at rccc.freuman.com sets NEXT_PUBLIC_SITE_ENV=staging so it
// stays out of search results and never competes with rocklandchess.org.
const isStaging = process.env.NEXT_PUBLIC_SITE_ENV === 'staging'

export const metadata: Metadata = {
  robots: isStaging ? { index: false, follow: false } : undefined,
  title: "Rockland County Chess Club | Chess Community in Rockland County",
  description: "Join the Rockland County Chess Club - a welcoming chess community for players of all skill levels. Events, classes, tournaments, and casual play in Rockland County, NY.",
  keywords: "chess club, Rockland County, chess lessons, chess tournaments, chess community, New York chess",
  openGraph: {
    title: "Rockland County Chess Club",
    description: "A welcoming chess community for players of all skill levels",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${libreBaskerville.variable} font-serif antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        
      </body>
    </html>
  );
}
