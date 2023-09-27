import React, { Component } from "react";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";

import Login from "./components/login";
import User from './components/user';

//import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/user" component={User} />
                </Switch>
            </Router>
        )
    }
}