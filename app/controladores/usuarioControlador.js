'use strict'

const UsuarioModelo = require('../database').usuario

// Funcion que busca todos los usuarios en la base de datos
async function verUsuarios(req, res){

	try{
		const usuarios = await UsuarioModelo.findAll()
		res.render('./usuarios/verUsuarios', {usuarios})
	}catch(err){
		res.status(400).json({msj: `Error al buscar los Usuarios: ${err}`})
	}
		
}

// Funcion que retorna el formulario de creacion de usuario
function formularioCrearUsuario (req, res) {
	res.render('./usuarios/crearUsuario')
}

// Funcion que crea un usuario en la base de datos
async function crearUsuarios(req, res){

	let nuevoUsuario = req.body
	console.log(nuevoUsuario)

	if(nuevoUsuario.nombre_usuario == "" || nuevoUsuario.email == "" || nuevoUsuario.usuario == "" || nuevoUsuario.contrasena == ""){
		let error = "Por favor llena todos los campos del formulario"
		res.render('./usuarios/crearUsuario', { error })
	}else{
		await UsuarioModelo.create(nuevoUsuario)
		res.redirect('/usuarios')
	}

}

//Funscion que busca un usario en la base de datos
async function verUnUsuario (req, res){

	let idUsuario = req.params.id
	try{
		const usuario = await UsuarioModelo.findOne({ where: {idusuario: idUsuario} })
		res.json(usuario)
	}catch(err){
		res.status(400).json({msj: `Error al buscar el usuario: ${err}`})
	}

}

// Funcion que enviw el formulario de edicion de Usuarios
async function formEditarUsuario (req, res) {
	let idUsuario = req.params.id
	const usuario = await UsuarioModelo.findOne({ where: {idusuario: idUsuario} })
	if(!usuario){
		let error = "Error al Editar el susuario en la base de datos"
		res.render('./usuarios/verUsuarios', { error })
	}else{
		res.render('./usuarios/editarUsuario', { usuario })
	}
}

// Funcion que edita un usuario en la base de datos
async function editarUsuario (req, res){
	let idUsuario = req.params.id
	let nuevosDatos = req.body
	try{
		await UsuarioModelo.update(nuevosDatos, { where: {idusuario: idUsuario} })
		res.redirect('/usuarios')
	}catch(err){
		res.status(400).json({msj: `Error al actualizar en la base de datos: ${err}`})
	}

}

// Funcion que elimina usuarios en la base de datos
async function eliminarUsuario (req, res){
	let idUsuario = req.params.id
	try{
		const eliminado = await UsuarioModelo.destroy({ where: { idusuario: idUsuario } })
		res.redirect('/usuarios')
	}catch(err){
		res.status(400).json({msj: `Error al eliminar en la base de datos: ${err}`})
	}

}

module.exports = {
	verUsuarios,
	crearUsuarios,
	verUnUsuario,
	editarUsuario,
	eliminarUsuario,
	formularioCrearUsuario,
	formEditarUsuario,
}
