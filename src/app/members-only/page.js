'use client'; // Mark this file as a Client Component

import MemberLayout from '../components/MemberLayout'; // Import MemberLayout
import withAuth from '../components/withAuth'; // Import the withAuth HOC for authentication

const MembersOnly = () => {
  return (
    <MemberLayout> {/* Wrap the entire content with MemberLayout */}
      <div className="flex mx-auto min-h-screen bg-gray-100 text-black">

        {/* Main Content Area */}
        <main className="flex-grow p-4">
          <h1 className="text-3xl font-bold">Welcome to the Members-Only Area</h1>
          {/* Add more members-only content here */}
        </main>
      </div>
    </MemberLayout>
  );
};

// Export the MembersOnly page wrapped with the withAuth HOC
export default withAuth(MembersOnly);
