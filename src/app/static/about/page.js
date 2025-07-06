// src/app/static/company/page.js
import Head from 'next/head'
import Link from 'next/link'
import PageTemplate from '@/app/components/PageTemplate'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About – Qonsius</title>
      </Head>

      <div className="bg-black text-white">
        <PageTemplate
          title="Get to know us"
          description="About"
        >
          {/* Hero image */}
          <div className="relative w-full h-80 overflow-hidden mb-8">
            <img
              src="https://plus.unsplash.com/premium_photo-1722728055718-20684f6bddbb?q=80&w=2940&auto=format&fit=crop"
              alt="Abstract systems visual"
              className="w-full h-full object-cover"
              style={{ objectPosition: '20% 50%' }}
            />
          </div>

          {/* Subsections */}
          <div className="space-y-8 mt-8">
            {/* Company */}
            <section id="company">
              <h2 className="text-2xl font-semibold mb-2">Company</h2>
              <p className="text-gray-300">
                Qonsius Capital SL <br />
                ID B88183447
              </p>
              <Link
                href="/static/legal"
                className="text-blue-400 hover:underline"
              >
                View legal details
              </Link>
            </section>

            {/* Team */}
            <section id="team">
              <h2 className="text-2xl font-semibold mb-2">Team</h2>
              <p className="text-gray-300 mb-2">
                Meet the thinkers and builders behind the initiative.
              </p>
              <Link
                href="/static/about/team"
                className="text-blue-400 hover:underline"
              >
                View team
              </Link>
            </section>
          </div>
        </PageTemplate>
      </div>
    </>
  )
}
