import { PropTypes } from 'prop-types'
import { 
	useField,
	ErrorMessage 
} from 'formik'
import { ValidateMessage } from '.'


export const InputTextarea = ({
	label,
	className,
	placeholder,
	...props
}) => {

	const [ field, meta ] = useField(props)
	const { error, touched } = meta

	return (
		<div className="space-y-1">
			
			{label && (
				<label 
					className="text-slate-500 text-sm leading-tight font-medium indent-1 block select-none">
					{label}
				</label>
			)}
			
			<textarea
				{...field}
				{...props}
				placeholder={placeholder}
				className={
					`border border-slate-200 text-sm leading-tight w-full px-3 py-3 rounded-md 
						focus:outline-0
						${className ? ` ${className}` : ''}
						${touched && error && 'border-pink-600 text-pink-600'}
						${touched && !error && 'focus:border-green-500 focus:text-green-500'}
					`} />

			<ErrorMessage 
				name={field.name} 
				component={() => (<ValidateMessage status="error" message={error} />)} />
		</div>
	)
}


InputTextarea.propTypes = {
	label: PropTypes.string,
	className: PropTypes.string,
	placeholder: PropTypes.string
}