import { FaCube } from "react-icons/fa";

const HowItWorksSection = () => {
  return (
    <section className="bg-[#4a2c2a] text-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm uppercase font-bold mb-2">Empower</h2>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Diabetes Management</h1>
        <p className="text-lg mb-12">
          Experience personalized diabetes care like never before.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#5a3a38] p-6 rounded-lg shadow-lg">
            <FaCube size={40} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">How It Works</h3>
            <p className="text-sm mb-4">
              Our app uses AI to predict glucose levels and create tailored meal plans for you.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-transparent border border-white text-white px-4 py-2 rounded font-bold">
                Learn More
              </button>
              <button className="bg-transparent border border-white text-white px-4 py-2 rounded font-bold">
                Sign Up
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#5a3a38] p-6 rounded-lg shadow-lg">
            <FaCube size={40} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">AI-Powered Insights for Better Health</h3>
            <p className="text-sm mb-4">
              Stay informed with real-time glucose predictions.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-transparent border border-white text-white px-4 py-2 rounded font-bold">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#5a3a38] p-6 rounded-lg shadow-lg">
            <FaCube size={40} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Personalized Meal Planning Made Easy</h3>
            <p className="text-sm mb-4">
              Enjoy meals that fit your health needs.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-transparent border border-white text-white px-4 py-2 rounded font-bold">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;