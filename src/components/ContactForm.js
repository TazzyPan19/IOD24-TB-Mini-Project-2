import React from "react";

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
                            <p style={{marginBottom: "0px"}} className="contacts-title bayon-regular">Name</p>
                        </div>
                        <div>
                            <input className="contacts-input outfit-regular-20" type="text" placeholder="Name" /> 
                        </div>
                        <div>
                            <p style={{marginBottom: "0px"}} className="contacts-title bayon-regular">Email</p>
                        </div>
                        <div>
                            <input className="contacts-input outfit-regular-20 " type="email" placeholder="Email" pattern="/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;" />
                        </div>
                        <div>
                            <p style={{marginBottom: "0px"}} className="contacts-title bayon-regular">Message</p>
                        </div>
                        <div>
                            <textarea className="contacts-input-long outfit-regular-20" type="text" placeholder="Write a Message Here"></textarea>
                        </div>
                        {/* <div style={{margin:"30px 0px 0px 0px"}}>
                            <button type="submit" className="btn-style-2">Submit Message</button>
                        </div> */}
                        <div style={{margin: "40px 0px 0px 0px"}} className="bayon-regular">
                            <Button style={{fontSize: "22px"}} className="btn" type="submit">
                                Send Message {'>'}
                            </Button>
                        </div>
                    </form>
                    <div style={{color: "#000000", display: "flex", width: "50%"}}>
                        <div style={{borderRight: "4px #252525 solid", backgroundColor: "", width: "10%", height: "inherit"}}>      
                        </div>
                        <div style={{backgroundColor: "", width: "10%", height: "inherit"}}>      
                        </div>
                        <div style={{backgroundColor: "", width: "80%"}}>
                            <div>
                                <p style={{marginTop: "20px"}} className="bayon-regular">Phone</p>
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
        </div>
    )
}

export default ContactForm;