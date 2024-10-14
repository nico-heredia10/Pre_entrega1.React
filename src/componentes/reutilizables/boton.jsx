

const Boton = (props)=>{
    const {clave, valor} = props
    // const navigate = useNavigate();

    const atributo = clave === 'class' ? 'className' : 'id';

    return <>
        <button onClick={props.onClick} {...{[atributo]: valor}} >{props.text}</button>
    </>
}

export default Boton;