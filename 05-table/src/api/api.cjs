const { faker } = require('@faker-js/faker')

module.exports = () => {
	
	const total = 1000
	
	const data = { 
		users: []
	}

	for(let i = 0; i < total; i++){
		data.users.push({
			id: i,
			avatar: faker.internet.avatar(),
			name: faker.person.fullName(),
			email: faker.internet.email(),
			company: faker.company.name(),
		})
	}

	return data
}