import React from "react"
import githubIcon from "../assets/github-brands-solid.svg";
import facebookIcon from "../assets/facebook-brands-solid.svg";
import figmaIcon from "../assets/figma-brands-solid.svg";

export const FooterComp = () => {
    // NOTE VARIABLES AND STATES

    // NOTE FUNCTIONS
    
    // NOTE RETURNS
    return (
        <div style={{height: "400px", backgroundColor: "#fffedd", color: "black", borderTop: "6px solid"}}>
            <div style={{margin: "auto", width: "1600px", height: "100%"}}>
                <div className="footer-links-socials-container" style={{height:"80%"}}>
                    <div className="footer-guides">
                        <ul className="footer-links bayon-regular" style={{padding: "20px", listStyle: "none"}}>
                            <li><a className="footer-links" href="/accreditation">Accredition</a></li>
                            <li><a className="footer-links" href="/contact">Contact Us</a></li>
                            <li><a className="footer-links" href="/faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-guides">
                        <div style={{padding: "20px"}}>
                            <p className="bayon-regular" >Follow Us On Our Socials</p>
                            <div style={{display: "flex", justifyContent: "end"}}>
                                <a target="blank" href="https://github.com/TazzyPan19"><img className="socials-img-space socials-sizing" src={githubIcon} alt="Github Icon" /></a>
                                <a href="/facebook"><img className="socials-img-space socials-sizing" src={facebookIcon} alt="Facebook Icon"/></a>
                                <a href="/figma"><img className="socials-img-space socials-sizing" src={figmaIcon} alt="Figma Icon"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-guides" style={{display: "flex", alignItems: "flex-end", height: "20%"}}>
                    <p className="outfit-regular-20" style={{padding: "20px", marginBottom: "0rem"}}>Icons, data and images are used for educational purposes. All rights reserved by Zesty Recipe-Bites 2024.</p>
                </div>
            </div>
        </div>
        )
  }

  export default FooterComp;