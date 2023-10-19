import { useContext } from 'react'
import { PropTypes } from 'prop-types'
/**
 * Requiere que se importen los siguientes componentes:
 */
import { 
	TableHead, 
	TableSkeleton, 
	TablePager 
} from '..'
// Usa el contexto global de la aplicación
import { AppContext } from '../../context'


export const Table = ({children}) => {

	const { state: {pageData: {table}} } = useContext(AppContext)

	return (
		<div className="bg-white border border-slate-200 p-4 rounded-md shadow-2xl">
			<table className="text-sm font-light w-full">

				{/* Itera el valor de table.columns para mostrar las cabeceras de la tabla */}
				{table.columns && (
					<thead className="">
						<tr>
						{table.columns.map(e => (
							<th 
								key={e.key}
								className={`bg-slate-800 text-sm font-medium text-left px-4 py-3 select-none first:rounded-l-md last:rounded-r-md
													${table.loading ? 'text-slate-500' : 'text-white'}${e.className && ` ${e.className}`}`}>
								<TableHead col={{...e}} />
							</th>
						))}
						</tr>
					</thead>
				)}


				{!table.loading ? (
					// Cuando se completa el request al servidor se muestra el contenido...
					<tbody>{children}</tbody>
				) : (
					// mientras tanto, el componente TableSkeleton muestra un preload
					<TableSkeleton />
				)}

			</table>

			{/* Paginación de la tabla */}
			<TablePager />

		</div>
	)
}


Table.propTypes = {
	children: PropTypes.node
}