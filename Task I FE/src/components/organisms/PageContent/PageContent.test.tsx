import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { PageContent, PageContentProps } from '.'

const mockedTitle = 'Title'
const mockedPageContent = 'Text'

const cases = [
	['home', 'Subpage1', 'Subpage2'],
	['subpage1', 'Home', 'Subpage2'],
	['subpage2', 'Home', 'Subpage1'],
]

const history = createMemoryHistory()
history.push = jest.fn()

describe('PageContent', () => {
	test('renders buttons correctly', async () => {
		render(
			<Router
				location={history.location}
				navigator={history}
			>
				<PageContent
					variant="home"
					contentTitle={mockedTitle}
					pageText={mockedPageContent}
				/>
			</Router>,
		)

		const buttons = await screen.findAllByTestId('linkButton')

		expect(buttons.length).toBe(2)
	})

	test('renders title correctly', async () => {
		render(
			<Router
				location={history.location}
				navigator={history}
			>
				<PageContent
					variant="home"
					contentTitle={mockedTitle}
					pageText={mockedPageContent}
				/>
			</Router>,
		)

		const title = await screen.findByText('Title')

		expect(title.textContent).toStrictEqual(mockedTitle)
	})

	test('renders page text correctly', async () => {
		render(
			<Router
				location={history.location}
				navigator={history}
			>
				<PageContent
					variant="home"
					contentTitle={mockedTitle}
					pageText={mockedPageContent}
				/>
			</Router>,
		)

		const text = await screen.findByText('Text')

		expect(text.textContent).toStrictEqual(mockedPageContent)
	})

	test.each(cases)(
		'renders buttons properly for each variant',
		(variant, firstButton, secondButton) => {
			render(
				<Router
					location={history.location}
					navigator={history}
				>
					<PageContent
						variant={variant as PageContentProps['variant']}
						contentTitle={mockedTitle}
						pageText={mockedPageContent}
					/>
				</Router>,
			)

			const buttons = screen.getAllByTestId('linkButton')

			expect(buttons[0].textContent).toStrictEqual(firstButton)
			expect(buttons[1].textContent).toStrictEqual(secondButton)
		},
	)
})
