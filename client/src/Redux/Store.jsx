import {createStore} from "redux"

import { reducer } from "./Login/Reducer"

export const store = createStore(
    reducer
)