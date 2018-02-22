import * as api from './api-helper';
import { mockData } from '../mockData/mockData';

describe("getPokemonTypes", () => {
  window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
    status: 200,
    json: () => Promise.resolve(mockData.mockRawPokeTypes)
  }))

  it('should call window.fetch', async() => {
    api.getPokemonTypes();
    expect(window.fetch).toHaveBeenCalled();
  })
})

describe("cleanPokemonTypes", () => {
  it('should return a cleaned pokemon object', () => {
    expect(api.cleanPokemonTypes(mockData.mockRawPokeTypes)).toEqual(mockData.mockPokeTypes);
  })
})