type TextSize = 'sm' | 'base' | 'lg' | 'xl'

export type TextProps = {
	children: string
	size?: TextSize
	className?: string
}

export const Text: React.FC<TextProps> = ({
	children,
	size = 'base',
	className,
}) => {
	return <span className={`text-${size} ${className}`}>{children}</span>
}
