import React, { Component } from "react";

export default class Input extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table striped bordered hover size="sm-8">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>End</th>
                        <th>Tel</th>
                    </tr>
                </thead>

                {this.props.pessoas.map((pessoa, index) => (
                    <tbody>
                        <tr class="list-group list-group-horizontal">
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.end}</td>
                            <td>{pessoa.tel}</td>
                            <td>
                                <button class="btn btn-danger" onClick={() => this.props.removerUsuario(index)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>

        )
    }
}