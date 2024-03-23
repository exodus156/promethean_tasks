type TextSize = "sm" | "base" | "lg" | "xl"

export type TextProps = {
	textContent: string
	size?: TextSize
}

export const Text: React.FC<TextProps> = ({
	textContent,
	size = "base"
}) => {
	return (
		<span className={`text-${size}`}>{textContent}</span>
	)
}