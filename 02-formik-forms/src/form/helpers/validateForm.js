export const validateForm = ({
	fullname,
	email,
	age,
	job_role,
	interests
}) => {
	
	const errors = {}

	if( !fullname ) errors.fullname = 'Name is required'
	
	if( !email ){
		errors.email = 'Email is required'
	}else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ){
		errors.email = 'Invalid email address'
	}
	
	if( !age ){
		errors.age = 'Please, confirm your age'
	}else if( age <= 0){
		errors.age = 'Please, confirm your are over 18'
	}

	if( !job_role ){
		errors.job_role = 'Please, select a Job role'
	}

	if( !interests.length ){
		errors.interests = 'Please, select an option'
	}

	return errors
}