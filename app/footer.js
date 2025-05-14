import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";

// PromoSection Component
const PromoSection = () => {
  return (
    <div>
      {/* Top Section */}
      <section className="bg-black text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Take Control of Your Diabetes</h1>
        <p className="text-lg mb-6">
          Join thousands of users who are transforming their diabetes management with our innovative app.
          Download now to access personalized insights and support tailored just for you.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#e6a896] text-black px-6 py-2 rounded font-bold">Download</button>
          <button className="bg-white text-black px-6 py-2 rounded font-bold border border-black">Sign Up</button>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-[#2a4d4e] text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Informed with SugarSense.ai</h2>
        <p className="text-lg mb-6">
          Join our newsletter for the latest updates, tips, and insights on diabetes management.
        </p>
        <div className="flex justify-center gap-4">
          <input
            type="email"
            placeholder="Your Email Here"
            className="px-4 py-2 rounded text-black w-64"
          />
          <button className="bg-[#e6a896] text-black px-6 py-2 rounded font-bold">Join Now</button>
        </div>
        <p className="text-sm mt-4">
          By clicking Join Now, you agree to our <a href="#" className="underline">Terms and Conditions</a>.
        </p>
      </section>
    </div>
  );
};

// Reusable component for contact information
const ContactInfo = ({ Icon, title, description, details }) => (
  <div className="flex items-start gap-4">
    <Icon size={30} />
    <div>
      <h3 className="font-bold uppercase">{title}</h3>
      <p className="text-sm">{description}</p>
      <p className="text-sm mt-1">{details}</p>
    </div>
  </div>
);

// Reusable component for list sections
const ListSection = ({ title, items }) => (
  <div>
    <h4 className="font-bold mb-2">{title}</h4>
    <ul className="space-y-1 text-sm">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

// Footer Component
const Footer = () => {
  const inputClasses = "px-3 py-2 border border-black rounded text-sm w-full";
  const buttonClasses = "px-4 py-2 border border-black rounded bg-white text-sm";

  return (
    <footer className="bg-[#e6a896] text-black px-6 py-12">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-black pb-10">
        <ContactInfo
          Icon={MdEmail}
          title="Contact"
          description="For customer support and inquiries, reach out to us anytime."
          details="support@sugarsense.ai"
        />
        <ContactInfo
          Icon={MdPhone}
          title="Phone"
          description="We’re here to assist you with any questions you may have."
          details="+1 (800) 123-4567"
        />
        <ContactInfo
          Icon={MdLocationOn}
          title="Office"
          description="Visit us at our headquarters for in-person support."
          details="456 Health Ave, San Francisco CA 94105 US"
        />
      </div>

      {/* Middle Section */}
      <div className="grid md:grid-cols-4 gap-10 mt-10">
        {/* Logo + Subscribe */}
        <div>
          <h2 className="font-bold text-xl mb-2">SugarSense</h2>
          <p className="text-sm">Subscribe to our newsletter for the latest features and updates.</p>
          <div className="flex mt-4 gap-2">
            <input type="email" placeholder="Your email here" className={inputClasses} />
            <button className={buttonClasses}>Subscribe</button>
          </div>
          <p className="text-xs text-black/70 mt-2">
            By subscribing, you consent to our Privacy Policy and receiving updates.
          </p>
        </div>

        {/* Quick Links */}
        <ListSection
          title="Quick Links"
          items={["About Us", "Contact Us", "Support Center", "Blog Posts", "FAQs"]}
        />

        {/* Connect */}
        <ListSection
          title="Connect With Us"
          items={["Newsletter", "Webinars", "Community", "Events", "Partnerships"]}
        />

        {/* Social Icons */}
        <div>
          <h4 className="font-bold mb-2">Follow Us</h4>
          <div className="flex space-x-3 text-xl">
            <FaFacebook />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-black pt-4 flex flex-col md:flex-row justify-between text-sm">
        <p>© 2025 SugarSense.ai. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export { PromoSection, Footer };