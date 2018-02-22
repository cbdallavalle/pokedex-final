import { combineReducers } from 'redux';
// import fakeReducer from './fake-reducer'
import { pokeTypesReducer } from './pokeTypesReducer';

const rootReducer = combineReducers({
  pokeTypes: pokeTypesReducer
})

export default rootReducer
