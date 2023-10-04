import { PropTypes } from 'prop-types'
import { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({children}) => {

	const { logged } = useContext(AuthContext)
	const { pathname, search } = useLocation()

	/**
	 * La variable lastPath obtiene el pathname del url
	 * y lo guarda en localStorage para que cuando hagas
	 * log in te rediriga a la última página que habías 
	 * visitado
	 */
	const lastPath = `${pathname}${search}`
	localStorage.setItem('lastPath', lastPath)

	/**
	 * Si el usuario está logeado se mostrará el 
	 * children, caso contrario, se redirigirá a login
	 */
	return logged ? children : <Navigate to="/login" />

}


PrivateRoute.propTypes = {
	children: PropTypes.node
}