// Import NextAuth and Prisma Client
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const POST = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Enter your email' },
        password: { label: 'Password', type: 'password', placeholder: 'Enter your password' },
      },
      authorize: async (credentials) => {
        console.log("Authorization process started");
        try {
          // Find the user by email in the Prisma database
          const user = await prisma.individual.findUnique({
            where: {
              email: credentials.email,
            },
          });

          // If no user is found or password is invalid, throw an error
          if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
            console.error("Invalid credentials provided"); // Log invalid credentials
            throw new Error('Invalid email or password'); // Generalized error message
          }

          // Log the authenticated user information
          console.log("Authenticated user:", {
            id: user.id,
            email: user.email,
            name: user.name,
            lastName: user.lastName,
          });

          // Return the user object if valid
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            lastName: user.lastName,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          throw new Error('Authorization failed'); // More specific error for debugging
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login', // Custom login page
  },
  secret: process.env.NEXTAUTH_SECRET, // Store in .env
  session: {
    strategy: 'jwt', // Use JWT to persist the session
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Add user id to the token
        console.log("JWT token created:", token); // Log token details for debugging
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id; // Ensure user id is in session
        console.log("Session created:", session); // Log session details for debugging
      }
      return session;
    },
  },
});

// Ensure that the POST method is also available as GET (needed for Next.js App Router)
export { POST as GET };
