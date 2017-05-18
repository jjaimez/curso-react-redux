import React from 'react';
import Copa from './Copa.js';
const estilo1 = {
	background:'green',
}

export default class Jugador extends React.Component {
  
	constructor(){
		super();
	}

  render () {

    return (
    	<li style={estilo1}>
    		<Copa imagen={this.props.copa} />
    		<div>
    			<h4> Nombre: {this.props.nombre}</h4>
    		<p>
    			Puntos: {this.props.puntos} &nbsp;	
			</p>
		</div>
		<hr/>
		</li>
		);
  }
}