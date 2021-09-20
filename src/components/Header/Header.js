import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="menu">
                <a href="/home">Home</a>
                <a href="/LoadRestCountries">Load country</a>
                <a href="/about">About us</a>
            </nav>
        </div>
    );
};

export default Header;