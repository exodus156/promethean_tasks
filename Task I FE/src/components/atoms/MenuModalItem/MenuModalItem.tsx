export type MenuModalItemProps = {
	children: React.ReactNode
}

export const MenuModalItem: React.FC<MenuModalItemProps> = ({ children }) => {
	return (
		<div>
			{children}
		</div>
	)
}