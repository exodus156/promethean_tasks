export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				isUserLoggedIn: true,
				username: import.meta.env.VITE_USERNAME || 'Unknown username',
			}
		case 'LOGOUT':
			return {
				...state,
				isUserLoggedIn: false,
				username: '',
			}
		case 'CHANGE_PAGE':
			return {
				...state,
				currentPageTitle: action.payload.pageTitle,
				currentPageIcon: action.payload.pageIcon,
			}
	}
}
