import { Link } from 'react-router-dom'
import './Subpage1.module.scss'

export const Subpage1 = () => {
	return (
		<div className="flex flex-column h-full w-full">
			<p>SubPage1</p>
			<Link to="/">Home</Link>
			<Link to="/subpage2">Subpage2</Link>
		</div>
	)
}
