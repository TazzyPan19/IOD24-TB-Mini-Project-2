import React from "react";

export const FaqPage = () => {
    // NOTE VARIABLES AND STATES

    // NOTE FUNCTIONS
  
    // NOTE RETURNS
    return (
        <div className="content-body-wrapper-faq">
            <div style={{background: "#fffedd", padding: "60px"}}>
                <h2 style={{margin: "0px 0px 40px 0px"}} className="bayon-regular">Frequently Asked Questions</h2>

                <h4 className="bayon-regular">Will there be any other implementations? And if so when?</h4>
                <p style={{margin: "0px 0px 40px 0px"}} className="outfit-regular-20">Yes, there will be many features to implement still. We are hoping to
                    add custom recipes so users can create thier own or from exisiting recipes. Later down the track we will implement a blogging page for users
                    to share thier cooking journey.</p>

                <h4 className="bayon-regular">Why does support come up with a missing page? A 404 Error?</h4>
                <p style={{margin: "0px 0px 40px 0px"}} className="outfit-regular-20">The support page on your site is not yet introduced, it is still in early
                    development. We trying to search for another team member to partically work on his feature.</p>

                <h4 className="bayon-regular">What is the account page for?</h4>
                <p style={{margin: "0px 0px 40px 0px"}} className="outfit-regular-20">Ohh this will be for users who would subscribe to our service, but
                    we have not fully implemented it yet. When it is up running users will be able to access their blogs, recipes, and collections. On an
                    account you can modify or control the way you like, and you can delete it with nothing holding you back. </p>
            </div>
        </div>
    )
}

export default FaqPage;