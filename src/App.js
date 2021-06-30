import React from "react";
import "./App.css";
import Header from "./components/Header/index";
import HomeBackground from "./components/Home-Background/index";
import CardPet from "./components/Card/Pets/index";
import InfoBackground from "./components/Info-Background/index";
import FooterHome from "./components/Footer/Home/index";

export default () => {
  return (
    <div className="App">
      <Header />
      <HomeBackground />
      <CardPet />
      <InfoBackground />
      <FooterHome />
    </div>
  );
};
