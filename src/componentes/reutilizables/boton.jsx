

const BotonA = (props)=>{
    console.log(props);
    return <>
        <button className="boton" onClick={props.onClick}>{props.texto}</button>
    </>
}

export default BotonA;