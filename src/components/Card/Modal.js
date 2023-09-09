import React from "react";
import "./Modal.css";
import Feature from "./Feature";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Modal = ({ data, close }) => {
  const {
    imageUrl,
    nombreProyecto,
    motivo,
    descripcion,

  } = data;

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div
      className="modal"
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
    >
      <motion.img
        className="modal__image"
        alt="fotos de proyecto"
        src={imageUrl}
        variants={imageVariants}
      ></motion.img>
      
      <motion.div className="modal__info" variants={modalInfoVariants}>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__nombre">{nombreProyecto}</span>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__motivo">{motivo}</span>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>

        </motion.div>
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__descripcion">{descripcion}</p>
        </motion.div>
        <motion.button
          className="modal__close-wrapper"
          whileHover={{ scale: 1.1 }}
          onClick={close}
        >
          <IoCloseCircleOutline className="modal__close-icon" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
