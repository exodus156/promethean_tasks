import { render, screen } from '@testing-library/react'
import { Title } from '.'

const mockedTitle = 'Mocked text'

describe('Title', () => {
	test('renders correctly', async () => {
		render(<Title text={mockedTitle} />)

		const textElement = await screen.findByText(mockedTitle)

		expect(textElement).toBeInTheDocument()
	})

	test('applies styles correctly', async () => {
		render(<Title text={mockedTitle} />)

		const titleElement = await screen.findByTestId('titleWrapper')

		expect(titleElement).toBeInTheDocument()
	})
})
