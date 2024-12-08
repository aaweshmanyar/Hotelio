import {
    Search,
    MapPin,
    Calendar,
    Users,
    Hotel,
    CheckCircle,
    Smile,
    Facebook,
    Twitter,
    Instagram,
    Phone,
    Mail,
    CreditCard,
  } from "lucide-react";
  import React, { useEffect, useState } from "react";
  import Header from "../Header";
  
  const HotelBooking = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    useEffect(() => {
      const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          obj.innerHTML = Math.floor(progress * (end - start) + start);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const value = el.getAttribute("data-value");
            animateValue(el, 0, value, 2000);
          }
        });
      });
  
      document.querySelectorAll(".counter").forEach((counter) => {
        observer.observe(counter);
      });
    }, []);
  
    return (
      <div className="min-h-screen font-['Outfit'] scroll-smooth bg-white">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
  
            .neumorphic {
              box-shadow: 20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff;
            }
  
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
  
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
              100% { transform: translateY(0px); }
            }
  
            .gradient-text {
              background: linear-gradient(to right, #fff, #ffffff);
              -webkit-background-clip: text;
              color: transparent;
            }
          `}
        </style>
  
        <Header/>
        <header className="relative h-screen">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1571896349842-33c89424de2d"
        alt="Luxury hotel backdrop"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F]/70 via-[#001F3F]/50 to-[#001F3F]/30" />
    </div>
    <Header />
  
    <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-80px)] text-white px-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center font-['Outfit'] tracking-wide">
        Welcome to <span className="text-[#ff5238]  "style={{
        textShadow: "2px 2px 5px rgba(255, 255, 255, 0.8)"
      }}>Hotelio</span>
        <br />
        Your Gateway to <span className="text-[#ff5238]" style={{
        textShadow: "2px 2px 5px rgba(255, 255, 255, 0.8)"
      }}>Luxury</span>
      </h1>
      <p className="text-lg md:text-xl mb-10 text-center max-w-3xl">
        Discover world-class accommodations with personalized services, tailored to make your stay unforgettable. Book your dream vacation today.
      </p>
  
      <div className="w-full max-w-4xl mx-auto">
        <div className="neumorphic bg-white/10 backdrop-filter backdrop-blur-lg rounded-2xl border border-white/20 p-8 transition-all duration-300 hover:shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <MapPin className="w-5 h-5 text-heading" />,
                type: "text",
                placeholder: "Enter your destination",
              },
              {
                icon: <Calendar className="w-5 h-5 text-heading" />,
                type: "date",
              },
              {
                icon: <Users className="w-5 h-5 text-heading" />,
                type: "select",
                options: ["2 Guests", "1 Guests", "3 Guests", "4 Guests"],
              },
            ].map((input, index) => (
              <div key={index} className="flex items-center gap-3">
                {input.icon}
                {input.type === "select" ? (
                  <select className="w-full p-3 rounded-lg text-black bg-gray-100 border border-gray-300 focus:outline-none focus:border-[#000000] transition-all duration-300 hover:bg-gray-200">
                    {input.options.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    className="w-full p-3 text-black rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:border-[#000000] transition-all duration-300 hover:bg-gray-200 placeholder-gray-500"
                  />
                )}
              </div>
            ))}
            <button className="bg-[#ff6f59] text-white font-semibold p-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,191,255,0.5)] hover:scale-105 transition-all duration-300">
              Search Rooms
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  
      </div>
    );
  };
  
  export default HotelBooking;
  