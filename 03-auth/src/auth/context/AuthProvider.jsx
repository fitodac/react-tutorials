import { PropTypes } from 'prop-types'
import { useReducer } from 'react'
import { AuthContext, authReducer } from '.'

/**
 * Importa los types disponibles en las acciones
 */
import { types } from '../types/types'


/**
 * init() se ejecuta al inicializar el reducer.
 * Verifica si existe un "user" en localStorage
 * y retorna el estado inicial del reducer.
 */
const init = () => {
	const user = JSON.parse( localStorage.getItem('user') )

	return {
		logged: !!user,
		user
	}
}


export const AuthProvider = ({children}) => {

	const [ authState, dispatch ] = useReducer(authReducer, {}, init)


	/**
	 * La función login() retorna un objeto con el 
	 * ID de usuario y un nombre provisto en los 
	 * parámetros de la función. Luego guarda ese 
	 * objeto en localStorage y despacha la acción 
	 * login del reducer para tenerlo en el contexto 
	 * de la aplicación.
	 */
	const login = ( name = '' ) => {
		const user = {id: 'ABC', name}
		
		const action = {
			type: types.login,
			payload: user
		}

		localStorage.setItem('user', JSON.stringify(user))

		dispatch(action)
	}


	/**
	 * La función logout() despacha la acción logout al
	 * reducer y remueve el usuario del localStorage.
	 */
	const logout = () => {
		const action = {
			type: types.logout
		}

		localStorage.removeItem('user')

		dispatch(action)
	}


	/**
	 * En el AuthContext de proveen el authState con 
	 * los datos del usuario y los métodos login() y 
	 * logout() creados arriba.
	 */
	return (
		<AuthContext.Provider value={{
			...authState,
			// Methods
			login,
			logout
		}}>
			{ children }
		</AuthContext.Provider>
	)
}


AuthProvider.propTypes = {
	children: PropTypes.node
}