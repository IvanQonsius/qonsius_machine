import Header from '../../components/Header'; // Adjusted import path
import Footer from '../../components/Footer'; // Adjusted import path
import Head from 'next/head';
import Link from 'next/link'; // Import Link for navigation

export default function Company() {
  return (
    <>
      <Head>
        <title>qonsius / business</title>
      </Head>

      <div className="relative min-h-screen bg-black text-white">

        {/* Main contents aligned to the header */}
        <div className="max-w-4xl mx-auto mb-auto"> {/* Ensure this matches the header's max width */}
          <div className="flex flex-col items-start"> {/* Align items to the start */}
            {/* Company and Hero Section */}
            <br />
            <p className="text-md text-gray-300">Business</p>
            <div className="flex items-center text-white mb-4">
              <h1 className="text-4xl font-bold">
                Products and services <br />bringing clarity to entrepreneurship
              </h1>
            </div>

            {/* Insert the cropped image below the h1 */}
            <div className="relative w-full h-80 overflow-hidden mb-4"> {/* Adjust height to crop */}
              <img
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Visual example"
                className="w-full h-full object-cover" // Change h-auto to h-full
                style={{ objectPosition: '30% 90%' }} // Adjust the percentage values here
              />
            </div>

            {/* Content Paragraphs */}
            <p className="text-lg mb-4 leading-relaxed text-gray-300 text-justify">
              Bringing clarity to entrepreneurship is an abstract capacity that can take many shapes and forms. We have developed the following business lines tailored to different customer’s motivations.
            </p>
        
            {/* Services Section */}
            <h2 className="text-2xl font-semibold mt-4 mb-4">Services</h2>
            <ul className="list-disc ml-5 text-lg">
              <li>Consulting companies to build a real-time market map</li>
              <li>Consulting companies on finding new businesses</li>
            </ul>

            {/* Products Section */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Products</h2>
            <ul className="list-disc ml-5 text-lg">
              <li>QonsiusOS (from here to Login)</li> 
              <li>QonsiusIdeas</li>
              <li>QonsiusDeck2.0</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}


