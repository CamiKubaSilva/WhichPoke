import { Link } from "react-router-dom";
import './PokemonCard.css'

function PokemonCard({ pokemon }) {
    return (
        <div className='card'>
            <div className= 'card-body'>
                <p className= 'card-title'>{pokemon.name}</p>
                <img src={pokemon.img} />
                {typeof pokemon.types[0] !== "object" ? <p>Types: {pokemon.types.join(', ')}</p> :
                    <p>Types: {pokemon.types.map(p => p.name).join(', ')}</p>}
                <p>Id: {pokemon.id}</p>
                <Link to={`/pokemons/${pokemon.id}`}>
                    <button id='button' type='submit'>Read More</button>
                </Link>
            </div>
        </div>
    );
}

export default (PokemonCard);