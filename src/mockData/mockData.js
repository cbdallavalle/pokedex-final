export const mockData = {
  mockPokeTypes: {
    normal: ['16', '17', '18'],
    fighting: ['56', '57', '58'],
    flying: ['21', '22', '23']
  },
  mockRawPokeTypes: [
    {id: "1", name: "normal", pokemon: ['16', '17', '18'] },
    {id: "2", name: "fighting", pokemon: ['56', '57', '58'] },
    {id: "3", name: "flying", pokemon: ['21', '22', '23'] }
  ],
  expectedStoreTypes: {
    type: 'UPLOAD_TYPES',
    pokeTypes: {
    normal: ['16', '17', '18'],
    fighting: ['56', '57', '58'],
    flying: ['21', '22', '23']
  }
  }
}