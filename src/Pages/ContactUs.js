import React from "react";
import homeImg from "../images/contactus.jpg"

export const ContactUs = () => {

    return(
        <div className="container">
            <h1>Connect with us</h1>
            <div className="homePage">
                <img className="img"  src={ homeImg } alt="home"/>
                <div className="contacts">
                    <p className="text">Our call center is available 24/7. Our employees will answer your question with big pleasure</p>
                    <p className="text">Email: techstore@gmail.com</p>
                    <p className="text">Mobile: xxx xxx xxx</p>
                </div>

            </div>
        </div>

    )
}