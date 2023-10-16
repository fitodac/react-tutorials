import { useState } from 'react'
import { PropTypes } from 'prop-types'
import { AppContext } from '.'

export const AppProvider = ({children}) => {

	const [ signUp, setSignUp ] = useState({})

	return (
		<AppContext.Provider value={{
			signUp,
			setSignUp
		}}>
			{children}
		</AppContext.Provider>
	)
}


AppProvider.propTypes = {
	children: PropTypes.node
}