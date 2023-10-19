/**
 * Provee un método de navegar por la información de la 
 * tabla mediante páginas.
 */
import { useContext, useMemo, useState } from 'react'
/**
 * Esta función hace la lógica para mostrar 
 * los numeritos en la paginación
 */
import { calculatePager } from './helpers/calculatePager'
import { AppContext } from '../../context'


export const TablePager = () => {

	const { 
		state: {pageData: {table}},
		fetchPaginate
	} = useContext(AppContext)
	const { total, pagesPerView } = table.pagination

	// La variable page marca la página actual
	const [page, setPage] = useState(1)

	/**
	 * Cada vez que la variable page cambia, se 
	 * actualiza el valor que devuelve useMemo
	 */
	const pager = useMemo(() => {
		return calculatePager({
							current: page,
							total,
							pagesPerView
						})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, total, pagesPerView])

	/**
	 * Al clickear uno de los botones del navegador,
	 * se actualiza el valor de page y se realiza un 
	 * fetch para traer la información del servidor de 
	 * acuerdo a la página que se está solicitando
	 * @param {number} number 
	 */
	const navigate = number => {
		setPage(number)
		fetchPaginate(number)
	}


	if( table.loading ) return (<></>)


	return (
		<div className="flex justify-end font-medium mt-3">
			<button
				onClick={() => setPage(page -1)}
				className={`h-8 grid place-content-center select-none 
										${page > 1 ? 'hover:text-sky-500' : 'text-slate-200'}`}
				disabled={page === 1}>
				<i className="ri-arrow-left-s-line text-xl"></i>
			</button>
			
			
			{pager.map(({number, key, active}) => (
				<span 
					key={key} 
					className="w-8 h-8 grid place-content-center select-none">
				{!active ? (
					<button 
						className="hover:text-sky-500"
						onClick={() => navigate(number)}>
						{number}
					</button>
				): (
					<span className="text-slate-300">{number}</span>
				)}
				</span>
			))}


			<button
				onClick={() => setPage(page +1)}
				className={`h-8 grid place-content-center select-none 
										${page < total ? 'hover:text-sky-500' : 'text-slate-200'}`}
				disabled={page === total}>
				<i className="ri-arrow-right-s-line text-xl"></i>
			</button>
		</div>
	)
}