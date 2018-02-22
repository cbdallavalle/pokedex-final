import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import * as api from '../../helper/api-helper';
import { mockData } from '../../mockData/mockData'; 

describe("App", () => {
  const mockStoreTypes = jest.fn();

  it('should start with a default state of an empty string for error', () => {
    const wrapper = shallow(
      <App storeTypes={mockStoreTypes} />, 
      { lifecyclemethodsdisabled: true }
    )
    expect(wrapper.state()).toEqual({error: ''})
  })

  it('cleanPokemonTypes should call mockStoreTypes', () => {
    const wrapper = shallow(<App storeTypes={mockStoreTypes} />)
    api.cleanPokemonTypes = () => mockData.mockPokeTypes;
    wrapper.instance().cleanPokemonTypes(mockData.mockPokeTypes);
    
    expect(mockStoreTypes).toHaveBeenCalledWith(mockData.mockPokeTypes);
  })

  it('componenDidMount should call window.fetch', () => {
    window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 200,
      json: () => mockData.rawPokemonTypes
    }))

    const wrapper = shallow(<App storeTypes={mockStoreTypes} />)
    expect(window.fetch).toHaveBeenCalled();
  })

  it('componenDidMount should set state with an error if fetch returns an error', () => {
    window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
      status: 500
      })
    )

    const wrapper = shallow(<App storeTypes={mockStoreTypes} />)
    expect(wrapper.state().error).toEqual('unable to get pokemon :(')
  })
})
