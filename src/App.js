import "./App.css";
import React, { useRef, useState } from 'react'
import Card from "./components/Card";
import { properties } from "./constants/data";
import Fondo from "./components/Fondo";
/* import Presentacion from "./components/Scroll";  */
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

import foto1 from './imagenes/DCI-BG.jpg'
import foto2 from './imagenes/Brain.png'
import feature from './imagenes/NeuralNet3.jpg'
import PerfilTecnico from "./components/Perfil-tecnico";
export default function App() {

  const parallax = useRef(null)


  return (

    <div className="App">
    
      <Parallax ref={parallax} pages={3}>

        
      <ParallaxLayer 
          offset={0.99} 
          speed={2} 
          onClick={() => parallax.current.scrollTo(0.333)} 
          style={{ backgroundColor: 'black'}}>
          <div className="App">
            <div className="seccion-de-proyectos">
              <h2>Proyects</h2>
            </div>
            <div className="properties">
                {properties.map((item) => (
                  <Card data={item} key={item.id} />
                ))}
              </div>
            </div> 
        </ParallaxLayer>

       
        <ParallaxLayer className="Fondo-contenedor"
          offset={0} 
          speed={0.4 } 
          onClick={() => parallax.current.scrollTo(0.333)} 
          style={{ backgroundColor: 'black'}} >
            <img className="imagen" src={foto1}/>
            <div className="nombre">
              <h2>Valentin Barco</h2>
            </div>
            <div className="titulo">
              <h2>Electronic Engineer</h2>
            </div>
            <div className="letras-animadas">
    
              <Fondo/>
            </div> 
            
        <div className="Perfil">
           <img className="IM" src={feature}/> 
        </div> 
        </ParallaxLayer>
        <ParallaxLayer className="Fondo-contenedor2"
          offset={1} 
          speed={1} 
           >
              
            <PerfilTecnico
             />

        </ParallaxLayer>

      </Parallax>
    </div>
    
  )
}
   



