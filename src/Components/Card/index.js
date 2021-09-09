import React, { useState, useEffect } from 'react'
import { GET_POKEMON } from '../../Services/pokemon.js';

import './style.css';

function Card(){

    const [ pokemon, setPokemon ] = useState([])
    const [ image, setImage ] = useState([])
    
    useEffect(() => {
        GET_POKE()
    },[])
    
    console.log(pokemon);

    async function GET_POKE(){
        try{
          const result = await GET_POKEMON();
          console.log(result.data);
          if(result.status && result.status === 200){
            setPokemon(result.data.results);
          }
        } catch (error) {
          console.log('Erro: ', error);
        }
      }

    return(
        <>
            {pokemon.map( pokemon =>(
                <div className="card" key={pokemon.id}>
                        <img  alt="Pokemon" style={{width:"100%"}}/>
                        <div className="container">
                            <h4><b>{pokemon.name}</b></h4> 
                            <p>{pokemon.url}</p>
                        </div>
                </div>
            ))}
        </>    
    )
}

export default Card;