import { PropTypes } from 'prop-types'

export const ValidateMessage = ({
	status,
	message
}) => {

	const className = () => {
		switch(status){
			case 'error':
				return 'text-pink-700'
			case 'success':
				return 'text-green-700'
			default:
				return 'text-slate-500'
		}
	}

	return (
		<div 
			className={`text-xs leading-tight indent-1 block select-none ${className()}`}>
			{message}
		</div>
	)
}


ValidateMessage.propTypes = {
	status: PropTypes.string,
	message: PropTypes.string,
}