import styles from './MenuModalItem.module.scss'

export type MenuModalItemProps = {
	children?: React.ReactNode
}

export const MenuModalItem: React.FC<MenuModalItemProps> = ({ children }) => {
	return (
		<div
			className={styles.menuModalItem}
			data-testid="menuModalItemWrapper"
		>
			{children}
		</div>
	)
}
