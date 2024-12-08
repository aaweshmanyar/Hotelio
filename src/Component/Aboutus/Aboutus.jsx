import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-white to-red-400  p-8 md:flex items-center mt-16 border" style={{borderRadius: "0px 0px 355px 0px"}}>
      {/* Content Section */}
      <div className="md:w-1/2 text-black">
        <h2 className="text-4xl font-bold text-black mb-4">ABOUT US</h2>
        <p className="text-lg leading-relaxed">
          India’s leading online booking platform revolutionizes the way travelers
          find and book accommodations. With our user-friendly app and website,
          we bring easy and comfortable stays to your fingertips. Explore our
          vast network of premium hotels, budget-friendly options, and authentic
          homestays. As India’s first AI-enabled platform, we prioritize your
          comfort and provide hassle-free check-ins.
          <br />
          <strong>
            Hotelio is owned by Houda Carjour Tourism Pvt Ltd, India’s Number 1
            Fastest Leading Hotel Chain.
          </strong>
        </p>
        <a
          href="#"
          className="inline-block mt-4 text-black font-semibold border-b border-black hover:text-black hover:border-white transition"
        >
          Read more...
        </a>
      </div>

      {/* Illustration Section */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src="https://www.hoteliorooms.com/static/media/AboutUs.d10ab09dc65452d7c894.webp"
          alt="About Us Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default AboutUs;
