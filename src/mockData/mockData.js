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
  },
  mockPokemonToDisplay: [
    {weight: 18, name: "pidgey", icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png", type: "normal"},
    {weight: 300, name: "pidgeotto", icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png", type: "normal"}
  ],
  mockRawPokemonData: {
    id: "16",
    name: "pidgey",
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png",
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
    },
    type: "1",
    weight: 18
  },
  mockCleanPokemonData: [
    {
      weight: 18,
      name: "pidgey",
      icon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
      type: "flying"
    }
  ]
}