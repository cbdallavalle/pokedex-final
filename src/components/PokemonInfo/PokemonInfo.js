import React from 'react';

export const PokemonInfo = ({icon, name, type, weight}) => {
  return (
    <div className="pokemon-info">
      <p>{name}</p>
      <p>{type}</p>
      <p>{weight}</p>
      <img src={icon} alt={`${name} icon`} />
    </div>
  )
}