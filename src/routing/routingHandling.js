import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {ConnectedRouter as Router} from 'connected-react-router';
import BrowsePage from '../pages/browsepage.js';
import history from '../constants/history';
import categoryPage from '../pages/categorypage.js';
import ProductGroupPage from '../pages/productgrouppage.js';

export class CustomRouter extends Component {

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={categoryPage}></Route>
                    <Route exact path='/:category' component={ProductGroupPage}></Route>
                    <Route exact path='/:category/:productgroup/:page' component={BrowsePage}></Route>
                </Switch>
            </Router>            
        );
    }
}