import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import {AboutScreen} from './AboutScreen';
import {HomeSccreem} from './HomeSccreem';
import {LoginScreen} from './LoginScreen';
import {NavBar} from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar/>
                <div className="container">
                <Switch>
                    <Route exact={true} path="/" component={HomeSccreem}/>
                    <Route exact={true} path="/about" component={AboutScreen}/>
                    <Route exact={true} path="/login" component={LoginScreen}/>
                    <Redirect to="/"/>
                </Switch>
                </div>
            
            </div>
        </Router>
    )
}
