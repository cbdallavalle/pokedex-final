import { combineReducers } from 'redux';
import { pokeTypesReducer } from './pokeTypesReducer';

const rootReducer = combineReducers({
  pokeTypes: pokeTypesReducer
})

export default rootReducer
