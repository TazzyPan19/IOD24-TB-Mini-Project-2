import React from "react"
import useAccountContext from "../stores/useContext";

export const Account = () => {
    // NOTE VARIABLES AND STATES
    const { currentAccountUser } = useAccountContext();

    // NOTE FUNCTIONS
  
    // NOTE RETURNS
    return (
        <div className="content-body-wrapper">
            <h2 className="bayon-regular">Account Page. No content here yet. {currentAccountUser.name}</h2>
        </div>
    )
}

export default Account;