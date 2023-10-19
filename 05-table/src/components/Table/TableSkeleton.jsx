/**
 * Muestra un loading mientras se está cargando la información de la tabla
 */
import { useContext, useMemo } from 'react'
import { AppContext } from '../../context'
import { makeRandomID } from './helpers/makeRandomId'


export const TableSkeleton = () => {

	const { 
		state: {
			pageData: {
				table: {columns, skeletonRows}
			}
		}
	} = useContext(AppContext)

	/**
	 * Crea un array @rows para iterar las 
	 * filas que se mostrarán en el loader, 
	 * de acuerdo al valor en el estado de 
	 * @skeletonRows
	 */
	const rows = useMemo(() => {
		const rows = []
		for(let i = 0; i < skeletonRows; i++) rows.push(makeRandomID(6))
		return rows
	}, [skeletonRows])


	
	return (
		<tbody>
			{rows.map(i => (
				<tr key={i} className="border-t border-slate-100">
					<td colSpan={columns.length} className="px-1 py-4">
						<div className="bg-slate-200 w-full h-5 rounded-md animate-pulse" />
					</td>
				</tr>
			))}
		</tbody>
	)
}