import React from "react";
import image from "../components/assets/logo.png"

function Header() {
    return (

        <header id="header">
            <img src={image} alt="logo" />

            <h1>Investment Calculator</h1>

        </header>
            
        
    )
}

export default Header; 