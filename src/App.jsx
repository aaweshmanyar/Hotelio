import React from "react";
import Header from "./Component/Header";
import Hero from "./Component/Hero/Hero";
import Hotelroom from "./Component/Hotelsroom/Hotelsroom";
import Hotelchain from "./Component/Hotelchain/Hotelchain";
import Slider from './Component/Slider/Slider'
import Footer from "./Component/Footer/Footer";
import Aboutus from './Component/Aboutus/Aboutus'
import ChatBot from "./Component/Chatbot/Chatbot";
const App = () => {
  return (
    <div >
      <Hero />
      <ChatBot />
      <Hotelroom />
      <Hotelchain />
      <Aboutus />
      <Slider />
      <Footer />

    </div>
  );
};

export default App;
