import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function PUT(request, { params }) {
  const { name, slug, description, synonyms } = await request.json()
  const updated = await prisma.concept.update({
    where: { id: params.id },
    data: { name, slug, description, synonyms }
  })
  return NextResponse.json(updated)
}

export async function DELETE(request, { params }) {
  await prisma.concept.delete({ where: { id: params.id } })
  return NextResponse.json({ success: true })
}
