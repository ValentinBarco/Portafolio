import React from "react"
import '../hojas-de-estilo/Perfil-tecnico.css'

import python from '../imagenes/PythonLogo.png'
import matlab from '../imagenes/MatLabLogo.png'
import atmega from '../imagenes/atmegaLogo.png'
import C from '../imagenes/CLogo.png'
import delphi from '../imagenes/Delphi.png'
import raspberry from '../imagenes/RaspBerry.png'
import arduino from '../imagenes/ArduinoLogo.png'
import fritzing from '../imagenes/Fritzing.png'
import ltspice from '../imagenes/LTSpice.png'
import ltspice2 from '../imagenes/Ltspice2.png'
import mne from '../imagenes/mneLogo.png'
import fusion from '../imagenes/Fusion.png'
import Vacio from '../imagenes/Vacio.png'


function PerfilTecnico(props)  {
  return(
    <div className="perfil-tecnico">
        <h2>Technical Profil</h2>
					{/* <div className="tecnologias">
						<div className="T1">
							<h2>Python</h2>
							<img src={python}/>
						</div>
						<div className="T1">
							<h2>C++</h2>
							<img src={C}/>
						</div>
						<div className="T1">
							<h2>MatLab</h2>
							<img src={matlab}/>
						</div>
						<div className="T1">
							<h2>Delphi Pascal</h2>
							<img src={delphi}/>
						</div>				 */}

					{/* /</div> */}


    </div>     
  );



}

export default PerfilTecnico;