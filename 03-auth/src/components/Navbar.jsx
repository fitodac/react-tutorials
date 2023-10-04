import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth'

/**
 * Navbar es un componente de UI que se ubicará 
 * en el root de la aplicación ya que los componentes
 * de UI se comparten entre /auth y /app
 */
const itemClassName = {
	default: 'text-sm leading-tight font-medium select-none',
	color: 'text-slate-500',
	colorActive: 'text-sky-500'
}

export const Navbar = () => {

	const navigate = useNavigate()
	const { user, logout } = useContext(AuthContext)

	const onLogout = () => {
		logout()
		navigate('/login', {replace: true})
	}


	return (
	<>
		<nav className="bg-slate-100 w-full px-5 py-3 mt-2 flex justify-between rounded-full">
			
			<div className="w-full flex items-center gap-x-4">
				<h1 className="text-slate-400 text-sm leading-none font-semibold">auth app</h1>
				{user && (
					<>
						<NavLink to="/page-1" className={({isActive}) => `${itemClassName.default} ${isActive ? itemClassName.colorActive : itemClassName.color}`}>Page 1</NavLink>
						<NavLink to="/page-2" className={({isActive}) => `${itemClassName.default} ${isActive ? itemClassName.colorActive : itemClassName.color}`}>Page 2</NavLink>
					</>
				)}
			</div>

			<div className="w-full flex items-center justify-end gap-x-4">
				{user
				? (
					<>
						<span className="text-slate-400 text-xs">Welcome, {user?.name}</span>
						<button 
							className={`${itemClassName.default} ${itemClassName.color}`}
							onClick={onLogout}>LogOut</button>
					</>
				)
				: (
					<NavLink 
						to="/login" 
						className={({isActive}) => `${itemClassName.default} ${isActive ? itemClassName.colorActive : itemClassName.color}`}>
						LogIn
					</NavLink>
				)}
			</div>

		</nav>
	</>
	)
}