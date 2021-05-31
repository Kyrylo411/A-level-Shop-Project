export const loginAction = (login) => {
	return {
		type : 'LOG_IN',
		payload : login
	}
}
export const logoutAction = () => {
	return {
		type : 'LOG_OUT'
	}
}