import 'scss/App.scss'
import { useAppContext, useBrowserRouter, useLogin } from 'hooks'
import { RouterProvider } from 'react-router-dom'
import { NavBar, NavBarProps } from 'components'
import { useState } from 'react'

function App() {
	const { router } = useBrowserRouter()
	const { state } = useAppContext()
	const { handleLogin, handleLogout } = useLogin()

	const { isUserLoggedIn, username, currentPageIcon, currentPageTitle } = state

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleMenuPress = () => {
		setIsMenuOpen((prevState) => !prevState)
	}

	return (
		<>
			<NavBar
				isUserLoggedIn={isUserLoggedIn}
				isMenuOpen={isMenuOpen}
				onMenuClick={handleMenuPress}
				pageTitle={currentPageTitle}
				pageIcon={currentPageIcon as NavBarProps['pageIcon']}
				onLogin={handleLogin}
				onLogout={handleLogout}
				username={username}
			/>
			<RouterProvider router={router} />
		</>
	)
}

export default App
