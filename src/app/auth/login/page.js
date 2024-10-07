'use client'; // Needed for client-side functionality in Next.js App Directory

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // In Next.js App Directory, use this for navigation
import Head from 'next/head';

export default function Login() {
  const [email, setEmail] = useState('');        // State for email
  const [password, setPassword] = useState('');  // State for password
  const [error, setError] = useState(null);      // State for error handling
  const router = useRouter();                    // For redirecting after login

  // Handle form submission and authentication
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(null);     // Reset error state

    // Sign in with NextAuth.js credentials provider
    const result = await signIn('credentials', {
      redirect: false,   // We handle redirects manually
      email,             // Send email
      password,          // Send password
    });

    // Check for errors returned from NextAuth.js
    if (result?.error) {
      setError(result.error); // Show error if login fails
    } else {
      // If successful, redirect to members-only page or another protected page
      router.push('/members-only');
    }
  };

  return (
    <>
      <Head>
        <title>Login - Qonsius</title>
      </Head>

      <div className="bg-black text-white flex flex-col min-h-screen">
        {/* Add spacing between header and form */}
        {/* Login Form Wrapper */}
        <div className="flex-grow flex items-center justify-center mt-12"> {/* Adjust margin-top for spacing */}
          <div className="bg-gray-900 rounded p-6 w-full max-w-sm pb-8"> {/* Adjust padding-bottom for spacing */}
            <h2 className="text-3xl font-semibold mb-4 text-center">Welcome back</h2>

            {/* Display error if login fails */}
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            {/* Login Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-lg text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-lg focus:outline-none text-white"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-lg text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-lg focus:outline-none text-white"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full p-2 bg-gray-700 rounded text-white text-lg font-bold hover:bg-gray-600 focus:outline-none"
              >
                Login
              </button>
            </form>

            <p className="text-center text-md text-white mt-4">
              We provide an invite-only section for members. If you need assistance with your access{' '}
              <a href="mailto:hello@qonsius.com" className="text-blue-400 hover:text-gray-400">
                <strong>send us an email</strong>
              </a>
            </p>
          </div>
        </div>
        {/* Footer will automatically appear below the form */}
      </div>
    </>
  );
}
