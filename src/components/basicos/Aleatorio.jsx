import React from "react";

export default props => {
    //const min = props.min         sdesse jeito serve tmb
    //const max = props.max
    const { min, max } = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong> Mínimo: {min}</strong></p>
            <p><strong> Máximo: {max}</strong></p>
            <p><strong> Valor: {aleatorio}</strong></p>
        </div >
    )
}