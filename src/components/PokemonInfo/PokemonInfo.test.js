/* eslint-disable */
import React from 'react';
import { PokemonInfo } from './PokemonInfo';
import { shallow } from 'enzyme';

describe("PokemonInfo", () => {
  const props = {
    icon: '',
    name: '',
    type: '',
    weight: ''
  }

  it('should match the snapshot', () => {
    const wrapper = shallow(<PokemonInfo {...props} />)
    expect(wrapper).toMatchSnapshot();
  })
})