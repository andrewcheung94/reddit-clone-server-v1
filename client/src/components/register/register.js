import React, { useState } from 'react';
import './register.css';
import { useDispatch } from 'react-redux';

import { registerUser } from '../../redux/actions/userActions';
import { useHistory } from 'react-router-dom';

const Register = () => {

    const [usernameInput, setUsernameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: usernameInput,
            email: emailInput ,
            password: passwordInput
        };
        console.log(registerUser(user));
        dispatch(registerUser(user));
        history.push("/");
    };


    return ( 
        <form className="register-form-container">
            <div className="register-form-username">
                <label>Username</label>
                <input 
                    className="register-form__username-input" 
                    type="text"
                    value={ usernameInput }
                    onChange={ e => setUsernameInput(e.target.value) }
                />
            </div>

            <div className="register-form-email">
                <label>Email</label>
                <input 
                    className="register-form__email-input" 
                    type="email" 
                    value={ emailInput }
                    onChange={ e => setEmailInput(e.target.value) }
                />
            </div>

            <div className="register-form-password">
                <label>Password</label>
                <input 
                    className="register-form__password-input" 
                    type="password" 
                    value={ passwordInput }
                    onChange={ e => setPasswordInput(e.target.value) }
                />
            </div>

            <input type="submit" value="Register" onClick={(e) => handleSubmit(e)} />
        </form>
    );
}

export default Register;