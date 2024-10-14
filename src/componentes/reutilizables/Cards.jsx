import { useEffect, useState } from "react";
import Boton from "./boton";
import Promesa from "./Promise";
import Color from "./ColorTiposPoke";


function Cards (props){
    const [resultado, setResultado] = useState([]);
    const [tiempo, setTiempo] = useState(false);

    useEffect(()=>{

        Promesa('https://pokeapi.co/api/v2/pokemon?limit=50')
        .then(data => {
            const pokemones = data.results.map(pokemon =>{
                return Promesa(pokemon.url)
            })

            Promise.all(pokemones).then(results => setResultado(results))
        })


        setTimeout(()=>{
            tiempo
        }, 3000)
        // fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        // .then((response) => {
        //     if(!response.ok){
        //         throw new Error('Error en la peticion');
        //     }

        //     return response.json()
        // })
        // .then((data) => {
           
        //     const pokemones = data.results.map(pokemon => {
        //         return fetch(pokemon.url)
        //         .then((result) => result.json())});
            
        //     Promise.all(pokemones).then((results) => setResultado(results))
        // });
        
        console.log(resultado);
    }, [tiempo])

    return<div id="divCards">
            <h1>Productos</h1>
            {resultado?.length > 1 ? (resultado.map(pokemon => (
                <div id={pokemon.id} className='divCardsPokemones' key={pokemon.id}>
                    <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name}/>
                    <h2>{pokemon.name}</h2>
                    <div className="divTipos">
                    {pokemon.types.length > 1 ? pokemon.types.map((tipos, index) => (
                        <p style={{backgroundColor:Color(tipos.type.name)}} key={index}>{tipos.type.name}</p>
                    )) : (
                        <p style={{backgroundColor: Color(pokemon.types[0].type.name)}}>{pokemon.types[0].type.name}</p>
                    )}
                    </div>
                    
                <Boton clave='class' valor='agregar' text='Agregar'/>
                </div>
            ))) : <p >Cargando...</p>
            }
        </div>
    
}

// obtenerDatos();
export default Cards;