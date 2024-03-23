import { Link } from "react-router-dom"
import "./Home.module.scss"

export const Home = () => {
	return (
		<div className="flex flex-column h-full w-full">
			<p>
				HOME
			</p>
			<Link to="/subpage1">Subpage1</Link>
			<Link to="/subpage2">Subpage2</Link>
		</div>
	)
}