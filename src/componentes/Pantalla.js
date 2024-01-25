import React from "react";
import '../estilos/Pantalla.css'

// definicion de un componente con una funcion flecha 
const Pantalla = ({ input }) =>(
    <div className="input">
        {input}
    </div>
);
export default Pantalla;