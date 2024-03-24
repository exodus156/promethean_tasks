type TitleProps = {
	children: React.ReactNode
}

export const Title: React.FC<TitleProps> = ({ children }) => {
	return <p className="text-5xl mt-6 mb-20 text-green-800">{children}</p>
}
