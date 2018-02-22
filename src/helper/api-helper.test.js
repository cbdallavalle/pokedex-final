/* eslint-disable */
import * as api from './api-helper';
import { mockData } from '../mockData/mockData';

describe('fetchPokemon', () => {
  it('should call window.fetch and return mockRawPokeTypes', async () => {
    window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockData.mockRawPokeTypes)
    }))

    expect(await api.fetchPokemon('url')).toEqual(mockData.mockRawPokeTypes);
  })

  it('should throw an error when window.fetch rejects', () => {
    window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 500
    }))
    
    expect(api.fetchPokemon('url')).rejects.toEqual(Error('unable to get pokemon :('));
  })
})


describe('getPokemonTypes', () => {

  it('should return clean pokemonType data', async() => {
    window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockData.mockRawPokeTypes)
    }))

    expect(await api.getPokemonTypes()).toEqual(mockData.mockPokeTypes)
  })
})


describe('cleanPokemonTypes', () => {
  it('should return a cleaned pokemon object', () => {
    expect(api.cleanPokemonTypes(mockData.mockRawPokeTypes)).toEqual(mockData.mockPokeTypes);
  })
})

describe('getPokemon', () => {
  it('should return clean pokemon data', async() => {
    window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockData.mockRawPokemonData)
    }))

    expect(await api.getPokemon([18], 'flying')).toEqual(mockData.mockCleanPokemonData)
  })
})

describe('cleanPokemon', () => {
  it('should clean raw pokemon data', () => {
    expect(api.cleanPokemon(mockData.mockRawPokemonData, 'flying')).toEqual(mockData.mockCleanPokemonData[0])
  })
})










