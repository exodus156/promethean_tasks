export type InitialContextType = {
	currentPageTitle: string
	currentPageIcon: string
	username: string
	isUserLoggedIn: boolean
}

export type ContextProps = {
	state: InitialContextType
	dispatch: React.Dispatch<any>
}
