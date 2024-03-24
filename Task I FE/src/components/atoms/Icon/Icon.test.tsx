import { render, screen } from '@testing-library/react'
import { Icon } from '.'

describe('Icon', () => {
	test('renders home icon', async () => {
		render(<Icon iconName="home" />)

		const iconElement = await screen.findByTitle('home-icon')

		expect(iconElement).toBeInTheDocument()
	})

	test('renders react icon', async () => {
		render(<Icon iconName="react" />)

		const iconElement = await screen.findByTitle('react-icon')

		expect(iconElement).toBeInTheDocument()
	})

	test('renders typescript icon', async () => {
		render(<Icon iconName="typescript" />)

		const iconElement = await screen.findByTitle('typescript-icon')

		expect(iconElement).toBeInTheDocument()
	})

	test('renders menu icon', async () => {
		render(<Icon iconName="menu" />)

		const iconElement = await screen.findByTitle('menu-icon')

		expect(iconElement).toBeInTheDocument()
	})
})
