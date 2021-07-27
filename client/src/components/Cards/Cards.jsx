import React, { useEffect, useState } from 'react';
import { getPokemons } from '../../actions/index';
import { useSelector, useDispatch } from "react-redux";
import PokemonCard from '../PokemonCard/PokemonCard';
import './Cards.css'

function Cards() {
  const dispatch = useDispatch();

  const cards = useSelector(state => state.pokemons)

  const [current, setCurrent] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const totalCards = cards.length

  useEffect(() => {
    dispatch(getPokemons())
  }, []);

  const pages = []

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i)
  }

  function paginate (pageNumber) {
    return setCurrent(pageNumber)
  }

  const filter = useSelector(state => state.filter)

  return (
    <div>
      <div className='cards'>
        {cards && (filter.length ? filter : cards).map((pokemon, i) => {
          if(i >= current*6 - 6 && i < current * 6){
            console.log(i)
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />
          } else {
            return false
          }
        })}
      </div>
      <div class="pagination">
        {pages.map(page => (
          <div key={page}>
            <a onClick={() => paginate(page)}>
              {page}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default (Cards);