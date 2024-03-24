import styles from './Button.module.scss'

export type ButtonProps = {
	text: string
	onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
	return (
		<div
			role="button"
			tabIndex={0}
			onClick={onClick}
			className={styles.atomButtonWrapper}
		>
			<div>{text}</div>
		</div>
	)
}
