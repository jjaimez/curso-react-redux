import React from 'react'
import ReactDOM from 'react-dom'
import Jugadores from './components/Jugadores'


 let detalles = [
  {id: 1, nickname: 'mario', puntos: 7200, copa: 'oro.png'},
  {id: 2, nickname: 'lucas', puntos: 6800, copa: 'plata.png'},
  {id: 3, nickname: 'maria', puntos: 6750, copa: 'plata.png'},
  {id: 4, nickname: 'sonia', puntos: 5000, copa: 'bronce.png'}
];

ReactDOM.render(<Jugadores listado={detalles} />, document.getElementById('root'));

