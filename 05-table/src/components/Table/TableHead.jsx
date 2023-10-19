/**
 * Este componente devuelve el contenido dentro de los <th> 
 * tr > th > TableHead
 * y sirve para mostrar un botón de sort en la cabecera
 */
import { useContext } from 'react'
import { AppContext } from '../../context'
import { PropTypes } from 'prop-types'

export const TableHead = ({col}) => {
	
	const { 
		state: {pageData: {table}},
		fetchSort
	} = useContext(AppContext)

	const {
		key,
		title, 
		className,
		sortable,
		sort
	} = col

	/**
	 * Ejecuta la función fetchSort en el AppProvider para
	 * obtener la onformación ordenada por su @key y en el 
	 * orden que se provee con @sort
	 * @param {string} key 
	 * @param {string} sort 
	 */
	const handleSort = ({key, sort}) => {
		const order = !sort ? 'asc' : sort === 'asc' ? 'desc' : null
		fetchSort({ key, order })
	}


	return (
		<>
		{sortable ? (
			<button 
				className="group"
				onClick={() => handleSort({key, sort})}
				disabled={table.loading}>
				<span className={className}>{title}</span>
				<span className={`w-6 h-5 inline-block transition-all ${!table.loading && 'text-slate-400 group-hover:text-white'}`}>
					{!sort && (<i className="ri-expand-up-down-fill"></i>)}
					{sort === 'asc' && (<i className="ri-arrow-down-s-fill"></i>)}
					{sort === 'desc' && (<i className="ri-arrow-up-s-fill"></i>)}
				</span>
			</button>
		):(
			<span className={className}>{title}</span>
		)}
		</>
	)
}


TableHead.propTypes = {
	col: PropTypes.object.isRequired
}