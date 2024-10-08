'use client'; // This ensures the component works on the client side

import { useState } from 'react';
import { signIn } from 'next-auth/react'; // Import signIn for NextAuth authentication
import { useRouter } from 'next/navigation'; // For navigation after login

export default function Login() {
  const [email, setEmail] = useState('');        // State for email input
  const [password, setPassword] = useState('');  // State for password input
  const [error, setError] = useState(null);      // State for error handling
  const router = useRouter();                    // For redirecting after successful login

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from submitting the traditional way
    setError(null);     // Reset the error state

    // Sign in with NextAuth.js credentials provider
    const result = await signIn('credentials', {
      redirect: false,   // We handle the redirection manually
      email,             // Pass the email input
      password,          // Pass the password input
    });

    console.log("Result from signIn:", result); // For debugging purposes

    // Check for errors returned from NextAuth.js
    if (result?.error) {
      setError(result.error); // Display error if login fails
    } else if (result?.ok) {
      // Fetch the current session to get user details
      const response = await fetch('/api/auth/session');
      const session = await response.json();

      if (session?.user?.id) {
        // Redirect to the user's profile page using their ID
        router.push(`/members-only/profile/${session.user.id}`);
      } else {
        setError('Login successful but no user data returned.');
      }
    }
  };

  return (
    <>
      <div className="bg-black text-white flex flex-col min-h-screen">
        <div className="flex-grow flex items-center justify-center mt-12"> 
          <div className="bg-gray-900 rounded p-6 w-full max-w-sm pb-8"> 
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
              Need help?{' '}
              <a href="mailto:hello@qonsius.com" className="text-blue-400 hover:text-gray-400">
                <strong>Send us an email</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
