'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Membersidebar() {
  const { data: session, status } = useSession();

  // while loading, keep the same fixed layout
  if (status === 'loading') {
    return (
      <div className="fixed top-16 left-0 bottom-0 w-48 bg-gray-800 text-white">
        <div className="p-4">Loading menu…</div>
      </div>
    );
  }

  const userId = session?.user?.id;

  return (
    <div className="fixed top-16 left-0 bottom-0 w-48 bg-gray-800 text-white overflow-auto">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul>
          {userId && (
            <li className="mb-2">
              <Link
                href={`/members-only/profile/${userId}`}
                className="hover:text-gray-300 block"
              >
                Profile
              </Link>
            </li>
          )}
          <li className="mb-2">
            <Link
              href="/members-only/ontology"
              className="hover:text-gray-300 block"
            >
              Ontology
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

