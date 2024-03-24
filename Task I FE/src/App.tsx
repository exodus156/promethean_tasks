import 'scss/App.scss'
import { useBrowserRouter } from './hooks'
import { RouterProvider } from 'react-router-dom'
import { NavBar } from 'components'
import { useState } from 'react'

function App() {
	const { router } = useBrowserRouter()

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleMenuPress = () => {
		setIsMenuOpen((prevState) => !prevState)
	}

	const handleLogin = () => {
		console.log('Login')
	}
	const handleLogout = () => {
		console.log('Logout')
	}

	return (
		<>
			<NavBar
				isUserLoggedIn={true}
				isMenuOpen={isMenuOpen}
				onMenuClick={handleMenuPress}
				pageTitle="Test"
				pageIcon="home"
				onLogin={handleLogin}
				onLogout={handleLogout}
				username="username"
			/>
			<RouterProvider router={router} />
		</>
	)
}

export default App
