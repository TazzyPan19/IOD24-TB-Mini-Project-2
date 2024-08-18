import React from "react"

export const ContactForm = () => {
    // NOTE VARIABLES AND STATES

    // NOTE FUNCTIONS
  
    // NOTE RETURNS
    return (
        <div className="content-body-wrapper-contact">
            <h2 className="bayon-regular">Contact Us</h2>
            <div className="content-body">
                <div className="test-api" style={{display: "flex"}}>
                    <form style={{width: "50%", height: "600px"}}>
                    <div>
                        <p className="contacts-title">Name</p>
                    </div>
                    <div>
                        <input className="contacts-input" type="text" placeholder="John Doe" /> 
                    </div>
                    <div>
                        <p className="contacts-title">Email</p>
                    </div>
                    <div>
                        <input className="contacts-input-long" type="email" placeholder="john.doe24@awesomemail.com.au" pattern="/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;" />
                    </div>
                    <div>
                        <p className="contacts-title">Message</p>
                    </div>
                    <div>
                        <textarea className="" type="text" placeholder="I think birds are extraordinary!"></textarea>
                    </div>
                    <div style={{margin:"30px 0px 0px 0px"}}>
                        <button type="submit" className="btn-style-2">Submit Message</button>
                    </div>
                    </form>
                    <div style={{width:" 50%", height: "600px"}}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;