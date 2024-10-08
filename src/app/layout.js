// src/app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import Header from './components/Header';
import SessionWrapper from './components/SessionWrapper';
import Footer from './components/Footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Static metadata (global for the entire site)
export const metadata = {
  title: "qonsius",
  description: "A new perspective of entrepreneurship",
  openGraph: {
    title: "qonsius",
    description: "A new perspective of entrepreneurship",
    images: [
      {
        url: "/og-image.jpg", // Add an appropriate Open Graph image path
        width: 800,
        height: 600,
        alt: "qonsius Open Graph Image",
      },
    ],
  },
  twitter: {
    title: "qonsius",
    description: "A new perspective of entrepreneurship",
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <SessionWrapper>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
