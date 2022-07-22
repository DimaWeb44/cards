import {applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleware from 'redux-thunk'
import {recoverPasswordReducer} from "./recoverPasswordReducer";
import {newPasswordReducer} from "./newPasswordReducer";
import {profileReducer} from "./profileReducer";
import {signUpReducer} from "./signUpReducer";
import {signInReducer} from "./signInReducer";


const rootReducer = combineReducers({
    signUp: signUpReducer,
    signIn: signInReducer,
    profile: profileReducer,
    recoverPassword: recoverPasswordReducer,
    newPassword: newPasswordReducer,
})

export const  store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducer>
