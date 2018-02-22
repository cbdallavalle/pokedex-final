import * as actions from './index.js';
import { mockData } from '../mockData/mockData'; 

describe("storeTypes", () => {

  it('should take in pokeTypes and return a new object with type', () => {
    expect(actions.storeTypes(mockData.mockPokeTypes)).toEqual(mockData.expectedStoreTypes)
  })
})