import { PropTypes } from 'prop-types'

export const Button = ({
	children,
	type,
	className
}) => {
	return (
		<button 
			type={type}
			className={`bg-purple-600 border-purple-600 text-white leading-tight px-10 py-2.5 select-none transition-all rounded-md hover:opacity-80${className ? ` ${className}` : ''}`}>
			{children}
		</button>
	)
}


Button.propTypes = {
	children: PropTypes.node,
	type: PropTypes.string,
	className: PropTypes.string
}

Button.defaultProps = {
	type: 'button'
}