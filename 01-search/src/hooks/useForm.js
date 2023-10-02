/**
 * Este es un custom hook para manejar el estado
 * del formulario y los eventos onChange de los
 * campos.
 */
import { useState } from 'react'

export const useForm = ( initialForm = {} ) => {
  
	/**
	 * El estado se almacena en formState
	 */
	const [ formState, setFormState ] = useState( initialForm )

	/**
	 * Esta función hará la actualización de formState
	 * cada vez que se hace un cambio en el input
	 */
	const onInputChange = ({ target }) => {
		const { name, value } = target
		setFormState({
			...formState,
			[ name ]: value
		})
	}

	/**
	 * Esto resetea el formulario
	 */
	const onResetForm = () => {
		setFormState( initialForm )
	}

	/**
	 * Retorno
	 */
	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
	}
}