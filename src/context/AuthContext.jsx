import {createContext, useReducer, useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config'

export const AuthContext = createContext()


const contextProvider = (state, action) => {
    switch(action.type) {
        case "SIGNIN":
            return {...state, user: action.payload}
        case "AUTH_READY": 
            return {...state, user: action.payload, authReady: true}
        default:
            return state
    }
}

function AuthContextProvider({children}) {
    const [state, dispatch] = useReducer(contextProvider, {
        user:null,
        authReady: false
    })

    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            dispatch({type: "AUTH_READY", payload: user })
        })
    }, [])

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export  { AuthContextProvider }