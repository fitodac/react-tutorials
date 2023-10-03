import { AppRouter } from './router'
import { AuthProvider } from './auth'
import { Navbar } from './components'


export const App = () => {

	return (
		<>
			<div className="max-w-xl mx-auto mt-8 mb-20">
				<AuthProvider>
					<Navbar />
					<AppRouter />
				</AuthProvider>
			</div>
		</>
	)
}