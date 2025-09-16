import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContextT from '../utils/UserContextT';
import { useSelector } from "react-redux";

const Header = () => {
    let [btnName, setBtnState] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContextT);
    
    // Subscribing to the store using selector.
    const cartItems = useSelector((store) => store.cart.items);
    // console.log("cart items"+cartItems);
    return (
        <header className="flex justify-between items-center bg-gradient-to-r from-pink-200 via-pink-100 to-pink-50 shadow-xl rounded-xl py-4 px-8 mb-6">
            <div className="logo-container flex items-center">
                <img
                    className="w-40 h-auto rounded-lg shadow-md border-4 border-pink-300"
                    src={LOGO_URL}
                    alt="Logo"
                />
            </div>
            <nav className="flex items-center">
                <ul className="flex gap-6 items-center text-lg font-medium text-gray-700">
                    <li className="flex items-center px-2">
                        <span className={`text-xl ${onlineStatus ? "text-green-500" : "text-red-500"}`}>
                            {onlineStatus ? "🟢" : "🔴"}
                        </span>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="hover:text-pink-600 transition-colors duration-200"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="hover:text-pink-600 transition-colors duration-200"
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="hover:text-pink-600 transition-colors duration-200"
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/grossary"
                            className="hover:text-pink-600 transition-colors duration-200"
                        >
                            Grossary
                        </Link>
                    </li>
                    <li>
                        <span className="hover:text-pink-600 transition-colors duration-200 font-bold">
                            <Link to="/cart">
                                Cart({cartItems.length} items)
                            </Link>
                        </span>
                    </li>
                    <li>
                        <button
                            className="ml-4 px-5 py-2 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition duration-200 font-semibold"
                            onClick={() => {
                                btnName === "Login"
                                    ? setBtnState("Logout")
                                    : setBtnState("Login");
                            }}
                        >
                            {btnName}
                        </button>
                    </li>
                    <li>
                        <span className="hover:text-pink-600 transition-colors duration-200">
                            Cart
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;