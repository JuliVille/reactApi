import React from "react";

const PeticionApi = () => {
    const [personajes, setPersonajes] = React.useState([]);
    const [paginacion, setPaginacion] = React.useState(1);
    
    const getPersonajes = async() =>{
        try{
            const res = await fetch(`https://randomuser.me/api/?page=${paginacion}`);
            const {results} = await res.json();
            setPersonajes(results);
        }catch(error){
            console.log(error);
        }
    }

    const siguiente = async () =>{
        await setPaginacion(paginacion + 1);
        getPersonajes();
    }

    const atras = async () =>{
        await setPaginacion(paginacion - 1)
        getPersonajes();
    }
    return (
        <div>
            <h1>PETICION API</h1>
            <button onClick={getPersonajes}>Traer Personajes</button>
            <button onClick={siguiente}>Siguiente</button>
            <button onClick={atras}>Atras</button>
            {
                personajes.map((resultado) =>(
                    <div>
                        <img src={resultado.picture.large} alt="Foto persona"/>
                        <h4>{resultado.name.first} {resultado.name.last}</h4>
                        <h4> Genero: {resultado.gender}</h4>
                        <h4> Pais: {resultado.location.country}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default PeticionApi