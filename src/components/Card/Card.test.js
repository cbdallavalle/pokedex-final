import React from 'react';
import { Card } from './Card';
import { shallow } from 'enzyme';
import { mockData } from '../../mockData/mockData';

describe("Card", () => {
  let wrapper;
  const mockHandleClick = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Card 
        type={ 'electric' }
        handleClick={ mockHandleClick }
        pokemonToDisplay={ mockData.mockPokemonToDisplay }
      />
    )
  })

  it('should match the snapshot when clicked is false and pokemonToDisplay does not exist', () => {
    const wrapper = shallow(
      <Card 
        type={ 'electric' }
        handleClick={ mockHandleClick }
      />
    )

    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot when clicked is true and pokemonToDisplay exists', () => {
    wrapper.setState({ clicked: true })
    expect(wrapper).toMatchSnapshot();

  })

  it('should match the snapshot when clicked is fasle but pokemonToDisplay exists', () => {
    expect(wrapper).toMatchSnapshot();
  })

  //handleClick
  it('handleClick should update the state to be true if clicked is false', () => {
    expect(wrapper.state().clicked).toEqual(false);
    wrapper.instance().handleClick();
    expect(wrapper.state().clicked).toEqual(true);
  })

  it('handleClick should update the state to be false if clicked is true', () => {
    wrapper.setState({clicked: true})
    expect(wrapper.state().clicked).toEqual(true);
    wrapper.instance().handleClick();
    expect(wrapper.state().clicked).toEqual(false);
  })

  //props handleClick
  it('should call props handleClick when article is clicked', () => {

    wrapper.find('article').simulate('click');
    expect(mockHandleClick).toHaveBeenCalledWith('electric')
  })
})