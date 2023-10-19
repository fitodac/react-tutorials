import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/**
 * Se define el contexto global de la aplicación
 */
import { AppProvider } from './context'

import 'remixicon/fonts/remixicon.css'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
  </React.StrictMode>,
)
