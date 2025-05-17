// filepath: c:\Users\prajw\sugarsense.ai\app\FeaturesSection.js
import { FaCube } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="bg-[#4a2c2a] text-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Diabetes Management Experience</h2>
        <p className="text-lg md:text-xl mb-12">
          Our app harnesses the power of AI to provide accurate glucose predictions and tailored meal plans. 
          Experience a new level of support in managing diabetes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <FaCube size={50} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">AI Glucose Prediction for Better Control</h3>
            <p className="text-sm text-center mb-4">
              Stay ahead of your glucose levels with our intelligent prediction technology.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <FaCube size={50} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Personalized Meal Plans Just for You</h3>
            <p className="text-sm text-center mb-4">
              Enjoy meal plans tailored to your unique dietary needs.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <FaCube size={50} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">24/7 AI Chatbot Support at Your Fingertips</h3>
            <p className="text-sm text-center mb-4">
              Get instant answers and support whenever you need it.
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center gap-4">
          <button className="bg-[#e6a896] text-black px-6 py-3 rounded font-bold">Learn More</button>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded font-bold">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
