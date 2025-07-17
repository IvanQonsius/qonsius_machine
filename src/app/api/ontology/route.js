// src/app/api/ontology/route.js
import { NextResponse }    from 'next/server'
import { getServerSession } from 'next-auth/next'
// relative path back to root/lib/auth.js:
import { authOptions }     from '../../../../lib/auth'
import * as svc            from '@/lib/ontologyService'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const items = await svc.listConceptsForUser(session.user.id)
  return NextResponse.json(items)
}

export async function POST(request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const data = await request.json()
  const created = await svc.createConceptForUser(session.user.id, data)
  return NextResponse.json(created, { status: 201 })
}
