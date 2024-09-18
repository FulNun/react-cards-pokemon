import React from "react";
import { useAxios } from "./hooks";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

const BASE_URL = "https:

function formatPokemonData(data) {
  return {
    id: data.id,
    name: data.name,
    front: data.sprites.front_default,
    back: data.sprites.back_default,
    stats: data.stats.map(stat => ({
      name: stat.stat.name,
      value: stat.base_stat
    }))
  };
}

function PokeDex() {
  const [pokemon, addPokemon, clearPokemon] = useAxios(BASE_URL, formatPokemonData);

  return (
    <div className="PokeDex">
      <h3>Get your favorite Pokemon!</h3>
      <div>
        <button onClick={() => addPokemon("pikachu")}>Add Pikachu!</button>
        <button onClick={clearPokemon}>Clear Pokemon cards!</button>
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(p => (
          <PokemonCard
            key={p.id}
            front={p.front}
            back={p.back}
            name={p.name}
            stats={p.stats}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;