import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-red-500 via-red-400 to-red-100 text-black drop-shadow-md shadow-black"
      style={{ borderRadius: "55px 55px 0 0" }}
    >
      <div className="container mx-auto px-6 py-12">
        {/* Top Links */}
        <div className="flex flex-wrap justify-center gap-6 text-white text-sm md:text-base mb-8">
          {[
            "hotel-in-lucknow",
            "hotel-in-mathura-vrindavan",
            "hotel-in-goa",
            "hotel-in-mumbai",
            "hotel-in-delhi",
          ].map((link, index) => (
            <a
              key={index}
              href={`/${link}`}
              className="hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              {link.toUpperCase()} &gt;
            </a>
          ))}
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">ABOUT US</h4>
            <p className="text-sm leading-6 opacity-90 mb-4">
              India’s leading online booking platform revolutionizes the way
              travelers find and book accommodations. Explore premium hotels,
              budget-friendly options, and authentic homestays.
            </p>
            <p className="text-sm leading-6 opacity-90">
              As India’s first AI-enabled platform, we prioritize hassle-free
              check-ins and seamless booking experiences.
            </p>

            {/* Subscribe Input */}
            <div className="mt-6 flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 flex-grow rounded-md border-0 focus:outline-none text-black"
              />
              <button className="bg-yellow-400 text-red-800 font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300 ease-in-out">
                Subscribe
              </button>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">USEFUL LINKS</h4>
            <ul className="space-y-2 text-sm">
              {[
                "About Us",
                "Contact Us",
                "Refund Policy",
                "Privacy & Policy",
                "Terms & Condition",
                "Join Our Network",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={`/${link.toLowerCase().replace(/ & | /g, "-")}`}
                    className="hover:underline hover:text-yellow-300 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Room Categories */}
          <div>
            <h4 className="text-xl font-bold mb-4">ROOM CATEGORIES</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Classic Room",
                "Deluxe Room",
                "Luxury Room",
                "Hotelio Home Stay",
                "Hotelio Budget",
                "Hotelio Premium",
              ].map((room, index) => (
                <li key={index}>
                  <span className="flex items-center">
                    <span className="mr-2">•</span>
                    {room}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-xl font-bold mb-4">CONTACT US</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 0522-4329787</li>
              <li>📱 +91 (811) 5510050</li>
              <li>📧 info@hoteliorooms.com</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (social, index) => (
                  <a
                    key={index}
                    href={`https://${social}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-yellow-400 transition duration-300 ease-in-out"
                  >
                    <i className={`fab fa-${social}`}></i>
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-center">
          <p>© 2023 Hotelio is owned by Houda Carjour Tourism Pvt Ltd</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              "https://www.hoteliorooms.com/static/media/VISALogo.f7f66bc863e631c5fd2d.webp",
              "https://www.hoteliorooms.com/static/media/MasterCardLogo.cf00e4d968f084f90dc1.webp",
              "https://www.hoteliorooms.com/static/media/UPILogo.a90ef4563976d34f5b86.webp",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Payment Logo"
                className="w-14 hover:scale-105 transition duration-300 ease-in-out"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
