import React from "react"
import { Button } from "react-bootstrap";

export const ContactForm = () => {
    // NOTE VARIABLES AND STATES

    // NOTE FUNCTIONS
  
    // NOTE RETURNS
    return (
        <div className="content-body-wrapper-contact">
            <div className="content-body">
            <h2 className="bayon-regular">Contact Us</h2>
                <div className="content-body-flex">
                    <form style={{width: "50%"}}>
                        <div>
                            <p className="contacts-title bayon-regular">Name</p>
                        </div>
                        <div>
                            <input className="contacts-input" type="text" placeholder="John Doe" /> 
                        </div>
                        <div>
                            <p className="contacts-title bayon-regular">Email</p>
                        </div>
                        <div>
                            <input className="contacts-input" type="email" placeholder="john.doe24@awesomemail.com.au" pattern="/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;" />
                        </div>
                        <div>
                            <p className="contacts-title bayon-regular">Message</p>
                        </div>
                        <div>
                            <textarea className="contacts-input-long" type="text" placeholder="I think birds are extraordinary!"></textarea>
                        </div>
                        {/* <div style={{margin:"30px 0px 0px 0px"}}>
                            <button type="submit" className="btn-style-2">Submit Message</button>
                        </div> */}
                        <div style={{margin: "460px 0px 0px 0px"}} className="bayon-regular">
                            <Button style={{fontSize: "22px"}} className="btn" type="submit">
                                Send Message {'>'}
                            </Button>
                        </div>
                    </form>
                    <div style={{width: "50%"}}>
                        <div>
                            <p className="bayon-regular">Phone</p>
                            <p className="outfit-regular-20">+1 123 456 1234</p>
                        </div>
                        <div>
                            <p className="bayon-regular">Email</p>
                            <p className="outfit-regular-20">contact@zestyrecipe-bites.com.au</p>
                        </div>
                        <div>
                            <p className="bayon-regular">Location</p>
                            <p className="outfit-regular-20">Australia, WA, Perth</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;