import React, { Component } from "react";

class FormularioCadastro extends Component {
  constructor(props){
    super(props);
    this.title="";
    this.text="";
  }

  _mudarTitulo(evento){
    evento.stopPropagation()
    this.title = evento.target.value
  }
  _mudarTexto(evento){
    evento.stopPropagation()
    this.text=evento.target.value
  }
  _salvarNota(evento){
    if(this.text==""){
      alert("adicione um texto");
      return
    }
    evento.stopPropagation()
    this.props.criarNota(this.title, this.text)
  }
  render() {
    return (
      <form>
        <input type="text" placeholder="titulo" onChange={this._mudarTitulo.bind(this)}/>
        <br/>
        <textarea rows={10} placeholder="escreva sua nota..." onChange={this._mudarTexto.bind(this)}></textarea>
        <br/>
        <button type="button" onClick={this._salvarNota.bind(this)}>Criar nota</button>
        <hr></hr>
        <h1>Notas:</h1>
      </form>
    );
  }
}

export default FormularioCadastro;
