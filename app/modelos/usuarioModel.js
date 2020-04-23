module.exports = (Sequelize, DataType) => {

	const Usuario = Sequelize.define('usuarios', {
		//Atributos de los campos
		// campo id
		idusuario: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		// campo nombre de usuario
		nombre_usuario: {
			type: DataType.STRING,
			allowNull: false,
			max: 50,
			validate: {
				notNull: {
					msg: 'Por favor introduce un Nombre'
				}
			}
		},
		// campo email
		email: {
			type: DataType.STRING,
			max: 50,
			validate: {
				isEmail: {
					msg: 'Ingresa un email correcto'
				}
	
			}
		},
		// campo usuario
		usuario: {
			type: DataType.STRING,
			allowNull: false,
			max: 20,
			validate: {
				notNull: {
					msg: 'Ingrese un Nickname de usuario'
				}
			}
		},
		// contraseña
		contrasena: {
			type: DataType.STRING,
			allowNull: false,
			max: 100,
			validate: {
				notNull: {
					msg: 'Ingresa una contraseña por favor'
				}
			}
		},
		// estado de usuario
		estado: {
			type: DataType.BOOLEAN,
			allowNull: false,
			defaultValue: true
		}

	})

	return Usuario

}