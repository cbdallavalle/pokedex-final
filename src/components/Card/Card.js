import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PokemonInfo } from '../PokemonInfo/PokemonInfo';
import './Card.css';

export class Card extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  pokemonInfo = () => {
    return this.props.pokemonToDisplay && this.state.clicked === true 
      && this.props.pokemonToDisplay.map( (pokemon, index) => {
        return (
          <PokemonInfo key={ index } {...pokemon} />
        );
      });
  }

  render() {
    const clicked = this.state.clicked === true ? 'displayPokemon' : '';
    
    return (
      <article 
        className="Card"
        id={ clicked }
        onClick={ () => {
          this.handleClick();
          this.props.handleClick(this.props.type);
        } }
      >
        <h1>{ this.props.type }</h1>
        <div className="pokemon-info-cont">
          { this.pokemonInfo() }
        </div>
      </article>
    );
  }
} 

Card.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  pokemonToDisplay: PropTypes.array
};