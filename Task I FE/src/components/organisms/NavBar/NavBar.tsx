import { Icon, IconButton, IconProps, MenuModal, Text, Title } from 'components'
import styles from './NavBar.module.scss'

export type NavBarProps = {
	isUserLoggedIn: boolean
	isMenuOpen: boolean
	onMenuClick: () => void
	onLogin: () => void
	onLogout: () => void
	pageTitle: string
	pageIcon: IconProps['iconName']
	username?: string
}

export const NavBar: React.FC<NavBarProps> = ({
	isUserLoggedIn,
	isMenuOpen,
	onMenuClick,
	onLogin,
	onLogout,
	pageIcon,
	pageTitle,
	username,
}) => {
	return (
		<div className={styles.navBarWrapper}>
			<div className={styles.navTitleWrapper}>
				<Icon
					iconName={pageIcon}
					className={styles.navTitleIcon}
				/>
				<Title
					text={pageTitle}
					className={styles.navTitle}
				/>
			</div>
			<div className={styles.navMenuWrapper}>
				{isUserLoggedIn && username && (
					<Text className={styles.navBarUsername}>{username}</Text>
				)}
				<div className={styles.dropdownMenuWrapper}>
					<IconButton
						iconName="menu"
						onClick={onMenuClick}
					/>
					{isUserLoggedIn ? (
						<MenuModal
							variant="logout"
							onLogoutPress={onLogout}
							className={`${styles.menuBase} ${isMenuOpen ? styles.menuVisible : styles.menuHidden}`}
						/>
					) : (
						<MenuModal
							variant="login"
							onLoginPress={onLogin}
							className={`${styles.menuBase} ${isMenuOpen ? styles.menuVisible : styles.menuHidden}`}
						/>
					)}
				</div>
			</div>
		</div>
	)
}
