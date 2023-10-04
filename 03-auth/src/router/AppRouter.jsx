/**
 * Esto manejará el router principal de toda la aplicación.
 */
import { Routes, Route } from 'react-router-dom'
/**
 * Se obtienen las rutas de cada sección. En este caso,
 * como solo hay 2 secciones: App y Auth, se importan
 * los componentes AppRouter (que contiene todas las 
 * páginas de esa sección) y LoginPage (que es la única
 * página dentro de Auth)
 */
import { AppRoutes } from '../app/routes'
import { LoginPage } from '../auth'

/**
 * Se importan los HOC de PblicRoute y PrivateRoute
 * que son los que manejarán los permisos de acceso
 * a las vistas dependiendo del estado de 
 * autenticación del usuario.
 */
import { PrivateRoute, PublicRoute } from '.'


export const AppRouter = () => {
	return (
	<>
		<Routes>
			<Route path="login" element={
				/**
				 * Todas las rutas de acceso público irán aquí:
				 */
				<PublicRoute>
					<LoginPage />
				</PublicRoute>
			} />
			
			<Route path="/*" element={
				/**
				 * Todas las rutas de acceso privado irán aquí:
				 */
				<PrivateRoute>
					<AppRoutes />
				</PrivateRoute>
			} /> 

		</Routes>
	</>
	)
}