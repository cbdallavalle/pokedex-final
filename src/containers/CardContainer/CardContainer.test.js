import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from './CardContainer';
import { mockData } from '../../mockData/mockData';
import * as api from '../../helper/api-helper';

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer pokeTypes={ mockData.mockPokeTypes } />)
  })

  it('should start with an empty string for error as a default state', () => {
    
    expect(wrapper.state()).toEqual({error: ''})
  })

  //handleClick
  it('handleClick should update state with an error if the fetch returns an error', async() => {
   window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 500,
      error: new Error('unable to get pokemon :(')
    }))

    await wrapper.instance().handleClick('flying');
    
    expect(wrapper.state().error).toEqual('unable to get pokemon :(')
  })

  it('handleClick should update state if that type of state does not exist', async() => {
    api.getPokemon = () => mockData.mockPokemonToDisplay;
    
    await wrapper.instance().handleClick('flying');
    
    expect(wrapper.state().flying).toEqual(mockData.mockPokemonToDisplay)
  })

  it('handleClick should not update state if that type of state does exist', async() => {
    wrapper.setState({ flying: 'pidgeotto is super cool' })
    api.getPokemon = () => mockData.mockPokemonToDisplay;
    
    await wrapper.instance().handleClick('flying');
    
    expect(wrapper.state().flying).toEqual('pidgeotto is super cool')
  })

  //displayLoadingGif & displayCards
  it('the loading Gif should display if pokeType is an empty object but no cards should display', () => {
    wrapper = shallow(<CardContainer pokeTypes={ {} } />)
    
    expect(wrapper).toMatchSnapshot();
  })

  it('the loading Gif should not display if pokeType exists but the cards should display', () => {
    
    expect(wrapper).toMatchSnapshot();
  })
})

describe('mapStateToProps', () => {
  
  it('should take in state and return an object with pokeTypes as a key', () => {
    const defaultState = {
      pokeTypes: mockData.mockPokeTypes
    }
    const expected = {
      pokeTypes: mockData.mockPokeTypes
    }

    expect(mapStateToProps(defaultState)).toEqual(expected)
  })
})