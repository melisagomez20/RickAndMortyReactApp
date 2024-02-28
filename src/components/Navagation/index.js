import {Link} from 'react-router-dom';//traemos la herramienta del paquete para vincular los elementos de la navegacion con el ruteo.

import "./Navegation.css";

export default function Navegation({hoja}){

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className='text-decoration-none'>
                    <h1 className="navbar-brand" >Rick & Morty</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={hoja === "Characters" ? "nav-link active":"nav-link"} aria-current="page" >
                           <Link to="/characters" className='text-decoration-none'> Characters</Link>
                        </li>
                        <li className={hoja === "Contact" ? "nav-link active":"nav-link"} >
                            <Link to="/contact" className='text-decoration-none'>Contact</Link>
                        </li>
                    
                    </ul>
                </div>
            </div>
            </nav>
    )
}
// operador ternario -> condicion ? accion-true : accion-false;

//JSX -> mezcla entre HTML y JS 
//coloco entre llaves el codigo JS dentro del return()

//aplicamos la siguiente logica: si "hoja" es "Characters", marca al item con color verde, sino no .