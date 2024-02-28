import BotonInicio from "../../components/BotonInicio";

import"./Home.css";

export default function Home(){
    return(
        <div className="d-flex justify-content-center aling-items-center vh-100">
        
            <div className="bg-home ">
                <h1 className="text-center">Proyect Rick & Morty</h1>
                <h2 className="text-center">Welcome to Rick & Morty Proyect!</h2>
                <p className="text-center">This proyect was made for practising React and to made a functional website.</p>
                <p className="text-center">In this website you can know information of the characters of this animated series.</p>
                <p className="text-center">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.
                </p>
                <p className="text-center">Lets go!</p>
        
                <BotonInicio nombreBoton='Characters' pasaje="/characters"/>
                <BotonInicio nombreBoton="Contact" pasaje="/contact"/>        
            </div>

        </div>

    )
}

//armando la primer hoja de nuestro proyecto

//al componente BotonInicio le paso una prop que llamo "pasaje" para que podamos agregarle dicha info a la herramienta <Link> del ruteo