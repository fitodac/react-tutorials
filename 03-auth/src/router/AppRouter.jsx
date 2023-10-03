import { Routes, Route } from 'react-router-dom'
import { AppRoutes } from '../app/routes'
import { PrivateRoute, PublicRoute } from '.'
import { LoginPage } from '../auth'


export const AppRouter = () => {
	return (
	<>
		<Routes>
			<Route path="login" element={
				<PublicRoute>
					<LoginPage />
				</PublicRoute>
			} />
			
			<Route path="/*" element={
				<PrivateRoute>
					<AppRoutes />
				</PrivateRoute>
			} /> 

		</Routes>
	</>
	)
}