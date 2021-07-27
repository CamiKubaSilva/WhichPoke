import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { getPokemons, setPokemons } from '../../actions';
import { order } from '../../controllers/pokemon';

function Order({state, setState}) {

    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);

    function handleChange(e){
        if(e.target.value === "low"){
            dispatch(setPokemons(order(pokemons, "attack")))
        }
        if(e.target.value === "high"){
            dispatch(setPokemons(order(pokemons, "attack", "reverse")))
        }
        if(e.target.value === "az"){
            dispatch(setPokemons(order(pokemons, "name")))
        }
        if(e.target.value === "za"){
            dispatch(setPokemons(order(pokemons, "name", "reverse")))
        }
        if(e.target.value === "default"){
            dispatch(setPokemons(pokemons))
        }
        console.log(pokemons)

        setState(!state)
    }

    return (
        <div style = {{display: 'flex'}}>
            <select onChange={e => handleChange(e)} className='selector' name="select">
                <option value = "default" >Order By...</option>
                <option value="low" >Weak</option>
                <option value="high" >Strong</option>
                <option value="az" >A-Z</option>
                <option value="za" >Z-A</option>
            </select>
        </div>
    )
}

export default (Order);
