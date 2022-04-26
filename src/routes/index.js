import React from 'react';
import { Switch, Route } from "react-router-dom"

import Home from '../pages/home';
import Login from '../pages/login';

function Router() {
    return (
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/home/:nome" component={Home}></Route>

        </Switch>
    )
}

export default Router;
