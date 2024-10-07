import localFont from "next/font/local";
import "../globals.css"; // Ensure the path to globals.css is correct
import MemberHeader from './MemberHeader'; // Use MemberHeader for the top header
import SessionWrapper from './SessionWrapper';
import Membersidebar from './Membersidebar'; // Import Sidebar component

// Define fonts just like in the global layout
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <SessionWrapper>
          <MemberHeader /> {/* Header with logout link */}
          <div className="flex flex-grow"> {/* This flex container will allow for the sidebar and main content */}
            <aside className="w-64 bg-gray-200"> {/* Sidebar with fixed width */}
              <Membersidebar /> {/* Sidebar for member navigation */}
            </aside>
            <main className="flex-grow p-4"> {/* Main content area */}
              {children} {/* Render the content of the members-only pages */}
            </main>
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}

