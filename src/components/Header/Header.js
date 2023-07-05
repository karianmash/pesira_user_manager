import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <div className='logo'>
                <img src="/logo.png" alt="logo" />
            </div>

            <div className='menu'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Create User</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;