import React from "react";
import './Card.css'
import './Button.css'

export default ( props ) => {
    const cardStyle = {
        backgroundColor: props.color || '#580',
        borderColor: props.color || '#580'
    }
    
    const preco = parseFloat(props.preco)
    
    return (
        <div className="Card" style={cardStyle} >
            <div className="Title"> {props.titulo} </div>
            <div className="Content"> {props.children} </div>
            <div className="Price"> R$ {preco.toFixed(2).replace('.', ',')} </div>
            <button className="Button" >Comprar</button>
        </div>
    )
}