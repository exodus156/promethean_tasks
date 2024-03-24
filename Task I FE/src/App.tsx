import 'scss/App.scss'
import { useBrowserRouter } from './hooks'
import { RouterProvider } from 'react-router-dom'

function App() {
	const { router } = useBrowserRouter()

	return <RouterProvider router={router} />
}

export default App
