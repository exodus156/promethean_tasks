export type ButtonProps = {
	text: string
	onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({
	text,
	onClick
}) => {
	return (
		<div
			role="button"
			tabIndex={0}
			onClick={onClick}
		>
			{text}
		</div>
	)
}