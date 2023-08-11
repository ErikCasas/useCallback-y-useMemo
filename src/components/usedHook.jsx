import React from "react";
import "../styles/pokestyles.css";
import { usePokemon } from "../hooks/usePokemon";
import PokeName from "./PokeName";

const UsedHook = () => {
  const [pokemones, cargando, error] = usePokemon();
  return (
    <>
      <h1>Pokemons</h1>
    <div className="pokemon">

      {error && <span>Algo salio mal :c</span>}
      {cargando ? (
        <p>cargando...</p>
      ) : (
        <ul>
          {pokemones.map((e, i) => (
            <PokeName key={i}>{e.name}</PokeName>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default UsedHook;
