import React, { useContext, createContext, useReducer } from "react";

export const AccountContext = createContext();

const userReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_ACCOUNT" : 
            return { ...state, currentAccountUser: action.payload } 
        case "TOGGLE_MODE" : 
            return { ...state, mode: state.mode === "light" ? "dark" : "light" }
        default:
            return state;
    }
}

const initialState = {
    currentAccountUser: { firstName: "Guest", lastName: "User", email: "guestuser@zestyrecipes.com", password: "helloworld" },
    mode: "light",
}

export const UserProvider = (props) => {
    const [state, dispatch] = useReducer(userReducer, initialState)

    const toggleMode = () => {
        dispatch({ type: "TOGGLE_MODE"})
    }

    const handleUpdateAccount = (user) => {
        dispatch({ type: "UPDATE_ACCOUNT", payload: user})
    }

    return (
        <AccountContext.Provider value={{...state, handleUpdateAccount, toggleMode}}>
            {props.children}
        </AccountContext.Provider>
    );
}

export const useAccountContext = () => {
    return useContext(AccountContext);
}

export default useAccountContext;