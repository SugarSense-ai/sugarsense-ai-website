import { FaCube } from "react-icons/fa";

const ExperienceSection = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm uppercase font-bold mb-2">Empower</h2>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Transform Your Diabetes Management Experience Today
        </h1>
        <p className="text-lg mb-12">
          At SugarSense.ai, we provide innovative tools to help you manage diabetes effectively. 
          Our AI-driven app offers personalized insights and meal plans tailored to your unique needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <FaCube size={50} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">AI-Powered Glucose Level Predictions</h3>
            <p className="text-sm text-center mb-4">
              Stay ahead of your glucose levels with our predictive analytics.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <FaCube size={50} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Customized Meal Plans for Optimal Health</h3>
            <p className="text-sm text-center mb-4">
              Enjoy meal plans designed specifically for your dietary needs.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <FaCube size={50} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">24/7 Chatbot Support for Your Queries</h3>
            <p className="text-sm text-center mb-4">
              Get instant answers and support whenever you need it.
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center gap-4">
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded font-bold">
            Learn More
          </button>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded font-bold">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;