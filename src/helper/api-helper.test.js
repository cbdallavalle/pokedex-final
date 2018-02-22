import * as api from './api-helper';
import { mockData } from '../mockData/mockData';

describe("getPokemonTypes", () => {

  it('should call window.fetch and return mockRawPokeTypes', async() => {
    window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockData.mockRawPokeTypes)
    }))
    expect(await api.getPokemonTypes()).toEqual(mockData.mockRawPokeTypes);
  })
})

describe("getPokemonTypes with window error", () => {

  it('should throw an error if the fetch call has a status of 500', async() => {
    window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 500
      })
    )
    expect(api.getPokemonTypes()).rejects.toEqual(Error('unable to get pokemon :('))
  })
})

describe("cleanPokemonTypes", () => {
  it('should return a cleaned pokemon object', () => {
    expect(api.cleanPokemonTypes(mockData.mockRawPokeTypes)).toEqual(mockData.mockPokeTypes);
  })
})