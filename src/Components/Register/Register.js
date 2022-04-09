import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>This Is Register</h1>
            <form >
                <label >
                    Name:
                    <input type="text" placeholder='Enter Your Name' />
                </label>
                <br />
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
        </div>
    );
};

export default Register;