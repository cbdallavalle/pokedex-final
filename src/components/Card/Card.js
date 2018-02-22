import React, { Component } from 'react';
import { PokemonInfo } from '../PokemonInfo/PokemonInfo';

export class Card extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  pokemonInfo = () => {
    return this.props.pokemonToDisplay && this.state.clicked === true 
      && this.props.pokemonToDisplay.map( (pokemon, index) => {
      return (
        <PokemonInfo key={ index } {...pokemon} />
      )
    })
  }

  render() {
    return (
      <article 
        className="Card"
        onClick={ () => {
          this.handleClick();
          this.props.handleClick(this.props.type)
        } }
      >
        <h1>{ this.props.type }</h1>
        { this.pokemonInfo() }
      </article>
    )
  }
} 