// src/app/static/journey/page.js
import Head from 'next/head'
import PageTemplate from '@/app/components/PageTemplate'

export default function JourneyPage() {
  return (
    <>
      <Head>
        <title>Journey – Qonsius</title>
      </Head>

      <div className="bg-black text-white">
        <PageTemplate
          title="A timeline"
          description="Research & Development / Journey"
        >
          <section id="beginning">
            <h2 className="text-2xl font-semibold mb-2">2014–2016: A Personal Beginning</h2>
            <p className="text-gray-300 leading-relaxed">
              The project began with a moment of personal introspection, a business executive who felt increasingly disconnected from the meaning and impact of his work. This disconnection sparked a deep inquiry into how individuals relate to the systems that shape their lives: from personal values and psychology, to the inner workings of businesses, and further out to the broader forces of markets and politics.
            </p>
            <p className="text-gray-300 leading-relaxed">
              One insight stood out early and clearly: entrepreneurship can serve as a powerful way to align work with a deeper sense of purpose, not only as a means of livelihood, but as a way to make a meaningful contribution to the world.
            </p>
          </section>

          <section id="action">
            <h2 className="text-2xl font-semibold mb-2">2017–2021: Turning Insight into Action</h2>
            <p className="text-gray-300 leading-relaxed">
              We transformed this insight into a practical framework called the Q-methodology, a structured approach for building ventures grounded in personal values and systemic awareness.
            </p>
            <p className="text-gray-300 leading-relaxed">
              To bring it to life, we launched two key initiatives:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                A venture builder, applying the Q-methodology to co-create startups aligned with founders' values in fields such as cleantech, the silver economy, and fintech.
              </li>
              <li>
                An investment arm, funding both our own ventures and those led by others who shared our values.
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              This phase allowed us to test the methodology in real-world conditions, demonstrating how alignment can enhance not only individual purpose, but the performance and coherence of broader systems.
            </p>
          </section>

          <section id="discovery">
            <h2 className="text-2xl font-semibold mb-2">2022–2024: A Broader Discovery</h2>
            <p className="text-gray-300 leading-relaxed">
              As we applied the Q-methodology in various ventures, new and unexpected questions arose. We began to see that alignment, initially framed as the link between individuals and their work, was showing up far beyond entrepreneurship. It echoed through natural systems, social dynamics, and even personal growth.
            </p>
            <p className="text-gray-300 leading-relaxed">
              What started as a framework for purpose-driven ventures was evolving into something larger: a principle of coherence, underlying how different elements of any system come together and function effectively. This marked a shift toward deeper research and inquiry into what we now see as a universal pattern.
            </p>
          </section>

          <section id="new-chapter">
            <h2 className="text-2xl font-semibold mb-2">2025: A New Chapter Begins</h2>
            <p className="text-gray-300 leading-relaxed">
              In 2025, we made a pivotal decision: to separate our entrepreneurial work from the research effort and focus fully on exploring the deeper patterns of alignment across all systems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This shift created space to dedicate our energy and resources to developing the emerging theory and tools behind what we now call universal alignment, a principle that may help illuminate coherence across human, organizational, and natural systems.
            </p>
          </section>
        </PageTemplate>
      </div>
    </>
  )
}
