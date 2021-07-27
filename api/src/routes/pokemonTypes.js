// - [ ] __GET /types__:
//   - Obtener todos los tipos de pokemons posibles
//   - En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

const { Router } = require('express');
const {getPokemonsTypes} = require('../Controllers/pokemon');
const router = Router();

router.get('/', getPokemonsTypes); 

module.exports = router;