import { Icon, IconProps } from "components/atoms/Icon"

export type IconButtonProps = {
	iconName: IconProps["iconName"]
	onClick: () => void
}

export const IconButton: React.FC<IconButtonProps> = ({
	iconName,
	onClick,
}) => {
	return (
		<div role="button" tabIndex={0} onClick={onClick}>
			<Icon iconName={iconName} />
		</div>
	)
}