/**
 * useForm es el hook que se usará para 
 * manejar el estado del formulario.
 */
import { useForm } from '../hooks/useForm'
import { useNavigate, useLocation } from 'react-router-dom'

/**
 * Este hook realiza el filtro de heroes por nombre
 */
import { getHeroesByName } from '../helpers/getHeroesByName'

import queryString from 'query-string'


export default function Search(){

	/**
	 * Se define navigate para realizar el cambio 
	 * en el parámetro q del url cada vez que se
	 * realiza una búsqueda.
	 */
	const navigate = useNavigate()
	const location = useLocation()
	/**
	 * El plugin query-string permite que se pueda obtener 
	 * el parámetro q del url de una forma mas fácil ya que
	 * si hay más de un parámetro sería mas dificil de extraer
	 */
	const { q = '' } = queryString.parse(location.search)
	/**
	 * En la variable heroes se almacena un array con los 
	 * resultados de búsqueda que provee la función getHeroesByName
	 */
	const heroes = getHeroesByName(q)

	/**
	 * Estas 2 variables sirven para mostrar los mensajes de
	 * que aún no se está buscando nada y si hay un error en
	 * la búsqueda
	 */
	const showSearch = q.length === 0
	const showError = !showSearch && heroes.length === 0

	/**
	 * useForm provee el método onInputChange para los 
	 * cambios del input search y el valor de este que 
	 * será la variable searchText
	 */
	const { searchText, onInputChange } = useForm({
		searchText: q
	})

	/**
	 * Esta función servirá para ejecutar la búsqueda
	 */
	const onSearchSubmit = e => {
		e.preventDefault();
		/**
		 * Cada vez que se realiza una búsqueda, la página 
		 * navega cambiando el parámetro q por el valor de
		 * la búsqueda que se está realizando.
		 */
		navigate(`?q=${ searchText.toLowerCase().trim()}`)
	}


	return (
	<>
		<div className="grid gap-10 lg:grid-cols-12">
			<div className="lg:col-span-4 xl:col-span-3">
				
				{/* Formulario de búsqueda */}
				<form onSubmit={ onSearchSubmit } className="w-full flex gap-x-2">
					<input 
						type="text"
						name="searchText"
						placeholder="Search a hero"
						className="border border-slate-200 px-3 py-1 flex-1 rounded"
						autoComplete="off"
						value={ searchText }
						onChange={ onInputChange } />
					
					<button className="bg-slate-500 text-white px-3 py-1 rounded">Search</button>
				</form>

			</div>

			<div className="lg:col-span-8 xl:col-span-9">
				<div className="max-w-4xl">
					{/* Mensaje inicial. Este se muestra cuyando el valor de searchText es un string vacío */}
					{ showSearch && (<div className="bg-sky-100 text-sky-500 w-full px-5 py-4 rounded select-none">Search a hero</div>) }
					{/* Mensaje de error */}
					{ showError && (<div className="bg-red-100 text-red-500 w-full px-5 py-4 rounded select-none">There&apos;s any hero with <strong>{q}</strong></div>)}

					{/* Listado de resultados de búsqueda */}
					<div className="space-y-2">
						{heroes.map(hero => (<div key={hero.id}>- {hero.superhero}</div>))}
					</div>
				</div>
			</div>
		</div>
	</>
	)
}