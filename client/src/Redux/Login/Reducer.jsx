import { LOGIN_LOADING, LOGIN_SUCCES, LOGIN_FAIL } from "./Action";

const initState = {
    isLoading: false,
    isAuth: false,
    isError: false,
    data: []
}

export const reducer = (store = initState, { type, payload }) => {
    console.log("store" , store)
    switch (type) {
        case LOGIN_LOADING:
            return { ...store, isLoading: true }

        case LOGIN_SUCCES:
            return { ...store, isLoading: false, isAuth: true, data: payload }

        case LOGIN_FAIL:
            return { ...store, isLoading: false, isAuth: false, isError: true }

        default:
            return store
    }
}