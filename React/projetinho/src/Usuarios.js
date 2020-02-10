import React, { Component } from "react";
import Input from "./components/Input";
import Tabela from "./components/Tabela";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Componentes de Classe
export default class CadastroUsuario extends Component {
  constructor() {
    super();
    this.state = { pessoas: [] };
  }

  renderTitulo() {
    return <h1>CADASTRO DE USÚARIOS</h1>;
  }

  renderFormulario() {
    return (
      <form onSubmit={this.cadastrarUsuario}>
        <Input
          titulo="Nome"
          tipo="text"
          valor={this.state.nome}
          atualizarValor={e => this.setState({ nome: e.target.value })}
        />

        <Input
          titulo="End"
          tipo="text"
          valor={this.state.end}
          atualizarValor={e => this.setState({ end: e.target.value })}
        />
        <Input
          titulo="Tel"
          tipo="nunber"
          valor={this.state.tel}
          atualizarValor={e => this.setState({ tel: e.target.value })}
        />

        <input type="submit" class="btn btn-success" />

      </form>
    );
  }

  renderTabela() {
    return (
      <Tabela
        pessoas={this.state.pessoas} 
        removerUsuario = {this.removerUsuario}
      />
    );
  }










  render() {
    return (
      <>
        {this.renderTitulo()}
        {this.renderFormulario()}
        {this.renderTabela()}
      </>
    );
  }

  cadastrarUsuario = (evento) => {
    evento.preventDefault();
    let pessoa = { nome: this.state.nome, end: this.state.end, tel: this.state.tel }
    let kaique = [...this.state.pessoas, pessoa];
    this.setState({ pessoas: kaique, nome:"", end:"", tel:"" });
  }

  removerUsuario = (index) => {
    let novoPessoas = this.state.pessoas.filter((pessoa, i) => {
      if (i == index) {
        return false;
      }
      return true;
    })
    this.setState({
      pessoas: novoPessoas
    });


  }
}