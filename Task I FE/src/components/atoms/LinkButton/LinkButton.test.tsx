import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { LinkButton } from '.'

const mockedLinkButtonText = 'Mocked link'
const mockedLinkTo = '/mocked'

describe('LinkButton', () => {
	test('renders correctly', async () => {
		const history = createMemoryHistory()
		history.push = jest.fn()
		render(
			<Router
				location={history.location}
				navigator={history}
			>
				<LinkButton
					text={mockedLinkButtonText}
					linkTo={mockedLinkTo}
				/>
			</Router>,
		)

		const button = await screen.findByText(mockedLinkButtonText)

		expect(button).toBeInTheDocument()
	})

	test('display passed text', async () => {
		const history = createMemoryHistory()
		history.push = jest.fn()
		render(
			<Router
				location={history.location}
				navigator={history}
			>
				<LinkButton
					text={mockedLinkButtonText}
					linkTo={mockedLinkTo}
				/>
			</Router>,
		)

		const text = await screen.findByText('Mocked link')

		expect(text.textContent).toStrictEqual(mockedLinkButtonText)
	})

	test('has working link on click', async () => {
		const history = createMemoryHistory()
		history.push = jest.fn()
		const user = userEvent.setup()

		render(
			<Router
				location={history.location}
				navigator={history}
			>
				<LinkButton
					text={mockedLinkButtonText}
					linkTo={mockedLinkTo}
				/>
			</Router>,
		)

		const button = await screen.findByText(mockedLinkButtonText)
		await user.click(button)

		expect(history.push).toHaveBeenCalled()
	})
})
