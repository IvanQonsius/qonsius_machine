'use client'; // This component should run on the client side

import { useEffect, useState } from 'react'; // Import hooks
import { useSession } from 'next-auth/react'; // Import useSession to manage authentication
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import MembersLayout from '@/app/components/MemberLayout'; // Import your MembersLayout
import withAuth from '@/app/components/withAuth'; // Ensure withAuth is properly configured

const UserProfile = ({ params }) => {
  const [profileData, setProfileData] = useState(null); // State to hold the fetched profile data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  const { data: session, status } = useSession(); // Manage the session
  const router = useRouter();

  // Fetch user profile data based on the ID
  useEffect(() => {
    if (status === 'unauthenticated') {
      // Redirect to login if not authenticated
      router.push('/auth/login');
    }

    if (status === 'authenticated') {
      const fetchProfile = async () => {
        setLoading(true); // Set loading to true before fetching
        try {
          // Fetch profile data from the app route (not API)
          const response = await fetch(`/members-only/profile/${params.id}/api`); // Adjust this endpoint based on your app route
          
          // Log the response to the console for debugging
          console.log('Response:', response);

          if (!response.ok) {
            throw new Error('Failed to fetch user data'); // Handle fetch errors
          }

          const data = await response.json();
          setProfileData(data); // Update the state with the fetched data
        } catch (error) {
          setError(error.message); // Update error state
          console.error('Error fetching profile data:', error); // Log errors to the console
        } finally {
          setLoading(false); // Set loading to false after fetching is done
        }
      };

      fetchProfile(); // Fetch profile on component mount
    }
  }, [params.id, status, router]);

  // Handle loading and error states
  if (loading) {
    return <div>Loading...</div>; // Show a loading state while the data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if fetching failed
  }

  // Ensure profileData exists before rendering
  if (!profileData) {
    return <div>No profile data found.</div>;
  }

  return (
    <MembersLayout> {/* Wrap with MembersLayout */}
      <div className="profile-container max-w-4xl mx-auto mt-8">
        <h1>Welcome to your profile, {profileData.name} {profileData.lastName}</h1>
        <p>Email: {profileData.email}</p>
        <p>Created At: {new Date(profileData.createdAt).toLocaleString()}</p>
        <p>Updated At: {new Date(profileData.updatedAt).toLocaleString()}</p>
        {/* Display additional profile information here */}
      </div>
    </MembersLayout>
  );
};

export default withAuth(UserProfile); // Use withAuth to protect the route
