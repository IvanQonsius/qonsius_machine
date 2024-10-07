/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET, // Environment variable for NextAuth.js secret
      DATABASE_URL: process.env.DATABASE_URL,       // Prisma database connection string
    },
  };
  
  export default nextConfig;
  