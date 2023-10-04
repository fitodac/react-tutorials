/**
 * Página de login
 */
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '..'


export const LoginPage = () => {

	// Se obtiene el context del AuthContext
	const { login } = useContext(AuthContext)
	const navigate = useNavigate()

	/**
	 * Este evento se dispara al hacerlogin
	 */
	const onLogin = () => {
		/**
		 * La variable lastPath, almacenada en localStorage,
		 * guarda el pathname de la última página que habías 
		 * visitado.
		 * Cuando haces log in, se te redirige a esa página.
		 * - ver src/router/PrivateRoute.jsx
		 */
		const lastPath = localStorage.getItem('lastPath') || '/'
		login('John Doe')		
		navigate(lastPath, {replace: true})

	}

	return (
		<>
			<div className="text-center mt-10 grid justify-center space-y-4 select-none rounded-lg">
				<div className="text-slate-300 text-2xl">Log in</div>

				<button
					onClick={onLogin}
					className="bg-slate-400 text-white w-40 px-14 py-2 rounded">
					LogIn
				</button>
			</div>
		</>
	)
}