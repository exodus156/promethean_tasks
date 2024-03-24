import { render, screen } from '@testing-library/react'
import { MenuModalItem } from '.'

describe('MenuModalItem', () => {
	test('renders correctly', async () => {
		render(<MenuModalItem />)

		const wrapper = await screen.findByTestId('menuModalItemWrapper')

		expect(wrapper).toBeInTheDocument()
	})
})
