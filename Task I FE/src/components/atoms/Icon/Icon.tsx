import HomeIcon from "assets/icons/home.svg?react"
import ReactIcon from "assets/icons/react.svg?react"
import TypescriptIcon from "assets/icons/typescript.svg?react"

type IconNames = "home" | "react" | "typescript"

export type IconProps = {
	iconName: IconNames
}

export const Icon: React.FC<IconProps> = ({ iconName }) => {
	switch (iconName) {
		case "home":
			return <HomeIcon />
		case "react":
			return <ReactIcon />
		case "typescript":
			return <TypescriptIcon />
	}
}