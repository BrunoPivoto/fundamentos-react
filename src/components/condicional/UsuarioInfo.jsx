import React from "react";
import If, { Else } from "./If";

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja Bem vindo <strong> {usuario.nome} </strong>
                <Else>Seja Bem vindo <strong> Sr. Sem Nome -_- </strong></Else>
            </If>
        </div>
    )
}