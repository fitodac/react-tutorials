import { 
	Routes,
	Route,
	Navigate
} from 'react-router-dom'

import {
	Page1,
	Page2
} from '../pages'

export const AppRoutes = () => {
	return (
	<>
		<main className="p-6 pb-20">
			<Routes>
				<Route path="page-1" element={<Page1 />} />
				<Route path="page-2" element={<Page2 />} />
				
				<Route path="/" element={<Navigate to="page-1" />} />
			</Routes>
		</main>
	</>
	)
}