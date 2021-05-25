import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/actions/userActions";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/userActions";
import "./login.css";

//history.push('/home')

const Login = () => {
    const [loginEmailInput, setLoginEmailInput] = useState("Sincere@april.biz");
    const [loginPasswordInput, setLoginPasswordInput] = useState("password1");
    const [usernameInput, setUsernameInput] = useState("");

    const [registerEmailInput, setRegisterEmailInput] = useState("");
    const [registerPasswordInput, setRegisterPasswordInput] = useState("");

    const [redboxClass, setRedboxClass] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    useEffect(() => {
        // console.log("test");
        // console.log(isLoggedIn);
        if (isLoggedIn) {
            history.push("/home");
        }
    }, [isLoggedIn, history]);

    const handleUserLogin = (e) => {
        e.preventDefault();
        dispatch(userLogin(loginEmailInput, loginPasswordInput));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: usernameInput,
            email: registerEmailInput,
            password: registerPasswordInput,
        };
        dispatch(registerUser(user));
        history.push("/");
    };

    const toggleRedbox = (e) => {
        e.preventDefault();
        if (redboxClass === "") {
            setRedboxClass("right-panel-active");
        } else if (redboxClass === "right-panel-active") {
            setRedboxClass("");
        }
    };
    return (
        <div className="form-outer-container">
        <div className={`form-container ${redboxClass}`}>
            <form action="" className="loginContainer">
                <div className="title-container">
                    <h1>Sign In</h1>
                </div>
                <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email"
                    value={loginEmailInput}
                    onChange={(e) => setLoginEmailInput(e.target.value)}
                />
                <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Password"
                    value={loginPasswordInput}
                    onChange={(e) => setLoginPasswordInput(e.target.value)}
                />
                <input
                    className="loginBtn"
                    type="submit"
                    value="Login"
                    onClick={(e) => handleUserLogin(e)}
                />
            </form>

            <form className="register-form-container">
                <div className="register-container">
                    <h1>Register</h1>
                </div>
                <div className="register-form__username">
                    <label>Username:</label>
                    <input
                        type="text"
                        className="register-form__username-input"
                        value={usernameInput}
                        onChange={(e) => setUsernameInput(e.target.value)}
                    />
                </div>

                <div className="register-form__email">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="register-form__email-input"
                        value={registerEmailInput}
                        onChange={(e) => setRegisterEmailInput(e.target.value)}
                    />
                </div>
                <div className="register-form__password">
                    <label>Password:</label>
                    <input
                        type="password"
                        className="register-form__password-input"
                        value={registerPasswordInput}
                        onChange={(e) =>
                            setRegisterPasswordInput(e.target.value)
                        }
                    />
                </div>
                <input
                    className="registerBtn"
                    type="submit"
                    value="Register"
                    onClick={(e) => handleSubmit(e)}
                />
            </form>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>
                            To keep connected with us please login with your
                            personal info
                        </p>
                        <button
                            className="form-toggle-btn"
                            id="signIn"
                            onClick={(e) => toggleRedbox(e)}
                        >
                            Sign In
                        </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>
                            Enter your personal details and start journey with
                            us
                        </p>
                        <button
                            className="form-toggle-btn"
                            id="signUp"
                            onClick={(e) => toggleRedbox(e)}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;
