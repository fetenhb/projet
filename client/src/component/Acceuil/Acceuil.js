import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../Carousel/Carousel";
import MapCategorie from "../Categorie/MapCategorie";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import Profile from "../Profile/Profile";

const Acceuil = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <MapCategorie />
      <Footer />
      <Footer />
      <Footer />
    </div>
  );
};

export default Acceuil;
