import { useEffect, useState } from "react";


function Carrito (){
    const [contador, setContador] = useState(0)

    return <div className="divCarrito">
        <img src="../../Icono.carrito.png.png" alt="
        Icono-Carrito" className="imgCarrito"/>
        <span>0</span>
    </div>
}

export default Carrito;