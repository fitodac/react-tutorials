import { PropTypes } from 'prop-types'
import { 
	useField
} from 'formik'


export const InputCheckbox = ({
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
					type="checkbox"
					className=""
					checked={value.includes(props?.value)} />
					
					{label && (
						<span className="text-slate-500 text-sm leading-tight indent-1 block select-none">{label}</span>
					)}
			</label>
		</div>
	)
}


InputCheckbox.propTypes = {
	label: PropTypes.string,
	className: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
}