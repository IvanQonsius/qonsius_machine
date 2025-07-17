// src/app/api/ontology/[id]/route.js
import { NextResponse }    from 'next/server'
import { getServerSession } from 'next-auth/next'
// one extra ../ to account for the [id] folder:
import { authOptions }     from '../../../../../lib/auth'
import * as svc            from '@/lib/ontologyService'

export async function PUT(request, { params }) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const data = await request.json()
  const updated = await svc.updateConcept(params.id, data)
  return NextResponse.json(updated)
}

export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  await svc.deleteConcept(params.id)
  return NextResponse.json({ success: true })
}
