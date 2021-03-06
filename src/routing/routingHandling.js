import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import BrowsePage from '../pages/browsepage.js';
import history from '../constants/history';
import categoryPage from '../pages/categorypage.js';
import ProductGroupPage from '../pages/productgrouppage.js';
import ProductItemPage from '../pages/productItemPage.js';
import SearchPage from '../pages/searchpage.js'
import wishlistPage from '../pages/wishlistpage.js';

export class CustomRouter extends Component {

    render() {
        return (
            <Router history={history} >
                <Switch>
                    <Route exact path='/test/wishlist' component={wishlistPage}></Route>
                    <Route exact path='/test/search/:sort/:searchterm/:page' component={SearchPage}></Route>
                    <Route exact path='/test/search/:sort/:searchterm/:page/:item' component={ProductItemPage}></Route>
                    <Route exact path='/test' component={categoryPage}></Route>
                    <Route exact path='/test/:category' component={ProductGroupPage}></Route>
                    <Route exact path='/test/:category/:productgroup/:page' component={BrowsePage}></Route>
                    <Route exact path='/test/:category/:productgroup/:page/:item' component={ProductItemPage}></Route>
                </Switch>
            </Router>
        );
    }
}