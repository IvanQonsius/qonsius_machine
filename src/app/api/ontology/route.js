import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET() {
  const concepts = await prisma.concept.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return NextResponse.json(concepts)
}

export async function POST(request) {
  const { name, slug, description, synonyms } = await request.json()
  const created = await prisma.concept.create({
    data: { name, slug, description, synonyms }
  })
  return NextResponse.json(created)
}
