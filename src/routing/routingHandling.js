import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BrowsePage from '../pages/browsepage.js';

export class CustomRouter extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/browse' component={BrowsePage}/>
                </div>
            </Router>            
        );
    }
}