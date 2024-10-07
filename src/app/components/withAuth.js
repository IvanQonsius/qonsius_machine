// src/components/withAuth.js
'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

const withAuth = (WrappedComponent) => {
  console.log('withAuth function called');

  return (props) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [hasError, setHasError] = useState(false);

    console.log('withAuth session:', session);
    console.log('withAuth status:', status);

    useEffect(() => {
      if (status === 'loading') return; // Wait for session to load

      if (!session) {
        console.log('Redirecting to login due to no session');
        router.push('/auth/login');
      }
    }, [session, status, router]);

    useEffect(() => {
      const errorHandler = (error) => {
        console.error("Error occurred in withAuth:", error);
        setHasError(true);
      };

      window.addEventListener('error', errorHandler);
      return () => {
        window.removeEventListener('error', errorHandler);
      };
    }, []);

    if (hasError) {
      return <div>Something went wrong.</div>;
    }

    if (status === 'loading') {
      return (
        <div className="min-h-screen bg-black text-white flex justify-center items-center">
          <p className="text-lg text-gray-300">Checking authentication...</p>
        </div>
      );
    }

    return (
      <>
        <Head>
          <title>Members Only - Qonsius</title>
        </Head>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withAuth;
