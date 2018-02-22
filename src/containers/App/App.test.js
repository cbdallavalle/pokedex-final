import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import * as api from '../../helper/api-helper';
import { mockData } from '../../mockData/mockData'; 

describe("App", () => {
  let wrapper;
  const mockStoreTypes = jest.fn();

  beforeEach( () => {
    wrapper = shallow(
      <App storeTypes={mockStoreTypes} />
    )

  })

  it('should match the snapshot', () => {
    
    expect(wrapper).toMatchSnapshot();
  })

  it('should start with a default state of an empty string for error and an empty object for pokeTypes', () => {
    wrapper = shallow(
      <App storeTypes={mockStoreTypes} />, 
      { lifecyclemethodsdisabled: true }
    )

    expect(wrapper.state()).toEqual({ error: '', pokeTypes: {} })
  })

  //cleanPokemonTypes
  it('cleanPokemonTypes should set state with an error if it catches an error', async() => {
   window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 500,
      error: new Error('unable to get pokemon :(')
    }))

    await wrapper.instance().cleanPokemonTypes();

    expect(wrapper.state().error).toEqual('unable to get pokemon :(')

  })

  it('cleanPokemonTypes should call mockStoreTypes', async() => {
    api.getPokemonTypes = () => mockData.mockPokeTypes;

    await wrapper.instance().cleanPokemonTypes();

    expect(mockStoreTypes).toHaveBeenCalledWith(mockData.mockPokeTypes);
  })

  it('cleanPokemonTypes should call set state with pokeTypes', async() => {
    api.getPokemonTypes = () => mockData.mockPokeTypes;

    await wrapper.instance().cleanPokemonTypes();

    expect(wrapper.state().pokeTypes).toEqual(mockData.mockPokeTypes)
  })
})

describe('mapDispatchToProps', () => {
  
  it('should call mockDispatch', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.storeTypes();
    
    expect(mockDispatch).toHaveBeenCalled();
  })
})
