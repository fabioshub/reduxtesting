import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {ConnectedRouter as Router} from 'connected-react-router';
import BrowsePage from '../pages/browsepage.js';
import history from '../constants/history';

export class CustomRouter extends Component {

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/browse/:productgroup/:page' component={BrowsePage}></Route>
                </Switch>
            </Router>            
        );
    }
}