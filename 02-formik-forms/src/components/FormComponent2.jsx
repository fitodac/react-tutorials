import {
	Form, 
	InputText,
	Button,
} from '.'


export const FormComponent2 = () => {

	const initialValues = {
		fullname: '',
		email: ''
	}

	const validate = form => {
		const errors = {}

		if( !form.fullname ) errors.fullname = 'Name is required'
		if( !form.email ) errors.email = 'Email is required'

		return errors
	}

	const onSubmit = (values) => {
		console.log('Form enviado', values)
	}


	return (
		<Form
			initialValues={initialValues}
			validate={validate}
			onSubmit={onSubmit}>
			<div className="space-y-4">

				<InputText 
					type="text"
					name="fullname"
					label="Name" />
				
				<InputText 
					type="text"
					name="email"
					label="Email" />

				<div className="pt-3">
					<Button type="submit">Save</Button>
				</div>

			</div>
		</Form>
	)
}