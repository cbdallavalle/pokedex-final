import React, { Component } from 'react';

export const Card = ({type, handleClick, pokemonToDisplay}) => {

  const pokemonInfo = pokemonToDisplay ? 
    pokemonToDisplay.map( pokemon => {
      const { icon, name, type, weight } = pokemon
      
      return (
        <div className="pokemon-info">
          <p>{name}</p>
          <p>{type}</p>
          <p>{weight}</p>
          <img src={icon} alt={`${name} icon`} />
        </div>
      )
    })
    :
    <div></div>

  return (
    <article 
      className="Card"
      onClick={ () => handleClick(type) }
    >
      <h1>{type}</h1>
      { pokemonInfo }
    </article>
  )
}