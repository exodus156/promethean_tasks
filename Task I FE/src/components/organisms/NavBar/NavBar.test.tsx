import { render, screen } from '@testing-library/react'
import { NavBar } from '.'
import userEvent from '@testing-library/user-event'

const mockedOnMenuClick = jest.fn()
const mockedOnLogin = jest.fn()
const mockedOnLogout = jest.fn()
const mockedPageTitle = 'Title'
const mockedUsername = 'Mocked username'

describe('NavBar', () => {
	test('renders icon correctly', () => {
		render(
			<NavBar
				isUserLoggedIn={false}
				isMenuOpen={false}
				onMenuClick={mockedOnMenuClick}
				pageTitle={mockedPageTitle}
				pageIcon="home"
				onLogin={mockedOnLogin}
				onLogout={mockedOnLogout}
				username={mockedUsername}
			/>,
		)

		const icon = screen.getByTitle('home-icon')

		expect(icon).toBeInTheDocument()
	})

	test('renders icon class name correctly', () => {
		render(
			<NavBar
				isUserLoggedIn={false}
				isMenuOpen={false}
				onMenuClick={mockedOnMenuClick}
				pageTitle={mockedPageTitle}
				pageIcon="home"
				onLogin={mockedOnLogin}
				onLogout={mockedOnLogout}
				username={mockedUsername}
			/>,
		)

		const icon = screen.getByTitle('home-icon')

		expect(icon.className).toContain('navTitleIcon')
	})

	test('renders title correctly', () => {
		render(
			<NavBar
				isUserLoggedIn={false}
				isMenuOpen={false}
				onMenuClick={mockedOnMenuClick}
				pageTitle={mockedPageTitle}
				pageIcon="home"
				onLogin={mockedOnLogin}
				onLogout={mockedOnLogout}
				username={mockedUsername}
			/>,
		)

		const title = screen.getByText('Title')

		expect(title.textContent).toStrictEqual(mockedPageTitle)
	})

	test('renders username correctly', () => {
		render(
			<NavBar
				isUserLoggedIn={true}
				isMenuOpen={false}
				onMenuClick={mockedOnMenuClick}
				pageTitle={mockedPageTitle}
				pageIcon="home"
				onLogin={mockedOnLogin}
				onLogout={mockedOnLogout}
				username={mockedUsername}
			/>,
		)

		const username = screen.getByText('Mocked username')

		expect(username.textContent).toStrictEqual(mockedUsername)
	})

	test('does not render username when user is not logged in', () => {
		render(
			<NavBar
				isUserLoggedIn={false}
				isMenuOpen={false}
				onMenuClick={mockedOnMenuClick}
				pageTitle={mockedPageTitle}
				pageIcon="home"
				onLogin={mockedOnLogin}
				onLogout={mockedOnLogout}
				username={mockedUsername}
			/>,
		)

		const username = screen.queryByText('Mocked username')

		expect(username).not.toBeInTheDocument()
	})

	test('registers icon button click', async () => {
		const user = userEvent.setup()
		render(
			<NavBar
				isUserLoggedIn={false}
				isMenuOpen={false}
				onMenuClick={mockedOnMenuClick}
				pageTitle={mockedPageTitle}
				pageIcon="home"
				onLogin={mockedOnLogin}
				onLogout={mockedOnLogout}
				username={mockedUsername}
			/>,
		)

		const iconButton = screen.getByTitle('menu-icon')
		await user.click(iconButton)

		expect(mockedOnMenuClick).toHaveBeenCalled()
	})

	test('dropdown menu is visible', async () => {
		render(
			<NavBar
				isUserLoggedIn={false}
				isMenuOpen={true}
				onMenuClick={mockedOnMenuClick}
				pageTitle={mockedPageTitle}
				pageIcon="home"
				onLogin={mockedOnLogin}
				onLogout={mockedOnLogout}
				username={mockedUsername}
			/>,
		)

		const dropdownMenuButton = await screen.findByText('Login')

		expect(dropdownMenuButton).toBeInTheDocument()
	})
})
