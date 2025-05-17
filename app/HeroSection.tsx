const HeroSection = () => {
    return (
      <section
        className="relative bg-cover bg-center h-screen text-white"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with your image URL
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 lg:px-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Empower Your Diabetes Management with AI
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Welcome to SugarSense.ai, where cutting-edge AI technology meets
            personalized diabetes care. Our app helps you predict glucose levels
            and create tailored meal plans, making diabetes management easier
            than ever.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#e6a896] text-black px-6 py-3 rounded font-bold">
              Get Started
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded font-bold">
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
