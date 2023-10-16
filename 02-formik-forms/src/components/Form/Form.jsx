import { useCallback, useEffect } from 'react'
import { PropTypes } from 'prop-types'

import { 
	Formik, 
	useFormikContext,
	Form as FormikForm
} from 'formik'

const ResetForm = () => {
	const { resetForm } = useFormikContext() 
	const reset = useCallback(() => resetForm(), [resetForm])
	useEffect(() => reset, [reset])
	return null
}


export const Form = ({
	children,
	className,
	initialValues,
	validate,
	onSubmit,
	formReset
}) => {

	return (
		<Formik
			initialValues={initialValues}
			validate={validate}
			onSubmit={onSubmit}
		>
			{() => (
				<FormikForm className={className}>
					{children}
					{formReset && <ResetForm />}
				</FormikForm>
			)}
		</Formik>
	)
}


Form.propTypes = {
	children: PropTypes.node,
	initialValues: PropTypes.object,
	validate: PropTypes.func,
	onSubmit: PropTypes.func.isRequired,
	formReset: PropTypes.bool,
	className: PropTypes.string
}