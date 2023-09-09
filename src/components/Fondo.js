import React from "react"
import "../hojas-de-estilo//Fondo.css"
import fondoimg from '../imagenes/DCI-BG.jpg'

const Fondo = () => {

    return(
        <div className="Fondo">
            
                
            <div className="content">
                    <div className="content__container">
                    
                        
                        <ul className="content__container__list">
                        <li className="content__container__list__item">Tecnology</li>
                        <li className="content__container__list__item">Machine Learning</li>
                        <li className="content__container__list__item">Deep Learning</li>
                        <li className="content__container__list__item">Robotics</li>
                        </ul>
                        
                        <p className="content__container__text">
                        Developer
                        </p>
                    </div>
            
            </div>
                            


        </div>
        
       
    )        
}

export default Fondo