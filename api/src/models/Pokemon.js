const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo, recibe modelname(nombre) ---> le agrega una 's' para que no pase esto uso freezetable como options
  //, atributos, opciones
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
		name: {
			type: DataTypes.STRING,
      varchar: 255,
			allowNull: false
		},
    hp: {
      type: DataTypes.INTEGER,
      char: 10
    },
    weight: {
      type: DataTypes.INTEGER,
      char: 10
    },
    height: {
      type: DataTypes.INTEGER,
      char: 10
    },
    speed: {
      type: DataTypes.INTEGER,
      char: 10
    },
    defense: {
      type: DataTypes.INTEGER,
      char: 10
    },
    strength: {
      type: DataTypes.INTEGER,
      char: 10
    }
  }, {})
}


// - Vida
// - Fuerza
// - Defensa
// - Velocidad
// - Altura
// - Peso