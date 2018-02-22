import React, { Component } from 'react';
import loadingGif from '../../assets/loading.gif';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card';
import * as api from '../../helper/api-helper';

export class CardContainer extends Component {
  constructor(){
    super();
    this.state = {}
  }

  displayLoadingGif = () => {
   return !Object.keys(this.props.pokeTypes).length ? <img src={ loadingGif } alt="loading" /> : <div></div>
  }

  handleClick = async (type) => {
    if(!this.state[type]) {
      const pokemonToFetch = this.props.pokeTypes[type];
      const result = await api.getPokemon(pokemonToFetch, type);
      this.setState({ [type]: result })
    }
  }

  displayCards = () => {
    return Object.keys(this.props.pokeTypes).map( type => {
      return (
        <Card 
          type={ type } 
          handleClick={ this.handleClick }
          pokemonToDisplay={this.state[type]}
        />
      )
    })
  }

  render() {
    console.log(this.state)
    return (
      <section className="CardContainer">
        { this.displayLoadingGif() }
        { this.displayCards() }
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  pokeTypes: state.pokeTypes,
})

export default connect(mapStateToProps, null)(CardContainer);


// = ({ pokeTypes }) => {
//   const loading = !Object.keys(pokeTypes).length ? <img src={loadingGif} alt="loading" /> : <div>LOADED</div>
//   const { bug, fighting, flying, ghost, ground, normal, poison, rock, steel } = pokeTypes;

//   return (
//     <section className="CardContainer">
//       { loading }
//     </section>
//   )
// }