import React from 'react'

import Client from "./Components/Client/Client";
import AboutSec from "./Components/AboutUs/AboutSec";
import Aboutus from "./Components/AboutUs/Aboutus";
import Blog from "./Components/Blog/Blog";
import Contactus from "./Components/ContactUs/Contactus";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Footersub from "./Components/Footer/Footersub";
import Funfacts from "./Components/FunFacts/Funfacts";
import Navigation from "./Components/Navigation/Navigation";
import Ourservice from "./Components/OurService/Ourservice";
import Portfolio from "./Components/Portfolio/Portfolio";
import Preloader from "./Components/Preloader/Preloader";
import Pricing from "./Components/Pricing/Pricing";
import Slider from "./Components/Slider/Slider";
import Team from "./Components/Team/Team";
import Testimony from "./Components/Testimony/Testimony";

function App() {
  return (
    <>
      <Preloader />
      <Navigation />
      <Slider />
      <Aboutus />
      {/* <AboutSec /> */}
      <Ourservice />
      <Features />
      <Portfolio />
      <Pricing />
      <Team />
      <Testimony />
      <Funfacts />
      <Blog />
      <Client />
      <Contactus />
      <Footersub />
      <Footer />
    </>
  );
}

export default App;
