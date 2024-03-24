import { PageContent } from 'components'
import { useAppContext, useLoremIpsum } from 'hooks'
import { useEffect } from 'react'

export const Subpage2 = () => {
	const { text } = useLoremIpsum()
	const { dispatch } = useAppContext()

	useEffect(() => {
		dispatch({
			type: 'CHANGE_PAGE',
			payload: { pageTitle: 'Subpage2', pageIcon: 'typescript' },
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<PageContent
			variant="subpage2"
			contentTitle="SubPage2"
			pageText={text}
		/>
	)
}
