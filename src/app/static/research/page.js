import Head from 'next/head';
import Link from 'next/link'; // Import Link for navigation

export default function Labs() {
  return (
    <>
      <Head>
        <title>Welcome to qonsius</title>
      </Head>

      <div className="relative min-h-screen bg-black text-white max-w-4xl mx-auto">
        <br />
        {/* Hero Section */}
        <br />

        <p className="flex text-gray-300 mt-4">Research</p>
        <div className="flex items-center h-10vh">
          <h1 className="text-6xl font-bold">
            A new level of understanding
          </h1>
        </div>

        {/* Images Section */}
        <div className="flex justify-center max-w-4xl mx-auto mt-8 space-x-4 mb-4">
          <div className="w-1/3">
            <img
              src="https://images.unsplash.com/photo-1715867155623-847902b1bbbe?q=80&w=3077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
              alt="Description for image 1"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="w-1/3">
            <img
              src="https://images.unsplash.com/photo-1709764754457-4c408c4fe1b3?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
              alt="Description for image 2"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="w-1/3">
            <img
              src="https://images.unsplash.com/photo-1716833322990-acbeae5cc3eb?q=80&w=2658&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
              alt="Description for image 3"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>

        {/* Main contents */}
        <div className="max-w-4xl mx-auto"> 
          <p className="text-lg mb-4 leading-relaxed text-gray-300 text-justify">
          At our core, we are a research project dedicated to advancing our understanding of existence through the development of conceptual models. Our aim is to develop a philosophy that not only explains the profound truths underlying all forms of existence but also provide actionable insights for practical application in diverse contexts. By focusing first on universal existence and its implications, we seek to build a comprehensive body of knowledge that integrates the interconnectedness of the cosmos, web of life, individual experience, social systems, and technology. We believe that by deeply exploring these concepts, we can contribute to the creation of systems and models that guide individuals, organizations, and societies toward more positive and harmonious futures.
          </p>
  
          <p className="text-lg mb-4 leading-relaxed text-gray-300 text-justify mb-8">
          See below the different active research projects:
          </p>

          {/* Vertically stacked Project Cards */}
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  
          <Link href="/artifacts/artifact3">
            <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 hover:text-white transition-colors duration-300">
              <p className="text-gray-400">Classification</p>
              <h3 className="text-xl font-bold mb-2 italic">Project "Discipla"</h3>
              <p className="text-gray-300 mb-2 text-justify">
                Explores all existing disciplines in human knowledge, covering both humanities, techno-scientific, and including inter-disciplinary. The objective of the research is to create a list of domains, possible subject of study and focus.
              </p>
            </div>
          </Link>

          <Link href="/artifacts/artifact3">
            <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 hover:text-white transition-colors duration-300">
              <p className="text-gray-400">Glossary</p>
              <h3 className="text-xl font-bold mb-2 italic">Project "Lexis"</h3>
              <p className="text-gray-300 mb-2 text-justify">
              Develop a comprehensive glossary that defines and standardizes key terms across the different projects. By creating clear, concise definitions, the project seeks to eliminate ambiguity, ensuring consistent understanding and communication among stakeholders
              </p>
            </div>
          </Link>

          <Link href="/artifacts/artifact1">
            <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 hover:text-white transition-colors duration-300">
              <p className="text-gray-400">Visual language</p>
              <h3 className="text-xl font-bold mb-2 italic">Project "Z"</h3>
              <p className="text-gray-300 mb-2 text-justify">
                Explores the structure and behavior of any domain within reality at any scale and timeframe. The objective of the research is to build a model that can be used to understand and explain anything from simple to complex, from formation to dissolution.
              </p>
            </div>
          </Link>

          <Link href="/artifacts/artifact2">
            <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 hover:text-white transition-colors duration-300">
              <p className="text-gray-400">Visual language</p>
              <h3 className="text-xl font-bold mb-2 italic">Project "X"</h3>
              <p className="text-gray-300 mb-2 text-justify">
                Explores any initiative of entrepreneurship by applying the model defined in Project "Z". The objective of the research is to build a model that can be used to understand and explain any initiative to find, launch, and scale any new venture into any market.
              </p>
            </div>
          </Link>

        </div>
        </div>
      </div>
    </>
  );
}
