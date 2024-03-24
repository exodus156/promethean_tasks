import { Text } from 'components/atoms'
import styles from './Title.module.scss'

export type TitleProps = {
	text: string
	className?: string
}

export const Title: React.FC<TitleProps> = ({ text, className = '' }) => {
	return (
		<div
			className={`${styles.titleWrapper} ${className}`}
			data-testid="titleWrapper"
		>
			<Text size="xl">{text}</Text>
		</div>
	)
}
