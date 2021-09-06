import React from 'react';
import './Login.css';


function login() {
    return (
        <div className='loginPage'>
            <div className='card'>
                <div className='title'>
                    <h1>Adventor</h1>
                    <p>Explore the infinity</p>
                </div>
                <div className='login_signup'>
                    <button className='button' data-hover='login'><div><i className="fab fa-google"></i>Sign Up</div ></button>
                </div>
            </div>

        </div>
    )
}

export default login
