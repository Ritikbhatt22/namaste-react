import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
 
const Header = () => {
    let [btnName, setBtnState] = useState("Login");

    return (
        <div className = "Header">
            <div className='logo-container'>
                <img className = "logo-img" src = {LOGO_URL}></img>
            </div>
            <div className='nav-container'>
                <ul className='nav-Items'>
                    <li><Link  to="/">Home</Link></li>
                    <li><Link to="/about">About US</Link></li>
                    <li><Link to="/contact">Contact US</Link></li>
                    <li>Cart</li>  
                    <button className="login-btn" 
                    onClick={ () => {
                        (btnName == "Login") ? setBtnState("Logout") : setBtnState("Login");
                    }
                    }>{btnName}</button>
                </ul>
                
            </div>
        </div>
    )
}

export default Header;