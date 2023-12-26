import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer.jsx";
import Map from "../components/Map/Map.jsx";
import Populareats from "./Populareats/Populareats.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Populareats />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
