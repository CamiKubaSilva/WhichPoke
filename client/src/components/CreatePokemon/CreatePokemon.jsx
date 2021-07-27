import React, { useState, useEffect } from 'react';
import { createPokemon, getTypes } from '../../actions/index';
import { useDispatch, useSelector } from "react-redux";
import './CreatePokemon.css';
import Select from 'react-select'

function CreatePokemon({ color }) {
    // debe contener
    // - [ ] Un formulario __controlado__ con los campos mencionados en el detalle del pokemon
    // - [ ] Posibilidad de seleccionar/agregar más de un tipo de pokemon
    // - [ ] Botón/Opción para crear un nuevo pokemon

    const dispatch = useDispatch();

    const [state, setState] = useState({})

    useEffect(() => {
        dispatch(getTypes())
    }, []);

    const types = useSelector((state) => state.types);

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function handleChangeS(e) {
        setState({
            ...state,
            types: e.map(a => a.value)
        })
        console.log(state.types)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(createPokemon(state))
        document.getElementById('form').reset()
    }


    const typeSelect = types.map((T) => {
        return {
            value: T.id,
            label: T.name
        }
    })

    return (
        <div>
            <form
                onChange={e => handleChange(e)}
                onSubmit={(e) => handleSubmit(e)}
                id='form'
            >
                <div className='create'>
                    <input placeholder='Name...' className='select' name="name"></input>
                    <br></br>
                    <Select className='selectMulti' isMulti options={typeSelect} onChange={e => handleChangeS(e)} /> 
                    <input placeholder='Hp...' className='select' name="hp"></input>
                    <input placeholder='Attack...' className='select' name="attack"></input>
                    <input placeholder='Defense...' className='select' name="defense"></input>
                    <input placeholder='Speed...' className='select' name="speed"></input>
                    <input placeholder='Height...' className='select' name="height"></input>
                    <input placeholder='Weight...' className='select' name="weight"></input>
                    <div className = 'button'>
                        <button
                            className={'buttonCreate ' + color}
                            type='submit'
                            onClick={e => handleSubmit(e)}>Create</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default (CreatePokemon);