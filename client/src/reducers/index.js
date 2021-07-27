import { GET_POKEMON_BY_ID, GET_TYPES, FILTER, SET_POKEMON } from '../constants';

const initialState = {
  pokemon: {},
  pokemons: [],
  types: [],
  filter: []
};

export default function rootReducer(state = initialState, action) {

  if (action.type === SET_POKEMON) {
    return {
      ...state,
      pokemons: action.payload
    }
  }

  if (action.type === GET_POKEMON_BY_ID) {
    console.log(action)
    return {
      ...state,
      pokemon: action.payload
    }
  }

  if (action.type === GET_TYPES) {
    return {
      ...state,
      types: action.payload
    }
  }

  if (action.type === FILTER) {
    return {
      ...state,
      filter: action.payload
    }
  }

  return state
}
