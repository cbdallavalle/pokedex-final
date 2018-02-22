import { pokeTypesReducer } from './pokeTypesReducer';
import { storeTypes } from '../actions/index';
import { mockData } from '../mockData/mockData'

describe("pokeTypesReducer", () => {

  it('should return an empty object as a default state', () => {
    expect(pokeTypesReducer(undefined, {})).toEqual({})
  })

  it('should return the action.pokeTypes as the new state', () => {
    expect(pokeTypesReducer({}, storeTypes(mockData.mockPokeTypes))).toEqual(mockData.mockPokeTypes)
  })
})