import React from 'react';
import './PokemonInfo.css';

export const PokemonInfo = ({ icon, name, type, weight }) => {
  return (
    <div className="PokemonInfo">
      <p>{name}</p>
      <p>{type}</p>
      <p>{weight}</p>
      <img src={icon} alt={`${name} icon`} />
    </div>
  )
}