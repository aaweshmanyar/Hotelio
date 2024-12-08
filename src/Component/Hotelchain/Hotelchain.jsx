import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const statsData = [
  { label: "Cities", target: 80 },
  { label: "Hotels", target: 4500 },
  { label: "Vacation Homes", target: 150000 },
];

const HotelChain = () => {
  const [stats, setStats] = useState([0, 0, 0]);

  // Handle counters
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) =>
        prevStats.map((value, index) =>
          value < statsData[index].target
            ? Math.min(value + Math.ceil(statsData[index].target / 200), statsData[index].target)
            : value
        )
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mt-8 border  min-h-screen bg-gradient-to-r from-white via-red-300 to-red-500 text-black flex flex-col items-center justify-center px-6 py-16" style={{borderRadius: "0 355px 0 0"}}>
      {/* Background Wave Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full h-full opacity-30"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.1"
            d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,224C672,245,768,267,864,240C960,213,1056,139,1152,112C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Illustration */}
          <div className="relative flex items-center justify-center">
            <img
              src="https://www.hoteliorooms.com/static/media/WeserveImage.783d1436864404e11c83.webp"
              alt="Reception Illustration"
              className="w-3/4 max-w-md lg:w-full"
            />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              India’s No. 1 Fastest Leading Hotel Chain
            </h1>
            <p className="mt-4 text-lg md:text-xl opacity-90">
              More Destinations. More Ease. More Affordable.
            </p>

            {/* Stats Section */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {statsData.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <animated.h2 className="text-5xl md:text-6xl font-bold text-white">
                    {stats[index]}+
                  </animated.h2>
                  <p className="mt-2 text-lg">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Cities */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
              {["Mumbai", "Delhi", "Lucknow", "Chennai"].map((city) => (
                <span
                  key={city}
                  className="px-6 py-3 bg-white text-black rounded-full text-sm lg:text-base font-semibold transition transform hover:scale-105 hover:bg-black hover:text-white"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelChain;
