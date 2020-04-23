'use strict'

const express = require('express')
require('./database')
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')
const methodOverride = require('method-override')

const Rutas_Usuario = require('./rutas/usuariosRutas')
const Rutas_Principales = require('./rutas/principales.Rutas')

const app = express()
const port = 3000

//middlewares de la aplicacion
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(methodOverride('_method'))

// Configuracion de las vistas de la aplicacion
app.set('views', path.join(__dirname, 'vistas'))
app.set('view engine', 'pug')

//Configuracion de los archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

// Rutas
app.use(Rutas_Usuario)
app.use(Rutas_Principales)


// Ejecución del Servidor y Base de Datos
function main(){
	// Servidor
	app.listen(3000)
	console.log(`Servidor ejecutandose en el puerto: ${port}`)
}

main()