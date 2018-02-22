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
      throw new Error('unable to get pokemon :(')
  }
}

export const cleanPokemonTypes = rawTypes => {
  return rawTypes.reduce( (accu, type) => {
    accu[type.name] = type.pokemon
    return accu
  }, {})
}