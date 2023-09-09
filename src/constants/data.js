import brazo from '../imagenes/Robot-imagen.jpg'
import brazo2 from '../imagenes/Brazo3.jpg'
import sperm from '../imagenes/Sperm.jpg'
import mixer from '../imagenes/Mixer.jpg'
import mano from '../imagenes/Mano.jpg'
import epilepcia from '../imagenes/Spike-waves.jpg'
import s from '../imagenes/Blur.jpg'
import python from '../imagenes/PythonLogo.png'
import matlab from '../imagenes/MatLabLogo.png'
import atmega from '../imagenes/atmegaLogo.png'
import C from '../imagenes/CLogo.png'
import raspberry from '../imagenes/RaspBerry.png'
import arduino from '../imagenes/ArduinoLogo.png'
import fritzing from '../imagenes/Fritzing.png'
import ltspice from '../imagenes/LTSpice.png'
import ltspice2 from '../imagenes/Ltspice2.png'
import mne from '../imagenes/mneLogo.png'
import fusion from '../imagenes/Fusion.png'
import Vacio from '../imagenes/Vacio.png'



export const properties = [
  
  
  {
    id: 1,
    imageUrl:
      mano,
    nombreProyecto: "Bionic Arm",
    motivo: "Tesis final de grado",
    descripcion:
      "Diseño e implementación de un brazo biónico a escala, el cual puede ser comandado con la diadema EMOTIV EPOC +, con el fin de brindar una autonomía parcial a personas que carecen de movilidad debido a accidentes o enfermedades neurodegenerativas.",
    icono1: python,
    icono2: raspberry,
    icono3: fusion,
    
  },
  {
    id: 2,
    imageUrl:
      mixer,
    nombreProyecto: "Analog Mixer",
    motivo: "Proyecto final de ADCA2",
    descripcion:
      "Mezclador de señal de dos canales hecho con técnicas de diseño de circuitos analógicos.",
      icono1: matlab,
      icono2: ltspice2,
      icono3: fritzing,


  },
  {
    id: 3,
    imageUrl:
      brazo,
    nombreProyecto: "Robotic Arm",
    motivo: "Proyecto de computadoras digitales",
    descripcion:
      "Brazo realizado con impresora 3d, programado con lenguaje C de bajo nivel. Este realiza un barrido y detecta la posición y distancia de los objetos a su alrededor, a continuación procede a agarrarlos uno por uno.",
    icono1: C,
    icono2: arduino,
    icono3: fritzing,
  },
  {
    id: 4,
    imageUrl:
      epilepcia,
    nombreProyecto: "MF-DFA of EEG in epileptics",
    motivo: "Proyecto en NeuFiSur",
    descripcion:
      "Software que permite la extracción de características ligadas al grado multifractal de señales cerebrales que simplifican el entrenamiento modelos de machine learning.",
    icono1: python,
    icono2: Vacio,
    icono3: Vacio,
    
  },
  {
    id: 5,
    imageUrl:
      sperm,
    nombreProyecto: "Amorphisms detection in sperm with ML",
    motivo: "Proyecto de ML",
    descripcion:
      "Sistema de inteligencia artificial realizado con machine learning en Python, dedicado a la clasificación de los espermatozoides humanos en los diferentes amorfismos que estos puedan presentar.",
    icono1: python,
    icono2: Vacio,
    icono3: Vacio,
    
  },
  {
    id: 6,
    imageUrl:
      s,
    nombreProyecto: "",
    motivo: "Proyecto de ML",
    descripcion:
      "Software que permite la extracción de características ligadas al grado multifractal de señales cerebrales que simplifican el entrenamiento modelos de machine learning.",
    icono1: Vacio,
    icono2: Vacio,
    icono3: Vacio,
    
  },
];
