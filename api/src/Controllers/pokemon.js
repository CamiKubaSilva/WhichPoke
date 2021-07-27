const { Pokemon, Type, PokemonTypes } = require('../db');
const axios = require('axios');
const { BASE_URL, TYPE_URL } = require('../../constants');
const { v4: uuidv4 } = require('uuid');

async function addPokemon(req, res, next) {
    const id = uuidv4();
    const {
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        types } = req.body
    try {
        let newPokemon = await Pokemon.create({ name, hp, attack, defense, speed, height, weight, id })
        console.log(await newPokemon.addType(types))
        return res.send('Pokemon Created');
    } catch (error) {
        next(error)
    }
}

function getPokemonMine(req, res, next) {
    const pokemonMine = Pokemon.findAll();
    pokemonMine.then(response => {
        return res.send(response)
    })
        .catch(err => next(err))
}

async function getPokemons(req, res, next) {
    let { name } = req.query;
    if (name) {
        const pokemonApiName = axios.get(`${BASE_URL}${name}`)
        const pokemonMine = Pokemon.findAll({
            where: { name: name },
            include: [{ model: Type }]
        })
        let result = [];
        await pokemonMine.then(response => {
            response.length ? result = [...result, ...response] : false
        })
        await pokemonApiName.then(response => {
            let typesName = response.data.types.map(type => type = type.type.name);
            let hpObj = response.data.stats.find(stat => stat.stat.name === 'hp');
            let defenseObj = response.data.stats.find(stat => stat.stat.name === 'defense');
            let speedObj = response.data.stats.find(stat => stat.stat.name === 'speed');
            let attackObj = response.data.stats.find(stat => stat.stat.name === 'attack');
            obj = {
                name: response.data.forms[0].name,
                types: typesName,
                id: response.data.id,
                img: response.data.sprites.other['official-artwork']['front_default'],
                hp: hpObj['base_stat'],
                speed: speedObj['base_stat'],
                defense: defenseObj['base_stat'],
                attack: attackObj['base_stat'],
                height: response.data.height,
                weight: response.data.weight
            }
            result.push(obj)
            return res.send(result)
        })
            .catch(err => next(err))
        if (result[0].length === 0) {
            return res.status(404).send('error')
        }
        return res.send(result)
    } else {
        var pokemonsProps = [];
        let pokemonApi = axios.get(`${BASE_URL}`);
        const pokemonMine = Pokemon.findAll({
            include: {
                model: Type,
                attributes: ["name"],
                as: "types"
            }
        })
        pokemonApi.then(async resp => {
            for (pokemon of resp.data.results) {
                let url = axios.get(pokemon.url);
                var obj = {}
                await url.then(response => {
                    let typesName = response.data.types.map(type => type = type.type.name);
                    let hpObj = response.data.stats.find(stat => stat.stat.name === 'hp');
                    let defenseObj = response.data.stats.find(stat => stat.stat.name === 'defense');
                    let speedObj = response.data.stats.find(stat => stat.stat.name === 'speed');
                    let attackObj = response.data.stats.find(stat => stat.stat.name === 'attack');
                    obj = {
                        name: response.data.forms[0].name,
                        types: typesName,
                        id: response.data.id,
                        img: response.data.sprites.other['official-artwork']['front_default'],
                        hp: hpObj['base_stat'],
                        speed: speedObj['base_stat'],
                        defense: defenseObj['base_stat'],
                        attack: attackObj['base_stat'],
                        height: response.data.height,
                        weight: response.data.weight
                    }
                })
                pokemonsProps.push(obj)
            }
            pokemonMine.then(response => {
                if (response.length) {
                    let result = pokemonsProps.concat(response)
                    return res.send(result)
                }
                return res.send(pokemonsProps)
            })

        })
            .catch(err => next(err))
    }
}

async function getPokemonById(req, res, next) {
    let pokeId = req.params.id;
    let allPokemon = axios.get(`http://localhost:3001/pokemons`);
    try {
        await allPokemon.then(response => {
            let pokemonById = response.data.find(p => pokeId == p.id)
            console.log(pokemonById)
            if (pokemonById == undefined) {
                res.status(404).send('error')
            }
            if (isNaN(pokemonById.id)) {
                pokemonById.types = pokemonById.types.map(t => t.name)
            }
            return res.send(pokemonById)
        })
    }
    catch (error) {
        next(error)
    }
}

function getPokemonsTypes(req, res, next) {
    try {
        const apiTypes = axios.get(`${TYPE_URL}`)
        apiTypes.then(async response => {
            response && response.data.results.forEach(
                type => {
                    Type.findOrCreate({
                        where: {
                            name: type.name
                        }
                    })
                })
            let pokeTypes = await Type.findAll();
            return res.send(pokeTypes)
        })
    } catch (error) {
        next(error)
    }
};

module.exports = {
    getPokemons,
    addPokemon,
    getPokemonById,
    getPokemonMine,
    getPokemonsTypes
};

