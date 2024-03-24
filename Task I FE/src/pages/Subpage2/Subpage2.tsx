import { Link } from 'react-router-dom'
import './Subpage2.module.scss'

export const Subpage2 = () => {
	return (
		<div className="flex flex-column h-full w-full">
			<p>SubPage2</p>
			<Link to="/">Home</Link>
			<Link to="/subpage1">Subpage1</Link>
		</div>
	)
}
