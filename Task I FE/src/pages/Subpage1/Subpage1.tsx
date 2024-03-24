import { PageContent } from 'components'
import { useAppContext, useLoremIpsum } from 'hooks'
import { useEffect } from 'react'

export const Subpage1 = () => {
	const { text } = useLoremIpsum()
	const { dispatch } = useAppContext()

	useEffect(() => {
		dispatch({
			type: 'CHANGE_PAGE',
			payload: { pageTitle: 'Subpage1', pageIcon: 'react' },
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<PageContent
			variant="subpage1"
			contentTitle="SubPage1"
			pageText={text}
		/>
	)
}
