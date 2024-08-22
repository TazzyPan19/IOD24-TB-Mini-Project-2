import React, { useState } from "react"
import useAccountContext from "../stores/useContext";

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const LoginForm = () => {
    // NOTE VARIABLES AND STATES
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { currentAccountUser } = useAccountContext();

    // NOTE FUNCTIONS
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const loginVaildation = (e) => {
        e.preventDefault();
        if (e == undefined) {
            return console.log("Error can't read properties of 'e'");
        }

        if ( currentAccountUser.email === email && currentAccountUser.password === password) {
           return console.log("Welcome Back", currentAccountUser.firstName + "!");
        }
        console.log("clicked", currentAccountUser.email, currentAccountUser.password)
    }
  
    // NOTE RETURNS
    return (
        <div style={{display: "flex", justifyContent: "center"}} className="content-body-wrapper-login">
            <div style={{height: "600px", width: "600px", backgroundColor: "#fffedd"}}>
                <Form style={{padding: "20px"}} >
                    <div>
                        <h2 style={{textAlign: "center"}} className="bayon-regular">Login</h2>
                    </div>
                    <Form.Group className="mb-3 bayon-regular" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmailChange} className="outfit-regular-20" type="email" placeholder="Enter Email" pattern="/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;" />
                    </Form.Group>
                    <Form.Group className="mb-3 bayon-regular" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePasswordChange} className="outfit-regular-20" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Text style={{fontSize: "16px", color: "#000000"}} className="outfit-regular-20">
                        <Link className="fallback-link" to={"/support"}>
                            Forgot password? Click here to resolve.
                        </Link>
                    </Form.Text>
                    <div style={{margin: "240px 0px 0px 0px"}} className="bayon-regular fallback-link">
                        <Button style={{fontSize: "22px"}} className="btn" onClick={loginVaildation} type="submit">
                            Login {'>'}
                        </Button>
                    </div>
                </Form>
            </div> 
        </div>
    )
}

export default LoginForm;