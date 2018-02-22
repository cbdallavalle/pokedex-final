import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/'
import * as api from '../../helper/api-helper';
import { storeTypes } from '../../actions';
import { connect } from 'react-redux';
        // <FakeContainer />



export class App extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    }
  }

  componentDidMount = async() => {
    try {
      const rawPokeTypes = await api.getPokemonTypes();
      console.log(rawPokeTypes)
      this.cleanPokemonTypes(rawPokeTypes)
    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  cleanPokemonTypes = rawPokeTypes => {
    const pokeTypes = api.cleanPokemonTypes(rawPokeTypes);
    this.props.storeTypes(pokeTypes)
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  storeTypes: types => dispatch(storeTypes(types))
})


export default connect(null, mapDispatchToProps)(App);
