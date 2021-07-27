const { Router } = require('express');
const {getPokemons} = require('../Controllers/pokemon');
const router = Router();

router.get('/', getPokemons);

module.exports = router;