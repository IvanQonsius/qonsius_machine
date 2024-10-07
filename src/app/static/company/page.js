import Head from 'next/head';
import Link from 'next/link'; // Import Link for navigation

export default function Company() {
  return (
    <>
      <Head>
        <title>Labs - Qonsius</title>
      </Head>

      <div className="relative min-h-screen bg-black text-white">
      
        {/* Main contents aligned to the header */}
        <div className="max-w-4xl mx-auto"> {/* Ensure this matches the header's max width */}
          <div className="flex flex-col items-start"> {/* Align items to the start */}
            {/* Company and Hero Section */}
            <br />
            <p className="text-md text-gray-300 mt-4 ">Company</p>
            <div className="flex items-center text-white mb-4">
              <h1 className="text-6xl font-bold">
                Know thyself
              </h1>
            </div>

            {/* Insert the cropped image below the h1 */}
            <div className="relative w-full h-80 overflow-hidden mb-4"> {/* Adjust height to crop */}
            <img
              src="https://plus.unsplash.com/premium_photo-1722728055718-20684f6bddbb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Visual example"
              className="w-full h-full object-cover" // Change h-auto to h-full
              style={{ objectPosition: '20% 50%' }} // Adjust the percentage values here
            />
          </div>

            {/* Content Paragraphs */}
            <p className="text-lg mb-4 leading-relaxed text-gray-300 text-justify">
              As the digital age advances, humanity is presented with an unprecedented opportunity to leverage information technology to gain clarity - about ourselves, about the rest out there and about finding meaning in the interactions between both. Despite the diversity of subjective motivations we all have, we believe that this new level of <strong>tech-based awareness</strong> can become one of the key innovations that enables authentic and richer lives, full of satisfaction and fulfillment. 
            </p>
    
            <p className="text-lg mb-4 leading-relaxed text-gray-300 text-justify">
              This is particularly relevant in <strong>entrepreneurship</strong>, probably the strongest lever for individual and collective prosperity. We see a growing interest in launching new ventures over the past few decades and yet, too many of these efforts fail to survive beyond a few years. We argue that the root cause for this is a lack of “entrepreneurial clarity” which, in turn, leads to flawed decision-making and eventually to counterproductive behavior and undesired consequences.
            </p>

            <p className="text-lg mb-4 leading-relaxed text-gray-300 text-justify mb-4">
              <strong>Helping the world to gain clarity in entrepreneurship</strong> is no easy feat but we (humbly) founded qonsius to tap into this potential.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}





