import React from "react";

/* aca se reciben las propiedades, los props */
export const PokeCard = ({ pokemon }) => {   
    const [pokemonData, setPokemonData] = React.useState();
               
       React.useEffect(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) =>
             response.json().then((data) => setPokemonData(data))
             );
             
          }, [ pokemon ]);
       
        return (
            <>
            {pokemonData && (
             <img src={pokemonData.sprites.front_default} alt="Imagen del Pokemon" />
            )}
            </>
        );
    };