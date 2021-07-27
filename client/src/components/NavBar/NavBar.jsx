import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getPokemonByName, setPokemons } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { order } from '../../controllers/pokemon';
import './NavBar.css'

function NavBar({color}) {

  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const history = useHistory()

  const pokemons = useSelector(state => state.pokemons);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getPokemonByName(name));
    setName('');
  }

  return (
    <div className={'navBar ' + color}>
      <div className = 'link'>
      <Link to='/'>
      <button type='submit'>Change Team</button>
      </Link>
      <Link to='/home'>
      <button type='submit' onClick = {dispatch(setPokemons(order(pokemons)))}>Home</button>
      </Link>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Search pokemon...'
          type='text'
        />
        <button type='submit'>Search Pokemon</button>
      </form>
      <Link to='/createpokemon'>
        <button type='submit'>Create Pokemon</button>
      </Link>
    </div>
  );
}

export default (NavBar);

