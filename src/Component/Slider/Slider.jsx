import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const yogaImages = [
  "https://hotelioimages.blob.core.windows.net/server-images-container/slider/1704173469885-slider1.jpg",
  "https://hotelioimages.blob.core.windows.net/server-images-container/1709634157143-webaliser-_TPTXZd9mOo-unsplash.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSta-V_BaDK_MKwQ-_9gscx4mOhYnLAGIhMn0gnia-utBfNaoBhdP5UbK_kldVaGkzV4&usqp=CAU",
];

const YogaClasses = () => {
  // Slider settings for the smaller carousel
  const singleImageSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  // Slider settings for the multi-image carousel
  const multiImageSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobile landscape view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile portrait view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const imageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <section className="bg-white py-12 lg:py-10  px-32">
      <div className="container mx-auto px-4 lg:px-0">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-12 mb-12">
          <div className="lg:w-1/2">
            <h1 className="text-2xl lg:text-5xl font-bold text-gray-800 mb-4">
              Explore Premium Partner's Properties With Hotelio
            </h1>

            <p className="text-lg text-gray-600">
              A comfortable and convenient stay is the invariable part of
              wanderlust, and it is ensured when your search for a room is
              accomplished by getting a deluxe rooms as per your desire and
              intention. Here at the hotelio rooms, all data and information are
              explicitly delivered, making your trips unforgettable and as per
              the gallery, you get the perfect luxury rooms after booking from
              the hotelio rooms. It’s one of the leading platforms where you can
              get instant response and evergreen assistance for your trip and
              pleasant stay.
            </p>
          </div>

          {/* Single Image Carousel */}
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <Slider {...singleImageSettings} className="w-full max-w-md">
              {yogaImages.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Yoga Image ${index + 1}`}
                    style={imageStyle}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Multi-Image Carousel */}
        <div className="carousel-container">
          <Slider {...multiImageSettings}>
            {yogaImages.map((image, index) => (
              <div key={index} className="px-2">
                <img
                  src={image}
                  alt={`Yoga Image ${index + 1}`}
                  style={imageStyle}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default YogaClasses;
