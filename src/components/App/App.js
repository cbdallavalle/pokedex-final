import React, { Component } from 'react';
import './App.css';
import CardContainer from '../../containers/CardContainer/CardContainer';
import * as api from '../../helper/api-helper';
import { storeTypes } from '../../actions';
import { connect } from 'react-redux';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      error: '',
      pokeTypes: {}
    }
  }

  componentDidMount = async() => {
    await this.cleanPokemonTypes()
  }

  cleanPokemonTypes = async() => {
    try {
      const pokeTypes = await api.getPokemonTypes();
      this.props.storeTypes(pokeTypes);
      this.setState({ pokeTypes }) ;
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <CardContainer  pokeTypes={ this.state.pokeTypes }/>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  storeTypes: types => dispatch(storeTypes(types))
})

export default connect(null, mapDispatchToProps)(App);