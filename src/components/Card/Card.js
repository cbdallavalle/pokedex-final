import React, { Component } from 'react';

export class Card extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    }
  }

  pokemonInfo = () => {
    return this.props.pokemonToDisplay && 
    this.props.pokemonToDisplay.map( (pokemon, index) => {
      const { icon, name, type, weight } = pokemon
      
      return (
        <div className="pokemon-info" key={ index }>
          <p>{name}</p>
          <p>{type}</p>
          <p>{weight}</p>
          <img src={icon} alt={`${name} icon`} />
        </div>
      )
    })
  }

  render() {
    return (
    <article 
      className="Card"
      onClick={ () => this.props.handleClick(this.props.type) }
    >
      <h1>{this.props.type}</h1>
      { this.pokemonInfo() }
    </article>
  )
  }
} 

  
// ({type, handleClick, pokemonToDisplay}) => {

//   const pokemonInfo = pokemonToDisplay ? 
//     pokemonToDisplay.map( (pokemon, index) => {
//       const { icon, name, type, weight } = pokemon
      
//       return (
//         <div className="pokemon-info" key={ index }>
//           <p>{name}</p>
//           <p>{type}</p>
//           <p>{weight}</p>
//           <img src={icon} alt={`${name} icon`} />
//         </div>
//       )
//     })
//     :
//     <div></div>

//   return (
//     <article 
//       className="Card"
//       onClick={ () => handleClick(type) }
//     >
//       <h1>{type}</h1>
//       { pokemonInfo }
//     </article>
//   )
// }