import HomeIcon from 'assets/icons/home.svg?react'
import ReactIcon from 'assets/icons/react.svg?react'
import TypescriptIcon from 'assets/icons/typescript.svg?react'
import MenuIcon from 'assets/icons/menu.svg?react'
import styles from './Icon.module.scss'

type IconNames = 'home' | 'react' | 'typescript' | 'menu'

export type IconProps = {
	iconName: IconNames
	className?: string
}

export const Icon: React.FC<IconProps> = ({ iconName, className = '' }) => {
	switch (iconName) {
		case 'home':
			return (
				<HomeIcon
					className={`${styles.icon} ${styles.iconStroke} ${className}`}
					title="home-icon"
				/>
			)
		case 'react':
			return (
				<ReactIcon
					className={`${styles.icon} ${styles.iconFill} ${className}`}
					title="react-icon"
				/>
			)
		case 'typescript':
			return (
				<TypescriptIcon
					className={`${styles.icon} ${styles.iconFill} ${className}`}
					title="typescript-icon"
				/>
			)
		case 'menu':
			return (
				<MenuIcon
					className={`${styles.icon} ${styles.iconStroke}`}
					title="menu-icon"
				/>
			)
	}
}
