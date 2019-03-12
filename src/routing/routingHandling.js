import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BrowsePage from '../pages/browsepage.js';

export class CustomRouter extends Component {

    render() {
        return (
            <Router >
                <Switch>
                    <Route exact path='/browse/:productgroup/:page' component={BrowsePage}></Route>
                </Switch>
            </Router>            
        );
    }
}