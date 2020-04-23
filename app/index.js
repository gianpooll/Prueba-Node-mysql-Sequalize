'use strict'

const express = require('express')
// Requerimos la base de datos
require('./database')
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')
const methodOverride = require('method-override')

const Rutas_Usuario = require('./rutas/usuariosRutas')
const Rutas_Principales = require('./rutas/principales.Rutas')

const app = express()
// Configuracion del puerto del servidor
app.set('port', process.env.PORT || 3000)

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


// Ejecución del Servidor
function main(){
	app.listen(app.get('port'))
	console.log(`Servidor ejecutandose en el puerto: ${app.get('port')}`)
}

main()