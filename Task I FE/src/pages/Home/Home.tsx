import { PageContent } from 'components'
import { useLoremIpsum, useAppContext } from 'hooks'
import { useEffect } from 'react'

export const Home = () => {
	const { text } = useLoremIpsum()
	const { dispatch } = useAppContext()

	useEffect(() => {
		dispatch({
			type: 'CHANGE_PAGE',
			payload: { pageTitle: 'Home', pageIcon: 'home' },
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<PageContent
			variant="home"
			contentTitle="HOME"
			pageText={text}
		/>
	)
}
