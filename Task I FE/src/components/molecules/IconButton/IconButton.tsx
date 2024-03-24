import { Icon, IconProps } from 'components/atoms/Icon'
import styles from './IconButton.module.scss'

export type IconButtonProps = {
	iconName: IconProps['iconName']
	onClick: () => void
}

export const IconButton: React.FC<IconButtonProps> = ({
	iconName,
	onClick,
}) => {
	return (
		<div
			role="button"
			tabIndex={0}
			onClick={onClick}
			className={styles.iconButtonWrapper}
		>
			<div>
				<Icon iconName={iconName} />
			</div>
		</div>
	)
}
