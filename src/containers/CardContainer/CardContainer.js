import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card';
import * as api from '../../helper/api-helper';
import loadingGif from '../../assets/loading.gif';
import './CardContainer.css';

export class CardContainer extends Component {
  constructor(){
    super();
    this.state = {
      error: ''
    };
  }

  handleClick = async (type) => {
    if (!this.state[type]) {
      try {
        const result = await api.getPokemon(this.props.pokeTypes[type], type);
        this.setState({ [type]: result });
      } catch (error) {
        this.setState({ error: error.message });
      }
    }
  }

  displayLoadingGif = () => {
    return !Object.keys(this.props.pokeTypes).length 
    && <img src={ loadingGif } alt="loading" />; 
  }

  displayCards = () => {
    return Object.keys(this.props.pokeTypes).map( (type, index) => {
      return (
        <Card 
          key={ index }
          type={ type } 
          handleClick={ this.handleClick }
          pokemonToDisplay={ this.state[type] }
        />
      );
    });
  }

  render() {
    return (
      <section className="CardContainer">
        { this.displayLoadingGif() }
        { this.displayCards() }
        { this.state.error }
      </section>
    );
  }
}

CardContainer.propTypes = {
  pokeTypes: PropTypes.object.isRequired
};

export const mapStateToProps = state => ({
  pokeTypes: state.pokeTypes
});

export default connect(mapStateToProps, null)(CardContainer);