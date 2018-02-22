import React, { Component } from 'react';
// import './App.css';
import CardContainer from '../../CardContainer/CardContainer';
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
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <CardContainer  />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  storeTypes: types => dispatch(storeTypes(types))
})


export default connect(null, mapDispatchToProps)(App);






































// import React, { Component } from 'react';
// import PropTypes, { shape, func, string } from 'prop-types';
// import { connect } from 'react-redux';
// // import { fakeAction } from '../../actions';
// class FakeContainer extends Component {

//   render() {
//     return (
//       <div>
//         <button onClick={()=> {
//           // this.props.fakeAction()
//           alert('FAKE')
//         }}> FAKE </button>
//       </div>
//     );
//   }
// }

// FakeContainer.propTypes = {
//   fake: shape({ fake: string }),
//   fakeAction: func.isRequired
// };

// const mapStateToProps = ({ fake }) => ({ fake });
// const mapDispatchToProps = dispatch => ({ fakeAction:
//   () => dispatch(fakeAction())
// });
// export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer);
