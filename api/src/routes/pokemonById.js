// - [ ] __GET /pokemons/{idPokemon}__:
//   - Obtener el detalle de un pokemon en particular
//   - Debe traer solo los datos pedidos en la ruta de detalle de pokemon
//   - Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes

const { Router } = require('express');
const {getPokemonById} = require('../Controllers/pokemon');
const router = Router();

router.get('/:id', getPokemonById); 

module.exports = router;