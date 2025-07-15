import localFont from "next/font/local";
import "../globals.css";
import SessionWrapper from "./SessionWrapper";
import MemberHeader from "./MemberHeader";
import Membersidebar from "./Membersidebar";

// variable‑font definitions
const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function MemberLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionWrapper>
          {/* 1) fixed header */}
          <MemberHeader />

          {/* 2) fixed sidebar */}
          <Membersidebar />

          {/**
            3) main content is padded down by the header (pt-16 = 4rem)
               and pushed right by the sidebar (ml-64 = 16rem),
               then allowed to scroll.
          **/}
          <main className="pt-16 ml-48 pr-4 py-4 pl-0 min-h-screen overflow-auto">
            {children}
          </main>
        </SessionWrapper>
      </body>
    </html>
  );
}

