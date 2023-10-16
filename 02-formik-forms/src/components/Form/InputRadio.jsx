import { PropTypes } from 'prop-types'
import { 
	useField,
} from 'formik'


export const InputRadio = ({
	label,
	className,
	...props
}) => {

	const [ field, meta ] = useField(props)
	const { value } = meta

	return (
		<div className="space-y-1">

			<label className={`flex space-x-1 cursor-pointer${className ? ` ${className}` : ''}`}>
				<input 
					{...field}
					{...props}
					type="radio"
					className=""
					checked={props?.value === value} />
					
					{label && (
						<span className="text-slate-500 text-sm leading-tight indent-1 block select-none">{label}</span>
					)}
			</label>

		</div>
	)
}


InputRadio.propTypes = {
	label: PropTypes.string,
	className: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
}