type TitleProps = {
	children: React.ReactNode
}

export const Title: React.FC<TitleProps> = ({ children }) => {
	return <p className="text-5xl my-4 text-green-800">{children}</p>
}
