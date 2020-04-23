'use strict'

//Funcion que retorna la pagina principal de la aplicación
function home (req, res) {
	res.render('./principales/home')
}

module.exports = {
	home
}