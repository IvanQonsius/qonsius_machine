'use client'; // This is a client component

import { SessionProvider } from 'next-auth/react'; // Import the SessionProvider

export default function SessionWrapper({ children }) {
    console.log('SessionWrapper initialized'); // Add this log to check if SessionWrapper is rendering
  
    return (
    <SessionProvider>
      {children}  {/* Render the children passed to this component */}
    </SessionProvider>
  );
}
