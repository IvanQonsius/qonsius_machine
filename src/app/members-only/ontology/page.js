// src/app/members-only/ontology/page.js
'use client';

import MemberLayout from '../../components/MemberLayout';
import withAuth from '../../components/withAuth';
import OntologyManager from './OntologyManager';

function OntologyPage() {
  return (
    <MemberLayout>
      <div className="flex mx-auto min-h-screen bg-gray-100 text-black">
        <main className="flex-grow p-4">
          <h1 className="text-2xl font-bold mb-4">Ontology</h1>
          <OntologyManager />
        </main>
      </div>
    </MemberLayout>
  );
}

export default withAuth(OntologyPage);
