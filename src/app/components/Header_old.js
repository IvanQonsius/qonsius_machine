'use client'; // Add this line to make it a Client Component

import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-black text-white">
            <div className="flex h-16 items-center justify-between max-w-4xl mx-auto">
                {/* Left Cell with Logo */}
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mt-[-7px]">
                        <Link href="/" className="hover:text-gray-400 transition-colors">
                            qonsius
                        </Link>
                    </h1>
                </div>

                {/* Right Cell with Links */}
                <nav className="flex items-center">
                    <ul className="flex text-md items-center space-x-4 m-0 p-0">
                        {/* Navigation Links */}
                        <li>
                            <Link 
                                href="/static/about" 
                                className="text-white text-md font-bold hover:text-gray-400 transition-colors leading-tight h-full flex items-center"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/static/research" 
                                className="text-white text-md font-bold hover:text-gray-400 transition-colors leading-tight h-full flex items-center"
                            >
                                R&D
                            </Link>
                        </li>

                        {/* Login Link */}
                        <li>
                            <Link 
                                href="/auth/login" 
                                className="text-white text-md font-bold hover:text-gray-400 transition-colors leading-tight h-full flex items-center"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
