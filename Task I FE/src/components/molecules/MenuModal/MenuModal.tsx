import { Button, MenuModalItem } from 'components/atoms'
import styles from './MenuModal.module.scss'

type MenuModalType =
	| {
			variant: 'login'
			onLoginPress: () => void
			onLogoutPress?: never
	  }
	| {
			variant: 'logout'
			onLoginPress?: never
			onLogoutPress: () => void
	  }

export type MenuModalProps = {
	variant: 'login' | 'logout'
} & MenuModalType

export const MenuModal: React.FC<MenuModalProps> = ({
	variant,
	onLoginPress,
	onLogoutPress,
}) => {
	return (
		<div className={styles.menuModalWrapper}>
			{variant === 'login' && (
				<MenuModalItem>
					<Button
						text="Login"
						onClick={onLoginPress}
					/>
				</MenuModalItem>
			)}
			{variant === 'logout' && (
				<MenuModalItem>
					<Button
						text="Logout"
						onClick={onLogoutPress}
					/>
				</MenuModalItem>
			)}
		</div>
	)
}
