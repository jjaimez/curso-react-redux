import React from 'react';

export default class Botonera extends React.Component {
  
	constructor(props){
		super(props);
	}


	

  render () {

    return (
    	<div>
    	<button onClick={this.props.accion}>Apagar/Prender</button>
		</div>
		);
  }
}