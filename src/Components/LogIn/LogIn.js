import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const LogIn = () => {
    const { signInWithGoogle, } = useFirebase()
    return (
        <div>
            <h1>This is LogIn</h1>
            <form >

                <label >
                    Email:
                    <input type="email" placeholder='Enter Your Email' />
                </label>
                <br />
                <label >
                    Password:
                    <input type="password" placeholder='Enter Your Password' />
                </label>
                <br />
                <input type="submit" value="Sign Up" />
            </form>
            <button onClick={signInWithGoogle}> Sign In With Google</button>
        </div>
    );
};

export default LogIn;