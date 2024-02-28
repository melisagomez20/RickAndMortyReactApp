export default function Description({status,especie,genero,origen,setHide}) {

    const ocultar=()=>{
        setHide(true)
    }
    return(
        <div>
        <button className="btn btn-success" onClick={ocultar}>X</button>
            <ul className="list-group">
                <li className="list-group-item fw-bold">Character Status: {status}</li>
                <li className="list-group-item fw-bold"><span className="fw-normal">Species</span>{especie}</li>
                <li className="list-group-item fw-bold"><span className="fw-normal">Origin</span>{origen}</li>
                <li className="list-group-item fw-bold "><span className="fw-normal">Gender</span>{genero}</li>
        </ul>        
        </div>

    )
}

//recibimos del componente Card, el setter setHide() y lo usamos en el boton de este componente para cambiar el estado hide de false a true.De esta manera , deja de renderizar el componente Description