export const pokeTypesReducer = (state={}, action) => { 
  switch (action.type) {
    case 'UPLOAD_TYPES':
      return action.pokeTypes
    default:
      return state
  }
}