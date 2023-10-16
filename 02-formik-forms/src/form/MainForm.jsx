import { useContext, useState } from 'react'
import { AppContext } from '../context'

import {
	initialFormValues,
	validateForm,
	submitForm,
	resetForm
} from './helpers'

import {
	Form, 
	InputText,
	InputSelect,
	InputCheckbox,
	InputRadio,
	InputTextarea,
	ValidateMessage,
	Button,
} from '../components'

import { ErrorMessage } from 'formik'

export const MainForm = () => {

	const { setSignUp } = useContext(AppContext)
	const [ resetState, setResetState ] = useState(false)

	return (
		<Form
			initialValues={initialFormValues}
			validate={validateForm}
			onSubmit={form => submitForm({form, setSignUp})}
			formReset={resetState}>

			<div className="border-b border-slate-100 text-slate-400 text-xs font-medium">Basic information</div>
			
			<div className="space-y-4 mt-3">
				<InputText 
					type="text"
					name="fullname"
					label="Name" />
				
				<InputText 
					type="text"
					name="email"
					label="Email" />
				
				<InputText 
					type="password"
					name="password"
					label="Password" />


				<div className="space-y-2">
					<label className="">Age</label>
					
					<div className="flex gap-x-10">
						<InputRadio
							name="age"
							label="Under 18"
							value="0" />
						
						<InputRadio
							name="age"
							label="Over 18"
							value="1" />
					</div>

					<ErrorMessage 
						name="age" 
						component={error => (<ValidateMessage status="error" message={error.children} />)} />
				</div>

			</div>

			<div className="border-b border-slate-100 text-slate-400 text-xs font-medium mt-8">Your profile</div>

			<div className="space-y-4 mt-3">
				<InputTextarea
					name="biography"
					label="Bio"
					rows="4"
					className="resize-none" />

				<InputSelect 
					name="job_role"
					label="Job role">
					<option value="">...</option>
					<optgroup label="Web">
						<option value="Front-End Developer">Front-End Developer</option>
						<option value="PHP Developer">PHP Developer</option>
						<option value="Python Developer">Python Developer</option>
						<option value="Rails Developer">Rails Developer</option>
						<option value="Web Designer">Web Designer</option>
						<option value="Wordpress Developer">Wordpress Developer</option>
					</optgroup>
					<optgroup label="Mobile">
						<option value="Android Developer">Android Developer</option>
						<option value="IOS Developer">IOS Developer</option>
						<option value="Mobile Designer">Mobile Designer</option>
					</optgroup>
					<optgroup label="Business">
						<option value="Business Owner">Business Owner</option>
						<option value="Freelancer">Freelancer</option>
					</optgroup>
				</InputSelect>

				<div className="space-y-2">
					<label className="">Interests</label>
					<InputCheckbox
						name="interests"
						label="Development"
						value="Development" />
					
					<InputCheckbox
						name="interests"
						label="Design"
						value="Design" />
					
					<InputCheckbox
						name="interests"
						label="Business"
						value="Business" />

					<ErrorMessage 
						name="interests" 
						component={error => (<ValidateMessage status="error" message={error.children} />)} />
				</div>
			</div>


			<div className="pt-8">
				<Button type="submit" className="w-full">Sign Up</Button>
			</div>
			
			<div className="pt-5">
				<button 
					type="button"
					className="font-medium w-full hover:text-indigo-600" 
					onClick={() => resetForm(setResetState)}>
					Reset form
				</button>
			</div>
		</Form>
	)
}