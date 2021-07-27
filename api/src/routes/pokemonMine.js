const { Router } = require('express');
const {getPokemonMine} = require('../Controllers/pokemon');
const router = Router();

router.get('/', getPokemonMine); 

module.exports = router;