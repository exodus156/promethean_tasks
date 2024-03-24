import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MenuModal } from '.'

const mockedOnLogin = jest.fn()
const mockedOnLogout = jest.fn()

describe('MenuModal', () => {
	test('renders correctly login variant', async () => {
		render(
			<MenuModal
				variant="login"
				onLoginPress={mockedOnLogin}
			/>,
		)

		const button = await screen.findByText('Login')

		expect(button).toBeInTheDocument()
	})

	test('renders correctly logout variant', async () => {
		render(
			<MenuModal
				variant="logout"
				onLogoutPress={mockedOnLogout}
			/>,
		)

		const button = await screen.findByText('Logout')

		expect(button).toBeInTheDocument()
	})

	test('on login click works', async () => {
		const user = userEvent.setup()
		render(
			<MenuModal
				variant="login"
				onLoginPress={mockedOnLogin}
			/>,
		)

		const button = await screen.findByText('Login')
		await user.click(button)

		expect(mockedOnLogin).toHaveBeenCalled()
	})

	test('on logout click works', async () => {
		const user = userEvent.setup()
		render(
			<MenuModal
				variant="logout"
				onLogoutPress={mockedOnLogout}
			/>,
		)

		const button = await screen.findByText('Logout')
		await user.click(button)

		expect(mockedOnLogout).toHaveBeenCalled()
	})
})
