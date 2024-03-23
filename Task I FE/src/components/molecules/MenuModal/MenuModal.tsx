import { Button, MenuModalItem } from "components/atoms"

export type MenuModalProps = {
	variant: "login" | "logout"
	onLoginPress: () => void
	onLogoutPress: () => void
}

export const MenuModal: React.FC<MenuModalProps> = ({
	variant,
	onLoginPress,
	onLogoutPress
}) => {
	switch (variant) {
		case "login":
			return (
				<MenuModalItem>
					<Button text="Login" onClick={onLoginPress} />
				</MenuModalItem>
			)
		case "logout":
			return (
				<MenuModalItem>
					<Button text="Logout" onClick={onLogoutPress} />
				</MenuModalItem>
			)
	}
}