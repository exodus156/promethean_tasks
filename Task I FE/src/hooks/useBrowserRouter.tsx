import { Home, Subpage1, Subpage2 } from "pages";
import {
	createBrowserRouter,
} from "react-router-dom";

export const useBrowserRouter = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/subpage1",
			element: <Subpage1 />
		},
		{
			path: "/subpage2",
			element: <Subpage2 />
		}
	])

	return {
		router
	}
}