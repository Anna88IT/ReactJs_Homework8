import React from "react";
import homeImg from "../images/Home.jpg"

export const Home = () => {

    return(
        <div className="container">
            <h1>Everything for your home</h1>
            <div className="homePage">
                <img className="img"  src={ homeImg } alt="home"/>
                <p className="text">At our store you can find everything for your home. Make
                    your place comfortable and fulfilled with our modern technology.
                Here you can find all the things you have searched so long</p>
            </div>
        </div>

    )
}