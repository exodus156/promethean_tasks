import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '.'

const mockedButtonText = 'Mocked button text'
const mockedOnClick = jest.fn()

describe('Button', () => {
	test('renders correctly', async () => {
		render(
			<Button
				text={mockedButtonText}
				onClick={mockedOnClick}
			/>,
		)

		await screen.findByRole('button')

		expect(screen.getByRole('button')).toBeInTheDocument()
	})

	test('display passed text', async () => {
		render(
			<Button
				text={mockedButtonText}
				onClick={mockedOnClick}
			/>,
		)

		const text = await screen.findByText('Mocked button text')

		expect(text.textContent).toStrictEqual(mockedButtonText)
	})

	test('has working onClick', async () => {
		const user = userEvent.setup()

		render(
			<Button
				text={mockedButtonText}
				onClick={mockedOnClick}
			/>,
		)

		const button = await screen.findByText(mockedButtonText)
		await user.click(button)

		expect(mockedOnClick).toHaveBeenCalled()
	})
})
