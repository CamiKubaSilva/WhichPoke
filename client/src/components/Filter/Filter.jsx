import React, { useState, useEffect } from 'react';
import { filter, getTypes } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import './Filter.css';

function Filter({state, setState}) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTypes())
    }, []);

    const pokemons = useSelector(state => state.pokemons)
    const types = useSelector(state => state.types);

    function handleChangeC(e){
        if(e.target.value === "api"){
            dispatch(filter(pokemons.filter(p => typeof p.id === 'number' )))
        }
        if(e.target.value === "db"){
            dispatch(filter(pokemons.filter(p => typeof p.id !== 'number' )))
        }
        if(e.target.value === "default"){
            dispatch(filter([]))
        }
        setState(!state)
    }

    function handleChangeT(e){
        dispatch(filter(pokemons.filter(p => p.types.includes(e.target.value))))
        }

    return (
        <div className='filter'>
            <select className='selector' name="select" onChange = {e => handleChangeC(e)}>
                <option value = "default" >Filter By Creator...</option>
                <option value="api" >Existing Pokemons</option>
                <option value="db" >My Pokemons</option>
            </select>

            <select className='selector' name="select" onChange = { e => handleChangeT(e)}>
                <option default >Filter By Type...</option>
                {types.map((T) => (
                    <option value={T.name}>{T.name}</option>
                ))}
            </select>
            
        </div>
    )
}

export default (Filter);