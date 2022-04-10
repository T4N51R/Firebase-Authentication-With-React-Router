import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'


const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='header'>
            <nav className='head'>
                <Link to='/'></Link>
                <Link to='/home'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/reviews'>Reviews</Link>
                {/* <Link to='/register'>Register</Link> */}

                <span>{user?.displayName && user.displayName}</span>
                {user?.uid ?
                    <button onClick={() => signOut(auth)} >Sign Out</button>
                    :
                    <Link to='/login'>LogIn</Link>
                }
            </nav>
        </div>
    );
};

export default Header;