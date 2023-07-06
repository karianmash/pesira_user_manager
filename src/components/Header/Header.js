import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
    return (
        <header>
            <div className='logo'>
                <Link to="/"><img src="/logo.png" alt="logo" /></Link>
            </div>

            <div className="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/create-user">Create User</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;