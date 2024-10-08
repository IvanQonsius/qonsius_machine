import prisma from '../../../../../../lib/prisma'; // Correct path to your Prisma instance
import { getServerSession } from 'next-auth'; // Import session handling
import { authOptions } from '../../../../../../lib/auth'; // Correct path to your auth options

export async function GET(req, { params }) {
  const { id } = params; // Accessing params directly from the function arguments

  try {
    // Convert the id to an integer
    const userId = parseInt(id, 10); // Convert id from string to int

    // Optionally check if the user is authenticated
    const session = await getServerSession(authOptions); // Check the session if you want to secure this endpoint

    if (!session) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 }); // Return unauthorized if not authenticated
    }

    // Fetch the user by id
    const user = await prisma.individual.findUnique({
      where: {
        id: userId, // Use the converted integer
      },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    // Return the user data as JSON
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
}

// If you want to support the POST method as well, you can define it similarly
export async function POST(req, { params }) {
  // Handle the POST request here if necessary
}
