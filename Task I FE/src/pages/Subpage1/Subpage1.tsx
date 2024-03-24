import { PageContent } from 'components'
import { useLoremIpsum } from 'hooks/useLoremIpsum'

export const Subpage1 = () => {
	const { text } = useLoremIpsum()

	return (
		<PageContent
			variant="subpage1"
			contentTitle="SubPage1"
			pageText={text}
		/>
	)
}
