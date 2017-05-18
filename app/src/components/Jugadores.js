

import React from 'react'
import Jugador from './Jugador.js'
const estilo1 = {
	background:'blue',
}
export default class Jugadores extends React.Component {
  
	constructor(props){
		super(props);
	}


  render () {
  	let props = {};

    return (<div style={estilo1}>
    	<ul>
    	{
    		this.props.listado.map((jugador) => {
    			props.key = jugador.id;
    			props.nombre = jugador.nickname;
    			props.puntos = jugador.puntos;
    			props.copa = jugador.copa;
    			return <Jugador {...props} />
    		})
    	}
    	</ul></div>
       );
  }
}
	