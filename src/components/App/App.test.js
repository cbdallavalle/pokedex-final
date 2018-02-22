import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import * as api from '../../helper/api-helper';

describe("App", () => {
  const mockStoreTypes = jest.fn();

  it('should start with a default state of an empty string for error', () => {
    const wrapper = shallow(
      <App storeTypes={mockStoreTypes} />, 
      { lifecyclemethodsdisabled: true }
    )
    expect(wrapper.state()).toEqual({error: ''})
  })

  it('componentDidMount should call mockStoreTypes', () => {
    const wrapper = shallow(<App storeTypes={mockStoreTypes} />)
    api.getPo
  })
})
