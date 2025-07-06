// src/app/static/research/page.js
import Head from 'next/head';
import Link from 'next/link';
import PageTemplate from '@/app/components/PageTemplate';

const SECTIONS = [
  {
    title: 'Theory',
    body: `We’re building a theory of alignment that explains how well the parts of any
           system fit and work together (or don’t). It’s meant to apply at all scales,
           from physical matter to individual minds to large social systems.`,
  },
  {
    title: 'Mapping Tool',
    body: `We’re bringing the theory to life through a digital map, a dynamic system that
           can map, assess, and describe anything. It reveals patterns of alignment or
           misalignment, offering insight and guiding meaningful transformation.`,
  },
  {
    title: 'Real-World Applications',
    body: `To test its universality, we’re applying the models across a wide range of contexts
           and situations. This helps us understand how well it works in practice and
           how it can adapt to different systems and scales.`,
  },
];

export default function ResearchPage() {
  return (
    <>
      <Head>
        <title>Research &amp; Development – Qonsius</title>
        <meta
          name="description"
          content="Explore our research into alignment: from theory to tools to real-world applications."
        />
      </Head>

      <div className="bg-black text-white">
        <PageTemplate
          title="A new level of clarity"
          description="Research & Development"
        >
          {/* Images Section */}
          <div className="flex justify-center mb-12 space-x-4">
            {[
              'https://images.unsplash.com/photo-1715867155623-847902b1bbbe?q=80&w=3077&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1709764754457-4c408c4fe1b3?q=80&w=2824&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1716833322990-acbeae5cc3eb?q=80&w=2658&auto=format&fit=crop',
            ].map((src, i) => (
              <div key={i} className="w-1/3 h-48 overflow-hidden rounded">
                <img
                  src={src}
                  alt={`Research visual ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Intro Text */}
          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            Everything that exists is made of parts working together forming a unified
            whole within a larger system. But why do some systems achieve harmony and last while
            others fall into conflict and break down? We call the principle behind this
            phenomenon <strong>alignment</strong>, and it’s the central focus of our work.
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mb-12">
            We believe alignment operates <strong>universally</strong> across all levels of complexity; from
            atoms forming molecules, to ants building colonies, to new ventures finding
            market fit, to marriages lasting over decades. Our <strong>mission</strong> is to understand the
            principles of alignment and turn that understanding into tools for real-world
            transformation.
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mb-12">
            This work unfolds across three connected areas:
          </p>

          {/* Focus Areas without links */}
          <div className="border-l-2 border-gray-700 pl-6 space-y-12 mb-12">
            {SECTIONS.map(({ title, body }) => (
              <div key={title}>
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-300 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Journey Note */}
          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            For more background on our project <br />
            <Link href="/static/research/journey" className="text-blue-400 hover:underline">
              Read the full journey
            </Link>
          </p>

          {/* Call to Action */}
          <p className="text-lg leading-relaxed text-gray-300">
            If you’re interested in funding, research collaboration, or strategic partnerships, please email us{' '}
            <a
              href="mailto:hello@qonsius.com?subject=Research%20Collaboration%20Inquiry"
              className="text-blue-400 hover:underline"
            >
              hello@qonsius.com
            </a>
            
          </p>
        </PageTemplate>
      </div>
    </>
  );
}