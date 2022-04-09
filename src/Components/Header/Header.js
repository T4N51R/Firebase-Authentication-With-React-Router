import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav className='head'>
                <Link to='/'></Link>
                <Link to='/home'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>LogIn</Link>
            </nav>
        </div>
    );
};

export default Header;