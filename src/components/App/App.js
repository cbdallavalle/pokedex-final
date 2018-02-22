import React, { Component } from 'react';
import './App.css';
// import FakeContainer from '../../containers/FakeContainer/';
import { CardContainer } from '../../containers/CardContainer/CardContainer';
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
    try {
      const rawPokeTypes = await api.getPokemonTypes();
      this.cleanPokemonTypes(rawPokeTypes)
    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  cleanPokemonTypes = rawPokeTypes => {
    const pokeTypes = api.cleanPokemonTypes(rawPokeTypes);
    this.props.storeTypes(pokeTypes)
    this.setState({ pokeTypes })
  }

  render() {
    console.log(this.state.pokeTypes)
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <CardContainer pokeTypes={ this.state.pokeTypes } />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  storeTypes: types => dispatch(storeTypes(types))
})


export default connect(null, mapDispatchToProps)(App);
