import logoIcon from "../assets/cheerful-mexican-taco.svg";
import logoTitle from "../assets/title2.svg";
import accountIcon from "../assets/user-regular.svg"
import { Link } from "react-router-dom";

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useAccountContext from "../stores/useContext";

export const NavBarComp = () => {
    // NOTE VARIABLES AND STATES
    const { currentAccountUser } = useAccountContext();
  
    // NOTE FUNCTIONS
  
    // NOTE RETURNS
    return (
        <>
        <Navbar style={{backgroundColor: "black"}} expand="xl">
          <Container>
            <Navbar.Brand as={Link} style={{color: "white"}} to={'/'}>
              <Image style={{width: "200px", height: "200px"}} src={logoIcon} fluid />
              <Image style={{width: "200px", height: "200px"}} src={logoTitle} fluid />
            </Navbar.Brand>
            <Navbar.Toggle style={{backgroundColor: "white"}} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse style={{justifyContent: "end"}} id="">
              <Nav className="bayon-regular navbar-nav2">
                <Nav.Link as={Link} className="nav-link-zrb link-active" to={'/signup'} >Sign Up</Nav.Link>
                <Nav.Link as={Link} style={{marginLeft: "20px", marginRight: "20px"}} className="nav-link-zrb link-active" to={'/login'} >Login</Nav.Link>
                <Nav.Link as={Link} className="nav-link-zrb-2" id="nav-link-zrb-s" to={'/account'} >
                  <Image style={{width: "30px", height: "30px"}} src={accountIcon} fluid />
                  <span >{currentAccountUser.firstName}</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    )
  }

  export default NavBarComp;