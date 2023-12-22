import React from "react";
import about from "../images/about.jpg"

export const About = () => {

    return(
        <div className="container">
            <h1>Connect with us</h1>
            <div className="homePage">
                <img className="img"  src={ about } alt="home"/>
                <p className="text">Our store is the bigest in Armenia and we have everything you need for comfortable life.
                We have the friendlies employees, and the most comfortable prices. You will never leave us empty-handed,
                    and will definitely return to us for new purchases. Аnd we will monitor new technologies and offer
                    you the highest quality products </p>

            </div>
        </div>

    )
}