'use strict'
const rutas = require('express').Router()
const UsuarioControlador = require('../controladores/usuarioControlador')

//Busca todos los usuarios en la base de datos
rutas.get('/usuarios', UsuarioControlador.verUsuarios)

//Buscar un usuario por el Id en la base e datos
rutas.get('/usuarios/:id', UsuarioControlador.verUnUsuario)

// Envia el formulario para crear un usuario
rutas.get('/usuarios-nuevo', UsuarioControlador.formularioCrearUsuario)

//Crea un usuario en la base de datos
rutas.post('/usuarios-guardar', UsuarioControlador.crearUsuarios)

// Ruta que envia el formulario de edicion del usuario
rutas.get('/usuarios-editar/:id', UsuarioControlador.formEditarUsuario)

//Edita un usuario en la base de datos
rutas.put('/usuarios-editado/:id', UsuarioControlador.editarUsuario)

//Elimina un usuario en la base de datos
rutas.delete('/usuarios-eliminar/:id', UsuarioControlador.eliminarUsuario)

module.exports = rutas