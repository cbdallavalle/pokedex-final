import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from './CardContainer';
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

  //displayLoadingGif
  it('displayLoadingGif should display the loading Gif if pokeType is an empty object', () => {
    wrapper = shallow(<CardContainer pokeTypes={ {} } />)
    expect(wrapper).toMatchSnapshot();
  })

  it('displayLoadingGif should not display the loading Gif if pokeType is an empty object', () => {
    expect(wrapper).toMatchSnapshot();
  })

  //handleClick
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

  it.skip('handleClick should update state with an error if the fetch returns an error', async() => {

    wrapper.setState({ flying: 'pidgeotto is super cool' })
    await wrapper.instance().handleClick('flying');
    // expect(wrapper.state().error).toEqual('unable to get pokemon :(')
  })
})