import axios from 'axios';
import { GET_POKEMON_BY_ID, GET_TYPES, CREATE_POKEMON, FILTER, SET_POKEMON } from '../constants';

export function setPokemons(payload) {
  return {
    type: SET_POKEMON,
    payload
  }
}

export function getPokemons() {
  return function (dispatch) {
    return axios(`http://localhost:3001/pokemons`)
      .then(response =>
        dispatch(setPokemons(response.data)))
  };
}

export function getPokemonByName(name) {
  return function (dispatch) {
    return axios(`http://localhost:3001/pokemons?name=${name}`)
      .then(response => {
        dispatch(setPokemons(response.data))
      })
  };
}

export function getPokemonById(id) {
  console.log('getPokemonById')
  return function (dispatch) {
    return axios(`http://localhost:3001/pokemons/${id}`)
      .then(response =>
        dispatch({ type: GET_POKEMON_BY_ID, payload: response.data }))
  };
}

export function getTypes() {
  return function (dispatch) {
    return axios(`http://localhost:3001/types`)
      .then(response =>
        dispatch({ type: GET_TYPES, payload: response.data }))
  };
}

export function createPokemon(pokemon) {
  return function (dispatch) {
    return axios.post(
      `http://localhost:3001/pokemons`,
      pokemon
    )
      .then(response =>
        dispatch({ type: CREATE_POKEMON, payload: response.data }))
  };
}

export function filter(payload) {
  console.log('filter')
  return {
    type: FILTER,
    payload
  }
}
