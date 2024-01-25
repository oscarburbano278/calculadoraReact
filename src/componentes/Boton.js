import React from "react";
import '../estilos/Boton.css'

function Boton (props){

    const esOperadpr = valor => {
        return isNaN(valor) && (valor != '.') && ( valor != '=');
    };

    return(
        <div 
        className={`boton-contenedor ${esOperadpr(props.children) ? 'operador' : null}`}>
            {props.children}
        </div>
    )
}

export default Boton;