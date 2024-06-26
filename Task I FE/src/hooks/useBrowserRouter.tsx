import { Home, Subpage1, Subpage2 } from 'pages'
import { useMemo } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

export const useBrowserRouter = () => {
	const router = useMemo(
		() =>
			createBrowserRouter([
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/subpage1',
					element: <Subpage1 />,
				},
				{
					path: '/subpage2',
					element: <Subpage2 />,
				},
				{
					path: '*',
					element: (
						<Navigate
							to="/"
							replace
						/>
					),
				},
			]),
		[],
	)

	return {
		router,
	}
}
