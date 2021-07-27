import React, { useEffect } from 'react';
import { getPokemonById } from '../../actions/index';
import { useSelector, useDispatch } from "react-redux";
import './PokemonDetail.css'

function PokemonDetail({ id }) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemonById(id))
    }, []);

    const poke = useSelector(state => state.pokemon)

    console.log(poke)

    // let types = poke.types.join(', ')

    return (
        <div className='card'>
            <div className='card-body'>
                <div>
                    <img className='img' src={poke.img} alt={poke.name} />
                    <p className='card-title'> {poke.name}</p>
                    <p>Types: {poke.types && poke.types.join(', ')}</p>
                    <p>Id: {poke.id}</p>
                </div>
                <div>
                    <h1>Stats</h1>
                </div>
                <div className='block-container'>
                    <div className='block'>
                        <p>Hp: {poke.hp}</p>
                        <p>Attack: {poke.attack}</p>
                    </div>
                    <div className='block'>
                        <p>Defense: {poke.defense}</p>
                        <p>Speed: {poke.speed}</p>
                    </div>
                    <div className='block'>
                        <p>Height: {poke.height}</p>
                        <p>Weight: {poke.weight}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default (PokemonDetail);