export const fetchPokemon = async(url) => {
  const rootUrl = `http://localhost:3001/`;
  try {
    const response = await fetch(`${rootUrl}${url}`)
    if(response.status <= 300) {
      const json = await response.json();
      return json
    } else {
      throw new Error ('unable to get pokemon :(')
    }
  } catch(error) {
    throw new Error('unable to get pokemon :(')
  }
}

export const getPokemonTypes = async() => {
  const json = await fetchPokemon(`types`);
  return cleanPokemonTypes(json)
}

export const cleanPokemonTypes = rawTypes => {
  return rawTypes.reduce( (accu, type) => {
    accu[type.name] = type.pokemon
    return accu
  }, {})
}

export const getPokemon = async(pokemonToFetch, type) => {
  const pokemon = pokemonToFetch.map( async id => {
    const json = await fetchPokemon(`pokemon/${id}`)
    return cleanPokemon(json, type)
  })

  return await Promise.all(pokemon)
}

export const cleanPokemon = async(pokemon, type) => ({
    weight: pokemon.weight,
    name: pokemon.name,
    icon: pokemon.sprites.front_default,
    type
})