export const getPokemonTypes = async() => {
  try {
    const response = await fetch('http://localhost:3001/types');
    
    if (response.status <= 300) {
      const types = await response.json();
      return types
    } else {
      throw new Error('unable to get pokemon :(')
    }
  } catch(error) {
      throw error
  }
}

// export const fetchPokemon = async() => {
//   const rootUrl = `http://localhost:3001/pokemon/${id}`;
//   try {
//     const response = await fetch()
//   }
// }

export const cleanPokemonTypes = rawTypes => {
  return rawTypes.reduce( (accu, type) => {
    accu[type.name] = type.pokemon
    return accu
  }, {})
}

export const getPokemon = async(pokemonToFetch, type) => {
  const pokemon = pokemonToFetch.map( async id => {
    const response = await fetch(`http://localhost:3001/pokemon/${id}`)
    const json = await response.json();
    return cleanPokemon(json, type)
  })

  return await Promise.all(pokemon)
}

export const cleanPokemon = async(pokemon, type) => {
  const weight = pokemon.weight;
  const name = pokemon.name;
  const icon = pokemon.sprites.front_default;

  return {
    weight,
    name,
    icon,
    type
  }
}