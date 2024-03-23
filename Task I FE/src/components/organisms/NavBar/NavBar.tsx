import { IconProps } from "components/atoms"

export type NavBarProps = {
	isUserLoggedIn: boolean
	pageTitle: string
	pageIcon: IconProps["iconName"]
}

export const NavBar: React.FC<NavBarProps> = ({
	isUserLoggedIn,
	pageIcon,
	pageTitle
}) => {
	return (
		<div>
			{isUserLoggedIn}
			{pageIcon}
			{pageTitle}
		</div>
	)
}