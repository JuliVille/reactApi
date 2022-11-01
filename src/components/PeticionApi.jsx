import React from "react";
import './Card.css'

const PeticionApi = () => {
    const [personas, setPersonas] = React.useState([]);
    const [paginacion, setPaginacion] = React.useState(1);
    
    const getPersonas = async() =>{
        try{
            const res = await fetch(`https://randomuser.me/api/?page=${paginacion}&results=1&seed=abc`);
            const {results} = await res.json();
            setPersonas(results);
        }catch(error){
            console.log(error);
        }
        
    }
    const siguiente = async () =>{
        await setPaginacion(paginacion + 1);
        getPersonas();
    }

    const atras = async () =>{
        await setPaginacion(paginacion - 1)
        getPersonas();
    }

    return (
        <div className="container">
            <h1>PETICIÓN API</h1>
            <div className="btn-per">
                <button className="btn" onClick={getPersonas}>Traer Personas</button>
            </div>
            {
                personas.map((resultado) =>(
                    <div className="card" key={resultado.id}>
                        <div className="card-up">
                            <div className="card-img">
                            <img src={resultado.picture.large} alt="Foto persona"/>
                        </div>
                        </div>
                        <div className="card-name">
                            <h4>{resultado.name.first} {resultado.name.last}</h4>
                        </div>
                        <div className="card-gender">
                            <h4> Gender: {resultado.gender}</h4>
                        </div>
                        <div className="card-country">
                            <h4> Country: {resultado.location.country}</h4>
                        </div>
                        <div className="card-contact">
                            <h4> Contact: {resultado.phone}</h4>
                        </div>
                        <div className="btn-np">
                            <button className="btn" onClick={atras}>Previus</button>
                            <button className="btn" onClick={siguiente}>Next</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
    
}

export default PeticionApi