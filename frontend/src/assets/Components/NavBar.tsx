import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gradient-to-r from-red-500 to-white p-4 shadow-lg">
            <ul className="flex justify-center space-x-8">
                <li>
                    <Link 
                        to="/" 
                        className="text-white hover:text-gray-700 font-semibold text-lg transition-colors duration-300"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/login" 
                        className="text-white hover:text-gray-700 font-semibold text-lg transition-colors duration-300"
                    >
                        Login
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/register" 
                        className="text-white hover:text-gray-700 font-semibold text-lg transition-colors duration-300"
                    >
                        Register
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
