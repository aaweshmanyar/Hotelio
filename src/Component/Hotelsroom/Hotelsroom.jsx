import React, { useState, useEffect } from "react";


const OurClasses = () => {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowToast(false), 10000);
  }, []);

  const classes = [
    {
      id: 1,
      title: "Search & Select",
      description:
        "Browse our wide range of accommodations and select your preferred stay based on location, amenities, and budget.",
      image:
        "https://www.hoteliorooms.com/static/media/Search-Select.02607e78267baa94ac17.webp",
    },
    {
      id: 2,
      title: "Book & Confirm",
      description:
        "Complete the booking process by providing necessary details and make a secure payment to confirm your reservation.",
      image:
        "https://www.hoteliorooms.com/static/media/Book-Confirm.7345df2be43ecd805bec.webp",
    },
    {
      id: 3,
      title: "Enjoy your stay",
      description:
        "Arrive at your chosen accommodation, present your booking confirmation, and enjoy a comfortable stay with Hotelio. ",
      image:
        "https://www.hoteliorooms.com/static/media/EnjoyHotel.78210d7b7f67e515d4d2.webp",
    },
  ];

  return (
    <>
     

      {/* SVG Wave Effect */}
      <svg
        className="w-full mt-[80px]"
        height="100"
        viewBox="0 110 1420 100"
        preserveAspectRatio="none"
      >
        <path
          fill="rgb(255 102 102)"
          d="M0,64L30,85.3C60,107,120,149,180,160C240,171,300,149,360,133.3C420,117,480,107,540,128C600,149,660,192,720,202.7C780,213,840,171,900,160C960,149,1020,171,1080,186.7C1140,203,1200,213,1260,186.7C1320,160,1380,107,1410,85.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
        ></path>
      </svg>

      {/* Section with Gradient Background */}
      <section className="py-16">
        {/* Title and description */}
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black-700 mb-4">
            Best Online Hotel Booking Sites in India - Hoteliorooms
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Join our diverse classes whether you are a beginner or an
            experienced practitioner with various types of practice from Hatha
            Yoga, Vinyasa, Ashtanga, Applied yoga, and functional training
            exercises.
          </p>
        </div>

        {/* Centered Class Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto place-items-center">
          {classes.map((yogaClass) => (
            <div
              key={yogaClass.id}
              className="bg-white shadow-lg shadow-[#333] rounded-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={yogaClass.image}
                  alt={yogaClass.title}
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </div>
              <div className="p-4 flex flex-col items-center justify-center">
                <h3 className="text-lg md:text-xl font-bold text-red-500 text-center">
                  {yogaClass.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base text-center">
                  {yogaClass.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurClasses;
