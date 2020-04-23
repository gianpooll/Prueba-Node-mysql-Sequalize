'use strict'
const rutas = require('express').Router()
const principalesControlador = require('../controladores/pricipales.Controlador')

// Ruta de entrada a la aplicación
rutas.get('/', principalesControlador.home)

module.exports = rutas