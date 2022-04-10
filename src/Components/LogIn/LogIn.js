import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import './LogIn.css'
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/')
    }
    const handleEmailblur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordblur = event => {
        setPassword(event.target.value)
    }

    const hanldeLogIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'> Log In</h1>
                <form onSubmit={hanldeLogIn}>
                    <div className='form-input-group'>
                        <label htmlFor="email">Email :</label>
                        <input onBlur={handleEmailblur} type="email" placeholder='Enter Your Email' required />
                    </div>
                    <div className='form-input-group'>
                        <label htmlFor="password">Password :</label>
                        <input onBlur={handlePasswordblur} type="password" placeholder='Enter Your Password' required />
                    </div>
                    <p style={{ color: "red" }}>{error?.message}</p>
                    <p>{loading && 'Loading.....'}</p>
                    <input className='submit-btn' type="submit" value="Sign Up" />
                </form>
                <p className='form-link-p'>
                    New To website? <Link className='form-link'
                        to='/register'>Create An Account
                    </Link>
                </p>
                <button className='submit-btn-xxx' onClick={() => signInWithGoogle()}> Sign In With Google</button>
            </div>

        </div >
    );
};

export default LogIn;