import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from './CardContainer';
import { mockData } from '../../mockData/mockData';

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer pokeTypes={ mockData.mockPokeTypes } />)
  })

  it('should start with an empty object as a default state', () => {

  })
})