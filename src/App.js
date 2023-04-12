import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import HeaderSticky from "./components/HeaderSticky";
import AntiSpyApp from "./components/AntiSpyApp";
import ClarioHelpInfo from "./components/ClarioHelpInfo";
import ClarioSolvePropblems from "./components/ClarioSolvePropblems";
import EasySteps from "./components/EasySteps/indes";
import SpyFreeWeek from "./components/SpyFreeWeek";
import ProtectAll from "./components/ProtectAll";
import ClarioSlider from "./components/ClarioSlider";
import PhoneSpyProtection from "./components/PhoneSpyProtection";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const protectMeButton = document.querySelector(".antiSpyApp__link");
      const protectMeButtonTop = protectMeButton.offsetTop;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop >= protectMeButtonTop) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {showStickyHeader ? <HeaderSticky /> : <Header />}
      <AntiSpyApp />
      <ClarioHelpInfo />
      <ClarioSolvePropblems />
      <EasySteps />
      <SpyFreeWeek />
      <ProtectAll />
      <ClarioSlider />
      <PhoneSpyProtection />
      <Footer />
    </div>
  );
}

export default App;
