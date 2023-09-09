import React from "react";
import Feature from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
  const { imageUrl, nombreProyecto, icono1, icono2, icono3 } =
    data;

  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.07 }}>
      <div className="listing__content">
        <div className="listing__image-container">
          <img
            className="listing__image"
            alt="real estate mansion"
            src={imageUrl}
          />
          <div className="frame__animado1"></div>
          <div className="frame__animado2"></div>
          <div className="frame__animado3"></div>
          <div className="iconos">
            <img className="icono1" src={icono1}/>
            <img className="icono2" src={icono2}/>
            <img className="icono3" src={icono3}/>
          </div>
        </div>
        <div className="listing__details">
          
          <div className="listing__row">
            <h2 className="listing__nombre">{nombreProyecto}</h2>
          </div>


        </div>
      </div>
    </motion.div>
  );
};

export default Listing;
