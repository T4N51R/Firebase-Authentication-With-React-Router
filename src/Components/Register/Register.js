import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate, } from 'react-router-dom';
import auth from '../../firebase.init';
const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const nevigate = useNavigate()
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    if (user) {
        nevigate('/')
    }

    const handleEmailblur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordblur = event => {
        setPassword(event.target.value)
    }
    const handleconfirmPasswordblur = event => {
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Password Doesn,t Match');
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'> Create An Account</h1>
                <form onSubmit={handleCreateUser}>
                    <div className='form-input-group'>
                        <label htmlFor="text">Name :</label>
                        <input type="text" name='text' placeholder='Enter Your Name' required />
                    </div>
                    <div className='form-input-group'>
                        <label htmlFor="email">Email :</label>
                        <input onBlur={handleEmailblur} type="email" name='email' placeholder='Enter Your Email' />
                    </div>
                    <div className='form-input-group'>
                        <label htmlFor="password">Password :</label>
                        <input onBlur={handlePasswordblur} type="password" name='password' placeholder='Enter Your Password' required />

                    </div>
                    <div className='form-input-group'>
                        <label htmlFor="confirm-password">Confirm Password :</label>
                        <input onBlur={handleconfirmPasswordblur} type="password" name='confirm-password' placeholder='Enter Your Password' required />
                    </div>
                    <p>{error}</p>
                    <input className='submit-btn' type="submit" value="Sign Up" />
                </form>
                <p className='form-link-p'>
                    Have An Account? <Link className='form-link'
                        to='/login'>Log In
                    </Link>
                </p>

                <button className='submit-btn-xxx' onClick={() => signInWithGoogle()}> Sign In With Google</button>
            </div>

        </div >
    );
};

export default Register;