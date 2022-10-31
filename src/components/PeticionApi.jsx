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
        <div class="container">
            <h1>PETICIÓN API</h1>
            <button onClick={getPersonas}>Traer Personas</button>
            <button onClick={siguiente}>Siguiente</button>
            <button onClick={atras}>Atrás</button>
            {
                personas.map((resultado) =>(
                    <div class="card">
                        <div class="card-up">
                            <div class="card-img">
                            <img src={resultado.picture.large} alt="Foto persona"/>
                        </div>
                        </div>
                        <div class="card-name">
                            <h4>{resultado.name.first} {resultado.name.last}</h4>
                        </div>
                        <div class="card-gender">
                            <h4> Gender: {resultado.gender}</h4>
                        </div>
                        <div class="card-country">
                            <h4> Country: {resultado.location.country}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    )
    
}

export default PeticionApi