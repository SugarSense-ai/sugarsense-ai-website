import HeroSection from "./HeroSection"; // Import the HeroSection component
import FeaturesSection from "./FeaturesSection"; // Import the FeaturesSection component
import TransformSection from "./TransformSection"; // Import the TransformSection component
import ExperienceSection from "./ExperienceSection"; // Import the ExperienceSection component
import HowitWorksSection from "./HowitWorksSection"; // Import the HowitWorksSection component
import ResultsSection from "./ResultsSection"; // Import the ResultsSection component
import { PromoSection, Footer } from "./footer"; // Import PromoSection and Footer from footer.js

const HomePage = () => {
  return (
    <div>
      <HeroSection /> {/* Render the HeroSection */}
    
      <FeaturesSection /> {/* Render the FeaturesSection */}
      <TransformSection /> {/* Render the TransformSection */}
      <HowitWorksSection /> {/* Render the HowitWorksSection */}
      <ExperienceSection /> {/* Render the ExperienceSection */}
      <ResultsSection /> {/* Render the ResultsSection */}

      {/* Add any additional sections or components here */}
      
      {/* Promo Section and Footer */}
      <PromoSection /> {/* Render the PromoSection */}

      <Footer /> {/* Render the Footer */}
    </div>
  );
};

export default HomePage;
