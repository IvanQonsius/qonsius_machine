"use client"; // Declare this file as a Client Component

import Head from 'next/head';
import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(true); // Default to true for user
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
      e.preventDefault();

      const response = await fetch("/auth/api/register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, lastName, email, password, user }),
      });

      const data = await response.json();

      if (response.ok) {
          setMessage("You are registered successfully!");
          // Optionally, redirect or reset form fields here
      } else {
          setMessage(data.error || "Registration failed.");
      }
  };

  return (
    <>
      <Head>
        <title>Register - Welcome to Qonsius</title>
      </Head>

      <div className="relative min-h-screen bg-black text-white flex flex-col">
     
        {/* Main container for the form */}
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-gray-900 rounded p-6 w-full max-w-sm">
            <h1 className="text-3xl font-semibold mb-4 text-center">Create an Account</h1>
            {message && <p className="text-red-500 mb-4 text-center">{message}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-lg text-gray-300">First Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-lg focus:outline-none text-white"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block mb-2 text-lg text-gray-300">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-lg focus:outline-none text-white"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-lg text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-lg focus:outline-none text-white"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-lg text-gray-300">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-lg focus:outline-none text-white"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="user" className="inline-flex items-center text-gray-300">
                  <input
                    type="checkbox"
                    id="user"
                    checked={user}
                    onChange={(e) => setUser(e.target.checked)}
                    className="mr-2 scale-125"
                  />
                  User
                </label>
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-gray-700 rounded text-white font-bold text-lg hover:bg-gray-600 focus:outline-none"
              >
                Register
              </button>
            </form>
            <p className="text-center text-md text-white mt-4">
              <strong>Already have an account?</strong>{' '}<br />
              <a href="/login" className="text-blue-400 hover:text-gray-400">
                <strong>Login here</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
