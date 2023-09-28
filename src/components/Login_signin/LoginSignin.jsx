import './LoginSignin.css';
import React, { useState } from 'react';

import usericon from '../assets/person.png';
import emailicon from '../assets/email.png';
import passwordicon from '../assets/password.png';

export const LoginSignin = () => {

    const [action, setAction] = useState("Sign in");

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Log in" ? <div></div> : <div className='input'>
                    <img src={usericon} alt='' />
                    <input type='text' placeholder='Name...' />
                </div>}

                <div className='input'>
                    <img src={emailicon} alt='' />
                    <input type='email' placeholder='Email...' />
                </div>
                <div className='input'>
                    <img src={passwordicon} alt='' />
                    <input type='password' placeholder='Password...' />
                </div>
            </div>
            {action === "Sign in" ? <div></div> : <div className="forgot-password">Lost something??? <span>click me</span></div>}
            <div className="submit-container">
                <div className={action === "Log in" ? "submit gray" : "submit"} onClick={() => { setAction("Sign in") }}>Sign in</div>
                <div className={action === "Sign in" ? "submit gray" : "submit"} onClick={() => { setAction("Log in") }}>Log in</div>
            </div>
        </div>
    )
}
