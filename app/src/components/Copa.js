import React from 'react';
import Botonera from './Botonera.js';
const estilo1 = {
	background:'yellow',
}
export default class Copa extends React.Component {
  
	constructor(props){
		super(props);
		this.state = {
			estado: 'En Linea'
		};
	}

	cambia(){
		if (this.state.estado == 'En Linea'){
			this.setState({estado: 'Off line'});
		} else {
			this.setState({estado: 'En Linea'});
		}
	};
	

  render () {

    return (
    	<figure style={estilo1}>
    		<img width="65px" src={`http://www.secsanluis.com.ar/tallerReact/${this.props.imagen}`} />
    		<figcaption>Estado:{this.state.estado}</figcaption>
    		<Botonera accion={this.cambia.bind(this)}/>
		</figure>
		);
  }
}