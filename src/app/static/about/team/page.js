// src/app/static/team/page.js
import Head from 'next/head'
import PageTemplate from '@/app/components/PageTemplate'

const TEAM = [
  {
    name: 'Ivan Rubio',
    title: 'Founder',
    img: '/images/IvanBlack.jpg',
    bio: 'Ivan is driven by a lifelong passion for uncovering the hidden structures that underlie complex information systems and delivering uncompromising clarity. Over two decades, he’s navigated worlds as diverse as academic research, hands-on entrepreneurship, cutting-edge science, and deep spiritual inquiry. Along the way, he’s been fortunate to learn directly from world-renowned mentors, refining his ability to translate abstract ideas into real-world impact.',
    linkedin: 'https://www.linkedin.com/in/ivan-rubio-79bb4b37/',
  },

];

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Team – Qonsius</title>
      </Head>

      <div className="bg-black text-white">
        <PageTemplate
          title="Meet the team"
          description="Team"
        >
          {/* Add vertical spacing between the title and the grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {TEAM.map(member => (
              <div key={member.name} className="flex flex-col items-start space-y-2">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover object-[30%_20%]"
                />
                <h2 className="text-2xl font-semibold">{member.name}</h2>
                <p className="text-gray-400">{member.title}</p>
                <p className="text-gray-300 leading-relaxed">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </PageTemplate>
      </div>
    </>
  )
}



