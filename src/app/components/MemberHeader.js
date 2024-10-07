// src/components/MemberHeader.js

'use client'; // Enable client-side interactivity

import { signOut } from 'next-auth/react'; // Import signOut to handle logout
import Link from 'next/link'; // If needed for navigation

export default function MemberHeader() {
    const handleLogout = async () => {
        try {
            await signOut({ callbackUrl: '/' }); // Logs out and redirects to the homepage
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="flex justify-between items-center">
                {/* Left Section - Logo or brand */}
                <div className="text-2xl font-bold">
                    <Link href="/members-only/" className="hover:text-gray-400">
                        qonsius
                    </Link>
                </div>

                {/* Right Section - Logout Button */}
                <nav>
                    <button
                        onClick={handleLogout}
                        className="bg-blue-600 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Logout
                    </button>
                </nav>
            </div>
        </header>
    );
}
