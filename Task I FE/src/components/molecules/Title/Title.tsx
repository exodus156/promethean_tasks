import { Text } from "components/atoms"

export type TitleProps = {
	text: string
}

export const Title: React.FC<TitleProps> = ({ text }) => {
	return (
		<div>
			<Text textContent={text} />
		</div>
	)
}