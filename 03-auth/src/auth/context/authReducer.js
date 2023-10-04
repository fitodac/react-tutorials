/**
 * Este reducer maneja el estado de la sesión 
 * de usuario en el contexto de la aplicación
 */
import { types } from '../types/types'

export const authReducer = (state = {}, action) => {
	switch(action.type)
	{
		// Login
		case types.login:
			return {
				...state,
				logged: true,
				user: action.payload
			}

		// Logout
		case types.logout:
			return {
				logged: false
			};

		// Retorna el estado si no se ejecuta ninguna acción
		default:
			return state;
	}
}