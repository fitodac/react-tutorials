import { useContext, useEffect } from 'react'
// Se importa el compoenente Table
import { Table } from './components/Table'
// Se importa el context
import { AppContext } from './context'
// Función helper para definir el valor inicial de las columnas de la tabla
import { tableColumns } from './helpers/tableColumns'

function App() {

	/**
	 * Se desestructura el context
	 */
	const { 
		state: {pageData: {table}},
		fetchData,
		setTableColumns
	} = useContext(AppContext)


	/**
	 * En el reder inicial de esta vista se definen las 
	 * columnas para la tabla y se realiza el fetch que 
	 * trae los datos del servidor para popular la tabla
	 */
	useEffect(() => {
		setTableColumns(tableColumns)
		fetchData()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	return (
		<div className="max-w-6xl mx-auto mt-8 mb-20">
			<Table>

				{/* 
					Todo el contenido de lo que será el body de la tabla 
					es children del componente Table
				*/}
				{table.data && table.data.map(({id, avatar, name, email, company}) => (
					<tr key={id} className="border-t border-slate-100">
						<td className="px-4 py-2">
							<span className="text-slate-400 text-sm leading-tight">{id+1}</span>
						</td>
						<td className="px-4 py-2">
							<img 
								src={avatar} 
								alt={name}
								className="w-8 rounded-md" />
						</td>
						<td className="px-4 py-2">{name}</td>
						<td className="px-4 py-2">{email}</td>
						<td className="px-4 py-2">{company}</td>
					</tr>
				))}

			</Table>
		</div>
	)
}

export default App
