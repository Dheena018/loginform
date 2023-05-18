import { createContext, useEffect, useReducer, useState } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    currentUser : JSON.parse(localStorage.getItem("user")) || null,
    // userData : JSON.parse(localStorage.getItem('user')) || null,
};
export const userData = localStorage.getItem("user")
export const AuthContext = createContext(INITIAL_STATE);
export const AuthContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);


    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.currentUser))
    },[state.currentUser])

    return (
        <AuthContext.Provider value={{current: state.current, dispatch, userData}}>
            {children}
        </AuthContext.Provider>
    )
}