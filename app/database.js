'use strict'

const Sequalize = require('sequelize')
const UsuarioModelo = require('./modelos/usuarioModel')

const db = new Sequalize('pruebasequelize', 'root', '', {
	dialect: 'mysql',
	host: 'localhost'
})

const usuario = UsuarioModelo(db, Sequalize)

db.sync()
	.then( () => {
		console.log('Tablas Creadas')
	})

module.exports = {
	usuario
}