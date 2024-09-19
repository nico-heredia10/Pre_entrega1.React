import Carrito from '../reutilizables/carrito'

function Nav (props){

    return <nav className="barraNav">
        <img src="../../pokemon-logo-png-1421.png" alt="Pokemon" />
        
        <div >
            <Carrito />
            <div className='divBotones'>
                <button>Boton 1</button>
                <button>Boton 2</button>
                <button>Boton 3</button>
                <button>Boton 4</button>
            </div>
        </div>
    </nav>
}

export default Nav;