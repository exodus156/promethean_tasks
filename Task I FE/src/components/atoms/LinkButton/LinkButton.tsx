import { Link } from 'react-router-dom'
import styles from './LinkButton.module.scss'

export type LinkButtonProps = {
	text: string
	linkTo: string
}

export const LinkButton: React.FC<LinkButtonProps> = ({ text, linkTo }) => {
	return (
		<Link
			className={styles.linkButtonWrapper}
			to={linkTo}
		>
			<div>{text}</div>
		</Link>
	)
}
