import { PageContent } from 'components'
import { useLoremIpsum } from 'hooks/useLoremIpsum'

export const Subpage2 = () => {
	const { text } = useLoremIpsum()

	return (
		<PageContent
			variant="subpage2"
			contentTitle="SubPage2"
			pageText={text}
		/>
	)
}
