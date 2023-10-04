import { PropTypes } from 'prop-types'
import { useContext } from 'react'
import { AuthContext } from "../auth"
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({children}) => {

	// se desestructura la variable logged del AuthContext
	const { logged } = useContext(AuthContext)

	/**
	 * Si el usuario no está logeado se mostrará el
	 * children, caso contrario, se redirigirá a la 
	 * ruta principal
	 */ 
	return !logged ? children : <Navigate to="/" />

}

PublicRoute.propTypes = {
	children: PropTypes.node
}