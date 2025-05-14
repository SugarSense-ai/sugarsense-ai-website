const ResultsSection = () => {
    return (
      <section className="bg-[#4a2c2a] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Proven Success Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            {/* Text Content */}
            <div>
              <h2 className="text-sm uppercase font-bold mb-2">Results</h2>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Proven Success in Diabetes Management
              </h1>
              <p className="text-lg mb-8">
                SugarSense.ai has helped users reduce their glucose levels by an average of 30%. 
                Our personalized meal plans and AI-driven insights empower better health choices.
              </p>
              <div className="flex gap-8 mb-8">
                <div>
                  <h3 className="text-3xl font-bold">30%</h3>
                  <p className="text-sm">Average reduction in glucose levels for users.</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">85%</h3>
                  <p className="text-sm">Users report improved management of their diabetes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="bg-[#e6a896] text-black px-6 py-3 rounded font-bold">Learn More</button>
                <button className="bg-transparent border border-white text-white px-6 py-3 rounded font-bold">
                  Sign Up
                </button>
              </div>
            </div>
  
            {/* Video/Image Section */}
            <div>
              <div className="relative">
                <img
                  src="https://via.placeholder.com/600x400" // Replace with your actual image URL
                  alt="Proven Success in Diabetes Management"
                  className="rounded-lg shadow-lg"
                />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white text-black rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
  
          {/* User Experiences Section */}
          <div>
            <h2 className="text-xl font-bold mb-8">User Experiences</h2>
            <p className="text-lg mb-12">
              Transforming my diabetes management with ease and confidence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-[#5a3a38] p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="User 1"
                    className="rounded-full w-12 h-12 mr-4"
                  />
                  <div>
                    <h3 className="font-bold">WPI</h3>
                    <p className="text-sm">Diabetes Advocate</p>
                  </div>
                </div>
                <p className="text-sm mb-4">
                  "SugarSense.ai has completely changed how I manage my diabetes. The personalized meal plans are a game changer!"
                </p>
                <p className="text-sm text-gray-400">Webflow</p>
              </div>
  
              {/* Testimonial 2 */}
              <div className="bg-[#5a3a38] p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="User 2"
                    className="rounded-full w-12 h-12 mr-4"
                  />
                  <div>
                    <h3 className="font-bold">WPI</h3>
                    <p className="text-sm">Health Coach</p>
                  </div>
                </div>
                <p className="text-sm mb-4">
                  "The AI predictions are spot on, making my life easier. I feel empowered to take control of my health!"
                </p>
                <p className="text-sm text-gray-400">Webflow</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ResultsSection;