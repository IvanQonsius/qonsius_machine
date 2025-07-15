'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';

export default function MemberHeader() {
  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: '/' });
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/members-only/"
          className="text-2xl font-bold hover:text-gray-400"
        >
          qonsius
        </Link>
        <button
          onClick={handleLogout}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
