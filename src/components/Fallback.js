import React from "react"

export const Fallback = () => {
    // NOTE VARIABLES AND STATES
    const emoji = "😔";

    // NOTE FUNCTIONS
  
    // NOTE RETURNS
    return (
        <div className="content-body-wrapper-fall" style={{color: "black"}}>
            <h2 className="bayon-regular">{emoji} Error 404. Page Not Found!</h2>
             <div>
                <p className="outfit-regular-20" ><a href="/" >Please use this link to redirect you to our home page.</a></p>
            </div>  
        </div>  
    )
}

export default Fallback;