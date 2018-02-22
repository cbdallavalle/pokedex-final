import * as actions from './index.js';

describe("storeTypes", () => {
  const mockPokeTypes = {
    normal: ['16', '17', '18'],
    fighting: ['56', '57', '58'],
    flying: ['21', '22', '23']
  }

  const expected = {
    type: 'UPLOAD_TYPES',
    pokeTypes: mockPokeTypes
  }

  it('should take in pokeTypes and return a new object with type', () => {
    expect(actions.storeTypes(mockPokeTypes)).toEqual(expected)
  })
})