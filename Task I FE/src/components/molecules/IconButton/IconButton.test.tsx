import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { IconButton } from '.'

const mockedOnClick = jest.fn()

describe('IconButton', () => {
	test('renders correctly', async () => {
		render(
			<IconButton
				iconName="menu"
				onClick={mockedOnClick}
			/>,
		)

		await screen.findByRole('button')

		expect(screen.getByRole('button')).toBeInTheDocument()
	})

	test('renders correct icon', async () => {
		render(
			<IconButton
				iconName="menu"
				onClick={mockedOnClick}
			/>,
		)

		const buttonIcon = await screen.findByTitle('menu-icon')

		expect(buttonIcon).toBeInTheDocument()
	})

	test('has working onClick', async () => {
		const user = userEvent.setup()

		render(
			<IconButton
				iconName="menu"
				onClick={mockedOnClick}
			/>,
		)

		const button = await screen.findByRole('button')
		await user.click(button)

		expect(mockedOnClick).toHaveBeenCalled()
	})
})
