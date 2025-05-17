const TransformSection = () => {
    return (
      <section className="bg-black text-white py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-sm uppercase font-bold mb-2">Empower</h2>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your Diabetes Management Experience Today
            </h1>
            <p className="text-lg mb-8">
              SugarSense.ai offers personalized insights that help you manage your diabetes effectively. 
              With AI-driven predictions and tailored meal plans, you can take control of your health like never before.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#e6a896] text-black px-6 py-3 rounded font-bold">Explore</button>
              <button className="bg-transparent border border-white text-white px-6 py-3 rounded font-bold">
                Get Started
              </button>
            </div>
          </div>
  
          {/* Image */}
          <div>
            <img
              src="https://via.placeholder.com/600x400" // Replace with your actual image URL
              alt="Transform Your Diabetes Management"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default TransformSection;
