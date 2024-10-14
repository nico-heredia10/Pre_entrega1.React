// import Carrito from '../reutilizables/carrito'
import Boton from '../reutilizables/boton';
// import Cards from '../reutilizables/Cards';
import { useNavigate } from 'react-router-dom';

function Nav (props){
    const navigate = useNavigate();

    return <nav className="barraNav">
        
        <img id='imgPokemon' src="../../pokemon-logo-png-1421.png" alt="Pokemon" />
        
        
        <div id='contenedorNavegador'>
            <div className="divCarrito">
                <img onClick={()=> navigate("/Carrito")} src="../../Icono.carrito.png.png" alt="
                Icono-Carrito" className="imgCarrito"/>
                <span id='contadorCarrito'>0</span>
            </div>

            <div id='divBotones'>
                <Boton onClick={()=> navigate("/productos")} clave='id' valor='Producto' text='Productos'/>
                <Boton id='id' valor='boton2' text='Boton 2'/>
                <Boton id='id' valor='boton3' text='Boton 3'/>
                <Boton id='id' valor='boton4' text='Boton 4'/>
            </div>
            <img onClick={()=> navigate("/")} id='iconoHome' src="../../icono.casa.svg" alt="icono del carrito" />
        </div>
    </nav>
}

export default Nav;