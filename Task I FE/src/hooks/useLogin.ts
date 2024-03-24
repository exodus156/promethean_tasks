import { useAppContext } from './useAppContext'

export const useLogin = () => {
	const { dispatch } = useAppContext()

	const handleLogin = async () => {
		fetch('https://localhost:5000/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				login: 'Username',
				password: 'Pass',
			}),
		})
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.error(err)
			})
			.finally(() => {
				dispatch({ type: 'LOGIN' })
			})
	}

	const handleLogout = async () => {
		fetch('https://localhost:5000/logout')
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.error(err)
			})
			.finally(() => {
				dispatch({ type: 'LOGOUT' })
			})
	}

	return {
		handleLogin,
		handleLogout,
	}
}
