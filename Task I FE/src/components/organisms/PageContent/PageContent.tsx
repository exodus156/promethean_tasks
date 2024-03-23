import { Text } from "components/atoms"
import { Title } from "components/molecules"

export type PageContentProps = {
	contentTitle: string
	pageText: string
}

export const PageContent: React.FC<PageContentProps> = ({
	contentTitle,
	pageText
}) => {
	return (
		<div>
			<Title text={contentTitle} />
			<Text textContent={pageText} />
		</div>
	)
}