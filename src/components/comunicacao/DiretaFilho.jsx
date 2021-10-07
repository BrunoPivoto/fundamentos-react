import React from "react";

export default props => {
    return (
        <div>
            <span>{props.texto} </span>
            <span><strong>{props.numero} </strong></span>
            <span>{props.bool ? 'Verdadeiro' : 'Falso'}</span>
        </div>
    )
}