const { Router } = require('express');
const {addPokemon} = require('../Controllers/pokemon');
const router = Router();

router.post('/', addPokemon);

module.exports = router;

// - [ ] __POST /pokemons__:
//   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
//   - Crea un pokemon en la base de datos