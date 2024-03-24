import { createContext, ReactNode, useReducer } from 'react'
import { ContextProps, InitialContextType } from './types'
import { AppReducer } from './reducers'

const initialContextState: InitialContextType = {
	currentPageTitle: 'Home',
	currentPageIcon: 'home',
	username: '',
	isUserLoggedIn: false,
}

export const AppContext = createContext<ContextProps>({
	state: initialContextState,
	dispatch: () => {},
})

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(AppReducer, initialContextState)

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	)
}
