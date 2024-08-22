import React, { useState } from "react";
import useAccountContext from "../stores/useContext";

import exclamMark from "../assets/circle-exclamation-solid.svg";
import checkMark from "../assets/check-solid.svg";

import { Alert, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export const SignupForm = () => {
    // NOTE VARIABLES AND STATES
    const { handleUpdateAccount } = useAccountContext();

    const [firstName, setFirstName] = useState('First Name');
    const [lastName, setLastName] = useState('Last Name');
    const [email, setEmail] = useState('Enter Email');
    const [password, setPassword] = useState('Password');
    const [hasSubmit, setHasSubmit] = useState(false);
    const [alertMessage, setAlertMessage] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);

    // NOTE FUNCTIONS
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmitUser = (e) => {
        e?.preventDefault();
        setHasSubmit(true);

        handleUpdateAccount({ firstName: firstName, lastName: lastName, email: email, password: password })

        console.log("User Profile: ", firstName, lastName, email, password);
    }

    const displayAlertMessage = () => {
        return hasSubmit ? (
            <Alert style={{display: "flex", width: "600px", marginTop: "1rem"}} variant="success">
                <img style={{width: "30px", height: "30px", marginRight: "10px"}} src={checkMark} alt={''} />
                <p className="outfit-regular-16" style={{marginBottom: "0px"}} > You have successfully signed up! Congratulation!</p>
            </Alert>
             ) : (
                 <></>
                // if (hasSubmit) {
                //     return (
                //         <Alert style={{display: "flex", width: "600px", marginTop: "1rem"}} variant="danger">
                //             <img style={{width: "30px", height: "30px", marginRight: "10px"}} src={exclamMark} alt={''} />
                //             <p className="outfit-regular-16" style={{marginBottom: "0px"}} > Unsuccessful completion! Try entering all required fields.</p>
                //         </Alert>
                //     )
                // }
             ) 
    }
  
    // NOTE RETURNS
    return (
        <>  
            <div className="content-body-wrapper-login">
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div style={{height: "600px", width: "600px", backgroundColor: "#fffedd"}}>
                        <Form style={{padding: "20px", color: "black"}} >
                            <div>
                                <h2 style={{textAlign: "center"}} className="bayon-regular">Sign Up</h2>
                            </div>
                            <Form.Group className="mb-3 bayon-regular">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control maxLength={10} onChange={handleFirstNameChange} className="outfit-regular-20" type="text" placeholder={firstName} />
                            </Form.Group>
                            <Form.Group className="mb-3 bayon-regular">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={handleLastNameChange} className="outfit-regular-20" type="text" placeholder={lastName} />
                            </Form.Group>
                            <Form.Group className="mb-3 bayon-regular" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={handleEmailChange} className="outfit-regular-20" type="email" placeholder={email} pattern="/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;" />
                            </Form.Group>
                            <Form.Group className="mb-3 bayon-regular" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={handlePasswordChange} className="outfit-regular-20" type="password" placeholder={password} />
                            </Form.Group>
                            <Form.Group className="mb-3 outfit-regular-20" controlId="formBasicCheckbox">
                                <Form.Check style={{fontSize: "16px"}} type="checkbox" label="By checking this you will be subscribed to our newsletters." />
                            </Form.Group>
                            <div style={{margin: "40px 0px 0px 0px"}} className="bayon-regular">
                                <Button style={{fontSize: "22px"}} className="btn" onClick={handleSubmitUser} type="submit">
                                    Sign Up {'>'}
                                </Button>
                            </div>
                        </Form>
                    </div> 
                </div>
                <div className="" style={{display: "flex", justifyContent: "center"}}>
                    {displayAlertMessage()}
                </div>
            </div>
        </>
    )
}

export default SignupForm;