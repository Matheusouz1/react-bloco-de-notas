import React, { Component } from 'react';
import FormularioCadastro from './components/FormulárioCadastro/';
import ListaDeNotas from './components/ListaDeNotas/';


class App extends Component {

  constructor(){
    super()
    this.state={
      notas:[]
    };
  }

  criarNota(titulo, text){
    const novaNota = {titulo, text};
    const novoArrayDeNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayDeNotas
    }
    this.setState(novoEstado)
  }

  render() { 
    return (  
      <section>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}
 
export default App;
