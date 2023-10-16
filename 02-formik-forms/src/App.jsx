import { useContext } from 'react'
import { AppContext } from './context'

import { 
	// FormComponent2,
} from './components'

import { MainForm } from './form/MainForm'


function App() {

	const { signUp } = useContext(AppContext)

	return (
		<div className="px-6 mt-10 mb-20">
			<div className="max-w-sm mx-auto space-y-10 md:max-w-2xl">

				<section>

					<div className="grid gap-y-7 md:flex">
						<div className="bg-white px-6 py-8 rounded-lg shadow-xl z-10 md:w-96 lg:w-96">
							<div className="text-2xl font-extrabold leading-none mb-3">Sign up</div>
							<MainForm />
						</div>

						<div className="md:w-80 md:left-1/2 md:fixed md:my-3 md:ml-10 lg:w-96">
							<div className="bg-sky-950 text-slate-300 p-6 pl-10 rounded-xl md:pl-9 lg:p-10">
								{Object.keys(signUp).length ? (
								<>
									<div className="text-sm font-medium">App Context:</div>
									<pre className="text-sm mt-3 whitespace-pre-wrap">{JSON.stringify(signUp, null, 2)}</pre>
								</>
								)
								: null}
							</div>

							<div className="text-xs leading-tight mt-4 md:pl-9 md:pr-4 lg:pl-9 lg:pr-5">
								This is an experiment using a form created with React.js and Formik which sends the data to the main context and this is received by the App component where it is showed inside the dark box. 
							</div>
						</div>
					</div>
				</section>

			</div>
		</div>
  )
}

export default App
