import { PageContent } from 'components'
import { useLoremIpsum } from 'hooks/useLoremIpsum'

export const Home = () => {
	const { text } = useLoremIpsum()

	return (
		<PageContent
			variant="home"
			contentTitle="HOME"
			pageText={text}
		/>
	)
}
