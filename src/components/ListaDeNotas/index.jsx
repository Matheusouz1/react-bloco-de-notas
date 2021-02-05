import React, { Component } from "react";
import CardNota from "../CardNota";

class ListaDeNotas extends Component {
  
  render() {
    return (
      <ul>
        {this.props.notas.map((notas, index) => (
          <li key={index}>
            <div>{}</div>
            <CardNota titulo={notas.titulo} text={notas.text}/>
          </li>
        ))}
      </ul>
    );
  }
}

export default ListaDeNotas;
