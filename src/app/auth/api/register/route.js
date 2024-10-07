// app/api/auth/register/route.js
import prisma from '../../../../../lib/prisma'; 
import bcrypt from 'bcryptjs'; // Change this line

export async function POST(req) {
    const { name, lastName, email, password, user } = await req.json();

    // Check if the email already exists
    const existingUser = await prisma.individual.findUnique({
        where: { email },
    });

    if (existingUser) {
        return new Response(JSON.stringify({ error: "Email already in use." }), { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const individual = await prisma.individual.create({
        data: {
            name,
            lastName,
            email,
            password: hashedPassword,
            user: user, // Set user based on checkbox value
        },
    });

    return new Response(JSON.stringify({ individual }), { status: 201 });
}
