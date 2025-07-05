
export default function Home() {
  return (

      <div className="relative flex flex-col">
        {/* Background video container with reduced height */}
        <div className="relative" style={{ height: '85vh' }}> {/* Set the video container height to 85% of the viewport */}
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 object-cover w-full h-full"
          >
            <source src="https://assets.mixkit.co/videos/17739/17739-720.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content overlay with transparent background */}
          <div className="relative bg-black bg-opacity-50 h-full flex justify-center items-center">
            {/* Core Message Section with transparent background */}
            <section className="p-8">
              <div className="max-w-4xl mx-auto flex flex-col justify-start items-start h-auto">
                <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg">
                  <h1 className="text-4xl font-bold text-white mb-4">
                    A new perspective of things
                  </h1>
                  <p className="text-lg text-white mb-6">
                  Explore how systems thrive (or break down) and how a new framework and digital map help bring clarity, meaning, and progress to everything from personal decisions to global challenges
                  </p>

                  {/* CTA Button */}
                  <a
                    href="#"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mb-auto"
                  >
                    Get to know our work
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer should now be directly below the content */}
      </div>
  );
}


