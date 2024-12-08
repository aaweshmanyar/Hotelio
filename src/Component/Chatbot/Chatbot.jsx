import React, { useState, useEffect } from "react";
import img from './iphone.png'; // Replace with the correct image path

const ImageMockup = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible); // Toggle visibility
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transform transition-all duration-700 ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
      style={{ width: "250px", height: "auto" }} // Adjusted size
    >
      <img
        src={img}
        alt="Hotelio QR Code Mockup"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default ImageMockup;
