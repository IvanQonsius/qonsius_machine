'use client'

import React from 'react'
import MembersLayout from '@/app/components/MemberLayout'
import withAuth from '@/app/components/withAuth'

export default withAuth(function OntologyLayout({ children }) {
  return (
    <MembersLayout>
      {children}
    </MembersLayout>
  )
})
