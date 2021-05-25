import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginContainer from "../components/loginContainer/loginContainer";

const LoginPage = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <LoginContainer />
                </Route>
            </Switch>
        </div>
    );
};

export default LoginPage;
