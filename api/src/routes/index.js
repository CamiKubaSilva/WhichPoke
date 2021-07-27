const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemons = require('./allPokemon.js');
const createPokemon = require('./createPokemon.js');
const getPokemonById = require('./pokemonById.js');
const pokemonMine = require('./pokemonMine.js');
const getPokemonTypes = require('./pokemonTypes.js');
// const getDetail = require('./allPokemon.js');

const router = Router();

// Configurar los routers

router.use('/pokemons', getPokemons, createPokemon, getPokemonById);
router.use('/types', getPokemonTypes);
// Extras
router.use('/pokemonMine', pokemonMine);
// router.use('/pokemonDetail', getDetail);

module.exports = router;
