import { render, screen } from '@testing-library/react'
import { Text } from '.'

const mockText = 'Mocked text'

describe('Text', () => {
	test('renders correctly', async () => {
		render(<Text>{mockText}</Text>)

		const textElement = await screen.findByText(mockText)

		expect(textElement).toBeInTheDocument()
	})

	test('applies styles correctly', async () => {
		render(<Text size="xl">{mockText}</Text>)

		const textElement = await screen.findByText(mockText)

		expect(textElement.className).toBe('text-xl')
	})
})
