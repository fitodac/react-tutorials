import { 
	useMemo,
	useCallback,
	useState
} from 'react'
import { PropTypes } from 'prop-types'
import reactLogo from './assets/react.svg'
import './App.css'


const UseMemoComponent = ({ text }) => {

	const getMessage = () => {
		console.log('se renderiza UseMemoComponent')
		return text
	}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const message = useMemo(() => getMessage(), [text])

	return (
		<div className="card" style={{backgroundColor: '#333'}}>
			<p>{message}</p>
		</div>
	)
}

UseMemoComponent.propTypes = { text: PropTypes.string }



const UseCallbackComponent = () => {
	const [count, setCount] = useState(0)
	const [calculate, setCalculate] = useState(0)

	const calculateCount = () => {
		console.log('calculateCount')
		setCount(count +1)
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const memoCalculateCount = useCallback(() => calculateCount(), [calculate])

	return (
		<>
			<UseMemoComponent text={`Counter: ${count}`} />
		
			<div className="card">
				<button onClick={memoCalculateCount}>Add +1</button>
				&nbsp;&nbsp;
				<button onClick={() => setCalculate(calculate +1)}>Enable</button>
			</div>
		</>
	)
}



function App() {

	return (
		<>
			<div>
				<img src={reactLogo} className="logo react" alt="React logo" />
			</div>

			<h3>useMemo</h3>
			<UseMemoComponent text="Hello" />
			<br />
			<br />
			<h3>useCallback</h3>
			<UseCallbackComponent />
		</>
	)
}

export default App
