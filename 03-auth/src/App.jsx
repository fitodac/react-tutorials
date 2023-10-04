import { AppRouter } from './router'
import { AuthProvider } from './auth'
import { Navbar } from './components'


export const App = () => {

	return (
		<>
			<div className="max-w-xl mx-auto mt-8 mb-20">
				{/* El AuthProvider proveerá el contexto para que toda la aplicación
				sepa cuando un usuario se a autenticado o no */}
				<AuthProvider>
					<Navbar />
					{/* Tanto las vistas privadas como la vista de login (pública)
					tienen acceso al AuthContext */}
					<AppRouter />
				</AuthProvider>
			</div>
		</>
	)
}