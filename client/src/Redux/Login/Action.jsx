export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCES = "LOGIN_SUCCES";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT"


export const loginLoading = () => ({
    type : LOGIN_LOADING
})

export const loginSucces = (payload) => ({
    type : LOGIN_SUCCES,
    payload
})

export const loginFail = () => ({
    type : LOGIN_FAIL
})

export const logout = () => ({
    type : LOGOUT
})